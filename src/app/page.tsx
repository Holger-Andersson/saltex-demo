// Startsidan för Sellpoint-demot.
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CATEGORY_LABELS, getAllProducts } from "@/lib/products";
import type { ProductCategory } from "@/types/product";

const CATEGORY_ORDER: ProductCategory[] = [
  "playgrounds",
  "swings",
  "slides",
  "climbing",
  "sandboxes",
  "playhouses",
  "accessories",
];

const CATEGORY_IMAGES: Record<ProductCategory, string> = {
  playgrounds: "/images/products/A-10-430x344.webp",
  swings: "/images/products/C-5-430x344.webp",
  slides: "/images/products/kids-spiral-slide-500x500.webp",
  climbing: "/images/products/BLFJ040_2-430x344.webp",
  sandboxes: "/images/products/sandbord-multivaning.webp",
  playhouses: "/images/products/skogskoja-w.webp",
  accessories: "/images/products/bench-park.svg.jpg",
};

function isProductCategory(value: unknown): value is ProductCategory {
  return (
    typeof value === "string" && (CATEGORY_ORDER as string[]).includes(value)
  );
}

export default async function ProductsPage({ searchParams }: PageProps<"/">) {
  const { category: categoryParam } = await searchParams;
  const activeCategory = isProductCategory(categoryParam)
    ? categoryParam
    : undefined;

  const allProducts = getAllProducts();
  const products = activeCategory
    ? allProducts.filter((product) => product.category === activeCategory)
    : allProducts;

  return (
    <>
      <div className="relative overflow-hidden border-b border-border bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative hero background, no optimization needed */}
        <img
          src="/images/products/background.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40" />
        <Container>
          <div className="relative py-16 text-center [text-shadow:0_1px_16px_rgba(255,255,255,0.9)] sm:py-20">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Sortiment
            </span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Produkter
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-foreground/80">
              Utforska vårt sortiment av lekplatsutrustning — byggt för lek,
              säkerhet och hållbarhet.
            </p>
          </div>
        </Container>
      </div>

      <div className="border-b border-border bg-white">
        <Container>
          <div className="py-12 sm:py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Handla efter kategori
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {CATEGORY_ORDER.map((category) => (
                <Link
                  key={category}
                  href={`/?category=${category}#produkter`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-border"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- static placeholder images, no optimization needed */}
                  <img
                    src={CATEGORY_IMAGES[category]}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                    <p className="text-sm font-semibold text-white">
                      {CATEGORY_LABELS[category]}
                    </p>
                    <span className="mt-1 inline-block text-xs font-medium text-white/80 transition-colors group-hover:text-white">
                      Se produkter →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className="relative overflow-hidden border-b border-border">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative banner image, no optimization needed */}
        <img
          src="/images/products/D-8-430x344.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
        <Container>
          <div className="relative flex flex-col items-start gap-3 py-16 sm:py-24">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
              Utforska vår nya serie
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Skogsserien
            </h2>
            <Link
              href="/"
              className="mt-2 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/90"
            >
              Se mer
            </Link>
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 sm:py-16">
          <div className="group relative overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element -- decorative feature image, no optimization needed */}
            <img
              src="/images/products/enkelklätter.webp"
              alt=""
              className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
                Tåliga &amp; väderbeständiga – 100 % återvunnet
              </span>
              <h3 className="mt-1 text-xl font-semibold text-white">
                Re-Plast
              </h3>
              <Link
                href="#produkter"
                className="mt-2 inline-block text-sm font-medium text-white underline underline-offset-4 transition-colors hover:text-white/80"
              >
                Se mer
              </Link>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element -- decorative feature image, no optimization needed */}
            <img
              src="/images/products/C-5-430x344.webp"
              alt=""
              className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
                Tillgängligt för alla barn
              </span>
              <h3 className="mt-1 text-xl font-semibold text-white">
                Lek utan hinder
              </h3>
              <Link
                href="/"
                className="mt-2 inline-block text-sm font-medium text-white underline underline-offset-4 transition-colors hover:text-white/80"
              >
                Se mer
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-y border-border bg-white">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Från skiss till verklighet
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Skräddarsydd projektering
              </h2>
              <p className="mt-4 text-base text-foreground/60">
                Vi hjälper kommuner, bostadsbolag, förskolor och skolor att ta
                fram trygga lekmiljöer anpassade efter platsens förutsättningar
                och budget – från behovsanalys och platsanpassade 3D-ritningar
                till offert, leverans och installation enligt gällande
                säkerhetsstandard (EN 1176).
              </p>
              <Link
                href="mailto:info@saltex.se?subject=F%C3%B6rfr%C3%A5gan%20om%20projektering"
                className="mt-6 inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
              >
                Kontakta oss
              </Link>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element -- decorative image, no optimization needed */}
              <img
                src="/images/products/background.webp"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div id="produkter" className="scroll-mt-24 py-12 sm:py-16">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <p className="text-sm text-foreground/50">
              {activeCategory
                ? CATEGORY_LABELS[activeCategory]
                : `${products.length} produkter`}
            </p>
            {activeCategory && (
              <Link
                href="/"
                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
              >
                Visa alla
              </Link>
            )}
          </div>
          <div className="mt-8">
            <ProductGrid products={products} />
          </div>
        </div>
      </Container>
    </>
  );
}
