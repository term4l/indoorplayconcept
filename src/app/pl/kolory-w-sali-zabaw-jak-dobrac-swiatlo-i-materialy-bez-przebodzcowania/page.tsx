import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/pages/article/ArticleLayout";
import { content } from "@/data/content/articles/kolory-w-sali-zabaw-jak-dobrac-swiatlo-i-materialy-bez-przebodzcowania";
import { pageMetadata, pageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("kolory-w-sali-zabaw-jak-dobrac-swiatlo-i-materialy-bez-przebodzcowania");

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={pageJsonLd("kolory-w-sali-zabaw-jak-dobrac-swiatlo-i-materialy-bez-przebodzcowania")} />
      <ArticleLayout slug="kolory-w-sali-zabaw-jak-dobrac-swiatlo-i-materialy-bez-przebodzcowania" content={content} />
    </>
  );
}
