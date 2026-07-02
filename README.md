# Coliman Design System

Design system for **Coliman Construction Service** — a specialist trade contractor focused on **metal framing and acoustic ceiling systems** for commercial and institutional projects.

Coliman's brand stands for technical precision, code compliance, jobsite safety, and tight coordination with general contractors. The system is built to feel **industrial, restrained, and exacting** — never decorative, never warm-fuzzy. Think: stamped steel, blueprint blue, drywall dust.

---

## Brand essence

| | |
|---|---|
| **Sector** | Specialty trade contractor — Metal framing (light-gauge steel studs, drywall framing) & acoustic ceiling systems (suspended grid, ACT, drywall ceilings) |
| **Customers** | General contractors, construction managers, architects, owners on commercial / institutional projects |
| **Tone** | Confident, technical, plain-spoken. No marketing fluff. |
| **Personality** | The veteran foreman who quietly does the job right. |
| **Promise** | On-spec, on-schedule, on-safety. |

## Source material

All ground-truth assets the user provided, kept in `uploads/` (originals) and processed into `assets/` / `fonts/`:

| Original | Type | Notes |
|---|---|---|
| `uploads/Coliman Construction Service.svg` | Master logo | Single-color, paths use class `cls-1`. Recolored variants in `assets/`. |
| `uploads/VogieVariable-VF.ttf` | Variable font | Vogie variable, 100–900 weight axis. Brand's sole typeface. |
| `uploads/Tipografía.png` | Typography spec | "Vogie — recommended for titles, headings, and key messages." |
| `uploads/Paleta de colores.png` | Color spec | Sand / Blue / Black with HEX, RGB, CMYK + meaning of each. |

> No Figma, codebase, or website was provided. Production UI is built directly from the tokens in `colors_and_type.css` and the reference cards in `preview/` — see `Coliman Landing.html` at the project root for a full production landing page built on this system.

---

## Index — what's in this project

```
.
├── README.md                ← you are here
├── SKILL.md                 ← Agent Skill manifest (for Claude Code / agents)
├── colors_and_type.css      ← Foundational tokens: colors, type, spacing, motion, radii
├── fonts/
│   └── VogieVariable-VF.ttf
├── assets/
│   ├── logo-{black,blue,sand,white}.svg          ← Full lockup
│   ├── logo-mark-{black,blue,sand,white}.svg     ← C-mark only (favicons, app icon)
│   ├── color-palette-spec.png                    ← Reference: original color spec
│   └── typography-spec.png                       ← Reference: original type spec
├── preview/                 ← Cards rendered in the Design System tab
│   └── *.html
├── Coliman Landing.html     ← Production landing page built on this system
└── uploads/                 ← Original files as provided
```

---

## Content fundamentals

Coliman's voice should read like a trade contractor's project narrative or a clean RFI response — **direct, specific, evidence-based**. No exclamation marks, no slogans, no first-person plural cheerleading.

### Voice principles
- **Plain & specific.** Use trade vocabulary correctly: *metal framing*, *light-gauge steel*, *acoustic ceiling tile (ACT)*, *suspended grid*, *RFI*, *submittal*, *punch list*, *MEP coordination*. Don't dumb it down — Coliman's audience knows the terms.
- **Evidence over adjective.** Replace "high quality" with "to ASTM C754" or "Type X gypsum, 5/8 in." Replace "fast" with "phased to GC schedule." Replace "best" with measurable.
- **Active, project-tense.** "Crews framed 18,000 sq ft of partitions in 12 working days." Not "We are committed to delivering high-quality framing solutions."
- **Sentence case for body, ALL CAPS sparingly for headers and labels** (eyebrows, tags, callouts) — echoes blueprint and signage typography.
- **No emoji. Ever.** This is a construction trade brand. Iconography is line/geometric icons (see Iconography below).
- **First-person plural is fine on the site**, but treat it like "the crew" not "the brand": *"We coordinate scaffold and overhead clearances with MEP trades before grid is hung."*
- **Bilingual readiness.** The brand operates in markets where English and Spanish coexist (Tipografía, the original spec, is in Spanish). Plan UI strings to translate; avoid puns and idioms.

### Casing
- **Display headings:** ALL CAPS or Title Case in Vogie Bold, tight letter-spacing.
- **Body:** sentence case.
- **Eyebrows / labels / chips:** ALL CAPS, +160 letter-spacing.
- **Buttons:** Title Case or UPPERCASE depending on weight; never sentence case.

### Examples (do)
> **METAL FRAMING & ACOUSTIC CEILINGS**
> A specialist subcontractor for commercial and institutional projects. We frame to spec, coordinate with every trade on site, and finish to the punch list.

> **SCOPE** — Light-gauge metal framing, soffits, bulkheads, drywall furring, suspended ACT grid, drywall ceilings, seismic bracing.

> **SAFETY** — OSHA 30 supervision on every crew. Pre-task plans submitted before mobilization.

### Examples (don't)
> ~~"We're passionate about transforming spaces with cutting-edge ceiling solutions! 🏗️✨"~~
> ~~"Welcome to Coliman — your trusted partner in all things construction."~~
> ~~"Awesome team, great vibes, on-time delivery!"~~

---

## Visual foundations

### Color — three colors, no more

The palette is **deliberately small**: Sand, Blue, Black. Treat additional neutrals as derived tints — don't introduce new hues.

| Token | Hex | Role |
|---|---|---|
| `--color-blue` | `#353f51` | **Primary brand.** Headings, brand fills, primary buttons, navigation. Dark backgrounds. |
| `--color-sand` | `#d3c6b7` | **Material accent.** Section backgrounds, callout panels, secondary surfaces. Use as warm contrast to Blue and White. |
| `--color-black` | `#212121` | **Default text.** Borders, rules, dense type. |
| `--color-white` | `#ffffff` | **Default surface.** Primary background. Negative space carries the layout. |

**Pairing rules**
- Blue on White / Sand → primary text + headlines.
- White on Blue / Black → inverse blocks; section breaks; hero areas.
- Black on Sand → editorial/quote panels; high-contrast type without using brand Blue.
- Sand and White touch each other freely; Sand and Blue are the brand chord.
- **Never** put Sand text on Blue (too low contrast) or Blue text on Black.

### Type — Vogie, only Vogie

Vogie is a **wide, geometric, slightly squared sans** with a tall x-height and mechanical proportions. It feels industrial — like rolled-steel lettering or signage on a project sign. It's the only family in the system.

- **Display / headings:** Vogie 600–800, tight tracking (-0.02em), UPPERCASE for largest sizes.
- **Body:** Vogie 400, line-height 1.45–1.6.
- **Eyebrows / labels / metadata:** Vogie 600, ALL CAPS, +0.16em letter-spacing.
- **Numerals:** tabular-nums for any tabular or metric display (project specs, square footages).
- **Italics:** Vogie doesn't ship a true italic — avoid italics. Use weight contrast instead.

### Backgrounds & imagery
- **Default backgrounds are solid:** White, Sand, Blue, Black. **No gradients** beyond a single optional photo-protection scrim (linear, dark-to-transparent, only over photography).
- **No background patterns or illustrations.** No hand-drawn anything. The brand isn't whimsical.
- **Photography is the texture.** When photos are used: full-bleed; documentary jobsite framing; metal studs, suspended grid, drywall, hard hats, coordinated trades. Cool color cast preferred (matches Blue). Avoid heavy color grading.
- Treat **negative space** as a design element. Pages breathe.

### Spacing & rhythm
- 4-pt base grid (`--s-1` = 4px ... `--s-12` = 128px).
- Section padding: `clamp(64px, 10vw, 128px)` vertical on marketing surfaces.
- Container: `1200px` standard, `1440px` wide, `880px` for prose.

### Borders, rules, dividers
- Hairlines (`1px`) for cards/inputs; **rules** (`1.5–2px`) for section dividers, drawing-style. Rules often use Blue or Black, not light gray.
- **Geometric ticks/marks** at section edges are encouraged (think drawing borders). Restrained.

### Corner radii — square is the default
- Components default to **`0`** corners. Buttons, cards, inputs, tags: square.
- Use `2–6px` only when needed to soften (e.g., toasts, focus rings).
- **No pills** except micro-tags (`--r-pill`) for short status chips.

### Shadows — minimal, low elevation
- The system is flat. Use `--shadow-1` and `--shadow-2` only when needed for floating UI (menus, toasts). Avoid `--shadow-3` on marketing surfaces.
- Prefer hairline borders over shadows for cards.

### Hover, press, focus
- **Hover (buttons/links):** darken the fill by ~8% (Blue → `--blue-600`), or invert color on outline buttons.
- **Press:** shrink to `scale(0.985)` plus a 4% darker fill. No bounce.
- **Focus:** 2px Blue outline with 2px offset (`outline: 2px solid var(--blue-500); outline-offset: 2px`). Visible, square.
- **Disabled:** 40% opacity, no pointer events.
- **Transitions:** `--dur-fast` (120ms) for hover, `--dur-medium` (220ms) for layout. Easing `--ease-standard`. **No bouncy or springy easing.**

### Transparency & blur
- Use sparingly. The only sanctioned use is a **photo-protection scrim** on hero photos: `linear-gradient(180deg, rgba(33,33,33,.55) 0%, rgba(33,33,33,0) 60%)`.
- Backdrop-blur is **not** part of this brand. Hard surfaces only.

### Layout rules
- Left-aligned by default. Avoid centered text blocks except for short callouts.
- Fixed elements: top nav on scroll (Blue or White), nothing else fixed.
- One feature per section. Stack vertically. Don't crowd.

### Cards
- White surface, **1px solid `--border`** hairline, square corners (`--r-0`), no shadow by default. Optional `--shadow-1` on hover. Padding `--s-5` to `--s-6`.
- Inverse card variant: Blue surface, white type, no border.

### Motion
- Restrained. Fade + 8px upward translation on entry, 220ms, `--ease-standard`. No long timelines. No springs. No bounces.
- Reduce-motion respected: replace all transforms with opacity-only fades.

---

## Iconography

Coliman doesn't ship a custom icon set. The brand reads as **technical drawing**, so we use a **thin-stroke geometric line icon set** that matches blueprint vocabulary.

### Icon system
- **Library:** [Lucide](https://lucide.dev) (CDN-linked, no install). Lucide's 1.5px stroke, square endpoints, and geometric build match the industrial tone better than rounded sets like Heroicons or Phosphor.
- **Substitution flag:** *No proprietary icon set was provided.* Lucide is a stand-in — swap in a custom set if one is produced.
- **Stroke weight:** 1.5–2px. Color: `currentColor` so icons inherit text color (Blue on light, White on dark).
- **Sizing:** 16, 20, 24, 32px on screens. Always pixel-snapped.

### Pictograms (larger illustrative marks)
For section icons (e.g., "Metal Framing", "Acoustic Ceilings"), use larger Lucide marks (32–48px) inside a 64px square with a 1px Blue border. No fill. No background color. Square corners.

### What we don't use
- **No emoji.** Anywhere. Ever.
- **No unicode glyphs as icons** (e.g., ✓ → use Lucide `check` instead).
- **No filled or 3D icons.** Stroke only.
- **No mascot illustrations**, no isometric scenes, no hand-drawn doodles.

### Logo usage
- The full lockup (mark + wordmark) is the default. Use the **mark only** for square contexts (avatars, favicons, app icons, jobsite stickers).
- **Clear space:** minimum padding around the lockup equals the height of one "C" in the wordmark. Don't crowd.
- **Minimum size:** 24px height for the mark, 96px width for the full lockup.
- **Don't:** recolor outside the four sanctioned variants (Black, Blue, Sand, White), rotate, distort, place on busy photography without a scrim, or fill with gradient.

---

## Production rules

1. **Use the tokens.** Never hard-code a hex; pull from `colors_and_type.css`.
2. **Default to square.** Reach for radius only when there's a specific reason.
3. **Default to flat.** Reach for shadow only when there's a specific reason.
4. **Vogie everywhere.** No exceptions. (Mono only inside code blocks.)
5. **Photography is the only texture.** No patterns, no SVG illustrations, no gradients (except photo scrims).
6. **Respect negative space.** Empty space is part of the composition.
7. **Bilingual-safe copy.** Avoid puns/idioms; allow strings to grow ~30% in translation.

---

## Open questions / things to flag

- **Vogie license.** Vogie is a commercial typeface (designer: Yumna Saadan / Saadan Type). The file is here but redistribution rights weren't confirmed — verify license before publishing public-facing web embeds.
- **No website or codebase was provided.** Production UI is derived directly from the tokens and preview cards; confirm against the real product if/when one exists.
- **Icon set.** Lucide is a placeholder — confirm or swap.
- **Photography.** No image library was provided. Production usage needs licensed jobsite photography.

---

## Development and Deployment (Vite Environment)

This project has been structured into a modular Vanilla JS architecture using Vite.

### Local Development
1. Install project dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

### Production Build
To generate the optimized static website ready for hosting:
1. Run the build script:
   ```bash
   npm run build
   ```
2. This generates a `dist/` directory at the project root.

### Deploying to AccuWebHosting (LAMP)
- Copy all files and folders located **inside** the `dist/` directory (including the `.htaccess` file) and upload them to your Apache server's public directory (typically `public_html/`).
- The build is configured with relative paths (`base: './'`), so it runs flawlessly from the root domain or any subfolder path.

### Deploying to Vercel
- Connect this repository to Vercel and choose **Vite** as the framework preset (Vercel automatically detects this and sets `npm run build` and `dist` as defaults).
- Vercel will apply the rules in `vercel.json` to handle gzip and cache headers automatically.
