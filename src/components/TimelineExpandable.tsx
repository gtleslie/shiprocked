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

export function TimelineExpandable({ items }: TimelineExpandableProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0];

  return (
    <>
      <div className="md:hidden">
        <div className="relative px-1">
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
                  <span
                    className={`relative z-[1] block h-[22px] w-[22px] rounded-full border-2 transition-colors ${
                      isActive
                        ? "border-accent-red bg-accent-red"
                        : "border-accent-red/70 bg-black"
                    }`}
                  />
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
