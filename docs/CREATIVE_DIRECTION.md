# Satanipara Community — Creative Direction Master Specification (Phase 2)

**Creative Direction**: **Civic Editorial Humanism (নাগরিক আভিজাত্য ও মানবিক ঐতিহ্যের মেলবন্ধন)**  
**Organization**: Satanipara Somaj Kallyan Sangha (স্থাপিত: ১৯৯৯)  
**Brand Identity**: Satanipara Community  
**Tagline**: একটি এলাকা, একটি পরিবার  
**Slogan**: শিক্ষা • ঐক্য • শান্তি • প্রগতি  

---

## 1. Creative Vision & Philosophy

Satanipara Somaj Kallyan Sangha is not a generic startup, nor is it a temporary relief campaign. Founded in 1999, it represents **twenty-five years of collective village memory, civic responsibility, and deep emotional bonds bridging rural families with sons and daughters laboring across the diaspora**.

Our creative vision—**Civic Editorial Humanism**—unites three distinct worlds:
1. **The Dignity of Modern Civic Luxury**: Institutional gravitas, architectural discipline, deep forest green anchors, and muted antique gold seals of honor.
2. **The Refinement of Contemporary Bengali Editorial**: High typographic contrast, literary presence, intentional whitespace, drop-caps, pull-quotes, and asymmetric magazine layouts.
3. **The Warmth of Human-Centered Culture**: Real stories of expatriate families, compassionate volunteer assistance, life-saving blood donations, and unconditional transparency.

---

## 2. Core Visual Signature

### A. Surface Architecture & Palette Balance
Rather than drenching every section in heavy green or white Bootstrap cards, we employ a **tactile, editorial surface hierarchy**:
* **Canvas Tone**: Warm Ivory (`#FAF7EE`), reminiscent of archival book paper and hand-milled stationery.
* **Elevated Sheets**: Pristine Paper (`#FFFEF8` / `#FFFFFF`) with subtle warm-tinted hairline borders (`1px solid rgba(11, 46, 31, 0.12)`).
* **Institutional Anchors**: Deep Forest Green 900 (`#0B2E1F`) used deliberately for high-impact editorial moments, the masthead, and grounding narrative banners.
* **Seal of Heritage**: Antique Gold (`#C9A227`, `#9A7B1C`) treated as an authentic stamp of honor, delicate decorative rules, and focused primary CTAs (with dark green text `#0B2E1F` strictly enforced).

### B. Typographic Rhythm & Pacing
* **Display / Editorial Statements**: *Anek Bangla* (Bold 700 / ExtraBold 800) for monumental civic statements, paired with *Tiro Bangla* / *Noto Serif Bengali* for evocative narrative subtitles and literary quotes.
* **Modern UI & Body**: *Anek Bangla* (Regular 400 / Medium 500) with spacious, comfortable Bengali line-height ($1.7$).
* **Numerals & Bilingual Layer**: *Manrope* for crisp Latin numerals in Request IDs, dates, and financial ledgers, alongside Bengali numerals (`১, ২, ৩`) for native prose.

### C. Rejection of Generic AI & NGO Clichés
* **NO** SaaS-card kit (no identical 3-card rows repeated down the page).
* **NO** centered, generic hero with floating stat bubbles.
* **NO** emojis masquerading as user interface icons.
* **NO** decorative floating gradients without functional meaning.
* **YES** to asymmetric editorial grids: large lead stories accompanied by stacked briefs, full-bleed photographic narrative breaks, and integrated typographic metrics that flow naturally within sentences.

---

## 3. Section-by-Section Homepage Art Direction

```
┌────────────────────────────────────────────────────────────────────────┐
│  1. REFINED ANNOUNCEMENT STRIP (জরুরি হটলাইন ও লাইভ বুলেটিন)            │
├────────────────────────────────────────────────────────────────────────┤
│  2. ARCHITECTURAL MASTHEAD & DUAL BRAND IDENTITY                       │
├────────────────────────────────────────────────────────────────────────┤
│  3. IMMERSIVE EDITORIAL HERO: "একটি এলাকা, একটি পরিবার"                │
│     [Large Photographic Canvas + Monumental Bengali Typography + CTAs] │
├────────────────────────────────────────────────────────────────────────┤
│  4. THE 25-YEAR ARCHIVE & INTEGRATED COMMUNITY METRICS                 │
│     [Narrative typography with embedded live figures: ৩৫০+ পরিবার]    │
├────────────────────────────────────────────────────────────────────────┤
│  5. ASYMMETRICAL SERVICE DISCOVERY (সেবার দিগন্ত)                       │
│     [Lead Feature: প্রবাসী সহায়তা ডেস্ক | Compact Grid: রক্তদান, হিসাব]│
├────────────────────────────────────────────────────────────────────────┤
│  6. HUMAN IMPACT STORIES & FIELD PHOTO ESSAYS                           │
│     [Full-bleed documentary photography + handwritten volunteer notes] │
├────────────────────────────────────────────────────────────────────────┤
│  7. ANNUAL ACTIVITIES & COMMUNITY ADVANCEMENT                          │
│     [Timeline-infused editorial ledger with budget transparency]       │
├────────────────────────────────────────────────────────────────────────┤
│  8. OFFICIAL DISPATCHES, NOTICES & CALENDAR (ঘোষণা ও নোটিশ)            │
├────────────────────────────────────────────────────────────────────────┤
│  9. CURATED HISTORICAL & CULTURAL GALLERY (স্মৃতি ও বর্তমান)            │
├────────────────────────────────────────────────────────────────────────┤
│ 10. FINANCIAL INTEGRITY & RADICAL TRANSPARENCY                         │
├────────────────────────────────────────────────────────────────────────┤
│ 11. CIVIC FOOTER & CONSTITUTIONAL ARCHIVE                              │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Interaction & Motion Vocabulary

* **Pacing**: Deliberate, calm, and dignified. Zero frantic bounce or spring effects.
* **Hover Transitions**: Subtle elevation shifts (`translateY(-2px)`), delicate border luminance changes, and underline expansions.
* **Sheet & Modal Motion**: Smooth cubic-bezier slide transitions (`cubic-bezier(0.16, 1, 0.3, 1)`).
* **Respect for Accessibility**: Complete fallback to static zero-motion states when `prefers-reduced-motion: reduce` is detected.
