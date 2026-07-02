---
name: coliman-design
description: Use this skill to generate well-branded interfaces and assets for Coliman Construction Service — a specialty trade contractor focused on metal framing and acoustic ceiling systems for commercial and institutional projects. Use for both production work and throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## What's here

- `README.md` — Brand context, content fundamentals, visual foundations, iconography rules. **Read first.**
- `colors_and_type.css` — All design tokens (colors, type, spacing, motion, radii). Import this directly or copy values out.
- `fonts/VogieVariable-VF.ttf` — Vogie variable font (100–900 weight). The only typeface used by the brand.
- `assets/` — Logo lockups and marks in four colorways (Black, Blue, Sand, White). Original reference specs from the brand owner.
- `preview/` — Component cards (colors, type, spacing, radii, buttons, inputs, badges, project cards, iconography).
- `Coliman Landing.html` — Production landing page built on this system. A worked reference for any new web work.
- `uploads/` — Original brand assets as the user provided them.

## Quick reference

**Colors (use the tokens, never the raw hex):**
- `--color-blue: #353f51` — primary brand, headings, primary buttons
- `--color-sand: #d3c6b7` — material accent, section backgrounds
- `--color-black: #212121` — default text, borders, deep backgrounds
- `--color-white: #ffffff` — default surface

**Type:** Vogie only. Display + body + labels all use Vogie. No emoji. No second typeface.

**Defaults:** square corners, hairline borders, flat shadows, restrained motion (`220ms ease-standard`, no bounce), photography is the only "texture."

**Iconography:** Lucide via CDN, 1.5–2px stroke, `currentColor` fill. Substitution flag — swap if a real icon set is produced.

## Caveats

- No website, codebase, or Figma was provided. Production UI is derived directly from the brand tokens and preview cards — confirm against the real product if/when one exists.
- Vogie is a commercial typeface (Saadan Type). Confirm web-embed licensing before public deployment.
- No real jobsite photography is included. Production usage needs licensed images; the kit uses Blue-tinted blueprint-grid placeholders.
