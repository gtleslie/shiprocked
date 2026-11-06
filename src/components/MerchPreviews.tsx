"use client";

import { MerchPreviewCarousel } from "@/components/MerchPreviewCarousel";
import { siteContent } from "@content/site-content";

export function MerchPreviews() {
  const { merchPreviews } = siteContent.support;

  return (
    <section className="support-merch-previews mx-auto max-w-[1440px] overflow-visible px-4 pb-2 md:px-12 lg:px-16">
      <div className="merch-preview-carousel-wrap min-w-0">
        <MerchPreviewCarousel cards={merchPreviews.cards} hint={merchPreviews.flipHint} />
      </div>
    </section>
  );
}
