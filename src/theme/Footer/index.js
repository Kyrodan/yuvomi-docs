import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ThemeClassNames, useThemeConfig } from "@docusaurus/theme-common";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLinks from "@theme/Footer/Links";

const FOOTER_COPY = {
  de: {
    brandText:
      "Mit Sorgfalt gebaut fuer Familien, die Privatsphaere und Einfachheit schaetzen.",
    navLabel: "Footer",
    meta: "Selbst gehostet \u00b7 Privacy-first \u00b7 Open source",
  },
  en: {
    brandText:
      "Built with care for families who value privacy and simplicity.",
    navLabel: "Footer",
    meta: "Self-hosted \u00b7 Privacy-first \u00b7 Open source",
  },
};

function Footer() {
  const { footer } = useThemeConfig();
  const { i18n, siteConfig } = useDocusaurusContext();

  if (!footer) {
    return null;
  }

  const locale = i18n.currentLocale === "de" ? "de" : "en";
  const copy = FOOTER_COPY[locale];
  const homeUrl = useBaseUrl("/");
  const logoUrl = useBaseUrl("/img/logo.svg");
  const { copyright, links, style } = footer;

  return (
    <footer
      className={clsx(ThemeClassNames.layout.footer.container, "footer", {
        "footer--dark": style === "dark",
      })}
    >
      <div className="footer__container">
        <div className="footer__frame">
          <div className="footer__inner">
            <div className="footer__brand">
              <Link className="footer__brandLink" to={homeUrl}>
                <img
                  className="footer__brandLogo"
                  src={logoUrl}
                  alt={siteConfig.title}
                />
                <span>{siteConfig.title}</span>
              </Link>
              <p className="footer__brandCopy">{copy.brandText}</p>
            </div>

            {links && links.length > 0 && (
              <nav className="footer__nav" aria-label={copy.navLabel}>
                <FooterLinks links={links} />
              </nav>
            )}
          </div>

          {(copyright || copy.meta) && (
            <div className="footer__bottomRow">
              {copyright && <FooterCopyright copyright={copyright} />}
              <span className="footer__meta">{copy.meta}</span>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
