import Link from "next/link";

import { CATEGORY_LABELS, formatPrice } from "@/lib/products";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/?product=${product.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl"
    >
      <div className="aspect-[4/3] overflow-hidden bg-background">
        {/* eslint-disable-next-line @next/next/no-img-element -- static placeholder SVGs, no optimization needed */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
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
