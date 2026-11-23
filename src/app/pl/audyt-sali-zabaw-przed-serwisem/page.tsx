import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/audyt-sali-zabaw-przed-serwisem";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("audyt-sali-zabaw-przed-serwisem");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("audyt-sali-zabaw-przed-serwisem")} />
      <ArticleLayout slug="audyt-sali-zabaw-przed-serwisem" content={content} />
    </>
  );
}
