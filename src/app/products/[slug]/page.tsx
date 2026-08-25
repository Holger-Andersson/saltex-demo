import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { ProductDescription } from "@/components/product/ProductDescription";
import { ProductDownloads } from "@/components/product/ProductDownloads";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductMedia } from "@/components/product/ProductMedia";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductSpecifications } from "@/components/product/ProductSpecifications";
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
    .filter((candidate) => candidate.id !== product.id)
    .slice(0, RELATED_PRODUCTS_LIMIT);

  return (
    <Container>
      <div className="py-8">
        <nav aria-label="Brödsmulor" className="flex items-center gap-2 text-sm text-foreground/60">
          <Link href="/" className="transition-colors hover:text-foreground">
            Hem
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/products"
            className="transition-colors hover:text-foreground"
          >
            Produkter
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ProductMedia
              model3d={product.model3d}
              images={product.images}
              productName={product.name}
            />
          </div>

          <div className="lg:col-span-2">
            <ProductInfo product={product} />
          </div>
        </div>

        <div className="mt-16">
          <ProductDescription details={product.details} />
        </div>

        <div className="mt-12">
          <ProductSpecifications specifications={product.specifications} />
        </div>

        {product.downloads && product.downloads.length > 0 && (
          <div className="mt-12 border-t border-border pt-8">
            <ProductDownloads downloads={product.downloads} />
          </div>
        )}

        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t border-border pt-12">
            <h2 className="text-xl font-semibold tracking-tight">
              Liknande produkter
            </h2>
            <div className="mt-6">
              <ProductGrid products={relatedProducts} />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
