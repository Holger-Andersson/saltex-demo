// Kort som visar en produkt i en produktlista, med lagerstatus, länk till detaljsidan och en köp-knapp.
import Link from "next/link";

import { CATEGORY_LABELS, formatPrice } from "@/lib/products";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const inStock = product.inStock ?? true;

  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-background">
          {/* eslint-disable-next-line @next/next/no-img-element -- static placeholder SVGs, no optimization needed */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-foreground/70">
            <span
              className={`h-1.5 w-1.5 rounded-full ${inStock ? "bg-green-500" : "bg-red-400"}`}
            />
            {inStock ? "I lager" : "Slut i lager"}
          </span>
        </div>
        <div className="flex flex-col gap-1 p-4 pb-0">
          <span className="text-xs font-medium uppercase tracking-wide text-foreground/50">
            {CATEGORY_LABELS[product.category]}
          </span>
          <h3 className="text-base font-semibold tracking-tight">
            {product.name}
          </h3>
          <p className="line-clamp-2 text-sm text-foreground/60">
            {product.description}
          </p>
          <span className="mt-1 text-sm font-medium text-accent">
            {formatPrice(product.price)}
          </span>
        </div>
      </Link>

      <div className="flex gap-2 p-4 pt-3">
        <Link
          href={`/products/${product.slug}`}
          className="flex-1 rounded-lg border border-border px-3 py-2 text-center text-sm font-medium text-foreground/80 transition-colors hover:border-accent/40 hover:text-foreground"
        >
          Läs mer
        </Link>
        {/* TODO(kollegor): koppla till kundvagnslogik */}
        <button
          type="button"
          disabled={!inStock}
          className="flex-1 rounded-lg bg-accent px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:bg-border disabled:text-foreground/40"
        >
          Köp
        </button>
      </div>
    </div>
  );
}
