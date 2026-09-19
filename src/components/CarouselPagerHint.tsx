function TapIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12" />
      <path d="M11 11.5V3.5a1.5 1.5 0 0 1 3 0V13" />
      <path d="M14 10.5V5a1.5 1.5 0 0 1 3 0V14" />
      <path d="M7 14.5 5.5 20a2 2 0 0 0 2.2 2.4l8.1-1.4a2 2 0 0 0 1.6-2.2l-.8-5.2a2 2 0 0 0-2-1.7H10a2 2 0 0 0-2 1.4Z" />
    </svg>
  );
}

export function CarouselPagerHint({ className = "" }: { className?: string }) {
  return (
    <p
      className={`carousel-pager-hint flex items-center justify-center gap-1.5 text-[10px] font-bold tracking-[0.32px] text-white/55 uppercase sm:hidden ${className}`}
    >
      <TapIcon className="h-3.5 w-3.5 shrink-0 text-accent-gold" />
      <span>Tap dots to explore</span>
    </p>
  );
}
