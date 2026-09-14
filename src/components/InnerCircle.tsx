"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { siteContent } from "@content/site-content";

/** Skip intro text; start when the central logo begins animating in. */
const LOGO_ANIM_START_SEC = 0.72;

export function InnerCircle() {
  const { innerCircle } = siteContent.support;
  const { innerCircleLogo, innerCircleJoin } = siteContent.assets;
  const groupHref = siteContent.links.innerCircle;
  const hasGroupLink = groupHref.startsWith("http");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const jumpToLogo = () => {
      if (video.currentTime < LOGO_ANIM_START_SEC) {
        video.currentTime = LOGO_ANIM_START_SEC;
      }
    };

    const startFromLogo = () => {
      jumpToLogo();
      void video.play().catch(() => {});
    };

    const onTimeUpdate = () => {
      // Keep loop restarts from replaying the text intro.
      if (video.currentTime < LOGO_ANIM_START_SEC) {
        video.currentTime = LOGO_ANIM_START_SEC;
      }
    };

    video.addEventListener("loadedmetadata", startFromLogo);
    video.addEventListener("loadeddata", startFromLogo);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("seeking", jumpToLogo);

    if (video.readyState >= 1) {
      startFromLogo();
    }

    return () => {
      video.removeEventListener("loadedmetadata", startFromLogo);
      video.removeEventListener("loadeddata", startFromLogo);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("seeking", jumpToLogo);
    };
  }, []);

  function handleJoin() {
    if (!hasGroupLink) return;
    window.open(groupHref, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="inner-circle-stage relative mx-auto flex w-full max-w-[860px] flex-col items-center text-center">
      <h1 className="sr-only">{innerCircle.headline}</h1>

      <div className="inner-circle-logo ml-[10px] w-full max-w-[780px]">
        <video
          ref={videoRef}
          className="block h-auto w-full mix-blend-screen"
          src={innerCircleLogo}
          muted
          playsInline
          loop
          preload="auto"
          aria-hidden
        />
      </div>

      <p className="inner-circle-copy font-subhead mt-5 max-w-[460px] text-[15px] leading-relaxed text-text-muted">
        {innerCircle.perks.join("  ·  ")}
      </p>

      <div className="inner-circle-cta mt-7 flex w-full flex-col items-center">
        <p className="text-[12px] font-bold tracking-[0.56px] text-accent-gold uppercase">
          {innerCircle.fundraising}
        </p>
        <button
          type="button"
          onClick={handleJoin}
          className="mx-auto mt-5 block w-full max-w-[380px] min-w-0 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.99]"
        >
          <Image
            src={innerCircleJoin}
            alt={innerCircle.cta}
            width={950}
            height={250}
            className="mx-auto block h-auto w-full"
          />
        </button>
      </div>
    </div>
  );
}
