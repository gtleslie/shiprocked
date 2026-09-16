import { Logo } from "@/components/Logo";
import { HeroVideo } from "@/components/HeroVideo";
import { SectionDivider } from "@/components/SectionDivider";
import { siteContent } from "@content/site-content";

export function HeroSection() {
  const { home } = siteContent;

  return (
    <section className="hero-cinematic relative flex flex-col overflow-hidden lg:h-[calc(100vh-84px)]">
      <div className="hero-grain pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-bamboo pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex min-h-0 w-full max-w-[1440px] flex-1 flex-col lg:flex-row">
        <div className="relative z-10 flex flex-col justify-center px-4 py-8 md:px-12 md:py-12 lg:flex-1 lg:basis-[42%] lg:px-10 lg:py-16 xl:px-14">
          <Logo size="hero" />
        </div>

        <div className="hero-visual relative flex w-full items-center justify-center px-4 pb-8 md:px-10 md:py-16 lg:min-h-0 lg:flex-1 lg:basis-[58%] lg:px-12 lg:py-20">
          <HeroVideo videoId={home.hero.youtubeId} />
        </div>
      </div>

      <SectionDivider />
    </section>
  );
}
