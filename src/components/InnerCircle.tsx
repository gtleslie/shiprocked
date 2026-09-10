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
    <div className="mx-auto flex max-w-[480px] flex-col items-center text-center">
      <h1 className="sr-only">{innerCircle.headline}</h1>

      <video
        className="h-auto w-full mix-blend-screen"
        src={innerCircleLogo}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden
      />

      <p className="-mt-2 max-w-[440px] text-[13px] leading-relaxed text-text-muted">
        {innerCircle.perks.join("  ·  ")}
      </p>

      <p className="mt-6 text-[11px] font-bold tracking-[0.56px] text-accent-gold uppercase">
        {innerCircle.fundraising}
      </p>

      <SiteButton onClick={handleJoin} className="mt-5 h-14 min-w-[260px] px-10">
        {innerCircle.cta}
      </SiteButton>
    </div>
  );
}
