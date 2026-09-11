import { ReactNode } from "react";

export function ImagePlaceholder({ className = "" }: { className?: string }) {
  return <div className={`image-placeholder ${className}`} />;
}

function wavyClipPath(ampPct = 3.4, waves = 6) {
  const left: string[] = [];
  const right: string[] = [];
  const steps = waves * 10;

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const y = t * 100;
    const offset = Math.sin(t * Math.PI * waves) * ampPct;
    left.push(`${(5.5 + offset).toFixed(2)}% ${y.toFixed(2)}%`);
    right.push(`${(94.5 + offset).toFixed(2)}% ${y.toFixed(2)}%`);
  }

  return `polygon(${[...left, ...right.reverse()].join(", ")})`;
}

const WAVY_CLIP = wavyClipPath();

export function WavyMediaSlot({
  gold = false,
  className = "",
  children,
}: {
  gold?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`wavy-media-slot ${gold ? "is-gold" : ""}`}
        style={{ clipPath: WAVY_CLIP }}
      >
        {children}
      </div>
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
