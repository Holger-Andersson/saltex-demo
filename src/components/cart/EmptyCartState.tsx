// Tomt-läge för kundvagnen (ikon + text + länk tillbaka till butiken).
// TODO(kollegor): ersätt med en riktig radlista när kundvagnsstate finns på plats.
import Link from "next/link";

export function EmptyCartState() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border py-20 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background text-foreground/40">
        <svg viewBox="0 0 20 20" fill="none" className="h-7 w-7">
          <path
            d="M3 3h1.5L6 12.5h9L17 6H5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="7.5" cy="16" r="1.2" fill="currentColor" />
          <circle cx="13.5" cy="16" r="1.2" fill="currentColor" />
        </svg>
      </span>
      <p className="text-foreground/60">Din varukorg är tom.</p>
      <Link
        href="/products"
        className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
      >
        Fortsätt handla
      </Link>
    </div>
  );
}
