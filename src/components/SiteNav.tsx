"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteContent, type NavKey } from "@content/site-content";

type SiteNavProps = {
  activePage: NavKey;
};

export function SiteNav({ activePage }: SiteNavProps) {
  const { nav } = siteContent;
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-[84px] border-b border-white/5 bg-black">
      <div className="mx-auto grid h-full max-w-[1440px] grid-cols-[1fr_auto] items-center px-6 md:grid-cols-3 md:px-12 lg:px-16">
        <Link href="/" className="shrink-0 justify-self-start" onClick={() => setOpen(false)}>
          <Logo size="nav" />
        </Link>

        <nav className="hidden items-center justify-center gap-10 justify-self-center md:flex">
          {nav.links.map((link) => {
            const isActive = activePage === link.key;
            return (
              <Link
                key={link.key}
                href={link.href}
                className={`relative pb-1 text-[12px] font-semibold tracking-[0.48px] uppercase ${
                  isActive ? "text-accent-red" : "text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute right-0 -bottom-0.5 left-0 h-[2px] bg-accent-red" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-3 justify-self-end">
          <Link
            href="/support"
            className="inline-flex h-9 min-w-[132px] items-center justify-center bg-accent-red px-5 text-[11px] font-bold tracking-[0.44px] text-white uppercase"
          >
            {nav.supportCta}
          </Link>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center text-white md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-5 bg-white" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-white/10 bg-black px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {nav.links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-[12px] font-semibold tracking-[0.48px] uppercase ${
                  activePage === link.key ? "text-accent-red" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
