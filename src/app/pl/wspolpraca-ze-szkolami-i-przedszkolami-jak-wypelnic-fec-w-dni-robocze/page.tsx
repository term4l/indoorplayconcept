import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/wspolpraca-ze-szkolami-i-przedszkolami-jak-wypelnic-fec-w-dni-robocze";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("wspolpraca-ze-szkolami-i-przedszkolami-jak-wypelnic-fec-w-dni-robocze");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("wspolpraca-ze-szkolami-i-przedszkolami-jak-wypelnic-fec-w-dni-robocze")} />
      <ArticleLayout slug="wspolpraca-ze-szkolami-i-przedszkolami-jak-wypelnic-fec-w-dni-robocze" content={content} />
    </>
  );
}
