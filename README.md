# WMC Events — React Clone

Pixel-perfect React clone of https://events.wealthmastersclub.com/

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Tech Stack

- Vite 5 + React 18 + TypeScript
- Swiper 8 (carousels)
- All CSS from original WordPress site (verbatim, in `public/`)

## Missing Assets

See `MIGRATION_NOTES.md` for:
- Missing background image (`coert-world.long_.png`)
- Analytics integrations not included
- Social share links not wired

## Environment

No environment variables required. All external links (Quicket booking, social media) are hardcoded.
