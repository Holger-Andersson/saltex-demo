// Visar en rad utvalda ("featured") produkter på startsidan, med en länk vidare till hela butiken.
// Renderar inget alls om det inte finns några utvalda produkter.
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { ProductGrid } from "@/components/product/ProductGrid";
import type { Product } from "@/types/product";

export function PopularProducts({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className="border-y border-border bg-white">
      <Container>
        <div className="py-12 sm:py-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Populära produkter
            </h2>
            <Link
              href="/products"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Se alla →
            </Link>
          </div>
          <div className="mt-8">
            <ProductGrid products={products} />
          </div>
        </div>
      </Container>
    </div>
  );
}
