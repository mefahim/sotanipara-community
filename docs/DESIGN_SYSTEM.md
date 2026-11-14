# Satanipara Community — Design System Specification v2.0 (Phase 4)

**Document Reference**: `DESIGN_SYSTEM.md`  
**Aesthetic Paradigm**: **Civic Editorial Humanism (নাগরিক আভিজাত্য ও মানবিক ঐতিহ্য)**  
**Version**: 2.0 (Complete Creative Re-architecture)  
**Organization**: Satanipara Somaj Kallyan Sangha (স্থাপিত: ১৯৯৯)  

---

## 1. Color System & Surface Architecture

### A. Primary Institutional & Heritage Palette
```css
:root {
  /* Institutional Forest Green Tokens */
  --color-forest-950: #061A11; /* Deepest masthead anchor */
  --color-forest-900: #0B2E1F; /* Primary brand tone & dark headlines */
  --color-forest-800: #0F3D2A; /* Deep interactive hover */
  --color-forest-700: #14532D; /* Primary interactive & badge border */
  --color-forest-600: #166534; /* Action accents & vibrant green */
  --color-forest-100: #DCEFE3; /* Soft mint highlight tint */
  --color-forest-50:  #EFF7F1; /* Subtle narrative background */

  /* Heritage Antique Gold Tokens */
  --color-gold-700:   #856914; /* Deep gold outline */
  --color-gold-600:   #9A7B1C; /* Editorial gold accent */
  --color-gold-500:   #C9A227; /* Master gold seal & star accents */
  --color-gold-400:   #DFC053; /* Light gold hover */
  --color-gold-100:   #FDF8E7; /* Gold badge tint */

  /* Editorial Paper Canvases */
  --color-canvas:     #FAF7EE; /* Warm archival book paper background */
  --color-sheet:      #FFFEF8; /* Elevated crisp editorial surface */
  --color-surface-pure: #FFFFFF; /* Pure white card surface */
  --color-text-title: #0B2E1F; /* High-contrast forest green heading text */
  --color-text-body:  #1A2520; /* Deep readable neutral body */
  --color-text-muted: #55635B; /* Secondary editorial captions */
  --color-hairline:   rgba(11, 46, 31, 0.12); /* Subtle architectural divider */
  --color-hairline-strong: rgba(11, 46, 31, 0.22);
}
```

### B. Dark Mode Architecture (Organic Forest Night)
```css
[data-theme="dark"] {
  --color-canvas:     #08130D; /* Rich nocturnal forest ground */
  --color-sheet:      #0E1F16; /* Elevated nocturnal sheet */
  --color-surface-pure: #152B1F; /* Deep forest card surface */
  --color-text-title: #FAF7EE; /* Crisp ivory heading text */
  --color-text-body:  #E1ECE5; /* High-contrast readable body */
  --color-text-muted: #95A89E; /* Muted nocturnal captions */
  --color-hairline:   rgba(201, 162, 39, 0.18); /* Antique gold hairline */
  --color-forest-600: #4CAF7D; /* Luminous active green */
  --color-gold-500:   #E9C95C; /* Radiant night gold */
}
```

### C. Strict Gold Contrast Guarantee
> [!IMPORTANT]
> Any background utilizing `--color-gold-500` or `--color-gold-400` MUST strictly set text color to `--color-forest-900` (`#0B2E1F`). White text on gold is forbidden across all components.

---

## 2. Typography Token Scale

```css
:root {
  /* Multi-Script Type Families */
  --font-sans: 'Anek Bangla', 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-serif: 'Tiro Bangla', 'Noto Serif Bengali', Georgia, serif;
  --font-mono: 'Manrope', ui-monospace, SFMono-Regular, monospace;

  /* Scale */
  --text-display: clamp(34px, 5vw, 54px);  /* Hero title: 1.15 line-height */
  --text-h1:      clamp(28px, 3.8vw, 38px); /* Editorial chapter title: 1.25 line-height */
  --text-h2:      clamp(22px, 2.8vw, 28px); /* Section heading: 1.35 line-height */
  --text-h3:      clamp(18px, 2vw, 22px);   /* Component title: 1.45 line-height */
  --text-body-lead: clamp(17px, 1.8vw, 19px); /* Lead paragraph: 1.65 line-height */
  --text-body:    16px;                     /* Standard body: 1.7 line-height */
  --text-body-sm: 14.5px;                   /* Meta / tables: 1.6 line-height */
  --text-caption: 13px;                     /* Captions / badges: 1.5 line-height */
  --text-label:   11.5px;                   /* Uppercase labels: 1.3 line-height */
}
```

---

## 3. Spatial System & Architectural Scale

* **Spacing Steps**: `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `40px`, `48px`, `64px`, `80px`, `100px`, `120px`.
* **Container Max-Width**: `1220px` with responsive gutters (`24px` desktop, `16px` mobile).
* **Radius Scale (Architectural Precision)**:
  - `--radius-btn`: `8px`
  - `--radius-input`: `8px`
  - `--radius-card`: `12px` (refined, crisp geometry)
  - `--radius-panel`: `16px`
  - `--radius-pill`: `999px`

---

## 4. Component Visual Vocabulary

### A. Primary Editorial CTAs
* **Lead Action (Heritage Gold)**:
  - Background: `--color-gold-500`
  - Text: `--color-forest-900` (Bold 700)
  - Border: `1px solid --color-gold-600`
  - Touch target: $\ge 46\text{px}$
* **Secondary Action (Forest Wire)**:
  - Background: `transparent`
  - Text: `--color-text-title`
  - Border: `1.5px solid currentColor`

### B. Asymmetric Grids & Composition
* Rather than repeating 3 equal cards, section layouts adopt a **$2:1$ or $1:2$ dynamic rhythm**:
  - A prominent focal card (featuring photographic documentary image + pull quote) paired with a structured, high-density listing.
* Hairlines dividers replace heavy container outlines where density is high.
