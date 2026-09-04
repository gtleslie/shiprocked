import { SiteButton } from "@/components/SiteButton";
import { siteContent } from "@content/site-content";

type Tier = (typeof siteContent.support.tiers.items)[number];

function wavyPath(width: number, height: number, amp = 7, waves = 9) {
  const left: string[] = [];
  const right: string[] = [];

  for (let i = 0; i <= waves * 2; i++) {
    const t = i / (waves * 2);
    const y = t * height;
    const offset = Math.sin(t * Math.PI * waves) * amp;
    left.push(`${12 + offset},${y}`);
    right.push(`${width - 12 + offset},${y}`);
  }

  return [
    `M ${left[0]}`,
    ...left.slice(1).map((point) => `L ${point}`),
    `L ${right[right.length - 1]}`,
    ...right
      .slice(0, -1)
      .reverse()
      .map((point) => `L ${point}`),
    "Z",
  ].join(" ");
}

type TierCardProps = {
  tier: Tier;
  locked?: boolean;
};

export function TierCard({ tier, locked = false }: TierCardProps) {
  const { support, links } = siteContent;
  const gold = tier.featured || tier.premium;
  const path = wavyPath(320, 420, gold ? 8 : 7, 8);

  return (
    <article className="relative min-h-[380px] overflow-visible bg-transparent">
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 320 420"
        preserveAspectRatio="none"
        overflow="visible"
        aria-hidden
      >
        {tier.premium && (
          <>
            <path d={path} fill="none" stroke="#d4a23c" strokeWidth="8" opacity="0.25" />
            <path d={path} fill="none" stroke="#d4a23c" strokeWidth="5" opacity="0.45" />
          </>
        )}
        <path
          d={path}
          fill="#161616"
          stroke={gold ? "#d4a23c" : "#3a3a3a"}
          strokeWidth={gold ? 3 : 1.25}
        />
      </svg>

      {"badge" in tier && tier.badge && (
        <span className="absolute top-5 left-1/2 z-10 -translate-x-1/2 bg-accent-gold px-3 py-1 text-[10px] font-bold tracking-[0.4px] text-black uppercase">
          {tier.badge}
        </span>
      )}

      <div className="relative z-10 flex h-full flex-col px-10 pt-14 pb-8">
        <p className="text-[11px] font-bold tracking-[0.44px] text-accent-red">
          {tier.tier}
        </p>
        <p
          className={`teaser-price mt-2 font-black ${
            tier.premium ? "text-[40px]" : "text-[32px]"
          } ${locked ? "text-[#3a3a3a] blur-[16px] select-none" : "text-white blur-none"}`}
          aria-hidden={locked}
        >
          ${tier.price.toLocaleString()}
        </p>
        <h3 className="mt-1 text-[14px] font-bold tracking-[0.4px] text-accent-gold uppercase">
          {tier.name}
        </h3>
        <ul className="mt-5 flex-1 space-y-2">
          {tier.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2 text-[13px] text-text-secondary">
              <span
                className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 ${
                  tier.premium ? "bg-accent-gold" : "bg-accent-red"
                }`}
              />
              <span>{perk}</span>
            </li>
          ))}
        </ul>
        <SiteButton
          href={locked ? undefined : links.seedAndSpark}
          variant={gold ? "gold" : "dark"}
          className="mt-6 h-11 w-full text-[11px]"
          disabled={locked}
        >
          {tier.premium ? support.tiers.claimCta : support.tiers.selectCta}
        </SiteButton>
      </div>
    </article>
  );
}
