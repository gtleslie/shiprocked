"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteContent } from "@content/site-content";

type CampaignProgressProps = {
  className?: string;
  variant?: "home" | "support";
};

export function CampaignProgress({
  className = "",
  variant = "home",
}: CampaignProgressProps) {
  const { campaign, assets } = siteContent;
  const goal = variant === "home" ? campaign.homeGoal : campaign.goal;
  const percent = Math.min((campaign.raised / goal) * 100, 100);
  const visualPercent = Math.max(percent, 22);
  const [ride, setRide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setRide(visualPercent);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRide(visualPercent);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(track);
    return () => observer.disconnect();
  }, [visualPercent]);

  if (variant !== "home") {
    return (
      <div className={className}>
        <div className="h-[10px] w-full overflow-hidden rounded-full bg-[#2a2a2a]">
          <div
            className="h-full rounded-full bg-accent-red"
            style={{ width: `${visualPercent}%` }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between text-[11px] font-bold tracking-[0.32px] uppercase">
          <span className="text-white">
            ${campaign.raised.toLocaleString()} RAISED OF ${goal.toLocaleString()} GOAL
          </span>
          <span className="text-accent-gold">{campaign.datesLabel}</span>
        </div>
      </div>
    );
  }

  return (
    <div ref={trackRef} className={className}>
      <div className="relative pt-[108px]">
        <div
          className="campaign-rider pointer-events-none absolute bottom-[6px] h-[100px] w-[168px] md:w-[200px]"
          style={{ left: `${ride}%` }}
        >
          <Image
            src={assets.skullyRide}
            alt=""
            width={2388}
            height={1668}
            className="h-full w-full object-contain object-bottom"
          />
        </div>

        <div className="h-[10px] w-full overflow-hidden rounded-full bg-[#2a2a2a]">
          <div className="campaign-fill h-full rounded-full bg-accent-red" style={{ width: `${ride}%` }} />
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] font-bold tracking-[0.32px] uppercase">
        <span className="text-white">${campaign.raised.toLocaleString()} RAISED</span>
        <span className="text-white">GOAL: ${goal.toLocaleString()}</span>
      </div>
    </div>
  );
}
