import Image from "next/image";
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
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
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
          <div className="about-skeletons relative h-[240px] lg:h-auto lg:min-h-full">
            <Image
              src={siteContent.assets.filmCrewSkeletons}
              alt="Illustrated film crew of skeletons"
              width={1668}
              height={2388}
              priority
              className="pointer-events-none absolute top-1/2 left-1/2 h-[250%] w-auto max-w-none lg:h-[280%]"
              style={{ transform: "translate(-50%, -42%) scaleX(-1) rotate(-90deg)" }}
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-[1440px] px-4 py-10 md:px-12 md:py-14 lg:px-16">
        <SectionLabel>{about.timeline.overline}</SectionLabel>
        <h2 className="!mt-1 text-[26px] font-black text-white md:text-[32px]">
          {about.timeline.headline}
        </h2>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <div className="relative space-y-8 border-l-2 border-accent-red pl-6">
            {about.timeline.items.map((item) => (
              <div key={item.date}>
                <p className="text-[12px] font-bold tracking-[0.48px] text-accent-gold uppercase">
                  {item.date}
                </p>
                <h3 className="mt-2 text-[18px] font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
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
