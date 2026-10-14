"use client";

import Image from "next/image";
import { MerchPreviewCarousel } from "@/components/MerchPreviewCarousel";
import { siteContent } from "@content/site-content";

export function MerchPreviews() {
  const { merchPreviews } = siteContent.support;
  const { swagSkully, pledgeRewardsOverlay } = siteContent.assets;

  return (
    <section className="mx-auto max-w-[1440px] overflow-visible px-4 pt-4 pb-2 md:px-12 md:pt-5 lg:px-16">
      <div className="merch-preview-row mt-2">
        <div className="merch-skully" aria-label="Pledge rewards">
          <Image
            src={swagSkully}
            alt=""
            fill
            sizes="(min-width: 1024px) 220px, 42vw"
            className="pointer-events-none object-contain object-bottom"
            priority
          />
          <div className="merch-skully-pledge-label" aria-hidden>
            <Image
              src={pledgeRewardsOverlay}
              alt=""
              fill
              sizes="(min-width: 1024px) 220px, 42vw"
              className="pointer-events-none object-contain"
            />
          </div>
        </div>
        <div className="merch-preview-carousel-wrap min-w-0">
          <MerchPreviewCarousel cards={merchPreviews.cards} />
        </div>
      </div>
    </section>
  );
}
