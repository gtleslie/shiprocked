import Link from "next/link";
import { Logo } from "@/components/Logo";
import { FacebookIcon, InstagramIcon, YouTubeIcon } from "@/components/SocialIcons";
import { siteContent } from "@content/site-content";

const connectIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YouTubeIcon,
} as const;

export function SiteFooter() {
  const { footer } = siteContent;

  return (
    <footer className="border-t border-border bg-black">
      <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 lg:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="self-end">
            <Logo size="footer" />
          </div>

          <div>
            <p className="mb-3 text-[10px] font-bold tracking-[0.8px] text-accent-gold uppercase">
              EXPLORE
            </p>
            <ul className="space-y-1.5">
              {footer.explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[12px] text-text-secondary hover:text-white"
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
              className="text-[12px] text-text-secondary hover:text-white"
            >
              {footer.contact.email}
            </a>
          </div>

          <div>
            <p className="mb-3 text-[10px] font-bold tracking-[0.8px] text-accent-gold uppercase">
              CONNECT
            </p>
            <div className="flex items-center gap-4">
              {footer.connect.map((item) => {
                const Icon = connectIcons[item.icon];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex h-9 w-9 items-center justify-center text-text-secondary transition-colors hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <p className="mt-12 text-[10px] tracking-[0.2px] text-text-dim">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
