import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/marketing-sali-zabaw-plan-dzialan-od-koncepcji-do-regularnych-powrotow";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("marketing-sali-zabaw-plan-dzialan-od-koncepcji-do-regularnych-powrotow");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("marketing-sali-zabaw-plan-dzialan-od-koncepcji-do-regularnych-powrotow")} />
      <ArticleLayout slug="marketing-sali-zabaw-plan-dzialan-od-koncepcji-do-regularnych-powrotow" content={content} />
    </>
  );
}
