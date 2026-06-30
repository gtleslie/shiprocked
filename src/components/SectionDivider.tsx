import Image from "next/image";
import { siteContent } from "@content/site-content";

export function SectionDivider() {
  return (
    <div className="flex justify-center py-12">
      <Image
        src={siteContent.assets.dividerVector}
        alt=""
        width={1200}
        height={24}
        className="h-6 w-full max-w-4xl object-contain opacity-80"
        aria-hidden
      />
    </div>
  );
}
