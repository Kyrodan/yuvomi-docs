import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
  className,
}) {
  return (
    <header className={clsx(styles.header, className)}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h1 className={styles.title}>{title}</h1>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      {children ? <div className={styles.actions}>{children}</div> : null}
    </header>
  );
}
