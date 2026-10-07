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
    <header className="fixed top-0 right-0 left-0 z-50 bg-black">
      <div className="mx-auto grid h-[84px] max-w-[1440px] grid-cols-[auto_1fr] items-center gap-x-2 border-b border-white/5 px-4 md:grid-cols-[1fr_auto_1fr] md:gap-3 md:px-12 lg:px-16">
        <button
          type="button"
          className="-ml-1 flex h-11 w-11 shrink-0 items-center justify-center text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-5 bg-white" />
            <span className="block h-px w-5 bg-white" />
            <span className="block h-px w-5 bg-white" />
          </span>
        </button>

        <Link
          href="/"
          className="hidden shrink-0 items-center justify-self-start md:flex md:translate-y-0"
          onClick={() => setOpen(false)}
        >
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

        <Link
          href="/"
          className="flex h-10 shrink-0 items-center justify-self-end md:hidden"
          onClick={() => setOpen(false)}
        >
          <Logo size="nav" />
        </Link>
      </div>

      {open && (
        <div className="border-b border-white/10 bg-black px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {nav.links.map((link) => {
              const isActive = activePage === link.key;
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-[48px] items-center rounded-sm px-3 py-3 text-[13px] font-semibold tracking-[0.48px] uppercase active:bg-white/5 ${
                    isActive ? "text-accent-red" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
