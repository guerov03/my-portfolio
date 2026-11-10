import styles from "./policies.module.css";

export default function PolicyLinks() {
  return (
    <span className={styles.footerLinks}>
      <a href="/privacy/">Privacy</a>
      <a href="/terms/">Terms</a>
    </span>
  );
}
