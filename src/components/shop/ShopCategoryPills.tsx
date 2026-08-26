// Rad med "Alla" + en pill per kategori. Fungerande filter: länkarna sätter ?category= på /products.
import Link from "next/link";

import { CATEGORY_LABELS, CATEGORY_ORDER } from "@/lib/products";
import type { ProductCategory } from "@/types/product";

export function ShopCategoryPills({
  activeCategory,
}: {
  activeCategory?: ProductCategory;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/products"
        className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
          activeCategory
            ? "border-border text-foreground/70 hover:border-accent/40 hover:text-foreground"
            : "border-accent bg-accent text-white"
        }`}
      >
        Alla
      </Link>
      {CATEGORY_ORDER.map((category) => (
        <Link
          key={category}
          href={`/products?category=${category}`}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            activeCategory === category
              ? "border-accent bg-accent text-white"
              : "border-border text-foreground/70 hover:border-accent/40 hover:text-foreground"
          }`}
        >
          {CATEGORY_LABELS[category]}
        </Link>
      ))}
    </div>
  );
}
