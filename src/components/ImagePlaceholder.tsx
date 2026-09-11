export function ImagePlaceholder({ className = "" }: { className?: string }) {
  return <div className={`image-placeholder ${className}`} />;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-overline text-[15px] font-bold tracking-[0.14em] text-accent-gold uppercase">
      {children}
    </p>
  );
}

export function SectionSubhead({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`font-subhead text-text-muted ${className}`}>{children}</p>;
}

export function LineRule() {
  return <div className="h-px w-full bg-border" />;
}
