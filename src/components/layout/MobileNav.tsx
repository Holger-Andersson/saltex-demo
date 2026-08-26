// Hamburgermeny för mobil: visar Hem, Produkter och kategorierna i en nedfällbar panel.
"use client";

import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/layout/Container";
import { CATEGORY_LABELS, CATEGORY_ORDER } from "@/lib/products";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-label={open ? "Stäng meny" : "Öppna meny"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-background hover:text-foreground"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
          {open ? (
            <path
              d="M5 5l10 10M15 5 5 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M3.5 6h13M3.5 10h13M3.5 14h13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 z-40 border-b border-border bg-background shadow-lg">
          <Container>
            <nav className="flex flex-col gap-1 py-4">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-white hover:text-foreground"
              >
                Hem
              </Link>
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-white hover:text-foreground"
              >
                Alla produkter
              </Link>

              <p className="mt-2 px-3 text-xs font-semibold uppercase tracking-wide text-foreground/40">
                Kategorier
              </p>
              {CATEGORY_ORDER.map((category) => (
                <Link
                  key={category}
                  href={`/products?category=${category}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-white hover:text-foreground"
                >
                  {CATEGORY_LABELS[category]}
                </Link>
              ))}

              <Link
                href="/varukorg"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
              >
                Kundvagn
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </div>
  );
}
