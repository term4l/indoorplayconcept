import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/interaktywne-atrakcje-do-sali-zabaw-jak-zwiekszyc-liczbe-powrotow-bez";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("interaktywne-atrakcje-do-sali-zabaw-jak-zwiekszyc-liczbe-powrotow-bez");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("interaktywne-atrakcje-do-sali-zabaw-jak-zwiekszyc-liczbe-powrotow-bez")} />
      <ArticleLayout slug="interaktywne-atrakcje-do-sali-zabaw-jak-zwiekszyc-liczbe-powrotow-bez" content={content} />
    </>
  );
}
