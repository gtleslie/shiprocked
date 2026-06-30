"use client";

import { FormEvent, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { SiteButton } from "@/components/SiteButton";
import { SectionDivider } from "@/components/SectionDivider";
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
      <section className="mx-auto max-w-[1440px] px-16 py-20">
        <p className="text-[11px] font-bold tracking-[0.66px] text-accent-gold uppercase">
          {contact.hero.overline}
        </p>
        <h1 className="mt-4 text-[44px] font-black text-text-primary">
          {contact.hero.headline}
        </h1>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-[1440px] px-16 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {contact.blocks.map((block) => (
            <article
              key={block.overline}
              className="rounded-[4px] border border-border bg-bg-section p-8"
            >
              <p className="text-[11px] font-bold tracking-[0.66px] text-accent-gold uppercase">
                {block.overline}
              </p>
              <h2 className="mt-4 text-[20px] font-bold text-text-primary">{block.title}</h2>
              <a
                href={`mailto:${block.email}`}
                className="mt-3 inline-block text-[15px] text-text-muted hover:text-text-primary"
              >
                {block.email}
              </a>
              {block.note && (
                <p className="mt-4 text-[13px] text-text-secondary">{block.note}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-16 py-12">
        <form
          onSubmit={handleSubmit}
          className="rounded-[4px] border border-border bg-bg-section p-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="text-[11px] font-bold tracking-[0.44px] text-accent-gold uppercase">
                {contact.form.name}
              </span>
              <input
                required
                type="text"
                className="mt-2 h-12 w-full rounded-[3px] border border-border bg-bg-primary px-4 text-[15px] text-text-primary outline-none focus:border-accent-red"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-bold tracking-[0.44px] text-accent-gold uppercase">
                {contact.form.email}
              </span>
              <input
                required
                type="email"
                className="mt-2 h-12 w-full rounded-[3px] border border-border bg-bg-primary px-4 text-[15px] text-text-primary outline-none focus:border-accent-red"
              />
            </label>
          </div>
          <label className="mt-6 block">
            <span className="text-[11px] font-bold tracking-[0.44px] text-accent-gold uppercase">
              {contact.form.message}
            </span>
            <textarea
              required
              rows={6}
              className="mt-2 w-full rounded-[3px] border border-border bg-bg-primary px-4 py-3 text-[15px] text-text-primary outline-none focus:border-accent-red"
            />
          </label>
          <SiteButton type="submit" className="mt-8">
            {contact.form.submit}
          </SiteButton>
          {submitted && (
            <p className="mt-4 text-[14px] text-text-muted">
              Thanks for reaching out. We&apos;ll get back to you soon.
            </p>
          )}
        </form>
      </section>

      <section className="mx-auto max-w-[1440px] px-16 py-20">
        <p className="text-[11px] font-bold tracking-[0.66px] text-accent-gold uppercase">
          {contact.social.overline}
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {contact.social.buttons.map((button) => (
            <a
              key={button.label}
              href={button.href}
              className={`flex h-11 items-center justify-center rounded-[2px] text-[12px] font-bold tracking-[0.36px] ${
                button.variant === "gold"
                  ? "bg-accent-gold text-bg-primary"
                  : "border-[1.5px] border-text-primary text-text-primary"
              }`}
            >
              {button.label}
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
