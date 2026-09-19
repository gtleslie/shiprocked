import Image from "next/image";
import { Logo } from "@/components/Logo";
import { HeroVideo } from "@/components/HeroVideo";
import { SectionDivider } from "@/components/SectionDivider";
import { siteContent } from "@content/site-content";

export function HeroSection() {
  const { home, assets } = siteContent;

  return (
    <section className="hero-cinematic relative flex flex-col overflow-hidden lg:h-[calc(100dvh-84px-6rem)]">
      <Image
        src={assets.homeBackground}
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-[82%_70%] -scale-x-100"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 via-black/45 to-black/80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/35"
        aria-hidden
      />
      <div className="hero-grain pointer-events-none absolute inset-0 opacity-20" aria-hidden />
      <div className="section-fade-bottom" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
        <SectionDivider />
      </div>

      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-[1440px] flex-1 flex-col lg:flex-row">
        <div className="relative z-10 hidden flex-col justify-center px-4 py-8 md:px-12 md:py-12 lg:flex lg:flex-1 lg:basis-[42%] lg:px-10 lg:py-16 xl:px-14">
          <Logo size="hero" />
        </div>

        <div className="hero-visual relative z-10 flex w-full items-center justify-center px-4 pt-6 pb-8 md:px-10 md:py-16 lg:min-h-0 lg:flex-1 lg:basis-[58%] lg:px-12 lg:py-20">
          <div className="pointer-events-none absolute inset-x-0 top-6 z-20 flex justify-center sm:top-8 lg:hidden">
            <Logo size="hero" />
          </div>
          <HeroVideo videoId={home.hero.youtubeId} autoSound label="trailer" />
        </div>
      </div>
    </section>
  );
}
