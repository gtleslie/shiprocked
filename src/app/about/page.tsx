"use client";

import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { SectionDivider } from "@/components/SectionDivider";
import { siteContent } from "@content/site-content";

export default function AboutPage() {
  const { about } = siteContent;
  const [activeStill, setActiveStill] = useState(0);
  const stillCount = about.timeline.items.length;

  return (
    <PageShell activePage="about">
      <section className="about-hero-gradient relative overflow-hidden">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[1fr_430px]">
          <div className="px-16 py-24">
            <p className="text-[11px] font-bold tracking-[0.66px] text-accent-gold uppercase">
              {about.hero.overline}
            </p>
            <h1 className="mt-6 text-[52px] leading-none font-black text-text-primary">
              {about.hero.headline}
            </h1>
            <p className="mt-2 text-[52px] leading-none font-black text-accent-red">
              {about.hero.headlineAccent}
            </p>
          </div>
          <div className="relative min-h-[420px]">
            <div className="image-placeholder absolute inset-0" />
            <div className="bts-fade absolute inset-0" />
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-[1440px] px-16 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_556px]">
          <div>
            <p className="text-[11px] font-bold tracking-[0.66px] text-accent-gold uppercase">
              {about.timeline.overline}
            </p>
            <h2 className="mt-4 text-[32px] font-black text-text-primary">
              {about.timeline.headline}
            </h2>
            <div className="mt-10 space-y-8 border-l-4 border-accent-red pl-6">
              {about.timeline.items.map((item) => (
                <div key={item.date}>
                  <p className="text-[12px] font-bold tracking-[0.48px] text-accent-gold uppercase">
                    {item.date}
                  </p>
                  <h3 className="mt-2 text-[18px] font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="image-placeholder h-[370px] rounded-[4px]" />
            <div className="mt-4 flex gap-3">
              {Array.from({ length: stillCount }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveStill(index)}
                  className={`h-2 flex-1 rounded-full ${activeStill === index ? "bg-accent-red" : "bg-[#292929]"}`}
                  aria-label={`Show production still ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-16 py-20">
        <p className="text-[11px] font-bold tracking-[0.66px] text-accent-gold uppercase">
          {about.crew.overline}
        </p>
        <h2 className="mt-4 text-[32px] font-black text-text-primary">
          {about.crew.headline}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {about.crew.members.map((member) => (
            <article
              key={member.name}
              className="rounded-[4px] border border-border bg-bg-section p-6"
            >
              <div className="image-placeholder h-[220px] rounded-[3px]" />
              <h3 className="mt-5 text-[18px] font-bold text-text-primary">
                {member.name}
              </h3>
              <p className="mt-1 text-[11px] font-bold tracking-[0.44px] text-accent-gold uppercase">
                {member.role}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-16 py-20">
        <p className="text-[11px] font-bold tracking-[0.66px] text-accent-gold uppercase">
          {about.characters.overline}
        </p>
        <h2 className="mt-4 text-[32px] font-black text-text-primary">
          {about.characters.headline}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.characters.subjects.map((subject) => (
            <article
              key={subject.name}
              className="rounded-[4px] border border-border bg-bg-section p-5"
            >
              <div className="image-placeholder h-[180px] rounded-[3px]" />
              <h3 className="mt-4 text-[16px] font-bold text-text-primary">
                {subject.name}
              </h3>
              <p className="mt-1 text-[13px] text-text-secondary">{subject.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-16 py-20">
        <p className="text-[11px] font-bold tracking-[0.66px] text-accent-gold uppercase">
          {about.transparency.overline}
        </p>
        <h2 className="mt-4 text-[32px] font-black text-text-primary">
          {about.transparency.headline}
        </h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="image-placeholder flex h-[320px] items-center justify-center rounded-[4px]">
            <p className="text-[12px] text-text-dim">Budget chart — TBD</p>
          </div>
          <ul className="space-y-4">
            {about.transparency.breakdown.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between border-b border-border pb-4"
              >
                <span className="text-[15px] text-text-primary">{item.label}</span>
                <span className="text-[15px] font-bold text-accent-gold">
                  {item.percent}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
