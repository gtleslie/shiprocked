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
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-black">
      <SiteNav activePage={activePage} />
      <main className="site-main-offset flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
