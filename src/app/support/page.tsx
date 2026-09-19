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
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-x-8 xl:gap-x-10">
          <div className="min-w-0 max-w-xl lg:max-w-none lg:pr-4 xl:pr-6">
            <SectionLabel>{support.seedAndSpark.overline}</SectionLabel>
            <h2 className="!mt-1 text-[26px] font-black text-white md:text-[36px]">
              {support.seedAndSpark.headline}
            </h2>
            <SectionSubhead className="mt-5 text-[15px] leading-relaxed text-text-secondary">
              {support.seedAndSpark.body}
            </SectionSubhead>
            <SiteButton href={links.seedAndSpark} className="mt-8">
              {support.seedAndSpark.cta}
            </SiteButton>
          </div>
          <div className="flex items-center justify-center lg:min-h-[min(100%,22rem)]">
            <Image
              src={assets.seedAndSpark}
              alt="Seed & Spark"
              width={1800}
              height={1353}
              className="h-auto w-full max-w-[220px] mix-blend-screen sm:max-w-[260px] md:max-w-[300px] lg:max-w-[380px] xl:max-w-[420px]"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
