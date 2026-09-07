# Gewinnarchitekt — progress.md

**Stand:** 7. September 2026
**Status:** Working Tree clean bis auf die neuen Dateien dieser Session. Letzter Commit: `bceb3d5` (26. Aug 2026, "wordinggewinnfundament").
**Nächste Session:** Blog-Bereich — Entscheidungen klären, dann Antigravity-Prompts abarbeiten.

---

## Aktivitäten heute (7. September 2026)

- **Repo-Bestandsaufnahme** durch Claude Code: Tech-Stack, Konventionen, Design-System und
  Altlasten verifiziert (nicht geschätzt, sondern aus `package.json` / `node_modules` / Code gelesen).
- **Kontext-Brief für den Blog-Bereich erstellt**: `.00AIprogress/blog-context-brief.md`.
  Zweck: als Kontext in Claude Chat hochladen, damit dort saubere Antigravity-Prompts entstehen.
- **Tool-Stack-Korrektur** gegenüber dem Eintrag vom 14. Mai (siehe unten).
- **Statusabgleich der Mai-TODOs** anhand des tatsächlichen Codes.

---

## Korrektur zum Eintrag vom 14. Mai 2026

Der Mai-Eintrag hielt fest: *"Antigravity deprecated, Cursor als primary Coding-Agent"*.

**Das gilt nicht mehr. Antigravity ist der aktive Coding-Agent.** Karl arbeitet mit
Antigravity, Claude Chat dient als vorgelagerte Denk- und Prompt-Instanz, Claude Code als
Analyse- und Kontroll-Instanz im Repo. Der Mai-Eintrag war eine Momentaufnahme nach einer
einzelnen schlechten Session, keine dauerhafte Entscheidung.

**Aktueller Tool-Stack:**
- **Antigravity** — primärer Coding-Agent, schreibt direkt ins Repo
- **Claude Chat** — Sparringspartner für Konzept und Prompt-Erstellung (bekommt Kontext-Briefs als Upload)
- **Claude Code** — Repo-Analyse, Faktenprüfung, Review, Doku-Pflege

---

## Verifizierter Tech-Stand (Stand 7. Sept 2026)

Bewusst hier dokumentiert, weil Coding-Agents genau diese Punkte regelmässig falsch raten.

| Thema | Ist-Zustand |
|---|---|
| Framework | Astro **6.4.8** |
| Package Manager | pnpm, Node `>=22.12.0` |
| CSS | Tailwind **v4.3.3** über `@tailwindcss/vite`. **Kein** `tailwind.config.js`, **nicht** `@astrojs/tailwind`. |
| Aktives Stylesheet | `src/styles/global.css` |
| Totes Stylesheet | `src/index.css` (Tailwind-v3-Syntax, von nichts importiert) |
| Fonts | `@fontsource/inter` 300–700, pro Seite importiert |
| Hosting | Vercel, `@astrojs/vercel` |
| Output | `static`. Nur `src/pages/api/contact.ts` ist on-demand (`prerender = false`). |
| Sitemap | `@astrojs/sitemap` 3.7.3, nimmt neue statische Routen automatisch auf |
| Analytics | PostHog, inline in jedem `<head>`, gated auf `PUBLIC_POSTHOG_KEY` |
| Mail | Resend (nur Kontaktformular) |
| Nicht installiert | `@astrojs/rss`, `@astrojs/mdx`, `@tailwindcss/typography`, React, framer-motion, lucide-react |

**Strukturelle Altlast:** Es gibt **kein `src/layouts/`** und keine gemeinsame Layout-Komponente.
Alle sechs Seiten duplizieren den kompletten `<html><head>`-Block inklusive des rund 2 kB
grossen PostHog-Snippets von Hand. Es gibt **keine Content Collection** (`src/content/` fehlt;
`.astro/collections/leistungen.schema.json` ist ein totes Artefakt eines abgebrochenen Versuchs).

**Weitere Altlast:** `src/DESIGN.md` Kapitel 12 behauptet den Stack "React + TypeScript +
lucide-react + framer-motion". Das ist veraltet und führt Agents in die Irre. Alles andere in
DESIGN.md (Farben, Typografie, Layout, Don'ts) ist weiterhin gültig und verbindlich.

---

## Statusabgleich: TODOs vom 14. Mai

| Mai-TODO | Status heute | Nachweis |
|---|---|---|
| Editorial-Architekturfoto einbauen | **erledigt** | `concrete-junction`, `tower-facade`, `modular-building`, `recursive-stairwell` sind in `Zielpublikum.astro` und `Leistungen.astro` im Einsatz |
| Meta-Title "Pricing & Analytics as a Service" ersetzen | **erledigt** | Titel lautet jetzt "Gewinnarchitekt \| Preis & Profitarchitektur für KMU" |
| Repo-Cleanup | **offen** | `debug_output.html` liegt weiterhin im Root, `src/index.css` weiterhin tot, `archive/` und `backups/` unverändert |
| Italic-Serif-Emphase-Pass | **offen** | Keine Serif-Familie im Projekt, `.font-serif-display` ist in `global.css` explizit auf Inter neutralisiert |
| PageSpeed-Review | **teilweise** | Hero-Bild wurde optimiert (`34abe74`, 29. Juli), ein systematischer Review steht aus |
| EN-Version der Seite | **offen** | Keine i18n-Struktur vorhanden |

---

## Zwischenzeit Mai bis August 2026 (aus Git rekonstruiert)

Der Mai-Eintrag war der letzte in diesem Dokument, die Arbeit lief aber bis Ende August weiter.
Rekonstruktion aus der Commit-Historie, ohne Anspruch auf die dahinterliegenden Begründungen:

- **Juni:** Diagnose, Zielpublikum (Ausweitung auf 3 Segmente, später zurück auf 2), Leistungen
  überarbeitet. Seite `herangehensweise` implementiert. `SiteSchema` für SEO ergänzt.
  `@astrojs/check` + TypeScript aufgenommen.
- **Anfang Juli:** `leistungsseite` zu `angebot` umbenannt inkl. Redirect. Impressum und
  Datenschutz angelegt, Footer-Links aktualisiert. Kontaktformular gebaut. Logo-Wall ergänzt.
  `.vercel` aus dem Tracking genommen.
- **Mitte/Ende Juli:** Angebotsportfolio mehrfach überarbeitet, "Gewinnfundament" als Begriff
  eingeführt, Entscheidungsworkshops ergänzt. Seite "Über mich" gebaut. SEO-Updates und
  Hero-Bild-Optimierung.
- **August:** Schreibfehler-Korrekturen und Wording rund um "Gewinnfundament".

---

## Offene inhaltliche Baustelle: konkurrierende Framework-Namen

Der Mai-Backlog nannte die *"Reconciliation der konkurrierenden Frameworks"*. Aktueller Stand:

- **"Fünf Dimensionen"** kommt im Code nicht mehr vor. **Erledigt.**
- **"Gewinnfundament"** steht in `src/pages/angebot.astro`.
- **"Statik des Gewinns"** steht weiterhin in `src/components/Footer.astro`.

Es laufen also weiterhin **zwei** Begriffe parallel. Das ist eine Karl-Entscheidung, kein
Agent-Task: entweder "Statik des Gewinns" im Footer auf "Gewinnfundament" ziehen oder die
Rollen der beiden Begriffe bewusst trennen.

---

## Locked Decisions — Blog (7. September 2026)

| Thema | Entscheid |
|---|---|
| Zweck des Blogs | Lead Magnets, Thought Leadership, Event-Informationen |
| Zweck der Site insgesamt | **Branding** (korrigiert, vorher als Lead-Generierung notiert) |
| URL | `/blog`, Posts unter `/blog/<slug>` |
| Frequenz | rund ein Post pro Woche |
| Authoring | Markdown, **CMS später** |
| Post-Styling | `@tailwindcss/typography` **mit Brand-Override** |
| Bilder | ein Hero-Bild pro Post, S/W-Regel gilt, **kein** Architektur-Motiv-Zwang |
| OG-Bilder | in Scope für v1 |
| RSS | später |
| CTA am Postende | bestehender TidyCal-Link |
| YouTube-Videos | ja, in Scope, aber **nur als Click-to-Load-Facade**, nie als blankes `<iframe>` |

**Konsequenzen, die daraus folgen:**
- Ein Post pro Woche sind rund 52 im Jahr. **Pagination gehört damit in v1**, nicht in den Backlog.
  Tag-Seiten werden ab etwa Post 20 nötig, das `tags`-Feld kommt aber schon jetzt ins Schema.
- "CMS später" ist eine Einschränkung für den Code von **heute**: flaches Frontmatter, und
  Seiten-Code greift ausschliesslich über `getCollection` / `render` zu, nie auf Dateipfade.
  Damit ist der CMS-Schritt später additiv statt einer Migration. Zielkandidat: **Keystatic**.
- "CMS später" schliesst **MDX aus**. Komponenten im Post-Body sind in jedem CMS mühsam.
- RSS später funktioniert nur, wenn `pubDate` und `description` von Anfang an Pflichtfelder sind.
- Hero-Bild pro Post + OG in v1 heisst: das Hero-Bild ist das OG-Bild. **Keine** OG-Bild-Generierung
  (`@vercel/og`, satori) einbauen.
- **YouTube:** Astro reicht rohes HTML in Markdown unverändert durch, ein `<iframe>` im `.md`
  funktioniert also ohne MDX. Gebaut wird trotzdem ein Frontmatter-Feld `youtubeId` plus
  `VideoEmbed.astro`, weil ein CMS ein sauberes Feld anbieten kann, während rohes iframe-HTML im
  Body-Feld bei der CMS-Migration bricht.
- Ein blankes YouTube-`<iframe>` kontaktiert Google **beim Seitenaufbau, vor jeder Nutzeraktion**.
  Es gibt keinen Consent-Banner, und `datenschutz.astro` erwähnt Google/YouTube bisher gar nicht.
  Darum Click-to-Load: nichts geht an Google, bis jemand aktiv auf Play klickt. Zusätzlich spart
  das über ein Megabyte JavaScript pro Post und hält die YouTube-Optik (rot, rund, Thumbnail)
  von der Seite fern.

---

## Offener rechtlicher Punkt (vorbestehend, nicht Teil der Blog-Arbeit)

`datenschutz.astro` schreibt, Analyse-Cookies würden nur "mit Ihrer Einwilligung" gesetzt.
PostHog lädt aber auf jeder Seite bedingungslos, einen Consent-Banner gibt es nicht.
Das ist ein bestehender Widerspruch, unabhängig vom Blog. Entscheid liegt bei Karl:
entweder Consent-Mechanik nachrüsten oder den Datenschutztext an die Realität anpassen.
**Kein Agent-Task, und kein Agent darf das als Nebeneffekt "mitfixen".**

Sobald das erste Video live geht, braucht `datenschutz.astro` zusätzlich einen Abschnitt zu
YouTube / Google Ireland: was übertragen wird, dass es erst nach explizitem Klick passiert,
Link auf die Google-Datenschutzerklärung.

**Noch offen, Empfehlungen im Brief Abschnitt 8b:** Events als eigene Collection statt als
Blog-Posts, Lead Magnets in v1 ungated (ohne Formular, revDSG-Thema), CMS-Zielkandidat bestätigen,
`image()`-Helper für Hero-Bilder, Seitengrösse 10.

---

## TODO — nächste Session (in dieser Reihenfolge)

1. **Kontext-Brief in Claude Chat hochladen** (`.00AIprogress/blog-context-brief.md`, Revision 2)
   und dort die Antigravity-Prompt-Kette erzeugen lassen. Die fünf Sub-Entscheide aus
   Abschnitt 8b vorher bestätigen oder überstimmen.
2. **`BaseLayout.astro` extrahieren** (eigener Commit, vor dem Blog)
   Head-Block und PostHog-Snippet aus allen sechs Seiten in ein Layout ziehen. Das ist der
   Schritt mit dem höchsten Hebel, aber er fasst alle bestehenden Seiten an, darf also nicht
   mit der Blog-Arbeit vermischt werden.
3. **Open-Graph- und Twitter-Meta ergänzen** (existiert bisher auf der ganzen Seite nicht)
4. **Typography-Plugin + `.prose-ga` Brand-Override** in `global.css` (Tailwind v4: Registrierung
   über `@plugin "@tailwindcss/typography";`, **nicht** über eine `tailwind.config.js`)
5. **Blog implementieren** entlang der Prompt-Kette aus Schritt 1.
6. **`VideoEmbed.astro`** (Click-to-Load-Facade) + `.prose-ga iframe`-Sizing, plus
   Datenschutz-Abschnitt zu YouTube/Google. Deutscher Text von Karl, Agent platziert nur.
7. **Events** als eigene Collection nachziehen, sobald der Blog steht.
8. **Repo-Cleanup** (aus dem Mai-Backlog, weiterhin offen): `debug_output.html`,
   `src/index.css`, `archive/`, `backups/`, DESIGN.md Kapitel 12 korrigieren.

---

## Backlog / Future Sessions

### Konzeptionell, eigene dedizierte Session
- **Hero-Headline-Revision** — "Gewinn ist eine Frage der Methodik..." ist Placeholder, zu generisch (Karl agreed)
- **Begriffs-Reconciliation** "Gewinnfundament" vs. "Statik des Gewinns" (siehe oben)
- **Service-Naming** final schärfen

### Aus outside-cfo.com-Inspiration (nicht prioritär, alle bestätigt)
- **Zahlen-als-Hintergrund-Pattern** — subtile Pricing-relevante Zahlenfragmente als Background in einer CTA-Sektion
- **Process-Timeline mit vertikaler Linie** — Layout für Methodik oder Leistungen
- **"Ergebnis:"-Pattern in Leistungen** — Copywriting-Verbesserung
- **"Was Gewinnarchitekt nicht macht / macht"-Doppelung** — Positionierungs-Block

### Falls Substrat vorhanden
- **Case-Study-Kartenstruktur** (Ausgangslage → Massnahmen → Outcome-Tags) — sobald 1-2 Referenzkunden vorliegen
- **Orbital-Tools-Diagramm** für Methodik-Stack (Python, Crystal Ball, Monte Carlo, Sensitivitätsanalyse, Power BI)

### Schon länger offen
- **Italic-Serif-Emphase-Pass** (Cormorant Garamond oder Crimson Pro als Italic-Begleiter zu Inter)
- **PageSpeed-Review** auf pagespeed.web.dev
- **EN-Version** der Seite

---

## Workflow-Lessons (kumuliert, weiterhin gültig)

- Git-Commit **vor** jeder Agent-Aktion, nicht danach.
- Scope-Constraint explizit im Prompt verankern. Agents fixen sonst ungefragt "passende" Nachbarstellen mit.
- Ein Prompt = ein verifizierbarer Schritt, klein genug für einen eigenen Commit.
- Stack-Fakten in den Prompt schreiben, nicht darauf hoffen, dass der Agent sie aus dem Repo abliest.
- Neue Dependencies nur, wenn der Schritt explizit "installiere X" heisst.
- Bei stuck Agent: 2-3 Iterationen, dann eskalieren statt drauf-pushen.
- Vercel-Rollback-False-Alarm vermeiden: erst Inkognito-Test, dann Rollback.

---

## Visuelle Sprache (Konsens, weiterhin gültig)

- **On-brand:** Architektur-Schraffur als Hintergrund (mit Slow-Drift-Animation), Tragwerk-Diagramm in Methodik, FIG.-Nummerierung, M-1:50-Notation, Inter-Typografie mit Letter-Spacing, abstrakte S/W-Architekturfotografie sparsam eingesetzt, Italic-Serif als Emphase-Layer (geplant)
- **Off-brand:** Stockfotos von Menschen/Händen/Laptops, Verlaufs-Blobs, runde Bubble-Designs, Karussells, Logo-Walls von Kunden, bunte Icon-Sets

Premium-Editorial-Signal, das die Goldbach/Swisscard/Sunrise-Seniorität visuell stützt.
