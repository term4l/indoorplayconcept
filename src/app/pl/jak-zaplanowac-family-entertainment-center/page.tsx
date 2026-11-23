import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/jak-zaplanowac-family-entertainment-center";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("jak-zaplanowac-family-entertainment-center");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("jak-zaplanowac-family-entertainment-center")} />
      <ArticleLayout slug="jak-zaplanowac-family-entertainment-center" content={content} />
    </>
  );
}
