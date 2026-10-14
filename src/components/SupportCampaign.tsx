"use client";

import Image from "next/image";
import { FundraisingBanner } from "@/components/FundraisingBanner";
import { SectionDivider } from "@/components/SectionDivider";
import { InnerCircle } from "@/components/InnerCircle";
import { MerchPreviews } from "@/components/MerchPreviews";
import { siteContent } from "@content/site-content";

export function SupportMerchSection() {
  const { hero } = siteContent.support;

  return (
    <>
      <div className="fundraising-banner-bleed">
        <FundraisingBanner />
      </div>
      <section className="mx-auto max-w-[1440px] px-4 pt-5 pb-2 md:px-12 md:pt-7 md:pb-3 lg:px-16">
        <h1 className="font-header text-[38px] font-black leading-[0.95] text-white sm:text-[48px] md:text-[56px] lg:text-[64px]">
          {hero.headline}
        </h1>
        <p className="font-subhead mt-3 max-w-[980px] text-[15px] leading-relaxed text-white md:mt-4 md:text-[17px] lg:text-[18px]">
          {hero.body}
        </p>
      </section>
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
