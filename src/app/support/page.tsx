import { PageShell } from "@/components/PageShell";
import { SiteButton } from "@/components/SiteButton";
import { siteContent } from "@content/site-content";

export default function SupportPage() {
  const { support, links } = siteContent;
  const { teaser } = support;

  return (
    <PageShell activePage="support">
      <section className="flex min-h-full flex-col items-center justify-center px-6 py-16 text-center md:px-12 lg:px-16">
        <div className="mx-auto max-w-2xl">
          <span className="inline-block border border-accent-red px-4 py-1.5 text-[10px] font-bold tracking-[0.8px] text-accent-red uppercase">
            {teaser.badge}
          </span>

          <h1 className="mt-10 text-[40px] leading-tight font-black text-white md:text-[52px]">
            {teaser.headline}
          </h1>

          <p className="mt-5 text-[18px] font-medium text-accent-gold [text-shadow:0_0_24px_rgba(212,162,60,0.35)] md:text-[20px]">
            {teaser.subheadline}
          </p>

          <SiteButton
            href={links.mailingList}
            className="mt-10 h-14 min-w-[220px] rounded-md px-10 text-[13px]"
          >
            {teaser.cta}
          </SiteButton>

          <p className="mt-6 text-[13px] leading-relaxed text-text-dim">{teaser.note}</p>

          <p className="mt-16 text-[11px] font-semibold tracking-[0.64px] text-text-dim uppercase">
            {teaser.date}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
