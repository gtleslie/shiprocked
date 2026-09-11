"use client";

import { useRef, useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type CrewMember = {
  name: string;
  role?: string;
  bio: string;
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
        <div className="crew-flip-face crew-flip-front ship-card overflow-hidden">
          <ImagePlaceholder className="h-[280px] w-full" />
          <div className="ship-card-footer px-5 py-4">
            <h3 className="text-[16px] font-bold tracking-[0.2px] text-white">
              {member.name}
            </h3>
            {member.role && (
              <p className="mt-1 text-[11px] font-bold tracking-[0.44px] text-accent-red uppercase">
                {member.role}
              </p>
            )}
          </div>
          <FlipBadge />
        </div>

        <div className="crew-flip-face crew-flip-back ship-card overflow-hidden">
          <div className="flex h-full flex-col px-5 py-5">
            <p className="text-[11px] font-bold tracking-[0.44px] text-accent-gold uppercase">
              Bio
            </p>
            <h3 className="mt-3 text-[16px] font-bold tracking-[0.2px] text-white">
              {member.name}
            </h3>
            {member.role && (
              <p className="mt-1 text-[11px] font-bold tracking-[0.44px] text-accent-red uppercase">
                {member.role}
              </p>
            )}
            <p className="mt-5 text-[13px] leading-relaxed text-text-muted">
              {member.bio}
            </p>
          </div>
          <FlipBadge />
        </div>
      </div>
    </button>
  );
}
