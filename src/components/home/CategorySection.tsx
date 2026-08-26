// "Handla efter kategori"-sektionen på startsidan: rubrik plus det utfällbara kategorirutnätet.
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { Container } from "@/components/layout/Container";
import { CATEGORY_LABELS, CATEGORY_ORDER } from "@/lib/products";
import type { ProductCategory } from "@/types/product";

const CATEGORY_IMAGES: Partial<Record<ProductCategory, string>> = {
  playgrounds: "/images/products/A-10-430x344.webp",
  swings: "/images/products/C-5-430x344.webp",
  slides: "/images/products/kids-spiral-slide-500x500.webp",
  climbing: "/images/products/BLFJ040_2-430x344.webp",
  accessories: "/images/products/bench-park.svg.jpg",
};

export function CategorySection() {
  return (
    <div className="border-b border-border bg-white">
      <Container>
        <div className="py-12 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            Handla efter kategori
          </h2>
          <div className="mt-6">
            <CategoryGrid
              categories={CATEGORY_ORDER}
              labels={CATEGORY_LABELS}
              images={CATEGORY_IMAGES}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
