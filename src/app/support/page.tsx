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
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div className="max-w-xl lg:max-w-[34rem]">
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
              width={1192}
              height={670}
              className="h-auto w-full max-w-[280px] mix-blend-screen sm:max-w-[340px] md:max-w-[400px] lg:max-w-[560px] xl:max-w-[640px]"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
