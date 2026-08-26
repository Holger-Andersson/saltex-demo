// Sidhuvud med sajtens namn/logotyp och huvudnavigering till produktsidan.
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { SearchBox } from "@/components/layout/SearchBox";
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/products" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">
              S
            </span>
            <span className="text-lg font-semibold tracking-tight">Saltex</span>
          </Link>
          <div className="invisible absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
            <div className="rounded-xl border border-border bg-white p-2 shadow-lg">
              <Link
                href="/products"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background"
              >
                Alla produkter
              </Link>
            </div>
          </div>

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
          </div>
        </div>
      </Container>
    </header>
  );
}
