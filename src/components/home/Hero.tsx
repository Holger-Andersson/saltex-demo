// Hero-sektionen längst upp på startsidan: bakgrundsbild, rubrik, ingress och en CTA till butiken.
import Link from "next/link";

import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-border bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative hero background, no optimization needed */}
      <img
        src="/images/products/background.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/40" />
      <Container>
        <div className="relative py-20 text-center [text-shadow:0_1px_16px_rgba(255,255,255,0.9)] sm:py-28">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Saltex lekplatsutrustning
          </span>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Skapa en lekplats där barn vill leka
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-foreground/80">
            Certifierad lekplatsutrustning för kommuner, skolor och
            fastighetsägare – från idé och projektering till leverans och
            installation.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
          >
            Se våra produkter
          </Link>
        </div>
      </Container>
    </div>
  );
}
