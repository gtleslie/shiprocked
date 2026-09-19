import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { BudgetChart } from "@/components/BudgetChart";
import { CharactersCarousel } from "@/components/CharactersCarousel";
import { TimelineExpandable } from "@/components/TimelineExpandable";
import { TimelinePhotoCarousel } from "@/components/TimelinePhotoCarousel";
import { SectionLabel, SectionSubhead } from "@/components/ImagePlaceholder";
import { SectionDivider } from "@/components/SectionDivider";
import { siteContent } from "@content/site-content";

export default function AboutPage() {
  const { about, assets } = siteContent;

  return (
    <PageShell activePage="about">
      <section className="relative isolate overflow-hidden">
        <Image
          src={assets.aboutBackground}
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover object-[center_68%]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/25"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-[1440px] px-4 pt-8 pb-4 md:px-12 md:pt-10 md:pb-5 lg:px-16 lg:pt-12 lg:pb-6">
          <div className="grid items-center gap-x-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <SectionLabel>{about.hero.overline}</SectionLabel>
              <h1 className="!mt-1 text-[36px] leading-none font-black text-white md:text-[56px]">
                {about.hero.headline}
              </h1>
              <p className="font-header mt-1 text-[36px] leading-none text-accent-red md:text-[56px]">
                {about.hero.headlineAccent}
              </p>
              <SectionSubhead className="mt-3 max-w-2xl text-[16px] leading-relaxed text-white/85">
                {about.hero.body}
              </SectionSubhead>
            </div>
            <div className="about-skeletons relative mt-4 h-[240px] lg:mt-0 lg:h-[320px]">
              <Image
                src={assets.filmCrewSkeletons}
                alt="Illustrated film crew of skeletons"
                width={1668}
                height={2388}
                priority
                className="pointer-events-none absolute top-1/2 left-1/2 h-[154%] w-auto max-w-none lg:h-[166%]"
                style={{ transform: "translate(-42%, -50%) scaleX(-1) rotate(-90deg)" }}
              />
            </div>
          </div>
        </div>
      </section>

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
        <div className="section-fade-bottom" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-10 md:px-12 md:py-14 lg:px-16">
          <SectionLabel>{about.timeline.overline}</SectionLabel>
          <h2 className="!mt-1 text-[26px] font-black text-white md:text-[32px]">
            {about.timeline.headline}
          </h2>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-stretch">
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
              <h2 className="text-[26px] font-black text-white md:text-[32px]">
                {about.crew.headline}
              </h2>
            }
            subjects={about.crew.members}
            label="Meet the crew carousel"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[1440px] px-4 pt-5 pb-8 md:px-14 md:pt-7 md:pb-12 lg:px-20 lg:pt-8 lg:pb-14">
          <CharactersCarousel
            header={
              <h2 className="text-[26px] font-black text-white md:text-[32px]">
                {about.meetCharacters.headline}
              </h2>
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
