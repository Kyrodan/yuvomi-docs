import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./impressum.module.css";
const PROJECT_URL = "https://github.com/ulsklyc/yuvomi";
const PROFILE_URL = "https://github.com/ulsklyc";
const LICENSE_URL = "https://github.com/ulsklyc/yuvomi/blob/main/LICENSE";

function InfoBlock({ children }) {
  return <div className={styles.infoBlock}>{children}</div>;
}

function DefinitionList({ items }) {
  return (
    <dl className={styles.definitionList}>
      {items.map((item) => (
        <React.Fragment key={item.term}>
          <dt className={styles.definitionTerm}>{item.term}</dt>
          <dd className={styles.definitionValue}>{item.value}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

const providerItems = [
  {
    term: "Name",
    value: "Ulas Kalayci",
  },
  {
    term: "Anschrift",
    value: (
      <span className={styles.multiline}>
        <span>c/o MDC#885</span>
        <span>Welserstra\u00dfe 3</span>
        <span>87463 Dietmannsried</span>
        <span>Deutschland</span>
      </span>
    ),
  },
];

const contactItems = [
  {
    term: "E-Mail",
    value: <a href="mailto:info@yuvomi.cloud">info@yuvomi.cloud</a>,
  },
  {
    term: "Telefon",
    value: <a href="tel:+4915229278918">+49 1522 927 89 18</a>,
  },
  {
    term: "GitHub",
    value: (
      <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer">
        github.com/ulsklyc
      </a>
    ),
  },
];

const editorialItems = [
  {
    term: "Name",
    value: "Ulas Kalayci",
  },
  {
    term: "Anschrift",
    value: "identisch mit der Anbieter-Anschrift (siehe oben)",
  },
];

export default function ImpressumPage() {
  return (
    <Layout
      title="Impressum"
      description="Impressum und Anbieterkennzeichnung f\u00fcr Yuvomi nach deutschem Recht."
      wrapperClassName="yv-legal-page"
    >
      <main className={styles.page}>
        <div className={styles.shell}>
          <article className={styles.article}>
            <header className={styles.header}>
              <h1 className={styles.title}>Impressum</h1>
              <p className={styles.subtitle}>
                {"Anbieterkennzeichnung gem\u00e4\u00df \u00a7 5 "}
                {"Digitale-Dienste-Gesetz (DDG)"}
              </p>
            </header>

            <div className={styles.notice}>
              <strong>Hinweis:</strong>{" "}
              {"Diese Seite enth\u00e4lt die gesetzlich vorgeschriebene "}
              {"Anbieterkennzeichnung f\u00fcr das digitale Angebot unter "}
              <code>yuvomi.cloud</code>
              {" sowie das zugeh\u00f6rige Open-Source-Projekt "}
              <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer">
                github.com/ulsklyc/yuvomi
              </a>
              {
                ". Die hier genannten Kontaktdaten dienen ausschlie\u00dflich "
              }
              {"der Erf\u00fcllung der Pflichten nach \u00a7 5 DDG und "}
              {"\u00a7 18 Medienstaatsvertrag (MStV)."}
            </div>

            <p className={styles.summary} lang="en">
              <strong>In English:</strong>{" "}
              {"This page is the provider identification (Impressum) legally "}
              {"required for "}
              <code>yuvomi.cloud</code>
              {" under German law (\u00a7 5 DDG) and applies to this website "}
              {"and its open-source project. The contact details below exist "}
              {"solely to meet that obligation. For how data is handled, see "}
              {"the "}
              <Link to="/datenschutz">Privacy Policy</Link>
              .
            </p>

            <section className={styles.section}>
              <h2 id="im-anbieter">Anbieter / Diensteanbieter</h2>
              <InfoBlock>
                <DefinitionList items={providerItems} />
              </InfoBlock>
            </section>

            <section className={styles.section}>
              <h2 id="im-kontakt">Kontakt</h2>
              <InfoBlock>
                <DefinitionList items={contactItems} />
              </InfoBlock>
            </section>

            <section className={styles.section}>
              <h2 id="im-umsatzsteuer">Umsatzsteuer</h2>
              <InfoBlock>
                <p className={styles.paragraph}>
                  {
                    "Aufgrund der Kleinunternehmerregelung gem\u00e4\u00df "
                  }
                  {"\u00a7 19 Umsatzsteuergesetz (UStG) wird keine "}
                  Umsatzsteuer ausgewiesen.
                </p>
              </InfoBlock>
            </section>

            <section className={styles.section}>
              <h2 id="im-verantwortlich">
                {"Verantwortlich f\u00fcr den Inhalt nach "}
                {"\u00a7 18 Abs. 2 MStV"}
              </h2>
              <InfoBlock>
                <DefinitionList items={editorialItems} />
              </InfoBlock>
            </section>

            <section className={styles.section}>
              <h2 id="im-verbraucherstreitbeilegung">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <InfoBlock>
                <p className={styles.paragraph}>
                  {"Der Anbieter ist nicht bereit und nicht verpflichtet, an "}
                  {"Streitbeilegungsverfahren vor einer "}
                  {"Verbraucherschlichtungsstelle teilzunehmen "}
                  {"(\u00a7 36 Verbraucherstreitbeilegungsgesetz - VSBG)."}
                </p>
              </InfoBlock>
            </section>

            <section className={styles.section}>
              <h2 id="im-haftung-inhalte">{"Haftung f\u00fcr Inhalte"}</h2>
              <p className={styles.paragraph}>
                {"Als Diensteanbieter ist der Betreiber gem\u00e4\u00df "}
                {"\u00a7 7 Abs. 1 DDG f\u00fcr eigene Inhalte auf diesen Seiten "}
                {"nach den allgemeinen Gesetzen verantwortlich. Nach "}
                {"\u00a7\u00a7 8 bis 10 DDG ist der Betreiber als "}
                {"Diensteanbieter jedoch nicht verpflichtet, \u00fcbermittelte "}
                {"oder gespeicherte fremde Informationen zu \u00fcberwachen "}
                {"oder nach Umst\u00e4nden zu forschen, die auf eine "}
                {"rechtswidrige T\u00e4tigkeit hinweisen. Verpflichtungen zur "}
                {"Entfernung oder Sperrung der Nutzung von Informationen nach "}
                {"den allgemeinen Gesetzen bleiben hiervon unber\u00fchrt. "}
                {"Eine diesbez\u00fcgliche Haftung ist jedoch erst ab dem "}
                {"Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung "}
                {"m\u00f6glich. Bei Bekanntwerden von entsprechenden "}
                {"Rechtsverletzungen werden diese Inhalte umgehend entfernt."}
              </p>
            </section>

            <section className={styles.section}>
              <h2 id="im-haftung-links">{"Haftung f\u00fcr Links"}</h2>
              <p className={styles.paragraph}>
                {"Dieses Angebot enth\u00e4lt Links zu externen Websites "}
                {"Dritter (z. B. github.com), auf deren Inhalte der Betreiber "}
                {"keinen Einfluss hat. Deshalb kann f\u00fcr diese fremden "}
                {"Inhalte auch keine Gew\u00e4hr \u00fcbernommen werden. F\u00fcr "}
                {"die Inhalte der verlinkten Seiten ist stets der jeweilige "}
                {"Anbieter oder Betreiber der Seiten verantwortlich. Die "}
                {"verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf "}
                {"m\u00f6gliche Rechtsverst\u00f6\u00dfe \u00fcberpr\u00fcft. "}
                {"Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung "}
                {"nicht erkennbar. Eine permanente inhaltliche Kontrolle der "}
                {"verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte "}
                {"einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von "}
                {"Rechtsverletzungen werden derartige Links umgehend entfernt."}
              </p>
            </section>

            <section className={styles.section}>
              <h2 id="im-urheberrecht">Urheberrecht</h2>
              <p className={styles.paragraph}>
                {"Die durch den Betreiber erstellten Inhalte und Werke auf "}
                {"diesen Seiten unterliegen dem deutschen Urheberrecht. Der "}
                {"Quellcode des Yuvomi-Projekts steht unter der "}
                <a href={LICENSE_URL} target="_blank" rel="noopener noreferrer">
                  MIT-Lizenz
                </a>
                {"; es gelten die dort genannten Bedingungen. Dar\u00fcber "}
                {"hinausgehende Vervielf\u00e4ltigung, Bearbeitung, "}
                {"Verbreitung und jede Art der Verwertung au\u00dferhalb der "}
                {"Grenzen des Urheberrechts bed\u00fcrfen der schriftlichen "}
                {"Zustimmung des jeweiligen Autors bzw. Erstellers."}
              </p>
            </section>

            <p className={styles.footnote}>
              {"Stand: 09.06.2026. Informationen zur Verarbeitung "}
              {"personenbezogener Daten finden Sie in der "}
              <Link to="/datenschutz">{"Datenschutzerkl\u00e4rung"}</Link>
              .
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
