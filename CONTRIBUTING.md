# Contributing to the Abdul Aziz Butt Memorial Website

This guide explains how to update biographical content, add newly found records or family memories, and publish photographs while keeping public records and family knowledge clearly distinguished.

## Core Rule: Label the Source

Every biographical fact on the site belongs to one of the statuses defined in `src/data/status.ts`:

- **Public record** — Contemporary records (e.g., Civil Lists, University Calendar, official reports, dated news reports).
- **His own account** — Statements attributed directly to him (such as his December 2011 interview).
- **Family memory** — Oral history and lived family knowledge.
- **Not found** — Claims investigated and not supported by opened sources (documented on `/sources` rather than silently erased).

Before changing biographical facts, check [wiki/entities/abdul-aziz-bhat.md](./wiki/entities/abdul-aziz-bhat.md) and [wiki/questions/open-confirmations.md](./wiki/questions/open-confirmations.md).

## Updating Content

- **Site-wide metadata:** `src/data/site.ts`
- **Chapter list & navigation anchors:** `src/data/chapters.ts`
- **Timeline entries:** `src/data/register.ts` and `src/pages/timeline.astro`
- **Sources & unsupported claims:** `src/data/sources.ts` and `src/pages/sources.astro`
- **Biography narrative:** `src/pages/biography.astro`

Use `<Note>` and `<Ref>` to cite entries from `src/data/sources.ts` so margin notes and `/sources` stay in sync, and use `<Memory>` for family-memory passages.

## Adding Photographs

Photographs are not published until each image has a known **date** (or approximate decade), **place**, **people**, and **source/provenance**.

1. Add verified images under `public/images/` (`.jpg`, `.png`, or `.webp`, descriptive filenames such as `srinagar-1965.jpg`).
2. Add the image with its caption and provenance to `src/pages/gallery.astro`.
3. Once at least one verified photograph is present, add `/gallery` back to navigation in `src/components/Header.astro`.

## Verifying Changes Locally

```bash
npm install
npm run dev      # Preview at http://localhost:4321
npm run build    # Type-check (astro check) and build static output to dist/
```

Ensure `npm run build` exits with zero errors and warnings before committing.
