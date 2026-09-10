"use client";

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
      <section className="mx-auto max-w-[1440px] px-6 pt-10 pb-10 md:px-12 lg:px-16">
        <InnerCircle onJoin={revealTiers} />
      </section>

      <SectionDivider />

      <section
        id="support-tiers"
        className="mx-auto max-w-[1440px] overflow-visible px-6 pt-12 pb-16 md:px-12 lg:px-16"
      >
        <SectionLabel>{support.tiers.overline}</SectionLabel>
        <h2 className="mt-4 text-[32px] font-black text-white md:text-[36px]">
          {support.tiers.headline}
        </h2>
        <div className="mt-12">
          <RewardGate phase={phase} onReveal={revealTiers} />
        </div>
      </section>
    </>
  );
}
