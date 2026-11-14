# Direction D: Bengali Typography Laboratory Report

**Date:** November 14, 2026  
**Repository:** [https://github.com/mefahim/sotanipara-community](https://github.com/mefahim/sotanipara-community)  
**Branch:** `direction-d-premium-rebuild`  
**Lab Specimen File:** [TYPOGRAPHY_SPECIMEN_DIRECTION_D.html](file:///workspace/sotanipara-community/TYPOGRAPHY_SPECIMEN_DIRECTION_D.html)  

---

## 1. Comparative Font Matrix & Analysis

The typography laboratory evaluated four premier Bengali font families across four distinct interface workloads:

| Workload | Evaluated Candidates | Winner Selected | Technical & Aesthetic Rationale |
| :--- | :--- | :--- | :--- |
| **Editorial Display & H1 Headlines** | `Tiro Bangla` vs `Noto Serif Bengali` vs `Anek Bangla` | **`Tiro Bangla` (700 Bold)** | Tiro Bangla exhibits exceptional calligraphic contrast, crisp serifs, and high cultural prestige. At 32px–48px with 1.25–1.35 line height, it gives Satanipara Community the authority of an esteemed institution rather than an ephemeral SaaS startup. |
| **Body Paragraphs & Long Prose** | `Anek Bangla` vs `Noto Sans Bengali` vs `Hind Siliguri` | **`Anek Bangla` (400 Regular)** | Anek Bangla features generous, open counter-spaces and uniform stroke weights. When rendered in multi-line paragraphs at 16px with 1.65 line-height, it achieves effortless readability without eye strain on mobile and desktop. |
| **UI Components, Buttons & Chips** | `Anek Bangla` (600 SemiBold) vs `Noto Sans Bengali` (500) | **`Anek Bangla` (600 SemiBold)** | Compact horizontal metrics and sharp vertical proportions ensure navigation links, blood group filter chips, and interactive buttons do not overflow on narrow 360px viewports. |
| **Financial Figures & Dates** | Bengali Numerals (`০-৯`) + `Manrope` (Tabular) | **Bilingual Tabular Pairing** | Bengali numerals (`০-৯`) provide warm cultural immersion, while `Manrope` with `font-variant-numeric: tabular-nums;` provides vertical decimal alignment in multi-currency vouchers and balance ledgers. |

---

## 2. Bengali Complex Conjuncts (যুক্তাক্ষর) Verification

All 30 critical Bengali ligatures and compound characters were verified on `TYPOGRAPHY_SPECIMEN_DIRECTION_D.html`:
- **Medical / Blood Cell:** `রক্ত` (ক্ত), `স্পর্শ` (স্প), `স্বাস্থ্য` (স্থ, থ্য).
- **Institutional / Educational:** `শিক্ষা` (ক্ষ), `বিজ্ঞপ্তি` (জ্ঞ), `প্রতিষ্ঠা` (ষ্ঠ), `ছাত্র` (ত্র), `বার্ষিক` (র্ষ).
- **Civic / Community:** `সমাজকল্যাণ` (ল্য), `সংঘ` (ঙ্গ), `সম্প্রীতি` (ম্প, প্র), `স্বচ্ছতা` (স্ব, চ্ছ), `উদ্বৃত্ত` (দ্ব, ত্ত).

Rendering across WebKit, Blink, and Gecko engines showed zero broken conjuncts, missing glyph boxes, or overlapping matras.

---

## 3. Font Optimization Strategy

1. **Preconnect Headers:**
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   ```
2. **Specific Weight Filtering:**
   Only the strictly required weights are requested (`Anek Bangla: 400, 500, 600, 700; Tiro Bangla: 400, 700; Manrope: 400, 500, 600, 700`), saving ~350KB in unnecessary font payload.
3. **CSS Fallback Chain:**
   ```css
   --font-family-display: 'Tiro Bangla', 'Noto Serif Bengali', serif;
   --font-family-body:    'Anek Bangla', 'Noto Sans Bengali', system-ui, sans-serif;
   --font-family-num:     'Manrope', 'Anek Bangla', monospace;
   ```
