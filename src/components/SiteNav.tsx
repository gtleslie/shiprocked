import Image from "next/image";
import Link from "next/link";
import { siteContent, type NavKey } from "@content/site-content";

type SiteNavProps = {
  activePage: NavKey;
};

export function SiteNav({ activePage }: SiteNavProps) {
  const { nav, assets } = siteContent;

  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-[84px] bg-bg-primary">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-16">
        <Link href="/" className="relative block h-[60px] w-[93px] shrink-0">
          <Image
            src={assets.logo}
            alt={siteContent.site.title}
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.links.map((link) => {
            const isActive = activePage === link.key;
            return (
              <Link
                key={link.key}
                href={link.href}
                className={`relative pb-2 text-[12px] font-semibold tracking-[0.48px] ${
                  isActive ? "text-accent-red" : "text-text-secondary"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute right-0 -bottom-0 left-0 h-[2px] bg-accent-red"
                    style={{ width: link.underlineWidth }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/donate"
          className="inline-flex h-9 min-w-[146px] items-center justify-center rounded-[2px] bg-accent-red px-5 text-[11px] font-bold tracking-[0.44px] text-text-primary"
        >
          {nav.donateCta}
        </Link>
      </div>
    </header>
  );
}
