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
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,32rem)_minmax(0,1fr)] lg:gap-4">
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
            width={1192}
            height={670}
            className="mx-auto h-auto w-full max-w-[240px] mix-blend-screen md:max-w-[300px] lg:mx-0 lg:w-[118%] lg:max-w-none lg:justify-self-end lg:origin-right"
          />
        </div>
      </section>
    </PageShell>
  );
}
