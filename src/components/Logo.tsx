import Image from "next/image";
import { siteContent } from "@content/site-content";

type LogoSize = "nav" | "hero" | "footer";

const variants: Record<
  LogoSize,
  { src: string; width: number; height: number; className: string }
> = {
  nav: {
    src: siteContent.assets.logo,
    width: 186,
    height: 120,
    className: "h-[44px] w-auto md:h-[60px]",
  },
  footer: {
    src: siteContent.assets.keLogo,
    width: 3600,
    height: 3600,
    className: "h-[110px] w-auto object-contain object-left md:h-[170px]",
  },
  hero: {
    src: siteContent.assets.heroLogo,
    width: 1020,
    height: 660,
    className: "h-auto w-full max-w-[280px] md:max-w-[360px] lg:max-w-[480px]",
  },
};

export function Logo({ size = "nav" }: { size?: LogoSize }) {
  const variant = variants[size];

  return (
    <Image
      src={variant.src}
      alt={size === "footer" ? "Koenig Entertainment Co." : siteContent.site.title}
      width={variant.width}
      height={variant.height}
      className={variant.className}
      priority={size !== "footer"}
    />
  );
}
