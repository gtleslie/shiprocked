"use client";

import Image from "next/image";
import { MerchPreviewCarousel } from "@/components/MerchPreviewCarousel";
import { siteContent } from "@content/site-content";

export function MerchPreviews() {
  const { merchPreviews } = siteContent.support;
  const { swagSkully } = siteContent.assets;

  return (
    <section className="mx-auto max-w-[1440px] overflow-visible px-4 pt-4 pb-2 md:px-12 md:pt-5 lg:px-16">
      <div className="mt-2 flex items-end gap-3 sm:gap-5">
        <Image
          src={swagSkully}
          alt=""
          width={520}
          height={780}
          className="pointer-events-none h-auto w-[92px] shrink-0 object-contain object-bottom sm:w-[128px] md:w-[168px]"
          priority
        />
        <div className="min-w-0 flex-1">
          <MerchPreviewCarousel cards={merchPreviews.cards} />
        </div>
      </div>
    </section>
  );
}
