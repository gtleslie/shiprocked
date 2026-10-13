"use client";

import { MerchPreviewCarousel } from "@/components/MerchPreviewCarousel";
import { SectionLabel } from "@/components/ImagePlaceholder";
import { siteContent } from "@content/site-content";

export function MerchPreviews() {
  const { merchPreviews } = siteContent.support;

  return (
    <section className="mx-auto max-w-[1440px] overflow-visible px-4 pt-10 pb-8 md:px-12 md:pt-14 lg:px-16">
      <SectionLabel>{merchPreviews.overline}</SectionLabel>
      <h2 className="text-[32px] font-black text-white md:text-[36px]">{merchPreviews.headline}</h2>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-secondary">{merchPreviews.body}</p>

      <p className="mt-6 text-[11px] font-bold tracking-[0.32px] text-text-dim uppercase">
        {merchPreviews.flipHint}
      </p>

      <div className="mt-4">
        <MerchPreviewCarousel cards={merchPreviews.cards} />
      </div>
    </section>
  );
}
