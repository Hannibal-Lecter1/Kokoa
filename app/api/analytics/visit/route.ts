import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const runtime = "nodejs";

async function getCountry(ip: string): Promise<string> {
  if (ip === "127.0.0.1" || ip === "::1" || ip.startsWith("192.168.") || ip.startsWith("10.")) {
    return "Local";
  }
  try {
    const res = await fetch(`http://ip-api.com/json/${ip}?fields=country,status`, { signal: AbortSignal.timeout(3000) });
    const data = await res.json();
    return data.status === "success" ? data.country : "Unknown";
  } catch {
    return "Unknown";
  }
}

function getIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "Unknown";
}

// POST — create new visit
export async function POST(req: Request) {
  try {
    const { session_id } = await req.json();
    if (!session_id) return NextResponse.json({ ok: false }, { status: 400 });

    const ip = getIp(req);
    const country = await getCountry(ip);
    const now = Math.floor(Date.now() / 1000);
    const db = getDb();

    // Upsert visitor
    db.prepare(`
      INSERT INTO visitors (ip, country, first_seen, visit_count)
      VALUES (?, ?, ?, 1)
      ON CONFLICT(ip) DO UPDATE SET
        visit_count = visit_count + 1,
        country = excluded.country
    `).run(ip, country, now);

    // Insert visit (ignore if session already exists — double-mount guard)
    db.prepare(`
      INSERT OR IGNORE INTO visits (session_id, ip, country, started_at)
      VALUES (?, ?, ?, ?)
    `).run(session_id, ip, country, now);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[analytics/visit POST]", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

// PATCH — update duration and/or form_submitted
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { session_id, duration_sec, form_submitted } = body;
    if (!session_id) return NextResponse.json({ ok: false }, { status: 400 });

    const db = getDb();
    db.prepare(`
      UPDATE visits SET
        duration_sec   = COALESCE(?, duration_sec),
        form_submitted = CASE WHEN ? = 1 THEN 1 ELSE form_submitted END
      WHERE session_id = ?
    `).run(
      duration_sec   ?? null,
      form_submitted ? 1 : 0,
      session_id
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[analytics/visit PATCH]", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
