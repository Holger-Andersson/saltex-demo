// Visar produktens lekvärden (t.ex. balans, gungrörelse, rollspel) som en rad ikon-chips.
import { PLAY_VALUES } from "@/lib/products";
import type { PlayValue } from "@/types/product";

export function ProductPlayValues({ values }: { values: PlayValue[] }) {
  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight">Lekvärden</h2>
      <div className="mt-4 flex flex-wrap gap-6">
        {values.map((value) => {
          const { label, icon } = PLAY_VALUES[value];
          return (
            <div
              key={value}
              className="flex w-24 flex-col items-center gap-2 text-center"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-border bg-white p-2">
                {/* eslint-disable-next-line @next/next/no-img-element -- static icon set, no optimization needed */}
                <img src={icon} alt="" className="h-full w-full" />
              </div>
              <span className="text-xs font-medium text-foreground/60">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
