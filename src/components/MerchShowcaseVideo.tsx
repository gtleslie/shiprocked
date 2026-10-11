"use client";

import Image from "next/image";

type MerchShowcaseVideoProps = {
  motionMediaLabel: string;
  comingSoon: string;
  videoSrc: string;
  poster: string;
  caption: string;
};

export function MerchShowcaseVideo({
  motionMediaLabel,
  comingSoon,
  videoSrc,
  poster,
  caption,
}: MerchShowcaseVideoProps) {
  const hasVideo = Boolean(videoSrc?.trim());

  return (
    <div className="merch-showcase w-full max-w-md md:max-w-lg">
      <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
        <p className="font-overline text-[12px] font-bold text-accent-gold uppercase md:text-[13px]">
          {motionMediaLabel}
        </p>
        {!hasVideo ? (
          <span className="text-[10px] font-bold tracking-[0.32px] text-accent-red uppercase">
            {comingSoon}
          </span>
        ) : null}
      </div>

      <div className="merch-showcase-frame relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border bg-black">
        {hasVideo ? (
          <video
            className="h-full w-full object-cover"
            src={videoSrc}
            poster={poster}
            controls
            playsInline
            preload="metadata"
          >
            <track kind="captions" />
          </video>
        ) : (
          <>
            <Image
              src={poster}
              alt=""
              fill
              sizes="(max-width: 768px) 90vw, 512px"
              className="object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-black/35" aria-hidden />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="rounded border border-white/15 bg-black/70 px-3 py-1 text-[10px] font-bold tracking-[0.32px] text-white uppercase">
                {comingSoon}
              </span>
            </div>
          </>
        )}
      </div>

      {!hasVideo ? (
        <p className="mt-2 max-w-sm text-[13px] leading-snug text-text-dim">{caption}</p>
      ) : null}
    </div>
  );
}
