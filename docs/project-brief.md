# The Story of ShipRocked — Fundraising Website

## Project Overview

A fundraising landing page for *The Story of ShipRocked*, a senior thesis documentary film produced by ASK4 Entertainment. The film documents ShipRocked, a heavy metal rock cruise festival that has run for sixteen years in the Caribbean.

The campaign runs on Seed & Spark from September 7 – November 7, 2026. This website supports the campaign by driving awareness and donations.

---

## Goals

- Drive donations and publicity for the film
- Direct users to the Seed & Spark campaign page
- Communicate the story, the crew, and the reward tiers clearly
- Hand off ownership of the site and repo to ASK4 Entertainment at completion

---

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel
- Repo on GitHub (to be transferred to ASK4 Entertainment)

---

## Content Architecture

All editable content lives in a single file:

```
/content/site-content.ts
```

This file contains all headlines, body copy, tier names, prices, descriptions, image paths, and footer text. No content is hardcoded inline in components. A non-technical producer should be able to open this file and edit text values directly without touching any component code.

---

## Pages (5 total)

### 0 — Splash / Entrance
The entry animation start screen. Full-bleed hero with the ShipRocked logo, subtitle, and two primary CTAs: WATCH TRAILER and DONATE. No header text — just the logo, subtitle line, and buttons per creative direction.

### 1 — Home
- Floating nav header with logo top-left and DONATE NOW CTA top-right
- Full-bleed hero with samurai/Ronin imagery
- "A floating world, decades in the making" intro section with film still
- Three-card section: THE LINEUP, THE FAMILY, THE PRODUCTION
- Campaign progress bar with fundraising goal
- Footer

### 2 — About (Production Details)
- Hero: "30 terabytes and counting" with BTS photo treatment (large photo, fades to black via gradient)
- Timeline: "From dock to deadline" with production stills carousel on the right
- Meet the Crew (Albert Koenig, Matt Davis, Silas Grasse)
- Meet the Characters (subjects TBD)
- Transparency: budget breakdown chart
- Footer

### 3 — Donate
- Seven reward tiers:
  - Tier I: $25 — Newb
  - Tier II: $100 — ShipRocker
  - Tier III: $250 — Skully's Daimyo
  - Tier IV: $500 — Skully's Hand (most claimed)
  - Tier V: $1,500 — Survivor
  - Tier VI (coming soon): unlisted price
  - Tier VII: $6,000 — Oceanview Cabin for Two (top reward, visually distinct)
- Campaign progress bar
- Seed & Spark section with transparent logo and link
- Footer

### 4 — Contact
- Marketing & Press contact block
- General Inquiries contact block
- Contact form (Name, Email, Message)
- Social buttons: Instagram, Facebook, YouTube, Join Mailing List (equal width, equal spacing, text centered)
- Footer

---

## Nav Behavior

- Floating header present on all pages
- Active page indicated by a full-width underline beneath the nav label (matches text width exactly)
- Logo top-left on all pages (The Story of ShipRocked color logo)
- DONATE NOW button top-right on all pages

---

## Footer

Consistent footer across all pages:
- Logo bottom-left
- EXPLORE column: Home, About, Donate, Contact
- CONTACT column: Marketing inquiries email, info@ask4ent.com
- CONNECT column: Instagram, Mailing list
- Copyright line: © 2026 THE STORY OF SHIPROCKED — A SENIOR THESIS FILM

---

## Assets

| Asset | Notes |
|---|---|
| ShipRocked Logo | `_SRDC__Color_Logo_1.png` — used in nav and footer |
| Seed & Spark Logo | `seedandsparktransparent.png` — transparent version for dark backgrounds |
| Hero imagery | Samurai / Ronin / crowd / cruise photography — TBD from team |
| BTS photos | Behind-the-scenes production stills — TBD from team |
| Production stills | For timeline carousel on About page — TBD from Matt Davis |
| Film still | For About page intro section |
| Crew portraits | Albert Koenig, Matt Davis, Silas Grasse |
| Subject portraits | ShipRocked attendees — names TBD |

---

## Key Notes for Development

- The Seed & Spark logo must render on a dark background — use the transparent PNG version
- The BTS photo on the About hero should be large and fade to black via a CSS gradient overlay at the bottom
- The production stills on the About timeline should be a carousel or scrollable component
- The social buttons on the Contact page must all be equal width and height with equal gaps between them and text centered inside each button
- The cabin tier (Tier VII, $6,000) should be visually distinct from the other six tiers — full-width card, different treatment
- Campaign dates are hard: September 7 – November 7, 2026
- Fundraising goal: $30,000
- Seed & Spark platform policy: campaign must reach 80% of goal to release any funds

---

## Contacts

- Production: ASK4 Entertainment — info@ask4ent.com
- Film team: shiprocked@koenigentertainment.com
- Seed & Spark campaign: to be linked once live

---

## Design Source

Mid-fi wireframes are in Figma. File key: `lrBK3aBQqS2jpL7SKzCxh5`

Pages: 0 — Splash, 1 — Home, 2 — About, 3 — Donate, 4 — Contact

---

## Handoff

At project completion, the GitHub repo and Vercel project will be transferred to ASK4 Entertainment. See the one-page content editing guide (to be written) for instructions on how to update text, images, and tier details without touching component code.
