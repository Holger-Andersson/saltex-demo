"use client";

// Visar produktens lekvärden (t.ex. balans, gungrörelse, rollspel) som en rad
// ikon-chips. En ikon i taget animeras och highlightas ett kort tag innan
// turen går vidare till nästa, så att raden aldrig rör sig på flera ställen
// samtidigt.
import { useEffect, useState } from "react";

import { BalancingIcon } from "@/components/product/BalancingIcon";
import { ClimbingIcon } from "@/components/product/ClimbingIcon";
import { CooperationIcon } from "@/components/product/CooperationIcon";
import { CrawlingIcon } from "@/components/product/CrawlingIcon";
import { HangingIcon } from "@/components/product/HangingIcon";
import { HidingIcon } from "@/components/product/HidingIcon";
import { InclusiveIcon } from "@/components/product/InclusiveIcon";
import { InteractionIcon } from "@/components/product/InteractionIcon";
import { RockingIcon } from "@/components/product/RockingIcon";
import { ShapingIcon } from "@/components/product/ShapingIcon";
import { SlidingIcon } from "@/components/product/SlidingIcon";
import { SwingingIcon } from "@/components/product/SwingingIcon";
import { TactileIcon } from "@/components/product/TactileIcon";
import { PLAY_VALUES } from "@/lib/products";
import type { PlayValue } from "@/types/product";

// Vissa lekvärden har en handgjord, inline SVG-animation istället för att bara
// animera hela <img>-ikonen (t.ex. en figur som rör sig separat från bakgrunden).
const CUSTOM_ICONS: Partial<
  Record<
    PlayValue,
    (props: {
      className?: string;
      animationDelay?: string;
      active?: boolean;
    }) => React.ReactElement
  >
> = {
  hiding: HidingIcon,
  sliding: SlidingIcon,
  interaction: InteractionIcon,
  shaping: ShapingIcon,
  cooperation: CooperationIcon,
  crawling: CrawlingIcon,
  climbing: ClimbingIcon,
  "tactile-play": TactileIcon,
  inclusive: InclusiveIcon,
  balancing: BalancingIcon,
  rocking: RockingIcon,
  swinging: SwingingIcon,
  hanging: HangingIcon,
};

const PLAY_VALUE_MOTION: Record<PlayValue, string> = {
  balancing: "play-icon-wobble",
  rocking: "play-icon-wobble",
  swinging: "play-icon-swing",
  hanging: "play-icon-swing",
  climbing: "play-icon-bounce",
  running: "play-icon-bounce",
  sliding: "play-icon-bounce",
  crawling: "play-icon-crawl",
  hiding: "play-icon-peek",
  cooperation: "play-icon-pulse",
  interaction: "play-icon-pulse",
  inclusive: "play-icon-pulse",
  "role-play": "play-icon-fly",
  "tactile-play": "play-icon-pulse",
  "visual-stimulation": "play-icon-blink",
  shaping: "play-icon-pulse",
};

const HIGHLIGHT_DURATION_MS = 2600;

export function ProductPlayValues({ values }: { values: PlayValue[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (values.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % values.length);
    }, HIGHLIGHT_DURATION_MS);
    return () => clearInterval(id);
  }, [values.length]);

  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight">Lekvärden</h2>
      <div className="mt-4 flex flex-wrap gap-6">
        {values.map((value, index) => {
          const { label, icon } = PLAY_VALUES[value];
          const CustomIcon = CUSTOM_ICONS[value];
          const active = index === activeIndex;
          return (
            <div
              key={value}
              className="flex w-24 flex-col items-center gap-2 text-center"
            >
              <div
                className={`flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border bg-white p-2 transition-all duration-300 ${
                  active
                    ? "scale-105 border-accent shadow-md"
                    : "border-border"
                }`}
              >
                {CustomIcon ? (
                  <CustomIcon className="h-full w-full" active={active} />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element -- static icon set, no optimization needed
                  <img
                    src={icon}
                    alt=""
                    className={`h-full w-full ${
                      active ? PLAY_VALUE_MOTION[value] : ""
                    }`}
                  />
                )}
              </div>
              <span
                className={`text-xs font-medium transition-colors duration-300 ${
                  active ? "text-accent" : "text-foreground/60"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
