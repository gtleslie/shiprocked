import { siteContent } from "@content/site-content";

const TICKER_SEGMENT = `${siteContent.campaign.fundraisingBanner} ◆ `;
const TICKER_COPIES = 12;

export function FundraisingBanner() {
  const line = TICKER_SEGMENT.repeat(TICKER_COPIES);

  return (
    <div className="fundraising-banner" role="marquee" aria-live="off">
      <div className="fundraising-banner-viewport">
        <div className="fundraising-banner-track">
          <span className="fundraising-banner-text font-overline !tracking-normal text-[13px] font-bold text-accent-gold uppercase md:text-[14px]">
            {line}
          </span>
          <span
            className="fundraising-banner-text font-overline !tracking-normal text-[13px] font-bold text-accent-gold uppercase md:text-[14px]"
            aria-hidden
          >
            {line}
          </span>
        </div>
      </div>
    </div>
  );
}
