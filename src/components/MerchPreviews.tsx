"use client";

import Image from "next/image";
import Link from "next/link";
import { MerchPreviewCarousel } from "@/components/MerchPreviewCarousel";
import { siteContent } from "@content/site-content";

export function MerchPreviews() {
  const { merchPreviews } = siteContent.support;
  const { merchBandBanner } = siteContent.assets;

  return (
    <section className="support-merch-previews mx-auto max-w-[1440px] overflow-visible px-4 pb-2 md:px-12 lg:px-16">
      <div className="merch-preview-row">
        <div className="merch-preview-carousel-wrap min-w-0">
          <MerchPreviewCarousel cards={merchPreviews.cards} hint={merchPreviews.flipHint} />
        </div>
        <Link
          href={siteContent.links.seedAndSpark}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View merchandise and pledge on Seed & Spark"
          className="merch-merch-banner"
        >
          <Image
            src={merchBandBanner}
            alt=""
            fill
            sizes="(min-width: 1024px) 220px, 92vw"
            className="object-contain object-center"
            priority
          />
        </Link>
      </div>
    </section>
  );
}
