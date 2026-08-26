// Visar generell säkerhetsinformation samt produktens säkerhetszon (om angiven).
// TODO(kollegor): ersätt platshållartexten med produktspecifik säkerhetsdokumentation.
export function ProductSafety({ safetyZone }: { safetyZone?: string }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6">
      <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 text-accent">
          <path
            d="M10 2.5 17 5.5v4c0 4.5-3 7.2-7 8-4-.8-7-3.5-7-8v-4L10 2.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="m7 10 2 2 4-4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Säkerhetsinformation
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground/70">
        Produkten är utformad för att uppfylla kraven i EN 1176 för offentliga
        lekplatser. Installation ska ske enligt medföljande
        monteringsanvisning och med rekommenderat fallskyddsunderlag inom
        säkerhetszonen.
      </p>
      {safetyZone && (
        <p className="mt-3 text-sm font-medium text-foreground">
          Rekommenderad säkerhetszon: {safetyZone}
        </p>
      )}
    </div>
  );
}
