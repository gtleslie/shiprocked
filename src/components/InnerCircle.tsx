"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteContent } from "@content/site-content";

/** Skip intro text; start when the central logo begins animating in. */
const LOGO_ANIM_START_SEC = 0.72;
/** Luminance at or below this becomes transparent (video black plate). */
const BLACK_LUMA_CUTOFF = 28;

export function InnerCircle() {
  const { innerCircle } = siteContent.support;
  const { innerCircleLogo, innerCircleJoin } = siteContent.assets;
  const groupHref = siteContent.links.innerCircle;
  const hasGroupLink = groupHref.startsWith("http");
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);
  const lastTimeRef = useRef(-1);
  const logoVisibleRef = useRef(false);
  const [logoVisible, setLogoVisible] = useState(false);

  const revealLogo = () => {
    if (logoVisibleRef.current) return;
    logoVisibleRef.current = true;
    setLogoVisible(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let cancelled = false;
    let bootstrapped = false;

    const seekToLogoStart = (): Promise<void> =>
      new Promise((resolve) => {
        if (video.currentTime >= LOGO_ANIM_START_SEC - 0.02) {
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

    const paintFrame = (): boolean => {
      const w = video.videoWidth;
      const h = video.videoHeight;
      if (
        !w ||
        !h ||
        video.readyState < 2 ||
        video.currentTime < LOGO_ANIM_START_SEC - 0.02
      ) {
        return false;
      }

      if (video.currentTime === lastTimeRef.current) {
        return logoVisibleRef.current;
      }

      lastTimeRef.current = video.currentTime;

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }

      try {
        ctx.drawImage(video, 0, 0, w, h);
        const frame = ctx.getImageData(0, 0, w, h);
        const data = frame.data;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const luma = 0.299 * r + 0.587 * g + 0.114 * b;
          if (luma <= BLACK_LUMA_CUTOFF) {
            data[i + 3] = 0;
          }
        }
        ctx.putImageData(frame, 0, 0);
      } catch {
        ctx.drawImage(video, 0, 0, w, h);
      }

      return true;
    };

    const bootstrap = async () => {
      if (bootstrapped || cancelled) return;
      bootstrapped = true;

      video.pause();
      await seekToLogoStart();
      if (cancelled) return;

      if (paintFrame() && !cancelled) {
        revealLogo();
      }

      try {
        await video.play();
      } catch {
        // Autoplay may be blocked until interaction; first frame is still shown.
      }
    };

    const onTimeUpdate = () => {
      if (video.currentTime < LOGO_ANIM_START_SEC) {
        video.currentTime = LOGO_ANIM_START_SEC;
      }
    };

    const loopFromLogo = () => {
      lastTimeRef.current = -1;
      video.currentTime = LOGO_ANIM_START_SEC;
      void video.play().catch(() => {});
    };

    const tick = () => {
      if (paintFrame() && !cancelled) {
        revealLogo();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const onLoadedData = () => {
      void bootstrap();
    };

    video.addEventListener("loadeddata", onLoadedData);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", loopFromLogo);

    if (video.readyState >= 2) {
      void bootstrap();
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadeddata", onLoadedData);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", loopFromLogo);
      video.pause();
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

      <div className="inner-circle-logo relative w-full max-w-[780px] overflow-hidden">
        <video
          ref={videoRef}
          className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          aria-hidden
          tabIndex={-1}
        />
        <canvas
          ref={canvasRef}
          width={1666}
          height={456}
          className={`absolute inset-0 block h-full w-full transition-opacity duration-150 ${
            logoVisible ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
        />
      </div>

      <p className="inner-circle-copy font-subhead mt-5 max-w-[460px] text-[15px] leading-relaxed text-white">
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
        <div className="font-shiprocked-neue mt-7 max-w-[34rem] px-1 md:mt-10">
          <p className="text-[17px] leading-snug text-white md:text-[27px]">
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
          <p className="text-[16px] leading-snug text-white md:text-[24px]">
            {innerCircle.merchNoteDetail.startsWith("Inner Circle") ? (
              <>
                <span className="inner-circle-salted font-salted tk-salted tracking-normal normal-case">
                  Inner Circle
                </span>
                {innerCircle.merchNoteDetail.slice("Inner Circle".length)}
              </>
            ) : (
              innerCircle.merchNoteDetail
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
