import { AppLink as Link } from "./AppLink";
import Image from "next/image";
import { consultationCta, mainNav } from "@/data/navigation";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { Icon } from "./Icons";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/pl/" className={styles.logo}>
          <Image src="/images/logo.svg" alt="IndoorPlayConcept" width={305} height={105} priority />
        </Link>

        <DesktopNav items={mainNav} />

        <Link href={consultationCta.href} className={styles.cta}>
          <Icon name="arrowRight" className={styles.ctaIcon} />
          <span>{consultationCta.label}</span>
        </Link>

        <MobileMenu items={mainNav} cta={consultationCta} />
      </div>
    </header>
  );
}
