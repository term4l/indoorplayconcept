/**
 * Rejestr formularzy obsługiwanych przez /api/forms/[form].
 * `required` – pola, bez których zgłoszenie jest odrzucane (oprócz zgody "consent", która jest zawsze wymagana).
 */
export const forms = {
  "zgloszenie-serwisowe": {
    subject: "Zgłoszenie serwisowe",
    required: ["name", "email", "phone", "venue", "city", "issue", "priority"],
  },
  dostawcy: {
    subject: "Zgłoszenie dostawcy / partnera",
    required: ["name", "email", "phone", "www", "region", "categories", "moq", "certificates", "portfolio", "capabilities", "message"],
  },
  media: { subject: "Zapytanie od mediów", required: ["name", "outlet", "email", "phone", "message"] },
  "projekty-3d": { subject: "Zapytanie o projekt 3D", required: ["name", "email", "message"] },
  "kalkulator-roi": { subject: "Wynik kalkulatora ROI", required: ["email"] },
  kariera: { subject: "Aplikacja – kariera", required: ["name", "email"] },
} satisfies Record<string, { subject: string; required: string[] }>;

export type FormId = keyof typeof forms;

export const isFormId = (id: string): id is FormId => id in forms;
