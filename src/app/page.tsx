import { PageShell } from "@/components/PageShell";
import { SiteButton } from "@/components/SiteButton";
import { CampaignProgress } from "@/components/CampaignProgress";
import { SectionDivider } from "@/components/SectionDivider";
import { Logo } from "@/components/Logo";
import { ImagePlaceholder, SectionLabel } from "@/components/ImagePlaceholder";
import { siteContent } from "@content/site-content";

export default function HomePage() {
  const { home } = siteContent;

  return (
    <PageShell activePage="home">
      <section className="hero-grid relative flex min-h-[520px] items-center overflow-hidden md:min-h-[620px]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 md:px-12 lg:px-16">
          <Logo size="hero" />
        </div>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 lg:px-16">
        <SectionLabel>{home.film.overline}</SectionLabel>
        <h2 className="mt-4 text-[36px] leading-tight font-black text-white md:text-[42px]">
          {home.film.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <ImagePlaceholder className="h-[340px] w-full md:h-[400px]" />
          <div className="space-y-6">
            {home.film.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[16px] leading-relaxed text-text-muted">
                {paragraph}
              </p>
            ))}
            <SiteButton href="/about" variant="outline" className="h-12 px-8 text-[12px]">
              {home.film.readMore}
            </SiteButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 lg:px-16">
        <SectionLabel>{home.whyItMatters.overline}</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-[32px] font-black text-white md:text-[36px]">
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

      <section className="mx-auto max-w-[1440px] px-6 pt-12 pb-20 md:px-12 lg:px-16">
        <SectionLabel>{home.campaign.overline}</SectionLabel>
        <h2 className="mt-4 text-[32px] font-black text-white md:text-[36px]">
          {home.campaign.headline}
        </h2>
        <p className="mt-3 text-[14px] text-text-muted">{siteContent.campaign.homeDates}</p>
        <CampaignProgress variant="home" className="mt-8" />
        <SiteButton href="/support" className="mt-8">
          {home.campaign.supportCta}
        </SiteButton>
      </section>
    </PageShell>
  );
}
