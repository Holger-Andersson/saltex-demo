// Växlar huvudytan mellan produktens 3D-modell och dess bilder via en miniatyrrad
// (3D-modellen är en av miniatyrerna och visas som förvalt/första alternativ).
// På touchenheter kan man svepa vänster/höger mellan bilderna (avstängt när 3D-modellen visas,
// så det inte krockar med OrbitControls drag-till-rotera).
"use client";

import { useRef, useState } from "react";
import type { TouchEvent } from "react";

import { ProductViewer } from "@/components/3d/ProductViewer";
import type { Product } from "@/types/product";

type MediaItem =
  | { type: "model"; url: string; thumbnail?: string }
  | { type: "image"; src: string };

const SWIPE_THRESHOLD_PX = 40;

export function ProductMedia({
  model3d,
  images,
  productName,
}: {
  model3d?: Product["model3d"];
  images: string[];
  productName: string;
}) {
  const items: MediaItem[] = [
    ...(model3d
      ? [{ type: "model" as const, url: model3d.url, thumbnail: model3d.poster }]
      : []),
    ...images.map((src) => ({ type: "image" as const, src })),
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];
  const touchStartX = useRef<number | null>(null);

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    if (active.type !== "image") {
      return;
    }
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (active.type !== "image" || touchStartX.current === null) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (deltaX <= -SWIPE_THRESHOLD_PX && activeIndex < items.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (deltaX >= SWIPE_THRESHOLD_PX && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  }

  return (
    <div>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="h-[420px] overflow-hidden rounded-xl border border-border bg-background sm:h-[520px] lg:h-[600px]"
      >
        {active.type === "model" ? (
          <ProductViewer modelUrl={active.url} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element -- static placeholder image, no optimization needed
          <img
            src={active.src}
            alt={productName}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {items.length > 1 && (
        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex gap-2">
            {items.map((item, index) => {
              const imageNumber =
                items.slice(0, index + 1).filter((i) => i.type === "image").length;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={
                    item.type === "model" ? "Visa 3D-modell" : `Visa bild ${imageNumber}`
                  }
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border bg-background transition-colors sm:h-20 sm:w-20 ${
                    index === activeIndex
                      ? "border-accent"
                      : "border-border hover:border-foreground/30"
                  }`}
                >
                  {item.type === "model" ? (
                    item.thumbnail ? (
                      // eslint-disable-next-line @next/next/no-img-element -- static placeholder image, no optimization needed
                      <img
                        src={item.thumbnail}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center text-foreground/40">
                        <svg viewBox="0 0 20 20" fill="none" className="h-6 w-6">
                          <path
                            d="M10 2.5 17 6.5v7L10 17.5 3 13.5v-7L10 2.5Z"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 6.5 10 10.5M10 10.5 17 6.5M10 10.5v7"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    )
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element -- static placeholder image, no optimization needed
                    <img
                      src={item.src}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  )}

                  {item.type === "model" && (
                    <span className="absolute bottom-1 right-1 rounded-full bg-accent px-1.5 py-0.5 text-[0.6rem] font-medium leading-none text-white">
                      3D
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {active.type === "image" && (
            <div className="flex gap-1.5 sm:hidden">
              {items.map((item, index) =>
                item.type === "image" ? (
                  <span
                    key={index}
                    className={`h-1.5 rounded-full transition-all ${
                      index === activeIndex ? "w-5 bg-accent" : "w-1.5 bg-border"
                    }`}
                  />
                ) : null,
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
