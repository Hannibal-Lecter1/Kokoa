import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch("https://formsubmit.co/ajax/jonathan@kokoafruits.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Some form backends require a realistic origin/referer
        "Origin": "https://kokoafruits.com",
        "Referer": "https://kokoafruits.com/",
      },
      body: JSON.stringify({
        company:  body.company,
        name:     body.name,
        email:    body.email,
        message:  body.message,
        _subject: `Kokoa B2B Inquiry — ${body.company}`,
        _cc:      "kevin@kokoafruits.com",
        _captcha: "false",
        _template: "table",
      }),
    });

    const text = await res.text();
    console.log("[contact] formsubmit status:", res.status, "body:", text.slice(0, 300));

    let data: Record<string, unknown> = {};
    try { data = JSON.parse(text); } catch { /* non-JSON — likely activation page */ }

    // formsubmit returns {"success":"true"} on success, or {"success":"false","message":"..."}
    const ok = data.success === "true" || data.success === true;
    return NextResponse.json({ success: ok, _debug: { status: res.status, body: text.slice(0, 200) } });

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[contact] fetch failed:", msg);
    return NextResponse.json({ success: false, _debug: { error: msg } }, { status: 500 });
  }
}
