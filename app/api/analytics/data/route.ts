import { NextResponse } from "next/server";
import { getAnalyticsData } from "@/lib/db";

export const runtime = "nodejs";

const PASSWORD = process.env.ANALYTICS_PASSWORD ?? "kokoaadmin";

export async function GET(req: Request) {
  if (req.headers.get("x-analytics-key") !== PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = getAnalyticsData();
    return NextResponse.json(data);
  } catch (err) {
    console.error("[analytics/data GET]", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
