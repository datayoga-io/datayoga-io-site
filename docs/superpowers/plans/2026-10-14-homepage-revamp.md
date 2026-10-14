# Homepage Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current homepage with a new "Applied AI for finance" landing page, preserving all existing page URLs and wiring an inline lead-capture form to Formspree + Google Calendar.

**Architecture:** A new standalone Jekyll layout (`_layouts/home-v2.html`) contains the complete prototype HTML — its own `<!doctype html>` shell, CSS, and JS — so it is fully isolated from the existing theme's Bootstrap/slick/jQuery stack. `index.html` is updated to use the new layout. All other pages are untouched.

**Tech Stack:** Jekyll 4.2.2, GitHub Pages, Formspree (`mdeapnak`), Google Fonts CDN, vanilla JS.

---

## File Map

| Action | File | What it does |
|---|---|---|
| Create | `_layouts/home-v2.html` | Complete standalone homepage — all CSS, HTML, JS |
| Copy | `assets/images/logo-light.png` | From `revamp/logo-light.png` |
| Copy | `assets/images/logo-dark.png` | From `revamp/logo-dark.png` |
| Modify | `index.html` | Front matter only: `layout: home` → `layout: home-v2` |

---

## Task 1: Create branch

**Files:** none

- [ ] **Step 1: Switch to gh-pages and pull latest**

```bash
git checkout gh-pages
git pull origin gh-pages
```

- [ ] **Step 2: Create and switch to feature branch**

```bash
git checkout -b homepage-revamp
```

Expected: `Switched to a new branch 'homepage-revamp'`

---

## Task 2: Copy logo assets

**Files:**
- Create: `assets/images/logo-light.png`
- Create: `assets/images/logo-dark.png`

- [ ] **Step 1: Copy both logos from revamp/**

```bash
cp /home/dtrop/datayoga-io-site/revamp/logo-light.png /home/dtrop/datayoga-io-site/assets/images/logo-light.png
cp /home/dtrop/datayoga-io-site/revamp/logo-dark.png /home/dtrop/datayoga-io-site/assets/images/logo-dark.png
```

- [ ] **Step 2: Verify files exist**

```bash
ls -lh /home/dtrop/datayoga-io-site/assets/images/logo-light.png /home/dtrop/datayoga-io-site/assets/images/logo-dark.png
```

Expected: two files with non-zero size.

- [ ] **Step 3: Commit**

```bash
git add assets/images/logo-light.png assets/images/logo-dark.png
git commit -m "feat: add homepage revamp logo assets"
```

---

## Task 3: Create `_layouts/home-v2.html`

**Files:**
- Create: `_layouts/home-v2.html`

This is the complete standalone homepage layout. It does not extend any other Jekyll layout — it contains its own full HTML shell. The GTM snippet from the existing `_layouts/default.html` is preserved for analytics continuity.

- [ ] **Step 1: Create the file with the full content below**

Create `/home/dtrop/datayoga-io-site/_layouts/home-v2.html` with this exact content:

```html
---
---
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>DataYoga — Applied AI for Finance</title>
<meta name="description" content="DataYoga specializes in applied AI for finance. We turn your spreadsheets, ERP and CRM into a persistent, auditable financial model your team can stand behind.">
<link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/png">
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TH9XLWX');</script>
<!-- End Google Tag Manager -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
<style>
:root{color-scheme:light;
  --bg:#F6F7FB; --surface:#FFFFFF; --fg:#0D0E1F; --muted:#585D72; --line:#DADDE9;
  --accent:#3424C4; --accent-deep:#221782; --accent-ink:#FFFFFF; --accent-soft:#ECEAFB; --blue:#0066D6; --blue-soft:#E3F0FF;
  --warn:#B4740A; --warn-soft:#F6EBD6;
  --grid:rgba(26,0,255,.035);
  --display:"Bricolage Grotesque", "Segoe UI", system-ui, sans-serif;
  --body:"IBM Plex Sans", "Segoe UI", system-ui, sans-serif;
  --mono:"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace;
}
@media (prefers-color-scheme: dark){ :root:not([data-theme="light"]){
  --bg:#0E0F1E; --surface:#161830; --fg:#E9EAF4; --muted:#9EA2BC; --line:#2A2D4A;
  --accent:#9387F0; --accent-deep:#B9B1F5; --accent-ink:#0B0A24; --accent-soft:#221F4D; --blue:#4DA3FF; --blue-soft:#14284A;
  --warn:#E3A33A; --warn-soft:#33280F;
  --grid:rgba(138,122,255,.05); color-scheme:dark; } }
:root[data-theme="dark"]{
  --bg:#0E0F1E; --surface:#161830; --fg:#E9EAF4; --muted:#9EA2BC; --line:#2A2D4A;
  --accent:#9387F0; --accent-deep:#B9B1F5; --accent-ink:#0B0A24; --accent-soft:#221F4D; --blue:#4DA3FF; --blue-soft:#14284A;
  --warn:#E3A33A; --warn-soft:#33280F;
  --grid:rgba(138,122,255,.05); color-scheme:dark; }
.logo img{display:block;height:34px;width:auto}
.logo .on-dark{display:none}
@media (prefers-color-scheme: dark){ :root:not([data-theme="light"]) .logo .on-light{display:none} :root:not([data-theme="light"]) .logo .on-dark{display:block} }
:root[data-theme="dark"] .logo .on-light{display:none}
:root[data-theme="dark"] .logo .on-dark{display:block}
*{box-sizing:border-box}
body{margin:0;padding:0;background:var(--bg);color:var(--fg);font-family:var(--body);font-size:17px;line-height:1.6;
  background-image:linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px);
  background-size:28px 28px;}
.wrap{max-width:1140px;margin:0 auto;padding-inline:24px}
@media (max-width:520px){.wrap{padding-inline:16px}}
h1,h2,h3{font-family:var(--display);font-weight:700;line-height:1.08;text-wrap:balance;margin:0;letter-spacing:-.015em}
p{margin:0}
a{color:inherit}
.eyebrow{font-family:var(--mono);font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;color:var(--accent)}
.btn{display:inline-flex;align-items:center;gap:.5em;font-weight:600;font-size:.98rem;text-decoration:none;
  padding:.8em 1.25em;border-radius:6px;border:1.5px solid var(--accent);transition:transform .15s,background .15s;cursor:pointer}
.btn.primary{background:var(--accent);color:var(--accent-ink)}
.btn.ghost{color:var(--fg);border-color:var(--line);background:var(--surface)}
.btn:hover{transform:translateY(-1px)}
.btn:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
/* nav */
header.nav{position:sticky;top:0;z-index:5;background:color-mix(in srgb,var(--bg) 88%,transparent);
  backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
.nav .wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;padding-block:14px}
.logo{font-family:var(--display);font-weight:700;font-size:1.3rem;letter-spacing:-.02em;text-decoration:none}
.logo span{color:var(--accent)}
.nav ul{display:flex;gap:28px;list-style:none;margin:0;padding:0;font-size:.95rem;color:var(--muted)}
.nav ul a{text-decoration:none}.nav ul a:hover{color:var(--fg)}
.nav .btn{padding:.55em 1em;font-size:.9rem}
@media (max-width:820px){.nav ul{display:none}}
/* hero */
.hero .wrap{padding-block:96px 88px}
.hero h1{font-size:clamp(2.6rem,6vw,4.8rem);margin-top:18px;max-width:18ch}
.hero h1 em{font-style:normal;color:var(--accent-deep)}
.hero .sub{font-size:1.15rem;color:var(--muted);max-width:56ch;margin-top:22px}
.hero .ctas{display:flex;flex-wrap:wrap;gap:12px;margin-top:32px}
.cta-note{margin-top:14px;font-size:.9rem;color:var(--muted);max-width:52ch}
@media (max-width:900px){.hero .wrap{padding-block:56px}}
/* example section */
.example{display:grid;grid-template-columns:.9fr 1.1fr;gap:56px;align-items:center}
.example ul{margin:20px 0 0;padding-left:1.1em;color:var(--muted);display:grid;gap:6px}
@media (max-width:900px){.example{grid-template-columns:1fr;gap:36px}}
/* model card */
.model{background:var(--surface);border:1px solid var(--line);border-radius:10px;box-shadow:0 18px 40px -24px rgba(0,0,0,.35);min-width:0;overflow:hidden}
.model-head{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:14px 18px;border-bottom:1px solid var(--line);font-family:var(--mono);font-size:.78rem;color:var(--muted)}
.model-head b{color:var(--fg);font-weight:500}
.tag{background:var(--warn-soft);color:var(--warn);padding:2px 8px;border-radius:99px;font-size:.7rem;white-space:nowrap}
.model-body{padding:18px;display:grid;gap:18px}
.ctrl label{display:flex;justify-content:space-between;font-size:.9rem;font-weight:500;gap:8px}
.ctrl output{font-family:var(--mono);color:var(--accent)}
.ctrl input{width:100%;accent-color:var(--accent);margin-top:6px}
.ctrl small{font-family:var(--mono);font-size:.72rem;color:var(--muted)}
.results{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line)}
.res{padding:16px 18px;min-width:0}
.res+.res{border-left:1px solid var(--line)}
.res .k{font-size:.78rem;color:var(--muted)}
.res .v{font-family:var(--mono);font-size:1.5rem;font-variant-numeric:tabular-nums;font-weight:500;margin-top:2px}
.res .d{font-family:var(--mono);font-size:.78rem;font-variant-numeric:tabular-nums}
.d.up{color:var(--warn)}.d.down{color:var(--accent)}
.src{display:flex;flex-wrap:wrap;gap:6px;padding:12px 18px 16px;border-top:1px dashed var(--line)}
.src span{font-family:var(--mono);font-size:.7rem;background:var(--blue-soft);color:var(--blue);padding:3px 8px;border-radius:4px}
/* sections */
section{padding-block:88px;border-top:1px solid var(--line)}
@media (max-width:600px){section{padding-block:60px}}
.sec-head{max-width:720px}
.sec-head h2{font-size:clamp(1.9rem,3.6vw,2.8rem);margin-top:12px}
.sec-head p{color:var(--muted);margin-top:16px;font-size:1.08rem;max-width:62ch}
/* problem */
.problem-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:48px;margin-top:48px;align-items:start}
.stat{background:var(--warn-soft);border-radius:10px;padding:32px}
.stat .num{font-family:var(--display);font-weight:700;font-size:clamp(4rem,9vw,6.5rem);line-height:1;color:var(--warn);letter-spacing:-.03em}
.stat p{margin-top:12px;font-size:1.05rem}
.stat small{display:block;margin-top:16px;font-size:.8rem;color:var(--muted)}
.reasons{display:grid;grid-template-columns:1fr 1fr;gap:32px 36px}
.reasons h3{font-size:1.2rem}
.reasons p{color:var(--muted);margin-top:8px;font-size:.98rem}
@media (max-width:900px){.problem-grid{grid-template-columns:1fr}}
@media (max-width:560px){.reasons{grid-template-columns:1fr}}
/* approach */
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:48px;border:1px solid var(--line);border-radius:10px;background:var(--surface);overflow:hidden}
.step{padding:28px;min-width:0}
.step+.step{border-left:1px solid var(--line)}
.step .n{font-family:var(--mono);font-size:.8rem;color:var(--accent)}
.step h3{font-size:1.45rem;margin-top:10px}
.step p{color:var(--muted);margin-top:10px;font-size:.98rem}
.punch{margin-top:28px;font-family:var(--display);font-size:1.35rem;font-weight:500}
.punch b{color:var(--accent)}
@media (max-width:820px){.steps{grid-template-columns:1fr}.step+.step{border-left:0;border-top:1px solid var(--line)}}
/* outcomes */
.outcomes{display:grid;grid-template-columns:repeat(3,1fr);gap:36px;margin-top:48px}
.outcome{border-top:3px solid var(--accent);padding-top:18px}
.outcome h3{font-size:1.5rem}
.outcome p{color:var(--muted);margin-top:10px}
@media (max-width:820px){.outcomes{grid-template-columns:1fr;gap:28px}}
/* use cases */
.uses{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-top:40px;border-top:1px solid var(--line)}
.uses div{padding:20px 0;border-bottom:1px solid var(--line);display:flex;gap:16px;align-items:baseline;font-size:1.08rem;font-weight:500}
.uses div:nth-child(odd){padding-right:24px}
.uses code{font-family:var(--mono);font-size:.75rem;color:var(--muted);font-weight:400;flex:none}
@media (max-width:640px){.uses{grid-template-columns:1fr}}
/* why */
.why{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
.why ul{list-style:none;margin:0;padding:0;display:grid;gap:14px}
.why li{display:flex;gap:12px;font-size:1.05rem}
.why li::before{content:"";flex:none;width:8px;height:8px;margin-top:.6em;background:var(--blue);border-radius:50%}
@media (max-width:820px){.why{grid-template-columns:1fr}}
/* contact form */
.contact-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:56px;align-items:start}
.contact-form{display:grid;gap:16px}
.form-group{display:grid;gap:6px}
.form-group label{font-size:.9rem;font-weight:500;color:var(--fg)}
.form-group .optional{opacity:.6;font-weight:400}
.form-group input,.form-group select,.form-group textarea{
  width:100%;padding:.7em 1em;border:1.5px solid var(--line);border-radius:6px;
  background:var(--surface);color:var(--fg);font-family:var(--body);font-size:.95rem;
  transition:border-color .15s;-webkit-appearance:none;appearance:none}
.form-group select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23585D72' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 1em center;padding-right:2.5em}
.form-group textarea{resize:vertical;min-height:88px}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{outline:none;border-color:var(--accent)}
@media (max-width:820px){.contact-grid{grid-template-columns:1fr}}
/* footer */
footer{padding-block:32px 48px;font-size:.88rem;color:var(--muted);border-top:1px solid var(--line)}
footer .wrap{display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;align-items:center}
.footer-links{display:flex;gap:24px;flex-wrap:wrap}
.footer-links a{text-decoration:none;color:var(--muted)}.footer-links a:hover{color:var(--fg)}
@media (prefers-reduced-motion:reduce){*{transition:none!important}}
</style>
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TH9XLWX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<header class="nav">
  <div class="wrap">
    <a class="logo" href="/" aria-label="DataYoga home">
      <img class="on-light" src="/assets/images/logo-light.png" alt="DataYoga">
      <img class="on-dark" src="/assets/images/logo-dark.png" alt="DataYoga">
    </a>
    <ul>
      <li><a href="#approach">Approach</a></li>
      <li><a href="#use-cases">Use cases</a></li>
      <li><a href="#why">Why DataYoga</a></li>
    </ul>
    <a class="btn primary" href="#contact">Schedule a conversation</a>
  </div>
</header>

<main id="top">
  <div class="hero">
    <div class="wrap">
      <div class="eyebrow">Applied AI for finance</div>
      <h1>AI financial modelling, <em>built for production.</em></h1>
      <p class="sub">DataYoga specializes in applied AI for finance. We turn your spreadsheets, ERP and CRM into a persistent, auditable model, so your finance team can see what's happening, forecast with confidence and test any "what if" in minutes.</p>
      <div class="ctas">
        <a class="btn primary" href="#contact">Book a 30-min discovery call</a>
      </div>
      <p class="cta-note">Show us the spreadsheet everyone's afraid to touch. We'll show you how it could work as a living, AI-powered model.</p>
    </div>
  </div>

  <section id="problem">
    <div class="wrap">
      <div class="sec-head">
        <div class="eyebrow">The POC trap</div>
        <h2>Chat demos are exciting. Production is where they fail.</h2>
        <p>Everyone has seen the demo: upload a spreadsheet, ask a question, get a neat answer. It's impressive, and it's easy to fund. Then it meets real finance work.</p>
      </div>
      <div class="problem-grid">
        <div class="stat">
          <div class="num">70%+</div>
          <p>of AI projects never make it to production.</p>
          <small>RAND puts AI project failure above 80%. MIT's 2025 study found about 95% of generative AI pilots deliver no measurable P&amp;L impact.</small>
        </div>
        <div class="reasons">
          <div><h3>Answers aren't models</h3><p>A chat answers one question and then forgets it. Finance needs numbers that stay put, add up and can be rerun next month.</p></div>
          <div><h3>No audit trail</h3><p>If you can't trace a figure back to the cell or record it came from, you can't sign off on it.</p></div>
          <div><h3>The data is scattered</h3><p>The logic lives in dozens of Excel files, the actuals in your ERP, the pipeline in your CRM. A chatbot sees only the part you pasted in.</p></div>
          <div><h3>"Almost right" counts as wrong</h3><p>A 2% error in a forecast or a provision isn't a rounding issue. It's a restatement.</p></div>
        </div>
      </div>
    </div>
  </section>

  <section id="approach">
    <div class="wrap">
      <div class="sec-head">
        <div class="eyebrow">Our approach</div>
        <h2>We build models, not chatbots.</h2>
        <p>We use AI for the work it does well: mapping messy spreadsheets, reconciling sources and capturing the business logic hidden in formulas. Its output goes into a structured financial model that is deterministic, versioned and traceable.</p>
      </div>
      <div class="steps">
        <div class="step"><div class="n">Step 1</div><h3>Extract</h3><p>AI maps your spreadsheets, ERP and CRM data and captures every driver behind the numbers: rates, tiers, assumptions and dependencies.</p></div>
        <div class="step"><div class="n">Step 2</div><h3>Model</h3><p>Those drivers feed a persistent model that's connected to your actuals and recalculates as the data changes.</p></div>
        <div class="step"><div class="n">Step 3</div><h3>Ask</h3><p>Your team explores the model in plain language and runs scenarios, and every answer links back to its source.</p></div>
      </div>
      <p class="punch">The AI does the reasoning. <b>Your model does the math.</b></p>
    </div>
  </section>

  <section id="outcomes">
    <div class="wrap">
      <div class="sec-head">
        <div class="eyebrow">What you get</div>
        <h2>Numbers your finance team can stand behind.</h2>
      </div>
      <div class="outcomes">
        <div class="outcome"><h3>Visibility</h3><p>One view of the drivers, commitments and exposures that are scattered across Excel, your ERP and your CRM today.</p></div>
        <div class="outcome"><h3>Predictability</h3><p>Forecasts and provisions built from your real business logic instead of last year's spreadsheet.</p></div>
        <div class="outcome"><h3>What-if</h3><p>Change a rate, a volume or an assumption and see the effect on P&amp;L and cash right away.</p></div>
      </div>
    </div>
  </section>

  <section id="example">
    <div class="wrap example">
      <div class="sec-head">
        <div class="eyebrow">One example</div>
        <h2>A what-if, traced to source.</h2>
        <p>Here is a single scenario on illustrative numbers: a change in sales volume or commission rate, and its effect on the Q4 provision. Every figure links back to the file or system it came from.</p>
        <p style="margin-top:16px">The same model answers questions across revenue, cash, headcount and pricing. This is one of many.</p>
      </div>
      <div class="model" aria-label="Example what-if model">
        <div class="model-head"><span><b>Q4 commission provision</b> · scenario</span><span class="tag">Illustrative example</span></div>
        <div class="model-body">
          <div class="ctrl">
            <label for="vol">Q4 sales volume vs. plan <output id="volOut">+0%</output></label>
            <input id="vol" type="range" min="-20" max="30" step="1" value="0">
            <small>Plan: $12.4M revenue</small>
          </div>
          <div class="ctrl">
            <label for="rate">Tier 2 commission rate <output id="rateOut">5.0%</output></label>
            <input id="rate" type="range" min="4" max="8" step="0.5" value="5">
            <small>Tier 1: 3% up to $10M</small>
          </div>
        </div>
        <div class="results">
          <div class="res"><div class="k">Q4 revenue</div><div class="v" id="rev">$12.40M</div><div class="d" id="revD">on plan</div></div>
          <div class="res"><div class="k">Commission provision</div><div class="v" id="prov">$420K</div><div class="d" id="provD">on plan</div></div>
        </div>
        <div class="src" aria-label="Sources">
          <span>CRM · Q4 pipeline</span><span>Commissions_FY26.xlsx · Tiers!C4:C7</span><span>ERP · GL 6210</span>
        </div>
      </div>
    </div>
  </section>

  <section id="use-cases">
    <div class="wrap">
      <div class="sec-head">
        <div class="eyebrow">Use cases</div>
        <h2>Where we start.</h2>
      </div>
      <div class="uses">
        <div><code>P&amp;L</code>Commission and incentive provisions</div>
        <div><code>REV</code>Revenue forecasting and budget vs. actuals</div>
        <div><code>CASH</code>Cash flow scenarios and liquidity planning</div>
        <div><code>OPEX</code>Pricing, headcount and cost what-ifs</div>
      </div>
    </div>
  </section>

  <section id="why">
    <div class="wrap why">
      <div class="sec-head">
        <div class="eyebrow">Why DataYoga</div>
        <h2>Enterprise data expertise, amplified by AI.</h2>
        <p>Our team has designed, built and modernized enterprise data platforms, from complex ETL and Informatica migrations to modern cloud stacks. We apply AI on top of that expertise. That's why our projects reach production: we start with the data, the lineage and the controls, and the interface comes last.</p>
      </div>
      <ul>
        <li>Specialists in applied AI for finance</li>
        <li>Production from day one: auditable, versioned and secure</li>
        <li>We work alongside your team, not around it</li>
      </ul>
    </div>
  </section>

  <section id="contact">
    <div class="wrap">
      <div class="contact-grid">
        <div class="sec-head">
          <div class="eyebrow">Get in touch</div>
          <h2>Tell us what's slowing your team down.</h2>
          <p>Share the challenge. We'll show you what's possible.</p>
        </div>
        <form class="contact-form" action="https://formspree.io/f/mdeapnak" method="POST">
          <input type="hidden" name="_next" value="https://calendar.app.google/2VFk5nRs8ufa8pZQA">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" type="text" name="name" required placeholder="Your name">
          </div>
          <div class="form-group">
            <label for="email">Work email</label>
            <input id="email" type="email" name="email" required placeholder="you@company.com">
          </div>
          <div class="form-group">
            <label for="role">Role</label>
            <select id="role" name="role" required>
              <option value="" disabled selected>Select your role</option>
              <option>CFO</option>
              <option>CRO</option>
              <option>VP Finance</option>
              <option>FP&A Lead</option>
              <option>Controller</option>
              <option>CEO / Founder</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="improve">What would you like to improve? <span class="optional">(optional)</span></label>
            <textarea id="improve" name="improve" placeholder="e.g. our commission provisions take 3 days to close every month"></textarea>
          </div>
          <button type="submit" class="btn primary">Schedule a conversation →</button>
        </form>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="wrap">
    <span>© 2026 DataYoga · Applied AI for finance</span>
    <nav class="footer-links" aria-label="Other offerings">
      <a href="/informatica-to-snowflake-migration/">Informatica Migration</a>
      <a href="/datayoga-transform/">DataYoga Transform</a>
      <a href="mailto:info@datayoga.io">info@datayoga.io</a>
    </nav>
  </div>
</footer>

<script>
(function(){
  const vol=document.getElementById('vol'), rate=document.getElementById('rate');
  const PLAN=12.4, T1=10, R1=0.03, PLAN_RATE=0.05;
  const prov=(rev,r)=>R1*Math.min(rev,T1)+r*Math.max(rev-T1,0);
  const planProv=prov(PLAN,PLAN_RATE);
  function delta(el,d,fmt){
    el.className='d '+(Math.abs(d)<1e-9?'':(d>0?'up':'down'));
    el.textContent=Math.abs(d)<1e-9?'on plan':(d>0?'+':'−')+fmt(Math.abs(d))+' vs. plan';
  }
  function update(){
    const v=+vol.value, r=+rate.value/100;
    const rev=PLAN*(1+v/100), p=prov(rev,r);
    document.getElementById('volOut').textContent=(v>0?'+':'')+v+'%';
    document.getElementById('rateOut').textContent=(+rate.value).toFixed(1)+'%';
    document.getElementById('rev').textContent='$'+rev.toFixed(2)+'M';
    document.getElementById('prov').textContent='$'+Math.round(p*1000)+'K';
    delta(document.getElementById('revD'),rev-PLAN,x=>'$'+x.toFixed(2)+'M');
    delta(document.getElementById('provD'),p-planProv,x=>'$'+Math.round(x*1000)+'K');
    document.getElementById('revD').className='d';
  }
  vol.addEventListener('input',update); rate.addEventListener('input',update); update();
})();
</script>
</body>
</html>
```

- [ ] **Step 2: Verify Jekyll can parse the file (no Liquid errors)**

```bash
cd /home/dtrop/datayoga-io-site && bundle exec jekyll build 2>&1 | head -30
```

Expected: `Build complete!` or `done in X seconds` with no errors. If you see a Liquid/YAML parse error, check the front matter dashes at the very top of the file.

- [ ] **Step 3: Commit**

```bash
git add _layouts/home-v2.html
git commit -m "feat: add home-v2 standalone layout with AI finance page and contact form"
```

---

## Task 4: Update `index.html`

**Files:**
- Modify: `index.html` (front matter only)

- [ ] **Step 1: Replace the layout line in index.html front matter**

Open `index.html`. Find this line in the YAML front matter (near the top):

```yaml
layout: home
```

Change it to:

```yaml
layout: home-v2
```

Leave every other line in the front matter untouched.

- [ ] **Step 2: Build and preview locally**

```bash
cd /home/dtrop/datayoga-io-site && bundle exec jekyll serve --port 4000
```

Open `http://localhost:4000` in your browser. Verify:
- New homepage loads (Bricolage Grotesque font, indigo accent, grid background)
- Logo displays in the header
- All section anchors work (Approach, Use cases, Why DataYoga scroll correctly)
- Interactive model card sliders update the revenue/provision values
- Contact form displays all fields (Name, Work email, Role dropdown, textarea, submit button)
- Footer shows Informatica Migration and DataYoga Transform links
- Navigate to `/about/`, `/etl-migration/` — confirm those pages still use the old theme (Bootstrap, existing header/nav)

Stop the server with `Ctrl+C` when done.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: switch homepage to new AI finance layout"
```

---

## Task 5: Push branch and open PR

**Files:** none

- [ ] **Step 1: Push the branch**

```bash
git push -u origin homepage-revamp
```

- [ ] **Step 2: Open a pull request targeting gh-pages**

```bash
gh pr create \
  --base gh-pages \
  --title "Homepage revamp: Applied AI for finance" \
  --body "Replaces the homepage with the new AI-for-finance design. All existing page URLs unchanged. New inline contact form posts to Formspree (mdeapnak) and redirects to Google Calendar booking. Legacy nav links (Informatica Migration, DataYoga Transform) in footer."
```

- [ ] **Step 3: Merge the PR**

```bash
gh pr merge --squash --delete-branch
```

GitHub Pages will redeploy automatically from `gh-pages`. It typically takes 1–3 minutes. Check https://datayoga.io after the deploy completes.

---

## Post-deploy checklist

- [ ] Homepage loads at datayoga.io with new design
- [ ] Submit a test form entry — confirm it appears in Formspree dashboard and redirects to Google Calendar
- [ ] `/about/`, `/etl-migration/`, `/datayoga-transform/` still load correctly with old theme
- [ ] Footer links on homepage navigate to correct legacy pages
