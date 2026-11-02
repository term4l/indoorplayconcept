import type { Metadata, Viewport } from "next";
import { Albert_Sans, Poppins, Roboto } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

const albert = Albert_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-albert",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400"],
  variable: "--font-poppins",
  display: "swap",
});
const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["300"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl-PL" className={`${albert.variable} ${poppins.variable} ${roboto.variable}`}>
      <body>
        <a href="#content" className="skip-link">
          Przejdź do treści
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
