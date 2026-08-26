// Kortets mediayta: visar produktbilden som standard, och tonar in en roterande
// 3D-modell vid hover om produkten har en model3d. Monteras bara medan man hovrar,
// så inte alla kort i ett rutnät håller en egen WebGL-kontext samtidigt.
"use client";

import { Stage } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import type { ReactNode } from "react";
import { Suspense, useRef, useState } from "react";
import type { Group } from "three";

import { ProductModel } from "@/components/3d/ProductModel";
import type { Product } from "@/types/product";

function AutoRotate({ children }: { children: ReactNode }) {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.6;
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

export function ProductCardMedia({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);
  const showModel = isHovered && Boolean(product.model3d);

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden bg-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showModel && product.model3d && (
        <div className="absolute inset-0">
          <Canvas camera={{ position: [4, 2.5, 4], fov: 40 }}>
            <Suspense fallback={null}>
              <Stage environment="city" intensity={0.6} adjustCamera={1.4}>
                <AutoRotate>
                  <ProductModel url={product.model3d.url} />
                </AutoRotate>
              </Stage>
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element -- static placeholder image, no optimization needed */}
      <img
        src={product.images[0]}
        alt={product.name}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          showModel ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
