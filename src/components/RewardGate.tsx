"use client";

import { useEffect, useState } from "react";
import { TierCard } from "@/components/TierCard";
import { TeaserOption1 } from "@/components/teasers/TeaserOption1";
import { TeaserOption2 } from "@/components/teasers/TeaserOption2";
import { TeaserOption3 } from "@/components/teasers/TeaserOption3";
import { TeaserOption4 } from "@/components/teasers/TeaserOption4";
import { siteContent } from "@content/site-content";

/** Flip to 1 to restore the saved overlay card. */
const ACTIVE_TEASER = 4 as 1 | 2 | 3 | 4;
const STORAGE_KEY = {
  1: "shiprocked-tiers-revealed",
  2: "shiprocked-tiers-revealed-opt2b",
  3: "shiprocked-tiers-revealed-opt3",
  4: "shiprocked-tiers-revealed-opt4",
}[ACTIVE_TEASER];

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

      {locked && ACTIVE_TEASER === 1 && <TeaserOption1 onReveal={revealTiers} />}
      {locked && ACTIVE_TEASER === 2 && <TeaserOption2 onReveal={revealTiers} />}
      {locked && ACTIVE_TEASER === 3 && <TeaserOption3 onReveal={revealTiers} />}
      {locked && ACTIVE_TEASER === 4 && <TeaserOption4 onReveal={revealTiers} />}
    </div>
  );
}
