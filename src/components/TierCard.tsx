import Image from "next/image";
import { SiteButton } from "@/components/SiteButton";
import { WavyMediaSlot } from "@/components/ImagePlaceholder";
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
  index?: number;
};

export function TierCard({ tier, locked = false, index = 0 }: TierCardProps) {
  const { support, links } = siteContent;
  const gold = tier.featured || tier.premium;
  const path = wavyPath(320, 540, gold ? 8 : 7, 8);
  const clipId = `${tier.id}-shape`;
  const sheenId = `${tier.id}-sheen`;
  const image = "image" in tier ? tier.image : "";

  return (
    <article id={tier.id} className="relative min-h-[500px] overflow-visible bg-transparent">
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 320 540"
        preserveAspectRatio="none"
        overflow="visible"
        aria-hidden
      >
        <defs>
          <clipPath id={clipId}>
            <path d={path} />
          </clipPath>
          <linearGradient id={sheenId} x1="0" y1="0" x2="1" y2="0.15">
            <stop
              offset="0%"
              stopColor={gold ? "#d4a23c" : "#ffffff"}
              stopOpacity="0"
            />
            <stop
              offset="50%"
              stopColor={gold ? "#d4a23c" : "#ffffff"}
              stopOpacity={gold ? "0.32" : "0.16"}
            />
            <stop
              offset="100%"
              stopColor={gold ? "#d4a23c" : "#ffffff"}
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
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
        <rect
          className="tier-shimmer"
          style={{ animationDelay: `${index * 0.5}s` }}
          x="-140"
          y="0"
          width="150"
          height="540"
          fill={`url(#${sheenId})`}
          clipPath={`url(#${clipId})`}
          pointerEvents="none"
        />
      </svg>

      {"badge" in tier && tier.badge && (
        <span className="absolute top-5 left-1/2 z-10 -translate-x-1/2 bg-accent-gold px-3 py-1 text-[10px] font-bold tracking-[0.4px] text-black uppercase">
          {tier.badge}
        </span>
      )}

      <div className="relative z-10 flex h-full flex-col px-8 pt-12 pb-8">
        <WavyMediaSlot gold={gold} className="mb-5 aspect-[16/10]">
          {image ? (
            <Image
              src={image}
              alt={tier.reward}
              fill
              sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          ) : null}
        </WavyMediaSlot>

        <h3 className="text-[16px] font-bold tracking-[0.4px] text-accent-gold uppercase">
          {tier.name}
        </h3>

        <div className="mt-3 flex items-start justify-between gap-4">
          <p className="text-[15px] leading-snug font-semibold text-white">{tier.reward}</p>
          <p
            className={`teaser-price shrink-0 text-[18px] font-bold ${
              locked ? "text-[#3a3a3a] blur-[16px] select-none" : "text-accent-gold blur-none"
            }`}
            aria-hidden={locked}
          >
            ${tier.price.toLocaleString()}
          </p>
        </div>

        <ul className="mt-4 flex-1 space-y-2">
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
          variant="dark"
          className="mt-6 h-11 w-full text-[11px]"
          disabled={locked}
        >
          {support.tiers.selectCta}
        </SiteButton>
      </div>
    </article>
  );
}
