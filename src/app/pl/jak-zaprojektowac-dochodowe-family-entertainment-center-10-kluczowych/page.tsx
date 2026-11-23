import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/jak-zaprojektowac-dochodowe-family-entertainment-center-10-kluczowych";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("jak-zaprojektowac-dochodowe-family-entertainment-center-10-kluczowych");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("jak-zaprojektowac-dochodowe-family-entertainment-center-10-kluczowych")} />
      <ArticleLayout slug="jak-zaprojektowac-dochodowe-family-entertainment-center-10-kluczowych" content={content} />
    </>
  );
}
