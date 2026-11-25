import { AppLink as Link } from "./AppLink";
import Image from "next/image";
import { consultationCta, mainNav } from "@/data/navigation";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { LucideIcon } from "./LucideIcon";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/pl/" className={styles.logo} plain>
          <Image src="/images/logo.svg" alt="IndoorPlayConcept" width={305} height={105} priority />
        </Link>

        <DesktopNav items={mainNav} />

        {/* Zielony przycisk z ikonami jak w kodzie klienta (IPCNavbar): gradient, box + strzałka przesuwana na hover. */}
        <Link href={consultationCta.href} className={styles.cta}>
          <LucideIcon name="box" size={16} className={styles.ctaIcon} />
          <span>{consultationCta.label}</span>
          <LucideIcon name="arrow-right" size={16} className={styles.ctaArrow} />
        </Link>

        <MobileMenu items={mainNav} cta={consultationCta} />
      </div>
    </header>
  );
}
