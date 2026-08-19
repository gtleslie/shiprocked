import { ReactNode } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import type { NavKey } from "@content/site-content";

type PageShellProps = {
  activePage: NavKey;
  children: ReactNode;
};

export function PageShell({ activePage, children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-black">
      <SiteNav activePage={activePage} />
      <main className="pt-[84px]">{children}</main>
      <SiteFooter />
    </div>
  );
}
