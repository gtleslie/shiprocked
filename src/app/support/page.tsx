import { PageShell } from "@/components/PageShell";
import { SiteButton } from "@/components/SiteButton";
import { SectionLabel, SectionSubhead } from "@/components/ImagePlaceholder";
import { SupportCampaign } from "@/components/SupportCampaign";
import { siteContent } from "@content/site-content";

export default function SupportPage() {
  const { support, links } = siteContent;

  return (
    <PageShell activePage="support">
      <SupportCampaign />

      <section className="mx-auto max-w-[1440px] px-4 pt-8 pb-16 md:px-12 md:pt-8 md:pb-20 lg:px-16">
        <SectionLabel>{support.seedAndSpark.overline}</SectionLabel>
        <h2 className="!mt-1 max-w-3xl text-[26px] font-black text-white md:text-[36px]">
          {support.seedAndSpark.headline}
        </h2>
        <SectionSubhead className="mt-5 max-w-3xl text-[15px] leading-relaxed text-text-secondary">
          {support.seedAndSpark.body}
        </SectionSubhead>
        <SiteButton href={links.seedAndSpark} className="mt-8">
          {support.seedAndSpark.cta}
        </SiteButton>
      </section>
    </PageShell>
  );
}
