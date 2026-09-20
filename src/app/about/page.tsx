import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { BudgetChart } from "@/components/BudgetChart";
import { CharactersCarousel } from "@/components/CharactersCarousel";
import { TimelineExpandable } from "@/components/TimelineExpandable";
import { TimelinePhotoCarousel } from "@/components/TimelinePhotoCarousel";
import { SectionLabel } from "@/components/ImagePlaceholder";
import { SectionDivider } from "@/components/SectionDivider";
import { AboutTerabytesHero } from "@/components/AboutTerabytesHero";
import { siteContent } from "@content/site-content";

export default function AboutPage() {
  const { about, assets } = siteContent;

  return (
    <PageShell activePage="about">
      <AboutTerabytesHero />

      <SectionDivider />

      <section className="relative isolate overflow-hidden">
        <Image
          src={assets.dockToDeadline}
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/40" aria-hidden />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-20 bg-gradient-to-b from-black/85 via-black/40 to-transparent md:h-28"
          aria-hidden
        />
        <div className="section-fade-top" aria-hidden />
        <div className="section-fade-bottom" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-10 md:px-12 md:py-14 lg:px-16">
          <SectionLabel>{about.timeline.overline}</SectionLabel>
          <h2 className="!mt-1 text-[26px] font-black text-white md:text-[32px]">
            {about.timeline.headline}
          </h2>
          <div className="mt-5 grid gap-6 md:mt-8 md:gap-12 lg:grid-cols-[1fr_1fr] lg:items-stretch">
            <TimelineExpandable items={about.timeline.items} />
            <TimelinePhotoCarousel slides={about.timeline.slides} />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <Image
          src={assets.meetCharactersCrew}
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/55" aria-hidden />
        <div className="section-fade-top" aria-hidden />
        <div className="section-fade-bottom" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1440px] px-4 pt-8 pb-5 md:px-14 md:pt-12 md:pb-7 lg:px-20 lg:pt-14 lg:pb-8">
          <CharactersCarousel
            header={
              <>
                <p className="mb-2 max-w-md text-[13px] font-bold leading-snug text-accent-gold md:mb-2.5 md:text-[14px]">
                  {about.crew.kicker}
                </p>
                <h2 className="text-[26px] leading-[1.02] font-black text-white sm:hidden">
                  <span className="block">Meet the</span>
                  <span className="block">Film-Crew</span>
                </h2>
                <h2 className="hidden text-[26px] font-black text-white sm:block md:text-[32px]">
                  {about.crew.headline}
                </h2>
              </>
            }
            subjects={about.crew.members}
            label="Meet the crew carousel"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[1440px] px-4 pt-5 pb-5 md:px-14 md:pt-7 md:pb-8 lg:px-20 lg:pt-8 lg:pb-10">
          <CharactersCarousel
            header={
              <>
                <h2 className="text-[26px] leading-[1.02] font-black text-white sm:hidden">
                  <span className="block">Meet the</span>
                  <span className="block">Characters</span>
                </h2>
                <h2 className="hidden text-[26px] font-black text-white sm:block md:text-[32px]">
                  {about.meetCharacters.headline}
                </h2>
              </>
            }
            subjects={about.meetCharacters.subjects}
            label="Meet the characters carousel"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pt-6 pb-10 md:px-12 md:pt-8 md:pb-12 lg:px-16">
        <SectionLabel>{about.transparency.overline}</SectionLabel>
        <h2 className="!mt-1 text-[26px] font-black text-white md:text-[32px]">
          {about.transparency.headline}
        </h2>
        <div className="!mt-1">
          <BudgetChart items={about.transparency.breakdown} />
        </div>
      </section>
    </PageShell>
  );
}
