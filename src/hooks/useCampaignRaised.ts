"use client";

import { useCallback, useEffect, useState } from "react";
import { siteContent } from "@content/site-content";

type CampaignApiResponse = {
  raised: number;
  goal: number;
  source: "env" | "content";
  updatedAt: string;
};

export function useCampaignRaised() {
  const [raised, setRaised] = useState<number>(siteContent.campaign.raised);
  const [goal, setGoal] = useState<number>(siteContent.campaign.goal);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/campaign", { cache: "no-store" });
      if (!res.ok) return;
      const data = (await res.json()) as CampaignApiResponse;
      if (Number.isFinite(data.raised)) setRaised(data.raised);
      if (Number.isFinite(data.goal)) setGoal(data.goal);
    } catch {
      /* keep last known values */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
    const interval = window.setInterval(refresh, 5 * 60 * 1000);
    const onFocus = () => void refresh();
    window.addEventListener("focus", onFocus);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener("focus", onFocus);
    };
  }, [refresh]);

  return { raised, goal, loading };
}
