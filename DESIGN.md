# Design System

This site is designed as **a register, not a heritage poster**. Abdul Aziz Butt spent his working life in the Kashmir Education Service and served as Registrar of the University of Jammu and Kashmir (later the University of Kashmir) from September 1962 to 1971—keeping the university's records and seal. The visual language reflects that quiet documentary discipline.

Full design rationale and verification notes live in [wiki/topics/redesign-plan.md](./wiki/topics/redesign-plan.md).

## Core Principles

1. **One uninterrupted reading column.** Prose sits in a left-aligned `65ch` measure so the life story reads cleanly on phone and desktop, with numbered references linking to collapsible endnotes at the bottom of `/biography`.
2. **Evidence is structural.** Every claim is marked with a written status label—never by color alone—distinguishing public record, his own account, family memory, and gaps in the record.
3. **One repeated ornament.** Chapters and entries are structured by hairline rules with dates at the start. No decorative cards, gradients, or stock heritage motifs.
4. **Print-first permanence.** Print styles render black on white, expand endnotes automatically, and wrap full source URLs cleanly on `/sources`.

## Color Tokens

Six semantic OKLCH tokens defined in `src/styles/global.css` and exposed in `tailwind.config.cjs`:

| Token | OKLCH | Role |
|---|---|---|
| `--paper` | `0.968 0.008 85` | Page surface (warm archival paper) |
| `--paper-deep` | `0.935 0.012 80` | Subtle tonal band (header/register accents) |
| `--ink` | `0.24 0.018 60` | Primary body and heading text |
| `--ink-muted` | `0.46 0.016 60` | Notes, dates, and secondary labels |
| `--lake` | `0.42 0.045 205` | Links and public-record markers (winter-haze Dal green-grey) |
| `--chinar` | `0.46 0.115 40` | Family-memory marker only (late-autumn rust) |

Hairlines use `--rule: oklch(var(--ink) / 0.14)` and `--rule-strong: oklch(var(--ink) / 0.3)` (`0.5px` on 2x displays).

## Typography

Both typefaces are self-hosted in `public/fonts/` and preloaded from `src/layouts/BaseLayout.astro`:

- **English (`--font-serif`):** *Source Serif 4* (variable roman and italic, optical sizing enabled, oldstyle proportional numerals in prose, lining tabular numerals in dates/registers, small caps for labels).
- **Urdu (`--font-urdu`):** *Noto Nastaliq Urdu* (regular weight only, never italicized, generous `2.0` line height for the name display).

## Evidence Status System

Defined in `src/data/status.ts` and rendered by `Note.astro`, `Memory.astro`, and `sources.astro`:

- **Public record** (`--lake`) — Contemporary government Civil Lists, university calendars, official reports, and published obituaries.
- **His own account** (`--ink-muted`) — Details from his December 2011 interview or quoted passages in local histories.
- **Family memory** (`--chinar`) — Oral history and lived knowledge preserved by his family (including the nickname *Abbaji*, November 1947 details, and the Oxford travelling-scholar memory).
- **Not found / Not used** (`--ink-muted`) — Earlier claims dropped from the biography and documented transparently on `/sources`.

## Layout & Components

- `Prose.astro` — Centered page container capping reading copy to `65ch`.
- `Chapter.astro` — Place-and-years section divider (`1941–1947 · Kishtwar and Mirpur`, etc.).
- `CivilListLine.astro` — Typographic quotation of printed Civil List / University Calendar entries.
- `Memory.astro` & `Inscription.astro` — Distinct framing for family memory and date inscriptions.
- `Note.astro` & `Ref.astro` — Numbered superscript references linked to collapsible endnotes at the foot of `/biography`.
