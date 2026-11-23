import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/trampoliny-ninja-park-czy-laser-tag-jak-wybrac-atrakcje-fec-ktore";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("trampoliny-ninja-park-czy-laser-tag-jak-wybrac-atrakcje-fec-ktore");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("trampoliny-ninja-park-czy-laser-tag-jak-wybrac-atrakcje-fec-ktore")} />
      <ArticleLayout slug="trampoliny-ninja-park-czy-laser-tag-jak-wybrac-atrakcje-fec-ktore" content={content} />
    </>
  );
}
