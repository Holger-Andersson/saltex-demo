import type { ReactNode } from "react";

// Visar produktens tekniska specifikationer (mått, åldersintervall, kapacitet) i tabellform.
import type { Product } from "@/types/product";

type SpecKey = keyof Product["specifications"];

const LABELS: Record<SpecKey, string> = {
  height: "Höjd",
  width: "Bredd",
  length: "Längd",
  safetyZone: "Säkerhetszon",
  ageRange: "Åldersintervall",
  capacity: "Max antal användare",
};

const ICONS: Record<SpecKey, ReactNode> = {
  height: (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M10 3v14M10 3l-2.2 2.2M10 3l2.2 2.2M10 17l-2.2-2.2M10 17l2.2-2.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  width: (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M3 10h14M3 10l2.2-2.2M3 10l2.2 2.2M17 10l-2.2-2.2M17 10l-2.2 2.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  length: (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M3.5 16.5 16.5 3.5M3.5 16.5h4M3.5 16.5v-4M16.5 3.5h-4M16.5 3.5v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  safetyZone: (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <rect
        x="2.5"
        y="2.5"
        width="15"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2.6 2.6"
      />
      <rect x="7.5" y="7.5" width="5" height="5" rx="1" fill="currentColor" />
    </svg>
  ),
  ageRange: (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <circle cx="10" cy="6.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4.5 17c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  capacity: (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <circle cx="7" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="13.5" cy="7" r="1.7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M2.5 17c0-2.8 2-4.7 4.5-4.7s4.5 1.9 4.5 4.7M13 12.7c1.8.3 3 1.8 3 4.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export function ProductSpecifications({
  specifications,
}: {
  specifications: Product["specifications"];
}) {
  const entries = (Object.keys(LABELS) as SpecKey[])
    .filter((key) => specifications[key] !== undefined)
    .map((key) => ({
      key,
      label: LABELS[key],
      value: specifications[key],
      icon: ICONS[key],
    }));

  if (entries.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold tracking-tight">
        Specifikationer
      </h2>
      <dl className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3">
        {entries.map(({ key, label, value, icon }) => (
          <div key={key} className="border-t border-border pt-2.5">
            <dt className="flex items-center gap-1.5 text-[0.65rem] uppercase tracking-wide text-foreground/50">
              <span className="shrink-0 text-accent [&_svg]:h-3.5 [&_svg]:w-3.5">
                {icon}
              </span>
              <span className="truncate">{label}</span>
            </dt>
            <dd className="mt-1 text-sm font-medium">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
