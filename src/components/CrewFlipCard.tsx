"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type CrewMember = {
  name: string;
  role?: string;
  bio: string;
  image?: string;
};

type CrewFlipCardProps = {
  member: CrewMember;
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

export function CrewFlipCard({ member }: CrewFlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const hoverFlip = useRef(false);

  return (
    <button
      type="button"
      aria-pressed={flipped}
      aria-label={`${member.name}${member.role ? `, ${member.role}` : ""}. ${flipped ? "Showing bio. Click to flip back." : "Hover or click to flip and reveal bio."}`}
      onPointerEnter={(event) => {
        if (event.pointerType !== "mouse") return;
        hoverFlip.current = true;
        setFlipped(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== "mouse") return;
        hoverFlip.current = false;
        setFlipped(false);
      }}
      onClick={() => {
        if (hoverFlip.current) return;
        setFlipped((value) => !value);
      }}
      className="crew-flip-card group w-full text-left"
    >
      <div className={`crew-flip-inner ${flipped ? "is-flipped" : ""}`}>
        <div className="crew-flip-face crew-flip-front flex h-full flex-col overflow-hidden">
          <div className="ship-card flex h-full min-h-0 flex-col overflow-hidden border-b border-border">
            <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-bg-card sm:h-[280px]">
              {member.image ? (
                <Image
                  src={member.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 33vw, 85vw"
                  className="object-cover object-top"
                />
              ) : (
                <ImagePlaceholder className="h-full w-full" />
              )}
            </div>
            <div className="ship-card-footer mt-auto shrink-0 px-5 py-4">
            <h3 className="text-[16px] font-bold tracking-[0.2px] text-white">
              {member.name}
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
          <div className="flex h-full min-h-0 flex-col px-5 py-5 md:px-4 md:py-4">
            <div className="shrink-0">
              <p className="text-[12px] font-bold tracking-[0.44px] text-accent-gold uppercase">
                Bio
              </p>
              <h3 className="mt-2 text-[17px] font-bold tracking-[0.2px] text-white md:mt-1.5 md:text-[16px]">
                {member.name}
              </h3>
              {member.role && (
                <p className="mt-0.5 text-[12px] font-bold tracking-[0.44px] text-accent-red uppercase md:text-[11px]">
                  {member.role}
                </p>
              )}
            </div>
            <p className="mt-3 min-h-0 flex-1 overflow-y-auto overscroll-contain pb-0.5 text-[15px] leading-relaxed text-text-muted md:mt-2 md:text-[13px] md:leading-snug">
              {member.bio}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}
