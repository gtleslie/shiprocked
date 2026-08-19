import { siteContent } from "@content/site-content";

type CampaignProgressProps = {
  className?: string;
  variant?: "home" | "support";
};

export function CampaignProgress({
  className = "",
  variant = "home",
}: CampaignProgressProps) {
  const { campaign } = siteContent;
  const goal = variant === "home" ? campaign.homeGoal : campaign.goal;
  const percent = Math.min((campaign.raised / goal) * 100, 100);
  const visualPercent = Math.max(percent, 22);

  return (
    <div className={className}>
      <div className="h-[10px] w-full overflow-hidden rounded-full bg-[#2a2a2a]">
        <div
          className="h-full rounded-full bg-accent-red"
          style={{ width: `${visualPercent}%` }}
        />
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] font-bold tracking-[0.32px] uppercase">
        {variant === "home" ? (
          <>
            <span className="text-white">
              ${campaign.raised.toLocaleString()} RAISED
            </span>
            <span className="text-white">
              GOAL: ${goal.toLocaleString()}
            </span>
          </>
        ) : (
          <>
            <span className="text-white">
              ${campaign.raised.toLocaleString()} RAISED OF $
              {goal.toLocaleString()} GOAL
            </span>
            <span className="text-accent-gold">{campaign.datesLabel}</span>
          </>
        )}
      </div>
    </div>
  );
}
