"use client";

import { useEffect, useState } from "react";
import { SiteButton } from "@/components/SiteButton";
import { TierCard } from "@/components/TierCard";
import { siteContent } from "@content/site-content";

const STORAGE_KEY = "shiprocked-tiers-revealed";

export function RewardGate() {
  const { support } = siteContent;
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(STORAGE_KEY) === "1");
  }, []);

  function revealTiers() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setUnlocked(true);
  }

  const locked = !unlocked;

  return (
    <div className="relative overflow-visible">
      <div
        className={`grid gap-6 overflow-visible md:grid-cols-2 xl:grid-cols-3 ${
          locked ? "pointer-events-none" : ""
        }`}
        aria-hidden={locked}
      >
        {support.tiers.items.map((tier) => (
          <TierCard key={tier.id} tier={tier} locked={locked} />
        ))}
      </div>

      {locked && (
        <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/65" />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="reward-gate-title"
            className="relative z-10 w-full max-w-lg border border-border bg-bg-card px-8 py-10 text-center"
          >
            <p className="text-[11px] font-bold tracking-[0.72px] text-accent-gold uppercase">
              {support.teaser.badge}
            </p>
            <h3
              id="reward-gate-title"
              className="mt-4 text-[28px] leading-tight font-black text-white md:text-[32px]"
            >
              {support.teaser.headline}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              {support.teaser.body}
            </p>
            <SiteButton onClick={revealTiers} className="mt-8 h-14 min-w-[220px] px-10">
              {support.teaser.cta}
            </SiteButton>
            <p className="mt-4 text-[12px] text-text-dim">{support.teaser.note}</p>
          </div>
        </div>
      )}
    </div>
  );
}
