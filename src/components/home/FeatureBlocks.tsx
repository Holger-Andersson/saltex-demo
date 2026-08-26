// Två funktionsblock på startsidan som lyfter fram hållbarhet (Re-Plast) och tillgänglighet.
import Link from "next/link";

import { Container } from "@/components/layout/Container";

export function FeatureBlocks() {
  return (
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
              href="/products"
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
              href="/products"
              className="mt-2 inline-block text-sm font-medium text-white underline underline-offset-4 transition-colors hover:text-white/80"
            >
              Se mer
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
