import { PageShell } from "@/components/PageShell";
import { SectionDivider } from "@/components/SectionDivider";
import { ImagePlaceholder, SectionLabel } from "@/components/ImagePlaceholder";
import { siteContent } from "@content/site-content";

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <PageShell activePage="about">
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <SectionLabel>{about.hero.overline}</SectionLabel>
            <h1 className="mt-5 text-[48px] leading-none font-black text-white md:text-[56px]">
              {about.hero.headline}
            </h1>
            <p className="mt-1 text-[48px] leading-none font-black text-accent-red md:text-[56px]">
              {about.hero.headlineAccent}
            </p>
            <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-text-muted">
              {about.hero.body}
            </p>
          </div>
          <ImagePlaceholder className="h-[180px] w-full lg:h-[200px]" />
        </div>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionLabel>{about.timeline.overline}</SectionLabel>
            <h2 className="mt-4 text-[32px] font-black text-white">
              {about.timeline.headline}
            </h2>
            <div className="relative mt-10 space-y-10 border-l-2 border-accent-red pl-6">
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
          </div>
          <ImagePlaceholder className="h-[360px] w-full lg:h-[460px]" />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 lg:px-16">
        <SectionLabel>{about.crew.overline}</SectionLabel>
        <h2 className="mt-4 text-[32px] font-black text-white">{about.crew.headline}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {about.crew.members.map((member) => (
            <article key={member.name} className="bg-bg-card">
              <ImagePlaceholder className="h-[280px] w-full" />
              <div className="px-1 pt-4 pb-2">
                <h3 className="text-[16px] font-bold tracking-[0.2px] text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-[11px] font-bold tracking-[0.44px] text-accent-red uppercase">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 lg:px-16">
        <SectionLabel>{about.characters.overline}</SectionLabel>
        <h2 className="mt-4 text-[32px] font-black text-white">
          {about.characters.headline}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.characters.subjects.map((subject, index) => (
            <article key={`${subject.name}-${index}`} className="bg-bg-card">
              <ImagePlaceholder className="h-[220px] w-full" />
              <div className="px-1 pt-4 pb-3">
                <h3 className="text-[15px] font-bold text-white">{subject.name}</h3>
                <p className="mt-1 text-[13px] text-text-secondary">{subject.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pt-12 pb-20 md:px-12 lg:px-16">
        <SectionLabel>{about.transparency.overline}</SectionLabel>
        <h2 className="mt-4 text-[32px] font-black text-white">
          {about.transparency.headline}
        </h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <ImagePlaceholder className="h-[320px] w-full" />
          <ul className="space-y-5">
            {about.transparency.breakdown.map((item) => (
              <li key={item.label} className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-3 text-[15px] text-white">
                  <span className="inline-block h-2.5 w-2.5 shrink-0 bg-accent-red" />
                  {item.label}
                </span>
                <span className="text-[15px] font-bold text-accent-gold">{item.percent}%</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
