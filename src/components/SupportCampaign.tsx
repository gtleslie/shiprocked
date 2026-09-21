"use client";

import Image from "next/image";
import { SectionDivider } from "@/components/SectionDivider";
import { InnerCircle } from "@/components/InnerCircle";

export function SupportCampaign() {
  return (
    <>
      <section className="relative isolate overflow-hidden px-4 pt-4 pb-6 md:px-12 md:pt-6 md:pb-4 lg:px-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-black" aria-hidden>
          <Image
            src="/assets/Supportbground.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="relative mx-auto max-w-[1440px]">
          <InnerCircle />
        </div>
      </section>

      <SectionDivider />
    </>
  );
}
