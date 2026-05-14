# Gewinnarchitekt — progress.md

**Stand:** 14. Mai 2026, Session-Ende
**Nächster Schritt:** Antigravity-Session zur Umsetzung der Hero-v2-Anpassungen

---

## Aktivitäten dieser Session

- Konkurrenzanalyse: cfotogrow.ch (Astro+Strapi), nexova.ch (WordPress), fspartners.ch (WordPress+Elementor)
- Magic-Patterns-Brief für Hero v2 erstellt und iteriert
- Iterations-Outputs ausgewertet — Layout-Variante "Bild 2" (Schraffur-Background ohne Tragwerk) als finale Wahl
- Strategische Pivots: Tragwerk im Hero verworfen; Detail-SVGs für Methodik verworfen; "zu textlastig"-Kritik aufgegriffen und Lösung definiert
- Übergabe an Antigravity-Session für finale Umsetzung

---

## Locked Decisions (nicht mehr aufmachen)

### Hero v2
- **Höhe:** ~95vh (aktuell ~60vh)
- **Layout:** Schraffur-Background trägt die Bühne allein, **kein Tragwerk-Diagramm im Hero**
- **Trust-Bar:** Als Overlay innerhalb des Hero, weisse Schrift auf teiltransparentem dunklen Hintergrund, ~80% Höhe positioniert
- **Animation:** Optional Slow Drift auf Schraffur-Pattern (~60s pro Zyklus). Nur einbauen, wenn in einer Iteration sitzt — sonst weglassen
- **Headline:** "Gewinn ist eine Frage der Methodik, nicht des Zufalls." (Placeholder; Revision in separater Session)
- **Kein Foto von Karl im Hero** — Porträt bleibt auf Profil-Seite

### Methodik-Sektion
- **Keine Anpassung.** Bleibt wie aktuell, inkl. Tragwerk an seiner aktuellen Position
- A/B/C/D-Texte bleiben unverändert
- Detail-SVGs (Idee aus dieser Session) verworfen für v1 — siehe Backlog

### Editorial-Architekturfoto
- **Eine Stelle** als visueller Rhythmus-Bruch (zu textlastig-Kritik)
- Position: Übergang Methodik → Zielpublikum
- Stilvorgabe: abstrakte Architektur (Beton, Stahl, Fassaden-Geometrie), Schwarz-Weiss oder stark entsättigt
- **Keine Menschen, keine Schreibtische, keine Händedrücke**
- Quelle: Unsplash "Architecture", kuratiert auf abstrakt-strukturell

---

## TODO — Antigravity-Session

In dieser Reihenfolge angehen:

1. **Git-Commit vor Beginn** — Karl-Lesson aus früherer Session, nicht vergessen
2. **Hero auf 95vh hochziehen** — vertikales Padding anpassen
3. **Trust-Bar als Overlay einbauen** — weisse Schrift, teiltransparenter Hintergrund, ~80% Höhe im Hero
4. **Optional: Slow Drift Animation** auf Schraffur (~60s Zyklus, CSS keyframes). Falls Antigravity loopt → weglassen
5. **Editorial-Architekturfoto** zwischen Methodik und Zielpublikum einsetzen
6. **Methodik-Sektion explizit nicht anfassen** — als Guard-Rail im Prompt setzen
7. **Magic-Patterns-Output als Referenz** (Bild 2) in die Antigravity-Session reingeben

---

## Backlog / Future Sessions

### Wir hatten besprochen und verschoben
- **Hero-Headline-Revision** — "Gewinn ist eine Frage der Methodik..." ist Placeholder
- **Detail-SVGs für Methodik** (A/B/C/D als architektonische Detail-Zeichnungen) — zu aufwendig für v1, gut für später
- **Interaktive Tragwerk-Highlights** (Hero ↔ Methodik via IntersectionObserver) — Premium-Variante
- **Hero-A/B-Variants** (Inverted Layout, Watermark-Variante) — falls Performance/Conversion-Test gewünscht
- **Tragwerk-Animation** (Linie-für-Linie-Zeichnen beim Laden) — als realistische Option verworfen, könnte mit professionellem Designer später kommen

### Schon vorher offen
- **Service-Naming** — Move weg von "Fünf Dimensionen", Reconciliation mit "Statik des Gewinns"
- **Meta-Title** "Pricing & Analytics as a Service" → Update nötig
- **PageSpeed-Review** auf pagespeed.web.dev
- **EN-Version** der Seite

---

## Übersicht über visuelle Sprache (Konsens dieser Session)

- **On-brand:** Architektur-Schraffur als Hintergrund, Tragwerk-Diagramm in Methodik, FIG.-Nummerierung, M-1:50-Notation, Inter-Typografie mit Letter-Spacing, abstrakte S/W-Architekturfotografie sparsam eingesetzt
- **Off-brand:** Stockfotos von Menschen/Händen/Laptops, Verlaufs-Blobs, runde Bubble-Designs, Karussells, Logo-Walls, bunte Icon-Sets

Diese Sprache trägt das Premium-Editorial-Signal, das die Goldbach/Swisscard/Sunrise-Seniorität visuell stützt.
