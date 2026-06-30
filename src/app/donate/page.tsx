import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { CampaignProgress } from "@/components/CampaignProgress";
import { SiteButton } from "@/components/SiteButton";
import { SectionDivider } from "@/components/SectionDivider";
import { siteContent } from "@content/site-content";

export default function DonatePage() {
  const { donate, assets, links } = siteContent;
  const standardTiers = donate.tiers.filter((tier) => !tier.premium);
  const premiumTier = donate.tiers.find((tier) => tier.premium);

  return (
    <PageShell activePage="donate">
      <section className="mx-auto max-w-[1440px] px-16 py-20">
        <p className="text-[11px] font-bold tracking-[0.66px] text-accent-gold uppercase">
          {donate.hero.overline}
        </p>
        <h1 className="mt-4 text-[44px] font-black text-text-primary">
          {donate.hero.headline}
        </h1>
        <CampaignProgress className="mt-10 max-w-5xl" />
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-[1440px] px-16 py-12">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {standardTiers.map((tier) => (
            <article
              key={tier.id}
              className={`relative flex min-h-[320px] flex-col rounded-[4px] border bg-bg-section p-7 ${
                tier.featured ? "border-accent-gold" : "border-border"
              } ${tier.comingSoon ? "opacity-60" : ""}`}
            >
              {"badge" in tier && tier.badge && (
                <span className="absolute top-5 right-5 rounded-[2px] bg-accent-gold px-2 py-1 text-[10px] font-bold tracking-[0.4px] text-bg-primary uppercase">
                  {tier.badge}
                </span>
              )}
              <p className="text-[11px] font-bold tracking-[0.44px] text-accent-gold uppercase">
                {tier.tier}
              </p>
              <p className="mt-3 text-[32px] font-black text-text-primary">
                {tier.price === null ? "$????" : `$${tier.price.toLocaleString()}`}
              </p>
              <h3 className="mt-2 text-[18px] font-bold text-text-primary">{tier.name}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-text-secondary">
                {tier.description}
              </p>
              {tier.availability && (
                <p className="mt-3 text-[12px] font-bold text-accent-red">
                  {tier.availability}
                </p>
              )}
              <SiteButton
                href={links.seedAndSpark}
                variant={tier.featured ? "gold" : "outline"}
                className="mt-6 h-11 w-full"
                disabled={tier.comingSoon}
              >
                {tier.comingSoon ? "COMING SOON" : tier.featured ? "SELECT" : "SELECT TIER"}
              </SiteButton>
            </article>
          ))}
        </div>

        {premiumTier && (
          <article className="mt-6 rounded-[4px] border-2 border-accent-gold bg-bg-section p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-bold tracking-[0.44px] text-accent-gold uppercase">
                  {premiumTier.tier}
                </p>
                <p className="mt-3 text-[40px] font-black text-text-primary">
                  ${premiumTier.price?.toLocaleString()}
                </p>
                <h3 className="mt-2 text-[24px] font-bold text-text-primary">
                  {premiumTier.name}
                </h3>
                <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-text-secondary">
                  {premiumTier.description}
                </p>
              </div>
              <SiteButton href={links.seedAndSpark} variant="gold" className="min-w-[220px]">
                CLAIM THIS TIER
              </SiteButton>
            </div>
          </article>
        )}
      </section>

      <section className="mx-auto max-w-[1440px] px-16 py-20">
        <div className="grid gap-10 rounded-[4px] border border-border bg-bg-section p-10 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <p className="text-[11px] font-bold tracking-[0.66px] text-accent-gold uppercase">
              {donate.seedAndSpark.overline}
            </p>
            <h2 className="mt-4 text-[32px] font-black text-text-primary">
              {donate.seedAndSpark.headline}
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-text-secondary">
              {donate.seedAndSpark.body}
            </p>
            <p className="mt-4 text-[13px] text-text-muted">
              {siteContent.campaign.eightyPercentNote}
            </p>
            <SiteButton href={links.seedAndSpark} className="mt-8">
              {donate.seedAndSpark.cta}
            </SiteButton>
          </div>
          <div className="flex items-center justify-center rounded-[4px] bg-bg-primary p-8">
            <Image
              src={assets.seedAndSpark}
              alt="Seed and Spark"
              width={400}
              height={200}
              className="h-auto w-full max-w-[320px] object-contain"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
