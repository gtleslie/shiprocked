"use client";

import { SiteButton } from "@/components/SiteButton";
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
      <h1 className="sr-only">{innerCircle.headline}</h1>

      <video
        className="mx-auto h-auto w-full max-w-[520px] mix-blend-screen"
        src={innerCircleLogo}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden
      />

      <p className="mt-2 text-[22px] font-black tracking-[0.04em] text-white md:text-[26px]">
        {innerCircle.headline}
      </p>

      <ul className="mx-auto mt-7 grid max-w-xl gap-x-8 gap-y-2.5 text-left sm:grid-cols-2">
        {innerCircle.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2.5 text-[14px] text-text-muted">
            <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-accent-red" />
            <span>{perk}</span>
          </li>
        ))}
      </ul>

      <p className="mt-7 text-[12px] font-bold tracking-[0.48px] text-accent-gold uppercase">
        {innerCircle.fundraising}
      </p>

      <SiteButton
        onClick={handleJoin}
        className="teaser-cta mt-5 h-12 min-w-[240px] px-8 hover:!bg-[#e42727]"
      >
        {innerCircle.cta}
      </SiteButton>
    </div>
  );
}
