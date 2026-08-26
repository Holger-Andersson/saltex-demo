// Butikssida: läser ?category= ur URL:en, filtrerar produkterna och sätter ihop butikens sektioner.
// All layout/markup för filter, verktygsrad och produktlista ligger i @/components/shop.
import { Container } from "@/components/layout/Container";
import { ShopCategoryPills } from "@/components/shop/ShopCategoryPills";
import { ShopFilters } from "@/components/shop/ShopFilters";
import { ShopProductList } from "@/components/shop/ShopProductList";
import { ShopToolbar } from "@/components/shop/ShopToolbar";
import {
  CATEGORY_LABELS,
  getAllProducts,
  isProductCategory,
} from "@/lib/products";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { category: categoryParam } = await searchParams;
  const activeCategory = isProductCategory(categoryParam)
    ? categoryParam
    : undefined;

  const allProducts = getAllProducts();
  const products = activeCategory
    ? allProducts.filter((product) => product.category === activeCategory)
    : allProducts;

  const toolbarLabel = activeCategory
    ? CATEGORY_LABELS[activeCategory]
    : `${products.length} produkter`;

  return (
    <Container>
      <div className="py-10 sm:py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Produkter</h1>
        <p className="mt-2 text-foreground/70">
          Utforska vårt sortiment av lekplatsutrustning.
        </p>

        <div className="mt-6">
          <ShopCategoryPills activeCategory={activeCategory} />
        </div>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row">
          <ShopFilters />

          <div className="min-w-0 flex-1">
            <ShopToolbar label={toolbarLabel} />
            <div className="mt-8">
              <ShopProductList products={products} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
