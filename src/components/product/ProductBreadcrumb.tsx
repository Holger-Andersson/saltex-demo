// Brödsmulenavigering (Hem / Produkter / produktnamn) längst upp på produktdetaljsidan.
import Link from "next/link";

export function ProductBreadcrumb({ productName }: { productName: string }) {
  return (
    <nav
      aria-label="Brödsmulor"
      className="flex items-center gap-2 text-sm text-foreground/60"
    >
      <Link href="/" className="transition-colors hover:text-foreground">
        Hem
      </Link>
      <span aria-hidden="true">/</span>
      <Link href="/products" className="transition-colors hover:text-foreground">
        Produkter
      </Link>
      <span aria-hidden="true">/</span>
      <span className="text-foreground">{productName}</span>
    </nav>
  );
}
