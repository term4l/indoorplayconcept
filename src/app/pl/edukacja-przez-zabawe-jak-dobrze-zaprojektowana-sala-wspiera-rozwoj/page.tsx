import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/edukacja-przez-zabawe-jak-dobrze-zaprojektowana-sala-wspiera-rozwoj";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("edukacja-przez-zabawe-jak-dobrze-zaprojektowana-sala-wspiera-rozwoj");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("edukacja-przez-zabawe-jak-dobrze-zaprojektowana-sala-wspiera-rozwoj")} />
      <ArticleLayout slug="edukacja-przez-zabawe-jak-dobrze-zaprojektowana-sala-wspiera-rozwoj" content={content} />
    </>
  );
}
