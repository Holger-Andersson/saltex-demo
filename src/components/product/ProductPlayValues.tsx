// Visar produktens lekvärden (t.ex. balans, gungrörelse, rollspel).
// Mobil: en horisontellt svepbar slide av ikon-chips (ikon ovanför text). En kant-nedtoning till
// höger samt en svep-hint (samma mönster som "drag-hint" i 3D-visaren) gör det tydligt att man
// kan svepa för att se fler, om det finns fler än 3 lekvärden.
// Desktop (lg): en vertikal lista med en delad, fast ikonkolumn (auto) så ikonerna hamnar i en rak linje.
import { PLAY_VALUES } from "@/lib/products";
import type { PlayValue } from "@/types/product";

const VISIBLE_ON_MOBILE = 3;

export function ProductPlayValues({ values }: { values: PlayValue[] }) {
  const hasOverflow = values.length > VISIBLE_ON_MOBILE;

  return (
    <div className="relative">
      <h2 className="text-lg font-semibold tracking-tight">Lekvärden</h2>

      <div className="relative">
        <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-x-4 lg:gap-y-3 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {values.map((value) => {
            const { label, icon } = PLAY_VALUES[value];
            return (
              <div
                key={value}
                className="flex shrink-0 grow-0 basis-[30%] snap-start flex-col-reverse items-center gap-2 text-center lg:w-auto lg:shrink lg:basis-auto lg:contents"
              >
                <span className="text-xs font-medium text-foreground/70 lg:text-left lg:text-sm">
                  {label}
                </span>
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent/10 p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element -- static icon set, no optimization needed */}
                  <img src={icon} alt="" className="h-full w-full object-contain" />
                </div>
              </div>
            );
          })}
        </div>

        {hasOverflow && (
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent lg:hidden" />
        )}

        {hasOverflow && (
          <div className="drag-hint pointer-events-none absolute inset-0 flex items-center justify-center [animation:drag-hint-fade_2.2s_ease-in-out_forwards] lg:hidden">
            <span className="flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white shadow-lg [animation:drag-hint-move_1.1s_ease-in-out_2]">
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
