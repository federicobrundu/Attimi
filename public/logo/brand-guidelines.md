# ATTIMI — Brand Guidelines
## Logo System Documentation

---

## 1. Brand Identity

**ATTIMI — Wedding Experience** is a full-service wedding agency operating in Rome, Italy and internationally. The brand identity is built on four pillars: music, IT/web, photo/video, and floral design — unified under a single editorial vision.

**Identity keywords:** luxury minimalism · cinematic elegance · warm editorial · multidisciplinary · timeless

---

## 2. The Symbol — "I Tre Attimi"

The primary abstract mark consists of three graduated upward arcs, graduated in width (narrow · wide · narrow). It represents:

- The three core "moments" of a wedding: preparation, ceremony, celebration
- Sound waves — music as emotional language
- Light arcs — photography capturing instants
- Rhythm and flow — the choreography of a perfect day
- The feeling of a held breath before a transformative moment

The mark works independently as an app icon, favicon, watermark, and decorative motif.

---

## 3. The Monogram — Geometric A

A geometric uppercase A letterform, inscribed in a thin circle, with a **split crossbar**. The gap in the center of the crossbar represents the pause between moments — the "attimo" itself.

Use the monogram when:
- The brand name cannot fit (profile photos, badges)
- A more heraldic/signet treatment is needed
- The symbol feels too abstract for the context

---

## 4. Color Palette

| Name            | Hex       | RGB               | Use                          |
|-----------------|-----------|-------------------|------------------------------|
| Deep Black      | `#1A1A1A` | 26, 26, 26        | Primary dark background      |
| Soft Black      | `#2A2A2A` | 42, 42, 42        | Secondary surface, cards     |
| Champagne White | `#F8E9D8` | 248, 233, 216     | Light background, body text  |
| Warm Gold       | `#C7B299` | 199, 178, 153     | Symbol, accent, dividers     |
| Pure White      | `#FFFFFF` | 255, 255, 255     | Headlines on dark, overlays  |

**Primary combination:** `#1A1A1A` background · `#F8E9D8` text · `#C7B299` accent  
**Inverse combination:** `#F8E9D8` background · `#1A1A1A` text · `#C7B299` accent

---

## 5. Typography

### Primary Typeface — Playfair Display
- Weight used: **300 (Light)**
- Usage: ATTIMI logotype, all display headings, editorial callouts
- Tracking: +0.3em to +0.5em (generous letter-spacing, luxury editorial standard)
- Google Fonts: `Playfair Display:wght@300;400`

### Secondary Typeface — Inter
- Weight used: **300 (Light)**
- Usage: "WEDDING EXPERIENCE" tagline, body copy, labels, UI
- Tracking: +0.3em to +0.6em (wide tracking for elegance)
- Google Fonts: `Inter:wght@300;400`

### Pairing Rule
Never use Inter above 14px for display text alongside the logo. The ATTIMI logotype must always dominate the typographic hierarchy.

---

## 6. Logo Files Reference

```
public/logo/
├── symbol.svg                     Primary mark, transparent, champagne gold
├── monogram.svg                   Geometric A mark, transparent, champagne gold
├── logo-horizontal-dark.svg       Full logo, dark background (#1A1A1A)
├── logo-horizontal-light.svg      Full logo, light background (#F8E9D8)
├── logo-vertical-dark.svg         Stacked logo, dark background
├── logo-vertical-light.svg        Stacked logo, light background
│
├── svg/
│   ├── symbol-gold.svg            Symbol, champagne gold ink, transparent bg
│   ├── symbol-white.svg           Symbol, white ink, transparent bg
│   ├── symbol-dark.svg            Symbol, dark ink, transparent bg
│   ├── monogram-gold.svg          Monogram, champagne gold ink
│   ├── monogram-white.svg         Monogram, white ink
│   ├── logo-horizontal-white.svg  Full logo, all white (for photo overlays)
│   └── logo-horizontal-black.svg  Full logo, all black (for light backgrounds)
│
├── social/
│   ├── square-dark.svg            400x400 — dark square, full logo
│   ├── square-light.svg           400x400 — light square, full logo
│   ├── circle-dark.svg            400x400 — dark circle, monogram only
│   ├── circle-light.svg           400x400 — light circle, monogram only
│   ├── icon-dark.svg              400x400 — dark square, symbol only
│   └── icon-light.svg             400x400 — light square, symbol only
│
├── favicon/
│   ├── favicon-16.svg             16x16 SVG favicon
│   ├── favicon-32.svg             32x32 SVG favicon
│   └── favicon-64.svg             64x64 SVG favicon
│
└── png/
    ├── symbol-512.png             Symbol at 512px
    ├── symbol-1024.png            Symbol at 1024px
    ├── symbol-2048.png            Symbol at 2048px
    ├── logo-vertical-512.png      Vertical logo at 512px
    ├── logo-vertical-1024.png     Vertical logo at 1024px
    ├── logo-vertical-2048.png     Vertical logo at 2048px
    ├── logo-horizontal-512.png    Horizontal logo at 1280px
    ├── logo-horizontal-1024.png   Horizontal logo at 2560px
    ├── monogram-512.png           Monogram at 512px
    ├── monogram-1024.png          Monogram at 1024px
    ├── social-square-dark.png     Social square, dark, 1200px
    ├── social-square-light.png    Social square, light, 1200px
    ├── social-circle-dark.png     Social circle, dark, 1200px
    ├── social-circle-light.png    Social circle, light, 1200px
    ├── app-icon-1024.png          App icon at 1024px
    ├── favicon-16.png             Favicon raster 16px
    ├── favicon-32.png             Favicon raster 32px
    └── favicon-64.png             Favicon raster 64px
```

---

## 7. Clear Space

The minimum clear space around all logo variants equals the height of the letter "A" in the ATTIMI logotype. No competing graphic element, text, or color field may enter this zone.

For the standalone symbol, the clear space equals the width of the outermost arc (approximately 40% of the symbol's total width).

---

## 8. Minimum Sizes

| Format           | Minimum Size         |
|------------------|----------------------|
| Horizontal logo  | 180px wide / 48pt    |
| Vertical logo    | 100px wide / 28pt    |
| Symbol alone     | 24px / 8pt           |
| Monogram alone   | 20px / 6pt           |

Below minimum sizes, use the symbol or monogram only.

---

## 9. Color Variations — When to Use

| Variation     | File(s)              | When to use                          |
|---------------|----------------------|--------------------------------------|
| Gold on dark  | `*-dark.svg`         | Default — websites, presentations    |
| Gold on light | `*-light.svg`        | Print on white/cream stock           |
| White         | `*-white.svg`        | Over photography, video overlays     |
| Black         | `*-black.svg`        | Single-color print, embossing        |

**Never** use the gold symbol on a medium-gray background (insufficient contrast).  
**Always** maintain a 3:1 minimum contrast ratio between the symbol and its background.

---

## 10. Do's and Don'ts

### DO
- Use generous letter-spacing (the ATTIMI logotype always appears tracked wide)
- Pair the symbol with the logotype at the same visual weight
- Use the horizontal logo for horizontal spaces (headers, footers, signage)
- Use the vertical/stacked logo for square spaces (social media, badges)
- Keep the symbol and monogram separated by generous negative space

### DON'T
- Do not rotate the logo
- Do not alter stroke widths of the symbol or monogram
- Do not recolor the symbol with bright or saturated colors
- Do not add drop shadows, gradients, or effects to the mark
- Do not place the logo on backgrounds with busy patterns or poor contrast
- Do not compress the logotype horizontally or vertically
- Do not use the symbol in isolation for official communications without at least the "ATTIMI" wordmark nearby on the same page

---

## 11. Symbol Meaning

The three arcs are graduated in width: the outermost pair (narrow) frames the central arc (wide). This hierarchy mirrors the experience of a wedding day: the quiet moments of preparation and reflection (outer arcs) embrace the central, expansive event (inner arc).

Together they suggest:
- **Sound** — the signature service that defines ATTIMI's musical heritage
- **Light** — photography and cinematography that capture instants forever
- **Connection** — the resonance between two people and everyone who loves them

The mark is intentionally abstract. It carries no literal wedding iconography, ensuring it ages gracefully and communicates luxury across cultures.

---

## 12. Regenerating PNG Exports

```bash
npm install --save-dev @resvg/resvg-js   # one-time setup
node scripts/generate-logos.cjs          # regenerate all PNGs
```

Output is written to `public/logo/png/`.

---

*ATTIMI — Wedding Experience · Roma, Italia*
