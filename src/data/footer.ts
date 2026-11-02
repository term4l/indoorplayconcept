import type { NavLink } from "./navigation";

export type ContactIcon = "marker" | "building" | "globe" | "phone" | "envelope" | "calendar";
export type SocialNetwork = "instagram" | "linkedin" | "facebook" | "youtube";

export type ContactLine = { icon: ContactIcon; text: string; href?: string };

export const company = {
  name: "Indoor Play Concept",
  contact: [
    { icon: "marker", text: "Aleje Jana Pawła II 13/220A" },
    { icon: "building", text: "37-450 Stalowa Wola, Poland" },
    { icon: "globe", text: "VAT ID: PL8672111678" },
    { icon: "phone", text: "+48 663 960 969", href: "tel:+48663960969" },
    { icon: "envelope", text: "hello@indoorplayconcept.com", href: "mailto:info@indoorplayconcept.com" },
    { icon: "calendar", text: "Godziny otwarcia: Pon – Pia 8:00 – 16:00" },
  ] satisfies ContactLine[],
  social: [
    { network: "instagram", label: "Instagram", href: "https://www.instagram.com/indoorplayconcept/" },
    { network: "linkedin", label: "Linkedin", href: "https://www.linkedin.com/company/indoorplayconcept" },
    { network: "facebook", label: "Facebook", href: "https://www.facebook.com/IndoorPlayConcept" },
    { network: "youtube", label: "Youtube", href: "https://www.youtube.com/@IndoorPlayConcept" },
  ] satisfies { network: SocialNetwork; label: string; href: string }[],
};

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Nawigacja",
    links: [
      { label: "Strona główna", href: "/pl/" },
      { label: "Projekty", href: "/pl/sale-zabaw-projekty-3d/" },
      { label: "O nas", href: "/pl/o-nas/" },
      { label: "Kontakt", href: "/pl/kontakt/" },
    ],
  },
  {
    title: "Usługi",
    links: [
      { label: "Montaż", href: "/pl/montaz-sal-zabaw/" },
      { label: "Serwis", href: "/pl/serwis-sal-zabaw/" },
      { label: "Przebudowa", href: "/pl/przebudowa/" },
    ],
  },
  {
    title: "Dla inwestora",
    links: [
      { label: "Play Magazine", href: "/pl/play-magazine/" },
      { label: "FAQ", href: "/pl/faq/" },
      { label: "Kalkulator ROI", href: "/pl/kalkulator-roi/" },
      { label: "Zgłoszenie Serwisowe", href: "/pl/zgloszenie-serwisowe/" },
    ],
  },
  {
    title: "Firma",
    links: [
      { label: "Strefa Klienta", href: "/pl/strefa-klienta/" },
      { label: "Kariera", href: "/pl/kariera/" },
      { label: "Zostań Partnerem / Dostawcą", href: "/pl/dostawcy/" },
      { label: "Dla mediów / Press kit", href: "/pl/media/" },
    ],
  },
  {
    title: "Informacje",
    links: [
      { label: "Polityka prywatności", href: "/pl/polityka-prywatnosci/" },
      { label: "Polityka cookies", href: "/pl/polityka-plikow-cookies/" },
      { label: "Regulamin serwisu", href: "/pl/regulamin-serwisu/" },
      { label: "Mapa strony", href: "/sitemap.xml" },
      { label: "Deklaracja Dostępności", href: "/pl/deklaracja-dostepnosci/" },
    ],
  },
];
