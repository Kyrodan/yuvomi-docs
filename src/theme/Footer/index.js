import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ThemeClassNames, useThemeConfig } from "@docusaurus/theme-common";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLinks from "@theme/Footer/Links";

const FOOTER_COPY = {
  brandText: "Built with care for families who value privacy and simplicity.",
  navLabel: "Footer",
  meta: "Self-hosted \u00b7 Privacy-first \u00b7 Open source",
};

function Footer() {
  const { footer } = useThemeConfig();
  const { siteConfig } = useDocusaurusContext();

  if (!footer) {
    return null;
  }

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
              <p className="footer__brandCopy">{FOOTER_COPY.brandText}</p>
            </div>

            {links && links.length > 0 && (
              <nav className="footer__nav" aria-label={FOOTER_COPY.navLabel}>
                <FooterLinks links={links} />
              </nav>
            )}
          </div>

          {(copyright || FOOTER_COPY.meta) && (
            <div className="footer__bottomRow">
              {copyright && <FooterCopyright copyright={copyright} />}
              <span className="footer__meta">{FOOTER_COPY.meta}</span>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
