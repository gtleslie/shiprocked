import { Logo } from "@/components/Logo";
import { HeroVideo } from "@/components/HeroVideo";
import { SectionDivider } from "@/components/SectionDivider";
import { siteContent } from "@content/site-content";

export function HeroSection() {
  const { home } = siteContent;

  return (
    <section className="hero-cinematic relative flex h-[calc(100vh-84px)] flex-col overflow-hidden">
      <div className="hero-grain pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-bamboo pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex min-h-0 w-full max-w-[1440px] flex-1 flex-col lg:flex-row">
        <div className="relative z-10 flex flex-1 flex-col justify-center px-8 py-12 md:px-12 lg:basis-[42%] lg:px-10 lg:py-16 xl:px-14">
          <Logo size="hero" />
        </div>

        <div className="hero-visual relative min-h-[320px] flex-1 lg:min-h-0 lg:basis-[58%]">
          <div className="hero-visual-frame absolute inset-0 mx-6 my-14 md:mx-10 md:my-20 lg:mx-12 lg:my-28">
            <HeroVideo videoId={home.hero.youtubeId} />
          </div>
        </div>
      </div>

      <SectionDivider />
    </section>
  );
}
