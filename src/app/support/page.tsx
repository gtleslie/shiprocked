import { PageShell } from "@/components/PageShell";
import { CampaignProgress } from "@/components/CampaignProgress";
import { SiteButton } from "@/components/SiteButton";
import { SectionDivider } from "@/components/SectionDivider";
import { SectionLabel } from "@/components/ImagePlaceholder";
import { RewardGate } from "@/components/RewardGate";
import { siteContent } from "@content/site-content";

export default function SupportPage() {
  const { support, links } = siteContent;

  return (
    <PageShell activePage="support">
      <section className="mx-auto max-w-[1440px] px-6 pt-16 pb-10 md:px-12 lg:px-16">
        <SectionLabel>{support.hero.overline}</SectionLabel>
        <h1 className="mt-4 text-[42px] font-black text-white md:text-[52px]">
          {support.hero.headline}
        </h1>
        <p className="mt-4 max-w-3xl text-[16px] text-text-muted">{support.hero.body}</p>
        <CampaignProgress variant="support" className="mt-10" />
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 lg:px-16">
        <SectionLabel>{support.tiers.overline}</SectionLabel>
        <h2 className="mt-4 text-[32px] font-black text-white md:text-[36px]">
          {support.tiers.headline}
        </h2>
        <div className="mt-12">
          <RewardGate />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pt-8 pb-20 md:px-12 lg:px-16">
        <SectionLabel>{support.seedAndSpark.overline}</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-[32px] font-black text-white md:text-[36px]">
          {support.seedAndSpark.headline}
        </h2>
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-text-secondary">
          {support.seedAndSpark.body}
        </p>
        <SiteButton href={links.seedAndSpark} className="mt-8">
          {support.seedAndSpark.cta}
        </SiteButton>
      </section>
    </PageShell>
  );
}
