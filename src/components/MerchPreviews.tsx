"use client";

import { MerchPreviewCarousel } from "@/components/MerchPreviewCarousel";
import { SectionLabel } from "@/components/ImagePlaceholder";
import { siteContent } from "@content/site-content";

export function MerchPreviews() {
  const { merchPreviews } = siteContent.support;

  return (
    <section className="mx-auto max-w-[1440px] overflow-visible px-4 pt-4 pb-2 md:px-12 md:pt-5 lg:px-16">
      <SectionLabel>{merchPreviews.overline}</SectionLabel>
      <h2 className="text-[26px] font-black text-white md:text-[30px]">{merchPreviews.headline}</h2>
      <p className="mt-2 max-w-2xl text-[14px] leading-snug text-text-secondary">{merchPreviews.body}</p>

      <div className="mt-3">
        <MerchPreviewCarousel cards={merchPreviews.cards} hint={merchPreviews.flipHint} />
      </div>
    </section>
  );
}
