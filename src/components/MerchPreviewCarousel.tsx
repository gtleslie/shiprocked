"use client";

import { useEffect, useRef, useState } from "react";
import { MerchFlipCard, type MerchPreviewCard } from "@/components/MerchFlipCard";
import { useForwardVerticalWheelToPage } from "@/lib/useForwardVerticalWheelToPage";

type MerchPreviewCarouselProps = {
  cards: readonly MerchPreviewCard[];
  label?: string;
};

function ChevronLeftIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MerchPreviewCarousel({
  cards,
  label = "Merchandise preview carousel",
}: MerchPreviewCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  useForwardVerticalWheelToPage(trackRef);
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
  }, [cards.length]);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-merch-carousel-card]");
    const gap = 24;
    const amount = (card?.offsetWidth ?? track.clientWidth * 0.75) + gap;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="merch-preview-carousel">
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          aria-label="Previous merchandise preview"
          disabled={!canPrev}
          onClick={() => scrollByCard(-1)}
          className="characters-carousel-nav"
        >
          <ChevronLeftIcon />
        </button>
        <button
          type="button"
          aria-label="Next merchandise preview"
          disabled={!canNext}
          onClick={() => scrollByCard(1)}
          className="characters-carousel-nav"
        >
          <ChevronRightIcon />
        </button>
      </div>

      <div
        ref={trackRef}
        className="merch-preview-carousel-track mt-4 sm:mt-6"
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        {cards.map((card) => (
          <div key={card.id} data-merch-carousel-card className="merch-preview-carousel-card">
            <MerchFlipCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}
