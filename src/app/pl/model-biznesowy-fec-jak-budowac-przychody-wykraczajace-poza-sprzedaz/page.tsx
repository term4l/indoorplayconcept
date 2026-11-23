import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/model-biznesowy-fec-jak-budowac-przychody-wykraczajace-poza-sprzedaz";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("model-biznesowy-fec-jak-budowac-przychody-wykraczajace-poza-sprzedaz");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("model-biznesowy-fec-jak-budowac-przychody-wykraczajace-poza-sprzedaz")} />
      <ArticleLayout slug="model-biznesowy-fec-jak-budowac-przychody-wykraczajace-poza-sprzedaz" content={content} />
    </>
  );
}
