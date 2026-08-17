const { themes } = require("prism-react-renderer");

function normalizeBaseUrl(value) {
  if (!value || value === "/") {
    return "/";
  }

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.endsWith("/")
    ? withLeadingSlash
    : `${withLeadingSlash}/`;
}

const githubRepository = process.env.GITHUB_REPOSITORY || "";
const [githubOwner = "", githubRepo = ""] = githubRepository.split("/");
const isGithubUserOrOrgPage =
  githubOwner &&
  githubRepo &&
  githubRepo.toLowerCase() === `${githubOwner.toLowerCase()}.github.io`;

const siteUrl =
  process.env.DOCS_SITE_URL ||
  (githubOwner ? `https://${githubOwner}.github.io` : "http://localhost");

const siteBaseUrl = normalizeBaseUrl(
  process.env.DOCS_BASE_URL ||
    (githubOwner && githubRepo
      ? isGithubUserOrOrgPage
        ? "/"
        : `/${githubRepo}/`
      : "/"),
);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Yuvomi",
  tagline: "Clear documentation for everyday household workflows.",
  favicon: "img/logo.svg",

  url: siteUrl,
  baseUrl: siteBaseUrl,
  trailingSlash: false,

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // i18n: {
  //   defaultLocale: "en",
  //   // locales: ["en", "de"],
  //   // localeConfigs: {
  //   //   en: {
  //   //     label: "English",
  //   //     htmlLang: "en",
  //   //   },
  //   //   de: {
  //   //     label: "Deutsch",
  //   //     htmlLang: "de",
  //   //   },
  //   // },
  // },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        docsRouteBasePath: ["/docs"],
        indexBlog: false,
        hashed: true,
        language: ["en", "de"],
      },
    ],
  ],

  themeConfig: {
    image: "img/og-image.png",
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Yuvomi",
      logo: {
        alt: "Yuvomi",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/quick-start",
          position: "left",
          label: "Quick Start",
        },
        {
          type: "docSidebar",
          sidebarId: "docSidebar",
          position: "left",
          label: "Docs",
        },
        {
          type: "search",
          position: "right",
        },
        // {
        //   type: "localeDropdown",
        //   position: "right",
        // },
        {
          href: "https://github.com/ulsklyc/yuvomi",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Project",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ulsklyc/yuvomi",
            },
            {
              label: "Contributing",
              href: "https://github.com/ulsklyc/yuvomi/blob/main/CONTRIBUTING.md",
            },
            {
              label: "Changelog",
              href: "https://github.com/ulsklyc/yuvomi/blob/main/CHANGELOG.md",
            },
            {
              label: "MIT License",
              href: "https://github.com/ulsklyc/yuvomi/blob/main/LICENSE",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Impressum (DE)",
              to: "/impressum",
            },
            {
              label: "Datenschutz (DE)",
              to: "/datenschutz",
            },
          ],
        },
      ],
      copyright: `Copyright (c) ${new Date().getFullYear()} Yuvomi.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  },
};

module.exports = config;
