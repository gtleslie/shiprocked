import { siteContent } from "@content/site-content";

type CampaignProgressProps = {
  className?: string;
};

export function CampaignProgress({ className = "" }: CampaignProgressProps) {
  const { campaign } = siteContent;
  const percent = Math.min((campaign.raised / campaign.goal) * 100, 100);

  return (
    <div className={className}>
      <p className="text-[14px] text-text-secondary">{campaign.dates}</p>
      <div className="mt-6 h-4 w-full overflow-hidden rounded-[8px] bg-[#292929]">
        <div
          className="h-full rounded-[8px] bg-accent-red transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="mt-3 flex items-center justify-between text-[12px] font-bold">
        <span className="text-text-primary">
          ${campaign.raised.toLocaleString()} RAISED
        </span>
        <span className="text-text-secondary">
          GOAL: ${campaign.goal.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
