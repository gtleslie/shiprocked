import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { SiteButton } from "@/components/SiteButton";
import { SectionLabel, SectionSubhead } from "@/components/ImagePlaceholder";
import { SupportCampaign } from "@/components/SupportCampaign";
import { siteContent } from "@content/site-content";

export default function SupportPage() {
  const { support, links, assets } = siteContent;

  return (
    <PageShell activePage="support">
      <SupportCampaign />

      <section className="mx-auto max-w-[1440px] px-4 pt-8 pb-16 md:px-12 md:pt-8 md:pb-20 lg:px-16">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div>
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
          </div>
          <Image
            src={assets.seedAndSpark}
            alt="Seed & Spark"
            width={596}
            height={335}
            className="mx-auto mt-2 h-auto w-full max-w-[280px] mix-blend-screen md:max-w-[340px] lg:mx-0 lg:mt-6 lg:max-w-[400px] lg:justify-self-end"
          />
        </div>
      </section>
    </PageShell>
  );
}
