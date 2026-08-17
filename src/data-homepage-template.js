export const homepageTemplate = String.raw`<a class="skip-link" href="#main-content" data-t="skip_link">Skip to content</a>

<!-- The fixed bar and the sticky Install pill are this page's persistent chrome.
     Neither used to sit in a landmark: the only <header> was the hero, and that
     is inside <main>, so the page exposed no banner at all and the pill was
     content outside every region. -->
<header class="site-bar">
<nav class="topbar" data-t-aria="nav_main" aria-label="Main">
  <div class="nav-progress" aria-hidden="true"><span id="navBar"></span></div>
  <div class="wrap">
    <a href="#top" class="nav-logo" aria-label="Yuvomi">
      <svg viewBox="0 0 160 160" fill="none" aria-hidden="true"><defs><linearGradient id="g" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#6c3aed"/></linearGradient></defs><rect width="160" height="160" rx="36" fill="url(#g)"/><g fill="white" fill-opacity="0.82"><circle cx="64" cy="72" r="27"/><circle cx="100" cy="78" r="25"/><circle cx="80" cy="106" r="24"/></g></svg>
      Yuvomi
    </a>
    <!-- Vier Laeufe lang gemeldet: 15,2 Bildschirme Desktop und 25,2 mobil ohne
         jede Positionsanzeige und ohne Weg, das Dokument zu ueberfliegen. Die
         Linie darueber beantwortet "wo bin ich", dieses Menue "was kommt noch".
         Als <details> und nicht als Dauerleiste: eine Persuade-Flaeche darf
         ihren ersten Bildschirm nicht an eine Inhaltsangabe verlieren. -->
    <details class="nav-jump" id="navJump">
      <summary aria-label="Jump to a section" data-t-aria="jump_aria"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="15" y2="12"/><line x1="3" y1="18" x2="11" y2="18"/></svg><span data-t="jump_label">Jump to</span></summary>
      <ul>
        <li><a href="#screens" data-t="jump_screens">See it first</a></li>
        <li><a href="#swap" data-t="jump_swap">What it replaces</a></li>
        <li><a href="#handoff" data-t="jump_handoff">How it fits together</a></li>
        <li><a href="#modules" data-t="jump_modules">All the modules</a></li>
        <li><a href="#longevity" data-t="jump_longevity">Before you commit</a></li>
        <li><a href="#install" data-t="jump_install">Install it</a></li>
      </ul>
    </details>
    <div class="nav-right">
      <button class="nav-btn" id="langBtn" type="button" aria-label="Switch language"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg><span id="langLbl">DE</span></button>
      <button class="nav-btn" id="themeBtn" type="button" aria-label="Toggle theme" aria-pressed="false"><svg aria-hidden="true" id="sunIco" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg><svg aria-hidden="true" id="moonIco" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg></button>
      <a href="install.html" class="nav-btn nav-install"><span data-t="nav_install">Install</span></a>
      <a href="https://github.com/ulsklyc/yuvomi" class="nav-btn nav-gh" target="_blank" rel="noopener"><svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg><span data-t="nav_gh">GitHub</span><span id="gh-stars-nav" data-gh-stars>&nbsp;★ 1.3k</span></a>
    </div>
  </div>
</nav>

<!-- Sticky thumb-zone Install CTA (phones only). No aria-label: it carried a
     hardcoded English one that overrode the translated visible text, so a
     German reader's screen reader announced "Install Yuvomi" over "Yuvomi
     installieren". The span is the accessible name. -->
<a href="install.html" class="mobile-cta">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
  <span data-t="hero_install">Install Yuvomi</span>
</a>
</header>

<!-- HERO -->
<main id="main-content" tabindex="-1">
<header class="hero" id="top">
  <div class="hero-glow" aria-hidden="true"></div>
  <div class="wrap">
    <div class="hero-content">
      <div class="hero-badge"><span class="dot"></span><span data-t="hero_badge">Open source · free · no subscriptions</span></div>
      <h1><span data-t="hero_h1_pre">One home</span> <em data-t="hero_h1_em">instead of many subscriptions.</em></h1>
      <!-- Single sign-on, scheduled backups and the API/MCP endpoint were hoisted
           here when they were tertiary cards at the bottom of the module grid.
           They are proper cards now (m_backup, m_api), so hoisting them only
           bought a 38-word spec sheet that ran six lines at max-width: 30ch and
           reached "MCP endpoint" in the first paragraph a family reads. The
           sentence closes on the claim this audience actually came for instead;
           the homelab criteria are one scroll away, in the grid that owns them. -->
      <p class="hero-sub" data-t="hero_sub">The self-hosted family planner: tasks, calendar, budget and shopping on a server you own. For a family, a couple, or just you.</p>
      <div class="hero-actions">
        <a href="install.html" class="btn btn-primary"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg><span data-t="hero_install">Install Yuvomi</span></a>
        <a href="#screens" class="btn btn-secondary"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg><span data-t="hero_demo">See it in action</span></a>
      </div>
      <!-- Drei Chips, nicht fuenf. "MIT-Lizenz" und "24 Sprachen" standen hier
           UND in der Proof-Leiste eine Zeile tiefer; zusammen ergaben Hero-Tags
           und Proof-Leiste elf Metadaten-Chips im ersten Bildschirm, von denen
           keiner sagte, was das Produkt tut. Was hier bleibt, sagt die
           Proof-Leiste nicht. -->
      <div class="hero-tags">
        <span class="tag">Docker · Podman</span>
        <span class="tag">PWA</span>
        <span class="tag" data-t="tag_nocloud">No cloud required</span>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-frame">
        <!-- No src here on purpose. This is the LCP image; with a src the preload
             scanner starts the English light PNG before applyShots() can pick the
             right theme and locale, and that first download is thrown away. The
             inline script below runs while the parser is still here, so exactly
             one file is ever fetched. noscript keeps it visible without JS.

             Die Breitenpruefung steht mit im Inline-Skript, nicht nur in
             applyShots(): der Hero hat seit der Re-Kritik Mobilvarianten, und
             ohne sie hier haette das Skript erst die 2752px-Desktopaufnahme
             geholt und applyShots sie danach ersetzt - also genau der doppelte
             Download, den dieser Kommentar zu verhindern verspricht. -->
        <img class="sc" data-light="screenshots/dashboard-light-web.png" data-dark="screenshots/dashboard-dark-web.png" data-light-m="screenshots/dashboard-light-mobile.png" data-dark-m="screenshots/dashboard-dark-mobile.png" alt="Yuvomi dashboard showing today's tasks, calendar, meals and shopping at a glance" data-alt-t="alt_hero" width="900" height="675" loading="eager" decoding="async" id="heroShot">
        <noscript><img class="sc" src="screenshots/dashboard-light-web.png" alt="Yuvomi dashboard showing today's tasks, calendar, meals and shopping at a glance" width="900" height="675"></noscript>
      </div>
      <div class="hero-float">
        <img class="sc" data-light="screenshots/tasks-light-mobile.png" data-dark="screenshots/tasks-dark-mobile.png" src="screenshots/tasks-light-mobile.png" alt="Yuvomi tasks on mobile" data-alt-t="alt_hero_m" loading="lazy" width="440" height="956">
      </div>
    </div>
  </div>
</header>

<!-- PROOF -->
<div class="proof">
  <div class="wrap">
    <span id="gh-stars-proof" data-gh-stars>★ 1.3k ·</span>
    <span><b>18</b> <span data-t="proof_modules">modules</span></span>
    <span class="sep">·</span>
    <span><b>24</b> <span data-t="proof_langs">languages</span></span>
    <span class="sep">·</span>
    <!-- "0 trackers" is the strongest claim on the page for a privacy product and
         stays on phones, where it used to be the one that got dropped. -->
    <a class="proof-link" href="privacy.html" data-href-en="privacy.html" data-href-de="datenschutz.html"><b>0</b> <span data-t="proof_telemetry">trackers</span></a>
    <span class="sep">·</span>
    <span data-t="proof_mit">MIT licensed</span>
    <span class="sep ver">·</span>
    <span class="ver"><b>v2.16.1</b></span>
  </div>
</div>

<!-- GALLERY - show before telling. This sits at position 2 because the first
     section that shows the product instead of describing it used to start at 71%
     scroll depth, and the hero's own second button existed to skip past the
     argument to reach it. Four screens at full content width: the ones that make
     up the daily loop. The caption does the selling; the module accent ties each
     one back to the app's colour vocabulary. -->
<section class="gallery" id="screens">
  <div class="wrap">
    <div class="sec-head lead reveal">
      <span class="eyebrow" data-t="gal_eyebrow">See it first</span>
      <h2 class="sec-title" data-t="gal_title">This is the whole thing, <em>on one screen.</em></h2>
      <p class="sec-desc" data-t="gal_desc">No demo account, no sales call. The screens your family opens every day, at the size you will actually use them. The rest are further down.</p>
    </div>
    <div class="gal-list">
      <figure class="gal-item reveal" style="--m: var(--accent)">
        <figcaption class="gal-cap">
          <span class="gal-kicker" data-t="gal_dash_k">Dashboard</span>
          <p data-t="gal_dash_c"><b>Everything due today, in one place.</b> Tasks, the calendar, tonight’s dinner and the shopping list, without opening a single other app.</p>
        </figcaption>
        <div class="gal-frame">
          <img class="sc" data-light="screenshots/dashboard-light-web.png" data-light-m="screenshots/dashboard-light-mobile.png" data-dark-m="screenshots/dashboard-dark-mobile.png" data-sizes="(max-width: 860px) 300px, (min-width: 1248px) 1152px, 92vw" data-dark="screenshots/dashboard-dark-web.png" src="screenshots/dashboard-light-web.png" alt="Yuvomi dashboard showing today's tasks, calendar, meals and shopping at a glance" data-alt-t="alt_hero" loading="lazy" decoding="async" width="900" height="675">
        </div>
      </figure>
      <figure class="gal-item reveal" style="--m: var(--m-calendar)">
        <figcaption class="gal-cap">
          <span class="gal-kicker" data-t="gal_cal_k">Calendar</span>
          <p data-t="gal_cal_c"><b>Google, iCloud and Nextcloud, finally in one calendar.</b> Two-way sync, so an appointment added here lands on every phone in the house.</p>
        </figcaption>
        <div class="gal-frame">
          <img class="sc" data-light="screenshots/calendar-light-web.png" data-light-m="screenshots/calendar-light-mobile.png" data-dark-m="screenshots/calendar-dark-mobile.png" data-sizes="(max-width: 860px) 300px, (min-width: 1248px) 1152px, 92vw" data-dark="screenshots/calendar-dark-web.png" src="screenshots/calendar-light-web.png" alt="Calendar" data-alt-t="alt_c_cal" loading="lazy" decoding="async" width="900" height="675">
        </div>
      </figure>
      <!-- Tasks and Budget used to sit here too, with the same two images the
           feature rows below already carry. Four full-bleed screens ran 3.653px
           on a phone with no argument between them, and the two that repeated
           were the ones a reader met again 6.000px later. Two screens carry the
           proof; the carousel carries the rest. -->
    </div>
  </div>
</section>

<!-- WHAT IT REPLACES
     The positioning is "one home instead of many subscriptions", and the one
     artefact that says it literally - the "Instead of juggling..." table - lived
     only in README.md. A visitor who never opens GitHub never saw the claim
     spelled out. This section is that table, and it replaces the old "Sound
     familiar?" trio: three cards that opened a wound AFTER the gallery had
     already shown the cure in full width. Its one surviving line closes here.

     Rows are kept verbatim from the README table so the two cannot drift.
     Deliberately NO module accent per row: the accent system already means
     something in .handoff and decorating a second list with it turns a
     vocabulary back into a palette. -->
<section class="swap" id="swap">
  <div class="wrap">
    <div class="sec-head lead reveal">
      <span class="eyebrow" data-t="swap_eyebrow">What it replaces</span>
      <h2 class="sec-title" data-t="swap_title">Ten apps, <em>one place.</em></h2>
      <p class="sec-desc" data-t="swap_desc">Ten apps a household pays for separately, and the one place that does all of it on a server you own. Nothing here is a plan or a roadmap: every line is built and shipping today.</p>
    </div>
    <ul class="swap-list reveal">
      <li class="swap-row"><span class="swap-from" data-t="swap_1_a">a to-do &amp; task app</span><span class="sr-only" data-t="swap_rel">is replaced by</span><svg class="swap-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><span class="swap-to" data-t="swap_1_b"><b>Tasks</b> - Kanban, deadlines, recurring, multi-assignment</span></li>
      <li class="swap-row"><span class="swap-from" data-t="swap_2_a">a shared calendar subscription</span><span class="sr-only" data-t="swap_rel">is replaced by</span><svg class="swap-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><span class="swap-to" data-t="swap_2_b"><b>Calendar</b> - sync, subscriptions, per-event visibility</span></li>
      <li class="swap-row"><span class="swap-from" data-t="swap_3_a">a cost-splitting app</span><span class="sr-only" data-t="swap_rel">is replaced by</span><svg class="swap-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><span class="swap-to" data-t="swap_3_b"><b>Shared expenses</b> - shared costs with debt simplification</span></li>
      <li class="swap-row"><span class="swap-from" data-t="swap_4_a">a budgeting app</span><span class="sr-only" data-t="swap_rel">is replaced by</span><svg class="swap-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><span class="swap-to" data-t="swap_4_b"><b>Budget</b> - income, expenses, accounts, savings goals</span></li>
      <li class="swap-row"><span class="swap-from" data-t="swap_5_a">a meal planner &amp; recipe app</span><span class="sr-only" data-t="swap_rel">is replaced by</span><svg class="swap-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><span class="swap-to" data-t="swap_5_b"><b>Meals &amp; Recipes</b> - weekly planner with shopping export</span></li>
      <li class="swap-row"><span class="swap-from" data-t="swap_6_a">a grocery-list app</span><span class="sr-only" data-t="swap_rel">is replaced by</span><svg class="swap-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><span class="swap-to" data-t="swap_6_b"><b>Shopping</b> - shared, aisle-organized lists</span></li>
      <li class="swap-row"><span class="swap-from" data-t="swap_7_a">a pantry &amp; expiry tracker</span><span class="sr-only" data-t="swap_rel">is replaced by</span><svg class="swap-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><span class="swap-to" data-t="swap_7_b"><b>Pantry</b> - stock, storage location, best-before dates</span></li>
      <li class="swap-row"><span class="swap-from" data-t="swap_8_a">a document manager</span><span class="sr-only" data-t="swap_rel">is replaced by</span><svg class="swap-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><span class="swap-to" data-t="swap_8_b"><b>Documents</b> - tagged, searchable family files</span></li>
      <li class="swap-row"><span class="swap-from" data-t="swap_9_a">a home-inventory app</span><span class="sr-only" data-t="swap_rel">is replaced by</span><svg class="swap-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><span class="swap-to" data-t="swap_9_b"><b>Inventory</b> - owned belongings, purchase price, warranty, linked receipts</span></li>
      <li class="swap-row"><span class="swap-from" data-t="swap_10_a">a notes app &amp; contacts sync</span><span class="sr-only" data-t="swap_rel">is replaced by</span><svg class="swap-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><span class="swap-to" data-t="swap_10_b"><b>Notes &amp; Contacts</b> - Markdown notes, CardDAV sync</span></li>
    </ul>
    <p class="swap-close reveal" data-t="swap_close">There's a calmer way. <span>Self-hosted, and yours.</span></p>
  </div>
</section>

<section class="handoff" id="handoff">
  <div class="wrap">
    <div class="sec-head lead reveal">
      <span class="eyebrow" data-t="ho_eyebrow">Why one app</span>
      <h2 class="sec-title" data-t="ho_title">The modules <em>talk to each other</em></h2>
      <p class="sec-desc" data-t="ho_desc">This is the part eighteen separate apps cannot do. What happens in one module shows up where you need it, without anyone re-typing it.</p>
    </div>
    <ol class="ho-list">
      <li class="ho-row reveal">
        <div class="ho-flow">
          <span class="ho-step" style="--m: var(--m-meals)">
            <span class="ho-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2"/><line x1="5.5" y1="11" x2="5.5" y2="22"/><path d="M17 2a4 4 0 0 0-3 3.9V13h3v9"/></svg></span>
            <span class="ho-label" data-t="ho_1_a">Meal plan for the week</span>
          </span>
          <span class="ho-arrow" aria-hidden="true"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="19" y2="12"/><polyline points="14 7 19 12 14 17"/></svg></span>
          <span class="ho-step" style="--m: var(--m-shopping)">
            <span class="ho-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></span>
            <span class="ho-label" data-t="ho_1_b">Ingredients on the shopping list</span>
          </span>
        </div>
        <p class="ho-note" data-t="ho_1_d">One tap sends every ingredient from the week's plan to the shared list, sorted by aisle. Nobody transcribes a recipe into a notes app again.</p>
      </li>
      <li class="ho-row reveal">
        <div class="ho-flow">
          <span class="ho-step" style="--m: var(--m-tasks)">
            <span class="ho-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span>
            <span class="ho-label" data-t="ho_2_a">A chore gets ticked off</span>
          </span>
          <span class="ho-arrow" aria-hidden="true"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="19" y2="12"/><polyline points="14 7 19 12 14 17"/></svg></span>
          <span class="ho-step" style="--m: var(--m-rewards)">
            <span class="ho-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg></span>
            <span class="ho-label" data-t="ho_2_b">Points land on your kid's balance</span>
          </span>
        </div>
        <p class="ho-note" data-t="ho_2_d">Any task can carry a point value. Finishing it credits whoever it was assigned to, and those points buy real rewards from a catalog you control.</p>
      </li>
      <li class="ho-row reveal">
        <div class="ho-flow">
          <span class="ho-step" style="--m: var(--m-documents)">
            <span class="ho-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg></span>
            <span class="ho-label" data-t="ho_3_a">A receipt gets filed</span>
          </span>
          <span class="ho-arrow" aria-hidden="true"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="19" y2="12"/><polyline points="14 7 19 12 14 17"/></svg></span>
          <span class="ho-step" style="--m: var(--m-budget)">
            <span class="ho-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg></span>
            <span class="ho-label" data-t="ho_3_b">It hangs on the transaction</span>
          </span>
        </div>
        <p class="ho-note" data-t="ho_3_d">Attach it to the budget entry from the documents you already keep, or upload it on the spot. Filed once, findable from both sides.</p>
      </li>
      <!-- Vierte Zeile, und bewusst eine ohne Kind darin: von den ersten drei
           traegt nur die mittlere zwingend eine Familie, und ein Ein-Personen-
           Haushalt ist seit dem 06.08. bestaetigte zweite Zielgruppe. Vorrat ->
           Einkauf ist die Kette, die fuer einen Haushalt jeder Groesse gilt. -->
      <li class="ho-row reveal">
        <div class="ho-flow">
          <span class="ho-step" style="--m: var(--m-pantry)">
            <span class="ho-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"/><path d="M4 8h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><line x1="10" y1="13" x2="14" y2="13"/></svg></span>
            <span class="ho-label" data-t="ho_4_a">The last jar goes out of the pantry</span>
          </span>
          <span class="ho-arrow" aria-hidden="true"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="19" y2="12"/><polyline points="14 7 19 12 14 17"/></svg></span>
          <span class="ho-step" style="--m: var(--m-shopping)">
            <span class="ho-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></span>
            <span class="ho-label" data-t="ho_4_b">It is already on the shopping list</span>
          </span>
        </div>
        <p class="ho-note" data-t="ho_4_d">Pantry keeps amounts and best-before dates. What runs low or runs out moves to the shared list with one tap, and buying it puts it back in stock. Household of five or household of one, the loop is the same.</p>
      </li>
    </ol>
  </div>
</section>

<!-- FEATURE SHOWCASE -->
<section class="showcase" id="modules">
  <div class="wrap">
    <div class="sec-head center reveal">
      <h2 class="sec-title" data-t="feat_title">Everything your household needs</h2>
      <p class="sec-desc" data-t="feat_desc">A complete set of tools for families, designed to work together, not scattered across eighteen separate tabs.</p>
    </div>

    <div class="feat-grid">
    <div class="feat-row reveal" style="--m: var(--m-tasks)">
      <div class="feat-info">
        <span class="feat-kicker"><span class="k-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><span data-t="f_tasks_k">Tasks</span></span>
        <h3 data-t="f_tasks_t">Everyone knows what needs doing.</h3>
        <p data-t="f_tasks_d">Shared tasks with deadlines, priorities, subtasks, tags and recurring schedules, assignable to several family members at once.</p>
        <ul class="feat-list">
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span data-t="f_tasks_l1">Kanban board with one-tap status changes</span></li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span data-t="f_tasks_l2">Multi-member assignment with stacked avatars</span></li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span data-t="f_tasks_l3">Optional two-way sync with CalDAV reminder lists</span></li>
        </ul>
      </div>
      <div class="feat-visual">
        <img class="sc feat-phone" data-light="screenshots/tasks-light-mobile.png" data-dark="screenshots/tasks-dark-mobile.png" src="screenshots/tasks-light-mobile.png" alt="Tasks on mobile" data-alt-t="alt_f_tasks_m" loading="lazy" width="440" height="956">
      </div>
    </div>

    <!-- Health sits at position 2, not 6. "Never leaves your server" is the
         strongest privacy claim on the page and the one category no cloud
         planner can honestly offer. -->
    <div class="feat-row reveal" style="--m: var(--m-health)">
      <div class="feat-info">
        <span class="feat-kicker"><span class="k-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.7-1.5L12.5 16l2-8 1.5 4h4.8"/></svg></span><span data-t="f_health_k">Health</span></span>
        <h3 data-t="f_health_t">Health that stays in the family.</h3>
        <p data-t="f_health_d">Vitals, medications, lab results, activity and cycles, tracked per member, private by default, and never leaving your server.</p>
        <ul class="feat-list">
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span data-t="f_health_l1">Cycle ring with period &amp; fertile-window predictions</span></li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span data-t="f_health_l2">Medication reminders with refill alerts</span></li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span data-t="f_health_l3">Per-entry visibility: private or shared</span></li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span data-t="f_health_l4">Parents can record a child’s fever and medication</span></li>
        </ul>
      </div>
      <div class="feat-visual">
        <img class="sc feat-phone" data-light="screenshots/health-vitals-light-mobile.png" data-dark="screenshots/health-vitals-dark-mobile.png" src="screenshots/health-vitals-light-mobile.png" alt="Health vitals on mobile" data-alt-t="alt_f_health_m" loading="lazy" style="left:-20px;right:auto" width="440" height="956">
      </div>
    </div>

    <div class="feat-row reveal" style="--m: var(--m-meals)">
      <div class="feat-info">
        <span class="feat-kicker"><span class="k-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2"/><path d="M5 2v20"/><path d="M19 2v20"/><path d="M19 2a4 4 0 0 0-4 4v6h4"/></svg></span><span data-t="f_meals_k">Meals</span></span>
        <h3 data-t="f_meals_t">Dinner sorted before anyone asks.</h3>
        <p data-t="f_meals_d">A weekly drag-and-drop planner with repeating meals and ingredient lists that export straight to the shopping list in one click.</p>
        <ul class="feat-list">
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span data-t="f_meals_l1">Drag-and-drop weekly planner with repeats</span></li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span data-t="f_meals_l2">Reusable recipes you can scale &amp; duplicate</span></li>
          <!-- Shopping used to be a row of its own, but its own screenshot showed
               the Kitchen module with Shopping as one tab beside Meals, Recipes
               and Pantry. It belongs here, as the thing the plan produces. -->
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span data-t="f_meals_l3">A shared shopping list, sorted by aisle and updating live</span></li>
        </ul>
      </div>
      <div class="feat-visual">
        <img class="sc feat-phone" data-light="screenshots/meals-light-mobile.png" data-dark="screenshots/meals-dark-mobile.png" src="screenshots/meals-light-mobile.png" alt="Meals on mobile" data-alt-t="alt_f_meals_m" loading="lazy" width="440" height="956">
      </div>
    </div>

    <div class="feat-row reveal" style="--m: var(--m-budget)">
      <div class="feat-info">
        <span class="feat-kicker"><span class="k-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span><span data-t="f_budget_k">Budget</span></span>
        <h3 data-t="f_budget_t">No surprise at the end of the month.</h3>
        <p data-t="f_budget_d">Track who spent what, split shared costs automatically, and see exactly where the money goes.</p>
        <ul class="feat-list">
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span data-t="f_budget_l1">55 currencies, recurring entries, weekly/monthly/yearly statistics, monthly budgets &amp; savings goals</span></li>
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span data-t="f_budget_l3">Subscription tracker with renewals, budgets &amp; alerts</span></li>
          <!-- Split expenses is a sub-area of Budget with an inherited accent,
               not a module of its own. It had its own row directly under this
               one, selling the same money story twice. -->
          <li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span data-t="f_budget_l4">Shared costs for household, trips and events, with automatic debt simplification</span></li>
        </ul>
      </div>
      <div class="feat-visual">
        <img class="sc feat-phone" data-light="screenshots/budget-light-mobile.png" data-dark="screenshots/budget-dark-mobile.png" src="screenshots/budget-light-mobile.png" alt="Budget on mobile" data-alt-t="alt_f_budget_m" loading="lazy" style="left:-20px;right:auto" width="440" height="956">
      </div>
    </div>
  </div>
    </div>

    <!-- Die vierzehn uebrigen standen bis zur Re-Kritik in einer EIGENEN Sektion
         mit eigenem Kopf. Zwei Sektionen mit zwei Ueberschriften fuer eine
         Aussage - hier ist die Modulliste - kosteten zusammen 4.419px, ein
         Drittel der Seite, und waren der Grund, warum der Umbau von elf auf acht
         Sektionen unterm Strich nur rund 300px gespart hat. Jetzt eine Sektion,
         ein Kopf, zwei Stufen: vier ausfuehrlich, vierzehn als Karte. -->
    <p class="mod-lead reveal" data-t="more_desc">The other fourteen, each one independent. Turn on what fits your household; the rest stays out of the way.</p>
    <div class="mod-grid">
      <div class="mod-card reveal" style="--m: var(--m-calendar)">
        <div class="mod-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
        <h3 data-t="m_cal_t">Calendar</h3><p data-t="m_cal_d">Two-way sync with Google and CalDAV, public ICS subscriptions, recurring events, holiday overlays and per-event visibility.</p>
      </div>
      <div class="mod-card reveal d1" style="--m: var(--m-shopping)">
        <div class="mod-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div>
        <h3 data-t="m_shop_t">Shopping</h3><p data-t="m_shop_d">Collaborative lists grouped by aisle and ordered to match your shop, with swipe gestures and one-tap import from the meal plan.</p>
      </div>
      <div class="mod-card reveal d2" style="--m: var(--m-recipes)">
        <div class="mod-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 0-7 7c0 2.4 1.2 4.5 3 5.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3c1.8-1.2 3-3.3 3-5.7a7 7 0 0 0-7-7z"/><line x1="9" y1="22" x2="15" y2="22"/></svg></div>
        <h3 data-t="m_recipes_t">Recipes</h3><p data-t="m_recipes_d">Create, duplicate and scale reusable recipes, then pre-fill meal slots or send the ingredients to a shopping list. A self-hosted Mealie or Tandoor instance can be mirrored read-only.</p>
      </div>
      <div class="mod-card reveal" style="--m: var(--m-pantry)">
        <div class="mod-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3h14a1 1 0 0 1 1 1v3H4V4a1 1 0 0 1 1-1z"/><path d="M4 7h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><line x1="10" y1="12" x2="14" y2="12"/></svg></div>
        <h3 data-t="m_pantry_t">Pantry</h3><p data-t="m_pantry_d">What is actually in the house: amount, storage location and best-before date, with expiry and low-stock filters, and a two-way handover with the shopping list.</p>
      </div>
      <div class="mod-card reveal d1" style="--m: var(--m-documents)">
        <div class="mod-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
        <h3 data-t="m_docs_t">Documents</h3><p data-t="m_docs_d">Family files with previews, folders, visibility controls and bulk actions. Storage on a local folder, WebDAV or Google Drive; Paperless-ngx and Papra optional.</p>
      </div>
      <div class="mod-card reveal d2" style="--m: var(--m-rewards)">
        <div class="mod-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg></div>
        <h3 data-t="m_rewards_t">Rewards</h3><p data-t="m_rewards_d">Points on tasks credit the assigned member, with a configurable default for new tasks, a parent-approved catalog and an auditable ledger.</p>
      </div>
      <div class="mod-card reveal" style="--m: var(--m-notes)">
        <div class="mod-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/></svg></div>
        <h3 data-t="m_notes_t">Notes &amp; Contacts</h3><p data-t="m_notes_d">Colored Markdown sticky notes for recipes, memos and quick reminders, plus a shared contact directory with CardDAV sync and vCard import/export.</p>
      </div>
      <div class="mod-card reveal d1" style="--m: var(--m-birthdays)">
        <div class="mod-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3M12 8v3M17 8v3M7 4h.01M12 3h.01M17 4h.01"/></svg></div>
        <h3 data-t="m_bday_t">Birthdays</h3><p data-t="m_bday_d">Birthday tracker with automatic annual calendar events, age display and custom reminders.</p>
      </div>
      <div class="mod-card reveal d2" style="--m: var(--m-contacts)">
        <div class="mod-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <h3 data-t="m_family_t">Family</h3><p data-t="m_family_d">Member profiles with roles, photos and contact details, kept in sync with Contacts and Birthdays.</p>
      </div>
      <div class="mod-card reveal" style="--m: var(--m-calendar)">
        <div class="mod-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></div>
        <h3 data-t="m_rem_t">Reminders</h3><p data-t="m_rem_d">Reminders on tasks and calendar events with an in-app badge, plus opt-in push notifications that reach you even when the app is closed.</p>
      </div>
      <div class="mod-card reveal d1" style="--m: var(--m-infra)">
        <div class="mod-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div>
        <h3 data-t="m_api_t">API tokens</h3><p data-t="m_api_d">Bearer and X-API-Key tokens against a documented OpenAPI 3.0 spec, plus an MCP endpoint at <code>/mcp</code> that lets a client like Claude Desktop drive the API in plain language.</p>
      </div>
      <div class="mod-card reveal d2" style="--m: var(--m-infra)">
        <div class="mod-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg></div>
        <h3 data-t="m_backup_t">Backup</h3><p data-t="m_backup_d">Scheduled backups with pre-restore rollback, optional WebDAV cloud upload (Nextcloud, ownCloud, Hetzner, etc.).</p>
      </div>
      <div class="mod-card reveal" style="--m: var(--m-housekeeping)">
        <div class="mod-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2a2 2 0 0 0 2.8 0z"/><path d="m5 2 5 5"/><path d="M2 13h15"/><path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4z"/></svg></div>
        <h3 data-t="m_house_t">Housekeeping</h3><p data-t="m_house_d">Manage household staff: schedules, check-in/out, daily or hourly billing, chores and supplies.</p>
      </div>
      <div class="mod-card reveal d1" style="--m: var(--m-inventory)">
        <div class="mod-ico"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/></svg></div>
        <h3 data-t="m_inv_t">Inventory</h3><p data-t="m_inv_d">What you own: brand, model, serial number, storage location, purchase price, warranty and condition, with linked receipts and bookings. Off by default; households turn it on.</p>
      </div>
    </div>
    <!-- Anyone already running a home server asks the same two questions before
         they ask anything else: what does this not do, and will it fight what I
         already have. A wall of module cards answers neither.
         The </div> above closes .mod-grid, which was missing: this paragraph was
         the grid's fourteenth child, so it rendered 276px wide in the middle
         column with \`margin: 0 auto\` inert and \`max-width: 68ch\` never binding -
         63 words of centred text at 22 characters a line, wearing a border-top
         that read as a card divider. -->
    <!-- Fuenf Module, die sonst NUR als Prosakarte vorkaemen. Ersetzt das
         geloeschte Karussell und macht das Gegenteil von dem, was das tat:
         das zeigte unter der Ueberschrift "die ihr noch nicht gesehen habt"
         drei Unteransichten des Budget-Moduls, das oben schon eine eigene
         Zeile hatte. Kein Drag, kein Autoplay, kein JS - eine Reihe, die
         umbricht. Beschriftung und alt sagen bewusst VERSCHIEDENES: sie teilten
         sich den Modulnamen-Key, und ein Screenreader las den Namen damit
         zweimal hintereinander. -->
    <div class="mod-shots">
      <figure class="mod-shot reveal"><img class="sc" data-light="screenshots/inventory-light-mobile.png" data-dark="screenshots/inventory-dark-mobile.png" src="screenshots/inventory-light-mobile.png" alt="The inventory module on a phone" data-alt-t="alt_m_inventory" loading="lazy" decoding="async" width="440" height="956"><figcaption data-t="m_inv_t">Inventory</figcaption></figure>
      <figure class="mod-shot reveal"><img class="sc" data-light="screenshots/shopping-light-mobile.png" data-dark="screenshots/shopping-dark-mobile.png" src="screenshots/shopping-light-mobile.png" alt="A shared shopping list on a phone" data-alt-t="alt_m_shopping" loading="lazy" decoding="async" width="440" height="956"><figcaption data-t="m_shop_t">Shopping</figcaption></figure>
      <figure class="mod-shot reveal"><img class="sc" data-light="screenshots/rewards-light-mobile.png" data-dark="screenshots/rewards-dark-mobile.png" src="screenshots/rewards-light-mobile.png" alt="The rewards ledger on a phone" data-alt-t="alt_m_rewards" loading="lazy" decoding="async" width="440" height="956"><figcaption data-t="m_rewards_t">Rewards</figcaption></figure>
      <figure class="mod-shot reveal"><img class="sc" data-light="screenshots/documents-light-mobile.png" data-dark="screenshots/documents-dark-mobile.png" src="screenshots/documents-light-mobile.png" alt="Family documents on a phone" data-alt-t="alt_m_documents" loading="lazy" decoding="async" width="440" height="956"><figcaption data-t="m_docs_t">Documents</figcaption></figure>
      <figure class="mod-shot reveal"><img class="sc" data-light="screenshots/recipes-light-mobile.png" data-dark="screenshots/recipes-dark-mobile.png" src="screenshots/recipes-light-mobile.png" alt="The recipe list on a phone" data-alt-t="alt_m_recipes" loading="lazy" decoding="async" width="440" height="956"><figcaption data-t="m_recipes_t">Recipes</figcaption></figure>
    </div>
    <p class="mod-scope reveal" data-t="more_scope">Not a photo library, a password manager or a media server: Yuvomi replaces the apps a household runs on, not your whole server. What you already run can stay. Calendars and contacts sync both ways over CalDAV and CardDAV, documents can live on WebDAV or Google Drive, an idle wall tablet can show photos from your own Immich, and API tokens plus the MCP endpoint let the rest of your setup talk to it.</p>
  </div>
</section>




<!-- LONGEVITY -->
<section class="longevity" id="longevity">
  <div class="wrap">
    <div class="sec-head lead reveal">
      <span class="eyebrow" data-t="long_eyebrow">Before you commit</span>
      <h2 class="sec-title" data-t="long_title">The three questions worth asking first</h2>
    </div>
    <!-- Diese Sektion bekam 384px von 15.000 und beantwortet die Fragen, an denen
         die Entscheidung dieses Publikums wirklich haengt - waehrend die
         Bilderreihe darueber das Zweieinhalbfache bekam. Jetzt drei Fragen mit
         drei Antworten, darunter die unbequeme: den verlorenen Schluessel
         behandelte die Seite bisher als Warnung, aber nirgends als Frage. -->
    <dl class="long-list">
      <div class="long-item reveal">
        <dt data-t="long_q1">What if this project stops?</dt>
        <dd data-t="long_a1"><b>Nothing changes on your machine.</b> It is MIT-licensed and self-hosted, there is no server of ours anywhere in the path, and the only thing that leaves your machine is a version check against the GitHub releases API. The container you already pulled keeps running exactly as it does today, with or without us.</dd>
      </div>
      <div class="long-item reveal">
        <dt data-t="long_q2">What if I want my data somewhere else?</dt>
        <dd data-t="long_a2"><b>Copying one file is the whole export.</b> Everything lives in a single SQLite file on your own disk. Scheduled backups write a restorable archive on top of that, and the documented API plus the MCP endpoint pull anything out in whatever shape you need.</dd>
      </div>
      <div class="long-item reveal">
        <dt data-t="long_q3">What if I lose the encryption key?</dt>
        <dd data-t="long_a3"><b>Then the database is gone, and we cannot help you.</b> That is the honest answer: SQLCipher has no recovery path and no back door, which is the entire point of it. Store the key the way you store the ones that matter. Encryption is optional; if you would rather not carry that risk, leave it off and the file stays readable.</dd>
      </div>
    </dl>
  </div>
</section>

<!-- PLATFORMS / INSTALL ANYWHERE -->
<section class="platforms" id="install">
  <div class="wrap">
    <div class="sec-head center reveal">
      <h2 class="sec-title" data-t="plat_title">Runs on <em>your</em> hardware</h2>
      <p class="sec-desc" data-t="plat_desc">A Docker or Podman container that drops onto any home server or NAS. Or install it in a couple of clicks from your platform's app store.</p>
    </div>
    <div class="plat-grid">
      <a class="plat-card reveal" style="--pc:#2496ED" href="install.html#docker">
        <span class="plat-badge plat-badge--start" data-t="plat_start">Start here</span>
        <span class="plat-logo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg></span>
        <h3>Docker</h3>
        <p data-t="plat_docker">Pre-built image, up and running with a single <code>compose</code> command.</p>
        <span class="plat-go"><span data-t="plat_guide">Guide</span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </a>
      <a class="plat-card reveal d1" style="--pc:#892CA0" href="install.html#podman">
        <span class="plat-logo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.2.275L6.75.308a.259.259 0 0 0-.203.098L.056 8.602a.259.259 0 0 0-.05.219l2.356 10.194a.26.26 0 0 0 .14.174l9.43 4.511a.258.258 0 0 0 .224-.002l9.401-4.566a.259.259 0 0 0 .141-.175L23.993 8.75a.258.258 0 0 0-.051-.22L17.403.374A.259.259 0 0 0 17.2.275zm-.123.517l6.385 7.966-2.242 9.964-9.177 4.457-9.205-4.402L.54 8.827 6.875.824zM11.46 2.857c-.933 0-1.84.1-2.426.332h-.002c-1.554.569-2.725 2.105-3.074 3.952v.004c-.309 1.463-.392 2.703-.556 3.824-.07.481-.159.94-.283 1.387-.628.497-1.079 1.263-1.244 2.138v.004c-.116.547-.181 1.04-.237 1.5h-.644v.518h8.891c-.061.464-.122.996-.181 1.42H7.596v.517h7.939c-.242-.078-.486-.218-.756-.502h-.697l-.85.488-.232-.396.162-.092h-1.069c.113-.776.17-1.601.373-2.564v-.004c.22-1.164.96-2.112 1.895-2.453l.004-.002h.002c.318-.127.928-.205 1.543-.205.613 0 1.244.075 1.622.207.935.341 1.676 1.29 1.895 2.453v.004c.204.963.26 1.788.373 2.564h-.742l.162.092-.233.396-.85-.488h-.75c-.219.25-.474.412-.747.502h4.392v-.518h-.842c-.103-.743-.181-1.67-.382-2.623v-.002a4.14 4.14 0 0 0-.264-.863h1.863v-.517h-2.13a3.488 3.488 0 0 0-.8-.906h1.8v-.518H17.95a8.862 8.862 0 0 1-.193-.775h1.484v-.518h-1.576c-.013-.081-.027-.161-.039-.244-.164-1.12-.246-2.36-.555-3.824v-.004c-.348-1.848-1.52-3.383-3.075-3.952l-.002-.002h-.002c-.65-.227-1.596-.33-2.531-.33zm0 .386c.904 0 1.833.11 2.404.309h.002c1.4.514 2.5 1.934 2.826 3.666v.003c.303 1.436.385 2.66.552 3.805.076.515.173 1.013.315 1.505-.449-.135-1.05-.197-1.648-.197-.12 0-.236.003-.352.008l-1.863-1.865a2.17 2.17 0 0 0 .11-.246l2.13 1.23.13-.224-2.185-1.262c.016-.069.027-.14.036-.21l2.302.616.068-.248-2.354-.63c-.02-1.153-1.008-2.078-2.208-2.078-1.205 0-2.196.931-2.206 2.091l-2.303.617.066.25 2.252-.605c.01.076.024.151.041.224L7.436 11.24l.129.222 2.087-1.207c.034.089.074.176.12.258l-1.266 1.266a6.959 6.959 0 0 0-1.045-.075c-.603 0-1.186.064-1.578.22a2.668 2.668 0 0 0-.285.124c.076-.335.137-.675.187-1.021.168-1.144.248-2.37.551-3.805l.002-.001v-.002c.326-1.733 1.426-3.153 2.828-3.666h.002l.004-.002c.488-.194 1.381-.307 2.287-.307zM8.473 5.194a1.295 1.295 0 0 0-.965.502l-.117.153.306.236.12-.152a.923.923 0 0 1 .673-.352.92.92 0 0 1 .67.262l.139.134.271-.275-.136-.137a1.293 1.293 0 0 0-.961-.37zm6.39 0a1.289 1.289 0 0 0-.96.371l-.138.137.274.275.136-.134a.923.923 0 0 1 .672-.262.923.923 0 0 1 .674.352l.119.152.307-.236-.12-.153c-.23-.3-.587-.486-.964-.502zM8.53 6.708c-.642 0-1.164.538-1.164 1.19 0 .65.522 1.187 1.164 1.187.643 0 1.164-.536 1.164-1.188 0-.651-.521-1.19-1.164-1.19zm6.273 0c-.643 0-1.162.538-1.162 1.19 0 .65.52 1.187 1.162 1.187.643 0 1.164-.536 1.164-1.188 0-.651-.521-1.19-1.164-1.19zm-6.273.387c.428 0 .776.355.776.802 0 .447-.348.8-.776.8a.785.785 0 0 1-.775-.8c0-.035.002-.07.006-.103.07.191.248.318.445.318a.487.487 0 0 0 .477-.496.49.49 0 0 0-.383-.486.759.759 0 0 1 .23-.035zm6.273 0c.428 0 .777.355.777.802 0 .447-.349.8-.777.8a.785.785 0 0 1-.77-.9c.072.19.248.315.444.315a.486.486 0 0 0 .479-.496.491.491 0 0 0-.383-.484.755.755 0 0 1 .23-.037zm-3.08.716c1.012 0 1.819.775 1.819 1.723 0 .947-.807 1.722-1.819 1.722s-1.82-.775-1.82-1.722c0-.948.808-1.723 1.82-1.723zm-.002.528c-.142 0-.258.043-.355.076a.804.804 0 0 1-.232.054c-.107 0-.2.047-.268.127a.568.568 0 0 0-.104.207c-.04.134-.062.268-.08.315a.276.276 0 0 0 .032.25c.033.056.071.1.117.146.09.092.206.183.322.268.12.088.237.166.326.224l-.008.09c-.043.036-.14.102-.324.178a.533.533 0 0 1-.299.025.43.43 0 0 1-.236-.172c.015-.138.044-.293.068-.449l-.376-.095c-.05.238-.067.43-.094.64l.037.059c.143.224.318.344.506.392a.908.908 0 0 0 .52-.033 1.57 1.57 0 0 0 .444-.242c.088.067.244.174.446.242a.908.908 0 0 0 .52.033.868.868 0 0 0 .507-.392l.037-.059a6.292 6.292 0 0 0-.096-.637l-.377.092c.032.148.051.32.07.451a.434.434 0 0 1-.237.17.533.533 0 0 1-.3-.025c-.178-.068-.272-.14-.325-.178l-.006-.084c.09-.058.209-.137.336-.23.115-.085.231-.176.322-.268a.72.72 0 0 0 .117-.146.273.273 0 0 0 .031-.25c-.018-.047-.039-.181-.08-.315a.564.564 0 0 0-.103-.207.343.343 0 0 0-.268-.127.815.815 0 0 1-.234-.054c-.097-.033-.212-.076-.354-.076zm.002.386c.057 0 .134.024.23.057.09.03.208.07.337.076.04.102.06.237.09.338a.361.361 0 0 1-.041.045 2.66 2.66 0 0 1-.276.228c-.165.122-.271.188-.342.233a5.287 5.287 0 0 1-.34-.233 2.557 2.557 0 0 1-.275-.228.34.34 0 0 1-.04-.047c.035-.119.046-.234.089-.34.08.012.246-.042.336-.072a.837.837 0 0 1 .232-.057zm-3.234.61a.635.635 0 0 0-.611.517l1.084-.289a.614.614 0 0 0-.473-.228zm6.336 0a.61.61 0 0 0-.436.187c.352.096.69.184 1.033.275a.632.632 0 0 0-.597-.462zm-.623.607c-.007.035-.002.07-.002.103l.921.532a.648.648 0 0 0 .276-.313l-1.195-.322zm-5.086.05l-1.18.315c.078.15.207.264.362.316l.797-.46c.018-.059.015-.12.021-.17zm4.441.714l1.656 1.658a4.19 4.19 0 0 0-.826.146l-.95-1.647a2.51 2.51 0 0 0 .12-.157zm-3.646.03c.04.055.083.118.129.169l-.658 1.134a2.656 2.656 0 0 0-.276-.119l-.002-.002a3.3 3.3 0 0 0-.292-.082zm3.338.317l.892 1.547c-.623.251-1.149.725-1.523 1.33h-1.652c-.262-.75-.741-1.38-1.358-1.764l.623-1.082c.394.347.919.559 1.492.559a2.25 2.25 0 0 0 1.526-.59zM7.46 12.09c.574 0 1.167.073 1.518.195.867.319 1.555 1.203 1.76 2.285l.001.002v.002c.109.513.173.98.227 1.424H9.86a.386.386 0 0 0-.494 0H9.11a1.351 1.351 0 0 0-.078-.418.799.799 0 0 0 .569.238c.45 0 .814-.375.814-.828a.824.824 0 0 0-.814-.828.822.822 0 0 0-.791 1.016 1.495 1.495 0 0 0-1.18-.559c-.798 0-1.46.611-1.48 1.38h-.342a.386.386 0 0 0-.494 0H4.028c.054-.445.116-.912.224-1.425l.002-.002v-.002c.205-1.084.894-1.97 1.764-2.287h.002l.004-.002c.295-.117.863-.191 1.437-.19zm-1.91 1.105a.898.898 0 0 0-.67.348l-.119.154.307.237.119-.155a.525.525 0 0 1 .379-.197.52.52 0 0 1 .377.147l.138.136.272-.275-.137-.137a.895.895 0 0 0-.666-.258zm4.094 0a.9.9 0 0 0-.668.258l-.137.137.273.275.137-.136a.522.522 0 0 1 .377-.147.525.525 0 0 1 .379.197l.119.155.307-.237-.12-.154a.894.894 0 0 0-.667-.348zm4.222.735a.947.947 0 0 0-.707.365l-.117.154.306.237.12-.155a.568.568 0 0 1 .413-.213.571.571 0 0 1 .414.159l.14.136.27-.275-.138-.137a.942.942 0 0 0-.701-.271zm4.374 0a.942.942 0 0 0-.7.271l-.14.137.272.275.139-.136a.571.571 0 0 1 .414-.159.568.568 0 0 1 .414.213l.119.155.306-.237-.117-.154a.947.947 0 0 0-.707-.365zm-12.65.232a.824.824 0 0 0-.815.828c0 .453.365.828.814.828.45 0 .815-.375.815-.828a.824.824 0 0 0-.815-.828zm5.518.285h1.242a4.137 4.137 0 0 0-.263.864v.002c-.05.237-.092.464-.127.685h-.602a16.77 16.77 0 0 0-.236-1.5l-.002-.002c-.003-.016-.009-.032-.012-.049zm-5.519.102a.43.43 0 0 1 .426.441.43.43 0 0 1-.426.442c-.22 0-.4-.171-.422-.397a.298.298 0 0 0 .215.092.31.31 0 0 0 .305-.316.317.317 0 0 0-.129-.258c.01-.001.02-.004.031-.004zm4.014 0c.235 0 .427.193.427.441a.433.433 0 0 1-.427.442.427.427 0 0 1-.422-.405.3.3 0 0 0 .256.145.31.31 0 0 0 .304-.317.314.314 0 0 0-.207-.298c.023-.004.045-.008.069-.008zm4.304.414a.865.865 0 0 0-.856.87c0 .478.382.874.856.874a.868.868 0 0 0 .857-.873.867.867 0 0 0-.857-.871zm4.292 0a.867.867 0 0 0-.814 1.14 1.597 1.597 0 0 0-1.295-.652c-.846 0-1.546.65-1.568 1.463l-1.525.408.066.248 1.477-.394c.004.028.009.06.015.087l-1.418.817.131.222 1.367-.789c.235.552.801.94 1.455.94.66 0 1.233-.397 1.463-.957l1.398.806.13-.222-1.45-.836c.005-.025.008-.053.012-.078l1.511.404.067-.248-1.563-.418a1.438 1.438 0 0 0-.107-.5c.157.186.39.303.648.303a.867.867 0 0 0 .856-.873.865.865 0 0 0-.856-.871zm-10.567.043c.598 0 1.071.444 1.092.992h-.41c.007-.01.016-.02.023-.033a.24.24 0 0 0 .025-.22c-.005-.016-.021-.102-.05-.196a.416.416 0 0 0-.078-.156.282.282 0 0 0-.225-.108.499.499 0 0 1-.129-.031c-.062-.021-.142-.05-.248-.05-.106 0-.188.029-.25.05a.49.49 0 0 1-.127.031.29.29 0 0 0-.225.108.424.424 0 0 0-.08.156c-.029.094-.043.18-.048.195a.242.242 0 0 0 .023.22c.008.014.017.023.025.034h-.41c.02-.548.494-.992 1.092-.992zm6.275.344c.259 0 .47.211.47.484a.477.477 0 0 1-.47.486.472.472 0 0 1-.467-.453.322.322 0 0 0 .246.115c.18 0 .326-.15.326-.338a.34.34 0 0 0-.156-.289c.017-.002.033-.005.05-.005zm4.292 0c.26 0 .469.211.469.484 0 .272-.21.486-.469.486a.477.477 0 0 1-.47-.486c0-.016.002-.031.004-.047a.33.33 0 0 0 .312.24c.18 0 .326-.15.326-.338a.338.338 0 0 0-.256-.332.475.475 0 0 1 .084-.007zm-10.567.24c.021 0 .063.01.125.031.086.03.117.039.186.049.012.041.022.088.033.129a1.475 1.475 0 0 1-.168.138c-.038.028-.064.045-.088.061h-.176c-.024-.016-.052-.033-.09-.06a1.602 1.602 0 0 1-.168-.14l.034-.128c.107-.014.146-.04.185-.049a.504.504 0 0 1 .127-.031zm8.458.25c.661 0 1.184.502 1.184 1.113 0 .156-.035.304-.096.44l-.002-.024-.022-.156a2.443 2.443 0 0 0-.04-.24l-.377.093.044.274a.24.24 0 0 1-.115.074.299.299 0 0 1-.168-.014c-.087-.03-.132-.063-.18-.094.057-.037.13-.084.198-.134.08-.06.16-.123.226-.19a.542.542 0 0 0 .092-.111.245.245 0 0 0 .026-.225c-.008-.019-.022-.112-.053-.21a.444.444 0 0 0-.084-.163.286.286 0 0 0-.23-.107.566.566 0 0 1-.14-.037c-.065-.022-.152-.055-.263-.055-.11 0-.195.032-.262.055a.575.575 0 0 1-.14.037.294.294 0 0 0-.23.107.436.436 0 0 0-.083.162c-.03.1-.045.192-.052.211a.246.246 0 0 0 .025.225.534.534 0 0 0 .09.111c.066.067.146.13.226.19.068.05.138.095.194.132a.57.57 0 0 1-.18.096.305.305 0 0 1-.17.014.237.237 0 0 1-.111-.076c.008-.09.026-.177.04-.272l-.376-.094c-.032.146-.045.286-.063.409a1.052 1.052 0 0 1-.09-.428c0-.611.521-1.113 1.182-1.113zm0 .623c.026 0 .074.01.14.033.066.025.169.052.206.055l.035.156c-.04.04-.112.1-.184.152-.095.07-.14.095-.197.131-.056-.036-.1-.061-.195-.13a1.236 1.236 0 0 1-.184-.157l.035-.152a1.04 1.04 0 0 0 .206-.055.523.523 0 0 1 .138-.033zm-2.22.353a.43.43 0 0 0-.385.272l.656-.176a.416.416 0 0 0-.271-.096zm4.333 0a.414.414 0 0 0-.22.07l.603.16a.426.426 0 0 0-.383-.23zm-4.054.567l-.607.162a.436.436 0 0 0 .125.113zm3.925.002l.407.234a.443.443 0 0 0 .087-.102zm-1.986.234c.067.047.165.108.285.148a.68.68 0 0 0 .389.024.57.57 0 0 0 .232-.121 1.201 1.201 0 0 1-.904.394c-.356 0-.67-.145-.885-.375a.58.58 0 0 0 .207.102c.144.036.28.014.391-.024.12-.04.218-.1.285-.148zm-9.524 1.61v.517h6.214v-.518zm3.619 1.292v.517H15.3v-.517z"/></svg></span>
        <h3>Podman</h3>
        <p data-t="plat_podman">Rootless and SELinux-ready for RHEL, Fedora and CentOS Stream.</p>
        <span class="plat-go"><span data-t="plat_guide">Guide</span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </a>
      <a class="plat-card reveal d2" style="--pc:#E57000" href="install.html#proxmox">
        <span class="plat-logo"><svg viewBox="0 0 24 24" aria-hidden="true" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.5 4.5A1.5 1.5 0 0 1 4 3h16a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 20 10H4a1.5 1.5 0 0 1-1.5-1.5v-4zM6 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2.5 15.5A1.5 1.5 0 0 1 4 14h16a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 20 21H4a1.5 1.5 0 0 1-1.5-1.5v-4zM6 16.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg></span>
        <h3>Proxmox</h3>
        <p data-t="plat_proxmox">A Debian LXC with <code>nesting=1</code>, or a plain VM, running the Docker path.</p>
        <span class="plat-go"><span data-t="plat_guide">Guide</span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </a>
      <a class="plat-card reveal d2" style="--pc:#0095D5" href="install.html#truenas">
        <span class="plat-badge" data-t="plat_oneclick">1-click</span>
        <span class="plat-logo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 10.049v5.114l-10.949 6.324v-5.114L24 10.049zm-24 0v5.114l10.956 6.324v-5.114L0 10.049zm12.004-.605l-4.433 2.559 4.433 2.559 4.429-2.559-4.429-2.559zm10.952-1.207l-9.905-5.723v5.118l5.473 3.164 4.432-2.559zm-12-.605V2.513L1.044 8.236l4.432 2.555 5.48-3.159z"/></svg></span>
        <h3>TrueNAS</h3>
        <p data-t="plat_truenas">In the SCALE Community Apps catalog: install from the web UI, no terminal.</p>
        <span class="plat-go"><span data-t="plat_guide">Guide</span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </a>
      <a class="plat-card reveal" style="--pc:#5351FB" href="install.html#umbrel">
        <span class="plat-badge" data-t="plat_oneclick">1-click</span>
        <span class="plat-logo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.853 8.302c2.628-.05 4.698.656 6.303 2.05 1.166 1.01 2.14 2.43 2.895 4.305a7.584 7.584 0 0 0-1.818-.21c-1.345 0-2.552.31-3.558.987-1.127-.687-2.339-1.049-3.623-1.049-1.313 0-2.573.378-3.77 1.087-1.154-.726-2.456-1.087-3.875-1.087-.513 0-1.003.048-1.466.147.678-1.724 1.575-3.054 2.664-4.028 1.557-1.393 3.607-2.15 6.248-2.202zM1.842 17.616c.04-.037.078-.076.112-.119.48-.557 1.233-.91 2.453-.91 1.151 0 2.139.32 3.002.952l.035.025c.469.35 1.108.364 1.592.036 1.032-.698 2.032-1.014 3.017-1.014.967 0 1.906.304 2.836.965l.02.014a1.376 1.376 0 0 0 1.699-.078c.614-.53 1.455-.84 2.625-.84 1.232 0 2.186.344 2.94.98a1.092 1.092 0 0 0 .435.235 1.095 1.095 0 0 0 .806-.087 1.103 1.103 0 0 0 .547-1.267c-.873-3.383-2.3-6.03-4.363-7.82-2.084-1.808-4.712-2.646-7.787-2.588-3.063.06-5.653.955-7.673 2.762-2.003 1.793-3.344 4.39-4.104 7.67a1.1 1.1 0 0 0 1.807 1.083z"/></svg></span>
        <h3>Umbrel</h3>
        <p data-t="plat_umbrel">Available in the Umbrel App Store; everything stays on your Umbrel.</p>
        <span class="plat-go"><span data-t="plat_guide">Guide</span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </a>
      <a class="plat-card reveal d1" style="--pc:#FF8C2F" href="install.html#unraid">
        <span class="plat-badge" data-t="plat_oneclick">1-click</span>
        <span class="plat-logo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.406 8.528h1.17v6.926h-1.17zM1.17 15.454H0V8.528h1.17zm4.534.828h1.17v2.645h-1.17zm-2.86-2.969h1.169v4.282h-1.17zm5.703 0h1.17v4.282h-1.17zM22.83 8.528H24v6.926h-1.17zm-4.534-.81h-1.17V5.073h1.17zm2.86 2.95h-1.169V6.406h1.17zm-5.72 0h-1.17V6.406h1.17z"/></svg></span>
        <h3>Unraid</h3>
        <p data-t="plat_unraid">A Community Apps template: add it straight from the Unraid Apps tab.</p>
        <span class="plat-go"><span data-t="plat_guide">Guide</span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </a>
    </div>

    <div class="quick-docker reveal">
      <ul class="trust-bar">
        <li><b data-t="tb_image_k">Image</b> <span><code>ghcr.io/ulsklyc/<wbr>yuvomi:latest</code>, <span data-t="tb_image_v">about 500 MB</span></span></li>
        <li><b data-t="tb_needs_k">Needs</b> <span data-t="tb_needs_v">256 MB RAM and one port, 3000 by default.</span></li>
        <li><b data-t="tb_writes_k">Writes</b> <span data-t="tb_writes_v">Four volumes you own: data, backups, modules, documents.</span></li>
        <li><b data-t="tb_out_k">Outbound</b> <span data-t="tb_out_v">One update check against the GitHub releases API, nothing else. Weather, calendar sync and WebDAV backup are all off until you fill in credentials.</span></li>
        <li><b data-t="tb_data_k">Your data</b> <span><span data-t="tb_data_v">One SQLite file at</span> <code>/data/yuvomi.db</code>. <span data-t="tb_data_v2">Copying it is the whole export, unless documents live outside the database.</span></span></li>
      </ul>
      <div class="code-wrap"><div class="code-block"><span class="c" data-t="qs_c1"># Pre-built image - Docker</span>
curl -O https://raw.githubusercontent.com/ulsklyc/yuvomi/main/docker-compose.yml
curl -O https://raw.githubusercontent.com/ulsklyc/yuvomi/main/.env.example
cp .env.example .env
<span class="c" data-t="qs_c2"># run twice: one value for SESSION_SECRET, one for DB_ENCRYPTION_KEY</span>
openssl rand -hex 32</div><button class="copy-btn" type="button" data-copy="curl -O https://raw.githubusercontent.com/ulsklyc/yuvomi/main/docker-compose.yml&#10;curl -O https://raw.githubusercontent.com/ulsklyc/yuvomi/main/.env.example&#10;cp .env.example .env&#10;openssl rand -hex 32"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg><span data-t="copy">Copy</span></button></div>
      <!-- The .env edit sits BETWEEN the two copy blocks on purpose. It used to be a
           warning under one block that ended in \`docker compose up -d\`, so pasting the
           whole thing started the container while .env still held the two
           REPLACE_WITH_ placeholders from .env.example - which encrypts the database
           with a constant that is published in this very file. A human step cannot be
           a footnote to a copyable chain that has already run past it. -->
      <p class="quick-warn">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <span data-t="quick_warn"><b>Now open <code>.env</code> and replace both <code>REPLACE_WITH_…</code> placeholders</b> with the two values you just generated. Leave <code>DB_ENCRYPTION_KEY</code> on its placeholder and your database is encrypted with a key that is printed on this page. Once a database is encrypted, a lost or changed key never opens it again, not by you and not by us, so write the value down. To run without encryption, clear the line instead of filling it.</span>
      </p>
      <div class="code-wrap"><div class="code-block"><span class="h">docker compose up -d</span></div><button class="copy-btn" type="button" data-copy="docker compose up -d"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg><span data-t="copy">Copy</span></button></div>
      <p class="quick-note" data-t="quick_note">Then open <code>http://localhost:3000</code>. The first visit walks you through creating your admin account. Prefer a guided setup? The <a href="install.html">step-by-step installer</a> handles HTTPS, SSO and backups for you.</p>
    </div>
  </div>
</section>


<!-- CTA -->
<section class="cta">
  <div class="wrap">
    <div class="cta-box reveal">
      <h2 data-t="cta_title">Take back control of your <em>family's data.</em></h2>
      <p data-t="cta_desc">You install it once and it is yours after that. No account with us, no subscription, and nothing of ours between your family and its data.</p>
      <div class="cta-actions">
        <a href="install.html" class="btn btn-primary"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg><span data-t="cta_install">Get started</span></a>
        <a href="https://github.com/ulsklyc/yuvomi" class="btn btn-secondary" target="_blank" rel="noopener"><svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg><span data-t="cta_gh">View on GitHub</span></a>
      </div>
    </div>
  </div>
</section>

</main>

<!-- <a class="to-top" href="#top" id="toTop"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg><span data-t="to_top">Back to top</span></a> -->
`;
