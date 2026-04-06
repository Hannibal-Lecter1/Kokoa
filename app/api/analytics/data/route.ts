import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const runtime = "nodejs";

const PASSWORD = process.env.ANALYTICS_PASSWORD ?? "kokoaadmin";

export async function GET(req: Request) {
  if (req.headers.get("x-analytics-key") !== PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const db = getDb();

    const visits = db.prepare(`
      SELECT
        v.id,
        v.session_id,
        v.ip,
        v.country,
        v.started_at,
        v.duration_sec,
        v.form_submitted,
        CASE WHEN vis.first_seen < v.started_at THEN 1 ELSE 0 END AS returning_visitor,
        vis.visit_count
      FROM visits v
      INNER JOIN visitors vis ON vis.ip = v.ip
      ORDER BY v.started_at DESC
      LIMIT 500
    `).all();

    const summary = db.prepare(`
      SELECT
        COUNT(*)                                              AS total_visits,
        COUNT(DISTINCT ip)                                    AS unique_ips,
        SUM(form_submitted)                                   AS total_form_submits,
        ROUND(AVG(CASE WHEN duration_sec IS NOT NULL THEN duration_sec END), 0) AS avg_duration_sec,
        ROUND(100.0 * SUM(form_submitted) / COUNT(*), 1)     AS conversion_pct
      FROM visits
    `).get();

    return NextResponse.json({ visits, summary });
  } catch (err) {
    console.error("[analytics/data GET]", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
