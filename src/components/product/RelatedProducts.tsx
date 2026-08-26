// Visar "Liknande produkter" (samma kategori) längst ner på produktdetaljsidan.
// Renderar inget om det inte finns några relaterade produkter.
import { ProductGrid } from "@/components/product/ProductGrid";
import type { Product } from "@/types/product";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className="mt-20 border-t border-border pt-12">
      <h2 className="text-xl font-semibold tracking-tight">
        Liknande produkter
      </h2>
      <div className="mt-6">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
