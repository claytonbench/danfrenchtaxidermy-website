import galleryData from "./gallery.json";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
};

export type GalleryCategory =
  | "antelope"
  | "deer"
  | "elk"
  | "bear"
  | "north-american"
  | "small-game"
  | "african"
  | "exotic-asian"
  | "shop";

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "antelope", label: "Antelope" },
  { id: "deer", label: "Deer" },
  { id: "elk", label: "Elk" },
  { id: "bear", label: "Bear" },
  { id: "north-american", label: "North American" },
  { id: "small-game", label: "Small Game" },
  { id: "african", label: "African" },
  { id: "exotic-asian", label: "Exotic & Asian" },
  { id: "shop", label: "Shop" },
];

export const galleryItems: GalleryItem[] = (galleryData as any).items;
