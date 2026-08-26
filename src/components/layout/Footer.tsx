// Sidfot med företagsinfo, navigering, kontakt, juridiska länkar och sociala medier.
// Innehållslänkarna pekar mot enkla platshållarsidor tills kolleger fyller dem med riktigt innehåll.
import Link from "next/link";

import { Container } from "@/components/layout/Container";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <path
        d="M12.5 6.5h-1.7c-.7 0-1.3.6-1.3 1.3V9.5H12.5L12.2 12H9.5v6H7V12H5.5V9.5H7V7.6C7 5.6 8.6 4 10.6 4H12.5v2.5Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <>
        <rect
          x="3.5"
          y="3.5"
          width="13"
          height="13"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="10"
          cy="10"
          r="3.2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="14" cy="6" r="0.9" fill="currentColor" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <>
        <rect
          x="3.5"
          y="3.5"
          width="13"
          height="13"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="6.7" cy="7" r="1" fill="currentColor" />
        <path
          d="M6.7 9.5v4M9.7 13.5V10c0-.9.7-1.5 1.5-1.5s1.5.6 1.5 1.5v3.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Container>
        <div className="grid grid-cols-2 gap-10 py-12 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">
                S
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Saltex
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-accent/70">
              Lekplatsutrustning i toppkvalitet för kommuner, skolor och
              fastighetsägare.
            </p>

            <div className="mt-4 flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/20 text-accent/70 transition-colors hover:border-accent hover:text-accent"
                >
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent">Företaget</h4>
            <ul className="mt-3 space-y-2 text-sm text-accent/70">
              <li>
                <Link
                  href="/om-oss"
                  className="transition-colors hover:text-accent"
                >
                  Om oss
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="transition-colors hover:text-accent"
                >
                  Produkter
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-accent">
                  Leverans
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent">Juridik</h4>
            <ul className="mt-3 space-y-2 text-sm text-accent/70">
              <li>
                <Link href="/" className="transition-colors hover:text-accent">
                  Köpvillkor
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-accent">
                  Integritetspolicy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent">Kontakt</h4>
            <ul className="mt-3 space-y-2 text-sm text-accent/70">
              <li>info@saltex.se</li>
              <li>08-123 456 78</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-accent/15 py-6 text-xs text-accent/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Saltex. Alla rättigheter förbehållna.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/kopvillkor"
              className="transition-colors hover:text-accent"
            >
              Köpvillkor
            </Link>
            <Link
              href="/integritet"
              className="transition-colors hover:text-accent"
            >
              Integritetspolicy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
