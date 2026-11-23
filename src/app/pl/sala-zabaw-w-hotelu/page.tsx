import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/sala-zabaw-w-hotelu";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("sala-zabaw-w-hotelu");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("sala-zabaw-w-hotelu")} />
      <ArticleLayout slug="sala-zabaw-w-hotelu" content={content} />
    </>
  );
}
