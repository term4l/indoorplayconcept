import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MagazineView } from "@/components/MagazineView";
import { magazinePage, pagePath, totalPages } from "@/data/magazine";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ page: string }> };

// Tylko strony 2..N są generowane statycznie; wszystko inne to 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: totalPages() - 1 }, (_, i) => ({ page: String(i + 2) }));
}

const parsePage = (raw: string) => {
  const n = Number(raw);
  return Number.isInteger(n) && n >= 2 && n <= totalPages() ? n : null;
};

const magazinePagedMetadata = (page: number) =>
  pageMetadata("play-magazine", {
    path: pagePath(page),
    title: `${magazinePage.title} - Strona ${page} z ${totalPages()}`,
  });

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = parsePage((await params).page);
  return page ? magazinePagedMetadata(page) : {};
}

export default async function PlayMagazinePagedPage({ params }: Props) {
  const page = parsePage((await params).page);
  if (!page) notFound();
  return <MagazineView page={page} />;
}
