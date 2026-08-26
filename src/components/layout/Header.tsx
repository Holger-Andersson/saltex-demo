// Sidhuvud med logotyp, huvudnavigering, kategorimeny samt sök- och kundvagnsikoner.
// Sök och kundvagn är UI-skelett (TODO nedan) – kolleger kopplar på riktig funktionalitet.
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { SearchBox } from "@/components/layout/SearchBox";
import { CATEGORY_LABELS, CATEGORY_ORDER } from "@/lib/products";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center gap-6">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">
              S
            </span>
            <span className="text-lg font-semibold tracking-tight">Saltex</span>
          </Link>

          <nav className="hidden items-center gap-6 sm:flex">
            <div className="group relative">
              <Link
                href="/products"
                className="flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground group-focus-within:text-foreground"
              >
                Produkter
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                >
                  <path
                    d="m5.5 8 4.5 4.5L14.5 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <div className="invisible absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="rounded-xl border border-border bg-white p-2 shadow-lg">
                  <Link
                    href="/products"
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background"
                  >
                    Alla produkter
                  </Link>
                  <div className="my-1 border-t border-border" />
                  {CATEGORY_ORDER.map((category) => (
                    <Link
                      key={category}
                      href={`/products?category=${category}`}
                      className="block rounded-lg px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-background hover:text-foreground"
                    >
                      {CATEGORY_LABELS[category]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="ml-auto flex items-center gap-1">
            <SearchBox />

            {/* TODO(kollegor): koppla på kundvagnslogik (state, antal varor, /varukorg-innehåll). */}
            <Link
              href="/varukorg"
              aria-label="Kundvagn"
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-background hover:text-foreground"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
                <path
                  d="M3 3h1.5L6 12.5h9L17 6H5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="7.5" cy="16" r="1.2" fill="currentColor" />
                <circle cx="13.5" cy="16" r="1.2" fill="currentColor" />
              </svg>
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[0.6rem] font-semibold text-white">
                0
              </span>
            </Link>

            <Link
              href="/products"
              className="ml-2 hidden items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90 sm:inline-flex"
            >
              Utforska
            </Link>

            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
