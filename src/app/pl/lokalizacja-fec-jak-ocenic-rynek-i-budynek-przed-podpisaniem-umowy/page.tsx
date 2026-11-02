import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/lokalizacja-fec-jak-ocenic-rynek-i-budynek-przed-podpisaniem-umowy";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("lokalizacja-fec-jak-ocenic-rynek-i-budynek-przed-podpisaniem-umowy");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("lokalizacja-fec-jak-ocenic-rynek-i-budynek-przed-podpisaniem-umowy")} />
      <ArticleLayout slug="lokalizacja-fec-jak-ocenic-rynek-i-budynek-przed-podpisaniem-umowy" content={content} />
    </>
  );
}
