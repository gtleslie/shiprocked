"use client";

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

      <button type="button" onClick={handleJoin} className="inner-circle-join -mt-4">
        {innerCircle.cta}
      </button>

      <p className="mt-4 text-[11px] font-bold tracking-[0.56px] text-accent-gold uppercase">
        {innerCircle.fundraising}
      </p>

      <p className="mt-5 max-w-[420px] text-[12px] leading-relaxed tracking-[0.08em] text-text-dim uppercase">
        {innerCircle.perks.join("  ·  ")}
      </p>
    </div>
  );
}
