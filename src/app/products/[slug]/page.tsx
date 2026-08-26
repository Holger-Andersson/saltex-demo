// Produktdetaljsida: slår upp produkten via slug och sätter ihop media, info, specifikationer
// och relaterat innehåll. All layout/markup ligger i @/components/product.
import { notFound } from "next/navigation";

import { ProductViewer } from "@/components/3d/ProductViewer";
import { Container } from "@/components/layout/Container";
import { ProductBreadcrumb } from "@/components/product/ProductBreadcrumb";
import { ProductDownloads } from "@/components/product/ProductDownloads";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductSafety } from "@/components/product/ProductSafety";
import { ProductSpecifications } from "@/components/product/ProductSpecifications";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { getProductBySlug, getProductsByCategory } from "@/lib/products";

const RELATED_PRODUCTS_LIMIT = 3;

export default async function ProductPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((candidate) => candidate.slug !== product.slug)
    .slice(0, RELATED_PRODUCTS_LIMIT);

  return (
    <Container>
      <div className="py-8">
        <ProductBreadcrumb productName={product.name} />

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {product.model3d ? (
              <div className="h-[420px] overflow-hidden rounded-xl border border-border bg-background sm:h-[520px] lg:h-[600px]">
                <ProductViewer modelUrl={product.model3d.url} />
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element -- static placeholder SVG, no optimization needed
              <img
                src={product.images[0]}
                alt={product.name}
                className="aspect-[4/3] w-full rounded-xl border border-border bg-background object-cover"
              />
            )}
          </div>

          <div className="lg:col-span-2">
            <ProductInfo product={product} />
          </div>
        </div>

        <div className="mt-16">
          <ProductSpecifications specifications={product.specifications} />
        </div>

        <div className="mt-8">
          <ProductSafety safetyZone={product.specifications.safetyZone} />
        </div>

        {product.downloads && product.downloads.length > 0 && (
          <div className="mt-12 border-t border-border pt-8">
            <ProductDownloads downloads={product.downloads} />
          </div>
        )}

        <RelatedProducts products={relatedProducts} />
      </div>
    </Container>
  );
}
