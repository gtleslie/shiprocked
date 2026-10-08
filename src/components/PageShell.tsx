import { ReactNode } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FundraisingBanner } from "@/components/FundraisingBanner";
import { siteContent, type NavKey } from "@content/site-content";

type PageShellProps = {
  activePage: NavKey;
  children: ReactNode;
};

export function PageShell({ activePage, children }: PageShellProps) {
  const showCabinBanner = activePage !== "support";

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-black">
      <SiteNav activePage={activePage} />
      {showCabinBanner ? (
        <div className="cabin-banner-slot">
          <FundraisingBanner message={siteContent.campaign.cabinBanner} floating />
        </div>
      ) : null}
      <main className={`site-nav-offset flex-1${showCabinBanner ? " site-nav-offset--with-banner" : ""}`}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
