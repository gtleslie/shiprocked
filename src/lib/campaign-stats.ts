import { siteContent } from "@content/site-content";

export type CampaignStats = {
  raised: number;
  goal: number;
  source: "env" | "content";
  updatedAt: string;
};

/** Fallback total when CAMPAIGN_RAISED is unset (Seed&Spark has no public API we can call from the server). */
export function getCampaignStatsFromConfig(): CampaignStats {
  const goal = siteContent.campaign.goal;
  const envRaw = process.env.CAMPAIGN_RAISED?.trim();
  const parsed = envRaw ? Number.parseInt(envRaw.replace(/,/g, ""), 10) : Number.NaN;

  if (envRaw && Number.isFinite(parsed) && parsed >= 0) {
    return {
      raised: parsed,
      goal,
      source: "env",
      updatedAt: new Date().toISOString(),
    };
  }

  return {
    raised: siteContent.campaign.raised,
    goal,
    source: "content",
    updatedAt: new Date().toISOString(),
  };
}

export function getCampaignBarGeometry(raised: number, goal: number) {
  const safeGoal = Math.max(goal, 1);
  const displayMax = Math.max(safeGoal, raised, 1);
  const goalMarkerPct = (safeGoal / displayMax) * 100;
  const fillPct = (raised / displayMax) * 100;
  const redWidthPct = Math.min(fillPct, goalMarkerPct);
  const overflowWidthPct = Math.max(0, fillPct - goalMarkerPct);
  const visualFillPct = raised > 0 ? fillPct : 0;
  const displayRedWidthPct = raised <= 0 ? 0 : Math.min(redWidthPct, goalMarkerPct);
  const skullyLeftPct = raised <= 0 ? 0 : Math.min(visualFillPct, goalMarkerPct);
  const overGoal = raised > safeGoal;

  return {
    goalMarkerPct,
    fillPct,
    redWidthPct,
    displayRedWidthPct,
    overflowWidthPct,
    visualFillPct,
    skullyLeftPct,
    overGoal,
    overflowAmount: Math.max(0, raised - safeGoal),
  };
}
