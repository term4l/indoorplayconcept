import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/branding-sali-zabaw-jak-stworzyc-marke-ktora-rodziny-zapamietuja";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("branding-sali-zabaw-jak-stworzyc-marke-ktora-rodziny-zapamietuja");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("branding-sali-zabaw-jak-stworzyc-marke-ktora-rodziny-zapamietuja")} />
      <ArticleLayout slug="branding-sali-zabaw-jak-stworzyc-marke-ktora-rodziny-zapamietuja" content={content} />
    </>
  );
}
