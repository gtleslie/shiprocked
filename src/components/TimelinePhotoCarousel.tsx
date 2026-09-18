"use client";

import { useCallback, useState } from "react";
import Image from "next/image";

type TimelineSlide = {
  image: string;
  alt: string;
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

export function TimelinePhotoCarousel({
  slides,
}: {
  slides: readonly TimelineSlide[];
}) {
  const [index, setIndex] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);

  const goTo = useCallback(
    (next: number) => {
      const count = slides.length;
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [slides.length],
  );

  if (slides.length === 0) return null;

  return (
    <div
      className="relative h-[360px] w-full overflow-hidden border border-border bg-bg-card lg:h-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="From dock to deadline photos"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goTo(index - 1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goTo(index + 1);
        }
      }}
    >
      <div
        className="absolute inset-0 touch-pan-y select-none"
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest("button")) return;
          setDragStart(event.clientX);
        }}
        onPointerUp={(event) => {
          if (dragStart == null) return;
          const delta = event.clientX - dragStart;
          if (delta > 40) goTo(index - 1);
          if (delta < -40) goTo(index + 1);
          setDragStart(null);
        }}
        onPointerCancel={() => setDragStart(null)}
      >
        {slides.map((item, slideIndex) => (
          <Image
            key={item.image}
            src={item.image}
            alt={slideIndex === index ? item.alt : ""}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className={`pointer-events-none object-cover transition-opacity duration-500 ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
            priority={slideIndex === 0}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent p-3 pt-10">
        <button
          type="button"
          aria-label="Previous photo"
          onClick={() => goTo(index - 1)}
          className="characters-carousel-nav"
        >
          <ChevronLeftIcon />
        </button>
        <div className="flex items-center gap-2" aria-hidden>
          {slides.map((item, slideIndex) => (
            <span
              key={item.image}
              className={`h-1.5 w-1.5 rounded-full ${
                slideIndex === index ? "bg-accent-gold" : "bg-white/35"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next photo"
          onClick={() => goTo(index + 1)}
          className="characters-carousel-nav"
        >
          <ChevronRightIcon />
        </button>
      </div>

      <p className="sr-only">
        Slide {index + 1} of {slides.length}
      </p>
    </div>
  );
}
