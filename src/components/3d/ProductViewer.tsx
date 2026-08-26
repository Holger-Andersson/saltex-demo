// 3D-scenen för en produkt: manuell rotation/zoom via OrbitControls, fullskärmsläge
// och en badge som markerar att modellen är interaktiv, inte en vanlig bild.
"use client";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import { Loading3D } from "@/components/3d/Loading3D";
import { ProductModel } from "@/components/3d/ProductModel";

export function ProductViewer({ modelUrl }: { modelUrl: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Musens scrollhjul ska bara zooma modellen när Ctrl/⌘ hålls nedtryckt, annars ska
  // sidan scrolla som vanligt. Genom att fånga eventet i capture-fasen på wrappern,
  // innan det når canvasen, hinner vi stoppa det där utan att röra OrbitControls
  // enableZoom-flagga — som annars skulle stänga av pinch-to-zoom på touch också.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const gateWheelForZoomModifier = (event: WheelEvent) => {
      if (!(event.ctrlKey || event.metaKey)) {
        event.stopPropagation();
      }
    };

    el.addEventListener("wheel", gateWheelForZoomModifier, { capture: true });
    return () =>
      el.removeEventListener("wheel", gateWheelForZoomModifier, {
        capture: true,
      });
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === wrapperRef.current);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      wrapperRef.current?.requestFullscreen();
    }
  }

  return (
    <div
      ref={wrapperRef}
      className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_50%_38%,rgba(47,111,78,0.14),transparent_65%)]"
    >
      <Canvas camera={{ position: [4, 2.5, 4], fov: 40 }} shadows>
        <color attach="background" args={["#fafaf9"]} />
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} shadows="contact" adjustCamera={1.4}>
            <ProductModel url={modelUrl} />
          </Stage>
        </Suspense>
        <OrbitControls
          makeDefault
          enablePan
          enableZoom
          enableRotate
          minDistance={1}
          maxDistance={20}
        />
      </Canvas>
      <Loading3D />

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-medium tracking-wide text-white shadow-sm">
        Interaktiv 3D
      </span>

      <div className="drag-hint pointer-events-none absolute inset-0 flex items-center justify-center [animation:drag-hint-fade_2.2s_ease-in-out_forwards]">
        <span className="flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white shadow-lg [animation:drag-hint-move_1.1s_ease-in-out_2]">
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0">
            <path d="M12 6l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
            <path d="M8 11V6a1.5 1.5 0 0 1 3 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M11 10V5a1.5 1.5 0 0 1 3 0v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14 10.5V6a1.5 1.5 0 0 1 3 0v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path
              d="M17 12V9a1.5 1.5 0 0 1 3 0v5c0 3.5-2 6-5.5 6h-2C9.5 20 8 18 7 16.5l-2.3-3.4a1.3 1.3 0 0 1 2-1.6L8 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0">
            <path d="M8 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Dra för att rotera
        </span>
      </div>

      <button
        type="button"
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? "Avsluta fullskärm" : "Visa i fullskärm"}
        className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-foreground shadow-sm transition-colors hover:bg-white"
      >
        {isFullscreen ? (
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
            <path
              d="M8 3H4a1 1 0 0 0-1 1v4M12 3h4a1 1 0 0 1 1 1v4M8 17H4a1 1 0 0 1-1-1v-4M12 17h4a1 1 0 0 0 1-1v-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
            <path
              d="M3 7V4a1 1 0 0 1 1-1h3M13 3h3a1 1 0 0 1 1 1v3M17 13v3a1 1 0 0 1-1 1h-3M7 17H4a1 1 0 0 1-1-1v-3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
