import Image from "next/image";
import { siteContent } from "@content/site-content";

type LogoSize = "nav" | "hero" | "footer";

const sizes: Record<LogoSize, string> = {
  nav: "h-[60px] w-auto",
  footer: "h-[80px] w-auto",
  hero: "h-auto w-[320px] md:w-[420px]",
};

export function Logo({ size = "nav" }: { size?: LogoSize }) {
  return (
    <Image
      src={siteContent.assets.logo}
      alt={siteContent.site.title}
      width={186}
      height={120}
      className={sizes[size]}
      priority={size !== "footer"}
    />
  );
}
