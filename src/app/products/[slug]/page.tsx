// Produktdetaljsida: slår upp produkten via slug och sätter ihop media, info, specifikationer
// och relaterat innehåll. All layout/markup ligger i @/components/product.
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { ProductBreadcrumb } from "@/components/product/ProductBreadcrumb";
import { ProductDescription } from "@/components/product/ProductDescription";
import { ProductDownloads } from "@/components/product/ProductDownloads";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductMedia } from "@/components/product/ProductMedia";
import { ProductPlayValues } from "@/components/product/ProductPlayValues";
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

  const hasPlayValues = Boolean(
    product.playValues && product.playValues.length > 0,
  );

  return (
    <Container>
      <div className="py-8">
        <ProductBreadcrumb productName={product.name} />

        <div
          className={`mt-6 grid grid-cols-1 gap-10 ${
            hasPlayValues ? "lg:grid-cols-7" : "lg:grid-cols-5"
          }`}
        >
          {product.playValues && product.playValues.length > 0 && (
            <div className="order-2 lg:order-none lg:col-span-1 lg:-ml-6 lg:mt-8 lg:mr-6">
              <ProductPlayValues values={product.playValues} />
            </div>
          )}

          <div
            className={`order-1 lg:order-none ${
              hasPlayValues ? "lg:col-span-4" : "lg:col-span-3"
            }`}
          >
            <ProductMedia
              model3d={product.model3d}
              images={product.images}
              productName={product.name}
            />
          </div>

          <div className="order-3 lg:order-none lg:col-span-2">
            <ProductInfo product={product} />
          </div>
        </div>

        <div className="mt-16">
          <ProductDescription details={product.details} />
        </div>

        <div className="mt-12">
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
