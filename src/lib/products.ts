// Hjälpfunktioner för att hämta och filtrera produkter samt formatera pris och kategorinamn.
import { products } from "@/data/products";
import type { PlayValue, Product, ProductCategory } from "@/types/product";

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  playgrounds: "Lekplatser",
  swings: "Gungor",
  slides: "Rutschkanor",
  climbing: "Klättermoduler",
  accessories: "Tillbehör",
};

export const PLAY_VALUES: Record<PlayValue, { label: string; icon: string }> =
  {
    balancing: { label: "Balans", icon: "/images/lek-ikoner/balancing.svg" },
    climbing: { label: "Klättring", icon: "/images/lek-ikoner/climbing.svg" },
    crawling: { label: "Krypning", icon: "/images/lek-ikoner/crawling.svg" },
    cooperation: {
      label: "Samarbete",
      icon: "/images/lek-ikoner/cooperation.svg",
    },
    hanging: { label: "Hänglek", icon: "/images/lek-ikoner/hanging.svg" },
    hiding: { label: "Gömlek", icon: "/images/lek-ikoner/hiding.svg" },
    inclusive: {
      label: "Inkluderande",
      icon: "/images/lek-ikoner/inclusive.svg",
    },
    interaction: {
      label: "Interaktion",
      icon: "/images/lek-ikoner/interaction.svg",
    },
    rocking: { label: "Gungrörelse", icon: "/images/lek-ikoner/rocking.svg" },
    "role-play": {
      label: "Rollspel",
      icon: "/images/lek-ikoner/role-play.svg",
    },
    running: { label: "Löpning", icon: "/images/lek-ikoner/running.svg" },
    shaping: { label: "Formning", icon: "/images/lek-ikoner/shaping.svg" },
    sliding: { label: "Glidning", icon: "/images/lek-ikoner/sliding.svg" },
    swinging: { label: "Svängning", icon: "/images/lek-ikoner/swinging.svg" },
    "tactile-play": {
      label: "Taktil lek",
      icon: "/images/lek-ikoner/tactile-play.svg",
    },
    "visual-stimulation": {
      label: "Visuell stimulans",
      icon: "/images/lek-ikoner/visual-stimulation.svg",
    },
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
