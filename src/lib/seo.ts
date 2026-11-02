import type { Metadata } from "next";
import { languages } from "@/data/navigation";
import { pages, persons, type PageKey, type PageSeo } from "@/data/pages";
import { GOOGLE_SITE_VERIFICATION, LOGO_URL, SITE_NAME, SITE_URL, absoluteUrl } from "./site";

type MetaOptions = {
  /** Nadpisuje canonical/url, np. dla kolejnych stron paginacji. */
  path?: string;
  /** Nadpisuje tytuł, np. "… - Strona 2 z 3". */
  title?: string;
};

export function pageMetadata(key: PageKey, { path, title }: MetaOptions = {}): Metadata {
  const page: PageSeo = pages[key];
  const url = path ?? page.path;
  const fullTitle = title ?? page.title;
  const isPaged = url !== page.path;
  const image = page.ogImage;
  const article = page.article;

  // Etykiety twittera jak w Yoast: dla wpisów autor + czas czytania, dla stron sam czas czytania.
  const twitterLabels: [string, string][] = [
    ...(article ? [["Napisane przez", article.author] as [string, string]] : []),
    ...(page.readingTime ? [["Szacowany czas czytania", page.readingTime] as [string, string]] : []),
  ];

  return {
    title: { absolute: fullTitle },
    description: page.description,
    authors: article ? [{ name: article.author }] : undefined,
    alternates: {
      canonical: url,
      languages: isPaged ? undefined : page.hreflang,
    },
    openGraph: {
      type: page.ogType ?? "article",
      locale: "pl_PL",
      alternateLocale: languages.filter((l) => l.code !== "pl").map((l) => l.ogLocale),
      title: fullTitle,
      description: page.description,
      url,
      siteName: SITE_NAME,
      images: image ? [{ url: image, ...page.ogImageSize }] : undefined,
      publishedTime: article?.publishedTime,
      modifiedTime: page.dateModified,
    },
    twitter: { card: "summary_large_image" },
    other: Object.fromEntries(
      twitterLabels.flatMap(([label, data], i) => [
        [`twitter:label${i + 1}`, label],
        [`twitter:data${i + 1}`, data],
      ]),
    ),
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  verification: { google: GOOGLE_SITE_VERIFICATION },
  icons: {
    icon: [
      { url: `${SITE_URL}/wp-content/uploads/2025/11/cropped-Ipc-Logo-scaled-1-32x32.png`, sizes: "32x32" },
      { url: `${SITE_URL}/wp-content/uploads/2025/11/cropped-Ipc-Logo-scaled-1-192x192.png`, sizes: "192x192" },
    ],
    apple: `${SITE_URL}/wp-content/uploads/2025/11/cropped-Ipc-Logo-scaled-1-180x180.png`,
  },
  other: {
    "msapplication-TileImage": `${SITE_URL}/wp-content/uploads/2025/11/cropped-Ipc-Logo-scaled-1-270x270.png`,
  },
};

/**
 * Graf schema.org w układzie Yoast: WebPage (+ CollectionPage), obraz główny, okruszki, WebSite, Organization.
 * `extra` pozwala dołożyć węzły specyficzne dla strony (np. FAQPage, ContactPage).
 */
export function pageJsonLd(key: PageKey, { path, extra = [] }: { path?: string; extra?: object[] } = {}) {
  const page: PageSeo = pages[key];
  const url = absoluteUrl(path ?? page.path);
  const home = absoluteUrl("/pl/");
  const imageId = `${url}#primaryimage`;
  const isHome = page.path === "/pl/";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": page.collection ? ["WebPage", "CollectionPage"] : "WebPage",
        "@id": url,
        url,
        name: page.title,
        isPartOf: { "@id": `${home}#website` },
        ...(isHome && { about: { "@id": `${home}#organization` } }),
        ...(page.primaryImage && {
          primaryImageOfPage: { "@id": imageId },
          image: { "@id": imageId },
          thumbnailUrl: page.primaryImage,
        }),
        datePublished: page.datePublished,
        dateModified: page.dateModified,
        description: page.description,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "pl-PL",
        ...(!page.collection && { potentialAction: [{ "@type": "ReadAction", target: [url] }] }),
      },
      ...(page.article
        ? [
            {
              "@type": "Article",
              "@id": `${url}#article`,
              isPartOf: { "@id": url },
              author: { name: page.article.author, "@id": page.article.authorId },
              headline: page.article.headline,
              datePublished: page.datePublished,
              dateModified: page.dateModified,
              mainEntityOfPage: { "@id": url },
              wordCount: page.article.wordCount,
              publisher: { "@id": `${home}#organization` },
              ...(page.primaryImage && { image: { "@id": imageId }, thumbnailUrl: page.primaryImage }),
              articleSection: page.article.articleSection,
              inLanguage: "pl-PL",
            },
          ]
        : []),
      ...(page.primaryImage
        ? [{ "@type": "ImageObject", inLanguage: "pl-PL", "@id": imageId, url: page.primaryImage, contentUrl: page.primaryImage }]
        : []),
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: (isHome
          ? [{ name: "Strona główna" }]
          : [
              { name: "Strona główna", item: home },
              ...(page.breadcrumbParent ? [{ name: page.breadcrumbParent.name, item: absoluteUrl(page.breadcrumbParent.path) }] : []),
              { name: page.breadcrumb },
            ]
        ).map((crumb, i) => ({ "@type": "ListItem", position: i + 1, ...crumb })),
      },
      {
        "@type": "WebSite",
        "@id": `${home}#website`,
        url: home,
        name: SITE_NAME,
        description: SITE_NAME,
        publisher: { "@id": `${home}#organization` },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: { "@type": "EntryPoint", urlTemplate: `${home}?s={search_term_string}` },
            "query-input": { "@type": "PropertyValueSpecification", valueRequired: true, valueName: "search_term_string" },
          },
        ],
        inLanguage: "pl-PL",
      },
      {
        "@type": "Organization",
        "@id": `${home}#organization`,
        name: SITE_NAME,
        url: home,
        logo: {
          "@type": "ImageObject",
          inLanguage: "pl-PL",
          "@id": `${home}#/schema/logo/image/`,
          url: LOGO_URL,
          contentUrl: LOGO_URL,
          width: 305,
          height: 105,
          caption: SITE_NAME,
        },
        image: { "@id": `${home}#/schema/logo/image/` },
      },
      ...(page.article && persons[page.article.authorId] ? [persons[page.article.authorId]] : []),
      ...extra,
    ],
  };
}
