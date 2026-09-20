"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { SiteButton } from "@/components/SiteButton";
import { SectionDivider } from "@/components/SectionDivider";
import { LineRule, SectionLabel, SectionSubhead } from "@/components/ImagePlaceholder";
import { siteContent } from "@content/site-content";

type FormStatus = "idle" | "sending" | "sent" | "error";

function ContactEmailLink({ email }: { email: string }) {
  const at = email.indexOf("@");
  const local = at >= 0 ? email.slice(0, at + 1) : email;
  const domain = at >= 0 ? email.slice(at + 1) : "";

  return (
    <a
      href={`mailto:${email}`}
      className="mt-3 block max-w-full text-[12.5px] leading-snug text-text-secondary underline decoration-white/25 underline-offset-2 transition-colors hover:text-accent-red hover:decoration-accent-red sm:text-[14px] sm:leading-normal md:text-[15px]"
    >
      <span className="hidden sm:inline">{email}</span>
      {domain ? (
        <span className="sm:hidden">
          {local}
          <wbr />
          {domain}
        </span>
      ) : (
        <span className="sm:hidden">{email}</span>
      )}
    </a>
  );
}

export default function ContactPage() {
  const { contact } = siteContent;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setError(result.error || "Couldn't send that message. Please try again.");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("Couldn't send that message. Please try again.");
    }
  }

  return (
    <PageShell activePage="contact">
      <section className="mx-auto max-w-[1440px] px-4 pt-10 pb-8 md:px-12 md:pt-16 md:pb-10 lg:px-16">
        <SectionLabel>{contact.hero.overline}</SectionLabel>
        <h1 className="!mt-1 text-[32px] font-black text-white md:text-[52px]">
          {contact.hero.headline}
        </h1>
        <SectionSubhead className="mt-4 max-w-3xl text-[16px]">{contact.hero.body}</SectionSubhead>
      </section>

      <SectionDivider />

      <section className="relative isolate overflow-hidden">
        <Image
          src={siteContent.assets.contactBackground}
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none object-cover object-[center_20%]"
        />
        <div className="section-fade-top" aria-hidden />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[min(52vh,34rem)] bg-gradient-to-b from-black from-0% via-black/80 via-50% to-transparent to-100% md:h-[min(48vh,38rem)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-[1440px] px-4 pt-8 pb-5 md:px-12 md:pt-12 md:pb-6 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {contact.blocks.map((block) => {
            const logo =
              block.logo === "ke"
                ? {
                    src: siteContent.assets.keLogo,
                    alt: "Koenig Entertainment Co.",
                    width: 3600,
                    height: 3600,
                    className:
                      "h-[52px] w-auto object-contain object-right md:h-[116px] sm:h-[72px]",
                  }
                : {
                    src: siteContent.assets.ask4Logo,
                    alt: "ASK4 Entertainment",
                    width: 1244,
                    height: 845,
                    className:
                      "h-[32px] w-auto object-contain object-right brightness-0 invert md:h-[60px] sm:h-[40px]",
                  };

            return (
              <article
                key={block.overline}
                className="flex flex-row items-center justify-between gap-4 bg-bg-card p-4 sm:gap-6 sm:p-8"
              >
                <div className="min-w-0">
                  <SectionLabel>{block.overline}</SectionLabel>
                  <h2 className="!mt-1 text-[18px] font-bold text-white md:text-[20px]">{block.title}</h2>
                  <ContactEmailLink email={block.email} />
                  {block.note && (
                    <p className="mt-3 text-[13px] text-text-secondary">{block.note}</p>
                  )}
                </div>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={`shrink-0 ${logo.className}`}
                />
              </article>
            );
          })}
        </div>

        <div className="my-4 md:my-6">
          <LineRule />
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
            <div>
              <SectionLabel>{contact.form.overline}</SectionLabel>
              <div className="mt-2 flex items-start justify-between gap-2 sm:mt-6 sm:items-center sm:gap-3 lg:mt-1 lg:block">
                <h2 className="min-w-0 flex-1 text-[26px] leading-[1.05] font-black text-white lg:!mt-1 md:text-[32px]">
                  {contact.form.headline}
                </h2>
                <div className="flex shrink-0 items-start justify-end lg:hidden">
                  <div className="w-[min(44vw,10rem)] origin-center rotate-[9deg] scale-[1.08] sm:w-[10.25rem] sm:scale-[1.06]">
                    <Image
                      src="/assets/opening-mail.png"
                      alt=""
                      width={2388}
                      height={1668}
                      className="h-auto w-full"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <label className="block">
                <span className="text-[11px] font-bold tracking-[0.44px] text-text-secondary uppercase">
                  {contact.form.name}
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={120}
                  className="mt-1.5 h-10 w-full border border-border bg-bg-card px-3 text-[15px] text-white outline-none focus:border-accent-red sm:mt-2 sm:h-12 sm:px-4"
                />
              </label>

              <label className="block">
                <span className="text-[11px] font-bold tracking-[0.44px] text-text-secondary uppercase">
                  {contact.form.email}
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  className="mt-1.5 h-10 w-full border border-border bg-bg-card px-3 text-[15px] text-white outline-none focus:border-accent-red sm:mt-2 sm:h-12 sm:px-4"
                />
              </label>

              <label className="block">
                <span className="text-[11px] font-bold tracking-[0.44px] text-text-secondary uppercase">
                  {contact.form.message}
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  maxLength={5000}
                  className="mt-1.5 min-h-[120px] w-full resize-y border border-border bg-bg-card px-3 py-2 text-[15px] text-white outline-none focus:border-accent-red sm:mt-2 sm:min-h-[160px] sm:px-4 sm:py-3"
                />
              </label>

              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
                <label>
                  Website
                  <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div>
                <SiteButton
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto"
                >
                  {status === "sending" ? "SENDING..." : contact.form.submit}
                </SiteButton>
                {status === "sent" && (
                  <p className="mt-4 text-[14px] text-text-muted" aria-live="polite">
                    Thanks for reaching out. We&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-[14px] text-accent-red" aria-live="assertive">
                    {error}
                  </p>
                )}
              </div>
            </form>
          </div>

          <div className="hidden min-h-[28rem] items-center justify-center overflow-hidden lg:flex lg:min-h-full">
            <div className="w-full max-w-[32rem] origin-center rotate-[9deg] scale-[1.1] shrink-0 md:max-w-[40rem] md:scale-[1.14] lg:max-w-[52rem] lg:scale-[1.22]">
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
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pt-5 pb-8 md:px-12 md:pt-6 md:pb-12 lg:px-16">
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
                  button.variant === "turquoise"
                    ? "border border-white text-accent-turquoise hover:border-accent-turquoise hover:bg-white/5"
                    : "border border-white text-white transition-colors hover:border-accent-gold hover:bg-white/5"
                }`}
              >
                {button.variant === "turquoise" ? (
                  <>
                    JOIN THE{" "}
                    <span className="font-salted text-[17px] leading-none tracking-normal normal-case">
                      Inner Circle
                    </span>
                  </>
                ) : (
                  button.label
                )}
              </a>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
