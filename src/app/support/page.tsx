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
      <div className="support-launch">
      <SupportMerchSection />

      <section className="support-seed mx-auto w-full max-w-[1440px] px-4 pt-6 pb-8 md:px-12 md:pt-8 md:pb-10 lg:px-16">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.45fr)] lg:gap-x-8">
          <div className="min-w-0 max-w-xl lg:max-w-none lg:pr-4 xl:pr-6">
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
            <SiteButton href={links.seedAndSpark} newTab className="mt-4">
              {support.seedAndSpark.cta}
            </SiteButton>
          </div>
          <div className="hidden items-center justify-center sm:flex">
            <Image
              src={assets.seedAndSpark}
              alt="Seed & Spark"
              width={1800}
              height={1353}
              className="h-auto w-full max-w-[120px] mix-blend-screen md:max-w-[140px] lg:max-w-[160px]"
            />
          </div>
        </div>
      </section>
      </div>

      <SupportInnerCircleSection />
    </PageShell>
  );
}
