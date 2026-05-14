# Gewinnarchitekt — progress.md

**Stand:** 14. Mai 2026, Session-Ende (Abend)
**Status:** Alles committed und gepusht. Live-Site aktuell.
**Nächste Session:** Repo-Cleanup → Editorial-Foto → Italic-Serif-Pass

---

## Aktivitäten heute

- Konkurrenzanalyse: cfotogrow.ch, nexova.ch, fspartners.ch, outside-cfo.com (Tech-Stacks identifiziert, Inspirations-Punkte extrahiert)
- Magic-Patterns-Iterationen für Hero v2 — finale Wahl: Schraffur-Background mit Slow-Drift-Animation, ohne Tragwerk im Hero
- Hero-Fassaden-Animation implementiert (30s drift bottom-to-top)
- Stationen-Strip ergänzt unter Credentials-Bar (Sunrise, Goldbach, Swisscard, TX Group) — Layout: Grid 1fr 3fr
- Tool-Migration: Antigravity → Cursor (Antigravity-Agent war stundenlang nicht responsiv, dann auch mit Opus 4.6 nicht zielführend)

---

## Locked Decisions (heute)

### Hero v2 — gelaunched
- Höhe ~95vh ✓
- Schraffur-Background mit Slow-Drift-Animation (30s, bottom-to-top, infinite) ✓
- Trust-Bar als Overlay innerhalb des Hero ✓
- **Stationen-Strip** unter Credentials-Bar: Grid 1fr 3fr, Eyebrow "■ STATIONEN" links (entspricht "20+ / JAHRE ERFAHRUNG"-Spalte), 4 Firmennamen rechts mit justify-between, Hover-Effekt (volle Weiss-Opazität + Pointer-Cursor)
- Stationen-Inhalt: **Sunrise · Goldbach · Swisscard · TX Group** (tatsächliche Arbeitgeber — Amex-Frage geklärt zugunsten Swisscard, Tagesanzeiger/20-Minuten konsolidiert zu TX Group)

### Tool-Stack-Update
- **Cursor als primary Coding-Agent** (Pro-Account, Opus 4.7 als Default-Modell für Agent)
- **Claude Code in Warp als Fallback** für stuck Cursor
- **Antigravity deprecated** (nicht deinstalliert, aber nicht mehr in der aktiven Rotation)

### Workflow-Lessons aus heute
- Vercel-Rollback-False-Alarm: Browser-Cache vs. echtes Deploy-Problem unterscheiden lernen → erst Inkognito-Test, dann Rollback
- Git-Commit VOR jeder Agent-Aktion, nicht danach
- Bei stuck Agent: 2-3 Iterationen, dann eskalieren statt drauf-pushen
- Scope-Constraint explizit im Prompt verankern (Cursor neigt sonst dazu, "passende" Sachen mitzufixen)

---

## TODO — nächste Session (in dieser Reihenfolge)

1. **Repo-Cleanup** (~15 Min, leichter Einstieg)
   - debug_output.html und ähnliche Antigravity-Debug-Artefakte löschen
   - Tote @keyframes-Definitionen oder unbenutzte CSS-Blöcke aus früheren Animation-Versuchen entfernen
   - Auskommentierte Code-Reste durchgehen
2. **Editorial-Architekturfoto einbauen** (~30-45 Min)
   - Position: Übergang Methodik → Zielpublikum
   - Quelle: Unsplash "Architecture", kuratiert auf abstrakt-strukturell (Beton, Stahl, Fassaden-Geometrie)
   - S/W oder stark entsättigt, keine Menschen
3. **Italic-Serif-Emphase-Pass** (~30-45 Min, von outside-cfo.com inspiriert)
   - Cormorant Garamond oder Crimson Pro als Italic-Begleiter zu Inter
   - Einsatzkandidaten: "*Statik des Gewinns*", "Drei Profile. Eine *Logik der Profitabilität.*", "Wir bauen Profit, *mit Fundament und Rhythmus.*"

---

## Backlog / Future Sessions

### Konzeptionell, eigene dedizierte Session
- **Hero-Headline-Revision** — "Gewinn ist eine Frage der Methodik..." ist Placeholder, zu generisch (Karl agreed)
- **Service-Naming** — Move weg von "Fünf Dimensionen", Reconciliation mit "Statik des Gewinns"
- **Reconciliation der konkurrierenden Frameworks** — "Statik des Gewinns" (4 Elemente) vs "Fünf Dimensionen"

### Aus outside-cfo.com-Inspiration (nicht prioritär, alle bestätigt)
- **Zahlen-als-Hintergrund-Pattern** — subtile Pricing-relevante Zahlenfragmente als Background in einer CTA-Sektion (potenziell stärker als aktuelles Schraffur-Pattern)
- **Process-Timeline mit vertikaler Linie** — Layout für Methodik oder Leistungen
- **"Ergebnis:"-Pattern in Leistungen** — Copywriting-Verbesserung
- **"Was Gewinnarchitekt nicht macht / macht"-Doppelung** — Positionierungs-Block

### Falls Substrat vorhanden
- **Case-Study-Kartenstruktur** (Ausgangslage → Maßnahmen → Outcome-Tags) — sobald 1-2 Referenzkunden vorliegen
- **Orbital-Tools-Diagramm** für Methodik-Stack (Python, Crystal Ball, Monte Carlo, Sensitivitätsanalyse, Power BI)

### Schon vorher offen
- **Meta-Title** "Pricing & Analytics as a Service" → Update nötig
- **PageSpeed-Review** auf pagespeed.web.dev
- **EN-Version** der Seite

---

## Visuelle Sprache (Konsens, weiterhin gültig)

- **On-brand:** Architektur-Schraffur als Hintergrund (mit Slow-Drift-Animation), Tragwerk-Diagramm in Methodik, FIG.-Nummerierung, M-1:50-Notation, Inter-Typografie mit Letter-Spacing, abstrakte S/W-Architekturfotografie sparsam eingesetzt, Italic-Serif als Emphase-Layer (geplant)
- **Off-brand:** Stockfotos von Menschen/Händen/Laptops, Verlaufs-Blobs, runde Bubble-Designs, Karussells, Logo-Walls von Kunden, bunte Icon-Sets

Premium-Editorial-Signal, das die Goldbach/Swisscard/Sunrise-Seniorität visuell stützt.
