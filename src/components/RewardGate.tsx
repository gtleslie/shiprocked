"use client";

import { useEffect, useRef, useState } from "react";
import { TierCard } from "@/components/TierCard";
import { TeaserOption1 } from "@/components/teasers/TeaserOption1";
import { TeaserOption2 } from "@/components/teasers/TeaserOption2";
import { TeaserOption3 } from "@/components/teasers/TeaserOption3";
import { TeaserOption4 } from "@/components/teasers/TeaserOption4";
import { siteContent } from "@content/site-content";

/** Flip to 1 to restore the saved overlay card. */
const ACTIVE_TEASER = 1 as 1 | 2 | 3 | 4;
const STORAGE_KEY = {
  1: "shiprocked-tiers-revealed-anim",
  2: "shiprocked-tiers-revealed-opt2b",
  3: "shiprocked-tiers-revealed-opt3",
  4: "shiprocked-tiers-revealed-opt4",
}[ACTIVE_TEASER];

export function RewardGate() {
  const { support } = siteContent;
  const [phase, setPhase] = useState<"locked" | "revealing" | "open">("locked");
  const revealTimer = useRef<number | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setPhase("open");
    }

    return () => {
      if (revealTimer.current !== null) {
        window.clearTimeout(revealTimer.current);
      }
    };
  }, []);

  function revealTiers() {
    if (phase !== "locked") return;

    sessionStorage.setItem(STORAGE_KEY, "1");
    setPhase("revealing");
    revealTimer.current = window.setTimeout(() => {
      setPhase("open");
    }, 620);
  }

  const open = phase === "open";
  const lockedPrices = phase === "locked";
  const showOverlay = phase !== "open";

  return (
    <div className="relative overflow-visible">
      <div
        className={`grid gap-6 overflow-visible md:grid-cols-2 xl:grid-cols-3 ${
          open ? "" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {support.tiers.items.map((tier, index) => (
          <TierCard key={tier.id} tier={tier} locked={lockedPrices} index={index} />
        ))}
      </div>

      {showOverlay && ACTIVE_TEASER === 1 && (
        <TeaserOption1 onReveal={revealTiers} exiting={phase === "revealing"} />
      )}
      {showOverlay && ACTIVE_TEASER === 2 && <TeaserOption2 onReveal={revealTiers} />}
      {showOverlay && ACTIVE_TEASER === 3 && <TeaserOption3 onReveal={revealTiers} />}
      {showOverlay && ACTIVE_TEASER === 4 && <TeaserOption4 onReveal={revealTiers} />}
    </div>
  );
}
