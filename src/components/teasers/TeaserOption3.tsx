"use client";

import { SiteButton } from "@/components/SiteButton";
import { siteContent } from "@content/site-content";

type TeaserOption3Props = {
  onReveal: () => void;
};

/** Experiment: same board underneath; boarding-pass ticket on the usual dim overlay. */
export function TeaserOption3({ onReveal }: TeaserOption3Props) {
  const { teaser } = siteContent.support;

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/65" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="reward-gate-title"
        className="relative z-10 flex w-full max-w-[720px] overflow-hidden border border-accent-gold bg-bg-card"
      >
        <div className="flex w-[72px] shrink-0 flex-col items-center justify-between border-r border-dashed border-accent-gold/70 bg-black py-6">
          <p
            className="text-[10px] font-bold tracking-[0.4px] text-accent-gold uppercase"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Admit one
          </p>
          <span className="h-1.5 w-1.5 bg-accent-gold" />
          <p
            className="text-[10px] font-bold tracking-[0.4px] text-accent-gold uppercase"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {teaser.badge}
          </p>
        </div>

        <div className="flex flex-1 flex-col justify-center px-8 py-8 md:px-10 md:py-9">
          <h3
            id="reward-gate-title"
            className="text-[24px] leading-tight font-black text-white md:text-[30px]"
          >
            {teaser.headline}
          </h3>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-text-muted md:text-[15px]">
            {teaser.body}
          </p>
          <div className="mt-7">
            <SiteButton onClick={onReveal} variant="gold" className="h-12 min-w-[200px] px-8">
              {teaser.cta}
            </SiteButton>
          </div>
        </div>
      </div>
    </div>
  );
}
