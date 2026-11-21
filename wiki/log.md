# Wiki update log

## [2026-11-11T16:07:16.086776+00:00] setup | Project wiki

Created the wiki scaffold and scoped agent instructions. No external source has been refreshed.

## [2026-11-11T16:07:23.733221+00:00] import | 2026-11-11-founding-research

Archived 7 files without modifying their bytes. [Manifest](../raw/manifests/2026-11-11-founding-research.json). These are preserved inputs; semantic ingestion is recorded separately.

## [2026-11-11T16:19:53+00:00] analysis | Site redesign plan

Added [topics/redesign-plan.md](topics/redesign-plan.md) and linked it from [index.md](index.md) under a new Topics section. No other page changed, and index.md was not snapshotted because the change only adds a link. Inputs: the repository at commit 00ceef7 (DESIGN.md, BRANDING_BRIEF.md, src/pages, src/layouts, src/components, src/styles, tailwind.config.cjs), the archived 2026-11-11 founding research, and eight design skills read on 2026-11-11. No source pages exist yet, so the page cites archived research files and repository files directly and its source_ids list is empty. Jev was unavailable: the typesafe-ai skill is not installed and no TypeSafe route is configured. Page placement and claim support were decided manually. The design decisions (D1–D10) are judgment, not evidence. Unresolved: the Urdu spelling of the surname, whether a real portrait exists, the headline birth date, and whether the two unsourced sayings appear (Q1–Q6 on the page).

## [2026-11-11T16:25:49+00:00] ingest | Abdul Aziz Bhat entity, site content updates, open confirmations

Added [entities/abdul-aziz-bhat.md](entities/abdul-aziz-bhat.md), [topics/site-content-updates.md](topics/site-content-updates.md) and [questions/open-confirmations.md](questions/open-confirmations.md), and linked all three from [index.md](index.md).

- **Inputs.** The founding research imported in batch 2026-11-11-founding-research ([manifest](../raw/manifests/2026-11-11-founding-research.json)); the live text of src/pages, src/components/Footer.astro and src/layouts/BaseLayout.astro, read on 2026-11-11; and family statements from Azhar of 11 Nov 2026.
- **Family statements, recorded as family knowledge.** He was a professor at the University of Kashmir; the department and appointment paper are unconfirmed. He was a travelling scholar at Oxford; the year, college and certificate are still to be found, and the 1956 England course does not replace it. His father's name is Muhammad Sultan, so "Khwaja Sulla Bhat" in the English scan of the Bhadarwah history is not to be printed as settled. His thumb was missing. The daughter was Masooda. Abbaji is the family name.
- **Correction to the report.** The report attributed the name Masooda and the girls' ages to the first pass's sources. The family's reading of the Kashmir Life obituary finds no name there, and no preserved quotation carries the ages. The report itself is unchanged.
- **Site recommendations.** Remove founding faculty 1948, "from the rock", the Education curriculum, Dean, PhD, named subjects, Warwick, and the KNS 2017 "Ever-smiling" quotation. Keep the professorship without a subject, Oxford as travelling scholar, Masooda and the thumb. Nothing in src/ was edited.
- **Index.** I first rewrote index.md from a copy read before the redesign-plan entry above. That dropped its link to [topics/redesign-plan.md](topics/redesign-plan.md). I restored the link in the same session. index.md was not snapshotted: before this session it held only scaffold text plus that one link.
- **Jev.** Unavailable: the typesafe-ai skill is not installed and no TypeSafe route is configured. Page placement and claim support were decided manually by the agent. No decision run was saved.
- **Lint.** Passed (7 pages, 0 sources, 7 archived files).
- **Unresolved.**
  - No source pages or registry entries exist yet, so source_ids is empty and the pages cite the research files by path.
  - The family statements are not yet saved as a raw user note.
  - [topics/redesign-plan.md](topics/redesign-plan.md) predates the family statements. It omits the professorship and lists Oxford only among unsupported claims. It should be aligned with the entity page before it is used to build.
  - The three university files and the other checks are listed in [questions/open-confirmations.md](questions/open-confirmations.md).

## [2026-11-11] note | Redesign plan aligned with the content plan

Added a content constraint at the top of [topics/redesign-plan.md](topics/redesign-plan.md). A later build must take its words from [topics/site-content-updates.md](topics/site-content-updates.md): keep Professor with no subject, and keep Oxford as a family memory of a travelling scholar. The redesign page's note about structured data still rejects the false titles (English, Social Work, Dean, founding faculty, Warwick).

## [2026-11-11T18:09:57.747930+00:00] import | 2026-11-11-followup

Archived 7 files without modifying their bytes. [Manifest](../raw/manifests/2026-11-11-followup.json). These are preserved inputs; semantic ingestion is recorded separately.

## [2026-11-11T18:14:06+00:00] ingest | Oxford research, family corrections, grammar pass, first Jev run

Updated [entities/abdul-aziz-bhat.md](entities/abdul-aziz-bhat.md), [topics/site-content-updates.md](topics/site-content-updates.md), [questions/open-confirmations.md](questions/open-confirmations.md) and [index.md](index.md). Their earlier versions are archived in batch 2026-11-11-followup ([manifest](../raw/manifests/2026-11-11-followup.json)), as recorded in the import entry above.

- **Inputs.**
  - [Oxford research report](../research/2026-11-11-oxford/report.md). A research subagent wrote it; the parent agent saved it, because the subagent could not write files. Three citations were checked against the sources: the 1970 committee line, the 1975–76 Sopore line and the Hansard quotation.
  - The second round of family statements, now saved with the first as a [raw note](../research/2026-11-11-family/statements.md).
  - The site's copy, read again on 2026-11-11 for the grammar pass. Nothing in src/ was edited.
- **Family corrections, second round.**
  - The site leads with 26 July 1916, which the family said is probably correct. January is kept on the entity page as an earlier family memory.
  - He was the first educated person from his village. This replaces the site's count of fourteen.
- **Oxford.** No source names him at Oxford, and the entity page says that is a gap in the online record, not a disproof. The 1956 course in England is now recorded as one year long, from the page images. "H.P." is recorded as an inference: Honours in Persian (Munshi Fazil). "E.E.T&P (London)" is unexplained. Archive leads are added to open confirmations, item 3.
- **New records.** Civil List No. 129 (about 1954) repeats 26-7-1916. A 1971 national report lists "Shri Abdul Aziz, Registrar, Kashmir University" in August 1970. The university's 1975–76 annual report lists "Prof. Abdul Aziz, Principal, M. E. T. Teachers' College, Sopore". Neither of the last two gives a surname.
- **Grammar.** Added a "Grammar and phrasing" section to site-content-updates. It lists sixteen recurring patterns in the earlier models' copy, with examples by line, and the lines the per-page tables did not yet cover.
- **Urdu.** بھٹ reads Bhaṭ, not Butt. The recommendation is بٹ once the family confirms how he wrote it (open confirmations, item 11).
- **Open confirmations.** The birth-date item is closed, so items 6–12 are renumbered 5–11.
- **Jev.** Completed: 15 decisions on jev-latest, resolving to jev-1.14.0. The run, with requests, answers, probabilities and dispositions, is saved as [research/wiki-decisions/2026-11-11-jev-followup.json](../research/wiki-decisions/2026-11-11-jev-followup.json), which is generated analysis, not evidence.
  - Splits needing review: S5 (whether the KNS notice is about him) and R1/R2 (first educated versus fourteen). For R1/R2 the family's correction governs.
  - One answer was not followed exactly. S4 left out the books' Sopore passages, so S4b re-asked with them; both rated the line insufficient to identify him.
  - The API key came from a T3 secret file and is not stored in the project.
- **Unresolved.**
  - No source pages or registry entries yet.
  - The page image of BHD p. 774 (the father's name) and KBA's 1947 passage (Masooda's age) are still unread by eye.
