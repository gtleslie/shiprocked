import { Logo } from "@/components/Logo";
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
            <div className="image-placeholder relative h-full w-full overflow-hidden">
              <div className="hero-visual-sheen absolute inset-0" aria-hidden />
              <div className="hero-ribbon hero-ribbon-one" aria-hidden />
              <div className="hero-ribbon hero-ribbon-two" aria-hidden />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-transparent to-black/30" />
              <p className="absolute right-6 bottom-6 text-[10px] font-bold tracking-[0.8px] text-text-dim uppercase">
                {home.hero.visualLabel}
              </p>
            </div>
          </div>
        </div>
      </div>

      <SectionDivider />
    </section>
  );
}
