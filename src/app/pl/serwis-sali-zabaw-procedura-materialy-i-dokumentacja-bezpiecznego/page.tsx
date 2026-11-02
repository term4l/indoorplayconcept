import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/serwis-sali-zabaw-procedura-materialy-i-dokumentacja-bezpiecznego";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("serwis-sali-zabaw-procedura-materialy-i-dokumentacja-bezpiecznego");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("serwis-sali-zabaw-procedura-materialy-i-dokumentacja-bezpiecznego")} />
      <ArticleLayout slug="serwis-sali-zabaw-procedura-materialy-i-dokumentacja-bezpiecznego" content={content} />
    </>
  );
}
