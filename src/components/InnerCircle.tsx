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
    <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
      <h1 className="sr-only">{innerCircle.headline}</h1>

      <video
        className="mx-auto h-auto w-full max-w-[520px] mix-blend-screen md:mx-0"
        src={innerCircleLogo}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden
      />

      <div className="flex flex-col items-start text-left">
        <ul className="space-y-3">
          {innerCircle.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-3 text-[16px] text-text-muted">
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-accent-red" />
              <span>{perk}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[12px] font-bold tracking-[0.56px] text-accent-gold uppercase">
          {innerCircle.fundraising}
        </p>

        <SiteButton onClick={handleJoin} className="mt-5 h-14 min-w-[240px] px-10">
          {innerCircle.cta}
        </SiteButton>
      </div>
    </div>
  );
}
