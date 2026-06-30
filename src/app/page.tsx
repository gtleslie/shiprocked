import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { SiteButton } from "@/components/SiteButton";
import { CampaignProgress } from "@/components/CampaignProgress";
import { SectionDivider } from "@/components/SectionDivider";
import { siteContent } from "@content/site-content";

export default function HomePage() {
  const { home, assets, links } = siteContent;

  return (
    <PageShell activePage="home">
      <section className="hero-grid relative min-h-[760px] overflow-hidden">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-16 py-20">
            <p className="text-[11px] font-bold tracking-[0.66px] text-accent-gold uppercase">
              {home.hero.overline}
            </p>
            <div className="relative mt-8 h-[180px] w-[340px] max-w-full">
              <Image
                src={assets.logo}
                alt={siteContent.site.title}
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="mt-8 max-w-xl text-[17px] text-text-primary">
              {home.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <SiteButton href={links.trailer}>{home.hero.watchTrailer}</SiteButton>
              <SiteButton href="/donate" variant="outline">
                {home.hero.donate}
              </SiteButton>
            </div>
          </div>
          <div className="image-placeholder relative min-h-[420px] lg:min-h-[760px]">
            <div className="absolute inset-0 bg-bg-hero/80" />
            <p className="absolute bottom-8 left-8 text-[12px] tracking-[0.48px] text-text-dim uppercase">
              Hero photography — TBD
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-[1440px] px-16 py-20">
        <p className="text-[11px] font-bold tracking-[0.66px] text-accent-gold uppercase">
          {home.film.overline}
        </p>
        <h2 className="mt-4 text-[38px] leading-tight font-black text-text-primary">
          {home.film.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[560px_1fr]">
          <div className="image-placeholder h-[380px] rounded-[4px]" />
          <div className="space-y-6">
            {home.film.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-[16px] leading-relaxed ${index === 0 ? "text-text-primary" : "text-text-muted"}`}
              >
                {paragraph}
              </p>
            ))}
            <SiteButton href="/about" variant="outline" className="h-12 px-8 text-[12px]">
              {home.film.readMore}
            </SiteButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-16 py-20">
        <p className="text-[11px] font-bold tracking-[0.66px] text-accent-gold uppercase">
          {home.whyItMatters.overline}
        </p>
        <h2 className="mt-4 max-w-2xl text-[32px] font-black text-text-primary">
          {home.whyItMatters.headline}
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {home.whyItMatters.cards.map((card) => (
            <article
              key={card.number}
              className="rounded-[4px] border border-border bg-bg-section p-7"
            >
              <p className="text-[13px] font-bold text-accent-red">{card.number}</p>
              <div className="image-placeholder mt-6 h-[140px] rounded-[3px]" />
              <h3 className="mt-5 text-[16px] font-bold text-text-primary">{card.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-16 py-20">
        <p className="text-[11px] font-bold tracking-[0.66px] text-accent-gold uppercase">
          {home.campaign.overline}
        </p>
        <h2 className="mt-4 text-[32px] font-black text-text-primary">
          {home.campaign.headline}
        </h2>
        <CampaignProgress className="mt-8 max-w-5xl" />
        <SiteButton href="/donate" className="mt-8">
          {home.campaign.supportCta}
        </SiteButton>
      </section>
    </PageShell>
  );
}
