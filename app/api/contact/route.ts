import { NextResponse } from "next/server";
import { updateVisit } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const subject = body.type === "sample-request"
      ? `Sample Request — ${body.company}`
      : body.type === "distribution"
        ? `Distribution Inquiry — ${body.company}`
        : `LeKokoa B2B Inquiry — ${body.company}`;

    const res = await fetch("https://formsubmit.co/ajax/hello@kokoafruits.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Origin": "https://kokoafruits.com",
        "Referer": "https://kokoafruits.com/",
      },
      body: JSON.stringify({
        company:            body.company,
        name:               body.name,
        email:              body.email,
        country:            body.country ?? "",
        business_type:      body.businessType ?? "",
        products_interest:  body.productsOfInterest ?? "",
        message:            body.message,
        _subject: subject,
        _cc:      "kevin@kokoafruits.com",
        _captcha: "false",
        _template: "table",
      }),
    });

    const text = await res.text();
    let data: Record<string, unknown> = {};
    try { data = JSON.parse(text); } catch { /* non-JSON */ }

    const ok = data.success === "true" || data.success === true;
    const needsActivation =
      typeof data.message === "string" &&
      data.message.toLowerCase().includes("activation");

    if ((ok || needsActivation) && body.session_id) {
      try { updateVisit(body.session_id, undefined, true); } catch { /* never break form */ }
    }

    return NextResponse.json({ success: ok || needsActivation });

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[contact] fetch failed:", msg);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
