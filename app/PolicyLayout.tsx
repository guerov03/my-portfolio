import Link from "next/link";
import type { ReactNode } from "react";
import PolicyLinks from "./PolicyLinks";
import styles from "./policies.module.css";

export default function PolicyLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className={styles.page}>
      <nav className={styles.navigation} aria-label="Policy navigation">
        <Link href="/">← Back to portfolio</Link>
        <span>Friday Agent</span>
      </nav>
      <article className={styles.document}>
        <p className={styles.kicker}>Friday Agent · Personal notifications</p>
        <h1>{title}</h1>
        <p className={styles.updated}>Effective October 23, 2026</p>
        {children}
      </article>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Eduardo Valdovinos</span>
        <PolicyLinks />
      </footer>
    </main>
  );
}
