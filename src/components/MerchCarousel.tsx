"use client";

import { useEffect, useRef, useState } from "react";
import { useForwardVerticalWheelToPage } from "@/lib/useForwardVerticalWheelToPage";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { siteContent } from "@content/site-content";

type MerchCarouselProps = {
  onSelect: (tierId: string) => void;
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

export function MerchCarousel({ onSelect }: MerchCarouselProps) {
  const items = siteContent.support.tiers.items;
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
  }, [items.length]);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-carousel-card]");
    const gap = 24;
    const amount = (card?.offsetWidth ?? track.clientWidth * 0.7) + gap;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="merch-carousel">
      <div
        ref={trackRef}
        className="merch-carousel-track"
        role="region"
        aria-label="Merch and rewards carousel"
        tabIndex={0}
      >
        {items.map((tier) => (
          <div key={tier.id} data-carousel-card className="merch-carousel-card">
            <button
              type="button"
              onClick={() => onSelect(tier.id)}
              className="ship-card group w-full overflow-hidden text-left"
            >
              <div className="relative h-[180px] overflow-hidden bg-[#0c0c0c]">
                {tier.image ? (
                  <Image
                    src={tier.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 80vw"
                    className="object-cover"
                  />
                ) : (
                  <ImagePlaceholder className="h-full w-full" />
                )}
              </div>
              <div className="ship-card-footer px-5 py-4">
                <p className="text-[11px] font-bold tracking-[0.44px] text-accent-gold uppercase">
                  {tier.name}
                </p>
                <p className="mt-2 text-[15px] leading-snug font-semibold text-white">
                  {tier.reward}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-end gap-2">
        <button
          type="button"
          aria-label="Previous merch"
          disabled={!canPrev}
          onClick={() => scrollByCard(-1)}
          className="characters-carousel-nav"
        >
          <ChevronLeftIcon />
        </button>
        <button
          type="button"
          aria-label="Next merch"
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
