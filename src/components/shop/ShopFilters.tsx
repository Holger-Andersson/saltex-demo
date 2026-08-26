// Filter-sidopanel för butikssidan (pris, ålder, material, tillgänglighet).
// UI-skelett – TODO nedan, kolleger kopplar filtren till faktisk produktfiltrering.
const AGE_RANGES = ["0–3 år", "3–6 år", "6–12 år", "12+ år"];
const MATERIALS = ["Trä", "Stål", "HDPE-plast", "Rep"];

export function ShopFilters() {
  return (
    <aside className="shrink-0 lg:w-64">
      <details
        className="group rounded-2xl border border-border bg-white p-5 lg:open:pb-5"
        open
      >
        <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-foreground lg:cursor-default">
          Filter
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="h-4 w-4 text-foreground/50 transition-transform group-open:rotate-180 lg:hidden"
          >
            <path
              d="m5.5 8 4.5 4.5L14.5 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </summary>

        {/* TODO(kollegor): koppla pris/ålder/material/tillgänglighet-filtren till produktlistan. */}
        <div className="mt-5 border-t border-border pt-4">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
            Pris
          </h3>
          <div className="mt-3 flex items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-full rounded-lg border border-border px-3 py-1.5 text-sm text-foreground placeholder:text-foreground/40"
            />
            <span className="text-foreground/40">–</span>
            <input
              type="number"
              placeholder="Max"
              className="w-full rounded-lg border border-border px-3 py-1.5 text-sm text-foreground placeholder:text-foreground/40"
            />
          </div>
        </div>

        <div className="mt-5 border-t border-border pt-4">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
            Ålder
          </h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-foreground/70">
            {AGE_RANGES.map((age) => (
              <label key={age} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-border text-accent"
                />
                {age}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-5 border-t border-border pt-4">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
            Material
          </h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-foreground/70">
            {MATERIALS.map((material) => (
              <label key={material} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-border text-accent"
                />
                {material}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-5 border-t border-border pt-4">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
            Tillgänglighet
          </h3>
          <label className="mt-3 flex items-center gap-2 text-sm text-foreground/70">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-border text-accent"
            />
            Rullstolsanpassat
          </label>
        </div>
      </details>
    </aside>
  );
}
