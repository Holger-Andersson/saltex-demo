// Bred kampanjbanner på startsidan som lyfter fram en utvald serie/produkt.
import Link from "next/link";

import { Container } from "@/components/layout/Container";

export function CampaignBanner() {
  return (
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
            href="/products"
            className="mt-2 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/90"
          >
            Se mer
          </Link>
        </div>
      </Container>
    </div>
  );
}
