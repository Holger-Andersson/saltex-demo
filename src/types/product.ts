export type ProductCategory =
  | "playgrounds"
  | "swings"
  | "slides"
  | "climbing"
  | "accessories";

export interface ProductDownload {
  label: string;
  href: string;
  format: string;
  sizeLabel?: string;
}

export interface Product {
  id: string;
  slug: string;

  name: string;
  description: string;
  details?: string[];

  category: ProductCategory;

  price: number;

  images: string[];

  model3d?: {
    url: string;
    poster?: string;
  };

  downloads?: ProductDownload[];

  specifications: {
    height?: string;
    width?: string;
    length?: string;
    ageRange?: string;
    capacity?: number;
    safetyZone?: string;
  };

  featured?: boolean;
}
