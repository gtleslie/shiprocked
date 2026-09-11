import { ReactNode } from "react";

export function ImagePlaceholder({ className = "" }: { className?: string }) {
  return <div className={`image-placeholder ${className}`} />;
}

function cardEdgeClip(ampPct = 2.15, insetPct = 3.75, waves = 3) {
  const left: string[] = [];
  const right: string[] = [];
  const steps = waves * 16;

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const y = t * 100;
    const offset = Math.sin(t * Math.PI * waves) * ampPct;
    left.push(`${(insetPct + offset).toFixed(2)}% ${y.toFixed(2)}%`);
    right.push(`${(100 - insetPct + offset).toFixed(2)}% ${y.toFixed(2)}%`);
  }

  return `polygon(${[...left, ...right.reverse()].join(", ")})`;
}

const CARD_EDGE_CLIP = cardEdgeClip();

export function WavyMediaSlot({
  gold = false,
  labeled = false,
  className = "",
  children,
}: {
  gold?: boolean;
  labeled?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`wavy-media-slot ${gold ? "is-gold" : ""}`}
        style={{ clipPath: CARD_EDGE_CLIP }}
      >
        {children}
      </div>
      {labeled ? (
        <span className="image-placeholder-bracket" aria-hidden>
          [ IMAGE PLACEHOLDER ]
        </span>
      ) : null}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.72px] text-accent-gold uppercase">
      {children}
    </p>
  );
}

export function LineRule() {
  return <div className="h-px w-full bg-border" />;
}
