import Link from "next/link";

import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">
                S
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Saltex
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-foreground/60">
              Lekplatsutrustning i toppkvalitet för kommuner, skolor och
              fastighetsägare.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Navigera
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-foreground/60">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-foreground"
                >
                  Hem
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="transition-colors hover:text-foreground"
                >
                  Produkter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Kontakt</h4>
            <ul className="mt-3 space-y-2 text-sm text-foreground/60">
              <li>info@saltex.se</li>
              <li>08-123 456 78</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border py-6 text-center text-xs text-foreground/50">
          © {new Date().getFullYear()} Saltex. Alla rättigheter förbehållna.
        </div>
      </Container>
    </footer>
  );
}
