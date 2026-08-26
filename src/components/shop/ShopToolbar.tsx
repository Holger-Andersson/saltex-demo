// Verktygsrad ovanför produktgriden: antal träffar/aktiv kategori samt en sorteringsväljare.
// UI-skelett – TODO nedan, kolleger kopplar sorteringen till faktisk produktordning.
export function ShopToolbar({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
      <p className="text-sm text-foreground/50">{label}</p>

      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="hidden text-sm text-foreground/60 sm:inline">
          Sortera:
        </label>
        {/* TODO(kollegor): koppla sorteringen till faktisk produktordning. */}
        <select
          id="sort"
          defaultValue="popularity"
          className="rounded-lg border border-border bg-white px-3 py-1.5 text-sm text-foreground/80"
        >
          <option value="popularity">Popularitet</option>
          <option value="price-asc">Pris: lägst först</option>
          <option value="price-desc">Pris: högst först</option>
          <option value="name">Namn A–Ö</option>
        </select>
      </div>
    </div>
  );
}
