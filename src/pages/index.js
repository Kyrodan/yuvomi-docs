import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import PageHeader from "@site/src/components/PageHeader";
import styles from "./index.module.css";

const GUIDE_SECTIONS = [
  {
    title: "Introduction",
    description:
      "What this handbook covers, who it is for, and where to start.",
    href: "/guide/",
  },
  {
    title: "Quick Start",
    description:
      "Install Yuvomi on Docker, Podman, TrueNAS, Umbrel, Unraid or from source.",
    href: "/guide/getting-started/installation",
  },
  {
    title: "Usage",
    description:
      "The dashboard, first steps, and every module explained for end users.",
    href: "/guide/usage",
  },
  {
    title: "Community",
    description: "Support channels, FAQ, and troubleshooting when you're stuck.",
    href: "/community/",
  },
];

export default function Home() {
  const heroImageLight = useBaseUrl("/img/hero-dashboard-light.webp");
  const heroImageDark = useBaseUrl("/img/hero-dashboard-dark.webp");
  const heroFloatImage = useBaseUrl(
    "/img/screenshots/shopping-light-mobile.webp",
  );

  return (
    <Layout
      title="Yuvomi Docs"
      description="An independent, community-maintained user guide for Yuvomi, the self-hosted family planner. Unofficial and not affiliated with the Yuvomi project."
    >
      <main className={styles.page}>
        <section className={clsx(styles.section, styles.hero)}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={clsx(styles.container, styles.heroGrid)}>
            <PageHeader
              eyebrow="Community project · unofficial"
              title={
                <>
                  A friendly guide to <em>Yuvomi.</em>
                </>
              }
              subtitle={
                <>
                  This handbook helps everyday users get the most out of{" "}
                  <a
                    href="https://github.com/ulsklyc/yuvomi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Yuvomi
                  </a>
                  , the self-hosted family planner. It is written and
                  maintained by the community, kept separately from the
                  official project, and is not affiliated with or endorsed by
                  Yuvomi.
                </>
              }
            >
              <Link className={styles.primaryButton} to="/guide/">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                Read the guide
              </Link>
              <a
                className={styles.secondaryButton}
                href="https://yuvomi.cloud"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Go to official Yuvomi website
              </a>
            </PageHeader>
            <div className={styles.heroVisual}>
              <div className={styles.heroFrame}>
                <ThemedImage
                  alt="Yuvomi dashboard showing today's tasks, calendar, meals and shopping at a glance"
                  sources={{
                    light: heroImageLight,
                    dark: heroImageDark,
                  }}
                  width={1400}
                  height={1050}
                  loading="eager"
                />
              </div>
              <div className={styles.heroFloat}>
                <img
                  src={heroFloatImage}
                  alt="Yuvomi shopping list on mobile"
                  loading="eager"
                  width={480}
                  height={1043}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.noticeSection)}>
          <div className={styles.container}>
            <div className={styles.notice}>
              <h2 className={styles.noticeTitle}>
                This is not the official Yuvomi website
              </h2>
              <p className={styles.noticeText}>
                Yuvomi itself lives at{" "}
                <a href="https://github.com/ulsklyc/yuvomi" target="_blank" rel="noreferrer">
                  github.com/ulsklyc/yuvomi
                </a>{" "}
                and{" "}
                <a href="https://yuvomi.cloud" target="_blank" rel="noreferrer">
                  yuvomi.cloud
                </a>
                . This guide is a separate, community-run repository so
                content here can move at its own pace without being mistaken
                for an official statement.{" "}
                <a
                  href="https://github.com/ulsklyc/yuvomi/discussions/799#discussioncomment-18233953"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read why this guide is kept separate.
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.altSection)}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Find your way</h2>
            <p className={styles.sectionText}>
              Everything in this guide is written for people who use Yuvomi
              day to day, not for server administrators.
            </p>
            <div className={styles.cardGrid}>
              {GUIDE_SECTIONS.map((item) => (
                <Link key={item.title} to={item.href} className={styles.card}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
