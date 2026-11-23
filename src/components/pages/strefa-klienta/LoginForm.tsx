"use client";

import type { FormEvent, MouseEvent } from "react";
import styles from "./StrefaKlienta.module.css";

/**
 * Panel logowania 1:1 z widżetu Elementor Pro „Login” (pola bez etykiet, „Remember Me”, „Log In”, „Lost your password?”).
 * Zgodnie z ustaleniem z klientem (23.11.2026) po wysłaniu nic się nie dzieje – nie ma zaplecza logowania.
 */
export function LoginForm() {
  const noop = (e: FormEvent | MouseEvent) => e.preventDefault();

  return (
    <form className={styles.form} aria-label="Login form" onSubmit={noop}>
      <div>
        <label htmlFor="login-user" className="sr-only">
          E-mail
        </label>
        <input id="login-user" name="log" type="text" autoComplete="username" className={styles.input} />
      </div>
      <div>
        <label htmlFor="login-password" className="sr-only">
          Hasło
        </label>
        <input id="login-password" name="pwd" type="password" autoComplete="current-password" className={styles.input} />
      </div>
      <label className={styles.remember}>
        <input type="checkbox" name="rememberme" value="forever" />
        Remember Me
      </label>
      <div>
        <button type="submit" className={styles.button}>
          Log In
        </button>
      </div>
      <a href="#" className={styles.lost} onClick={noop}>
        Lost your password?
      </a>
    </form>
  );
}
