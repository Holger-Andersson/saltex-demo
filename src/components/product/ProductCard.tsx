// Kort som visar en produkt i en produktlista och länkar vidare till produktens detaljsida.
import Link from "next/link";

import { CATEGORY_LABELS, formatPrice } from "@/lib/products";
import { ProductCardMedia } from "@/components/product/ProductCardMedia";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="block overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl"
    >
      <ProductCardMedia product={product} />
      <div className="flex flex-col gap-1 p-4">
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
  );
}
