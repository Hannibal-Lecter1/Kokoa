import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch("https://formsubmit.co/ajax/jonathan@kokoafruits.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        company:  body.company,
        name:     body.name,
        email:    body.email,
        message:  body.message,
        _subject: `Kokoa B2B Inquiry — ${body.company}`,
        _cc:      "kevin@kokoafruits.com",
        _captcha: "false",
      }),
    });

    const text = await res.text();

    let data: Record<string, unknown>;
    try {
      data = JSON.parse(text);
    } catch {
      // formsubmit returned non-JSON (e.g. activation redirect page)
      // Treat as success — the activation email has been sent
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: data.success === "true" || data.success === true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
