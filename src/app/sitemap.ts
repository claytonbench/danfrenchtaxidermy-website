import type { MetadataRoute } from "next";
import { speciesOrder } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.siteUrl;
  const now = new Date();
  const paths = [
    "",
    "/about",
    "/services",
    "/gallery",
    "/outfitters",
    "/contact",
    "/terms",
    ...speciesOrder.map((s) => `/services/${s}`),
  ];
  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === "" ? "monthly" : "yearly",
    priority: p === "" ? 1 : 0.7,
  }));
}
