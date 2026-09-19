"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { SectionLabel, SectionSubhead } from "@/components/ImagePlaceholder";
import { siteContent } from "@content/site-content";

const TEXT_GAP_PX = 32;

export function AboutTerabytesHero() {
  const { about, assets } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const crewRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const text = textRef.current;
    const slide = slideRef.current;
    const crew = crewRef.current;
    if (!text || !slide || !crew) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (reduceMotion.matches || window.matchMedia("(max-width: 1023px)").matches) {
        slide.style.transform = "translate3d(0,0,0)";
        return;
      }

      const textRight = text.getBoundingClientRect().right;
      const crewRect = crew.getBoundingClientRect();
      const applied = Number.parseFloat(slide.dataset.slideX || "0") || 0;
      const visualLeft = crewRect.left + crewRect.width * 0.14 - applied;
      const maxShift = Math.max(0, visualLeft - textRight - TEXT_GAP_PX);

      const range = 220;
      const raw = Math.min(1, Math.max(0, window.scrollY / range));
      const progress = 1 - (1 - raw) * (1 - raw);
      const nextX = -(progress * maxShift);

      slide.dataset.slideX = String(nextX);
      slide.style.transform = `translate3d(${nextX}px,0,0)`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden">
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
          <div ref={textRef} className="relative z-20 w-fit max-w-full">
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
          <div className="about-skeletons relative z-10 mt-4 h-[240px] lg:mt-0 lg:h-[320px]">
            <div ref={slideRef} className="absolute inset-0 will-change-transform" data-slide-x="0">
              <Image
                ref={crewRef}
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
      </div>
    </section>
  );
}
