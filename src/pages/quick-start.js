import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./quick-start.module.css";

const PLATFORM_ALIASES = {
  docker: "docker",
  podman: "docker",
  proxmox: "proxmox",
  installer: "installer",
  source: "source",
  truenas: "truenas",
  umbrel: "umbrel",
  unraid: "unraid",
};

const PREREQUISITES = [
  {
    title: "Docker or Podman",
    description:
      "Packages the app so you do not need to install anything else. Free for personal use. Podman (RHEL/Fedora/CentOS Stream) works too - rootless and SELinux-ready.",
    hint: null,
    links: [
      {
        label: "macOS",
        href: "https://docs.docker.com/desktop/install/mac-install/",
      },
      {
        label: "Windows",
        href: "https://docs.docker.com/desktop/install/windows-install/",
      },
      {
        label: "Linux",
        href: "https://docs.docker.com/engine/install/",
      },
      {
        label: "Podman",
        href: "https://podman.io/docs/installation",
      },
    ],
  },
  {
    title: "Terminal",
    description:
      "A command-line interface to type a few commands. Built into every OS - no extra install needed.",
    hint: "macOS: Terminal - Windows: PowerShell - Linux: bash",
    links: [],
  },
  {
    title: "System",
    description:
      "256 MB RAM minimum. Runs on a Raspberry Pi, NAS, home server, or any desktop machine.",
    hint: "~500 MB disk for the Docker image",
    links: [],
  },
];

const PLATFORM_ORDER = [
  "docker",
  "proxmox",
  "installer",
  "source",
  "truenas",
  "umbrel",
  "unraid",
];

const GUIDE_LINKS = {
  fullGuide:
    "https://github.com/ulsklyc/yuvomi/blob/main/docs/installation.md",
  https:
    "https://github.com/ulsklyc/yuvomi/blob/main/docs/installation.md#https--reverse-proxy-nginx",
  environment:
    "https://github.com/ulsklyc/yuvomi/blob/main/docs/installation.md#environment-variables",
  sso: "https://github.com/ulsklyc/yuvomi/blob/main/docs/installation.md#sso--openid-connect-optional",
  backups:
    "https://github.com/ulsklyc/yuvomi/blob/main/docs/installation.md#backup--restore",
  documents:
    "https://github.com/ulsklyc/yuvomi/blob/main/docs/installation.md#local-folder-document-storage-optional",
  email:
    "https://github.com/ulsklyc/yuvomi/blob/main/docs/installation.md#email--smtp-optional",
  fixer:
    "https://github.com/ulsklyc/yuvomi/blob/main/docs/installation.md#subscription-currency-conversion-optional",
  immich:
    "https://github.com/ulsklyc/yuvomi/blob/main/docs/immich-screensaver.md",
};

const OPTIONALS = [
  {
    title: "HTTPS & network access",
    description:
      "Reach Yuvomi from other devices or the internet: set up Nginx as a reverse proxy with a free Let's Encrypt certificate.",
    href: GUIDE_LINKS.https,
  },
  {
    title: "Weather widget",
    description:
      "Show local weather on the dashboard via Open-Meteo, no API key. Set WEATHER_LAT and WEATHER_LON to your coordinates.",
    href: null,
  },
  {
    title: "Calendar & contact sync",
    description:
      "Two-way sync with Google Calendar (OAuth) and multi-account CalDAV/CardDAV (iCloud, Nextcloud, Radicale). Reminder lists mirror into Tasks or Shopping in both directions.",
    href: GUIDE_LINKS.environment,
  },
  {
    title: "SSO / OpenID Connect",
    description:
      "Single sign-on via any OIDC provider (Authentik, Keycloak, Google, Microsoft Entra). Set the four OIDC_* vars and a 'Sign in with SSO' button appears automatically.",
    href: GUIDE_LINKS.sso,
  },
  {
    title: "Automated backups",
    description:
      "Scheduled backups run by default - daily at 2 AM, 7 copies kept. Optionally upload each backup to a WebDAV server and manage restore in Settings -> Administration -> Backup and restore.",
    href: GUIDE_LINKS.backups,
  },
  {
    title: "Document storage",
    description:
      "Store new document files and calendar attachments outside SQLite in a mounted host folder, on WebDAV, or in Google Drive. Back up every external binary target separately.",
    href: GUIDE_LINKS.documents,
  },
  {
    title: "Email / SMTP",
    description:
      "Configure an outgoing SMTP server to enable the self-service 'Forgot password' flow and password reset links.",
    href: GUIDE_LINKS.email,
  },
  {
    title: "Live currency conversion",
    description:
      "Budget -> Subscriptions works without external services. Set FIXER_API_KEY to convert subscriptions billed in foreign currencies into your household base currency.",
    href: GUIDE_LINKS.fixer,
  },
  {
    title: "Immich photo screensaver",
    description:
      "Let an idle wall tablet show photos from your own Immich library instead of a fixed dashboard. Configure it in Settings -> Administration -> Immich.",
    href: GUIDE_LINKS.immich,
  },
  {
    title: "Updates",
    description:
      "Pull the latest image and restart with docker compose pull && docker compose up -d. Your data persists across updates.",
    href: null,
  },
];

const TROUBLESHOOTING = [
  {
    title: "Port 3000 is already in use",
    description:
      "Another application is using port 3000. Either stop it, or change the port in docker-compose.yml.",
    code: "lsof -i :3000\n# find what is using the port",
    note:
      "Or edit docker-compose.yml and change 3000:3000 to for example 8080:3000.",
  },
  {
    title: "Docker: Permission denied",
    description:
      "Add your user to the Docker group, then log out and back in.",
    code: "sudo usermod -aG docker $USER",
    note: null,
  },
  {
    title: "Container starts but the page is not reachable",
    description: "Check the container status and logs:",
    code:
      'docker compose ps        # should show "Up" and "healthy"\n' +
      "docker compose logs      # look for error messages",
    note: "Accessing from another device? Check your firewall rules.",
  },
  {
    title: "Database encryption error",
    description:
      "The DB_ENCRYPTION_KEY in your .env is missing or does not match the key used when the database was created. On a fresh install you can reset:",
    code: "docker compose down -v\ndocker compose up -d",
    note:
      "docker compose down -v deletes all data. Only use this on a fresh install with no data.",
  },
  {
    title: "Nginx shows 502 Bad Gateway",
    description: "Nginx cannot reach the container. Check it is running and the port matches:",
    code:
      'docker compose ps\ndocker compose logs | grep "Server running"',
    note:
      "Ensure the proxy_pass port in your Nginx config matches the host port in docker-compose.yml (default: 3000).",
  },
];

const PLATFORMS = {
  docker: {
    id: "docker",
    label: "Docker / Podman",
    badge: null,
    tone: "docker",
    kind: "terminal",
    intro:
      "No Git, no build step - just two files and a single command. Requires only Docker or Podman. For Podman use podman-compose.yml.",
    steps: [
      {
        title: "Download the configuration files",
        body: (
          <p>
            Run these two commands. They download the Docker configuration and
            the template for your settings.
          </p>
        ),
        blocks: [
          "curl -O https://raw.githubusercontent.com/ulsklyc/yuvomi/main/docker-compose.yml\n" +
            "curl -O https://raw.githubusercontent.com/ulsklyc/yuvomi/main/.env.example",
        ],
      },
      {
        title: "Create your configuration",
        body: (
          <>
            <p>
              Copy the template, then open <code>.env</code> in a text editor.
              <code>SESSION_SECRET</code> is required;{" "}
              <code>DB_ENCRYPTION_KEY</code> is optional but permanent.
            </p>
            <p>
              Generate a secure value for each secret by running this twice -
              paste one result as <code>SESSION_SECRET</code> and one as{" "}
              <code>DB_ENCRYPTION_KEY</code>.
            </p>
          </>
        ),
        blocks: ["cp .env.example .env", "openssl rand -hex 32"],
        callout: {
          tone: "warning",
          text:
            "Keep a backup of your .env file somewhere safe. If you lose the DB_ENCRYPTION_KEY, your data cannot be recovered.",
        },
      },
      {
        title: "Start the container",
        body: (
          <p>
            Docker downloads the Yuvomi image and starts it in the background.
            The first download takes a minute.
          </p>
        ),
        blocks: ["docker compose up -d"],
        callout: {
          tone: "success",
          text:
            "Check the logs with docker compose logs -f. You should see 'Server running on port 3000'. The container keeps running in the background.",
        },
      },
      {
        title: "Create your admin account",
        body: (
          <p>
            On the first visit, Yuvomi walks you through creating your admin
            account right in the browser. Prefer the command line? Run the
            setup wizard instead.
          </p>
        ),
        blocks: ["docker compose exec yuvomi node setup.js"],
      },
    ],
  },
  proxmox: {
    id: "proxmox",
    label: "Proxmox",
    badge: null,
    tone: "proxmox",
    kind: "terminal",
    intro:
      "There is no Yuvomi entry in a Proxmox catalog. What works is a small Debian LXC that runs the same Docker setup as everywhere else.",
    steps: [
      {
        title: "Create an unprivileged LXC",
        body: (
          <>
            <p>
              Run this on the Proxmox host shell. <code>nesting=1</code> is what
              lets Docker run inside an unprivileged container; without it the
              daemon will not start. Adjust the ID, storage and bridge to match
              your setup.
            </p>
            <p>
              Prefer a full VM? That works too and needs no nesting flag:
              install Debian as usual and continue from step 2.
            </p>
          </>
        ),
        blocks: [
          "pct create 110 local:vztmpl/debian-13-standard_13.0-1_amd64.tar.zst \\\n" +
            "  --hostname yuvomi --cores 2 --memory 1024 --rootfs local-lvm:8 \\\n" +
            "  --net0 name=eth0,bridge=vmbr0,ip=dhcp \\\n" +
            "  --features nesting=1 --unprivileged 1 --onboot 1\n" +
            "pct start 110 && pct enter 110",
        ],
      },
      {
        title: "Install Docker inside the container",
        body: (
          <p>
            Install from Debian&apos;s own repositories, so there is no install
            script piped into a shell.
          </p>
        ),
        blocks: ["apt update && apt install -y docker.io docker-compose-v2 curl openssl"],
      },
      {
        title: "Follow the Docker steps",
        body: (
          <p>
            From here nothing is Proxmox-specific: the Docker / Podman path
            applies unchanged. Afterwards Yuvomi answers on the container&apos;s
            IP at port 3000 -{" "}
            <code>pct exec 110 -- hostname -I</code> on the host prints it.
          </p>
        ),
        blocks: [],
      },
    ],
  },
  installer: {
    id: "installer",
    label: "Web Installer",
    badge: null,
    tone: "installer",
    kind: "terminal",
    intro:
      "A localized browser wizard detects your container engine, configures your .env, starts the container, and creates your admin account.",
    introDetails: (
      <p className={styles.panelMeta}>
        This path additionally needs{" "}
        <a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">
          Git
        </a>{" "}
        and{" "}
        <a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer">
          Node.js 18+
        </a>{" "}
        on the host, because the wizard runs from the repository. Every other
        path needs only a container engine.
      </p>
    ),
    steps: [
      {
        title: "Clone the repository",
        body: <p>Open your terminal and clone Yuvomi to a folder of your choice.</p>,
        blocks: [
          "git clone https://github.com/ulsklyc/yuvomi.git\ncd yuvomi",
        ],
      },
      {
        title: "Start the installer",
        body: (
          <p>
            Run this command from the repository root. The installer server
            starts on port 8090.
          </p>
        ),
        blocks: ["node tools/installer/install-server.js"],
      },
      {
        title: "Open the wizard in your browser",
        body: (
          <>
            <p>
              Navigate to the following address. The wizard guides you through
              configuration, container startup, and admin account creation.
            </p>
            <p>
              The installer shuts down automatically after setup completes. Your
              Yuvomi instance keeps running via Docker or Podman.
            </p>
          </>
        ),
        blocks: ["http://localhost:8090"],
      },
    ],
  },
  source: {
    id: "source",
    label: "From source",
    badge: null,
    tone: "source",
    kind: "terminal",
    intro:
      "For contributors or anyone who wants to run a custom version. Requires Git. The first build takes a few minutes.",
    steps: [
      {
        title: "Clone the repository",
        body: null,
        blocks: [
          "git clone https://github.com/ulsklyc/yuvomi.git\ncd yuvomi",
        ],
      },
      {
        title: "Create your configuration",
        body: (
          <p>
            Copy the template, then open <code>.env</code> in a text editor.
            <code>SESSION_SECRET</code> is required;{" "}
            <code>DB_ENCRYPTION_KEY</code> is optional but permanent.
          </p>
        ),
        blocks: [
          "cp .env.example .env\n" +
            "openssl rand -hex 32\n" +
            "# run twice -> SESSION_SECRET + DB_ENCRYPTION_KEY",
        ],
      },
      {
        title: "Build and start",
        body: (
          <p>
            The <code>--build</code> flag compiles the Docker image locally.
            This takes a few minutes the first time.
          </p>
        ),
        blocks: ["docker compose up -d --build"],
      },
      {
        title: "Create your admin account",
        body: (
          <p>
            On the first visit, Yuvomi walks you through creating your admin
            account right in the browser. Prefer the command line? Run the
            setup wizard instead.
          </p>
        ),
        blocks: ["docker compose exec yuvomi node setup.js"],
      },
    ],
  },
  truenas: {
    id: "truenas",
    label: "TrueNAS",
    badge: "1-click",
    tone: "truenas",
    kind: "store",
    intro:
      "No terminal required. Yuvomi is in the TrueNAS SCALE Community Apps Catalog - install it directly from the TrueNAS web UI in a few clicks.",
    steps: [
      {
        title: "Open the Apps Catalog",
        body: (
          <p>
            In your TrueNAS SCALE web UI, go to Apps -&gt; Discover Apps and
            search for Yuvomi.
          </p>
        ),
        blocks: [],
      },
      {
        title: "Configure and install",
        body: (
          <p>
            Click Install. Set a strong value for Session Secret (required) and
            Database Encryption Key (recommended - back it up, it cannot be
            recovered). Adjust the port and storage paths if needed, then
            Install.
          </p>
        ),
        blocks: [],
      },
      {
        title: "Open the WebUI",
        body: (
          <p>
            Once the app status shows Running, click WebUI in the Apps
            overview. The first visit walks you through creating your admin
            account directly in the browser.
          </p>
        ),
        blocks: [],
      },
    ],
  },
  umbrel: {
    id: "umbrel",
    label: "Umbrel",
    badge: "1-click",
    tone: "umbrel",
    kind: "store",
    intro:
      "No terminal required. Install Yuvomi straight from the Umbrel App Store - everything runs on, and stays on, your Umbrel.",
    steps: [
      {
        title: "Open the App Store",
        body: (
          <p>
            In your Umbrel dashboard, open the App Store and search for
            Yuvomi.
          </p>
        ),
        blocks: [],
      },
      {
        title: "Install with one click",
        body: (
          <p>
            Click Install. Umbrel pulls the image and starts the container for
            you - no configuration files to edit.
          </p>
        ),
        blocks: [],
      },
      {
        title: "Open Yuvomi",
        body: (
          <p>
            Launch Yuvomi from your Umbrel home screen. The first visit walks
            you through creating your admin account directly in the browser.
          </p>
        ),
        blocks: [],
      },
    ],
  },
  unraid: {
    id: "unraid",
    label: "Unraid",
    badge: "1-click",
    tone: "unraid",
    kind: "store",
    intro:
      "No terminal required. Yuvomi ships as a Community Applications template - add it straight from the Unraid Apps tab.",
    steps: [
      {
        title: "Open Community Applications",
        body: (
          <p>
            In Unraid, open the Apps tab (the Community Applications plugin)
            and search for Yuvomi.
          </p>
        ),
        blocks: [],
      },
      {
        title: "Configure the template",
        body: (
          <p>
            Click Install. Set <code>SESSION_SECRET</code> (required) and{" "}
            <code>DB_ENCRYPTION_KEY</code> (recommended - back it up). Adjust
            the WebUI port and the appdata path if needed.
          </p>
        ),
        blocks: [],
      },
      {
        title: "Apply and open",
        body: (
          <p>
            Click Apply. Once the container is running, click the Yuvomi icon
            -&gt; WebUI. The first visit walks you through creating your admin
            account.
          </p>
        ),
        blocks: [],
      },
    ],
  },
};

function CopyButton({ text, variant = "code" }) {
  const [status, setStatus] = useState("idle");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 1400);
    } catch {
      setStatus("failed");
      window.setTimeout(() => setStatus("idle"), 1600);
    }
  }

  return (
    <button
      className={clsx(
        styles.copyButton,
        variant === "inline" && styles.copyButtonInline,
        status === "copied" && styles.copyButtonCopied,
        status === "failed" && styles.copyButtonFailed,
      )}
      type="button"
      onClick={handleCopy}
    >
      {status === "copied"
        ? "Copied"
        : status === "failed"
          ? "Unavailable"
          : "Copy"}
    </button>
  );
}

function CodeBlock({ code }) {
  return (
    <div className={styles.codeWrap}>
      <pre className={styles.codeBlock}>
        <code>{code}</code>
      </pre>
      <CopyButton text={code} />
    </div>
  );
}

function StepCallout({ callout }) {
  if (!callout) {
    return null;
  }

  return (
    <div
      className={clsx(styles.callout, {
        [styles.calloutSuccess]: callout.tone === "success",
        [styles.calloutWarning]: callout.tone === "warning",
        [styles.calloutInfo]: callout.tone === "info",
      })}
    >
      {callout.text}
    </div>
  );
}

export default function InstallationPage() {
  const [activePlatformId, setActivePlatformId] = useState("docker");

  useEffect(() => {
    function syncFromHash() {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      const nextId = PLATFORM_ALIASES[hash];
      if (nextId) {
        setActivePlatformId(nextId);
      }
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  const activePlatform = useMemo(
    () => PLATFORMS[activePlatformId] ?? PLATFORMS.docker,
    [activePlatformId],
  );

  function selectPlatform(platformId) {
    setActivePlatformId(platformId);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${platformId}`);
    }
  }

  return (
    <Layout
      title="Installation"
      description="Step-by-step installation guide for Yuvomi. Docker, Podman, TrueNAS, Umbrel or Unraid - get your self-hosted family planner running in minutes."
      wrapperClassName="yv-installation-page"
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Installation</p>
            <h1 className={styles.heroTitle}>
              Install Yuvomi <em>your way.</em>
            </h1>
            <p className={styles.heroText}>
              Get your self-hosted family planner running in a few minutes.
              Pick a one-click app-store install, a two-command Docker setup, or
              the guided web installer.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#platforms">
                Choose your platform
              </a>
              <a
                className={styles.secondaryButton}
                href={GUIDE_LINKS.fullGuide}
                target="_blank"
                rel="noreferrer"
              >
                Full technical guide
              </a>
            </div>
            <div className={styles.timeBadge}>~10 minutes</div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What you need</h2>
            <p className={styles.sectionText}>
              Yuvomi runs as a Docker or Podman container, so you do not need to
              install Node.js or any other runtime. Just a container engine, and
              you are good to go. App-store installs handle even this for you;
              the guided web installer is the one path that also needs Git and
              Node.js.
            </p>
            <div className={styles.cardGrid}>
              {PREREQUISITES.map((item) => (
                <article key={item.title} className={styles.infoCard}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.hint ? <p className={styles.cardHint}>{item.hint}</p> : null}
                  {item.links.length ? (
                    <div className={styles.pillRow}>
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          className={styles.pillLink}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.altSection)} id="platforms">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Choose your platform</h2>
            <p className={styles.sectionText}>
              Seven ways to install. Pick the one that matches your setup; the
              result is the same private Yuvomi instance.
            </p>

            <div className={styles.tabGroupLabel}>In a terminal</div>
            <div className={styles.tabRow} role="tablist" aria-label="Installation options">
              {PLATFORM_ORDER.slice(0, 4).map((platformId) => {
                const platform = PLATFORMS[platformId];
                return (
                  <button
                    key={platform.id}
                    type="button"
                    role="tab"
                    aria-selected={activePlatform.id === platform.id}
                    className={clsx(
                      styles.tabButton,
                      styles[`tone${platform.tone[0].toUpperCase()}${platform.tone.slice(1)}`],
                      activePlatform.id === platform.id && styles.tabButtonActive,
                    )}
                    onClick={() => selectPlatform(platform.id)}
                  >
                    <span>{platform.label}</span>
                    {platform.badge ? (
                      <span className={styles.tabBadge}>{platform.badge}</span>
                    ) : null}
                  </button>
                );
              })}
            </div>

            <div className={styles.tabGroupLabel}>One-click app store</div>
            <div className={styles.tabRow} role="tablist" aria-label="One-click installs">
              {PLATFORM_ORDER.slice(4).map((platformId) => {
                const platform = PLATFORMS[platformId];
                return (
                  <button
                    key={platform.id}
                    type="button"
                    role="tab"
                    aria-selected={activePlatform.id === platform.id}
                    className={clsx(
                      styles.tabButton,
                      styles[`tone${platform.tone[0].toUpperCase()}${platform.tone.slice(1)}`],
                      activePlatform.id === platform.id && styles.tabButtonActive,
                    )}
                    onClick={() => selectPlatform(platform.id)}
                  >
                    <span>{platform.label}</span>
                    {platform.badge ? (
                      <span className={styles.tabBadge}>{platform.badge}</span>
                    ) : null}
                  </button>
                );
              })}
            </div>

            <article className={styles.panel}>
              <div className={styles.panelHead}>
                <div>
                  <p className={styles.panelEyebrow}>Current path</p>
                  <h3 className={styles.panelTitle}>{activePlatform.label}</h3>
                </div>
                {activePlatform.badge ? (
                  <span className={styles.panelBadge}>{activePlatform.badge}</span>
                ) : null}
              </div>
              <p className={styles.panelIntro}>{activePlatform.intro}</p>
              {activePlatform.introDetails ?? null}

              <div className={styles.steps}>
                {activePlatform.steps.map((step, index) => (
                  <section key={step.title} className={styles.step}>
                    <div className={styles.stepNumber}>{index + 1}</div>
                    <div className={styles.stepBody}>
                      <h4>{step.title}</h4>
                      <div className={styles.stepText}>{step.body}</div>
                      {step.blocks.map((block) => (
                        <CodeBlock key={block} code={block} />
                      ))}
                      <StepCallout callout={step.callout} />
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <article className={styles.successBox}>
              <p className={styles.successLead}>
                You are installing on <strong>{activePlatform.label}</strong>.
              </p>
              <h2 className={styles.sectionTitle}>You&apos;re all set</h2>
              {activePlatform.kind === "terminal" ? (
                <>
                  <p className={styles.sectionText}>
                    Open your browser and navigate to:
                  </p>
                  <div className={styles.urlBox}>
                    <code>http://localhost:3000</code>
                    <CopyButton text="http://localhost:3000" variant="inline" />
                  </div>
                </>
              ) : (
                <p className={styles.sectionText}>
                  Open Yuvomi the way your app store offers it: the WebUI button
                  on TrueNAS and Unraid, or the Yuvomi tile on your Umbrel home
                  screen. The address is your server&apos;s, not this machine&apos;s.
                </p>
              )}
              <p className={styles.successHint}>
                Log in with the admin credentials you just created. From the
                Settings page you can invite more family members by link, so
                they choose their own password.
              </p>
              <div className={styles.successActions}>
                <a
                  className={styles.primaryButton}
                  href="https://github.com/ulsklyc/yuvomi"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className={styles.secondaryButton}
                  href={GUIDE_LINKS.fullGuide}
                  target="_blank"
                  rel="noreferrer"
                >
                  Full technical guide
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className={clsx(styles.section, styles.altSection)}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Two settings decide your security
            </h2>
            <p className={styles.sectionText}>
              One is mandatory, one is optional but permanent. Everything below
              this section can be changed later; the second of these two cannot.
            </p>
            <p className={styles.scopeText}>
              {activePlatform.kind === "terminal"
                ? "Both live in the .env file you created next to your compose file."
                : "Your app store asked for both in its install form, so there is no .env file to edit. Change them in the app's configuration screen and restart it."}
            </p>
            <div className={styles.settingsGrid}>
              <article className={styles.settingCard}>
                <div className={styles.settingName}>SESSION_SECRET</div>
                <div className={styles.settingMeta}>
                  <strong>Session Secret</strong>
                  <span className={styles.requiredTag}>Required</span>
                </div>
                <p>
                  Signs and verifies login cookies. Use{" "}
                  <code>openssl rand -hex 32</code> to generate a secure value.
                </p>
              </article>
              <article className={styles.settingCard}>
                <div className={styles.settingName}>DB_ENCRYPTION_KEY</div>
                <div className={styles.settingMeta}>
                  <strong>Database Key</strong>
                  <span className={styles.irreversibleTag}>Irreversible</span>
                </div>
                <p>
                  Optional, and strongly recommended if the household will keep
                  health or financial records. Encrypts the whole database with
                  AES-256; generate with <code>openssl rand -hex 32</code>.
                  Leave it empty and the database stays unencrypted. Set it and
                  there is no way back: lose the value and the data can never be
                  opened again.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Go further</h2>
            <p className={styles.sectionText}>
              Once Yuvomi is running, you can set up these extras. All of them
              are environment variables.
            </p>
            <p className={styles.scopeText}>
              {activePlatform.kind === "terminal"
                ? "You set them in the same .env file, then restart with docker compose up -d."
                : "On TrueNAS and Unraid you add them in the app's configuration screen and restart it. On Umbrel they need an override in the app's compose file."}
            </p>
            <div className={styles.optionalGrid}>
              {OPTIONALS.map((item) => (
                <article key={item.title} className={styles.optionalCard}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      Guide
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.altSection)}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Something not working?</h2>
            <p className={styles.sectionText}>
              Most issues have a simple fix. If you are still stuck, open an
              issue on GitHub.
            </p>
            <div className={styles.troubleList}>
              {TROUBLESHOOTING.map((item) => (
                <details key={item.title} className={styles.troubleItem}>
                  <summary>{item.title}</summary>
                  <div className={styles.troubleBody}>
                    <p>{item.description}</p>
                    <CodeBlock code={item.code} />
                    {item.note ? <p className={styles.troubleNote}>{item.note}</p> : null}
                  </div>
                </details>
              ))}
            </div>
            <div className={styles.supportActions}>
              <Link className={styles.secondaryButton} to="/docs/help-support/troubleshooting">
                Docs troubleshooting
              </Link>
              <a
                className={styles.primaryButton}
                href="https://github.com/ulsklyc/yuvomi/issues"
                target="_blank"
                rel="noreferrer"
              >
                Open an issue
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
