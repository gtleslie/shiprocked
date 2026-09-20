import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/Logo";
import { FacebookIcon, InstagramIcon, YouTubeIcon } from "@/components/SocialIcons";
import { siteContent } from "@content/site-content";

const connectIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YouTubeIcon,
} as const;

function FooterConnectLinks({ compact = false }: { compact?: boolean }) {
  const { connect } = siteContent.footer;

  return (
    <div className={`flex items-center ${compact ? "gap-2" : "gap-4"}`}>
      {connect.map((item) => {
        const Icon = connectIcons[item.icon];
        return (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`flex items-center justify-center border border-white/25 text-text-secondary transition-colors hover:border-white hover:text-white ${
              compact ? "h-9 w-9" : "h-10 w-10"
            }`}
          >
            <Icon className={compact ? "h-4 w-4" : "h-6 w-6"} />
          </a>
        );
      })}
    </div>
  );
}

function FooterExploreColumn() {
  const { explore } = siteContent.footer;

  return (
    <>
      <p className="mb-3 text-[13px] font-bold tracking-[0.8px] text-accent-gold uppercase">
        EXPLORE
      </p>
      <ul className="space-y-1.5">
        {explore.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-[14px] text-text-secondary hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function FooterContactColumn() {
  const { contact } = siteContent.footer;

  return (
    <>
      <p className="mb-3 text-[13px] font-bold tracking-[0.8px] text-accent-gold uppercase">
        CONTACT
      </p>
      <p className="text-[14px] text-text-secondary">{contact.label}</p>
      <a
        href={`mailto:${contact.email}`}
        className="mt-0.5 inline-block text-[14px] text-text-secondary underline decoration-white/25 underline-offset-2 transition-colors hover:text-accent-red hover:decoration-accent-red"
      >
        {contact.email}
      </a>
    </>
  );
}

export function SiteFooter() {
  const { footer } = siteContent;

  return (
    <footer className="border-t border-border bg-black">
      <div className="mx-auto max-w-[1440px] px-4 py-10 md:px-12 md:py-12 lg:px-16">
        <div className="sm:hidden">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <Image
                src={siteContent.assets.keLogo}
                alt="Koenig Entertainment Co."
                width={3600}
                height={3600}
                className="h-[58px] w-auto shrink-0 object-contain object-left"
              />
              <Image
                src={siteContent.assets.ask4Logo}
                alt="ASK4 Entertainment"
                width={1244}
                height={845}
                className="h-[30px] w-auto shrink-0 object-contain brightness-0 invert"
              />
            </div>
            <FooterConnectLinks compact />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <FooterExploreColumn />
            </div>
            <div>
              <FooterContactColumn />
            </div>
          </div>
        </div>

        <div className="hidden gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-wrap items-center gap-6 self-end lg:gap-8">
            <Logo size="footer" />
            <Image
              src={siteContent.assets.ask4Logo}
              alt="ASK4 Entertainment"
              width={1244}
              height={845}
              className="h-[44px] w-auto object-contain brightness-0 invert md:h-[68px]"
            />
          </div>

          <div>
            <FooterExploreColumn />
          </div>

          <div>
            <FooterContactColumn />
          </div>

          <div>
            <p className="mb-3 text-[13px] font-bold tracking-[0.8px] text-accent-gold uppercase">
              CONNECT
            </p>
            <FooterConnectLinks />
          </div>
        </div>

        <p className="mt-12 text-[10px] tracking-[0.2px] text-text-dim">{footer.copyright}</p>
      </div>
    </footer>
  );
}
