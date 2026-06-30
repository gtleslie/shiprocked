import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { SectionDivider } from "@/components/SectionDivider";
import { siteContent } from "@content/site-content";

export default function SplashPage() {
  const { splash, assets, links } = siteContent;

  return (
    <div className="min-h-screen bg-bg-primary">
      <section className="hero-grid relative flex min-h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-16 py-24 lg:grid-cols-2">
          <div>
            <div className="relative h-[220px] w-[340px] max-w-full">
              <Image
                src={assets.logo}
                alt={siteContent.site.title}
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="mt-8 max-w-xl space-y-1 text-[17px] text-text-primary">
              {splash.subtitle.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={links.trailer}
                className="inline-flex h-[52px] items-center justify-center rounded-[2px] bg-accent-red px-8 text-[13px] font-bold tracking-[0.39px] text-text-primary"
              >
                {splash.watchTrailer}
              </a>
              <a
                href="/donate"
                className="inline-flex h-[52px] items-center justify-center rounded-[2px] border-[1.5px] border-text-primary px-8 text-[13px] font-bold tracking-[0.39px] text-text-primary"
              >
                {splash.donate}
              </a>
            </div>
          </div>
          <div className="image-placeholder relative min-h-[420px] rounded-[4px] lg:min-h-[560px]" />
        </div>
      </section>
    </div>
  );
}
