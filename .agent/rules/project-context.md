# Project Context: Gewinnarchitekt

## Purpose
Showcase and branding site for Karl Aschwanden (Gewinnarchitekt, Zurich).
Advisory for pricing & profit architecture for Swiss startups & SMEs with digital products.
Primary conversion: 20-min intro call via TidyCal; secondary: contact form.

## Tech Stack
- Framework: Astro 6.1.9 (`static` output, `@astrojs/vercel` serverless adapter for API)
- Language/Runtime: TypeScript, Node >=22.12.0, pnpm
- Styling: Tailwind CSS v4.2.4 via `@tailwindcss/vite`, active sheet `src/styles/global.css`
- Typography: `@fontsource/inter` (weights 300-700)
- CMS/Content: Keystatic (`@keystatic/astro`, `@keystatic/core`) for `/blog`, local storage
- Integrations: React 19 (`@astrojs/react`), `@astrojs/sitemap`, Resend (email API)
- Analytics: PostHog (inline snippet in page heads)

## Commands
- `pnpm dev`: Start local dev server (`localhost:4321`)
- `pnpm build`: Production build to `./dist/` and `.vercel/output`
- `pnpm preview`: Preview production build
- `pnpm astro check`: Type & template verification (no test suite exists)

## Key Conventions & Rules
- Source of truth: `src/SITE.md` governs content/structure; `src/DESIGN.md` governs visual tokens.
- Copy: Swiss German (`ss`, no `ß`), formal "Sie", guillemets «…», no em-dashes `—` in copy.
- Visuals: Architectural editorial, monochrome with green accent (`#16a34a`), hairline borders.
- Strict Don'ts: No gradients, no rounded/pill buttons (`rounded: 0`), no box-shadows.
- Tracking: Every interactive button/CTA must carry `data-ph-event` and `data-ph-location`.
- Blog schema: Flat frontmatter in `src/content/blog/*`, access exclusively via `getCollection()`.

## Known Gaps & Tech Debt
- No shared layout: All pages duplicate `<head>` and PostHog snippet (no `BaseLayout.astro`).
- Dead files: `src/index.css` (Tailwind v3), `src/components/oldservices_Mona.astro`, `debug_output.html`.
- Empty collection: `src/content/blog/` has no posts yet (triggers build warning).
- Deprecations: `src/content.config.ts` uses deprecated `z` from `astro:content`.
- Legal/Analytics mismatch: `datenschutz.astro` claims opt-in cookies, but PostHog runs unprompted.
- Unstaged Git changes: Working edits present in `Diagnose.astro`, `Zielpublikum.astro`, `index.astro`.
- Test suite: Zero automated unit/e2e tests exist (assumed testing is manual or visual).
