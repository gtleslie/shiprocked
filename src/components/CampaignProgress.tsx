"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { siteContent } from "@content/site-content";
import { getCampaignBarGeometry } from "@/lib/campaign-stats";
import { useCampaignRaised } from "@/hooks/useCampaignRaised";

type CampaignProgressProps = {
  className?: string;
  variant?: "home" | "support";
};

type CampaignGoalMarkerProps = {
  leftPct: number;
  goalLabel: string;
};

/** Goal line on the track — only when the bar scales past goal (overflow). */
function CampaignGoalMarker({ leftPct, goalLabel }: CampaignGoalMarkerProps) {
  if (leftPct >= 99.2) return null;

  return (
    <div
      className="campaign-goal-marker"
      style={{ left: `${leftPct}%` }}
      title={goalLabel}
      aria-hidden
    />
  );
}

export function CampaignProgress({
  className = "",
  variant = "home",
}: CampaignProgressProps) {
  const { campaign, assets } = siteContent;
  const { raised, goal: liveGoal } = useCampaignRaised();
  const goal = variant === "home" ? campaign.homeGoal : campaign.goal;
  const effectiveGoal = liveGoal || goal;

  const geometry = useMemo(
    () => getCampaignBarGeometry(raised, effectiveGoal),
    [raised, effectiveGoal],
  );

  const [ride, setRide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setRide(geometry.visualFillPct);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRide(geometry.visualFillPct);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(track);
    return () => observer.disconnect();
  }, [geometry.visualFillPct]);

  const raisedLabel = `$${raised.toLocaleString()} RAISED`;
  const goalLabel = `GOAL: $${effectiveGoal.toLocaleString()}`;

  if (variant !== "home") {
    return (
      <div className={className}>
        <div
          ref={trackRef}
          className="campaign-track campaign-track--compact relative h-[10px] w-full overflow-visible rounded-full"
        >
          <div
            className="campaign-fill campaign-fill--goal absolute inset-y-0 left-0 rounded-full"
            style={{ width: `${geometry.redWidthPct}%` }}
          />
          {geometry.overflowWidthPct > 0 ? (
            <div
              className="campaign-fill campaign-fill--overflow absolute inset-y-0 rounded-full"
              style={{
                left: `${geometry.goalMarkerPct}%`,
                width: `${geometry.overflowWidthPct}%`,
              }}
            />
          ) : null}
          <CampaignGoalMarker
            leftPct={geometry.goalMarkerPct}
            goalLabel={`$${effectiveGoal.toLocaleString()} goal`}
          />
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[11px] font-bold tracking-[0.32px] uppercase">
          <span className="text-white">
            ${raised.toLocaleString()} RAISED OF ${effectiveGoal.toLocaleString()} GOAL
            {geometry.overGoal ? (
              <span className="text-accent-gold">
                {" "}
                (+${geometry.overflowAmount.toLocaleString()} over)
              </span>
            ) : null}
          </span>
          <span className="text-accent-gold">{campaign.datesLabel}</span>
        </div>
      </div>
    );
  }

  return (
    <div ref={trackRef} className={className}>
      <div className="relative overflow-visible pt-[72px] max-sm:pt-[68px] md:pt-[110px]">
        <div
          className="campaign-rider pointer-events-none absolute z-[2] h-[78px] w-[104px] overflow-hidden max-sm:h-[68px] max-sm:w-[90px] md:h-[132px] md:w-[220px]"
          style={{ left: `${ride}%` }}
        >
          <Image
            src={assets.skullyRide}
            alt=""
            width={2388}
            height={1668}
            className="absolute top-0 left-1/2 h-full w-full max-w-none -translate-x-1/2 object-contain object-bottom max-sm:translate-y-0 max-sm:scale-[1.12] md:h-[154%] md:w-[132%] md:translate-y-0 md:scale-100 md:object-cover md:object-top"
          />
        </div>

        <div className="campaign-track relative h-[24px] w-full overflow-visible rounded-full">
          <div
            className="campaign-fill campaign-fill--goal absolute inset-y-0 left-0 overflow-hidden rounded-full"
            style={{ width: `${geometry.redWidthPct}%` }}
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
          {geometry.overflowWidthPct > 0 ? (
            <div
              className="campaign-fill campaign-fill--overflow absolute inset-y-0 overflow-hidden rounded-full"
              style={{
                left: `${geometry.goalMarkerPct}%`,
                width: `${geometry.overflowWidthPct}%`,
              }}
            >
              <div className="campaign-wave-body campaign-wave-body--overflow absolute inset-0" />
            </div>
          ) : null}
          <CampaignGoalMarker
            leftPct={geometry.goalMarkerPct}
            goalLabel={`$${effectiveGoal.toLocaleString()} goal`}
          />
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[11px] font-bold tracking-[0.32px] uppercase">
        <span className="text-white">
          {raisedLabel}
          {geometry.overGoal ? (
            <span className="text-accent-gold">
              {" "}
              (+${geometry.overflowAmount.toLocaleString()} over goal)
            </span>
          ) : null}
        </span>
        <span className="text-white">{goalLabel}</span>
      </div>
    </div>
  );
}
