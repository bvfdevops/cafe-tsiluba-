import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/carta", priority: 0.9 },
    { path: "/experiencia-literaria", priority: 0.8 },
    { path: "/galeria", priority: 0.7 },
    { path: "/contacto", priority: 0.8 },
  ];

  const lastModified = new Date();

  return routes.map((r) => ({
    url: `${siteConfig.url}${r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
