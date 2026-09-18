import { PageShell } from "@/components/PageShell";
import { SectionDivider } from "@/components/SectionDivider";
import { BudgetChart } from "@/components/BudgetChart";
import { CharactersCarousel } from "@/components/CharactersCarousel";
import { TimelinePhotoCarousel } from "@/components/TimelinePhotoCarousel";
import { ImagePlaceholder, SectionLabel, SectionSubhead } from "@/components/ImagePlaceholder";
import { siteContent } from "@content/site-content";

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <PageShell activePage="about">
      <section className="mx-auto max-w-[1440px] px-4 py-10 md:px-12 md:py-12 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <SectionLabel>{about.hero.overline}</SectionLabel>
            <h1 className="!mt-1 text-[36px] leading-none font-black text-white md:text-[56px]">
              {about.hero.headline}
            </h1>
            <p className="font-header mt-1 text-[36px] leading-none text-accent-red md:text-[56px]">
              {about.hero.headlineAccent}
            </p>
            <SectionSubhead className="mt-8 max-w-2xl text-[16px] leading-relaxed">
              {about.hero.body}
            </SectionSubhead>
          </div>
          <ImagePlaceholder className="h-[180px] w-full lg:h-[200px]" />
        </div>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-[1440px] px-4 py-10 md:px-12 md:py-14 lg:px-16">
        <SectionLabel>{about.timeline.overline}</SectionLabel>
        <h2 className="!mt-1 text-[26px] font-black text-white md:text-[32px]">
          {about.timeline.headline}
        </h2>
        <div className="mt-8">
          <TimelinePhotoCarousel slides={about.timeline.slides} />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pt-8 pb-5 md:px-14 md:pt-12 md:pb-7 lg:px-20 lg:pt-14 lg:pb-8">
        <CharactersCarousel
          header={
            <h2 className="text-[26px] font-black text-white md:text-[32px]">
              {about.crew.headline}
            </h2>
          }
          subjects={about.crew.members}
          label="Meet the crew carousel"
        />
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pt-5 pb-8 md:px-14 md:pt-7 md:pb-12 lg:px-20 lg:pt-8 lg:pb-14">
        <CharactersCarousel
          header={
            <h2 className="text-[26px] font-black text-white md:text-[32px]">
              {about.meetCharacters.headline}
            </h2>
          }
          subjects={about.meetCharacters.subjects}
          label="Meet the characters carousel"
        />
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
