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
  title: "Yuvomi Docs",
  tagline:
    "Community-maintained user guide for Yuvomi. Unofficial and not affiliated with the official Yuvomi project.",
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

  presets: [
    [
      "classic",
      {
        docs: {
          path: "guide",
          routeBasePath: "guide",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl: "https://github.com/Kyrodan/yuvomi-docs/edit/main/",
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
      "@docusaurus/plugin-content-docs",
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        editUrl: "https://github.com/Kyrodan/yuvomi-docs/edit/main/",
      },
    ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        docsRouteBasePath: ["/guide", "/community"],
        docsDir: ["guide", "community"],
        indexBlog: false,
        hashed: true,
        language: ["en"],
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
      title: "Yuvomi Docs",
      logo: {
        alt: "Yuvomi Docs",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "guideSidebar",
          position: "left",
          label: "Guide",
        },
        {
          type: "docSidebar",
          sidebarId: "defaultSidebar",
          docsPluginId: "community",
          position: "left",
          label: "Community",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "This guide",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Kyrodan/yuvomi-docs",
            },
            {
              label: "MIT License",
              href: "https://github.com/Kyrodan/yuvomi-docs/blob/main/LICENSE",
            },
          ],
        },
        {
          title: "Official Yuvomi project",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ulsklyc/yuvomi",
            },
            {
              label: "Website",
              href: "https://yuvomi.cloud",
            },
            {
              label: "Why this guide is separate",
              href: "https://github.com/ulsklyc/yuvomi/discussions/799#discussioncomment-18233953",
            },
          ],
        },
      ],
      copyright: `This is an unofficial, community-maintained guide and is not affiliated with or endorsed by Yuvomi. &copy; ${new Date().getFullYear()} contributors.`,
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
