import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/sala-zabaw-bez-ekranow-jak-ruch-relacje-i-przygoda-wygrywaja-ze";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("sala-zabaw-bez-ekranow-jak-ruch-relacje-i-przygoda-wygrywaja-ze");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("sala-zabaw-bez-ekranow-jak-ruch-relacje-i-przygoda-wygrywaja-ze")} />
      <ArticleLayout slug="sala-zabaw-bez-ekranow-jak-ruch-relacje-i-przygoda-wygrywaja-ze" content={content} />
    </>
  );
}
