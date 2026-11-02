import { Form } from "@/components/forms/Form";
import { Checkbox, TextArea, TextField } from "@/components/forms/Fields";
import { PageIntro } from "../o-nas/PageIntro";
import styles from "./Dostawcy.module.css";

type Card = { title: string; text: string };

const why: Card[] = [
  {
    title: "Stały popyt",
    text: "Realizujemy projekty dla inwestorów w Polsce i UE. Szukamy sprawdzonych dostawców elementów do wewnętrznych placów zabaw.",
  },
  {
    title: "Jasne standardy",
    text: "Pracujemy w oparciu o normy i checklisty (m.in. EN 1176), dzięki czemu współpraca jest przewidywalna.",
  },
  {
    title: "Partnerskie podejście",
    text: "Szukamy rozwiązań w całej branży. Jeśli Twój produkt wnosi realną wartość dla inwestora — chętnie go wdrożymy.",
  },
];

const steps: Card[] = [
  {
    title: "1) Zgłoszenie",
    text: "Prześlij informacje o firmie, możliwościach produkcyjnych i certyfikatach. Dodaj zdjęcia/portfolio.",
  },
  {
    title: "2) Weryfikacja",
    text: "Sprawdzamy zgodność z wymaganiami (materiały, tolerancje, wzornictwo, normy, lead time, MOQ).",
  },
  {
    title: "3) Pilotaż",
    text: "Startujemy od małej serii/próbek. Gdy jakość i terminy są OK — włączamy Cię do bazy stałych dostawców.",
  },
];

const interests = [
  "elementy konstrukcyjne i mocowania,",
  "pianki, tkaniny, siatki,",
  "elementy z tworzyw, gumy, sklejki, stali i aluminium,",
  "oświetlenie, moduły interaktywne, sensoryczne,",
  "powłoki, wykończenia, akcesoria montażowe.",
  "atrakcje którę możemy uznać za wartościowe dla naszych projektów.",
];

const faq: Card[] = [
  {
    title: "Czego szukamy?",
    text: "Jakości, powtarzalności i terminowości. Preferujemy dostawców, którzy potrafią zaproponować ulepszenia i myślą o całym cyklu życia produktu.",
  },
  {
    title: "Jak oceniamy?",
    text: "Próbki, referencje, zgodność z normami, elastyczność serii, przejrzystość wycen oraz lead time. Zaczynamy od pilotażu.",
  },
  {
    title: "Co dalej?",
    text: "Po weryfikacji dodajemy Cię do bazy stałych dostawców i zapraszamy do zapytań ofertowych przy kolejnych projektach.",
  },
];

function Cards({ items }: { items: Card[] }) {
  return (
    <div className={styles.cards}>
      {items.map(({ title, text }) => (
        <div key={title} className={styles.card}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

/** Pola tekstowe formularza (w oryginale: etykiety tylko dla czytników, widoczne placeholdery). */
const textFields: { name: string; label: string; type?: string; autoComplete?: string; full?: boolean }[] = [
  { name: "name", label: "Nazwa firmy", autoComplete: "organization" },
  { name: "email", label: "Adres email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Telefon", type: "tel", autoComplete: "tel" },
  // "website" jest zajęte przez honeypot formularza, stąd "www".
  { name: "www", label: "Strona www / katalogonline", autoComplete: "url" },
  { name: "region", label: "Region dostaw (PL/EU/inne)" },
  { name: "categories", label: "Kategorie Produktów (np. pianki, metal, siatki)" },
  { name: "moq", label: "MOQ/modele wyceny (np. szt./mb/m2)" },
  { name: "certificates", label: "Certyfikaty / normy (np. EN 1176, ISO 9001)" },
  { name: "portfolio", label: "Link do portfolio / zdjęć (Drive / WeTransfer)", full: true },
];

export function DostawcyView() {
  return (
    <>
      <PageIntro
        kicker="Współpraca"
        title="Zostań naszym dostawcą"
        lead="Szukamy partnerów produkcyjnych, którzy myślą o jakości, bezpieczeństwie i terminowości tak samo poważnie jak my."
        image="https://indoorplayconcept.com/wp-content/uploads/2025/12/Supplier.webp"
      />

      <section className={`${styles.section} ${styles.first}`}>
        <h2 className={styles.h2}>Dlaczego warto z nami współpracować</h2>
        <Cards items={why} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Jak wygląda współpraca</h2>
        <Cards items={steps} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Zaproszenie dla producentów i dostawców</h2>
        <div className={`${styles.card} ${styles.invite}`}>
          <h3>Produkujesz rozwiązania, które mogą wnieść wartość?</h3>
          <p>
            Jeśli uważasz, że Twoje produkty lub komponenty spełniają wysokie standardy jakości i bezpieczeństwa, a do tego
            pomagają poprawić trwałość, ergonomię lub estetykę naszych realizacji — przedstaw nam swoją ofertę. Interesują
            nas m.in.:
          </p>
          <ul>
            {interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={`${styles.card} ${styles.formCard}`}>
          <h2 className={`${styles.h2} ${styles.center}`}>Zgłoszenie dostawcy</h2>
          <Form
            formId="dostawcy"
            submitLabel="Wyślij Zapytanie"
            successMessage="Dziękujemy! Zgłoszenie zostało wysłane – odezwiemy się po weryfikacji."
            className={styles.form}
          >
            {textFields.map(({ name, label, type = "text", autoComplete, full }) => (
              <TextField key={name} label={label} name={name} type={type} placeholder={label} autoComplete={autoComplete} full={full} required />
            ))}
            <TextArea
              label="Możliwości produkcyjne (materiały, tolerancje, wymiary, moce przerobowe, lead time)"
              name="capabilities"
              rows={4}
              placeholder="Możliwości produkcyjne (materiały, tolerancje, wymiary, moce przerobowe, lead time)"
              required
            />
            <TextArea
              label="Opis proponowanej współpracy"
              name="message"
              rows={4}
              placeholder="Krótko opis proponowaną współpracę: co wnosisz, jakie są przewagi, przykładowe realizacje."
              required
            />
            <Checkbox
              name="consent"
              required
              label="Wyrażam zgodę na kontakt w sprawie zapytania. Dane wykorzystamy wyłącznie do odpowiedzi."
            />
          </Form>
          <p className={styles.formNote}>Lub napisz bezpośrednio:&nbsp;hello@indoorplayconcept.com</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.last}`}>
        <h2 className={styles.h2}>Najczęściej zadawane pytania</h2>
        <Cards items={faq} />
      </section>
    </>
  );
}
