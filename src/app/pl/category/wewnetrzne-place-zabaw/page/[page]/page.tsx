import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORY_KEY, CategoryView, categoryPagePath, categoryTotalPages } from "@/components/CategoryView";
import { pages } from "@/data/pages";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ page: string }> };

// Tylko strony 2..N są generowane statycznie; wszystko inne to 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: categoryTotalPages() - 1 }, (_, i) => ({ page: String(i + 2) }));
}

const parsePage = (raw: string) => {
  const n = Number(raw);
  return Number.isInteger(n) && n >= 2 && n <= categoryTotalPages() ? n : null;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = parsePage((await params).page);
  return page
    ? pageMetadata(CATEGORY_KEY, { path: categoryPagePath(page), title: `${pages[CATEGORY_KEY].title} - Strona ${page} z ${categoryTotalPages()}` })
    : {};
}

export default async function CategoryPagedPage({ params }: Props) {
  const page = parsePage((await params).page);
  if (!page) notFound();
  return <CategoryView page={page} />;
}
