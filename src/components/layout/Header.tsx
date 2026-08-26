// Sidhuvud med sajtens namn/logotyp och huvudnavigering till produktsidan.
import Link from "next/link";

import { Container } from "@/components/layout/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/products" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">
              S
            </span>
            <span className="text-lg font-semibold tracking-tight">
              Saltex
            </span>
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
          >
            Utforska
          </Link>
        </div>
      </Container>
    </header>
  );
}
