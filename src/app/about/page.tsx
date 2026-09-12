import { PageShell } from "@/components/PageShell";
import { SectionDivider } from "@/components/SectionDivider";
import { BudgetChart } from "@/components/BudgetChart";
import { CharactersCarousel } from "@/components/CharactersCarousel";
import { CrewFlipCard } from "@/components/CrewFlipCard";
import { ImagePlaceholder, SectionLabel, SectionSubhead } from "@/components/ImagePlaceholder";
import { siteContent } from "@content/site-content";

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <PageShell activePage="about">
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <SectionLabel>{about.hero.overline}</SectionLabel>
            <h1 className="mt-5 text-[48px] leading-none font-black text-white md:text-[56px]">
              {about.hero.headline}
            </h1>
            <p className="font-header mt-1 text-[48px] leading-none text-accent-red md:text-[56px]">
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

      <section className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 lg:px-16">
        <SectionLabel>{about.timeline.overline}</SectionLabel>
        <h2 className="mt-4 text-[32px] font-black text-white">
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
          <ImagePlaceholder className="h-[360px] w-full lg:h-full" />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 py-10 md:px-14 md:py-12 lg:px-20 lg:py-14">
        <SectionLabel>{about.crew.overline}</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-[32px] font-black text-white">{about.crew.headline}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {about.crew.members.map((member) => (
            <CrewFlipCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 py-10 md:px-14 md:py-12 lg:px-20 lg:py-14">
        <div className="max-w-3xl">
          <SectionLabel>{about.characters.overline}</SectionLabel>
          <h2 className="mt-4 text-[32px] font-black text-white">
            {about.characters.headline}
          </h2>
        </div>
        <div className="mt-8">
          <CharactersCarousel
            subjects={about.characters.subjects}
            label="Voices of the voyage carousel"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 py-10 md:px-14 md:py-12 lg:px-20 lg:py-14">
        <div className="max-w-3xl">
          <SectionLabel>{about.meetCharacters.overline}</SectionLabel>
          <h2 className="mt-4 text-[32px] font-black text-white">
            {about.meetCharacters.headline}
          </h2>
        </div>
        <div className="mt-8">
          <CharactersCarousel
            subjects={about.meetCharacters.subjects}
            label="Meet the characters carousel"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pt-8 pb-12 md:px-12 lg:px-16">
        <SectionLabel>{about.transparency.overline}</SectionLabel>
        <h2 className="mt-3 text-[32px] font-black text-white">
          {about.transparency.headline}
        </h2>
        <div className="mt-4">
          <BudgetChart items={about.transparency.breakdown} />
        </div>
      </section>
    </PageShell>
  );
}
