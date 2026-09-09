"use client";

import { useEffect, useRef, useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type CharacterSubject = {
  name: string;
  note: string;
};

type CharactersCarouselProps = {
  subjects: CharacterSubject[];
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

export function CharactersCarousel({ subjects }: CharactersCarouselProps) {
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

  return (
    <div className="characters-carousel">
      <div
        ref={trackRef}
        className="characters-carousel-track"
        role="region"
        aria-label="Character voices carousel"
        tabIndex={0}
      >
        {subjects.map((subject, index) => (
          <article
            key={`${subject.name}-${index}`}
            data-carousel-card
            className="characters-carousel-card ship-card overflow-hidden"
          >
            <ImagePlaceholder className="h-[220px] w-full" />
            <div className="ship-card-footer px-5 py-4">
              <h3 className="text-[15px] font-bold text-white">{subject.name}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-text-secondary">
                {subject.note}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-end gap-2">
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
    </div>
  );
}
