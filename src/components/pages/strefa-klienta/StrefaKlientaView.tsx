import { LoginForm } from "./LoginForm";
import styles from "./StrefaKlienta.module.css";

export function StrefaKlientaView() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h1 className={styles.title}>Strefa Klienta</h1>
        <p className={styles.lead}>Podaj e-mail i hasło, aby wejść.</p>
        <LoginForm />
      </div>
    </section>
  );
}
