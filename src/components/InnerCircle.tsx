"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { siteContent } from "@content/site-content";

/** Skip intro; emblem animation starts here. */
const LOGO_ANIM_START_SEC = 0.72;

export function InnerCircle() {
  const { innerCircle } = siteContent.support;
  const { innerCircleLogo, innerCircleJoin } = siteContent.assets;
  const groupHref = siteContent.links.innerCircle;
  const hasGroupLink = groupHref.startsWith("http");
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoStageRef = useRef<HTMLDivElement>(null);
  const finishedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    const seekToStart = () =>
      new Promise<void>((resolve) => {
        if (Math.abs(video.currentTime - LOGO_ANIM_START_SEC) <= 0.02) {
          resolve();
          return;
        }
        const onSeeked = () => {
          video.removeEventListener("seeked", onSeeked);
          resolve();
        };
        video.addEventListener("seeked", onSeeked);
        video.currentTime = LOGO_ANIM_START_SEC;
      });

    const playOnce = async () => {
      if (cancelled || finishedRef.current) return;
      if (document.visibilityState !== "visible") return;

      try {
        if (video.currentTime < LOGO_ANIM_START_SEC - 0.01) {
          await seekToStart();
        }
        if (cancelled || finishedRef.current) return;
        await video.play();
      } catch {
        // Autoplay may stay blocked until interaction.
      }
    };

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      video.pause();
    };

    const onLoaded = () => {
      void seekToStart().then(() => playOnce());
    };

    const onEnded = () => {
      finish();
    };

    const onTimeUpdate = () => {
      if (finishedRef.current) return;
      const duration = video.duration;
      if (
        Number.isFinite(duration) &&
        duration > LOGO_ANIM_START_SEC + 0.2 &&
        video.currentTime >= duration - 0.04
      ) {
        finish();
      }
    };

    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("ended", onEnded);
    video.addEventListener("timeupdate", onTimeUpdate);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !finishedRef.current) {
          void playOnce();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(logoStageRef.current ?? video);

    if (video.readyState >= 1) {
      onLoaded();
    }

    return () => {
      cancelled = true;
      observer.disconnect();
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, []);

  function handleJoin() {
    if (!hasGroupLink) return;
    window.open(groupHref, "_blank", "noopener,noreferrer");
  }

  const videoSrc = `${innerCircleLogo}#t=${LOGO_ANIM_START_SEC}`;

  return (
    <div className="inner-circle-stage relative mx-auto flex w-full max-w-[860px] flex-col items-center text-center">
      <h1 className="sr-only">{innerCircle.headline}</h1>

      <div
        ref={logoStageRef}
        className="inner-circle-logo relative w-full max-w-[780px] overflow-hidden bg-transparent aspect-[1666/456]"
      >
        <video
          ref={videoRef}
          className="inner-circle-logo-video pointer-events-none block h-full w-full object-contain object-center"
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-label={innerCircle.headline}
        />
      </div>

      <p className="inner-circle-copy font-subhead mt-5 max-w-[560px] text-[15px] leading-relaxed text-white">
        {innerCircle.perks.join("  ·  ")}
      </p>

      <div className="inner-circle-cta mt-5 flex w-full flex-col items-center px-1 md:mt-7">
        <p className="inner-circle-salted font-salted tk-salted text-[18px] leading-none tracking-normal normal-case text-accent-turquoise md:text-[26px]">
          {innerCircle.fundraising}
        </p>
        <button
          type="button"
          onClick={handleJoin}
          className="mx-auto mt-4 block w-full max-w-[320px] min-w-0 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.99] md:mt-5 md:max-w-[380px]"
        >
          <Image
            src={innerCircleJoin}
            alt={innerCircle.cta}
            width={848}
            height={240}
            priority
            className="mx-auto block h-auto w-full aspect-[848/240]"
          />
        </button>
        <div className="font-shiprocked-neue mt-2.5 max-w-[34rem] px-1 md:mt-3">
          <p className="text-[17px] leading-tight whitespace-nowrap uppercase text-white max-sm:text-[13px] sm:text-[15px] md:text-[27px]">
            {innerCircle.merchNoteLead.includes("#soon") ? (
              <>
                {innerCircle.merchNoteLead.replace(/\s#soon\.?\s*$/, "").trim()}{" "}
                <span className="inner-circle-salted font-salted tk-salted tracking-normal normal-case text-accent-turquoise">
                  #soon
                </span>
                .
              </>
            ) : (
              innerCircle.merchNoteLead
            )}
          </p>
          <p className="inner-circle-copy font-subhead relative mt-0.5 text-[15px] leading-snug whitespace-nowrap text-white max-sm:mt-1.5 max-sm:text-[12px] md:mt-1">
            <span
              className="pointer-events-none absolute -inset-x-4 -inset-y-1.5 rounded-sm bg-black/55"
              aria-hidden
            />
            <span className="relative">{innerCircle.merchNoteDetail}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
