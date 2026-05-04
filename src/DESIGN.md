

# Gewinnarchitekt — Design Guide

Dieses Dokument fasst das visuelle System der Gewinnarchitekt-Landingpage zusammen, sodass weitere Seiten, Materialien oder Marketing-Assets konsistent gestaltet werden können.

---

## 1. Markenhaltung

**Positionierung**: Editoriale, architektonische Beratungsmarke. Pricing- und Profitabilitäts-Strategie für KMUs, Tech-Scale-ups und CFO-Netzwerke.

**Tonalität visuell**:
- Klar, strukturiert, ruhig — wie ein technischer Riss
- Großzügiger Weißraum, klare Hierarchie, keine Spielerei
- Architektur-Metapher dezent eingesetzt (Fundament, Säulen, Tragwerk)

**Vermeiden**:
- Soft Gradients und Glow-Effekte
- Generische SaaS-Optik (bunte Icon-Kreise, abgerundete Buttons, Stockfoto-Hero mit Team)
- Überladene Hintergründe, Karo-/Blueprint-Pattern

---

## 2. Farbsystem

| Rolle | Hex | RGB | Verwendung |
|---|---|---|---|
| Grün (Gewinn) | `#16a34a` | 22, 163, 74 | Akzente, Schlüsselwörter, primäre CTAs, Akzentpunkte |
| Anthrazit (Architekt) | `#1f2937` | 31, 41, 55 | Headlines, Body, dunkle Sektionen |
| Weiß | `#ffffff` | — | Haupthintergrund, Text auf dunklem Grund |
| Hellgrau | `#f9fafb` | — | Sekundäre Sektionsflächen |
| Mittelgrau | `#6b7280` | — | Sekundärtext, Untertitel, Eyebrows |
| Linie | `#e5e7eb` | — | Hairline-Trenner, Tabellen, Karten-Outlines |

**Regeln**:
- Grün ist Akzentfarbe, nicht Primärflächenfarbe. Maximal 1–2 Grünelemente pro Bildschirm.
- Niemals Verläufe (gradients) zwischen Markenfarben.
- Auf Dunkel: Weißtext mit Opazitäten 100 / 90 / 65 / 40 für Hierarchiestufen.

---

## 3. Typografie

**Schriftfamilie**: Inter (sans-serif, von Google Fonts).

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
```

### Hierarchie

| Element | Weight | Größe (lg / sm / mobil) | Letter-spacing | Line-height |
|---|---|---|---|---|
| Hero-Headline (lange Aussage) | 300 (light) | 54 / 42 / 32 px | -0.035em | 1.1 |
| Section-Headline (h2) | 400 | 60 / 48 / 36 px | -0.035em | 1.05 |
| Statement / Pull-Quote | 400 | 38 / 32 / 26 px | -0.035em | 1.2–1.3 |
| Subhead / Tagline | 400 | 22–28 px | -0.035em | 1.2 |
| Body | 400 | 16–18 px | normal | 1.6 |
| Sekundärtext | 400 | 13–14 px | normal | 1.55 |
| Eyebrow / Label | 500 | 11 px | 0.18em uppercase | normal |
| Stat / Zahl | 400 (light) | 36–48 px | -0.035em | 1 |

**Faustregel für Headlines**:
- Kurze Statements (≤ 6 Wörter): 64–88 px
- Mittellange (8–14 Wörter): 44–56 px
- Lange Sub-Headlines: 32–40 px

Genutzte Utility-Klasse für Display-Typografie:

```css
.font-display {
  font-family: 'Inter', system-ui, sans-serif;
  letter-spacing: -0.035em;
  font-weight: 400;
}
```

---

## 4. Layout & Raster

- Maximale Inhaltsbreite: **1280 px**
- Container-Padding: `24 px` (mobil), `40 px` (lg)
- Spaltenraster: `grid-cols-12` mit `gap-6` (mobil) / `gap-10` (lg)
- Sektionspolster: `py-20` mobil, `py-28` bis `py-32` lg
- **Numerierte Eyebrow-Spalten** (col-span 2) links neben Section-Headlines erzeugen die editoriale Anmutung

### Trennlinien
- Standard Hairline: `1 px solid #e5e7eb`
- Akzent-Trenner über kompletten Spaltenkopf: `1 px solid #1f2937`
- Auf Dunkel: `1 px solid rgba(255,255,255,0.15–0.20)`
- **Keine Schatten**, **keine Cards mit Box-Shadow** — Hierarchie wird ausschließlich über Linien, Whitespace und Typografie erzeugt.

---

## 5. Komponenten-Patterns

### Buttons
Immer **rechtwinklig** (`border-radius: 0`).

| Variante | Style |
|---|---|
| Primär | `bg-#16a34a text-white` · `px-6 py-4` · Hover: `bg-#15803d` |
| Sekundär | `border border-#1f2937 text-#1f2937` · Hover: invert (`bg-#1f2937 text-white`) |
| Auf Dunkel | `border border-white/40 text-white` · Hover: `bg-white text-#1f2937` |

CTA-Pfeil: `lucide-react` `ArrowUpRightIcon` oder `ArrowDownIcon`, `w-4 h-4`, `strokeWidth=2.25`.

### Eyebrow-Label

```
[grüner Punkt 6 px] PRICING & FINANCIAL STRATEGY · ZÜRICH
```

```html
<span class="inline-block w-1.5 h-1.5 bg-[#16a34a]"></span>
<span class="text-[13px] font-medium">…</span>
```

Oder als reine Mini-Label-Variante:

```css
.label-eyebrow {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 500;
  color: #6b7280;
}
```

### Numerierte Sektionen
Sektions-Headlines stehen rechts, links daneben ein numerierter Eyebrow:

```
01 DIAGNOSE     |  Preise kalkulieren ist simpel.
                   Margen maximieren ist eine Disziplin.
```

### Stat-Strip (Kennzahlen)
Vier-Spalten-Block mit `1 px`-Trennern, helle Zahlen `font-display` 36–48 px, Label darunter Eyebrow-Style.

### Diagramm-Patterns
- Architekturmotive (Säulen, Tragwerk, Fundament) als SVG, monochrom
- Linienstärke: `1.5 px` für Strukturlinien, `2–3 px` für Hauptträger/Fundament
- Akzent-Element (z. B. Preis-Box) immer mit `1.5 px` grünem Border und Anthrazit-Fill
- Beschriftung: Inter, 10–12 px, `letterSpacing="2"`, oft uppercase

---

## 6. Sektionsrhythmus

Standardabfolge der Landingpage:

1. **Hero** — dunkel, vollflächiges Architekturmotiv mit Overlay (`bg-#1f2937/85`)
2. **Stat-Strip** — heller Streifen direkt unter dem dunklen Hero (kontrastiert)
3. **Diagnose / Probleme** — weiß, drei-spaltig
4. **Methode / Architektur** — dunkel, mit großem SVG-Diagramm
5. **Leistungen** — hellgrau (`#f9fafb`), Editorial-Listenformat (numerierte Zeilen mit Hairline-Trennern)
6. **Mandate / Zielgruppen** — weiß, drei-spaltig mit Hairlines
7. **Über mich** — weiß, Foto links, Inhalt rechts mit Pull-Quote und Faktentabelle
8. **Kontakt / Footer** — dunkel

**Visueller Rhythmus**: hell → hell → **dunkel** → hellgrau → hell → hell → **dunkel**. Dunkle Sektionen funktionieren als Akzent und Atemzeichen.

---

## 7. Sprache & Copy

- Sprache: Deutsch, gehobener Geschäftston, kurze klare Sätze
- **Keine Em-Dashes (—)** in sichtbarem Copy — stattdessen Komma, Doppelpunkt oder Punkt
- Trennzeichen in Eyebrows und Meta-Zeilen: `·` (Mid-Dot mit Spaces)
- Schlüsselwörter wie *Gewinn*, *Pricing*, *Marge* können im Fließtext grün ausgezeichnet werden — sparsam (max. einmal pro Headline)
- Zitate in französischen Anführungszeichen: «…»

**Beispiele**:

> Pricing ist kein einmaliges Projekt, sondern ein fester Teil Ihres Unternehmens.

> «Pricing ist das einzige Werkzeug, das gleichzeitig auf Marge, Wachstum und Marktposition wirkt. Wer es ignoriert, baut auf Sand.»

---

## 8. Bildsprache

- Architekturmotive: minimalistische Fassaden, Beton, Tragstrukturen, klare Linien
- Immer **monochrom** behandeln (`grayscale`), bei Bedarf mit Anthrazit-Overlay (`bg-#1f2937/70–85`)
- Portraits: einfacher Hintergrund, professionell, Farbe ok wenn ruhig
- **Keine** lebhaften Stockfotos, keine Team-Cliché-Bilder, keine Diagramm-Renderings statt echter Fotos
- Vollflächige Hero-Bilder werden mit Overlay zur Lesbarkeit kombiniert

---

## 9. Icons

- Bibliothek: **lucide-react**, immer mit `Icon`-Suffix importieren
- Style: ausschließlich Linien-Icons, `strokeWidth=2.25`
- Größe: 14–16 px in Buttons, 18–20 px in Listen
- **Keine** farbigen Icon-Kreise, keine Icons auf farbigem Hintergrund
- Wo möglich: numerische Indizes (01, 02, 03) statt Icons verwenden

---

## 10. Animation

- Sparsam einsetzen (`framer-motion` empfohlen)
- Bevorzugte Bewegungen: leichtes `y` Offset (8–16 px) mit Fade-in beim Scroll
- Dauer 300–500 ms, Easing `easeOut`
- **Kein** Bouncing, kein Spring mit Overshoot
- Hover-Effekte: Farbübergänge in 150–200 ms

---

## 11. Verbindliche Regeln (Don'ts)

- ❌ Keine Gradients
- ❌ Keine abgerundeten "bubbly" Buttons (max. `rounded-sm` für Inputs)
- ❌ Keine Schatten als Hierarchiemittel — nur Hairlines
- ❌ Keine Karo-/Blueprint-Pattern als Hintergrund
- ❌ Keine generischen B2B-SaaS-Templates
- ❌ Keine Em-Dashes im sichtbaren Text
- ❌ Keine bunten Icon-Container

---

## 12. Stack

- React + TypeScript
- Tailwind CSS (Standardkonfiguration, Farben werden als arbitrary values `[#16a34a]` referenziert)
- Inter via Google Fonts
- lucide-react für Icons
- framer-motion (optional) für Mikro-Animationen

