import { NextResponse } from "next/server";
import { getCampaignStatsFromConfig } from "@/lib/campaign-stats";

export const dynamic = "force-dynamic";

export async function GET() {
  const stats = getCampaignStatsFromConfig();

  return NextResponse.json(stats, {
    headers: {
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
