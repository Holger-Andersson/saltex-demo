// "Skräddarsydd projektering"-sektionen längst ner på startsidan, med en mailto-CTA till kontakt.
import { Container } from "@/components/layout/Container";

export function ProjectSection() {
  return (
    <Container>
      <div className="grid grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Från skiss till verklighet
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Skräddarsydd projektering
          </h2>
          <p className="mt-4 text-base text-foreground/60">
            Vi hjälper kommuner, bostadsbolag, förskolor och skolor att ta
            fram trygga lekmiljöer anpassade efter platsens förutsättningar
            och budget – från behovsanalys och platsanpassade 3D-ritningar
            till offert, leverans och installation enligt gällande
            säkerhetsstandard (EN 1176).
          </p>
          <a
            href="mailto:info@saltex.se?subject=F%C3%B6rfr%C3%A5gan%20om%20projektering"
            className="mt-6 inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
          >
            Kontakta oss
          </a>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative image, no optimization needed */}
          <img
            src="/images/products/background.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
}
