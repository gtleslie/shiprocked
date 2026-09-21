"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { useForwardVerticalWheelToPage } from "@/lib/useForwardVerticalWheelToPage";

type BreakdownItem = {
  label: string;
  percent: number;
  description: string;
  image?: string;
};

type BudgetChartProps = {
  items: readonly BreakdownItem[];
  leading?: ReactNode;
};

const SLICE_COLORS = [
  "#d21f1f",
  "#d4a23c",
  "#f04a4a",
  "#a07828",
  "#c8c8c8",
];

function polarToCartesian(cx: number, cy: number, radius: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleRad),
    y: cy + radius * Math.sin(angleRad),
  };
}

function describeSlice(
  cx: number,
  cy: number,
  outerRadius: number,
  innerRadius: number,
  startAngle: number,
  endAngle: number,
) {
  const sweep = endAngle - startAngle;
  if (sweep <= 0) return "";

  const largeArc = sweep > 180 ? 1 : 0;
  const outerStart = polarToCartesian(cx, cy, outerRadius, endAngle);
  const outerEnd = polarToCartesian(cx, cy, outerRadius, startAngle);
  const innerStart = polarToCartesian(cx, cy, innerRadius, startAngle);
  const innerEnd = polarToCartesian(cx, cy, innerRadius, endAngle);

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArc} 0 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerStart.x} ${innerStart.y}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArc} 1 ${innerEnd.x} ${innerEnd.y}`,
    "Z",
  ].join(" ");
}

function wrapLabel(label: string): string[] {
  if (label.includes(" & ")) {
    const [left, right] = label.split(" & ");
    // Keep "&" on the first line so left-anchored callouts don't clip it.
    return [`${left} &`, right];
  }
  if (label.length > 22) {
    const words = label.split(" ");
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
  }
  return [label];
}

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

const AUTO_ADVANCE_MS = 5000;

export function BudgetChart({ items, leading }: BudgetChartProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [compactChart, setCompactChart] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  useForwardVerticalWheelToPage(trackRef);
  const ignoreScrollSync = useRef(false);
  const scrollSyncTimeout = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setCompactChart(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const width = 920;
  const height = 640;
  const cx = width / 2;
  const cy = height / 2;
  const baseOuter = compactChart ? 228 : 238;
  const activeOuter = compactChart ? 252 : 264;
  const innerRadius = 126;
  const gap = 1.75;
  const labelPadX = compactChart ? 18 : 12;
  const labelPadY = compactChart ? 52 : 40;
  const labelGap = compactChart ? 22 : 14;

  let angle = 0;
  const slices = items.map((item, index) => {
    const sweep = (item.percent / 100) * 360;
    const startAngle = angle + gap / 2;
    const endAngle = angle + sweep - gap / 2;
    const midAngle = angle + sweep / 2;
    angle += sweep;

    const isActive = index === activeIndex;
    const outerRadius = isActive ? activeOuter : baseOuter;
    const percentRadius = (outerRadius + innerRadius) / 2;
    const leaderInner = outerRadius + 12;
    const leaderOuter =
      outerRadius + (isActive ? 34 : 26) + (compactChart ? 10 : 0);
    const lines = wrapLabel(item.label);

    const percentPoint = polarToCartesian(cx, cy, percentRadius, midAngle);
    const leaderStart = polarToCartesian(cx, cy, leaderInner, midAngle);
    let leaderEnd = polarToCartesian(cx, cy, leaderOuter, midAngle);
    const isRight = leaderEnd.x >= cx;

    // Place text beside the leader tip with a clear gap (not on top of the dot).
    let labelPoint = {
      x: leaderEnd.x + (isRight ? labelGap : -labelGap),
      y: leaderEnd.y,
    };

    // Keep callouts inside the SVG so top/bottom labels (e.g. Distribution) aren't clipped.
    const multiLineLift = lines.length > 1 ? 8 : 0;
    labelPoint = {
      x: Math.min(width - labelPadX, Math.max(labelPadX, labelPoint.x)),
      y: Math.min(
        height - labelPadY,
        Math.max(labelPadY + multiLineLift, labelPoint.y),
      ),
    };
    leaderEnd = {
      x: Math.min(width - labelPadX - 8, Math.max(labelPadX + 8, leaderEnd.x)),
      y: Math.min(height - labelPadY + 4, Math.max(labelPadY - 4, leaderEnd.y)),
    };

    // Re-apply horizontal gap after clamping so text never touches the tip.
    labelPoint = {
      x: isRight
        ? Math.max(labelPoint.x, leaderEnd.x + labelGap)
        : Math.min(labelPoint.x, leaderEnd.x - labelGap),
      y: labelPoint.y,
    };
    labelPoint.x = Math.min(width - labelPadX, Math.max(labelPadX, labelPoint.x));

    if (isActive && index === 1) {
      // Festival submission fees — pull label below expanded slice.
      labelPoint.y += compactChart ? 5 * (height / 250) : 14;
      leaderEnd.y += 6;
    }

    if (isActive && index === 3) {
      // Travel & final voyage capture — keep multiline callout clear of the left edge.
      labelPoint.x += isRight ? 0 : 18;
      labelPoint.x = Math.min(width - labelPadX, Math.max(labelPadX + 24, labelPoint.x));
    }

    if (isActive && index === 4) {
      // Distribution & marketing — small slice; keep multiline label off the ring.
      labelPoint.x += isRight ? 12 : -12;
      labelPoint.y -= lines.length > 1 ? 18 : 12;
      leaderEnd.x += isRight ? 8 : -8;
      leaderEnd.y -= 6;
      labelPoint.x = Math.min(width - labelPadX, Math.max(labelPadX, labelPoint.x));
    }

    return {
      ...item,
      index,
      isActive,
      color: SLICE_COLORS[index % SLICE_COLORS.length],
      path: describeSlice(cx, cy, outerRadius, innerRadius, startAngle, endAngle),
      percentX: percentPoint.x,
      percentY: percentPoint.y,
      leaderStart,
      leaderEnd,
      labelX: labelPoint.x,
      labelY: labelPoint.y,
      textAnchor: (isRight ? "start" : "end") as "start" | "end",
      percentTextColor: index === 4 && !isActive ? "#111111" : "#ffffff",
      lines,
    };
  });

  const active = items[activeIndex] ?? items[0];
  const activeColor = SLICE_COLORS[activeIndex % SLICE_COLORS.length];

  const releaseScrollSync = (track: HTMLElement) => {
    track.style.scrollSnapType = "";
    ignoreScrollSync.current = false;
  };

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>(`[data-funding-slide="${index}"]`);
    if (!card) return;

    ignoreScrollSync.current = true;
    if (scrollSyncTimeout.current) {
      window.clearTimeout(scrollSyncTimeout.current);
    }

    track.style.scrollSnapType = "none";
    track.scrollTo({ left: Math.max(0, card.offsetLeft), behavior: "auto" });

    const finish = () => releaseScrollSync(track);
    if ("onscrollend" in track) {
      track.addEventListener("scrollend", finish, { once: true });
    } else {
      scrollSyncTimeout.current = window.setTimeout(finish, 48);
    }
  };

  const goTo = (index: number) => {
    const next = ((index % items.length) + items.length) % items.length;
    setActiveIndex(next);
    scrollToIndex(next);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      if (ignoreScrollSync.current) return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (ignoreScrollSync.current) return;

        const cards = Array.from(
          track.querySelectorAll<HTMLElement>("[data-funding-slide]"),
        );
        if (!cards.length) return;

        const viewportLeft = track.scrollLeft;
        let leftmostActive = 0;

        cards.forEach((card) => {
          const index = Number(card.dataset.fundingSlide);
          if (card.offsetLeft <= viewportLeft + 4) {
            leftmostActive = index;
          }
        });

        setActiveIndex((current) => (current === leftmostActive ? current : leftmostActive));
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
      if (scrollSyncTimeout.current) {
        window.clearTimeout(scrollSyncTimeout.current);
      }
    };
  }, [items.length]);

  useEffect(() => {
    if (paused || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(() => {
      goTo(activeIndex + 1);
    }, AUTO_ADVANCE_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, items.length, paused]);

  return (
    <div
      className="funding-viz"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="funding-viz-shell mt-1 grid grid-cols-1 gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] sm:items-stretch sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)]">
        {leading ? (
          <div className="funding-viz-leading shrink-0 sm:col-start-1 sm:row-start-1">{leading}</div>
        ) : null}

        <div className="budget-chart flex w-full justify-center max-sm:mx-auto max-sm:max-w-[min(21rem,96vw)] sm:col-start-2 sm:row-start-1 sm:row-span-2 sm:h-full sm:min-h-0 sm:min-w-0 sm:flex-1 sm:shrink-0 sm:self-stretch">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
          className="funding-pie-svg h-auto w-full drop-shadow-[0_0_28px_rgba(210,31,31,0.14)] sm:m-auto sm:block sm:h-full sm:w-auto sm:max-h-full sm:max-w-full"
          role="img"
          aria-label={`${active.label}: ${active.percent}% of funding allocation`}
        >
          <circle
            cx={cx}
            cy={cy}
            r={activeOuter + 6}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />

          {slices.map((slice) => (
            <g
              key={`${slice.label}-slice`}
              className="funding-slice-group"
              style={{ cursor: "pointer", outline: "none" }}
              onClick={() => goTo(slice.index)}
              onMouseDown={(event) => event.preventDefault()}
              role="button"
              tabIndex={0}
              aria-label={`Highlight ${slice.label}, ${slice.percent}%`}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  goTo(slice.index);
                }
              }}
            >
              <path
                d={slice.path}
                fill={slice.color}
                opacity={slice.isActive ? 1 : 0.32}
                className="funding-slice"
                style={{ transition: "opacity 0.35s ease", outline: "none" }}
              >
                <title>
                  {slice.label}: {slice.percent}%
                </title>
              </path>
            </g>
          ))}

          {slices.map((slice) => (
            <g
              key={`${slice.label}-callout`}
              opacity={slice.isActive ? 1 : 0.45}
              style={{ cursor: "pointer", transition: "opacity 0.35s ease", outline: "none" }}
              onClick={() => goTo(slice.index)}
              onMouseDown={(event) => event.preventDefault()}
            >
              <line
                x1={slice.leaderStart.x}
                y1={slice.leaderStart.y}
                x2={slice.leaderEnd.x}
                y2={slice.leaderEnd.y}
                stroke={slice.color}
                strokeWidth={slice.isActive ? 2 : 1.25}
                opacity="0.9"
              />
              <circle
                cx={slice.leaderEnd.x}
                cy={slice.leaderEnd.y}
                r={slice.isActive ? 3.25 : 2.25}
                fill={slice.color}
              />
              <text
                x={slice.labelX}
                y={slice.labelY - (slice.lines.length > 1 ? 9 : 0)}
                textAnchor={slice.textAnchor}
                fill={slice.isActive ? "#ffffff" : "#bdbdbd"}
                fontSize={slice.isActive ? "22" : "16"}
                fontWeight={slice.isActive ? "800" : "600"}
                style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}
              >
                {slice.lines.map((line, lineIndex) => (
                  <tspan
                    key={`${slice.label}-${lineIndex}`}
                    x={slice.labelX}
                    dy={lineIndex === 0 ? 0 : slice.isActive ? 26 : 20}
                  >
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          ))}

          {slices.map((slice) => (
            <text
              key={`${slice.label}-pct`}
              x={slice.percentX}
              y={slice.percentY}
              textAnchor="middle"
              dominantBaseline="central"
              fill={slice.percentTextColor}
              fontSize={
                slice.isActive
                  ? slice.percent <= 5
                    ? "18"
                    : "22"
                  : slice.percent <= 5
                    ? "15"
                    : "18"
              }
              fontWeight="800"
              opacity={slice.isActive ? 1 : 0.45}
              style={{
                fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                transition: "opacity 0.35s ease",
                pointerEvents: "none",
              }}
            >
              {slice.percent}%
            </text>
          ))}

          <circle cx={cx} cy={cy} r={innerRadius - 2} fill="#050505" />
          <foreignObject
            x={cx - innerRadius}
            y={cy - innerRadius}
            width={innerRadius * 2}
            height={innerRadius * 2}
            style={{ pointerEvents: "none" }}
          >
            <div
              className="flex h-full w-full flex-col items-center justify-center text-center"
              style={{ lineHeight: 1 }}
            >
              <span
                className="block text-[48px] font-black tracking-tight text-white"
                style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}
              >
                {active.percent}%
              </span>
              <span
                className="mt-2.5 block text-[13px] font-bold tracking-[1.6px] uppercase"
                style={{
                  color: activeColor,
                  fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
                }}
              >
                Of budget
              </span>
            </div>
          </foreignObject>
        </svg>
      </div>

        <div className="funding-viz-copy flex min-h-0 min-w-0 flex-col sm:col-start-1 sm:row-start-2">
        <div className="funding-carousel flex min-h-0 min-w-0 flex-col">

        <div
          ref={trackRef}
          className="funding-carousel-track"
          role="region"
          aria-label="Budget breakdown carousel"
          tabIndex={0}
        >
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <article
                key={item.label}
                data-funding-slide={index}
                className={`funding-carousel-card ship-card overflow-hidden ${isActive ? "is-active" : ""}`}
                onClick={() => goTo(index)}
              >
                <div className="relative hidden sm:block">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt=""
                      width={680}
                      height={520}
                      className="h-[220px] w-full object-cover md:h-[260px]"
                    />
                  ) : (
                    <ImagePlaceholder className="h-[220px] w-full md:h-[260px]" />
                  )}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/70 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute right-4 bottom-4 left-4">
                    <p
                      className="text-[28px] font-black leading-none"
                      style={{ color: SLICE_COLORS[index % SLICE_COLORS.length] }}
                    >
                      {item.percent}%
                    </p>
                  </div>
                </div>
                <div className="ship-card-footer px-3.5 py-3 sm:px-5 sm:py-4">
                  <p
                    className="text-[22px] font-black leading-none sm:hidden"
                    style={{ color: SLICE_COLORS[index % SLICE_COLORS.length] }}
                  >
                    {item.percent}%
                  </p>
                  <h3 className="text-[14px] font-bold tracking-[0.2px] text-white sm:mt-0 sm:text-[16px]">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-snug text-text-secondary sm:mt-2 sm:text-[13px] sm:leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="funding-carousel-dots flex flex-1 items-center justify-center gap-2">
            {items.map((item, index) => (
              <button
                key={`${item.label}-dot`}
                type="button"
                aria-label={`Show ${item.label}`}
                onClick={() => goTo(index)}
                className={`funding-carousel-dot ${index === activeIndex ? "is-active" : ""}`}
                style={
                  index === activeIndex
                    ? { backgroundColor: activeColor, borderColor: activeColor }
                    : undefined
                }
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous funding goal"
              onClick={() => goTo(activeIndex - 1)}
              className="characters-carousel-nav"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              aria-label="Next funding goal"
              onClick={() => goTo(activeIndex + 1)}
              className="characters-carousel-nav"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
