# Context Brief — Blog area for gewinnarchitekt.ch
### Paste this whole file into Claude chat, then ask it to write Antigravity prompts.
**Revision 2 — 7 September 2026. Karl's blog decisions are answered in section 8.**

You are helping me (Karl Aschwanden, Gewinnarchitekt) plan and write **prompts for
Antigravity**, an agentic coding IDE that will edit my repo directly. You do NOT write the
code. You write precise, self-contained implementation prompts I can paste into Antigravity
one at a time, plus acceptance criteria so I can verify each step.

---

## 1. What the site is

- **gewinnarchitekt.ch** — one-person consultancy: Pricing- und Profitabilitäts-Beratung for
  Swiss KMU (CHF 5–50m revenue), tech scale-ups, CFO networks.
- Language: **German (de-CH)**, formal "Sie". Editorial / architectural brand tone.
- **The purpose of the site is branding.** It establishes positioning and seniority. The
  conversion path exists (TidyCal booking, contact form) but the site is not a funnel-first
  landing page, and design decisions should not be justified by conversion-rate arguments.
- Booking link used everywhere: `https://tidycal.com/gewinnarchitekt/kennenlernen`.
  Contact form anchor: `/#kontakt`.

## 2. Verified tech stack (read from package.json / node_modules, not guessed)

| Thing | Value |
|---|---|
| Framework | **Astro 6.4.8** (`astro@^6.1.9`) |
| Package manager | **pnpm** |
| Node | `>=22.12.0` |
| CSS | **Tailwind CSS v4.3.3** via `@tailwindcss/vite`. NOT the old `@astrojs/tailwind` integration. **No `tailwind.config.js` exists** (v4 CSS-first config). |
| Fonts | `@fontsource/inter` (300/400/500/600/700), imported per page |
| Hosting | **Vercel**, `@astrojs/vercel` adapter |
| Output mode | **static** by default. Only `src/pages/api/contact.ts` is on-demand, via `export const prerender = false`. |
| Sitemap | `@astrojs/sitemap@3.7.3` — auto-includes any new static route, no config change needed |
| Analytics | PostHog, inlined in every page `<head>`, gated on `PUBLIC_POSTHOG_KEY` |
| Mail | Resend (contact form only) |
| `site` | `https://gewinnarchitekt.ch` set in astro.config.mjs, so `Astro.site` works |

**NOT installed.** Each of these would be a new dependency and must be its own explicit,
approved step: `@astrojs/rss`, `@astrojs/mdx`, `@tailwindcss/typography`, React,
`framer-motion`, `lucide-react`.

## 3. Repo map (only what matters for the blog)

```
astro.config.mjs          site, vercel adapter, sitemap, redirects, tailwind vite plugin
src/
  styles/global.css       <- THE ACTIVE stylesheet (Tailwind v4 `@import "tailwindcss";` + brand tokens)
  index.css               <- LEGACY, Tailwind v3 syntax, imported by nothing. Do not touch, do not copy.
  DESIGN.md               brand/design system doc (see section 5; its "Stack" chapter is stale)
  pages/
    index.astro           home
    herangehensweise.astro
    angebot.astro
    ueber-mich.astro
    impressum.astro
    datenschutz.astro
    api/contact.ts        POST endpoint, prerender=false, Resend + honeypot
  components/
    Nav.astro             sticky header, `links` array + mobile menu
    Footer.astro          dark footer, two link lists
    SiteSchema.astro      sitewide JSON-LD (@graph: Organization + Person), included in every <head>
    Hero / Diagnose / Zielpublikum / Leistungen / Profil / ProfilCard /
    Angebot / AudienceCard / ContactForm / GewinnVenn / Logo
  assets/                 images (hero-bg.jpg, karl.jpeg, logos/)
public/                   favicon.ico, favicon.svg, robots.txt (points at /sitemap-index.xml)
```

**There is no `src/layouts/` directory and no shared layout component.** Every page
duplicates the full `<html><head>` block by hand, including the ~2 kB inlined PostHog
snippet. There is **no `src/content/` directory and no content collection** yet.
(`.astro/collections/leistungen.schema.json` is a stale generated artefact from an
abandoned experiment. Ignore it.)

## 4. Conventions any new page MUST match

Taken from `src/pages/ueber-mich.astro`, the best template to imitate:

1. Frontmatter imports: `Nav`, `Footer`, `SiteSchema`, `"../styles/global.css"`, and the five
   `@fontsource/inter/{300,400,500,600,700}.css` files.
2. `const canonicalURL = new URL(Astro.url.pathname, Astro.site);`
3. `<html lang="de">`. Head order: charset, favicons, viewport, generator, `<title>`,
   `<meta name="description">`, `<link rel="canonical">`, `<SiteSchema />`, PostHog block.
4. PostHog block is gated `{PH_KEY && ( ... )}` on `PUBLIC_POSTHOG_KEY` / `PUBLIC_POSTHOG_HOST`
   from `import.meta.env`, plus a delegated click listener reading `data-ph-event` /
   `data-ph-location`. **Every CTA carries those two attributes.**
5. `<body class="bg-white text-slate-900 antialiased">`, then `<Nav />` ... `<Footer />`.
6. Client JS is a plain `<script>` at the end of the page, re-initialised on `astro:page-load`.
7. **No Open Graph or Twitter card tags exist anywhere on the site, and there is no OG image.**
   OG is in scope for blog v1, so this is new work for the whole site, not pattern-matching.

## 5. Design system (source: `src/DESIGN.md`)

Warning: `DESIGN.md` chapter 12 claims the stack is "React + TypeScript + lucide-react +
framer-motion". **That is stale** — the site is Astro + Tailwind v4 with hand-inlined SVG
icons. Everything else in DESIGN.md (colour, type, layout, don'ts) is current and binding.

**Colours** — used as Tailwind arbitrary values, e.g. `bg-[#16a34a]`, and as CSS vars in
global.css:

| Role | Hex |
|---|---|
| Grün, accent only, max 1–2 per screen | `#16a34a` (hover `#15803d`) |
| Anthrazit, headlines / dark sections | `#1f2937` |
| Body / secondary text | `#4b5563` / `#6b7280` |
| Section tint | `#f9fafb` |
| Hairline | `#e5e7eb` |

**Typography** — Inter only. Utility classes live in `global.css`:
- `.font-display` and `.font-serif-display` — Inter, `letter-spacing: -0.035em`, weight 400
- `.label-eyebrow` — 11px, `0.18em`, uppercase, weight 500, `#6b7280`
- H1 pattern: `text-[36px] sm:text-[48px] lg:text-[60px] font-light leading-[1.05]`
- Body: 15–18px, `leading-[1.7]`

**Layout** — max width `1280px`, container `px-6 lg:px-10`, section padding `py-20 lg:py-28`,
`grid-cols-12 gap-6 lg:gap-10`. The signature pattern is a **numbered eyebrow column
(`col-span-2`) to the left of the headline (`col-span-10`)**.

**Hard don'ts** — no gradients as hierarchy, no rounded "bubbly" buttons (`border-radius: 0`
on buttons), no box-shadows as hierarchy (hairlines and whitespace only), no blueprint or
grid background patterns, no colourful icon chips, **no em-dashes in visible German copy**,
quotes use «…», separator in meta lines is a mid-dot with spaces.

## 6. Traps Antigravity will fall into unless told otherwise

1. It will try `npx astro add tailwind` or create a `tailwind.config.js`. **Tailwind v4 is
   already wired through the Vite plugin. There is no config file and none is wanted.**
2. **Tailwind v4 loads plugins from CSS, not from a JS config.** The typography plugin must be
   registered as `@plugin "@tailwindcss/typography";` directly under `@import "tailwindcss";`
   in `src/styles/global.css`. An agent that writes a `tailwind.config.js` with a `plugins: []`
   array has failed the step, even if the build succeeds.
3. It will copy or re-import `src/index.css` (v3 syntax). Forbid touching it.
4. It will use the Astro 4 content-collections API (`src/content/config.ts`,
   `entry.render()`). **Astro 6 wants `src/content.config.ts` at the `src/` root, the
   `glob()` loader from `astro/loaders`, and `import { render } from 'astro:content'`.**
5. It will invent a `src/layouts/Layout.astro` and silently refactor the existing pages onto
   it. That refactor is desirable, but it must be **its own approved step**, never a side
   effect of building the blog.
6. **Route namespace collision.** Posts live at `/blog/<slug>`. If pagination is also mounted
   at `/blog/[...page]`, page two becomes `/blog/2`, which shares a namespace with post slugs.
   Use `/blog/seite/<n>` for pages 2+ instead, with `/blog` as page one.
7. It will scatter em-dashes and generic SaaS copy into the German text.
8. It leaves debug artefacts in the repo root. There is already a stray `debug_output.html`
   from an earlier run.
9. **Asked for a video embed, it will paste a bare `<iframe src="https://www.youtube.com/embed/...">`.**
   That is forbidden here for privacy, performance and brand reasons — see 8c for the required
   click-to-load facade.
10. It will install `lite-youtube-embed` or a similar package for the facade. Not wanted, this is
    about 40 lines of hand-written code.

## 7. Target architecture

```
src/content.config.ts              defineCollection + glob() loader from 'astro/loaders'
src/content/blog/<slug>.md         one file per post
src/content/events/<slug>.md       separate collection, see 8b.1
src/assets/blog/<slug>-hero.<ext>  per-post hero images
src/pages/blog/index.astro         index, page 1
src/pages/blog/seite/[page].astro  pagination, pages 2+
src/pages/blog/[slug].astro        post page: getStaticPaths from getCollection, render(entry)
src/components/BlogCard.astro      one row in the index (numbered, hairline, no shadow)
src/components/BlogPostCta.astro   end-of-post TidyCal CTA
src/components/VideoEmbed.astro    click-to-load YouTube facade, see 8c
src/styles/global.css              + `@plugin "@tailwindcss/typography";` + `.prose-ga` brand override
```

**Blog frontmatter schema** (zod, in `content.config.ts`). Flat and primitive-typed, because a
CMS has to be able to render every field as a simple form input:

| Field | Type | Notes |
|---|---|---|
| `title` | string, required | |
| `description` | string, required | required so RSS can be added later without a content migration |
| `pubDate` | date, required | same reason |
| `updatedDate` | date, optional | |
| `tags` | string[], default `[]` | field exists in v1, tag *pages* come later |
| `draft` | boolean, default `false` | filtered out of `getCollection` in production |
| `heroImage` | `image()` helper, required | stored in `src/assets/blog/`, doubles as the OG image |
| `heroImageAlt` | string, required | |
| `youtubeId` | string, optional | drives `VideoEmbed.astro`, see 8c |

Cross-cutting work the blog forces:
- Add "Blog" to the `links` array in `Nav.astro` and to the Footer link list.
- Per-post JSON-LD `BlogPosting`. Author references the existing
  `https://gewinnarchitekt.ch/#karl-aschwanden` `@id` and publisher the `#organization`
  `@id` from `SiteSchema.astro`. Do not duplicate those objects, reference them by `@id`.
- Open Graph and Twitter meta, sitewide.
- Filter `draft: true` out of `getCollection` in production so drafts never reach the sitemap.
- Sitemap needs no change, static routes are picked up automatically.

## 8. Decisions Karl has taken (locked, do not re-open)

| # | Decision |
|---|---|
| 1 | **Purpose of the blog:** lead magnets, thought leadership, and event information. Purpose of the *site overall* is branding. |
| 2 | **URL:** `/blog`, posts at `/blog/<slug>`. |
| 3 | **Cadence:** roughly **one post per week**. |
| 4 | **Authoring:** Markdown files now, **a CMS is wanted later.** Design the content layer so the CMS is an additive step, not a migration. |
| 5 | **Post styling:** `@tailwindcss/typography` **with a brand override** matching DESIGN.md. |
| 6 | **Images:** one hero image per post. **Black-and-white rule applies. No architecture-motif requirement** — subject matter is free, treatment is monochrome. |
| 7 | **OG images: in scope for v1. RSS: later.** |
| 8 | **End-of-post CTA:** the existing TidyCal link `https://tidycal.com/gewinnarchitekt/kennenlernen`. No newsletter signup. |
| 9 | **YouTube video embeds: yes, in scope.** Implemented as a **click-to-load facade**, never as a bare `<iframe>`. See 8c. |

### 8a. What those answers change versus a naive blog build

- **Weekly cadence means ~52 posts per year.** Pagination is therefore **in scope for v1**,
  not a later nicety. A flat index does not survive year one. Tag or category pages are
  likely needed by roughly post 20 — build the `tags` field into the schema now, build the
  tag *pages* later.
- **"CMS later" is a constraint on today's code, not a future task.** Two rules follow:
  (a) frontmatter must stay flat and primitive-typed, no clever nested YAML;
  (b) page code must never reach into file paths or the filesystem — it goes through
  `getCollection` / `render` only, so the loader can be swapped later.
- **"CMS later" also rules out MDX.** Components embedded in post bodies are painful to edit
  in any CMS. Plain Markdown, and that conveniently avoids a dependency.
- **RSS later, but the schema decides it today.** As long as `pubDate` and `description` are
  required fields from day one, adding `@astrojs/rss` later is a 20-minute job. If they are
  optional, it is a content migration.
- **OG in v1 with a hero image per post** means the hero image doubles as the OG image. No
  need for `@vercel/og` or satori-based image generation in v1. Do not let the agent add one.

### 8b. Sub-decisions the answers did not resolve — recommendations, confirm or overrule

1. **Events are not blog posts.** "Event information" has a date, a location, a registration
   link, and it expires. Putting it in the blog collection means every event pollutes the
   post list forever and reads as stale content the day after it happens.
   **Recommendation:** a **separate `events` collection** with its own schema
   (`title, description, eventDate, location, registrationUrl, draft`), rendered as a small
   "Kommende Termine" block, not as blog entries. Keep it out of blog v1 entirely and build
   it as a follow-on step. Confirm or overrule.
2. **Lead magnets need a mechanism, and there is none yet.** A lead magnet is normally a PDF
   behind an email capture, which implies an email list, double opt-in, and a Datenschutz
   update. None of that exists. **Recommendation for v1:** ungated downloads, plain links to
   PDFs in `public/`, no form. Gating is a separate project with legal implications under
   revDSG. Confirm or overrule.
3. **Which CMS to target.** "CMS later" only constrains today's design if we name a likely
   candidate. **Recommendation: Keystatic** — git-based, Astro-native, reads the exact same
   `src/content/blog/*.md` files, deploys on Vercel without a separate auth service. Decap CMS
   is the alternative but its auth story on Vercel is awkward. Naming Keystatic now costs
   nothing and keeps the frontmatter shape honest.
4. **Hero image handling.** Use Astro's `image()` helper in the collection schema
   (`schema: ({ image }) => z.object({ heroImage: image(), ... })`) so images get optimised
   and width/height are known at build. Store them in `src/assets/blog/`.
   Apply black-and-white as a CSS `grayscale` treatment, not by pre-processing the file, so a
   colour source still renders on-brand and the original stays reusable.
5. **Page size for pagination:** 10 posts per page.

### 8c. YouTube embeds — requirements

Technically, three routes exist and all work in this stack:
(a) raw `<iframe>` in an `.astro` page; (b) raw `<iframe>` pasted into a `.md` post — **Astro
passes raw HTML through Markdown untouched, so this needs no MDX**; (c) a frontmatter field
rendered by the post layout. **Route (c) is the one to build**, because a CMS can offer a clean
"YouTube ID" field, whereas raw iframe HTML inside a body field is exactly what breaks in a CMS
migration. Route (b) stays available as an escape hatch for a second video inside a long post.

**A bare YouTube iframe is not acceptable on this site. Three reasons, all binding:**

1. **Privacy.** A standard `youtube.com/embed` iframe contacts Google and sets cookies **on page
   load, before any user action**. This site has **no consent banner**, and `datenschutz.astro`
   **does not mention Google or YouTube at all** (it documents PostHog in detail).
   `youtube-nocookie.com` reduces the cookie footprint but still calls Google on load, so it is
   not a fix on its own.
2. **Performance.** A standard embed pulls well over a megabyte of JavaScript whether or not
   anyone presses play. The hero image was deliberately optimised in commit `34abe74`; a bare
   embed undoes that gain on every post carrying a video.
3. **Brand.** YouTube's default chrome is red, rounded and thumbnail-heavy — close to the most
   off-brand element that could appear on a site whose DESIGN.md bans rounded buttons, colourful
   chips and shadow-based hierarchy.

**Required implementation — `src/components/VideoEmbed.astro`:**

- Props: `youtubeId` (required), `title` (required, used as the accessible name), `poster`
  (optional local image; falls back to a neutral monochrome placeholder).
- Renders a **static poster image plus a play control**. The real YouTube iframe is injected
  **only on click**, so nothing reaches Google until the visitor actively chooses to play.
  That is consent by action, and it needs no banner.
- Poster treatment: `grayscale` via CSS, matching the site's black-and-white image rule. Do not
  pre-process the source file. Play marker in `#16a34a`, square, no rounded corners, no shadow.
- Injected iframe uses `https://www.youtube-nocookie.com/embed/<id>?autoplay=1`, with
  `title`, `loading="lazy"`, and `allow="accelerometer; autoplay; clipboard-write;
  encrypted-media; picture-in-picture; web-share"`.
- Wrapper enforces `width: 100%; aspect-ratio: 16 / 9;`.
- Keyboard accessible: the play control is a real `<button>`, not a div with a click handler.
- Fire the existing PostHog convention on play: `data-ph-event="video_played"`,
  `data-ph-location="blog_post"`.
- **No new dependency.** Do not install `lite-youtube-embed` or similar; this is roughly 40 lines.

**Two knock-on tasks, each its own prompt:**

- `.prose-ga` must size any raw iframe used via route (b):
  `.prose-ga iframe { width: 100%; aspect-ratio: 16 / 9; }` — the typography plugin does not
  handle iframes.
- **`datenschutz.astro` needs a YouTube / Google Ireland paragraph** before the first video goes
  live: what is transmitted, that it only happens after an explicit click, and a link to Google's
  privacy policy. This is a content change for Karl to approve, not something an agent invents.

**Pre-existing, separate, not part of this work:** the Datenschutz text already states analytics
cookies are set *"nur mit Ihrer Einwilligung"*, while PostHog currently loads unconditionally on
every page. That inconsistency predates the blog. Do not let an agent "fix" it as a side effect.

## 9. How to write the Antigravity prompts (Karl's house rules)

Learned the hard way in earlier sessions. Bake these into every prompt you write.

- **One prompt equals one step**, independently verifiable, small enough to `git commit` after.
- **Commit before each agent action, not after.** Prompt 0 is always: confirm a clean working tree.
- **Anchor the scope explicitly.** Name which files may be created and which may be touched,
  then add: "Do not modify any other file. If you believe another change is needed, stop and
  report it instead of making it." Otherwise the agent 'helpfully' fixes adjacent code.
- **State the stack facts inside every prompt** (Astro 6, Tailwind v4 via Vite plugin, no
  tailwind.config.js, pnpm, `content.config.ts` at the src root). Do not rely on the agent
  inferring them from the repo.
- **Forbid new dependencies** unless that step is explicitly "install X".
- **End every prompt with acceptance criteria**: `pnpm build` succeeds, the route renders,
  no new files in the repo root, named classes or selectors present.
- If the agent is stuck after two or three iterations, escalate to a different tool rather
  than pushing on.

## 10. What I want back from you (Claude chat)

1. Confirm or overrule the five sub-decisions in section 8b. Keep it short.
2. A **step plan**: ordered, each step with its deliverable and its risk. My expected shape,
   correct me if you disagree:
   0. clean tree check
   1. extract `BaseLayout.astro` from the six existing pages (own commit, touches everything)
   2. add OG/Twitter meta to the layout
   3. install `@tailwindcss/typography`, register via `@plugin` in global.css, write `.prose-ga` brand override
   4. `content.config.ts` + blog collection (incl. optional `youtubeId`) + two seed posts
   5. `/blog` index + BlogCard
   6. `/blog/<slug>` post page + BlogPosting JSON-LD + TidyCal CTA
   7. pagination at `/blog/seite/<n>`
   8. Nav + Footer links
   9. `VideoEmbed.astro` click-to-load facade + `.prose-ga iframe` sizing rule (see 8c)
   10. Datenschutz: YouTube / Google paragraph. Karl writes or approves the German copy;
       the agent only places it in the existing page structure.
3. Then the **Antigravity prompts**, one per step, in copy-paste code blocks, each
   self-contained (stack facts, scope constraints, acceptance criteria included), written so
   I can paste them without editing.
4. Flag anything in this brief you think is the wrong call, before you write the prompts.
