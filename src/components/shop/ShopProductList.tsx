// Renderar produktgriden, eller ett tomt-läge om kategorin (t.ex. Sandlådor/Lekstugor) saknar produkter ännu.
import { ProductGrid } from "@/components/product/ProductGrid";
import type { Product } from "@/types/product";

export function ShopProductList({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border py-20 text-center text-foreground/50">
        Inga produkter i den här kategorin ännu.
      </div>
    );
  }

  return <ProductGrid products={products} />;
}
