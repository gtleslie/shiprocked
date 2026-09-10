"use client";

import { SiteButton } from "@/components/SiteButton";
import { SectionLabel } from "@/components/ImagePlaceholder";
import { siteContent } from "@content/site-content";

type InnerCircleProps = {
  onJoin: () => void;
};

export function InnerCircle({ onJoin }: InnerCircleProps) {
  const { innerCircle } = siteContent.support;
  const { innerCircleLogo } = siteContent.assets;
  const groupHref = siteContent.links.innerCircle;
  const hasGroupLink = groupHref.startsWith("http");

  function handleJoin() {
    onJoin();
    if (hasGroupLink) {
      window.open(groupHref, "_blank", "noopener,noreferrer");
    }
    document.getElementById("support-tiers")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="mx-auto max-w-3xl text-center">
      <SectionLabel>{innerCircle.overline}</SectionLabel>
      <h1 className="mt-4 text-[42px] font-black text-white md:text-[52px]">
        {innerCircle.headline}
      </h1>

      <video
        className="mx-auto mt-8 h-auto w-full max-w-[420px] mix-blend-screen"
        src={innerCircleLogo}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden
      />

      <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
        {innerCircle.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-3 text-[15px] text-text-muted">
            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-accent-red" />
            <span>{perk}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-[13px] font-bold tracking-[0.4px] text-accent-gold uppercase">
        {innerCircle.fundraising}
      </p>

      <SiteButton
        onClick={handleJoin}
        className="teaser-cta mt-8 h-auto min-h-14 max-w-xl whitespace-normal px-8 py-4 text-center leading-snug hover:!bg-[#e42727]"
      >
        {innerCircle.cta}
      </SiteButton>
    </div>
  );
}
