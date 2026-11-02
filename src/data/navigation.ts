export type NavLink = {
  label: string;
  href: string;
  lang?: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
  isLanguageSwitcher?: boolean;
};

export type Language = NavLink & {
  code: "pl" | "en" | "de" | "nl" | "fr" | "es";
  ogLocale: string;
};

export const languages: Language[] = [
  { code: "pl", label: "Polski", href: "/pl/play-magazine/", lang: "pl-PL", ogLocale: "pl_PL" },
  { code: "en", label: "English", href: "/en/play-magazine-3/", lang: "en-GB", ogLocale: "en_GB" },
  { code: "de", label: "Deutsch", href: "/de/play-magazine-2/", lang: "de-DE", ogLocale: "de_DE" },
  { code: "nl", label: "Nederlands", href: "/nl/play-magazine-4/", lang: "nl-NL", ogLocale: "nl_NL" },
  { code: "fr", label: "Français", href: "/fr/play-magazine-5/", lang: "fr-FR", ogLocale: "fr_FR" },
  { code: "es", label: "Español", href: "/es/play-magazine-6/", lang: "es-ES", ogLocale: "es_ES" },
];

export const currentLanguage = languages[0];

export const mainNav: NavItem[] = [
  { label: "Strona Główna", href: "/pl/" },
  { label: "Projekty 3d", href: "/pl/sale-zabaw-projekty-3d/" },
  {
    label: "Usługi",
    href: "#",
    children: [
      { label: "Montaż", href: "/pl/montaz-sal-zabaw/" },
      { label: "Serwis", href: "/pl/serwis-sal-zabaw/" },
      { label: "Przebudowa", href: "/pl/przebudowa/" },
    ],
  },
  { label: "O nas", href: "/pl/o-nas/" },
  {
    label: "Dla inwestora",
    href: "#",
    children: [
      { label: "Play magazine", href: "/pl/play-magazine/" },
      { label: "FAQ", href: "/pl/faq/" },
      { label: "Kalkulator ROI", href: "/pl/kalkulator-roi/" },
      { label: "Zgłoszenie serwisowe", href: "/pl/zgloszenie-serwisowe/" },
    ],
  },
  { label: "Kontakt", href: "/pl/kontakt/" },
  { label: currentLanguage.label, href: "#", children: languages, isLanguageSwitcher: true },
];

export const consultationCta = {
  label: "UMÓW KONSULTACJĘ INWESTYCYJNĄ",
  href: "/konsultacja/",
};
