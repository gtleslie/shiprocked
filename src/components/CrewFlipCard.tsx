"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type CrewMember = {
  name: string;
  nameSuffix?: string;
  role?: string;
  bio: string;
  image?: string;
  imageFit?: "cover" | "contain";
};

type CrewFlipCardProps = {
  member: CrewMember;
  /** Meet the Characters carousel — taller card and bio layout tuned for longer copy. */
  variant?: "crew" | "character";
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

function FlipBadge() {
  return (
    <span className="crew-flip-badge" title="Flip card">
      <FlipCardIcon className="h-[15px] w-[15px]" />
    </span>
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

export function CrewFlipCard({ member, variant = "crew" }: CrewFlipCardProps) {
  const isCharacter = variant === "character";
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
      aria-label={`${member.name}${member.role ? `, ${member.role}` : ""}. ${flipped ? "Showing bio. Click to flip back." : "Hover or click to flip and reveal bio."}`}
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
      className={`crew-flip-card group w-full text-left${isCharacter ? " crew-flip-card--character" : ""}${mobileInstantFlip ? " crew-flip-card--instant" : ""}`}
    >
      <div
        className={`crew-flip-inner ${flipped ? "is-flipped" : ""}${mobileInstantFlip ? " crew-flip-inner--instant" : ""}`}
      >
        <div className="crew-flip-face crew-flip-front flex h-full flex-col overflow-hidden">
          <div className="ship-card crew-flip-front-card flex h-full min-h-0 flex-col overflow-hidden border-b border-border">
            <div className="crew-flip-front-image relative h-[200px] w-full max-h-[200px] shrink-0 overflow-hidden bg-bg-card sm:h-[280px] sm:max-h-[280px]">
              {member.image ? (
                <Image
                  src={member.image}
                  alt=""
                  fill
                  sizes="(max-width: 639px) 78vw, (min-width: 640px) 33vw, 85vw"
                  className={
                    member.imageFit === "contain"
                      ? "object-contain object-center max-sm:scale-[0.98]"
                      : "object-cover object-top"
                  }
                />
              ) : (
                <ImagePlaceholder className="h-full w-full" />
              )}
            </div>
            <div className="ship-card-footer shrink-0 px-5 pt-2.5 pb-2 sm:mt-auto sm:py-4">
            <h3 className="text-[16px] font-bold tracking-[0.2px] text-white">
              {member.name}
              {member.nameSuffix ? (
                <span className="text-[13px] font-semibold italic uppercase tracking-[0.2px] text-white/80 sm:text-[14px]">
                  {" "}
                  {member.nameSuffix}
                </span>
              ) : null}
            </h3>
            {member.role && (
              <p className="mt-1 text-[11px] font-bold tracking-[0.44px] text-accent-red uppercase">
                {member.role}
              </p>
            )}
            </div>
          </div>
          <FlipBadge />
        </div>

        <div className="crew-flip-face crew-flip-back ship-card h-full overflow-hidden border-b border-border">
          <div
            className={`flex h-full min-h-0 flex-col ${isCharacter ? "crew-flip-back-inner px-[1.125rem] py-4 sm:px-5 sm:py-4" : "px-4 py-3.5 sm:px-4 sm:py-3"}`}
          >
            <div className={`shrink-0 ${isCharacter ? "pb-2.5" : "pb-2"}`}>
              <h3 className="text-[15px] leading-tight font-bold tracking-[0.2px] text-white sm:text-[16px]">
                {member.name}
                {member.nameSuffix ? (
                  <span className="text-[13px] font-semibold italic uppercase tracking-[0.2px] text-white/80 sm:text-[14px]">
                    {" "}
                    {member.nameSuffix}
                  </span>
                ) : null}
              </h3>
              {member.role ? (
                <p className="mt-0.5 text-[11px] font-bold tracking-[0.44px] text-accent-red uppercase">
                  {member.role}
                </p>
              ) : null}
            </div>
            <div
              className={`flex min-h-0 flex-1 flex-col ${isCharacter ? "justify-center" : ""}`}
            >
              <p
                className={
                  isCharacter
                    ? "crew-flip-back-bio max-h-full min-h-0 overflow-y-auto overscroll-contain text-pretty text-[14px] leading-[1.58] text-text-muted sm:text-[15px] sm:leading-[1.62]"
                    : "min-h-0 flex-1 overflow-y-auto overscroll-contain text-[13px] leading-snug text-text-muted sm:text-[14px] sm:leading-relaxed"
                }
              >
                {member.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
