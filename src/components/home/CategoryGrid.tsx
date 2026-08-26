// Kategorirutnät för startsidan: visar max 4 kategorier och fäller ut resten via "Visa fler".
"use client";

import Link from "next/link";
import { useState } from "react";

import type { ProductCategory } from "@/types/product";

const VISIBLE_COUNT = 4;

export function CategoryGrid({
  categories,
  labels,
  images,
}: {
  categories: ProductCategory[];
  labels: Record<ProductCategory, string>;
  images: Partial<Record<ProductCategory, string>>;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = categories.length > VISIBLE_COUNT;
  const visibleCategories = expanded
    ? categories
    : categories.slice(0, VISIBLE_COUNT);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {visibleCategories.map((category) => {
          const image = images[category];

          return (
            <Link
              key={category}
              href={`/products?category=${category}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-background"
            >
              {image ? (
                // eslint-disable-next-line @next/next/no-img-element -- static placeholder images, no optimization needed
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs font-medium text-foreground/40">
                  Kommer snart
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <p className="text-sm font-semibold text-white">
                  {labels[category]}
                </p>
                <span className="mt-1 inline-block text-xs font-medium text-white/80 transition-colors group-hover:text-white">
                  Se produkter →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {hasMore && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="inline-flex items-center rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:border-accent/40 hover:text-foreground"
          >
            {expanded
              ? "Visa färre"
              : `Visa fler (${categories.length - VISIBLE_COUNT})`}
          </button>
        </div>
      )}
    </div>
  );
}
