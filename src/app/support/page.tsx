import { PageShell } from "@/components/PageShell";
import { SiteButton } from "@/components/SiteButton";
import { SectionLabel } from "@/components/ImagePlaceholder";
import { SupportCampaign } from "@/components/SupportCampaign";
import { siteContent } from "@content/site-content";

export default function SupportPage() {
  const { support, links } = siteContent;

  return (
    <PageShell activePage="support">
      <SupportCampaign />

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
