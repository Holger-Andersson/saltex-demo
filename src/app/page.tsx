import { Container } from "@/components/layout/Container";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getAllProducts } from "@/lib/products";

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <>
      <div className="relative overflow-hidden border-b border-border bg-white">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <Container>
          <div className="relative py-16 text-center sm:py-20">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Sortiment
            </span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Produkter
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-foreground/60">
              Utforska vårt sortiment av lekplatsutrustning — byggt för lek,
              säkerhet och hållbarhet.
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-12 sm:py-16">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <p className="text-sm text-foreground/50">
              {products.length} produkter
            </p>
          </div>
          <div className="mt-8">
            <ProductGrid products={products} />
          </div>
        </div>
      </Container>
    </>
  );
}
