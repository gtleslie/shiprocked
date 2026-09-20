"use client";

import { useState } from "react";

type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

type TimelineExpandableProps = {
  items: readonly TimelineItem[];
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

export function TimelineExpandable({ items }: TimelineExpandableProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0];
  const atStart = activeIndex <= 0;
  const atEnd = activeIndex >= items.length - 1;

  return (
    <>
      <div className="md:hidden">
        <div className="flex items-start gap-2">
          <button
            type="button"
            aria-label="Previous milestone"
            disabled={atStart}
            onClick={() => setActiveIndex((index) => Math.max(0, index - 1))}
            className="characters-carousel-nav mt-0.5 shrink-0"
          >
            <ChevronLeftIcon />
          </button>
          <div className="relative min-w-0 flex-1 px-0.5">
          <div className="relative flex justify-between gap-1">
            <div
              className="pointer-events-none absolute top-[11px] h-0.5 -translate-y-1/2 bg-accent-red"
              style={{
                left: `${50 / items.length}%`,
                right: `${50 / items.length}%`,
              }}
              aria-hidden
            />
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.date}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="flex min-w-0 flex-1 flex-col items-center text-center"
                  aria-pressed={isActive}
                  aria-label={`${item.date}: ${item.title}`}
                >
                  <span className="relative z-[1] flex h-[22px] w-[22px] items-center justify-center">
                    <span
                      className={`block h-3.5 w-3.5 rotate-45 border-2 transition-all duration-200 ${
                        isActive
                          ? "scale-110 border-accent-red bg-accent-red shadow-[0_0_10px_rgba(210,31,31,0.45)]"
                          : "border-accent-red/80 bg-black"
                      }`}
                    />
                  </span>
                  <span
                    className={`mt-2 max-w-full text-[10px] leading-tight font-bold tracking-[0.24px] uppercase ${
                      isActive ? "text-accent-gold" : "text-white/45"
                    }`}
                  >
                    {item.date}
                  </span>
                </button>
              );
            })}
          </div>
          </div>
          <button
            type="button"
            aria-label="Next milestone"
            disabled={atEnd}
            onClick={() => setActiveIndex((index) => Math.min(items.length - 1, index + 1))}
            className="characters-carousel-nav mt-0.5 shrink-0"
          >
            <ChevronRightIcon />
          </button>
        </div>

        <div className="mt-6 min-h-[7.5rem]">
          <h3 className="text-[18px] font-bold text-white">{active.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-white/80">
            {active.description}
          </p>
        </div>
      </div>

      <div className="relative hidden space-y-8 border-l-2 border-accent-red pl-6 md:block">
        {items.map((item) => (
          <div key={item.date}>
            <p className="text-[12px] font-bold tracking-[0.48px] text-accent-gold uppercase">
              {item.date}
            </p>
            <h3 className="mt-2 text-[18px] font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/80">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
