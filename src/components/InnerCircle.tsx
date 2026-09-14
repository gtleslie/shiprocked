"use client";

import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

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

    const paintFrame = () => {
      const w = video.videoWidth;
      const h = video.videoHeight;
      if (w && h && video.readyState >= 2 && video.currentTime !== lastTimeRef.current) {
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
            // Rec. 601 luma — knock out the solid black plate.
            const luma = 0.299 * r + 0.587 * g + 0.114 * b;
            if (luma <= BLACK_LUMA_CUTOFF) {
              data[i + 3] = 0;
            }
          }
          ctx.putImageData(frame, 0, 0);
        } catch {
          // If the canvas is tainted, fall back to the raw frame.
          ctx.drawImage(video, 0, 0, w, h);
        }
      }

      rafRef.current = requestAnimationFrame(paintFrame);
    };

    video.addEventListener("loadedmetadata", startFromLogo);
    video.addEventListener("loadeddata", startFromLogo);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("seeking", jumpToLogo);

    if (video.readyState >= 1) {
      startFromLogo();
    }

    rafRef.current = requestAnimationFrame(paintFrame);

    return () => {
      cancelAnimationFrame(rafRef.current);
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

      <div className="inner-circle-logo relative ml-[10px] w-full max-w-[780px]">
        {/* Keep the video laid out so the browser continues decoding frames. */}
        <video
          ref={videoRef}
          className="pointer-events-none absolute inset-0 h-auto w-full opacity-0"
          src={innerCircleLogo}
          muted
          playsInline
          loop
          autoPlay
          preload="auto"
          aria-hidden
          tabIndex={-1}
        />
        <canvas ref={canvasRef} className="relative block h-auto w-full" aria-hidden />
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
