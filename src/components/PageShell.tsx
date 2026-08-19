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
    <div className="flex min-h-screen flex-col bg-black">
      <SiteNav activePage={activePage} />
      <main className="flex-1 pt-[84px]">{children}</main>
      <SiteFooter />
    </div>
  );
}
