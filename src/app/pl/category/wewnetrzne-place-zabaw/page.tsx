import type { Metadata } from "next";
import { CATEGORY_KEY, CategoryView } from "@/components/CategoryView";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(CATEGORY_KEY);

export default function CategoryPage() {
  return <CategoryView page={1} />;
}
