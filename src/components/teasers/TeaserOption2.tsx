"use client";

import { SiteButton } from "@/components/SiteButton";
import { siteContent } from "@content/site-content";

type TeaserOption2Props = {
  onReveal: () => void;
};

function wavyPath(width: number, height: number, amp = 7, waves = 8) {
  const left: string[] = [];
  const right: string[] = [];

  for (let i = 0; i <= waves * 2; i++) {
    const t = i / (waves * 2);
    const y = t * height;
    const offset = Math.sin(t * Math.PI * waves) * amp;
    left.push(`${12 + offset},${y}`);
    right.push(`${width - 12 + offset},${y}`);
  }

  return [
    `M ${left[0]}`,
    ...left.slice(1).map((point) => `L ${point}`),
    `L ${right[right.length - 1]}`,
    ...right
      .slice(0, -1)
      .reverse()
      .map((point) => `L ${point}`),
    "Z",
  ].join(" ");
}

/** Experiment: same board underneath; feathered haze + wavy invite card on top. */
export function TeaserOption2({ onReveal }: TeaserOption2Props) {
  const { teaser } = siteContent.support;
  const path = wavyPath(360, 460, 8, 8);

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/45 backdrop-blur-[12px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 72% 68% at 50% 50%, black 28%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 72% 68% at 50% 50%, black 28%, transparent 78%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 46% at 50% 50%, rgba(0,0,0,0.55) 0%, transparent 72%)",
        }}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="reward-gate-title"
        className="relative z-10 w-full max-w-[360px]"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 360 460"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d={path} fill="#161616" stroke="#d4a23c" strokeWidth="2.5" />
        </svg>

        <div className="relative z-10 flex min-h-[420px] flex-col items-center px-10 pt-14 pb-10 text-center">
          <p className="text-[11px] font-bold tracking-[0.72px] text-accent-gold uppercase">
            {teaser.badge}
          </p>
          <h3
            id="reward-gate-title"
            className="mt-5 text-[26px] leading-tight font-black text-white md:text-[30px]"
          >
            {teaser.headline}
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-text-muted">{teaser.body}</p>
          <SiteButton onClick={onReveal} className="mt-8 h-14 min-w-[220px] px-10">
            {teaser.cta}
          </SiteButton>
          <p className="mt-4 text-[12px] text-text-dim">{teaser.note}</p>
        </div>
      </div>
    </div>
  );
}
