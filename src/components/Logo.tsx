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
    className: "h-[60px] w-auto",
  },
  footer: {
    src: siteContent.assets.logo,
    width: 186,
    height: 120,
    className: "h-[80px] w-auto",
  },
  hero: {
    src: siteContent.assets.heroLogo,
    width: 1020,
    height: 660,
    className: "h-auto w-[360px] md:w-[480px]",
  },
};

export function Logo({ size = "nav" }: { size?: LogoSize }) {
  const variant = variants[size];

  return (
    <Image
      src={variant.src}
      alt={siteContent.site.title}
      width={variant.width}
      height={variant.height}
      className={variant.className}
      priority={size !== "footer"}
    />
  );
}
