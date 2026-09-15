"use client";

import Image from "next/image";
import { SectionDivider } from "@/components/SectionDivider";
import { SectionLabel } from "@/components/ImagePlaceholder";
import { InnerCircle } from "@/components/InnerCircle";
import { RewardGate, useTierReveal } from "@/components/RewardGate";
import { siteContent } from "@content/site-content";

export function SupportCampaign() {
  const { support } = siteContent;
  const { phase, revealTiers } = useTierReveal();

  return (
    <>
      <section className="relative isolate overflow-hidden px-6 pt-6 pb-4 md:px-12 lg:px-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-black" aria-hidden>
          <Image
            src="/assets/Supportbground.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="relative mx-auto max-w-[1440px]">
          <InnerCircle />
        </div>
      </section>

      <SectionDivider />

      <section
        id="support-tiers"
        className="mx-auto max-w-[1440px] overflow-visible px-6 pt-8 pb-16 md:px-12 lg:px-16"
      >
        <SectionLabel>{support.tiers.overline}</SectionLabel>
        <h2 className="!mt-1 text-[32px] font-black text-white md:text-[36px]">
          {support.tiers.headline}
        </h2>
        <div className="mt-12">
          <RewardGate phase={phase} onReveal={revealTiers} />
        </div>
      </section>
    </>
  );
}
