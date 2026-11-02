import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import styles from "./forms.module.css";

type Base = { label: ReactNode; name: string; hint?: ReactNode; full?: boolean };

function Wrap({ label, name, hint, full, required, children }: Base & { required?: boolean; children: ReactNode }) {
  return (
    <div className={styles.field} data-full={full || undefined}>
      <label htmlFor={`f-${name}`} className={styles.label}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  );
}

export function TextField({ label, name, hint, full, ...input }: Base & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Wrap label={label} name={name} hint={hint} full={full} required={input.required}>
      <input id={`f-${name}`} name={name} className={styles.control} {...input} />
    </Wrap>
  );
}

export function TextArea({ label, name, hint, full = true, ...input }: Base & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <Wrap label={label} name={name} hint={hint} full={full} required={input.required}>
      <textarea id={`f-${name}`} name={name} rows={5} className={styles.control} {...input} />
    </Wrap>
  );
}

export function SelectField({
  label,
  name,
  hint,
  full,
  options,
  placeholder = "Wybierz…",
  ...input
}: Base & SelectHTMLAttributes<HTMLSelectElement> & { options: string[]; placeholder?: string }) {
  return (
    <Wrap label={label} name={name} hint={hint} full={full} required={input.required}>
      <select id={`f-${name}`} name={name} className={styles.control} defaultValue="" {...input}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </Wrap>
  );
}

export function FileField({ label, name, hint, full = true, ...input }: Base & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Wrap label={label} name={name} hint={hint} full={full} required={input.required}>
      <input id={`f-${name}`} name={name} type="file" className={styles.control} {...input} />
    </Wrap>
  );
}

export function Checkbox({ name, label, required, value = "tak" }: { name: string; label: ReactNode; required?: boolean; value?: string }) {
  return (
    <label className={styles.checkbox} data-full>
      <input type="checkbox" name={name} value={value} required={required} />
      <span>{label}</span>
    </label>
  );
}

/** Standardowa zgoda RODO – link do polityki prywatności. */
export function ConsentCheckbox() {
  return (
    <Checkbox
      name="consent"
      required
      label={
        <>
          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zapytania zgodnie z{" "}
          <a href="/pl/polityka-prywatnosci/">Polityką prywatności</a>. *
        </>
      }
    />
  );
}
