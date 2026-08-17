import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./datenschutz.module.css";

const GITHUB_PRIVACY_URL =
  "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement";
const BAYLDA_URL = "https://www.lda.bayern.de/";

const tocItems = [
  {
    id: "ds-1",
    label: "Verantwortlicher im Sinne der DSGVO",
  },
  {
    id: "ds-2",
    label: "Datenschutzbeauftragter",
  },
  {
    id: "ds-3",
    label: "Allgemeines zur Datenverarbeitung",
  },
  {
    id: "ds-4",
    label: "Hosting \u00fcber GitHub Pages (Drittland-Transfer USA)",
  },
  {
    id: "ds-5",
    label: "Speicherung im lokalen Browser-Speicher (LocalStorage)",
  },
  {
    id: "ds-6",
    label:
      "Keine Cookies, kein Tracking, keine Analyse-Tools, keine externen Requests",
  },
  {
    id: "ds-7",
    label: "Kontaktaufnahme per E-Mail",
  },
  {
    id: "ds-8",
    label: "Empf\u00e4nger personenbezogener Daten",
  },
  {
    id: "ds-9",
    label: "Speicherdauer",
  },
  {
    id: "ds-10",
    label: "Ihre Rechte als betroffene Person",
  },
  {
    id: "ds-11",
    label: "Beschwerderecht bei einer Aufsichtsbeh\u00f6rde",
  },
  {
    id: "ds-12",
    label: "Pflicht zur Bereitstellung der Daten",
  },
  {
    id: "ds-13",
    label: "Automatisierte Entscheidungsfindung und Profiling",
  },
  {
    id: "ds-14",
    label:
      "Aktualit\u00e4t und \u00c4nderung dieser Datenschutzerkl\u00e4rung",
  },
];

const localStorageRows = [
  {
    keyName: "yuvomi-theme",
    value: "z. B. light / dark",
    purpose: "Beibehaltung des gew\u00e4hlten Farbschemas",
    duration: "bis zur L\u00f6schung durch Sie",
  },
  {
    keyName: "yuvomi-lang",
    value: "z. B. de / en",
    purpose: "Beibehaltung der gew\u00e4hlten Sprache",
    duration: "bis zur L\u00f6schung durch Sie",
  },
];

function InfoBlock({ children }) {
  return <div className={styles.infoBlock}>{children}</div>;
}

export default function DatenschutzPage() {
  return (
    <Layout
      title="Datenschutzerkl\u00e4rung"
      description="Datenschutzerkl\u00e4rung f\u00fcr die Website Yuvomi nach Art. 13 DSGVO."
      wrapperClassName="yv-legal-page"
    >
      <main className={styles.page}>
        <div className={styles.shell}>
          <article className={styles.article}>
            <header className={styles.header}>
              <h1 className={styles.title}>
                {"Datenschutzerkl\u00e4rung"}
              </h1>
              <p className={styles.subtitle}>
                {"Informationen nach Art. 13 DSGVO · Stand: 09.06.2026"}
              </p>
            </header>

            <div className={styles.notice}>
              <strong>Hinweis:</strong>{" "}
              {"Diese Datenschutzerkl\u00e4rung gilt f\u00fcr die Website unter "}
              <code>yuvomi.cloud</code>
              {". Sie betrifft "}
              <strong>nicht</strong>
              {" die selbstgehostete Yuvomi-Anwendung, die auf Ihrem eigenen "}
              {"Server laeuft - dafuer ist der jeweilige Betreiber "}
              {"verantwortlich (siehe Hinweise fuer Selfhoster im "}
              {"Projekt-Repository)."}
            </div>

            <p className={styles.summary} lang="en">
              <strong>In English:</strong>{" "}
              {"This is the German-language privacy policy for the "}
              <code>yuvomi.cloud</code>
              {
                " website. In brief: the site is served as static files via "
              }
              {"GitHub Pages, sets no tracking cookies, runs no analytics, "}
              {"and makes no third-party requests from your browser. It "}
              {"stores only your chosen language and colour theme locally "}
              {"(localStorage). The self-hosted Yuvomi app runs on your own "}
              {"server and is not covered here."}
            </p>

            <nav className={styles.toc} aria-label="Inhaltsverzeichnis">
              <p className={styles.tocTitle}>Inhalt</p>
              <ol className={styles.tocList}>
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a className={styles.tocLink} href={`#${item.id}`}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <section className={styles.section}>
              <h2 id="ds-1">1. Verantwortlicher im Sinne der DSGVO</h2>
              <p className={styles.paragraph}>
                {"Verantwortlich fuer die Datenverarbeitung auf dieser "}
                {"Website ist:"}
              </p>
              <InfoBlock>
                <address className={styles.address}>
                  Ulas Kalayci
                  <br />
                  c/o MDC#885
                  <br />
                  {"Welserstra\u00dfe 3"}
                  <br />
                  87463 Dietmannsried
                  <br />
                  Deutschland
                  <br />
                  <br />
                  E-Mail: <a href="mailto:info@yuvomi.cloud">info@yuvomi.cloud</a>
                  <br />
                  Telefon: <a href="tel:+4915229278918">+49 1522 927 89 18</a>
                </address>
              </InfoBlock>
              <p className={styles.paragraph}>
                {"Weitere Angaben finden Sie im "}
                <Link to="/impressum">Impressum</Link>.
              </p>
            </section>

            <section className={styles.section}>
              <h2 id="ds-2">2. Datenschutzbeauftragter</h2>
              <p className={styles.paragraph}>
                {"Ein Datenschutzbeauftragter ist gesetzlich nicht "}
                {"erforderlich (\u00a7 38 BDSG: weniger als 20 Personen, die "}
                {"staendig mit der automatisierten Verarbeitung "}
                {"personenbezogener Daten beschaeftigt sind; keine "}
                {"besonderen Kategorien personenbezogener Daten i. S. v. "}
                {"Art. 9 DSGVO). Bei Fragen zum Datenschutz wenden Sie sich "}
                {"bitte direkt an den oben genannten Verantwortlichen."}
              </p>
            </section>

            <section className={styles.section}>
              <h2 id="ds-3">3. Allgemeines zur Datenverarbeitung</h2>
              <p className={styles.paragraph}>
                {"Wir verarbeiten personenbezogene Daten unserer "}
                {"Besucherinnen und Besucher grundsaetzlich nur, soweit dies "}
                {"zur Bereitstellung einer funktionsfaehigen Website sowie "}
                {"unserer Inhalte erforderlich ist. Rechtsgrundlagen sind "}
                {"insbesondere Art. 6 Abs. 1 lit. f DSGVO (berechtigte "}
                {"Interessen) sowie \u00a7 25 TDDDG (Schutz der "}
                {"Privatsphaere in Endeinrichtungen)."}
              </p>
            </section>

            <section className={styles.section}>
              <h2 id="ds-4">
                {"4. Hosting \u00fcber GitHub Pages (Drittland-Transfer USA)"}
              </h2>
              <p className={styles.paragraph}>
                {"Diese Website wird ueber den Dienst "}
                <strong>GitHub Pages</strong>
                {" ausgeliefert. Anbieter ist die "}
                <strong>GitHub, Inc.</strong>
                {", 88 Colin P Kelly Jr Street, San Francisco, CA 94107, "}
                {"USA - eine Tochtergesellschaft der Microsoft Corporation."}
              </p>
              <p className={styles.paragraph}>
                {"Bei jedem Aufruf einer Seite werden automatisch durch den "}
                {"Browser Daten an die Server von GitHub uebermittelt und "}
                {"in sogenannten Server-Logfiles gespeichert. Hierzu "}
                {"gehoeren typischerweise:"}
              </p>
              <ul className={styles.list}>
                <li>die IP-Adresse Ihres Endgeraets</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>die abgerufene URL und der Referrer</li>
                <li>verwendeter Browser-Typ und -Version</li>
                <li>verwendetes Betriebssystem</li>
              </ul>
              <p className={styles.paragraph}>
                <strong>Zweck:</strong>{" "}
                {"technische Bereitstellung der Website, Aufrechterhaltung "}
                {"von Stabilitaet und Sicherheit, Schutz vor Missbrauch und "}
                {"Angriffen."}
              </p>
              <p className={styles.paragraph}>
                <strong>Rechtsgrundlage:</strong>{" "}
                {"Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse "}
                {"liegt in der zuverlaessigen, sicheren und kostenguenstigen "}
                {"Auslieferung dieser Open-Source-Projektseite."}
              </p>
              <p className={styles.paragraph}>
                <strong>Drittland-Transfer:</strong>{" "}
                {"GitHub verarbeitet Daten auch in den USA. Die USA gelten "}
                {"als Drittland im Sinne der DSGVO. Die Uebermittlung erfolgt "}
                {"auf Grundlage des Angemessenheitsbeschlusses der "}
                {"EU-Kommission vom 10.07.2023 (EU-US Data Privacy "}
                {"Framework, Beschluss 2023/1795); die Microsoft "}
                {"Corporation als Muttergesellschaft von GitHub ist unter "}
                {"dem Data Privacy Framework zertifiziert. Ergaenzend bzw. "}
                {"ersatzweise kommen Standardvertragsklauseln nach Art. 46 "}
                {"Abs. 2 lit. c DSGVO (Durchfuehrungsbeschluss "}
                {"2021/914/EU) zur Anwendung. Trotz dieser Garantien kann "}
                {"nicht vollstaendig ausgeschlossen werden, dass "}
                {"US-Sicherheitsbehoerden auf der Grundlage "}
                {"US-amerikanischer Gesetze (insbesondere FISA 702, CLOUD "}
                {"Act) auf Daten zugreifen."}
              </p>
              <p className={styles.paragraph}>
                <strong>Speicherdauer:</strong>{" "}
                {"Die Speicherdauer der Server-Logs wird durch GitHub "}
                {"festgelegt. Wir selbst haben auf diese Logdaten keinen "}
                {"direkten Zugriff. Naehere Informationen finden Sie in der "}
                {"Datenschutzerkl\u00e4rung von GitHub: "}
                <a
                  href={GITHUB_PRIVACY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {GITHUB_PRIVACY_URL}
                </a>
                .
              </p>
            </section>

            <section className={styles.section}>
              <h2 id="ds-5">
                5. Speicherung im lokalen Browser-Speicher (LocalStorage)
              </h2>
              <p className={styles.paragraph}>
                {"Damit Ihre Anzeige-Praeferenzen ueber Seitenaufrufe hinweg "}
                {"erhalten bleiben, speichert die Website folgende Werte im "}
                <em>localStorage</em>
                {" Ihres Browsers:"}
              </p>
              <div
                className={styles.tableScroll}
                role="region"
                tabIndex="0"
                aria-labelledby="ds-5-caption"
              >
                <table className={styles.table}>
                  <caption id="ds-5-caption" className={styles.srOnly}>
                    {"Im lokalen Browser-Speicher abgelegte Werte mit "}
                    {"Inhalt, Zweck und Speicherdauer"}
                  </caption>
                  <thead>
                    <tr>
                      <th>Schluessel</th>
                      <th>Inhalt</th>
                      <th>Zweck</th>
                      <th>Speicherdauer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {localStorageRows.map((row) => (
                      <tr key={row.keyName}>
                        <td>
                          <code>{row.keyName}</code>
                        </td>
                        <td>{row.value}</td>
                        <td>{row.purpose}</td>
                        <td>{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={styles.paragraph}>
                <strong>Rechtsgrundlage:</strong>{" "}
                {"\u00a7 25 Abs. 2 Nr. 2 TDDDG. Die Speicherung dieser "}
                {"Praeferenzen ist unbedingt erforderlich, damit der von "}
                {"Ihnen ausdruecklich gewuenschte Telemediendienst - die "}
                {"Darstellung der Website in der von Ihnen ausgewaehlten "}
                {"Sprache und Farbgebung - bereitgestellt werden kann. Eine "}
                {"Einwilligung ist daher nicht erforderlich. Eine "}
                {"Uebermittlung dieser Werte an Dritte oder an Server findet "}
                {"nicht statt."}
              </p>
              <p className={styles.paragraph}>
                <strong>So loeschen Sie diese Werte:</strong>{" "}
                {"Ueber die Browser-Einstellungen unter "}
                {"\"Website-Daten loeschen\" / \"Cookies und andere "}
                {"Website-Daten\" oder ueber die Entwicklerwerkzeuge "}
                {"(Application -> Local Storage -> yuvomi.cloud)."}
              </p>
              <p className={styles.small}>
                {"Hinweis: Fruehere Versionen dieser Website verwendeten die "}
                {"Schluessel "}
                <code>oikos-theme</code>
                {" und "}
                <code>oikos-lang</code>
                {
                  ". Diese werden weiterhin ausgelesen, bis Sie Sprache oder "
                }
                {"Farbschema erneut umschalten."}
              </p>
            </section>

            <section className={styles.section}>
              <h2 id="ds-6">
                {
                  "6. Keine Cookies, kein Tracking, keine Analyse-Tools, "
                }
                {"keine externen Requests"}
              </h2>
              <p className={styles.paragraph}>
                {"Diese Website setzt "}
                <strong>keine</strong>
                {" Cookies im rechtstechnischen Sinne ein. Es werden "}
                {"insbesondere "}
                <strong>keine</strong>
                {
                  " Analyse- oder Tracking-Dienste (z. B. Google Analytics, "
                }
                {"Matomo, Plausible), "}
                <strong>keine</strong>
                {
                  " Marketing-Pixel (z. B. Meta-, TikTok-, LinkedIn-Pixel), "
                }
                <strong>keine</strong>
                {" Social-Media-Einbettungen und "}
                <strong>kein</strong>
                {" reCAPTCHA verwendet. Schriftarten werden "}
                {"ausschliesslich von unserem Server ausgeliefert "}
                {"(selbst-gehostete WOFF2-Dateien); Google Fonts wird "}
                <strong>nicht</strong>
                {" nachgeladen. Es findet beim Seitenaufruf "}
                <strong>kein</strong>
                {" Abruf externer Dienste statt - etwaige angezeigte Werte "}
                {"(z. B. die Anzahl der GitHub-\"Stars\") werden bereits vor "}
                {"der Veroeffentlichung statisch in die Seite eingebettet, "}
                {"sodass Ihr Browser hierfuer keine Verbindung zu Dritten "}
                {"aufbauen muss."}
              </p>
            </section>

            <section className={styles.section}>
              <h2 id="ds-7">7. Kontaktaufnahme per E-Mail</h2>
              <p className={styles.paragraph}>
                {"Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die "}
                {"in der E-Mail enthaltenen personenbezogenen Daten "}
                {"(Absenderadresse, Inhalt) zum Zweck der Bearbeitung Ihrer "}
                {"Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO "}
                {"(vorvertragliche Massnahmen / Vertragsdurchfuehrung) bzw. "}
                {"Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der "}
                {"Beantwortung von Anfragen). Wir loeschen die Daten, sobald "}
                {"sie fuer die Zweckerreichung nicht mehr erforderlich sind "}
                {"und keine gesetzlichen Aufbewahrungsfristen (z. B. \u00a7 "}
                {"257 HGB, \u00a7 147 AO) entgegenstehen."}
              </p>
            </section>

            <section className={styles.section}>
              <h2 id="ds-8">{"8. Empf\u00e4nger personenbezogener Daten"}</h2>
              <p className={styles.paragraph}>
                {"Empf\u00e4nger Ihrer personenbezogenen Daten ist:"}
              </p>
              <ul className={styles.list}>
                <li>
                  <strong>GitHub, Inc.</strong>
                  {
                    ", 88 Colin P Kelly Jr Street, San Francisco, CA 94107, "
                  }
                  {"USA - als Hosting-Dienstleister (Server-Logs)."}
                </li>
              </ul>
              <p className={styles.paragraph}>
                {"Eine Uebermittlung an weitere Dritte findet nicht statt, "}
                {"soweit wir nicht ausdruecklich an anderer Stelle dieser "}
                {"Erklaerung darueber informieren oder Sie ausdruecklich "}
                {"einwilligen."}
              </p>
            </section>

            <section className={styles.section}>
              <h2 id="ds-9">9. Speicherdauer</h2>
              <ul className={styles.list}>
                <li>
                  <strong>Server-Logs bei GitHub:</strong>{" "}
                  {"Speicherdauer wird von GitHub festgelegt (siehe "}
                  {"verlinkte GitHub-Datenschutzerkl\u00e4rung)."}
                </li>
                <li>
                  <strong>LocalStorage-Eintraege:</strong>{" "}
                  {"bis zur Loeschung durch Sie im Browser."}
                </li>
                <li>
                  <strong>E-Mail-Korrespondenz:</strong>{" "}
                  {"bis zur abschliessenden Bearbeitung der Anfrage, "}
                  {"laengstens im Rahmen gesetzlicher "}
                  {"Aufbewahrungspflichten."}
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 id="ds-10">10. Ihre Rechte als betroffene Person</h2>
              <p className={styles.paragraph}>
                {"Soweit wir personenbezogene Daten ueber Sie verarbeiten, "}
                {"stehen Ihnen folgende Rechte zu:"}
              </p>
              <ul className={styles.list}>
                <li>
                  <strong>Auskunft</strong> nach Art. 15 DSGVO
                </li>
                <li>
                  <strong>Berichtigung</strong> nach Art. 16 DSGVO
                </li>
                <li>
                  <strong>Loeschung</strong> nach Art. 17 DSGVO
                </li>
                <li>
                  <strong>Einschraenkung der Verarbeitung</strong>{" "}
                  nach Art. 18 DSGVO
                </li>
                <li>
                  <strong>Datenuebertragbarkeit</strong> nach Art. 20 DSGVO
                </li>
                <li>
                  <strong>Widerspruch</strong>{" "}
                  {"gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 "}
                  {"lit. f DSGVO, nach Art. 21 DSGVO"}
                </li>
                <li>
                  {"Recht, eine erteilte Einwilligung jederzeit mit Wirkung "}
                  {"fuer die Zukunft "}
                  <strong>zu widerrufen</strong>
                  {" (Art. 7 Abs. 3 DSGVO)"}
                </li>
              </ul>
              <p className={styles.paragraph}>
                {"Diese Rechte koennen Sie formlos gegenueber dem unter "}
                {"Ziffer 1 genannten Verantwortlichen geltend machen."}
              </p>
              <h3 className={styles.subheading}>
                Widerspruchsrecht nach Art. 21 DSGVO
              </h3>
              <p className={styles.paragraph}>
                {"Sie haben das Recht, aus Gruenden, die sich aus Ihrer "}
                {"besonderen Situation ergeben, jederzeit gegen die "}
                {"Verarbeitung Sie betreffender personenbezogener Daten, die "}
                {"aufgrund von Art. 6 Abs. 1 lit. f DSGVO erfolgt, "}
                {"Widerspruch einzulegen. Wir verarbeiten die "}
                {"personenbezogenen Daten dann nicht mehr, es sei denn, wir "}
                {"koennen zwingende schutzwuerdige Gruende fuer die "}
                {"Verarbeitung nachweisen, die Ihre Interessen, Rechte und "}
                {"Freiheiten ueberwiegen, oder die Verarbeitung dient der "}
                {"Geltendmachung, Ausuebung oder Verteidigung von "}
                {"Rechtsanspruechen."}
              </p>
            </section>

            <section className={styles.section}>
              <h2 id="ds-11">
                {"11. Beschwerderecht bei einer Aufsichtsbeh\u00f6rde"}
              </h2>
              <p className={styles.paragraph}>
                {"Sie haben unbeschadet anderweitiger Rechtsbehelfe das "}
                {"Recht, sich bei einer Datenschutz-Aufsichtsbeh\u00f6rde zu "}
                {"beschweren, insbesondere in dem Mitgliedstaat Ihres "}
                {"Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des "}
                {"mutmasslichen Verstosses (Art. 77 DSGVO)."}
              </p>
              <p className={styles.paragraph}>
                {"Die fuer den Verantwortlichen zustaendige "}
                {"Aufsichtsbeh\u00f6rde ist:"}
              </p>
              <InfoBlock>
                <address className={styles.address}>
                  Bayerisches Landesamt fuer Datenschutzaufsicht (BayLDA)
                  <br />
                  Promenade 18
                  <br />
                  91522 Ansbach
                  <br />
                  Deutschland
                  <br />
                  <a
                    href={BAYLDA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.lda.bayern.de
                  </a>
                </address>
              </InfoBlock>
            </section>

            <section className={styles.section}>
              <h2 id="ds-12">12. Pflicht zur Bereitstellung der Daten</h2>
              <p className={styles.paragraph}>
                {"Die Bereitstellung personenbezogener Daten ist weder "}
                {"gesetzlich noch vertraglich vorgeschrieben. Sie sind "}
                {"nicht verpflichtet, personenbezogene Daten anzugeben. Eine "}
                {"Nichtbereitstellung kann jedoch dazu fuehren, dass wir "}
                {"Anfragen nicht beantworten koennen."}
              </p>
            </section>

            <section className={styles.section}>
              <h2 id="ds-13">
                13. Automatisierte Entscheidungsfindung und Profiling
              </h2>
              <p className={styles.paragraph}>
                {"Eine automatisierte Entscheidungsfindung einschliesslich "}
                {"Profiling gemaess Art. 22 DSGVO findet auf dieser Website "}
                {"nicht statt."}
              </p>
            </section>

            <section className={styles.section}>
              <h2 id="ds-14">
                {
                  "14. Aktualit\u00e4t und \u00c4nderung dieser "
                }
                {"Datenschutzerkl\u00e4rung"}
              </h2>
              <p className={styles.paragraph}>
                {"Diese Datenschutzerkl\u00e4rung hat den Stand vom "}
                <strong>09.06.2026</strong>
                {
                  ". Durch die Weiterentwicklung der Website oder aufgrund "
                }
                {"geaenderter gesetzlicher bzw. behoerdlicher Vorgaben kann "}
                {"es notwendig werden, diese Datenschutzerkl\u00e4rung "}
                {"anzupassen. Die jeweils aktuelle Fassung ist stets unter "}
                <Link to="/datenschutz">/datenschutz</Link>
                {" abrufbar."}
              </p>
            </section>
          </article>
        </div>
      </main>
    </Layout>
  );
}
