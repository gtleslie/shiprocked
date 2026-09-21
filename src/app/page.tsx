import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { HeroSection } from "@/components/HeroSection";
import { SiteButton } from "@/components/SiteButton";
import { CampaignProgress } from "@/components/CampaignProgress";
import { HeroVideo } from "@/components/HeroVideo";
import { SectionLabel } from "@/components/ImagePlaceholder";
import { siteContent } from "@content/site-content";

export default function HomePage() {
  const { home } = siteContent;

  return (
    <PageShell activePage="home">
      <HeroSection />

      <section className="relative isolate overflow-hidden">
        <Image
          src={siteContent.assets.duoBackground}
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none object-cover object-[center_12%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/40" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/35"
          aria-hidden
        />
        <div className="section-fade-top" aria-hidden />
        <div className="section-fade-bottom" aria-hidden />

        <div className="relative mx-auto max-w-[1440px] px-4 pt-3 pb-10 max-sm:-mt-5 max-sm:pt-0 md:px-12 md:mt-0 md:pt-8 md:pb-12 lg:px-16 lg:pt-9">
          <div className="relative isolate max-w-[1080px] min-h-[11rem] max-sm:min-h-[12.5rem] md:min-h-[14rem]">
            <div
              className="pointer-events-none absolute inset-0 z-0 flex items-end pb-3 md:pb-4"
              aria-hidden
            >
              <div className="-ml-6 w-[calc(100%+3rem)] max-w-[min(1280px,98vw)] origin-left select-none -translate-x-[calc(3%+20px)] max-sm:-ml-[max(1rem,calc(50%-50vw))] max-sm:w-[100vw] max-sm:max-w-[100vw] max-sm:-translate-x-[61px] max-sm:translate-y-[25px] md:-ml-12 md:w-[calc(100%+5rem)] md:-translate-x-[calc(16%+20px)] lg:-ml-14 lg:w-[calc(100%+6rem)] lg:-translate-x-[calc(18%+20px)]">
                <Image
                  src={siteContent.assets.cruiseShip}
                  alt=""
                  width={1920}
                  height={1080}
                  sizes="(min-width: 1024px) 920px, 100vw"
                  className="block h-auto w-full translate-y-[calc(28%+13px)] object-contain object-left-bottom opacity-[0.65] brightness-150 contrast-125 mix-blend-screen [clip-path:inset(36%_0_0_0)] max-sm:-translate-y-3 max-sm:scale-[1.47] max-sm:[clip-path:inset(4%_0_0_0)]"
                  priority
                />
              </div>
            </div>

            <div className="relative z-10 flex min-h-[11rem] flex-col justify-end pb-3 mix-blend-normal max-sm:pb-1 md:min-h-[14rem] md:pb-4">
              <SectionLabel>{home.film.overline}</SectionLabel>
              <h2 className="!mt-1 max-w-[22ch] text-[26px] leading-[1.02] font-black text-white md:text-[40px]">
                {home.film.headline.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>
          </div>

          <div className="relative z-10 mt-5 grid gap-12 max-sm:mt-4 max-sm:gap-5 lg:grid-cols-[1.05fr_1fr] lg:items-start md:mt-6">
            <HeroVideo
              videoId={home.film.testimonialsYoutubeId}
              label="guest testimonials"
            />
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-x-5 -inset-y-4 bg-gradient-to-r from-black/35 via-black/52 to-black/58 md:-inset-x-8 md:-inset-y-6"
                aria-hidden
              />
              <div className="relative space-y-6">
                {home.film.paragraphsMobile.map((paragraph, index) => (
                  <p
                    key={`film-mobile-${index}`}
                    className="text-[16px] leading-relaxed text-white/90 sm:hidden"
                  >
                    {paragraph}
                  </p>
                ))}
                {home.film.paragraphs.map((paragraph, index) => (
                  <p
                    key={`film-desktop-${index}`}
                    className="hidden text-[16px] leading-relaxed text-white/90 sm:block"
                  >
                    {paragraph}
                  </p>
                ))}
                <SiteButton href="/about" variant="outline" className="h-12 px-8 text-[12px]">
                  {home.film.readMore}
                </SiteButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pt-6 pb-8 max-sm:pt-4 md:px-12 md:pt-8 md:pb-10 lg:px-16">
        <SectionLabel>{home.whyItMatters.overline}</SectionLabel>
        <h2 className="!mt-1 max-w-3xl text-[26px] font-black text-white md:text-[36px]">
          {home.whyItMatters.headline}
        </h2>

        <div className="why-card-grid mt-6 grid gap-6 max-sm:mt-2 md:mt-12 md:grid-cols-3">
          {home.whyItMatters.cards.map((card) => (
            <article key={card.number} className="why-card">
              <div className="why-card-stage relative aspect-[4/3]">
                <div className="why-card-bloom" aria-hidden>
                  <div className="relative h-full w-full">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="why-card-core">
                  <div className="relative h-full w-full">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="why-card-scrim" />
                <p className="absolute top-4 left-5 z-10 text-[13px] font-bold text-accent-red">
                  {card.number}
                </p>
                <div className="absolute inset-x-5 bottom-4 z-10">
                  <h3 className="text-[15px] font-bold tracking-[0.2px] text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/80">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pt-6 pb-16 md:px-12 md:pt-8 md:pb-20 lg:px-16">
        <SectionLabel>{home.campaign.overline}</SectionLabel>
        <h2 className="!mt-1 text-[26px] font-black text-white md:text-[36px]">
          {home.campaign.headline}
        </h2>
        <p className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 max-sm:mt-2 max-sm:mb-2">
          <span className="font-overline !tracking-normal text-[18px] font-bold !italic text-accent-red uppercase">
            {siteContent.campaign.homeDatesSoon}
          </span>
          <span className="font-subhead text-[16px] text-text-muted">
            {siteContent.campaign.homeDates}
          </span>
        </p>
        <CampaignProgress variant="home" className="mt-4 max-sm:mt-0 md:mt-8" />
        <SiteButton href="/support" className="mt-8">
          {home.campaign.supportCta}
        </SiteButton>
      </section>
    </PageShell>
  );
}
