import { siteContent } from "@content/site-content";

const TICKER_COPIES = 10;

function TickerSequence({ message }: { message: string }) {
  return (
    <>
      {Array.from({ length: TICKER_COPIES }, (_, index) => (
        <span key={index} className="fundraising-banner-item">
          {message}
          <span className="fundraising-banner-sep" aria-hidden>
            ◆
          </span>
        </span>
      ))}
    </>
  );
}

type FundraisingBannerProps = {
  message?: string;
  floating?: boolean;
};

export function FundraisingBanner({
  message = siteContent.campaign.fundraisingBanner,
  floating = false,
}: FundraisingBannerProps) {
  return (
    <div
      className={`fundraising-banner fundraising-banner--support${floating ? " fundraising-banner--floating" : ""}`}
      role="marquee"
      aria-live="off"
    >
      <div className="fundraising-banner-viewport">
        <div className="fundraising-banner-track">
          <span className="fundraising-banner-text font-overline !tracking-normal text-[13px] font-bold text-accent-gold uppercase md:text-[14px]">
            <TickerSequence message={message} />
          </span>
          <span
            className="fundraising-banner-text font-overline !tracking-normal text-[13px] font-bold text-accent-gold uppercase md:text-[14px]"
            aria-hidden
          >
            <TickerSequence message={message} />
          </span>
        </div>
      </div>
    </div>
  );
}
