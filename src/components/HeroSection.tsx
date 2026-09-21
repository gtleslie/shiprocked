import Image from "next/image";
import { Logo } from "@/components/Logo";
import { HeroVideo } from "@/components/HeroVideo";
import { SectionDivider } from "@/components/SectionDivider";
import { siteContent } from "@content/site-content";

export function HeroSection() {
  const { home, assets } = siteContent;

  return (
    <section className="hero-cinematic relative flex flex-col overflow-hidden lg:h-[calc(100dvh-var(--site-header-stack-height)-6rem)]">
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

      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-[1440px] flex-1 flex-col lg:flex-row lg:items-center">
        <div className="relative z-10 hidden flex-col justify-center px-4 py-6 md:px-12 md:py-10 lg:flex lg:flex-1 lg:basis-[42%] lg:px-10 lg:py-12 xl:px-14">
          <Logo size="hero" />
        </div>

        <div className="hero-visual relative z-10 flex w-full flex-col items-center px-4 pt-4 pb-5 max-sm:pt-3 max-sm:pb-9 md:px-10 md:py-12 lg:min-h-0 lg:flex-1 lg:basis-[58%] lg:justify-center lg:px-12 lg:py-16">
          <div className="mb-3 flex w-full shrink-0 justify-center max-sm:mb-1.5 max-sm:-translate-x-[3px] sm:mb-4 lg:hidden">
            <Logo
              size="hero"
              className="!max-w-[min(58vw,200px)] object-center max-sm:mx-auto max-sm:!max-w-[min(78vw,268px)] sm:!max-w-[230px]"
            />
          </div>
          <div className="w-full min-w-0">
            <HeroVideo videoId={home.hero.youtubeId} autoSound label="trailer" />
          </div>
        </div>
      </div>
    </section>
  );
}
