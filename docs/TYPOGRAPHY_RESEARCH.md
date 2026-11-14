# Bengali Typography Research & Selection Report (Phase 3)

**Document Reference**: `TYPOGRAPHY_RESEARCH.md`  
**Specimen Testbed**: [TYPOGRAPHY_SPECIMEN.html](file:///workspace/sotanipara-community/TYPOGRAPHY_SPECIMEN.html)  
**Research Focus**: Multi-Script Bengali & Latin Typography, Conjunct Fidelity, Reading Comfort & Institutional Dignity  

---

## 1. The Challenge with Conventional Bengali Digital Fonts

Most contemporary Bengali websites suffer from severe typographic homogeneity:
1. **The Hind Siliguri Trap**: While technically competent, *Hind Siliguri* has a uniform, low-contrast stroke architecture originally engineered for UI menus. When scaled to large display sizes ($32\text{px}–56\text{px}$), it feels blunt and uninspired.
2. **Clipping of Matras & Diacritics**: Bengali characters carry upper vowel marks (*ই-কার, ঈ-কার, রেফ*) and lower signs (*উ-কার, ঋ-কার, হসন্ত*). In tight Latin-modeled line-heights ($1.2–1.4$), these critical phonological marks frequently clip or overlap adjacent lines.
3. **Conjunct Distortions**: Complex consonant clusters (*ক্ষ, জ্ঞ, ব্দ, ন্ধ, ষ্ঠ, ঙ্ক*) in poorly hinted typefaces often render with jagged kerning or awkward optical balance.

---

## 2. In-Depth Comparative Evaluation of 6 Bengali Typefaces

### 1. Anek Bangla (Designed by Ek Type) — **Selected as Primary UI & Modern Display**
* **Classification**: Multi-script variable geometric sans.
* **Weights Tested**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold).
* **Evaluation**:
  - **Character Beauty (9.8/10)**: Contemporary, humanist geometric structure. Letters have open counters, rhythmic loops, and confident terminal cuts.
  - **Conjunct Rendering (9.9/10)**: Flawless rendering of complex clusters like *সমাজকল্যাণ, প্রতিষ্ঠা, স্বচ্ছতা, উদ্বৃত্ত*.
  - **Screen Clarity**: Exceptional crispness across mobile screens and high-DPI displays.
  - **Pairing with Latin**: Natively harmonious with contemporary geometric typefaces like *Manrope*.

### 2. Tiro Bangla (Designed by Tiro Typeworks: John Hudson, Fiona Ross) — **Selected as Literary Editorial Serif**
* **Classification**: Formal calligraphic literary serif.
* **Weights Tested**: Regular, Italic.
* **Evaluation**:
  - **Character Beauty (9.6/10)**: Classical, calligraphic Bengali aesthetic rooted in 19th- and 20th-century literary publications and formal civic charters.
  - **Institutional Dignity (9.8/10)**: Conveys 25 years of established trust, constitutional permanence, and poetic heritage.
  - **Role**: Headings in organization history, constitution excerpts, executive committee mandates, and featured pull-quotes.

### 3. Noto Serif Bengali (Google Fonts)
* **Score: 8.8/10**. Highly capable academic serif, but slightly stiffer in character rhythm compared to the calligraphic warmth of *Tiro Bangla*. Kept as the primary serif fallback.

### 4. Noto Sans Bengali (Google Fonts)
* **Score: 8.5/10**. Neutral, dependable, but lacks the distinctive creative point-of-view of *Anek Bangla*. Kept as the primary sans fallback.

### 5. Baloo Da 2 (Ek Type)
* **Score: 7.2/10**. Playful and rounded. Excellent for children's literature, but completely inappropriate for an institutional community organization with financial audits, emergency blood services, and legal support.

### 6. Hind Siliguri (Baseline)
* **Score: 7.8/10**. Serviceable baseline, but flat and ubiquitous. Relegated to legacy fallback.

---

## 3. The Official Typography Stack

```css
/* Primary Modern UI & Headings */
--font-sans: 'Anek Bangla', 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Editorial Literary Serif & Heritage Charter */
--font-serif: 'Tiro Bangla', 'Noto Serif Bengali', Georgia, serif;

/* Technical & Latin Numerals */
--font-mono: 'Manrope', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
```

---

## 4. Typographic Scale & Line-Height Specifications

| Style Token | Size (Desktop) | Size (Mobile) | Line Height | Letter Spacing | Font Family | Default Weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `--font-display-hero` | 52px | 34px | 1.15 | -0.02em | `--font-sans` | 800 (ExtraBold) |
| `--font-h1-editorial` | 38px | 28px | 1.25 | -0.015em | `--font-serif` / `--font-sans` | 700 / Bold |
| `--font-h2` | 26px | 22px | 1.35 | -0.01em | `--font-sans` | 700 (Bold) |
| `--font-h3` | 20px | 18px | 1.45 | 0 | `--font-sans` | 600 (SemiBold) |
| `--font-body-lead` | 18px | 16.5px | 1.65 | 0 | `--font-sans` / `--font-serif` | 400 / 500 |
| `--font-body` | 16px | 15.5px | 1.7 | 0 | `--font-sans` | 400 (Regular) |
| `--font-caption` | 13px | 12px | 1.5 | +0.02em | `--font-sans` | 500 (Medium) |
| `--font-label-caps` | 11.5px | 11px | 1.3 | +0.06em | `--font-mono` | 700 (Bold) |

* Bengali body line-height is locked at **$1.65–1.7$** to ensure all vowel marks (*ই-কার, উ-কার, রেফ*) render without clipping.
* Public body text never falls below **16px** on desktop viewports.
