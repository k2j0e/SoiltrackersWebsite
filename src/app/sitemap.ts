import type { MetadataRoute } from "next";

// TODO: set NEXT_PUBLIC_SITE_URL in .env / hosting env to your production domain.
const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.soiltracker.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/bc`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/platform`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/marketplace`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/haulers`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
