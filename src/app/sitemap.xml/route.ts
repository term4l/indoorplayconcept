import { pagePath, totalPages } from "@/data/magazine";
import { pages, type PageSeo } from "@/data/pages";
import { absoluteUrl } from "@/lib/site";

/*
 * Mapa strony /sitemap.xml. Zamiast konwencji `app/sitemap.ts` własny handler, bo chcemy dołączyć
 * arkusz XSL (public/sitemap.xsl): przeglądarka pokazuje wtedy czytelną tabelę adresów, tak jak
 * mapa Yoast w oryginale (sitemap_index.xml), a nie goły XML. Dla wyszukiwarek to zwykły sitemap.
 */

export const dynamic = "force-static";

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function urlEntry(path: string, lastModified?: string, alternates: PageSeo["hreflang"] = {}) {
  const lines = [`    <loc>${escapeXml(absoluteUrl(path))}</loc>`];
  for (const [code, altPath] of Object.entries(alternates)) {
    if (altPath) lines.push(`    <xhtml:link rel="alternate" hreflang="${code}" href="${escapeXml(absoluteUrl(altPath))}" />`);
  }
  if (lastModified) lines.push(`    <lastmod>${escapeXml(lastModified)}</lastmod>`);
  return `  <url>\n${lines.join("\n")}\n  </url>`;
}

export function GET() {
  const all: PageSeo[] = Object.values(pages);
  const entries = all.map((page) => urlEntry(page.path, page.dateModified, page.hreflang));

  // Kolejne strony Play Magazine (bez hreflang – tak jak w Yoast).
  for (let n = 2; n <= totalPages(); n++) {
    entries.push(urlEntry(pagePath(n), pages["play-magazine"].dateModified));
  }

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
    ...entries,
    `</urlset>`,
    ``,
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
