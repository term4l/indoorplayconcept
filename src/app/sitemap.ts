import type { MetadataRoute } from "next";
import { pagePath, totalPages } from "@/data/magazine";
import { pages, type PageSeo } from "@/data/pages";
import { absoluteUrl } from "@/lib/site";

const languageAlternates = (page: PageSeo) =>
  Object.fromEntries(Object.entries(page.hreflang).map(([code, path]) => [code, absoluteUrl(path)]));

export default function sitemap(): MetadataRoute.Sitemap {
  const all: PageSeo[] = Object.values(pages);
  const entries: MetadataRoute.Sitemap = all.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: page.dateModified,
    alternates: { languages: languageAlternates(page) },
  }));

  // Kolejne strony Play Magazine (bez hreflang – tak jak w Yoast).
  for (let n = 2; n <= totalPages(); n++) {
    entries.push({ url: absoluteUrl(pagePath(n)), lastModified: pages["play-magazine"].dateModified });
  }
  return entries;
}
