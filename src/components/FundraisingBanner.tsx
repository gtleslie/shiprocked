import { siteContent } from "@content/site-content";

const TICKER_MESSAGE = siteContent.campaign.fundraisingBanner;
const TICKER_COPIES = 10;

function TickerSequence() {
  return (
    <>
      {Array.from({ length: TICKER_COPIES }, (_, index) => (
        <span key={index} className="fundraising-banner-item">
          {TICKER_MESSAGE}
          <span className="fundraising-banner-sep" aria-hidden>
            ◆
          </span>
        </span>
      ))}
    </>
  );
}

export function FundraisingBanner() {
  return (
    <div className="fundraising-banner fundraising-banner--support" role="marquee" aria-live="off">
      <div className="fundraising-banner-viewport">
        <div className="fundraising-banner-track">
          <span className="fundraising-banner-text font-overline !tracking-normal text-[13px] font-bold text-accent-gold uppercase md:text-[14px]">
            <TickerSequence />
          </span>
          <span
            className="fundraising-banner-text font-overline !tracking-normal text-[13px] font-bold text-accent-gold uppercase md:text-[14px]"
            aria-hidden
          >
            <TickerSequence />
          </span>
        </div>
      </div>
    </div>
  );
}
