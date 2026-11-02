import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/modernizacja-sali-zabaw-kiedy-dodawac-atrakcje-tematyczne-i";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("modernizacja-sali-zabaw-kiedy-dodawac-atrakcje-tematyczne-i");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("modernizacja-sali-zabaw-kiedy-dodawac-atrakcje-tematyczne-i")} />
      <ArticleLayout slug="modernizacja-sali-zabaw-kiedy-dodawac-atrakcje-tematyczne-i" content={content} />
    </>
  );
}
