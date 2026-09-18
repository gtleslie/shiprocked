import Image from "next/image";

type TimelineSlide = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export function TimelinePhotoCarousel({
  slides,
}: {
  slides: readonly TimelineSlide[];
}) {
  if (slides.length === 0) return null;

  return (
    <div
      className="why-card-grid grid gap-6 md:grid-cols-3"
      role="list"
      aria-label="From dock to deadline photos"
    >
      {slides.map((slide, index) => (
        <article key={slide.title} className="why-card" role="listitem">
          <div className="why-card-stage relative aspect-[4/3]">
            <div className="why-card-bloom" aria-hidden>
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
            <div className="why-card-core">
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
            <div className="why-card-scrim" />
            <p className="absolute top-4 left-5 z-10 text-[13px] font-bold text-accent-red">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div className="absolute inset-x-5 bottom-4 z-10">
              <h3 className="text-[15px] font-bold tracking-[0.2px] text-white">{slide.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/80">{slide.description}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
