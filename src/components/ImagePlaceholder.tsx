export function ImagePlaceholder({ className = "" }: { className?: string }) {
  return <div className={`image-placeholder ${className}`} />;
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
