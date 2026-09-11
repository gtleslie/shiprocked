"use client";

import { SectionDivider } from "@/components/SectionDivider";
import { SectionLabel } from "@/components/ImagePlaceholder";
import { InnerCircle } from "@/components/InnerCircle";
import { MerchCarousel } from "@/components/MerchCarousel";
import { RewardGate, useTierReveal } from "@/components/RewardGate";
import { siteContent } from "@content/site-content";

export function SupportCampaign() {
  const { support } = siteContent;
  const { phase, revealTiers } = useTierReveal();

  function jumpToTier(tierId: string) {
    const wasLocked = phase === "locked";
    revealTiers();
    window.setTimeout(
      () => {
        document.getElementById(tierId)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      },
      wasLocked ? 700 : 0,
    );
  }

  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 pt-6 pb-4 md:px-12 lg:px-16">
        <InnerCircle />
      </section>

      <SectionDivider />

      <section
        id="support-tiers"
        className="mx-auto max-w-[1440px] overflow-visible px-6 pt-8 pb-16 md:px-12 lg:px-16"
      >
        <SectionLabel>{support.tiers.overline}</SectionLabel>
        <h2 className="mt-4 text-[32px] font-black text-white md:text-[36px]">
          {support.tiers.headline}
        </h2>
        <div className="mt-12">
          <RewardGate phase={phase} onReveal={revealTiers} />
        </div>
        <h2 className="mt-16 text-[32px] font-black text-white md:text-[36px]">
          {support.tiers.merchHeadline}
        </h2>
        <div className="mt-8">
          <MerchCarousel onSelect={jumpToTier} />
        </div>
      </section>
    </>
  );
}
