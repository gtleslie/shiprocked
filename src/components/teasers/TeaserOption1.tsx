"use client";

import { SiteButton } from "@/components/SiteButton";
import { siteContent } from "@content/site-content";

type TeaserOption1Props = {
  onReveal: () => void;
};

/** Saved overlay: dimmed board + single center card. */
export function TeaserOption1({ onReveal }: TeaserOption1Props) {
  const { teaser } = siteContent.support;

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/65" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="reward-gate-title"
        className="relative z-10 w-full max-w-lg border border-border bg-bg-card px-8 py-10 text-center"
      >
        <p className="text-[11px] font-bold tracking-[0.72px] text-accent-gold uppercase">
          {teaser.badge}
        </p>
        <h3
          id="reward-gate-title"
          className="mt-4 text-[28px] leading-tight font-black text-white md:text-[32px]"
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
  );
}
