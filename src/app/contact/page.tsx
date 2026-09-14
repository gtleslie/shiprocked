"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { SiteButton } from "@/components/SiteButton";
import { SectionDivider } from "@/components/SectionDivider";
import { LineRule, SectionLabel, SectionSubhead } from "@/components/ImagePlaceholder";
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
        <h1 className="!mt-1 text-[42px] font-black text-white md:text-[52px]">
          {contact.hero.headline}
        </h1>
        <SectionSubhead className="mt-4 max-w-3xl text-[16px]">{contact.hero.body}</SectionSubhead>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {contact.blocks.map((block) => (
            <article key={block.overline} className="bg-bg-card p-8">
              <SectionLabel>{block.overline}</SectionLabel>
              <h2 className="!mt-1 text-[20px] font-bold text-white">{block.title}</h2>
              <a
                href={`mailto:${block.email}`}
                className="mt-3 inline-block text-[15px] text-text-secondary underline decoration-white/25 underline-offset-2 transition-colors hover:text-accent-red hover:decoration-accent-red"
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
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
          <div className="contents lg:flex lg:flex-col lg:gap-6">
            <div className="order-1">
              <SectionLabel>{contact.form.overline}</SectionLabel>
              <h2 className="!mt-1 text-[32px] font-black text-white">
                {contact.form.headline}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="order-3 space-y-6">
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
          </div>

          <div className="order-2 flex min-h-[22rem] items-center justify-center overflow-visible sm:min-h-[26rem] lg:min-h-full">
            <div
              className="origin-center shrink-0"
              style={{
                transform: "rotate(9deg)",
                width: "42rem",
                maxWidth: "92vw",
              }}
            >
              <Image
                src="/assets/opening-mail.png"
                alt="Skeletal hands opening a letter"
                width={2388}
                height={1668}
                className="h-auto w-full"
                priority={false}
              />
            </div>
          </div>
        </div>
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
