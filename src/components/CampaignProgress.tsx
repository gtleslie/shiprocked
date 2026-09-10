"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { siteContent } from "@content/site-content";

type CampaignProgressProps = {
  className?: string;
  variant?: "home" | "support";
};

function waveLine(width: number, height: number, amp: number, cycles: number) {
  const mid = height * 0.42;
  const steps = 96;
  let d = `M 0 ${mid.toFixed(2)}`;

  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const x = t * width;
    const y = mid + Math.sin(t * Math.PI * cycles * 2) * amp;
    d += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
  }

  return d;
}

function waveFill(width: number, height: number, amp: number, cycles: number) {
  return `${waveLine(width, height, amp, cycles)} L ${width} ${height} L 0 ${height} Z`;
}

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
  const clipId = useId().replace(/:/g, "");

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

  const crest = waveLine(1000, 48, 7, 11);
  const sea = waveFill(1000, 48, 7, 11);

  return (
    <div ref={trackRef} className={className}>
      <div className="relative overflow-visible pt-[118px]">
        <svg
          className="campaign-wave-svg block h-[48px] w-full overflow-visible"
          viewBox="0 0 1000 48"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <clipPath id={`${clipId}-fill`}>
              <rect className="campaign-fill" x="0" y="0" height="48" width={`${ride * 10}`} />
            </clipPath>
            <linearGradient id={`${clipId}-sea`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e24a4a" />
              <stop offset="55%" stopColor="#d21f1f" />
              <stop offset="100%" stopColor="#8a1010" />
            </linearGradient>
          </defs>

          <path d={sea} fill="#1c1c1c" />
          <path d={crest} fill="none" stroke="#3a3a3a" strokeWidth="2.25" />

          <g clipPath={`url(#${clipId}-fill)`}>
            <path d={sea} fill={`url(#${clipId}-sea)`} />
            <path
              d={crest}
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.4"
              opacity="0.65"
            />
          </g>
        </svg>

        <div
          className="campaign-rider pointer-events-none absolute z-[2] h-[118px] w-[196px] md:h-[132px] md:w-[220px]"
          style={{ left: `${ride}%` }}
        >
          <Image
            src={assets.skullyRide}
            alt=""
            width={2388}
            height={1668}
            className="h-full w-full origin-bottom scale-[1.2] object-contain object-bottom"
          />
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] font-bold tracking-[0.32px] uppercase">
        <span className="text-white">${campaign.raised.toLocaleString()} RAISED</span>
        <span className="text-white">GOAL: ${goal.toLocaleString()}</span>
      </div>
    </div>
  );
}
