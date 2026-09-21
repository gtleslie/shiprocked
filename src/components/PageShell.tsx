import { ReactNode } from "react";
import { FundraisingBanner } from "@/components/FundraisingBanner";
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
      {activePage === "support" ? (
        <div className="fundraising-banner-bleed fundraising-banner-bleed--under-nav fixed z-40">
          <FundraisingBanner />
        </div>
      ) : null}
      <main
        className={`flex-1 ${activePage === "support" ? "site-support-offset" : "site-nav-offset"}`}
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
