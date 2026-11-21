# Abdul Aziz Butt Memorial Website

A memorial for **Abdul Aziz Butt (1916–2016)**, Abbaji to his family: teacher, headmaster, Inspector of Schools, college principal, and professor and Registrar of the University of Jammu and Kashmir (later the University of Kashmir).

The pages are structured as a register. Home (`/`) is a title page. The life is at `/biography`. The dated list is at `/timeline`. Sources, along with claims the record does not support, are at `/sources`. `/legacy` redirects to `/biography#family`. Photographs (`/gallery`) are not linked in navigation until they can be published with a date, a place, and a source.

Every claim distinguishes between **public record**, **his own account**, **family memory**, and **not found**. The Urdu name remains `عبدالعزیز بھٹ` until a signature, letter, or gravestone confirms the spelling.

## Tech Stack

- **[Astro](https://astro.build)** — Static site generator (zero JS by default)
- **CSS Custom Properties (OKLCH)** — Semantic design tokens in `src/styles/global.css`
- **TypeScript** — Typed data modules in `src/data/`
- **Vercel / Netlify** — Static deployment (`dist/`)

## Project Structure

```text
/
├── public/
│   ├── fonts/                 # Self-hosted Source Serif 4 & subset Noto Nastaliq Urdu
│   ├── apple-touch-icon.png   # 180×180 iOS home screen icon
│   ├── favicon.svg            # Single-color monogram favicon
│   ├── og-image.png           # 1200×630 social preview card
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Chapter.astro      # Place-and-years chapter section
│   │   ├── CivilListLine.astro# Quoted Civil List / Calendar register lines
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Inscription.astro  # Date inscription
│   │   ├── Memory.astro       # Explicitly labelled family-memory block
│   │   ├── Note.astro         # Collapsible endnote item
│   │   └── Prose.astro        # Reading column layout
│   ├── data/
│   │   ├── chapters.ts        # Chapter metadata & table of contents
│   │   ├── register.ts        # Chronological register entries
│   │   ├── site.ts            # Core biographical metadata
│   │   ├── sources.ts         # Cited records & unsupported claims
│   │   └── status.ts          # Evidence status definitions
│   ├── layouts/
│   │   └── BaseLayout.astro   # Semantic layout, font preloads, OG & JSON-LD
│   ├── pages/
│   │   ├── index.astro        # Title page
│   │   ├── biography.astro    # Life story by chapter + collapsible endnotes
│   │   ├── timeline.astro     # Dated register
│   │   ├── sources.astro      # Sources & what the record does not show
│   │   ├── gallery.astro      # Unlinked photographs placeholder page
│   │   └── 404.astro          # Custom not-found page
│   └── styles/
│       └── global.css         # Typography, OKLCH tokens, register & print styles
├── wiki/                      # Project research wiki, redesign plan & open checks
├── research/                  # Research reports, notes & family statements
├── raw/                       # Immutable archived research imports & manifests
├── astro.config.mjs
├── netlify.toml
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Commands

```bash
npm install      # Install dependencies
npm run dev      # Start local dev server at http://localhost:4321
npm run build    # Run astro check && astro build -> dist/
npm run preview  # Preview the production build locally
```

## Design & Research Documentation

- [DESIGN.md](./DESIGN.md) — Current register design system (tokens, typography, status labels, print styles)
- [CONTRIBUTING.md](./CONTRIBUTING.md) — How to add records, family memories, or photographs with provenance
- [DEPLOYMENT.md](./DEPLOYMENT.md) — Deployment notes for Vercel and Netlify
- [wiki/index.md](./wiki/index.md) — Research wiki index, content plan, redesign plan, and [open confirmations](./wiki/questions/open-confirmations.md)
