import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { HeroSection } from "@/components/HeroSection";
import { SiteButton } from "@/components/SiteButton";
import { CampaignProgress } from "@/components/CampaignProgress";
import { ImagePlaceholder, SectionLabel, SectionSubhead } from "@/components/ImagePlaceholder";
import { siteContent } from "@content/site-content";

export default function HomePage() {
  const { home } = siteContent;

  return (
    <PageShell activePage="home">
      <HeroSection />

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 lg:px-16">
        <div className="relative max-w-[1080px]">
          <div className="pointer-events-none w-[97%] -translate-x-[24%] select-none" aria-hidden>
            <Image
              src="/assets/ghost_cruise_ship-trim.jpeg"
              alt=""
              width={1896}
              height={381}
              className="h-auto w-full brightness-110 contrast-125"
              priority
              unoptimized
            />
          </div>

          <div className="absolute inset-0 z-10 flex flex-col justify-end pb-3 md:pb-4">
            <SectionLabel>{home.film.overline}</SectionLabel>
            <h2 className="!mt-1 max-w-[22ch] text-[32px] leading-[1.02] font-black text-white md:text-[40px]">
              {home.film.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
        </div>

        <div className="mt-5 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start md:mt-6">
          <ImagePlaceholder className="h-[340px] w-full md:h-[400px]" />
          <div className="space-y-6">
            {home.film.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[16px] leading-relaxed text-white/90">
                {paragraph}
              </p>
            ))}
            <SiteButton href="/about" variant="outline" className="h-12 px-8 text-[12px]">
              {home.film.readMore}
            </SiteButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pt-16 pb-10 md:px-12 lg:px-16">
        <SectionLabel>{home.whyItMatters.overline}</SectionLabel>
        <h2 className="!mt-1 max-w-3xl text-[32px] font-black text-white md:text-[36px]">
          {home.whyItMatters.headline}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {home.whyItMatters.cards.map((card) => (
            <article key={card.number} className="border border-border bg-bg-card p-6">
              <p className="text-[13px] font-bold text-accent-red">{card.number}</p>
              <ImagePlaceholder className="mt-5 h-[140px]" />
              <h3 className="mt-5 text-[15px] font-bold tracking-[0.2px] text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pt-8 pb-20 md:px-12 lg:px-16">
        <SectionLabel>{home.campaign.overline}</SectionLabel>
        <h2 className="!mt-1 text-[32px] font-black text-white md:text-[36px]">
          {home.campaign.headline}
        </h2>
        <SectionSubhead className="mt-3 text-[16px]">{siteContent.campaign.homeDates}</SectionSubhead>
        <CampaignProgress variant="home" className="mt-8" />
        <SiteButton href="/support" className="mt-8">
          {home.campaign.supportCta}
        </SiteButton>
      </section>
    </PageShell>
  );
}
