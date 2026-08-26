// Hjälpfunktioner för att hämta och filtrera produkter samt formatera pris och kategorinamn.
import { products } from "@/data/products";
import type { Product, ProductCategory } from "@/types/product";

export const CATEGORY_ORDER: ProductCategory[] = [
  "playgrounds",
  "swings",
  "slides",
  "climbing",
  "sandboxes",
  "playhouses",
  "accessories",
];

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  playgrounds: "Lekplatser",
  swings: "Gungor",
  slides: "Rutschkanor",
  climbing: "Klättermoduler",
  sandboxes: "Sandlådor",
  playhouses: "Lekstugor",
  accessories: "Tillbehör",
};

export function formatPrice(price: number): string {
  return `${price.toLocaleString("sv-SE")} kr`;
}

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category);
}

// Typvakt som avgör om ett query-param-värde (t.ex. från ?category=xyz) är en giltig kategori.
export function isProductCategory(value: unknown): value is ProductCategory {
  return (
    typeof value === "string" && (CATEGORY_ORDER as string[]).includes(value)
  );
}
