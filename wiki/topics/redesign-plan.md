---
id: topic-redesign-plan
type: topic
title: Site redesign plan
updated: 2026-11-11
evidence_as_of: 2026-11-11
source_ids: []
---

# Site redesign plan

A ground-up redesign of the Abbaji memorial site, written for the agent who will build it. It covers what the current site does, what the new one should feel like, the eight design skills and when to use each, the build order (biography first), and what must not be lost along the way.

**Provenance.** The diagnosis comes from the repository at commit `00ceef7`, read on 2026-11-11. Life facts come from the founding research imported on 2026-11-11 ([manifest](../../raw/manifests/2026-11-11-founding-research.json)). No source pages exist in this wiki yet, so `source_ids` is empty. Citations point to the archived research files and to repository files instead. Once source pages exist, replace these links with source-page citations. The design choices themselves are judgment, not evidence, and are labelled as decisions (D1–D10).

Short names for the archived research used below:

- **Report**: [report.md](../../raw/imports/2026-11-11-founding-research/research/2026-11-11-founding/report.md)
- **Person notes**: [abdul-aziz-butt.md](../../raw/imports/2026-11-11-founding-research/research/2026-11-11-founding/notes/abdul-aziz-butt.md)
- **Gap notes**: [documentary-gap.md](../../raw/imports/2026-11-11-founding-research/research/2026-11-11-founding/notes/documentary-gap.md)
- **Founding notes**: [founding.md](../../raw/imports/2026-11-11-founding-research/research/2026-11-11-founding/notes/founding.md)

## Summary

The current site combines two templates. One is a generic AI landing page: hero, three cards, a stats row and a pair of buttons. The other is a tourist's inventory of Kashmir: chinar clip-art, shikara icons, mountain silhouettes and gold gradients. Neither half is about this man.

The man was a schoolteacher, headmaster, inspector of schools, college principal and, by the university's own list, its Registrar from 1962 to 1971. Under the 1969 Act the Registrar kept the university's records and seal ([Report](../../raw/imports/2026-11-11-founding-research/research/2026-11-11-founding/report.md), "The Calendar lists…" and "The office itself also limits…"). The best record of his life is a line of type in a 1952 government Civil List ([Report](../../raw/imports/2026-11-11-founding-research/research/2026-11-11-founding/report.md), "Civil lists fix his birth…").

So the redesign treats the memorial as **a register kept with care**:

- one reading column on paper, with a margin for sources;
- chapters named by place and years;
- two colours taken from the lake and the chinar, each with a job;
- one serif face for the English text, and a Nastaliq face for his name in Urdu;
- no motion and no clip-art.

**Content constraint, added 11 November 2026 after the content plan.** Do not build from this page alone. [Site content updates](site-content-updates.md) governs the words. Keep the title Professor, with no subject. Keep Oxford as "the family remembers him as a travelling scholar at Oxford," with no date and not as a guest lecturer. The sentence below about structured data is about the false titles (English, Social Work, Dean, founding faculty, Warwick). It is not an instruction to drop the professorship or the family's Oxford memory.

The first three decisions:

1. **D1 – A register, not a heritage poster.** Retire the ornament kit. Build one left-aligned reading column with a margin of source notes. Chapter heads are place and years on a hairline rule. Public record and family memory are told apart by a label and a rule, never by colour alone.
2. **D2 – Paper, ink, lake, chinar.** Six colour tokens in OKLCH replace the twelve hex colours. Lake (green-grey) marks links and the record. Chinar (rust) marks family memory and nothing else. No gold, no burgundy and no gradients.
3. **D3 – One Latin face, one Urdu face.** Source Serif 4 (variable, with optical sizes) sets everything in English. Noto Nastaliq Urdu sets his name in Urdu. Both are self-hosted as subsets. Playfair Display and Inter are retired.

## 1. What the current site does

### Type

- **Fonts:** Playfair Display for all headings and Inter for body text ([tailwind.config.cjs](../../tailwind.config.cjs)), with ten weights requested from Google Fonts. This is the most common "elegant memorial" pairing there is.
- **The fonts may not be loading at all.** The Google Fonts `@import` comes *after* the `@tailwind` directives ([global.css:1–6](../../src/styles/global.css)). CSS ignores an `@import` that follows other rules. If that is what happens here, visitors see the browser's fallback serif and `system-ui`. This needs checking in the built CSS; it is likely, not confirmed.
- **Gradient text** on every page title (`.text-gradient-chinar`: burgundy to crimson to gold) ([Hero.astro:80](../../src/components/Hero.astro)).
- **Bold everywhere.** Every heading is bold burgundy. The biography has 52 `<strong>` runs, so years, villages and people's names all shout, and nothing stands out.
- **Italic used as a colour.** `em` is styled forest-green italic ([global.css:79](../../src/styles/global.css)), which works as a third accent, not as emphasis.
- **Lines too long.** Body text runs at `text-lg` inside `max-w-4xl`, about 100 characters per line, well over the 65-character comfort limit.
- **The Urdu name** sits inside an `italic` paragraph with no Urdu font loaded ([Header.astro:30–31](../../src/components/Header.astro)). The browser slants Perso-Arabic glyphs it was never meant to slant.
- **Dates** are written "1916-2016" with a hyphen, not an en dash.

### Color

- **Twelve named colours**, each picked for a symbolic meaning (DESIGN.md: "Lake Blue … Represents: Dal Lake, depth, wisdom"), not taken from any material. Several are stock web colours: "Kashmir Crimson" `#A52A2A` is CSS `brown`, "Sky Blue" `#87CEEB` is CSS `skyblue`, and "Royal Blue" `#4169E1` is CSS `royalblue`.
- **Gradients everywhere.** They appear on the hero, header bar, nav underline, cards (`dal-lake-bg`), section dividers, the timeline spine and the footer. A grep counts 16 gradient uses on the biography page once header, hero and footer are included.
- **Contrast failures** (computed, WCAG 2 / APCA):

  | Pair | Where | Result |
  |---|---|---|
  | White text on the light end of `.dal-lake-bg` (`#87CEEB`) | "Academic Specializations", "His Final Years", the Oxford and Warwick cards | 1.74:1, Lc −35 (fails) |
  | White at 80% opacity, small text, on the same colour | Small text on gradient cards | 1.57:1 (fails) |
  | Gold `#D4AF37` note on burgundy `#8B2635` | "[Note: Timeline … to be verified]" | 4.12:1 (fails AA) |
  | Lake blue at 60% opacity, extra-small text, on white | "— Contemporary descriptions…" | 3.58:1 (fails AA) |

### Ornament

| Element | Count or use |
|---|---|
| Chinar leaf ([ChinaLeaf.astro](../../src/components/ChinaLeaf.astro)) | 15 on the biography, 8 on home plus 6 in the hero, 9 in the footer. Used as logo, bullets, watermarks, dividers and floating confetti, some of it animated. The drawing is a generic five-point star with veins, not a *Platanus orientalis* leaf. |
| Kashida embroidery bands ([KashidaBorder.astro](../../src/components/KashidaBorder.astro)) | Clip-art dot-and-ellipse patterns stretched with `preserveAspectRatio="none"`, so circles become ovals. They use CSS royal blue and emerald, and repeat the same `<pattern id>` several times per page. |
| Shikara boat ([ShikaraIcon.astro](../../src/components/ShikaraIcon.astro)) | Section dividers, and as the icon for the Oxford and Warwick cards. |
| Mountain backdrop ([MountainBackdrop.astro](../../src/components/MountainBackdrop.astro)) | A gradient Himalaya behind every hero and the footer. |
| Motion | Floating leaves (6s, infinite), a bouncing scroll arrow, `hover:scale-105` on cards, a rotating logo on hover. |
| Portrait | A circle with a blurred gradient halo, a gold ring, an 8px border and leaves at two corners. The image file itself is a placeholder: `public/images/abbaji-photo.jpg` is a three-line HTML comment, so the home page shows a broken image. |

### Layout

- **Every page has the same skeleton:** a mountain-gradient hero at 60–90% of the viewport height, a centred title, an italic subtitle and a quote box. Then alternating white, cream and gradient section backgrounds, each with a centred h2, a stack of cards, a divider, and a button pair at the end.
- **The home page** is the AI landing page outright: a three-card "feature grid", then a stats row reading "100 / 6 / 1948 / 3 / 2 / ∞ Lives Touched".
- **Cards pile up depth cues.** `.kashmir-card` adds a gold border, `shadow-lg` and `backdrop-blur`. `Card variant="bordered"` adds a second, 4px burgundy border. A watermark leaf sits on top ([Card.astro](../../src/components/Card.astro), [global.css:166](../../src/styles/global.css)). That makes four depth cues on one surface, and the blur has nothing behind it to blur.
- **The timeline** zigzags left and right with colour-coded category pills (royal blue, burgundy, green and gold) ([Timeline.astro](../../src/components/Timeline.astro)).
- **The gallery** shows 15 placeholder cards to the public, each saying "Add photos to: /public/images/gallery/".
- **Two h1s on every page:** the site name in the header ([Header.astro:27](../../src/components/Header.astro)) and the page title in the hero.

### Voice

- **Superlatives and slogans:** "A Century of Excellence", "His Remarkable Journey", "From tragedy to transformation", "From one village to the world… From the rock to a university", "∞ Lives Touched", "Built with reverence and respect".
- **Quotations with no source.** "Education was not given to me—I claimed it for myself." "We built it from the rock—literally and figuratively." The research found no source for "from the rock" ([Founding notes](../../raw/imports/2026-11-11-founding-research/research/2026-11-11-founding/notes/founding.md), Q5). It found no source for the home page's signature saying either: "Sink your differences and Cement your relationships" appears nowhere in the imported research.
- **The "ever-smiling, soft spoken, meticulously dressed" description** is the brief's personality anchor. It comes from a 2017 news-wire notice that does not identify the Registrar and may be about a different Abdul Aziz Bhat ([Report](../../raw/imports/2026-11-11-founding-research/research/2026-11-11-founding/report.md), "He died in Jammu…").
- **The 1947 killing of his infant daughter** is set as a bullet list under the heading "What Happened:". It is followed by a burgundy box headed "One Year Later…", which turns grief into a marketing arc.
- **Uncertainty shows as leaked editing notes:** "[Note: … details to be corroborated]", "[To be corroborated]" inside an h2. The intent is right; the form reads as an unfinished page.
- **Button pairs on every page** ("Explore His Legacy", "View Full Timeline") give a memorial the shape of a sales funnel.

### Engineering defects the rebuild fixes along the way

- The structured data in [BaseLayout.astro](../../src/layouts/BaseLayout.astro) tells search engines he was Professor of English and of Social Work, Dean of Education, founding faculty, and a guest lecturer at Oxford and Warwick. The record supports none of these ([Report](../../raw/imports/2026-11-11-founding-research/research/2026-11-11-founding/report.md), "What the memorial page can say…").
- The social-sharing image `/images/abbaji-og.jpg` does not exist.
- The JavaScript smooth-scroll handler calls `preventDefault()` on every `#` link, so the URL never updates. That breaks deep links, which a site built on footnotes needs.
- A JavaScript menu toggle exists for five links that fit on one line.

### Why it feels generic

Apply the squint test from emil-unslop-design. Change the name and the dates, and every element still works for any Kashmiri family's memorial. Remove the motifs, and what is left is any product landing page. Nothing on the page could only belong to Abdul Aziz Butt. The tourist-symbol layer is also the part most likely to embarrass a Kashmiri reader: it shows Kashmir the way a houseboat brochure does, not the way the people who lived there would.

## 2. The essence to capture

### What his life was made of

Every item below is cited to the Report.

- **Schools and offices**, in order:
  - Kilhotran and the Bhaderwah school;
  - BA from Prince of Wales College, Jammu, in 1938;
  - Second Teacher at Kishtwar High School in 1941;
  - headmaster;
  - lecturer at Mirpur;
  - Inspector of Schools at Anantnag;
  - principal of the Bhaderwah college in 1956;
  - S.P. College;
  - the Board of School Education;
  - Deputy Director of Education;
  - Registrar, September 1962 to 1971;
  - the teachers' college at Sopore, 1974 to 1981;
  - a new College of Education in Jammu in 1986.

  A "Kashmiri life of schools" is not a metaphor here. It is the chapter list.
- **The university at Hazratbal.** It began as an examining body with no campus. Its teaching departments worked from a rented building at **Haft Chinar**, "seven chinars". The Arts Faculty Block at Hazratbal was commissioned on 1 August 1960, two years before he became Registrar. The university's motto is translated "From Darkness to Light" ([Report](../../raw/imports/2026-11-11-founding-research/research/2026-11-11-founding/report.md), "A 1948 examining body…").
- **Where he came from.** He was born at Kilhotran, in the Bhalessa area of Doda district ([Person notes](../../raw/imports/2026-11-11-founding-research/research/2026-11-11-founding/notes/abdul-aziz-butt.md), Q2). His early postings were in the Jammu province: Kishtwar and Mirpur. His home was later at Gogjibagh, Srinagar. He died in Jammu on 7 August 2016, aged 100. The geography is wider than the Valley, and the design should not squeeze it into one lake view.
- **The record itself.** One line of the Civil List corrected to about October 1952 reads: "19. Abdul Aziz Butt | 26-7-1916 | • | 23-2-1998 | 17-12-2001." The columns are birth date, entry into service and promotion. The last two use the Bikrami calendar; the entry date falls in about May–June 1941 ([Report](../../raw/imports/2026-11-11-founding-research/research/2026-11-11-founding/report.md), "Civil lists…"). No other memorial has that line.
- **The grave quiet.** These are design rules, not mood words:
  - nothing moves;
  - nothing asks the reader to act (no buttons);
  - nothing is counted (no stats row);
  - nothing is boxed (no cards);
  - chapters are separated by space, not ornament;
  - the dates appear once, centred, like an inscription.

### What to refuse

- No shikara, mountains, papier-mâché, kashida or khatamband patterns as decoration.
- No "Mughal grid", no saffron or gold, no pattern library and no icon set.
- No sepia or duotone filter on photographs.
- No Kashmiri craft used as costume.

Kashmir enters the design in four ways only: through the places named in the text, through his name in Nastaliq, through two colours taken from the lake and the chinar, and through the record.

### Materials

| Token | Value | ≈ sRGB | Material | Job |
|---|---|---|---|---|
| `--paper` | `oklch(0.968 0.008 85)` | `#F7F4EE` | Unbleached register paper | The page. One ground everywhere; sections do not change background. |
| `--paper-deep` | `oklch(0.935 0.012 80)` | `#EEE9E1` | A darker sheet | The register's column-head band and the Civil List epigraph only. |
| `--ink` | `oklch(0.24 0.018 60)` | `#261D17` | Walnut-brown iron-gall ink | All text and the register rules (`--rule` is ink at 14% opacity, `--rule-strong` at 30%). |
| `--ink-muted` | `oklch(0.46 0.016 60)` | `#5F564F` | Faded ink | Notes, captions, years in chapter heads. |
| `--lake` | `oklch(0.42 0.045 205)` | `#2D5459` | The Dal in winter haze: green-grey, not sky blue | Links, note numerals, the focus ring, the "Record" mark. |
| `--chinar` | `oklch(0.46 0.115 40)` | `#8C3D20` | A late-autumn chinar leaf: rust, not crimson | Family memory only: a 2px inline-start rule plus a label. |

All six values are inside the sRGB gamut (computed).

**Text contrast, computed:**

| Pair | WCAG | APCA |
|---|---|---|
| ink on paper | 15.0:1 | Lc 97 |
| ink-muted on paper | 6.5:1 | Lc 78 |
| lake on paper | 7.6:1 | Lc 82 |
| chinar on paper | 6.8:1 | Lc 79 |
| worst case (ink-muted on paper-deep) | 5.9:1 | Lc 72 |

**Rules:**

- `--rule` scores Lc 15. That is acceptable only because it separates and carries no meaning.
- `--rule-strong` scores Lc 34 and is used where a rule carries structure (the register).
- The chinar memory rule scores 6.8:1, above the 3:1 needed for a mark that carries meaning.

Re-verify everything after implementation with a real APCA and WCAG checker.

The neutrals are warm, matching the paper and ink. Lake is the one cool colour, deliberately: water against paper.

Dark mode is out of scope for launch. The tokens are written so that dark mode can later be an L remap (paper becomes oklch L ≈ 0.20, lake and chinar rise to L ≈ 0.75, with chroma cut 20–30%), not a second palette.

### Type

| Role | Face and setting |
|---|---|
| Everything in English | **Source Serif 4**, variable (weight, optical size, italic), self-hosted woff2. It is a transitional text face with optical sizes. At 60px its display cut has the sharp contrast of a printed university calendar title; at 18px its text cut is sturdy and plain. One family covers the name, chapter heads, prose, the register and small-caps labels, so the site needs no sans-serif. It is not one of the defaults the skills warn against (Playfair, Inter, Cormorant, Lora, EB Garamond). Fallback if its small caps or old-style figures don't survive subsetting: Newsreader, which also has optical sizes. |
| His name in Urdu | **Noto Nastaliq Urdu**, subset to only the glyphs in the name string, with all layout features kept (Nastaliq needs them to join letters correctly). Set with `lang="ur" dir="rtl"` and a line-height of about 2. Never italic and never letter-spaced. |
| Weights | 400 and 600 only. The name is set at 400; the display optical size gives it presence without bold. |
| Figures | Old-style proportional figures in prose (`font-variant-numeric: oldstyle-nums`). Lining tabular figures in the register and the dates (`lining-nums tabular-nums`). |
| Labels, nav, register heads, status labels | Real small caps (`font-variant-caps: all-small-caps`, `letter-spacing: 0.05em`). |
| Italic | Titles of works and quotations only. Never used as emphasis or as a colour. |

The type scale uses rem and role names:

| Role | Size | Line-height |
|---|---|---|
| `name` | `clamp(2.5rem, 5vw + 1rem, 4rem)` | 1.05 (tracking −0.01em) |
| `title` | 2.25rem | 1.1 |
| `chapter` | 1.625rem | 1.2 |
| `lede` | 1.3125rem | 1.45 |
| `body` | 1.125rem | 1.6 |
| `register` | 0.9375rem | 1.4 |
| `note` and `label` | 0.875rem | 1.45 |
| `urdu-name` | 2.25rem | 2 |

The reading measure is `max-inline-size: 65ch`. Check that rendered lines land between 60 and 75 characters.

### The signature: the register line

The site repeats one ornament: a hairline rule (`--rule-strong`) with the years hung at its start in small lining figures.

Example:

```
────────────────────────────────────────────────
1941–1947
Kishtwar and Mirpur
```

It is used for chapter heads, register rows and source-list entries, and nowhere else. A single odd choice repeated consistently is what reads as a point of view (emil-unslop-design, "Repeat a signature").

### How record and family memory look

Every claim carries a status, and the status is stored as data, not left to formatting:

| Status | Meaning | How it looks |
|---|---|---|
| **Record** | A contemporary government or university record, or a named published source independent of the family | Plain prose, with a lake note numeral linking to a margin note that names the source |
| **His own account** | Sources that rest on his interview or writings (Khalid Bashir Ahmad's book; the Bhadarwah history "in his own words") | Plain prose; the note says "his own account" |
| **Family memory** | What the family remembers, with no public source | A 2px chinar rule along the inline start, with the small-caps label "Family memory" (and who remembers, if the family wants that shown) |
| **Not found** | Checked and not supported, or still open | Kept out of the prose. Listed on the Sources page under "What the record does not show", with the date of the correction, so nothing is silently deleted |

Status is never shown by colour alone: the label is always present, and in print the rule prints black and the label survives. The bracketed "[To be corroborated]" notes go away; this system replaces them.

## 3. Skills: order, what each decides, what to ignore

All eight were read on 2026-11-11 before being prescribed here.

| # | Skill | Decides | Apply | Ignore |
|---|---|---|---|---|
| 1 | `frontend-design` | Already applied in this plan (its "Design Thinking" step: purpose, tone, the one memorable thing). Decides nothing further at build time. | Commit to one direction. Name the one memorable thing (the Civil List line and the Nastaliq name). Never default to Inter- or Playfair-class fonts. | Its push toward bold maximalism, motion "for delight", staggered page-load reveals, scroll-triggered effects, surprising hovers, overlap and diagonal layouts, grain and gradient-mesh backgrounds, dramatic shadows and custom cursors. Where it conflicts with `emil-marketing-pages` on motion, marketing-pages wins for this site. |
| 2 | `emil-unslop-design` | **What gets deleted.** Run it first, on the current site, to produce the deletion list. | The pass (squint test, subtract first, sweep order); no gradient text; the default font stack; the hero template; the three-card grid; "glassmorphism needs glass" (the header and hero quote blur a flat colour); nothing floating behind the hero; one depth cue; ✦ glyph markers; **fabricated proof** (the ∞ stat, invented quotes, unsupported titles); interface copy; motion; "Looking designed by someone"; the final audit. | The indigo, dark-and-neon, bento and sparkle sections. None of those patterns is present. |
| 3 | `emil-color` | **Token values and contrast checks** (D2). | OKLCH for every new value; repair contrast by moving lightness only; APCA plus WCAG; one hue per ramp; tinted neutrals; gamut check; dark mode as an L remap later. | Display P3 enhancement (the chroma is too low to need it). Tailwind v4 `@theme` specifics: the project is Tailwind 3.4, so use CSS variables with the `<alpha-value>` placeholder. |
| 4 | `emil-typography` | **Faces, files, scale, measure, figures, wrapping, underlines, Urdu handling** (D3). | woff2 only; `font-synthesis: none`; high-level properties (`font-variant-numeric`, `font-variant-caps`); two faces at most; a role-named scale; leading by role; tracking by size; 65ch; `balance` on headings and `pretty` on short blocks; real punctuation (en dash in 1916–2016, curly quotes); underlines `from-font`; `::selection`; antialiasing set once; logical properties plus `lang`/`dir`. | Form text, the iOS input-zoom rule, caret and placeholder styling, and truncation. There are no forms and nothing is truncated. |
| 5 | `emil-design-foundations` | **Layout and hierarchy**, and the review format. | Hierarchy by subtraction; restraint; specific copy; 65ch; `gap` instead of margins; paragraph spacing equal to the line-height; sentence case; italic for citations; sizing `<sup>` note markers; a skip link; DOM order matching visual order (this matters for sidenotes); focus rings. Review every page with its "Before / After / Why" table. | Forms, toasts, tooltips, sliders, tabs, optimistic updates and onboarding. "One primary action per view" leads somewhere unusual here: the action is reading, so the page has no buttons at all. |
| 6 | `emil-surfaces` | **The few surfaces that remain:** rules and photographs. | Hairline borders through a variable (0.5px on 2× screens); separation borders kept as real borders; a 1px inset outline at black 10% on photographs; no fades over scrolling content. | Elevation shadow stacks, nested radii and dark-mode shadow rings. Nothing in this design is raised, so "shadows over borders for depth" never applies. |
| 7 | `frontend-ui-engineering` | **Build quality and accessibility**, and verification. | Semantic HTML and heading order; WCAG AA; keyboard access; checks at 320, 768, 1024 and 1440px; designed empty states (the gallery); spacing scale; semantic tokens; its verification checklist. For "reference-led UI quality", the references are the Civil List page scans and the University Calendar 2010 succession list (pp. xviii–xix): study their rules and columns. Don't use another memorial site as a template. | React component structure, state management, data fetching, skeletons and optimistic UI. This is a static Astro site with no client state. |
| 8 | `emil-marketing-pages` | **The pre-ship motion and performance checklist only.** | The never-add list (scroll animations, scroll hijacking, parallax, carousels); static pre-rendering (already true); preloading fonts and above-the-fold images; content present in the DOM; `text-wrap: balance`; `aria-label` on code-built illustrations. | CTAs, auth-aware buttons, docs features, RSS and intro animations. Don't let it frame the memorial as a marketing page: that frame is what produced the button pairs. |

**Order of use at build time:** unslop (delete) → color (D2) → typography (D3) → foundations (layout and review) → surfaces (rules and images) → frontend-ui-engineering (build and verify) → marketing-pages (pre-ship). `frontend-design` stays in this plan as framing and is not re-run.

**Skills not to use:**

- `emil-animations`: there is no motion to design.
- `emil-prototype`: the direction is chosen; a picker of alternatives would reopen it.
- `dataviz`: do not turn "100 years, 6 children" into charts or stat tiles.
- `emil-forms-and-inputs`: there are no forms.
- `lottie` and `remotion`: DESIGN.md's "video introduction" idea is out of scope.
- `artifact-design`: the output is the Astro site, not an artifact.

The `astro`, `emil-unslop-writing`, `emil-prep-for-prod` and `emil-design-system-docs` skills could help (with MDX, with copy, with the pre-launch sweep, with rewriting DESIGN.md). They were not read for this plan, so it does not prescribe them; read them before using them.

## 4. Build sequence

The site keeps its styling system: Astro 4, Tailwind 3.4 and plain CSS variables. Work on a branch, and commit only when Azhar asks. Biography copy belongs to the content agent and the family; the design pass does not write it.

### Step 0 – Before code

- Find the content agent's approved biography text. Build against it, not against the current `biography.astro`.
- Resolve, or default and flag, open questions Q1–Q3 at the end of this page.
- Record the "before" state: screenshots of each page at 390px and 1440px, and the computed font family on body text (this settles the `@import` question).

### Step 1 – Tokens (D2)

- Add the six tokens to `:root` in `src/styles/global.css` as bare L C H triplets, for example `--lake: 0.42 0.045 205;`.
- Map them in `tailwind.config.cjs` under `theme.extend.colors`, for example `lake: 'oklch(var(--lake) / <alpha-value>)'`.
- Keep the old `kashmir-*` keys until Step 7, so unmigrated pages still build.
- Add `--rule`, `--rule-strong`, and `--border-hairline` (1px, or 0.5px on 2× screens).
- **Done when:** a contrast table for every text pair passes WCAG AA and APCA |Lc| ≥ 60 (≥ 75 for body text), and no new CSS contains hex, `rgb()` or `hsl()`.

### Step 2 – Type (D3)

- Put woff2 subsets in `public/fonts/`:
  - Source Serif 4, roman and italic variable files, subset to Latin and Latin Extended-A plus general punctuation, with `--layout-features='*'` so small caps and figure styles survive;
  - Noto Nastaliq Urdu, subset to the exact name string with all layout features.
- Add `@font-face` rules to `global.css`, and delete the Google Fonts `@import`.
- Add a Georgia fallback with metric overrides (`size-adjust`, `ascent-override`) to keep layout shift near zero.
- Preload the roman file in `BaseLayout.astro`.
- Replace `fontFamily` with `serif` and `urdu`. Map `sans` to the serif stack so a stray `font-sans` can't bring Inter back.
- Replace `fontSize` with the role scale.
- Add `font-synthesis: none` at the root.
- **Done when:**
  - "Register" in `all-small-caps` renders true small caps; with synthesis off, a missing feature shows up as full caps;
  - figures are old-style in prose and lining in the register;
  - the Urdu name renders fully joined, upright and unclipped;
  - measured lines are 60–75 characters at 1024px and 1440px;
  - there is no visible shift when fonts load.

### Step 3 – Content and the primitives the biography needs (D1, D10)

- **Content collections** in `src/content/config.ts`:
  - `biography` (MDX; this needs `@astrojs/mdx` 3.x for Astro 4, so confirm the new dependency with Azhar first);
  - `sources` (data: id, author, title, publisher, year, kind, independence, url, archive URL, locator, coverage);
  - `register` (data: years, post or event, place, source ids, status).
- Status is a zod enum: `record | own-account | family-memory | not-found`. The distinction between record and memory is then enforced by the schema and cannot be lost in a later redesign.
- **Components:**
  - `Prose`: the column-plus-margin grid. The margin appears when the viewport fits the column and a 15rem margin (about 63rem); set this breakpoint where the content fits, not at a device width.
  - `Chapter`: years, place and anchor id, drawn with the register line.
  - `Note`: a numbered sidenote naming sources and status. Narrow screens show it as a small block after its paragraph; wide screens show it in the margin. The same markup serves both, and DOM order stays correct.
  - `Memory`: the chinar rule and label.
  - `CivilListLine`: the epigraph.
  - `Inscription`: the dates.
  - `Figure`: a rectangular photograph with an inset outline and a caption giving date, place, people and provenance.
- **Rewrite** `Header` (small-caps name, four text links, no sticky header, no JavaScript), `Footer` (a colophon: who keeps the site, the last revision date, a link to how it is sourced) and `BaseLayout`:
  - one h1 per page;
  - a skip link;
  - `lang="en"`;
  - delete both scripts;
  - `scroll-behavior: smooth` only under `prefers-reduced-motion: no-preference`.
- **Done when:** components contain no hex values and no `transition: all`, the site ships no client-side JavaScript, and no component exceeds about 120 lines.

### Step 4 – Biography, first and alone

**Layout, top to bottom:**

1. Title: "The life of Abdul Aziz Butt", in the `title` size. Below it, the family's name for him: "Abbaji, to his family".
2. The `CivilListLine` epigraph on `--paper-deep`, with a two-line caption explaining the columns and the Bikrami dates. This needs the content agent's agreement.
3. Chapters as continuous prose. Chapter heads are place and years: the "life of schools" becomes the structure itself.
4. The family chapter, set in family voice and using "Abbaji".
5. The inscription.
6. A "Next: the register" text link. No buttons.

**Proposed chapter spine** (from the Report's "What the memorial page can say"; the content agent can accept or change it):

1. 1916–1938 · Kilhotran, Bhalessa and Bhaderwah
2. 1938–1947 · Aligarh, Kishtwar and Mirpur
3. November 1947 · Jammu
4. 1948–1962 · Anantnag, Bhaderwah and Srinagar
5. 1962–1971 · Hazratbal
6. 1974–1986 · Sopore and Jammu
7. 1986–2016 · Gogjibagh and Jammu
8. Family

**The 1947 chapter** has no box, no bullets, no bold and no ornament, only extra space above it. The daughter's name and the details of the wound appear only after the family checks them against the obituary and the interview book ([Report](../../raw/imports/2026-11-11-founding-research/research/2026-11-11-founding/report.md), "Civil lists…", final paragraph on 1947).

**Only the inscription is centred.** Everything else is left-aligned.

**Gate before Step 5:**

- the `emil-unslop-design` final audit: "what would make a designer suspect a model built this?" must find nothing, and "name the one choice a competitor couldn't copy" must have an answer;
- an `emil-design-foundations` Before / After / Why table;
- the `frontend-ui-engineering` checklist at 320, 768, 1024 and 1440px, keyboard-only reading, an axe scan with no violations, and a print preview;
- Azhar signs off.

### Step 5 – The rest, in this order

1. **Register** (`/timeline`, keeping the URL). A list of dated entries built from the `register` collection. Each entry is laid out as a grid row: years | post and place | source | status. On narrow screens the entries stack with visible labels. The zigzag and category colours are gone.
2. **Sources** (`/sources`, new). Built from the `sources` collection, grouped by kind, with independence noted and what was actually read for each (following the Report's source table). Then "What the record does not show", with dated corrections. Then "Records that would settle the open questions": the 1962 appointment order, the 1971 relieving order and the service book ([Report](../../raw/imports/2026-11-11-founding-research/research/2026-11-11-founding/report.md), Conclusion).
3. **Home** (`/`) as a title page:
   - "Abbaji, to his family";
   - the name as h1;
   - the Nastaliq name;
   - "26 July 1916 – 7 August 2016";
   - one paragraph from the content agent;
   - a table of contents of chapters as register lines;
   - one line linking to how the site is sourced.

   If a real portrait arrives, it sits beside the name block on wide screens and above it on narrow ones.
4. **Photographs** (`/gallery`). Not linked and not built until at least one real photograph exists with a caption and provenance. No placeholders are ever shown to the public.
5. **Legacy.** Retire `/legacy`, adding a 301 redirect to `/biography#family` in `netlify.toml`. The page repeats the biography and rests mostly on unsupported claims.

### Step 6 – Metadata, print and marks

- Generate JSON-LD from record-status data only. Keep `alternateName: "Abbaji"` and add the spellings Bhat and Batt.
- Make one static 1200×630 sharing image of the title page type on paper, with no photograph unless a real one exists.
- Set `theme-color` to paper.
- Favicon: either redraw a single chinar leaf from a real *Platanus orientalis* specimen in one colour, used in two places only (the favicon and the colophon), or set an "A" in Source Serif. Retire the gradient-leaf favicon.
- Print stylesheet: black on white; notes print; links on the Sources page print their URLs; the memory rule prints solid with its label.

### Step 7 – Cleanup and docs

- **Delete** `ChinaLeaf`, `KashidaBorder`, `MountainBackdrop`, `ShikaraIcon`, `SectionDivider`, `Hero`, `Card` and `Timeline`. Delete the old `kashmir-*` colours, the `animation`, `keyframes` and `backgroundImage` keys, and the `global.css` component classes (`.kashmir-card`, `.dal-lake-bg`, `.chinar-gradient-bg`, `.text-gradient-*`, `.chinar-watermark`, `.mughal-grid*`, `.btn-*`, `.parallax-layer`, the float keyframes). Also delete `color-palette-reference.html`.
- **Rewrite** `DESIGN.md` to describe the new system: tokens, type, the register line and the status system.
- **Mark** `BRANDING_BRIEF.md` as superseded. Drop its pattern library, icon set, quote-card templates and social templates; keep the favicon and the one sharing image.
- **Update** README's "About" bullets.

### Step 8 – Pre-ship

- Run the `emil-marketing-pages` checklist.
- Lighthouse: layout shift ≈ 0 and fonts preloaded.
- axe scan on every page.
- Read the site on a real phone.
- Re-run the contrast table against the shipped CSS.

## 5. What must survive the redesign

- **"Abbaji."** The family's name for him appears in no public source ([Person notes](../../raw/imports/2026-11-11-founding-research/research/2026-11-11-founding/notes/abdul-aziz-butt.md), Q2 gaps). That makes it family memory by definition, and the most important piece of it. It appears on the title page, in the page `<title>`, in the biography's family voice and in `alternateName`. The site speaks in two voices: the formal name where it states the record, "Abbaji" where the family speaks.
- **The sources.** The current site cites nothing; the sources arrive with the research and the content agent's rewrite. The design gives them a permanent place:
  - a margin note beside every claim;
  - a Sources page built from the same data as the notes, so the two cannot drift apart;
  - anchors that update the URL;
  - a print view that keeps the notes.
- **Public record versus family memory.** The four statuses above are stored as data, enforced by the schema, and shown with a label (never colour alone). Corrections go to "What the record does not show" with a date; they are not silently deleted.
- **Also keep:**
  - the surname "Butt": the family's January 2026 correction from "Bhat" (commit `f439b8c`), with the record's spellings Bhat and Batt shown on the Sources page;
  - the Urdu name, with its spelling confirmed (Q1);
  - the link to Ghulam Rasool Azad;
  - the children's names;
  - a print stylesheet.

## Decisions

| ID | Decision |
|---|---|
| D1 | A register, not a heritage poster: one left-aligned column on paper, a margin of sources, place-and-years chapter heads on a hairline rule, and the record/memory status system. |
| D2 | Paper, ink, lake and chinar as six OKLCH tokens. No gold, no burgundy, no gradients. |
| D3 | Source Serif 4 as the only Latin face; Noto Nastaliq Urdu (subset) for the name; weights 400 and 600; real small caps; old-style figures in prose, lining tabular figures in the register. |
| D4 | No ornament library. One optional redrawn chinar leaf, used twice at most. |
| D5 | No cards, shadows, gradients or backdrop blur. Hairline rules only. Photographs shown as rectangular prints with provenance captions. |
| D6 | No motion and no client-side JavaScript. |
| D7 | No button pairs, stats rows or feature grids. Navigation is a table of contents. |
| D8 | Only the inscription is centred. |
| D9 | Pages: `/` title page, `/biography`, `/timeline` as the Register, `/sources` (new), `/gallery` hidden until photographs exist, `/legacy` retired with a redirect. |
| D10 | Words live in content collections owned by the content agent; design lives in components. Status is a schema enum. |

## Open questions for Azhar and the family

- **Q1 – Urdu spelling.** The site writes بھٹ, which reads "Bhat". The family's Latin spelling is now "Butt", usually written بٹ. Which should the Nastaliq name use?
- **Q2 – Photographs.** Is there a real portrait, and are there other photographs? Who provided each, and may they be published?
- **Q3 – Dates on the title page.** The plan uses the record's 26 July 1916. The family's January 1916 would appear in the biography as family tradition ([Report](../../raw/imports/2026-11-11-founding-research/research/2026-11-11-founding/report.md), "Civil lists…").
- **Q4 – Two sayings.** Should "Sink your differences and Cement your relationships" appear at all? If so, once, labelled as family memory. Should the "ever-smiling…" description be dropped until its source is confirmed to be about him?
- **Q5 – The inscription.** Any religious formula or Hijri date on the inscription is the family's choice. The design leaves a line for it.
- **Q6 – The epigraph.** Is the family comfortable opening the biography with the Civil List line?

## Not from project sources

These are general knowledge, used only to shape the design. Verify each before it goes into site copy:

- The Hazratbal campus stands on the shore of the Dal.
- The Naseem Bagh chinar garden adjoins the campus.
- The Dal reads green-grey in winter haze rather than sky blue (an observation of colour, used for the `--lake` token).
- Chinar leaves turn rust-brown late in autumn (used for the `--chinar` token).
