import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // WordPress URL-e kończą się "/", zachowujemy je 1:1, żeby nie zgubić pozycji w Google.
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "indoorplayconcept.com", pathname: "/wp-content/**" }],
  },
  async redirects() {
    return [
      { source: "/", destination: "/pl/", permanent: false },
      { source: "/pl/play-magazine/page/1/", destination: "/pl/play-magazine/", permanent: true },
      // Stare, krótkie adresy ze stopki WordPressa → kanoniczne URL-e.
      ...[
        ["/projekty-3d/", "/pl/sale-zabaw-projekty-3d/"],
        ["/o-nas/", "/pl/o-nas/"],
        ["/kontakt/", "/pl/kontakt/"],
        ["/montaz/", "/pl/montaz-sal-zabaw/"],
        ["/serwis/", "/pl/serwis-sal-zabaw/"],
        ["/przebudowa/", "/pl/przebudowa/"],
        ["/play-magazine/", "/pl/play-magazine/"],
        ["/faq/", "/pl/faq/"],
        ["/kalkulator-roi/", "/pl/kalkulator-roi/"],
        ["/zgloszenie-serwisowe/", "/pl/zgloszenie-serwisowe/"],
        ["/kariera/", "/pl/kariera/"],
        ["/dostawcy/", "/pl/dostawcy/"],
        ["/media/", "/pl/media/"],
      ].map(([source, destination]) => ({ source, destination, permanent: true })),
    ];
  },
};

export default nextConfig;
