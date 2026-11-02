import { NextResponse } from "next/server";
import { forms, isFormId } from "@/lib/forms";

const MAX_FIELD_LENGTH = 5000;
const MAX_FILE_SIZE = 10 * 1024 * 1024;

type Params = { params: Promise<{ form: string }> };

export async function POST(request: Request, { params }: Params) {
  const { form } = await params;
  if (!isFormId(form)) {
    return NextResponse.json({ error: "Nieznany formularz." }, { status: 404 });
  }

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane formularza." }, { status: 400 });
  }

  // Honeypot wypełniony = bot. Odpowiadamy sukcesem, żeby nie podpowiadać.
  if (String(data.get("website") ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const config = forms[form];
  const missing = [...config.required, "consent"].filter((k) => !String(data.get(k) ?? "").trim());
  if (missing.length) {
    return NextResponse.json({ error: "Uzupełnij wymagane pola." }, { status: 422 });
  }

  const email = String(data.get("email") ?? "");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Podaj poprawny adres e-mail." }, { status: 422 });
  }

  const fields: Record<string, string> = {};
  const files: { field: string; name: string; size: number; type: string }[] = [];
  for (const [key, value] of data.entries()) {
    if (key === "website") continue;
    if (typeof value === "string") {
      if (value.length > MAX_FIELD_LENGTH) {
        return NextResponse.json({ error: "Zbyt długa treść pola." }, { status: 422 });
      }
      fields[key] = fields[key] ? `${fields[key]}, ${value}` : value;
    } else if (value.size > 0) {
      if (value.size > MAX_FILE_SIZE) {
        return NextResponse.json({ error: "Plik jest za duży (maks. 10 MB)." }, { status: 413 });
      }
      files.push({ field: key, name: value.name, size: value.size, type: value.type });
    }
  }

  try {
    await deliver({ form, subject: config.subject, fields, files, receivedAt: new Date().toISOString() });
  } catch (err) {
    console.error(`[forms:${form}] delivery failed`, err);
    return NextResponse.json({ error: "Nie udało się wysłać. Spróbuj ponownie lub zadzwoń do nas." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

type Submission = {
  form: string;
  subject: string;
  fields: Record<string, string>;
  files: { field: string; name: string; size: number; type: string }[];
  receivedAt: string;
};

/**
 * Dostarczenie zgłoszenia. Ustaw FORMS_WEBHOOK_URL (np. Make/Zapier/n8n, własne API, które wyśle maila),
 * a zgłoszenia trafią tam jako JSON. Bez tej zmiennej są tylko logowane na serwerze.
 * Załączniki nie są przekazywane dalej – w JSON idą tylko ich nazwy i rozmiary.
 */
async function deliver(submission: Submission) {
  const url = process.env.FORMS_WEBHOOK_URL;
  if (!url) {
    console.info("[forms] FORMS_WEBHOOK_URL nie jest ustawiony – zgłoszenie:", JSON.stringify(submission));
    return;
  }
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
}
