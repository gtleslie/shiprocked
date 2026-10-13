"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export type MerchPreviewCard = {
  id: string;
  name: string;
  tier: string;
  price: number;
  illustration: string;
  included: readonly string[];
};

type MerchFlipCardProps = {
  card: MerchPreviewCard;
};

function FlipCardIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}

const MOBILE_FLIP_QUERY = "(max-width: 639px), (hover: none) and (pointer: coarse)";

function subscribeMobileFlip(onChange: () => void) {
  const media = window.matchMedia(MOBILE_FLIP_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getMobileFlipSnapshot() {
  return window.matchMedia(MOBILE_FLIP_QUERY).matches;
}

function getMobileFlipServerSnapshot() {
  return false;
}

export function MerchFlipCard({ card }: MerchFlipCardProps) {
  const mobileInstantFlip = useSyncExternalStore(
    subscribeMobileFlip,
    getMobileFlipSnapshot,
    getMobileFlipServerSnapshot,
  );
  const [flipped, setFlipped] = useState(false);
  const hoverFlip = useRef(false);

  return (
    <button
      type="button"
      aria-pressed={flipped}
      aria-label={`${card.name}. ${flipped ? "Showing included items. Click to flip back." : "Hover or click to flip and see what's included."}`}
      onPointerEnter={(event) => {
        if (mobileInstantFlip || event.pointerType !== "mouse") return;
        hoverFlip.current = true;
        setFlipped(true);
      }}
      onPointerLeave={(event) => {
        if (mobileInstantFlip || event.pointerType !== "mouse") return;
        hoverFlip.current = false;
        setFlipped(false);
      }}
      onClick={() => {
        if (hoverFlip.current) return;
        setFlipped((value) => !value);
      }}
      className={`merch-flip-card group w-full text-left${mobileInstantFlip ? " merch-flip-card--instant" : ""}`}
    >
      <div
        className={`merch-flip-inner ${flipped ? "is-flipped" : ""}${mobileInstantFlip ? " merch-flip-inner--instant" : ""}`}
      >
        <div className="merch-flip-face merch-flip-front flex h-full flex-col overflow-hidden">
          <div className="ship-card merch-flip-front-card relative h-full min-h-0 overflow-hidden border-b border-border">
            <div className="merch-flip-illustration relative h-full min-h-0 overflow-hidden bg-[#0a0a0a]">
              {card.illustration ? (
                <Image
                  src={card.illustration}
                  alt=""
                  fill
                  sizes="(max-width: 639px) 78vw, (min-width: 640px) 33vw, 28vw"
                  className="object-contain object-center p-3 sm:p-4"
                />
              ) : (
                <ImagePlaceholder className="h-full w-full" />
              )}
            </div>
          </div>
          <span className="crew-flip-badge" title="Flip card">
            <FlipCardIcon className="h-[15px] w-[15px]" />
          </span>
        </div>

        <div className="merch-flip-face merch-flip-back ship-card h-full overflow-hidden border-b border-border bg-black">
          <div className="flex h-full min-h-0 flex-col px-4 py-4 sm:px-5 sm:py-5">
            <p className="text-[10px] font-bold tracking-[0.44px] text-accent-gold uppercase">
              {card.tier}
            </p>
            <h3 className="mt-1 text-[18px] font-black tracking-[0.2px] text-white sm:text-[20px]">
              {card.name}
            </h3>
            <p className="mt-1 text-[22px] font-black text-white">${card.price.toLocaleString()}</p>
            <ul className="mt-4 min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
              {card.included.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-[13px] leading-snug text-text-secondary sm:text-[14px]"
                >
                  <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-accent-red" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </button>
  );
}
