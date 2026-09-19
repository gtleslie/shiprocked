function ChevronLeftIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function CarouselPagerHint({ className = "" }: { className?: string }) {
  return (
    <div
      className={`carousel-pager-hint flex items-center justify-center gap-2 sm:hidden ${className}`}
      aria-hidden
    >
      <ChevronLeftIcon className="carousel-pager-hint-arrow shrink-0 text-accent-gold" />
      <span className="text-[10px] font-bold tracking-[0.36px] text-white/55 uppercase">
        Swipe
      </span>
      <ChevronRightIcon className="carousel-pager-hint-arrow shrink-0 text-accent-gold" />
    </div>
  );
}
