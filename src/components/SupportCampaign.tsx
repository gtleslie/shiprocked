"use client";

import Image from "next/image";
import { SectionDivider } from "@/components/SectionDivider";
import { InnerCircle } from "@/components/InnerCircle";
import { MerchPreviews } from "@/components/MerchPreviews";
import { siteContent } from "@content/site-content";

export function SupportMerchSection() {
  const { hero } = siteContent.support;
  const { fundraisingBanner } = siteContent.campaign;

  return (
    <>
      <section className="support-film-hero mx-auto max-w-[1440px] px-4 md:px-12 lg:px-16">
        <p className="support-film-hero-eyebrow font-header text-[13px] font-black leading-none text-accent-red sm:text-[14px] md:text-[15px] lg:text-[16px]">
          {fundraisingBanner}
        </p>
        <h1 className="font-header text-[38px] font-black leading-[0.92] text-white sm:text-[48px] md:text-[56px] lg:text-[64px]">
          {hero.headline}
        </h1>
        <p className="font-subhead max-w-[980px] text-[14px] leading-snug text-text-secondary">
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
