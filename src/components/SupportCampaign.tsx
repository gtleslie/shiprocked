"use client";

import Image from "next/image";
import { SectionDivider } from "@/components/SectionDivider";
import { InnerCircle } from "@/components/InnerCircle";

export function SupportCampaign() {
  return (
    <>
      <section className="support-campaign-hero relative isolate overflow-hidden px-4 pb-6 md:px-12 md:pb-4 lg:px-16">
        <div
          className="support-campaign-hero-bg pointer-events-none absolute inset-0 -z-10 bg-black"
          aria-hidden
        >
          <Image
            src="/assets/Supportbground.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="support-campaign-hero-bg-img object-cover object-center max-md:object-top"
          />
        </div>
        <div className="support-campaign-hero-inner relative mx-auto max-w-[1440px] md:pt-6">
          <InnerCircle />
        </div>
      </section>

      <SectionDivider />
    </>
  );
}
