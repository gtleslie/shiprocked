"use client";

import Image from "next/image";
import { MerchPreviewCarousel } from "@/components/MerchPreviewCarousel";
import { siteContent } from "@content/site-content";

export function MerchPreviews() {
  const { merchPreviews } = siteContent.support;
  const { swagSkully } = siteContent.assets;

  return (
    <section className="mx-auto max-w-[1440px] overflow-visible px-4 pt-4 pb-2 md:px-12 md:pt-5 lg:px-16">
      <div className="merch-preview-row mt-2">
        <div className="merch-skully">
          <Image
            src={swagSkully}
            alt="Pledge rewards"
            fill
            sizes="(min-width: 1024px) 220px, 42vw"
            className="pointer-events-none object-contain object-bottom"
            priority
          />
        </div>
        <div className="min-w-0 flex-1">
          <MerchPreviewCarousel cards={merchPreviews.cards} />
        </div>
      </div>
    </section>
  );
}
