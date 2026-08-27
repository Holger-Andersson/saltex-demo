"use client";

// Visar produktens lekvärden (t.ex. balans, gungrörelse, rollspel).
// Mobil: en horisontellt svepbar slide av ikon-chips (ikon ovanför text). En kant-nedtoning till
// höger samt en svep-hint (samma mönster som "drag-hint" i 3D-visaren) gör det tydligt att man
// kan svepa för att se fler, om det finns fler än 3 lekvärden.
// Desktop (lg): en vertikal lista med en delad, fast ikonkolumn (auto) så ikonerna hamnar i en rak linje.
// En ikon i taget animeras och får en grön ram — turen går vidare till nästa efter ett kort tag,
// så att raden aldrig rör sig på flera ställen samtidigt.
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

// Hur länge varje lekvärde highlightas — alltid ett helt antal varv av dess
// egen CSS-animationstid, så ingen ikon någonsin klipps av mitt i en rörelse.
// (t.ex. rollspel: play-icon-fly är 2.2s, så den får exakt 2200ms, inte ett
// gemensamt fönster som råkar hamna mitt i nästa varv.)
const HIGHLIGHT_DURATION_MS: Record<PlayValue, number> = {
  balancing: 2000, // play-icon-wobble 1s × 2
  rocking: 2000, // play-icon-wobble 1s × 2
  swinging: 2000, // play-icon-swing 1s × 2
  hanging: 2000, // play-icon-swing 1s × 2
  running: 1800, // play-icon-bounce 0.9s × 2
  crawling: 2800, // play-icon-crawl 1.4s × 2
  climbing: 3200, // play-icon-climb 1.6s × 2
  hiding: 3000, // play-icon-hide-figure 1.5s × 2
  "tactile-play": 2450, // play-icon-touch 1s × 2 + 450ms sista cirkelns stagger
  sliding: 2000, // play-icon-slide-figure 2s × 1
  shaping: 2200, // play-icon-dig 2.2s × 1
  cooperation: 2200, // play-icon-block-* 2.2s × 1
  interaction: 2400, // play-icon-approach-*/highfive-flash 2.4s × 1
  inclusive: 2400, // play-icon-highfive-flash 2.4s × 1
  "role-play": 2900, // play-icon-fly 2.9s × 1
  "visual-stimulation": 1800, // play-icon-blink 1.8s × 1
};
const DEFAULT_HIGHLIGHT_DURATION_MS = 2200;
const VISIBLE_ON_MOBILE = 3;

export function ProductPlayValues({ values }: { values: PlayValue[] }) {
  const hasOverflow = values.length > VISIBLE_ON_MOBILE;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (values.length <= 1) return;
    const activeValue = values[activeIndex];
    const duration =
      HIGHLIGHT_DURATION_MS[activeValue] ?? DEFAULT_HIGHLIGHT_DURATION_MS;
    const id = setTimeout(() => {
      setActiveIndex((current) => (current + 1) % values.length);
    }, duration);
    return () => clearTimeout(id);
  }, [values, activeIndex]);

  return (
    <div className="relative">
      <h2 className="text-lg font-semibold tracking-tight">Lekvärden</h2>

      <div className="relative">
        <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-x-4 lg:gap-y-3 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {values.map((value, index) => {
            const { label, icon } = PLAY_VALUES[value];
            const CustomIcon = CUSTOM_ICONS[value];
            const active = index === activeIndex;
            return (
              <div
                key={value}
                className="flex shrink-0 grow-0 basis-[30%] snap-start flex-col-reverse items-center gap-2 text-center lg:w-auto lg:shrink lg:basis-auto lg:contents"
              >
                <span
                  className={`text-xs font-medium transition-colors duration-300 lg:text-left lg:text-sm ${
                    active ? "text-accent" : "text-foreground/70"
                  }`}
                >
                  {label}
                </span>
                <div
                  className={`icon-sweep-wrap relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 bg-accent/10 p-1 transition-all duration-300 ${
                    active
                      ? "scale-105 border-accent shadow-md"
                      : "border-transparent"
                  }`}
                >
                  {CustomIcon ? (
                    <CustomIcon className="h-full w-full" active={active} />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element -- static icon set, no optimization needed
                    <img
                      src={icon}
                      alt=""
                      className={`h-full w-full object-contain ${
                        active ? PLAY_VALUE_MOTION[value] : ""
                      }`}
                    />
                  )}
                  <span className="icon-sweep pointer-events-none absolute inset-0" />
                </div>
              </div>
            );
          })}
        </div>

        {hasOverflow && (
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent lg:hidden" />
        )}

        {hasOverflow && (
          <div className="drag-hint pointer-events-none absolute inset-0 flex items-center justify-center [animation:drag-hint-fade_4.2s_ease-in-out_forwards] lg:hidden">
            <span className="flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white shadow-lg [animation:drag-hint-move_1.1s_ease-in-out_4]">
              <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 shrink-0">
                <path
                  d="M12 6l-4 4 4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Svep för fler
              <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 shrink-0">
                <path
                  d="M8 6l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
