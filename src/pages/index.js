import React, { useEffect, useMemo, useRef } from "react";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useColorMode } from "@docusaurus/theme-common";
import { homepageTemplate } from "../data-homepage-template";
import homepageTranslations from "../data-homepage-translations";

const SHOT_W = {
  web: [700, 1400],
  mobile: [240, 480],
};

const HERO_SHOT_LIGHT = "screenshots/dashboard-light-web.png";
const HERO_SHOT_DARK = "screenshots/dashboard-dark-web.png";

const RICH_TAGS = new Set(["em", "code", "strong", "b", "span", "a"]);
const RICH_ATTRS = new Set(["href", "target", "rel", "class"]);

function srcsetFor(path, sizes) {
  const one = path.replace(/\.png$/, "@1x.webp");
  const two = path.replace(/\.png$/, ".webp");

  if (!sizes) {
    return `${one} 1x, ${two} 2x`;
  }

  const widths = /-mobile\.png$/.test(path) ? SHOT_W.mobile : SHOT_W.web;
  return `${one} ${widths[0]}w, ${two} ${widths[1]}w`;
}

function shotSrc(img, path, englishBase) {
  img.onerror = () => {
    img.onerror = null;

    if (englishBase && path !== englishBase) {
      shotSrc(img, englishBase, null);
      return;
    }

    img.srcset = "";
    img.src = path;
  };

  if (img.dataset.sizes) {
    img.sizes = img.dataset.sizes;
  }

  img.srcset = srcsetFor(path, img.dataset.sizes);
  img.src = path.replace(/\.png$/, ".webp");
}

function localizeShotPath(path, locale) {
  return locale === "de"
    ? path.replace("screenshots/", "screenshots/de/")
    : path;
}

function decorateTemplateWithHeroShot(template, locale, isDark) {
  const heroPath = localizeShotPath(
    isDark ? HERO_SHOT_DARK : HERO_SHOT_LIGHT,
    locale,
  );
  const heroSrc = heroPath.replace(/\.png$/, ".webp");
  const heroSrcSet = srcsetFor(heroPath);

  return template
    .replace(
      /(<img class="sc"[^>]*id="heroShot")>/,
      `$1 src="${heroSrc}" srcset="${heroSrcSet}">`,
    )
    .replace(
      /<noscript><img class="sc" src="screenshots\/dashboard-light-web\.png"/,
      `<noscript><img class="sc" src="${heroPath}"`,
    );
}

function setRich(el, str) {
  if (!str.includes("<")) {
    el.textContent = str;
    return;
  }

  const frag = document.createDocumentFragment();
  const stack = [frag];
  const re = /<(\/?)([a-zA-Z]+)((?:\s+[a-zA-Z-]+="[^"]*")*)\s*>/g;
  let last = 0;
  let match;

  function appendText(chunk) {
    if (chunk) {
      stack[stack.length - 1].appendChild(document.createTextNode(chunk));
    }
  }

  while ((match = re.exec(str)) !== null) {
    const tagName = match[2].toLowerCase();

    if (!RICH_TAGS.has(tagName)) {
      continue;
    }

    appendText(str.slice(last, match.index));
    last = re.lastIndex;

    if (match[1]) {
      if (stack.length > 1) {
        stack.pop();
      }
      continue;
    }

    const node = document.createElement(tagName);

    (match[3] || "").replace(/([a-zA-Z-]+)="([^"]*)"/g, (_, attr, val) => {
      const lowerAttr = attr.toLowerCase();

      if (!RICH_ATTRS.has(lowerAttr)) {
        return "";
      }

      if (
        lowerAttr === "href" &&
        /^(?:javascript|data|vbscript):/i.test(
          val.replace(/[\u0000-\u0020]/g, ""),
        )
      ) {
        return "";
      }

      node.setAttribute(lowerAttr, val);
      return "";
    });

    stack[stack.length - 1].appendChild(node);
    stack.push(node);
  }

  appendText(str.slice(last));
  el.replaceChildren(frag);
}

function formatReleaseDate(locale, releaseValue) {
  const [year, month, day] = (releaseValue || "").split("-").map(Number);

  if (!year) {
    return "";
  }

  return new Date(year, (month || 1) - 1, day || 1).toLocaleDateString(
    locale === "de" ? "de-DE" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );
}

function HomePageContent({
  docsIntroUrl,
  datenschutzUrl,
  englishHomeUrl,
  germanHomeUrl,
  impressumUrl,
  installUrl,
  locale,
  t,
  templateSource,
}) {
  const rootRef = useRef(null);
  const { colorMode, setColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const template = useMemo(
    () => decorateTemplateWithHeroShot(templateSource, locale, isDark),
    [isDark, locale, templateSource],
  );

  useEffect(() => {
    document.body.classList.add("yv-home-route");

    return () => {
      document.body.classList.remove("yv-home-route");
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    const cleanupFns = [];
    const alternateHomeUrl = locale === "de" ? englishHomeUrl : germanHomeUrl;

    const addListener = (target, eventName, handler, options) => {
      target.addEventListener(eventName, handler, options);
      cleanupFns.push(() =>
        target.removeEventListener(eventName, handler, options),
      );
    };

    const qsa = (selector) => Array.from(root.querySelectorAll(selector));

    function rewriteLinks() {
      qsa("a[href]").forEach((link) => {
        const href = link.getAttribute("href");

        if (!href) {
          return;
        }

        if (href.startsWith("install.html")) {
          const suffix = href.slice("install.html".length);
          link.setAttribute("href", `${installUrl}${suffix}`);
          link.removeAttribute("target");
          return;
        }

        if (href === "docs.html") {
          link.setAttribute("href", docsIntroUrl);
          link.removeAttribute("target");
          return;
        }

        if (href === "impressum.html") {
          link.setAttribute("href", impressumUrl);
          link.removeAttribute("target");
          link.removeAttribute("rel");
          return;
        }

        if (href === "datenschutz.html") {
          link.setAttribute("href", datenschutzUrl);
          link.removeAttribute("target");
          link.removeAttribute("rel");
          return;
        }

        if (href === "privacy.html") {
          link.setAttribute("href", datenschutzUrl);
          link.removeAttribute("target");
          link.removeAttribute("rel");
          return;
        }

        if (
          href === "https://github.com/ulsklyc/yuvomi/blob/main/docs/SPEC.md"
        ) {
          link.setAttribute("href", docsIntroUrl);
          link.removeAttribute("target");
          return;
        }
      });
    }

    function applyLang() {
      qsa(`[data-href-${locale}]`).forEach((link) => {
        const localizedHref = link.getAttribute(`data-href-${locale}`);

        if (localizedHref) {
          link.setAttribute("href", localizedHref);
        }
      });

      qsa("[data-t]").forEach((el) => {
        const key = el.getAttribute("data-t");

        if (key && t[key] !== undefined) {
          setRich(el, t[key]);
        }
      });

      qsa("[data-alt-t]").forEach((img) => {
        const key = img.getAttribute("data-alt-t");

        if (key && t[key] !== undefined) {
          img.alt = t[key];
        }
      });

      qsa("[data-t-aria]").forEach((el) => {
        const key = el.getAttribute("data-t-aria");

        if (!key || t[key] === undefined) {
          return;
        }

        el.setAttribute("aria-label", t[key]);

        if (el.matches("button, a[href]")) {
          el.setAttribute("title", t[key]);
        }
      });

      const langLabel = root.querySelector("#langLbl");
      if (langLabel) {
        langLabel.textContent = locale === "de" ? "EN" : "DE";
      }

      const langButton = root.querySelector("#langBtn");
      if (langButton) {
        const label =
          locale === "de" ? "Switch to English" : "Auf Deutsch umschalten";
        langButton.setAttribute("aria-label", label);
        langButton.setAttribute("title", label);
      }

      const released = root.querySelector("#foot-released");
      if (released) {
        released.textContent = formatReleaseDate(
          locale,
          released.getAttribute("data-released"),
        );
      }

      rewriteLinks();
    }

    function applyThemeState() {
      const sunIcon = root.querySelector("#sunIco");
      const moonIcon = root.querySelector("#moonIco");
      const themeButton = root.querySelector("#themeBtn");

      if (sunIcon) {
        sunIcon.style.display = isDark ? "none" : "block";
      }

      if (moonIcon) {
        moonIcon.style.display = isDark ? "block" : "none";
      }

      if (themeButton) {
        const label = isDark
          ? locale === "de"
            ? "Zum hellen Design wechseln"
            : "Switch to light theme"
          : locale === "de"
            ? "Zum dunklen Design wechseln"
            : "Switch to dark theme";

        themeButton.setAttribute("aria-label", label);
        themeButton.setAttribute("title", label);
        themeButton.setAttribute("aria-pressed", String(isDark));
      }
    }

    function applyShots() {
      const narrow = window.matchMedia("(max-width: 860px)").matches;

      qsa(".sc").forEach((img) => {
        let key = isDark ? "dark" : "light";

        if (narrow && img.dataset[`${key}M`]) {
          key = `${key}M`;
        }

        const base = img.dataset[key];

        if (!base) {
          return;
        }

        const localized =
          locale === "de"
            ? base.replace("screenshots/", "screenshots/de/")
            : base;

        shotSrc(img, localized, base);
      });
    }

    function syncCodeScroll() {
      qsa(".code-block").forEach((el) => {
        if (el.scrollWidth > el.clientWidth + 1) {
          el.setAttribute("tabindex", "0");
          el.setAttribute("role", "group");
          el.setAttribute("aria-label", t.code_label);
        } else {
          el.removeAttribute("tabindex");
          el.removeAttribute("role");
          el.removeAttribute("aria-label");
        }
      });
    }

    function wireRevealObserver() {
      if (!("IntersectionObserver" in window)) {
        qsa(".reveal").forEach((el) => el.classList.add("vis"));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("vis");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -40px 0px",
        },
      );

      qsa(".reveal").forEach((el) => observer.observe(el));
      cleanupFns.push(() => observer.disconnect());
    }

    function wireMobileCta() {
      const hero = root.querySelector("#top");
      const pill = root.querySelector(".mobile-cta");

      if (!pill) {
        return;
      }

      if (!hero || !("IntersectionObserver" in window)) {
        pill.classList.add("show");
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            pill.classList.toggle("show", !entry.isIntersecting);
          });
        },
        {
          rootMargin: "-70px 0px 0px 0px",
        },
      );

      observer.observe(hero);
      cleanupFns.push(() => observer.disconnect());
    }

    function flashCopyState(button, cssClass, key) {
      const span = button.querySelector("span");
      button.classList.add(cssClass);

      if (span) {
        span.textContent = t[key] || key;
      }

      const timeoutId = window.setTimeout(() => {
        button.classList.remove(cssClass);

        if (span) {
          span.textContent = t.copy || "Copy";
        }
      }, 2000);

      cleanupFns.push(() => window.clearTimeout(timeoutId));
    }

    function legacyCopy(text) {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.top = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand("copy");
        document.body.removeChild(textarea);
        return copied;
      } catch {
        return false;
      }
    }

    function selectCopySource(button) {
      const host = button.closest(".code-wrap") || button.parentNode;
      const el =
        host?.querySelector(".code-block") || host?.querySelector("span");

      if (!el) {
        return;
      }

      try {
        const range = document.createRange();
        range.selectNodeContents(el);
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
      } catch {
        // Ignore selection failures.
      }
    }

    function wireCopyButtons() {
      qsa(".copy-btn").forEach((button) => {
        addListener(button, "click", () => {
          const text = button.getAttribute("data-copy");

          if (!text) {
            return;
          }

          const onOk = () => flashCopyState(button, "copied", "copied");
          const onFail = () => {
            if (legacyCopy(text)) {
              onOk();
              return;
            }

            selectCopySource(button);
            flashCopyState(button, "failed", "copyfail");
          };

          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(onOk).catch(onFail);
          } else {
            onFail();
          }
        });
      });
    }

    function wireCarousel() {
      const track = root.querySelector("#track");

      if (!track) {
        return;
      }

      let pointerDown = false;
      let startX = 0;
      let initialScroll = 0;
      const bar = root.querySelector("#carBar");
      const buttons = qsa(".car-btn");

      const sync = () => {
        const max = track.scrollWidth - track.clientWidth;
        const frac = track.clientWidth / track.scrollWidth;

        if (bar) {
          const clamped = Math.max(0.08, Math.min(1, frac || 1));
          const pos =
            max > 0 ? (track.scrollLeft / max) * (1 - clamped) * 100 : 0;
          bar.style.transform = `translateX(${pos}%) scaleX(${clamped})`;
        }

        buttons.forEach((button) => {
          const dir = Number(button.getAttribute("data-dir"));
          button.disabled =
            max <= 1 ||
            (dir < 0 ? track.scrollLeft <= 1 : track.scrollLeft >= max - 1);
        });
      };

      addListener(track, "pointerdown", (event) => {
        pointerDown = true;
        startX = event.pageX;
        initialScroll = track.scrollLeft;
        track.style.cursor = "grabbing";
      });

      const onPointerUp = () => {
        pointerDown = false;
        track.style.cursor = "";
      };

      addListener(window, "pointerup", onPointerUp);

      addListener(track, "pointermove", (event) => {
        if (!pointerDown) {
          return;
        }

        track.scrollLeft = initialScroll - (event.pageX - startX);
      });

      buttons.forEach((button) => {
        addListener(button, "click", () => {
          const item = track.querySelector(".carousel-item");
          const gap =
            parseFloat(
              getComputedStyle(track).columnGap || getComputedStyle(track).gap,
            ) || 0;
          const step = item
            ? item.getBoundingClientRect().width + gap
            : track.clientWidth * 0.8;

          track.scrollBy({
            left: Number(button.getAttribute("data-dir")) * step,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "auto"
              : "smooth",
          });
        });
      });

      addListener(track, "scroll", sync, { passive: true });
      addListener(window, "resize", sync);
      sync();
    }

    function wireToTop() {
      const button = root.querySelector("#toTop");

      if (!button) {
        return;
      }

      const sync = () => {
        button.classList.toggle("show", window.scrollY > 800);
      };

      addListener(window, "scroll", sync, { passive: true });
      sync();
    }

    applyLang();
    applyThemeState();
    applyShots();
    syncCodeScroll();
    wireRevealObserver();
    wireMobileCta();
    wireCopyButtons();
    wireCarousel();
    wireToTop();

    const themeButton = root.querySelector("#themeBtn");
    if (themeButton) {
      addListener(themeButton, "click", () => {
        setColorMode(isDark ? "light" : "dark");
      });
    }

    const langButton = root.querySelector("#langBtn");
    if (langButton) {
      addListener(langButton, "click", () => {
        window.location.assign(alternateHomeUrl);
      });
    }

    const onResize = () => {
      applyShots();
      syncCodeScroll();
    };

    addListener(window, "resize", onResize);

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, [
    colorMode,
    datenschutzUrl,
    docsIntroUrl,
    englishHomeUrl,
    germanHomeUrl,
    impressumUrl,
    installUrl,
    locale,
    setColorMode,
    t,
  ]);

  return (
    <div
      ref={rootRef}
      className="yv-homepage"
      dangerouslySetInnerHTML={{ __html: template }}
    />
  );
}

export default function Home() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale === "de" ? "de" : "en";
  const t = homepageTranslations[locale];
  const siteCssHref = useBaseUrl("/assets/site.css");
  const homeCssHref = useBaseUrl("/assets/homepage.css");
  const datenschutzUrl = useBaseUrl("/datenschutz");
  const docsIntroUrl = useBaseUrl("/docs");
  const impressumUrl = useBaseUrl("/impressum");
  const installUrl = useBaseUrl("/quick-start");
  const englishHomeUrl = "/";
  const germanHomeUrl = "/de/";
  const templateSource = useMemo(
    () =>
      homepageTemplate
        .replace(
          /<!-- The fixed bar[\s\S]*?<\/header>\s*(?=<!-- HERO -->)/,
          "",
        )
        .replace(
          /<!-- FOOTER -->\s*<\/main>\s*<footer>[\s\S]*?<\/footer>\s*/,
          "</main>\n",
        ),
    [],
  );

  return (
    <Layout
      title={
        locale === "de"
          ? "Yuvomi - Der selbstgehostete Familienplaner"
          : "Yuvomi - The Self-Hosted Family Planner"
      }
      description={
        locale === "de"
          ? "Ein datenschutzfreundlicher, selbstgehosteter Familienplaner mit Aufgaben, Kalender, Budget und Einkauf an einem privaten Ort."
          : "A privacy-first, self-hosted family planner with tasks, calendar, budget, and shopping in one private home."
      }
      wrapperClassName="yv-homepage-layout"
    >
      <Head>
        <link rel="stylesheet" href={siteCssHref} />
        <link rel="stylesheet" href={homeCssHref} />
      </Head>
      <HomePageContent
        datenschutzUrl={datenschutzUrl}
        docsIntroUrl={docsIntroUrl}
        englishHomeUrl={englishHomeUrl}
        germanHomeUrl={germanHomeUrl}
        impressumUrl={impressumUrl}
        installUrl={installUrl}
        locale={locale}
        t={t}
        templateSource={templateSource}
      />
    </Layout>
  );
}
