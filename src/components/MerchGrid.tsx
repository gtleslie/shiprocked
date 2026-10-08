import Image from "next/image";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { siteContent } from "@content/site-content";

export function MerchGrid() {
  const items = siteContent.support.tiers.items;

  return (
    <div className="merch-grid">
      {items.map((tier) => (
        <article key={tier.id} className="ship-card merch-card overflow-hidden">
          <div className="merch-card-split">
            <div className="merch-card-preview">
              <div className="relative min-h-[140px] flex-1 overflow-hidden bg-[#0c0c0c]">
                {tier.image ? (
                  <Image
                    src={tier.image}
                    alt=""
                    fill
                    sizes="(min-width: 1100px) 16vw, (min-width: 768px) 25vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <ImagePlaceholder className="h-full min-h-[140px] w-full" />
                )}
              </div>
              <div className="ship-card-footer px-4 py-3">
                <p className="text-[11px] font-bold tracking-[0.44px] text-accent-gold uppercase">
                  {tier.name}
                </p>
              </div>
            </div>
            <div className="merch-card-included">
              <p className="text-[10px] font-bold tracking-[0.44px] text-text-dim uppercase">
                Included
              </p>
              <p className="mt-2 text-[14px] leading-snug font-semibold text-white">
                {tier.reward}
              </p>
              <ul className="mt-3 space-y-1.5">
                {tier.perks.map((perk) => (
                  <li key={perk} className="text-[13px] leading-snug text-text-secondary">
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
