import type { MetadataRoute } from "next";
import { abs } from "@/lib/site";

export const dynamic = "force-static";

const pages = [
  { path: "/", priority: 1 },
  { path: "/devices/", priority: 0.9 },
  { path: "/docs/", priority: 0.9 },
  { path: "/download/", priority: 0.9 },
  { path: "/protocol/", priority: 0.7 },
  { path: "/contribute/", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map((p) => ({ url: abs(p.path), lastModified, changeFrequency: "weekly", priority: p.priority }));
}
