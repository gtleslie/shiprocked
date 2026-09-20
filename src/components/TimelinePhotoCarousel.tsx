"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const AUTO_ADVANCE_MS = 8000;

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

function TimelineCarouselControls({
  slideCount,
  index,
  goTo,
  className = "",
  dotStyle = "circle",
}: {
  slideCount: number;
  index: number;
  goTo: (next: number) => void;
  className?: string;
  dotStyle?: "circle" | "diamond";
}) {
  return (
    <div className={`flex items-center justify-between gap-3 ${className}`}>
      <button
        type="button"
        aria-label="Previous photo"
        onClick={() => goTo(index - 1)}
        className="hero-video-btn"
      >
        <ChevronLeftIcon />
      </button>
      <div className="flex items-center gap-2.5" role="tablist" aria-label="Photo slides">
        {Array.from({ length: slideCount }, (_, slideIndex) => {
          const isActive = slideIndex === index;
          if (dotStyle === "diamond") {
            return (
              <button
                key={slideIndex}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show photo ${slideIndex + 1}`}
                onClick={() => goTo(slideIndex)}
                className="flex h-5 w-5 items-center justify-center p-0"
              >
                <span
                  className={`block h-2.5 w-2.5 rotate-45 border transition-all duration-200 ${
                    isActive
                      ? "scale-110 border-accent-red bg-accent-red shadow-[0_0_8px_rgba(210,31,31,0.45)]"
                      : "border-accent-red/70 bg-black"
                  }`}
                />
              </button>
            );
          }
          return (
            <button
              key={slideIndex}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Show photo ${slideIndex + 1}`}
              onClick={() => goTo(slideIndex)}
              className={`rounded-full p-0 transition-colors ${
                isActive ? "bg-accent-gold" : "bg-white/35"
              } h-2.5 w-2.5 md:h-2 md:w-2`}
            />
          );
        })}
      </div>
      <button
        type="button"
        aria-label="Next photo"
        onClick={() => goTo(index + 1)}
        className="hero-video-btn"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}

export function TimelinePhotoCarousel({
  slides,
}: {
  slides: readonly TimelineSlide[];
}) {
  const [index, setIndex] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      const count = slides.length;
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [slides.length],
  );

  useEffect(() => {
    if (paused || slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(() => {
      goTo(index + 1);
    }, AUTO_ADVANCE_MS);

    return () => window.clearTimeout(timer);
  }, [goTo, index, paused, slides.length]);

  if (slides.length === 0) return null;

  return (
    <div
      className="relative h-[360px] w-full overflow-hidden border border-border bg-bg-card lg:h-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="From dock to deadline photos"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
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
        className="absolute inset-x-0 top-0 z-10 hidden bg-gradient-to-b from-black/80 via-black/45 to-transparent px-3 pt-3 pb-10 md:block"
      >
        <TimelineCarouselControls slideCount={slides.length} index={index} goTo={goTo} />
      </div>

      <div
        className="absolute inset-0 touch-pan-y select-none"
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest("button")) return;
          setPaused(true);
          setDragStart(event.clientX);
        }}
        onPointerUp={(event) => {
          setPaused(false);
          if (dragStart == null) return;
          const delta = event.clientX - dragStart;
          if (delta > 40) goTo(index - 1);
          if (delta < -40) goTo(index + 1);
          setDragStart(null);
        }}
        onPointerCancel={() => {
          setPaused(false);
          setDragStart(null);
        }}
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

      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/70 to-transparent px-3 pt-8 pb-3 md:hidden">
        <TimelineCarouselControls
          slideCount={slides.length}
          index={index}
          goTo={goTo}
          dotStyle="diamond"
        />
      </div>

      <p className="sr-only">
        Slide {index + 1} of {slides.length}
      </p>
    </div>
  );
}
