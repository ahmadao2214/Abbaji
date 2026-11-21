# Wiki conventions

This project's knowledge wiki follows the [LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f). Project-specific facts and preferences live in the wiki and existing project inputs.

## Files and ownership

- `raw/imports/<batch>/`: immutable copies of selected source files, saved research observations, and prior wiki versions. A snapshot is only as complete as the supplied file.
- `raw/manifests/<batch>.json`: immutable provenance receipts with original paths, archive paths, import dates, and SHA-256 checksums.
- `wiki/index.md`: navigation and the best starting pages.
- `wiki/sources/`: one annotated page per source or distinct source locator.
- `wiki/entities/`: people, companies, roles, products, or other named subjects.
- `wiki/topics/`: synthesis across sources; do not simply repeat a link list.
- `wiki/questions/`: open questions, contradictions, and research gaps.
- `wiki/registry.json`: current source registry, with historical snapshots retained.
- `wiki/log.md`: append-only timeline of imports, substantive updates, saved analyses, and checks.

Research tools may write working outputs elsewhere in the project. Snapshot them and integrate the wiki after collection. The wiki is the maintained reading layer; old reports remain dated reports. Do not silently create two competing current versions of the same synthesis.

## Page metadata and links

Each substantive page starts with YAML frontmatter: `id`, `type` (`source`, `entity`, `topic`, or `question`), `title`, `updated` (date), `evidence_as_of` (date or `unknown`), `source_ids` (list). Index, log, schema, and administrative validation notes are exempt. Use normal relative Markdown links for compatibility with Codex and Obsidian.

Every substantive factual statement or inference has a nearby source-page citation. Source pages link to both the external original and the actual preserved observation. For JSON evidence, name the record ID or field path; for a long source, name the section, timestamp, or review locator. Distinguish observation date, source publication date, and import date.

## Source registry

`registry.json` has `schema_version: 1`, `project`, and `sources` (array). Each source has:

- `id`: stable identifier, preserving migrated IDs where available.
- `title`, `url` (nullable), `locator` (nullable), `publisher`, `kind`.
- `page`: path relative to `wiki/`.
- `evidence_kind`: `original_content`, `collector_observation`, `user_note`, or `generated_analysis`.
- `collected_at`: actual observation timestamp, or null when unknown.
- `coverage`: what was read versus missing; status labels are not proof of content.
- `snapshots`: nonempty array of project-relative archive paths recorded by a raw manifest. Keep older snapshots on refresh.

Identity is the canonical URL plus distinct locator, not just the domain. Reprints and mirrored episodes retain original-work attribution and do not count as independent corroboration. Discovery catalogs are separately preserved topic material, not a list of proven company sources.

## Evidence discipline

An imported summary is evidence of what was previously recorded, not a new reading of its upstream source. Never imply the complete source text was archived if only notes or metadata exist. Keep source limitations beside the synthesized claims. Label inference explicitly and preserve conflicting reports and dates. Access working in one historical session does not establish ongoing entitlement.

Use a new snapshot for updates. Before substantive edits to current wiki pages, preserve the old versions through the snapshot helper. Update affected source/entity/topic pages and the registry and index, then append a log entry such as `## [YYYY-MM-DD] ingest | Subject` with changed pages and unresolved issues. Do not rewrite historical log entries.

## Jev decision provenance

Use the Project LLM Wiki skill's Jev workflow for every user-facing invocation, including queries and setup. Require a fresh successful request receipt and the project-bound completion check. Save decision runs under `research/wiki-decisions/` or the project's established equivalent, snapshot them, and link them from the update log. Preserve source/page IDs, request evidence hashes, question versions, model answers and application decisions. These are generated analysis, never original evidence. Distinguish completed, partial, unavailable and failed evaluations; disclose manual fallbacks. Existing projects may add this convention without replacing their other schema rules.

## Maintenance

Use the index to retrieve context, then follow citations. On requested research refreshes, verify source dates and integrate changes; do not periodically fetch without a scheduled task. Run the helper's lint command after updates. Also review claims for support, contradictions, coverage inflation, duplicated works, and outdated access assumptions. Respect the project's source exclusions and action permissions.
