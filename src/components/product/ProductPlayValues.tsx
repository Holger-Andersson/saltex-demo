// Visar produktens lekvärden (t.ex. balans, gungrörelse, rollspel).
// Mobil: en horisontellt svepbar slide av ikon-chips (ikon ovanför text).
// Desktop (lg): en vertikal lista med en delad, fast ikonkolumn (auto) så ikonerna hamnar i en rak linje.
import { PLAY_VALUES } from "@/lib/products";
import type { PlayValue } from "@/types/product";

export function ProductPlayValues({ values }: { values: PlayValue[] }) {
  return (
    <div>
      <h2 className="text-lg font-semibold tracking-tight">Lekvärden</h2>
      <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-x-4 lg:gap-y-3 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
        {values.map((value) => {
          const { label, icon } = PLAY_VALUES[value];
          return (
            <div
              key={value}
              className="flex shrink-0 grow-0 basis-1/3 snap-start flex-col-reverse items-center gap-2 text-center lg:w-auto lg:shrink lg:basis-auto lg:contents"
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
    </div>
  );
}
