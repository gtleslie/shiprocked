import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { SiteButton } from "@/components/SiteButton";
import { SectionLabel, SectionSubhead } from "@/components/ImagePlaceholder";
import {
  SupportMerchSection,
  SupportInnerCircleSection,
} from "@/components/SupportCampaign";
import { siteContent } from "@content/site-content";

export default function SupportPage() {
  const { support, links, assets } = siteContent;

  return (
    <PageShell activePage="support">
      <SupportMerchSection />

      <section className="support-seed-spark mx-auto max-w-[1440px] px-4 pt-2 pb-4 md:px-12 md:pt-3 md:pb-6 lg:px-16">
        <SiteButton href={links.seedAndSpark} newTab>
          {support.seedAndSpark.cta}
        </SiteButton>

        <div className="support-seed-spark-grid mt-2 grid gap-4 md:mt-3 lg:gap-x-10">
          <div className="min-w-0 max-w-xl lg:max-w-none lg:pr-2 xl:pr-4">
            <p className="font-overline flex items-center gap-1 !tracking-normal text-[19px] font-bold text-accent-gold uppercase sm:hidden">
              <span>{support.seedAndSpark.overlinePrefix}</span>
              <Image
                src={assets.seedAndSparkInline}
                alt="Seed & Spark"
                width={640}
                height={120}
                className="h-[1.1875rem] w-auto max-w-[9.5rem] -translate-x-[2px] object-contain object-left"
              />
            </p>
            <div className="hidden sm:block">
              <SectionLabel>{support.seedAndSpark.overline}</SectionLabel>
            </div>
            <h2 className="!mt-1 text-[24px] font-black text-white md:text-[28px]">
              {support.seedAndSpark.headline}
            </h2>
            <SectionSubhead className="mt-2 text-[14px] leading-snug text-text-secondary">
              {support.seedAndSpark.body}
            </SectionSubhead>
          </div>
          <div className="support-seed-spark-logo hidden sm:flex">
            <Image
              src={assets.seedAndSpark}
              alt="Seed & Spark"
              width={1800}
              height={1353}
              className="h-auto w-full max-w-[200px] mix-blend-screen md:max-w-[250px] lg:max-w-[280px] xl:max-w-[320px]"
            />
          </div>
        </div>
      </section>

      <SupportInnerCircleSection />
    </PageShell>
  );
}
