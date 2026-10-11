"use client";

import Image from "next/image";
import { FundraisingBanner } from "@/components/FundraisingBanner";
import { SectionDivider } from "@/components/SectionDivider";
import { InnerCircle } from "@/components/InnerCircle";
import { MerchPreviews } from "@/components/MerchPreviews";

export function SupportMerchSection() {
  return (
    <>
      <div className="fundraising-banner-bleed">
        <FundraisingBanner />
      </div>
      <MerchPreviews />
    </>
  );
}

export function SupportInnerCircleSection() {
  return (
    <>
      <SectionDivider />
      <section className="support-campaign-hero relative isolate overflow-hidden px-4 pb-6 pt-6 md:px-12 md:pb-4 md:pt-6 lg:px-16">
        <div
          className="support-campaign-hero-bg pointer-events-none absolute inset-0 -z-10 bg-black"
          aria-hidden
        >
          <Image
            src="/assets/Supportbground.png"
            alt=""
            fill
            sizes="100vw"
            className="support-campaign-hero-bg-img object-cover object-center max-md:object-top"
          />
        </div>
        <div className="support-campaign-hero-inner relative mx-auto max-w-[1440px]">
          <InnerCircle />
        </div>
      </section>
    </>
  );
}
