"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { CrewFlipCard } from "@/components/CrewFlipCard";

type CharacterSubject = {
  name: string;
  nameSuffix?: string;
  role?: string;
  bio: string;
  image?: string;
};

type CharactersCarouselProps = {
  subjects: readonly CharacterSubject[];
  label?: string;
  header?: ReactNode;
  /** Applies a slightly lower photo focal point so faces sit higher in the card. */
  characterPhotoFocus?: boolean;
};

function ChevronLeftIcon({ className = "h-4 w-4" }: { className?: string }) {
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
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon({ className = "h-4 w-4" }: { className?: string }) {
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
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function CharactersCarousel({
  subjects,
  label = "Character carousel",
  header,
  characterPhotoFocus = false,
}: CharactersCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateControls = () => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < maxScroll - 4);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateControls();
    track.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      track.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, [subjects.length]);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-carousel-card]");
    const gap = 24;
    const amount = (card?.offsetWidth ?? track.clientWidth * 0.7) + gap;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const nav = (
    <div className="flex shrink-0 items-center justify-end gap-2">
      <button
        type="button"
        aria-label="Previous characters"
        disabled={!canPrev}
        onClick={() => scrollByCard(-1)}
        className="characters-carousel-nav"
      >
        <ChevronLeftIcon />
      </button>
      <button
        type="button"
        aria-label="Next characters"
        disabled={!canNext}
        onClick={() => scrollByCard(1)}
        className="characters-carousel-nav"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );

  return (
    <div
      className={`characters-carousel${characterPhotoFocus ? " characters-carousel--character-focus" : ""}`}
    >
      {header ? (
        <div className="flex flex-row items-center justify-between gap-2 sm:items-end sm:gap-6">
          <div className="min-w-0 flex-1 pr-0.5">{header}</div>
          {nav}
        </div>
      ) : (
        <div className="mb-4">{nav}</div>
      )}

      <div
        ref={trackRef}
        className={`characters-carousel-track${header ? " mt-4 sm:mt-8" : ""}`}
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        {subjects.map((subject, index) => (
          <div
            key={`${subject.name}-${index}`}
            data-carousel-card
            className="characters-carousel-card"
          >
            <CrewFlipCard member={subject} />
          </div>
        ))}
      </div>
    </div>
  );
}
