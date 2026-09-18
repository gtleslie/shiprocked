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
  const visualPercent = Math.max(percent, 11);
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
      <div className="relative overflow-visible pt-[118px] md:pt-[110px]">
        <div
          className="campaign-rider pointer-events-none absolute z-[2] h-[96px] w-[148px] overflow-hidden md:h-[132px] md:w-[220px]"
          style={{ left: `${ride}%` }}
        >
          <Image
            src={assets.skullyRide}
            alt=""
            width={2388}
            height={1668}
            className="absolute top-0 left-1/2 h-[154%] w-[132%] max-w-none -translate-x-1/2 object-cover object-[center_42%] md:object-top"
          />
        </div>

        <div className="campaign-track relative h-[24px] w-full overflow-hidden rounded-full">
          <div
            className="campaign-fill relative h-full overflow-hidden rounded-full"
            style={{ width: `calc(${ride}% + var(--campaign-fill-extra))` }}
          >
            <div className="campaign-wave-body absolute inset-0" />
            <svg
              className="campaign-wave-motion pointer-events-none absolute inset-y-0 left-0 h-full w-[200%]"
              viewBox="0 0 400 24"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0 6 C 16 1 34 1 50 6 S 84 11 100 6 S 134 1 150 6 S 184 11 200 6 S 234 1 250 6 S 284 11 300 6 S 334 1 350 6 S 384 11 400 6"
                fill="none"
                stroke="rgba(255,255,255,0.62)"
                strokeWidth="1.35"
              />
              <path
                d="M0 13 C 16 9 34 9 50 13 S 84 17 100 13 S 134 9 150 13 S 184 17 200 13 S 234 9 250 13 S 284 17 300 13 S 334 9 350 13 S 384 17 400 13"
                fill="none"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1.1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] font-bold tracking-[0.32px] uppercase">
        <span className="text-white">${campaign.raised.toLocaleString()} RAISED</span>
        <span className="text-white">GOAL: ${goal.toLocaleString()}</span>
      </div>
    </div>
  );
}
