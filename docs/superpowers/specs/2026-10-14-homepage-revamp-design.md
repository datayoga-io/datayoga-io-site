# Homepage Revamp — Design Spec
**Date:** 2026-10-14  
**Branch:** `homepage-revamp` (off `gh-pages`)

---

## Goal

Replace the current migration-focused homepage with a new "Applied AI for finance" landing page. All existing pages and URLs are preserved. The new homepage tells a focused story to a CFO/CRO audience and ends with an inline lead-capture form that books a discovery call.

---

## Scope

**In scope:**
- New homepage (`/`) only
- New standalone Jekyll layouts (`bare`, `home-v2`)
- Inline contact form wired to Formspree + Google Calendar redirect
- Logo assets copied from `revamp/`
- Footer updated with legacy offering links

**Out of scope:**
- All existing pages (`/about/`, `/etl-migration/`, `/informatica-to-dbt-migration/`, etc.) — untouched
- `_data/navigation.yml` — untouched (used by existing pages)
- Any existing layout, include, or theme CSS

---

## Page Structure

The new homepage is the prototype at `revamp/index.html` with the following modifications:

### Sections (in order)
1. **Nav** — logo + anchor links + CTA
2. **Hero** — full-width headline + single CTA button
3. **Problem** (`#problem`) — "The POC trap"
4. **Approach** (`#approach`) — 3-step model
5. **Outcomes** (`#outcomes`) — Visibility / Predictability / What-if
6. **Example** (`#example`) — what-if model card with interactive sliders
7. **Use cases** (`#use-cases`)
8. **Why DataYoga** (`#why`)
9. **Contact** (`#contact`) — inline lead form ← replaces the CTA box
10. **Footer** — copyright + legacy links

---

## Navigation

### Header nav
```
[Logo]  Approach  Use cases  Why DataYoga  [Schedule a conversation]
```
- "Schedule a conversation" button scrolls to `#contact`
- All other links are on-page anchors
- Hidden on mobile (< 820px) — existing CSS handles this

### Hero CTA
- Single button: "Book a 30-min discovery call" → scrolls to `#contact`
- Ghost button removed

### Footer
```
© 2026 DataYoga · Applied AI for finance    Informatica Migration   DataYoga Transform   info@datayoga.io
```
- "Informatica Migration" → `/informatica-to-snowflake-migration/`
- "DataYoga Transform" → `/datayoga-transform/`

---

## Contact Form (`#contact`)

Replaces the `.cta-box` block. Two-column layout: copy left, form right.

### Copy
- **Headline:** "Tell us what's slowing your team down."
- **Sub-copy:** "Share the challenge. We'll show you what's possible."

### Fields
| Field | Type | Required | Notes |
|---|---|---|---|
| Name | text | yes | |
| Work email | email | yes | |
| Role | select | yes | CFO, CRO, VP Finance, FP&A Lead, Controller, CEO / Founder, Other |
| What would you like to improve? | textarea | no | placeholder: "e.g. our commission provisions take 3 days to close every month" |

### Submit button
"Schedule a conversation →"

### Backend
- **Action:** `https://formspree.io/f/mdeapnak`
- **Method:** POST
- **Redirect:** via hidden `_next` field in the form HTML — no Formspree dashboard config needed:
  ```html
  <input type="hidden" name="_next" value="https://calendar.app.google/2VFk5nRs8ufa8pZQA">
  ```

---

## Jekyll Implementation

### New files
| File | Purpose |
|---|---|
| `_layouts/bare.html` | Minimal HTML wrapper — no theme CSS/JS, just `<html>/<head>/<body>` + Jekyll SEO tag |
| `_layouts/home-v2.html` | Extends `bare`. Full prototype HTML with form replacing `#contact` section |
| `assets/images/logo-light.png` | Copied from `revamp/logo-light.png` |
| `assets/images/logo-dark.png` | Copied from `revamp/logo-dark.png` |

### Modified files
| File | Change |
|---|---|
| `index.html` | Front matter: `layout: home` → `layout: home-v2` |

### Logo paths in `home-v2.html`
```html
<img class="on-light" src="/assets/images/logo-light.png" alt="DataYoga">
<img class="on-dark"  src="/assets/images/logo-dark.png"  alt="DataYoga">
```

### `_layouts/bare.html` structure
```html
---
---
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>{{ page.title | default: site.title }}</title>
  <meta name="description" content="{{ page.description | default: site.description }}">
  {% seo %}
</head>
<body>
  {{ content }}
</body>
</html>
```

---

## URLs — No Changes

All existing permalinks are unchanged. No redirects needed.

---

## Assets

- `revamp/logo-light.png` → `assets/images/logo-light.png`
- `revamp/logo-dark.png` → `assets/images/logo-dark.png`
- Google Fonts loaded from CDN (Bricolage Grotesque, IBM Plex Sans, IBM Plex Mono) — no local assets needed
- `revamp/` directory can be removed after the build is verified

---

## Out-of-scope follow-ups (post-launch)

- Update existing `/contact/` page copy for migration audience
- Dark-mode logo swap (currently both variants use their respective files)
- Mobile nav hamburger menu for the new homepage
