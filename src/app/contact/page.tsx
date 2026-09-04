"use client";

import { FormEvent, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { SiteButton } from "@/components/SiteButton";
import { SectionDivider } from "@/components/SectionDivider";
import { LineRule, SectionLabel } from "@/components/ImagePlaceholder";
import { siteContent } from "@content/site-content";

export default function ContactPage() {
  const { contact } = siteContent;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageShell activePage="contact">
      <section className="mx-auto max-w-[1440px] px-6 pt-16 pb-10 md:px-12 lg:px-16">
        <SectionLabel>{contact.hero.overline}</SectionLabel>
        <h1 className="mt-4 text-[42px] font-black text-white md:text-[52px]">
          {contact.hero.headline}
        </h1>
        <p className="mt-4 max-w-3xl text-[16px] text-text-muted">{contact.hero.body}</p>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {contact.blocks.map((block) => (
            <article key={block.overline} className="bg-bg-card p-8">
              <SectionLabel>{block.overline}</SectionLabel>
              <h2 className="mt-4 text-[20px] font-bold text-white">{block.title}</h2>
              <a
                href={`mailto:${block.email}`}
                className="mt-3 inline-block text-[15px] text-text-secondary hover:text-white"
              >
                {block.email}
              </a>
              {block.note && (
                <p className="mt-3 text-[13px] text-text-secondary">{block.note}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <LineRule />
      </div>

      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 lg:px-16">
        <SectionLabel>{contact.form.overline}</SectionLabel>
        <h2 className="mt-4 text-[32px] font-black text-white">{contact.form.headline}</h2>
        <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-6">
          <label className="block">
            <span className="text-[11px] font-bold tracking-[0.44px] text-text-secondary uppercase">
              {contact.form.name}
            </span>
            <input
              required
              type="text"
              className="mt-2 h-12 w-full border border-border bg-bg-card px-4 text-[15px] text-white outline-none focus:border-accent-red"
            />
          </label>

          <label className="block">
            <span className="text-[11px] font-bold tracking-[0.44px] text-text-secondary uppercase">
              {contact.form.email}
            </span>
            <input
              required
              type="email"
              className="mt-2 h-12 w-full border border-border bg-bg-card px-4 text-[15px] text-white outline-none focus:border-accent-red"
            />
          </label>

          <label className="block">
            <span className="text-[11px] font-bold tracking-[0.44px] text-text-secondary uppercase">
              {contact.form.message}
            </span>
            <textarea
              required
              rows={6}
              className="mt-2 min-h-[160px] w-full resize-y border border-border bg-bg-card px-4 py-3 text-[15px] text-white outline-none focus:border-accent-red"
            />
          </label>

          <div>
            <SiteButton type="submit" className="w-full sm:w-auto">
              {contact.form.submit}
            </SiteButton>
            {submitted && (
              <p className="mt-4 text-[14px] text-text-muted">
                Thanks for reaching out. We&apos;ll get back to you soon.
              </p>
            )}
          </div>
        </form>
      </section>

      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <LineRule />
      </div>

      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 lg:px-16">
        <SectionLabel>{contact.social.overline}</SectionLabel>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {contact.social.buttons.map((button) => {
            const isExternal = button.href.startsWith("http");
            return (
              <a
                key={button.label}
                href={button.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`box-border flex h-11 items-center justify-center text-[12px] font-bold tracking-[0.36px] uppercase transition-colors ${
                  button.variant === "gold"
                    ? "border border-transparent bg-accent-gold text-black hover:bg-[#c49234]"
                    : "border border-white text-white transition-colors hover:border-accent-gold hover:bg-white/5"
                }`}
              >
                {button.label}
              </a>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
