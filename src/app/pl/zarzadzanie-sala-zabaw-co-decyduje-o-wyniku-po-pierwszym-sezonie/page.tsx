import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/zarzadzanie-sala-zabaw-co-decyduje-o-wyniku-po-pierwszym-sezonie";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("zarzadzanie-sala-zabaw-co-decyduje-o-wyniku-po-pierwszym-sezonie");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("zarzadzanie-sala-zabaw-co-decyduje-o-wyniku-po-pierwszym-sezonie")} />
      <ArticleLayout slug="zarzadzanie-sala-zabaw-co-decyduje-o-wyniku-po-pierwszym-sezonie" content={content} />
    </>
  );
}
