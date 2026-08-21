# CLAUDE.md — Lost Souls MUD: Browser Utilities

## Project Overview

This repository contains a **collection of static, browser-based tools for the [Lost Souls MUD](https://wiki.lostsouls.org/)**, a text-based online game. The flagship app is the **Affiliation Compatibility Planner** (`compatibility.html`), which lets players build a character profile (race, gender, name) and select any combination of **guilds** and **associations** (in-game affiliations), then instantly see every **compatibility conflict, warning, and race restriction** that would apply to that build. Additional utilities (e.g. the Oculus puzzle solver) live as sibling pages linked from the `index.html` hub.

It is a zero-dependency, vanilla JavaScript set of pages — no framework, no build step. The data lives in a plain JS data file scraped from the Lost Souls wiki and a CSV source, and the compatibility rules are maintained by hand as reviewers verify them against the wiki. The rules engine lives in a pure, DOM-free module (`engine.js`) covered by unit tests (Node's built-in test runner).

Repo: `git@github.com:moxomatosis/lostsouls.git`

## Key Features

- **Utilities hub** — `index.html` is a small index page listing every tool (compatibility planner, Oculus puzzle solver) with links; new utilities are added as sibling pages and linked from there.
- **Multi-guild / multi-association selection** with live search filters and a sortable checklist.
- **Compatibility engine** that detects three classes of conflict:
  1. **Tag vs. tag** — inherently incompatible tag pairs (e.g. `Good` vs `Evil`, `Chaotic` vs `Ordered`) held simultaneously by the selected groups.
  2. **Association vs. tag** — a specific association that forbids a tag the profile would otherwise possess.
  3. **Association vs. association** — pairs of associations that cannot coexist (often deity/god conflicts).
- **Race & gender restrictions** — groups can declare `allowed_races` / `excluded_races`, checked against the selected character race.
- **Warnings layer** — soft warnings (e.g. "compatible but will block abilities") shown separately from hard conflicts.
- **Candidate pre-checking** — when browsing the guild list, each unselected guild is evaluated *as if added* (`testCompatibilityWithCandidate`), so incompatible options are greyed out before you pick them.
- **Character profiles** — save/load named profiles (character name → selected guilds/associations/race/gender) in `localStorage`, plus a dropdown loader.
- **Wiki links** — group names link out to their Lost Souls wiki pages.
- **Mudlet client scripts** (local, not tracked in git) — Lua automation for hunting in the MUD.

## File Layout

| File | Purpose |
| --- | --- |
| `index.html` | **Utilities index / hub** — a simple landing page listing every tool (compatibility planner, Oculus puzzle solver) with a card and link per tool. New utilities get a sibling page and a card here. |
| `compatibility.html` | Page structure for the Affiliation Compatibility Planner (renamed from the former `index.html`): character profile panel, guild/association selection panel, compatibility analysis results panel (status banner, selected chips, possessed tags, conflict list). Loads `data.js` as a classic script, `app.js` as a module. |
| `oculus.html` | Oculus color-puzzle solver — self-contained page (inline JS, uses the shared `index.css`) with built-in usage instructions; enter the rune arrangement (case = up/down orientation) and it returns the flip sequence that reaches `ROYGBIV`. |
| `index.css` | Shared Gothic/fantasy styling for all pages (Cinzel heading font, Inter body font, gold-accent light-parchment theme). |
| `data.js` | **The database.** Defines the global `LOST_SOULS_DATA` object: `tags` (array of tag names) and `groups` (map of group ID → group object: `name`, `alias`, `type` (`"guild"` vs. association), `tags`, `id`, optional `allowed_races` / `excluded_races`). Generated from scraped wiki + CSV; large and infrequently changed. |
| `races.js` | Exports `racesById` — map of race ID → `{ id, name }` for every playable race. |
| `compatibility.js` | Exports the three rule tables used by the engine: `tagIncompatibilityPairs`, `associationTagIncompatibilities`, `associationAssociationIncompatibilities`. Each entry may carry a `description` string shown in the UI. |
| `engine.js` | **The pure compatibility engine** (DOM-free, unit-tested). Exports `checkCompatibility(groups, raceId, genderId)`, `validateCompatibility(groupsMap, guilds, assocs, options)`, `buildActiveGroups(...)`, and `DEFAULT_GUILD_ID`. Contains all five conflict rules (tag-tag, assoc-tag, assoc-assoc, race, gender) plus the warnings logic. This is the only file that implements game logic — keep it free of DOM/browser APIs so tests can import it. |
| `app.js` | UI layer (ES module). State management, rendering of guild/association lists, chips, tags, conflicts, warnings, candidate pre-checking, and localStorage profile save/load. Delegates all rule evaluation to `engine.js` via thin wrappers (`checkCompatibility`, `validateCompatibility`, `testCompatibilityWithCandidate`). |
| `test/` | Unit tests run with Node's built-in test runner (`node --test`, no dependencies). `test/race.test.js` covers race restrictions (incl. the Hawkmen regression); `test/compatibility.test.js` covers tag/association/gender rules, warnings, and `buildActiveGroups`; `test/helpers/load-data.js` evals `data.js` into Node (it has no exports by design — it must stay a classic browser script). |
| `package.json` | Test-only: sets `"type": "module"` and `"test": "node --test"`. No dependencies, no build, never used by hosting. |
| `conventions.md` | Working conventions for the aider/agent workflow (see below). |
| `mudlet/` | Local Mudlet client Lua scripts (`hunt.lua`, `hunt_ten.lua`) — hunting automation, not tracked in git. |
| `Dockerfile`, `entrypoint.sh` | Local container setup: installs `@deepseek-ai/dsh` + `live-server`, serves `/workspace` over port 8080 while running the DeepSeek Harness web UI. Not tracked in git. |

## Data Model

```js
// data.js
const LOST_SOULS_DATA = {
  tags: ["Aesthete", "Agent", "Altruist", ...],        // array of tag names
  groups: {
    "adventurers_guild": {
      name: "Adventurer's Guild",
      alias: null,
      type: "guild",                                    // "guild" vs. association
      tags: [],
      id: "adventurers_guild",
      // optional: allowed_races: [...], excluded_races: [...]
    },
    // ... every guild and association keyed by stable ID
  },
};
```

**Convention:** display names and stable IDs are kept separate (a group's `id` is the object key; `name` is what's shown). Guilds are groups with `type: "guild"`; everything else is treated as an association.

## Compatibility Engine (`engine.js`)

All rules live in `engine.js` as pure functions; `app.js` only wires them to the DOM. When changing game logic, change `engine.js` and add/extend a unit test — never put rules in `app.js`.

1. Every selected group contributes its `tags`; each tag is tracked back to the groups that supplied it (`tagSources`).
2. For each pair of active tags, the engine checks `tagIncompatibilityPairs` and reports the conflict **and which groups are responsible** (skipping pairs that come from a single group — self-exclusion).
3. For each selected association, `associationTagIncompatibilities` flags tags the association forbids — and correctly ignores the association's *own* tags (self-exclusion handling).
4. Pairs of selected associations are checked against `associationAssociationIncompatibilities`.
5. Race checks compare `allowed_races` / `excluded_races` — which store **race IDs** — against the selected race **ID** (default `"Unspecified"` skips the check). **Never compare race names against the selected race**; that was the Hawkmen bug. Unknown race IDs fall back to displaying the raw ID (e.g. `quessae`) instead of crashing.
6. Gender checks compare `allowed_genders` against the selected gender (and still run when gender is `"Unspecified"` — existing behavior).
7. `validateCompatibility()` returns `{ conflicts, warnings }` (multi-guild warning + per-group `g.warning` metadata); app.js's `testCompatibilityWithCandidate(id)` simulates adding one candidate group to the current selection (with the Adventurer's Guild default handled) and reports only conflicts caused by that candidate.

## Testing

Run the suite with `npm test` (i.e. `node --test`) — Node's built-in runner, zero dependencies, no build:

```sh
npm test
```

- Every change to `engine.js` or the rule tables in `compatibility.js` should come with a unit test (or an update to an existing one).
- Add regression tests for **known failure scenarios** as they're discovered — e.g. `test/race.test.js` pins "Hawkmen cannot be joined without being an Aviar" and "an Aviar CAN join Hawkmen".
- Keep the engine importable by Node: no `document`, `window`, or `localStorage` in `engine.js` (and don't add `export` to `data.js` — the browser loads it as a classic script).

## Working Conventions (see `conventions.md`)

- Keep separate display names and IDs for data.
- Create minimal diffs — only the lines that change; never output entire files.
- **Do not load `data.js`** into context; it is large and rarely changes. Grep for specific group IDs instead.

## Hosting: GitHub Pages (github.io) — NO Build Process

This site is published to **GitHub Pages** (`https://moxomatosis.github.io/lostsouls/`), which serves only static files as-is. There is **no build step, bundler, transpiler, or dependency install** anywhere in the pipeline — the tracked HTML/CSS/JS are the exact bytes that get served.

Implications for development:

- **Everything you commit must work directly in a browser** as a plain static file. Do not introduce TypeScript, JSX, npm packages, import maps, bundlers, or anything requiring compilation.
- The app must stay plain ES modules loaded via `<script>` tags (`data.js` as a classic script, `app.js` as a module) and plain CSS — no framework, no `node_modules`.
- `package.json` exists **only** to run the local unit tests (`npm test`). It is never used for hosting, installs nothing, and adds no build step. Test files live under `test/` and are never served (nothing links to them).
- Keep tests runnable with Node's built-in test runner (`node --test`) — no test framework dependencies.

## Running the App

The site is a pure static site — just serve the directory:

```sh
npx live-server --port=8081 --no-browser /workspace
# or: python3 -m http.server in the repo root
```

Then open `http://localhost:8081` — `index.html` is the hub listing every utility. No build step, no dependencies to install.

## Git Status Notes

- **Tracked:** `app.js`, `compatibility.html`, `compatibility.js`, `data.js`, `engine.js`, `index.css`, `index.html`, `oculus.html`, `races.js`, `package.json`, `test/`.
- **Ignored (local/dev only):** `.gitignore` excludes `Dockerfile`, `entrypoint.sh`, `.aider*`, `mudlet/`, `conventions.md`, `.dsh-data`.
- The compatibility tables carry inline `// TODO` comments marking entries that are assumed, unverified, or known to be incomplete — keep these visible when editing rules so reviewers know what still needs wiki confirmation.
