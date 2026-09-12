"use client";

import Image from "next/image";
import { siteContent } from "@content/site-content";

export function InnerCircle() {
  const { innerCircle } = siteContent.support;
  const { innerCircleLogo, innerCircleJoin } = siteContent.assets;
  const groupHref = siteContent.links.innerCircle;
  const hasGroupLink = groupHref.startsWith("http");

  function handleJoin() {
    if (!hasGroupLink) return;
    window.open(groupHref, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="inner-circle-stage mx-auto flex w-full max-w-[640px] flex-col items-center text-center">
      <h1 className="sr-only">{innerCircle.headline}</h1>

      <div className="inner-circle-logo ml-[10px] w-full">
        <video
          className="block h-auto w-full mix-blend-screen"
          src={innerCircleLogo}
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-hidden
        />
      </div>

      <p className="inner-circle-copy font-subhead mt-5 max-w-[460px] text-[15px] leading-relaxed text-text-muted">
        {innerCircle.perks.join("  ·  ")}
      </p>

      <div className="inner-circle-cta mt-7 flex flex-col items-center">
        <p className="text-[12px] font-bold tracking-[0.56px] text-accent-gold uppercase">
          {innerCircle.fundraising}
        </p>
        <button
          type="button"
          onClick={handleJoin}
          className="mt-5 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.99]"
        >
          <Image
            src={innerCircleJoin}
            alt={innerCircle.cta}
            width={950}
            height={250}
            className="h-auto w-[min(100%,420px)]"
          />
        </button>
      </div>
    </div>
  );
}
