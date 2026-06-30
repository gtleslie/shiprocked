import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@content/site-content";

export function SiteFooter() {
  const { footer, assets } = siteContent;

  return (
    <footer className="bg-bg-footer">
      <div className="mx-auto max-w-[1440px] px-16 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="relative h-[70px] w-[108px]">
            <Image
              src={assets.logo}
              alt={siteContent.site.title}
              fill
              className="object-contain object-left"
            />
          </div>

          <div>
            <p className="mb-3 text-[10px] font-bold tracking-[0.8px] text-accent-gold uppercase">
              EXPLORE
            </p>
            <ul className="space-y-1">
              {footer.explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[12px] text-text-secondary hover:text-text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[10px] font-bold tracking-[0.8px] text-accent-gold uppercase">
              CONTACT
            </p>
            <p className="text-[12px] text-text-secondary">{footer.contact.label}</p>
            <a
              href={`mailto:${footer.contact.email}`}
              className="text-[12px] text-text-secondary hover:text-text-primary"
            >
              {footer.contact.email}
            </a>
          </div>

          <div>
            <p className="mb-3 text-[10px] font-bold tracking-[0.8px] text-accent-gold uppercase">
              CONNECT
            </p>
            <ul className="space-y-1">
              {footer.connect.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[12px] text-text-secondary hover:text-text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-[10px] tracking-[0.2px] text-text-dim">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
