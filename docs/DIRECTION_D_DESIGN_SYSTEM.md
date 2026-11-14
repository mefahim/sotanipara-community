# Direction D: Design System Specification
## Premium Digital Product × International Editorial Design × Bengali Identity

**Project:** Satanipara Somaj Kallyan Sangha  
**Branch:** `direction-d-premium-rebuild`  
**Version:** 3.0.0 (Direction D Rebuild)  
**Publication Date:** November 14, 2026  

---

## 1. Brand Philosophy & Aesthetic Tenets

Direction D is built upon three pillars:
1. **Premium Digital Product:** The crispness, information hierarchy, responsive precision, and friction-free micro-interactions of top-tier modern software.
2. **International Editorial Design:** The asymmetrical balance, typographic scale contrast, rich figure captions, documentary photography, and generous whitespace of world-class journals.
3. **Bengali Cultural Authenticity:** Natural Bengali font metrics, dignified civic phrasing, community-first warmth, and institutional integrity established in 1999.

---

## 2. Color System & Surfaces

### A. Core Brand Palette
```css
:root {
  /* Brand Tones */
  --color-forest-950:     #051C12; /* Deepest institutional tone */
  --color-forest-900:     #0B2E1F; /* Core Forest Green Brand */
  --color-forest-800:     #0F3D2A;
  --color-forest-700:     #14532D; /* Accent Green */
  --color-forest-600:     #166534;
  --color-forest-100:     #DCEFE3;
  --color-forest-50:      #F0FDF4;

  /* Restrained Heritage Gold */
  --color-gold-700:       #9A7B1C; /* Dark gold for text on light backgrounds */
  --color-gold-600:       #B38E22;
  --color-gold-500:       #C9A227; /* Core Heritage Gold */
  --color-gold-400:       #D8B43D;
  --color-gold-100:       #FEF9C3; /* Gold subtle highlight */
  --color-gold-50:        #FFFDF5;

  /* Surfaces (Light Theme - Warm Ivory Canvas) */
  --color-bg:             #FAF7EE; /* Warm Ivory Canvas */
  --color-surface:        #FFFFFF; /* Elevated Card */
  --color-surface-raised: #F4EFE6; /* Editorial Section Surface */
  --color-surface-alt:    #F0EBE1; /* Alternate Panel */
  --color-surface-dark:   #0B2E1F; /* Institutional Contrast Surface */

  /* Semantic State Tones */
  --color-success:        #15803D; /* Verified Green */
  --color-danger:         #B42318; /* Emergency Crimson */
  --color-warning:        #B54708; /* Pending Amber */
  --color-info:           #175CD3; /* Tracking Blue */

  /* Text & Typography */
  --color-text-strong:    #0B2E1F; /* Deep Forest Black for Headlines */
  --color-text-body:      #2A3B32; /* Rich Charcoal-Green Body Text */
  --color-text-muted:     #52665B; /* Editorial Metadata / Captions */
  --color-text-inverse:   #FAF7EE; /* Text on Dark Surfaces */

  /* Hairlines & Borders */
  --color-border:         #E3DDD2; /* Neutral Card Border */
  --color-hairline:       rgba(11, 46, 31, 0.08); /* Hair-thin divider */
  --color-hairline-strong:rgba(11, 46, 31, 0.16);
}
```

### B. Dark Theme Specification (`[data-theme="dark"]`)
```css
[data-theme="dark"] {
  --color-bg:             #0A140F; /* Deep Charcoal-Green Canvas */
  --color-surface:        #12221A; /* Elevated Dark Surface */
  --color-surface-raised: #182C22; /* Editorial Contrast Surface */
  --color-surface-alt:    #1F372B;
  --color-surface-dark:   #05120B;

  --color-text-strong:    #F5EFEB; /* Crisp Ivory Headline */
  --color-text-body:      #CBD5E1; /* Readable High-Contrast Body */
  --color-text-muted:     #94A3B8; /* Muted Slate Captions */
  --color-text-inverse:   #0B2E1F;

  --color-border:         #233B2E;
  --color-hairline:       rgba(255, 255, 255, 0.08);
  --color-hairline-strong:rgba(255, 255, 255, 0.18);

  --color-primary:        #4CAF7D; /* Vibrant Emerald Accent */
  --color-gold-500:       #E9C95C; /* Brightened Gold in Dark Mode */
  --color-gold-100:       #2A2414;
}
```

---

## 3. Typography Architecture

- **Editorial Display & Masthead:** `Tiro Bangla`, `Noto Serif Bengali`, serif.
- **Modern Humanist Body & Navigation:** `Anek Bangla`, `Noto Sans Bengali`, sans-serif.
- **Tabular Figures & English Microdata:** `Manrope`, system-ui, sans-serif.

| Level | Desktop Size / Line-Height | Mobile Size / Line-Height | Weight | Font Family |
| :--- | :--- | :--- | :--- | :--- |
| **Display Hero** | `clamp(32px, 5vw, 48px) / 1.25` | `28px / 1.3` | 700 Bold | `Tiro Bangla` |
| **Heading 1 (H1)** | `32px / 1.35` | `24px / 1.35` | 700 Bold | `Tiro Bangla` / `Anek Bangla` |
| **Heading 2 (H2)** | `24px / 1.4` | `20px / 1.4` | 600 SemiBold | `Anek Bangla` |
| **Heading 3 (H3)** | `18px / 1.45` | `16px / 1.45` | 600 SemiBold | `Anek Bangla` |
| **Heading 4 (H4)** | `15px / 1.5` | `14px / 1.5` | 600 SemiBold | `Anek Bangla` |
| **Body (p)** | `16px / 1.65` | `15px / 1.65` | 400 Regular | `Anek Bangla` |
| **Body Small** | `14px / 1.6` | `13.5px / 1.6` | 400 Regular | `Anek Bangla` |
| **Caption / Meta** | `12.5px / 1.5` | `12px / 1.5` | 500 Medium | `Anek Bangla` / `Manrope` |
| **Numbers / Data** | `18px–28px / 1.2` | `18px–24px / 1.2` | 700 Bold | `Manrope` + Bengali Font |

---

## 4. Spacing Scale & Layout Containers

- **Base Spacing:** 4px (`--space-4`), 8px (`--space-8`), 12px (`--space-12`), 16px (`--space-16`), 20px (`--space-20`), 24px (`--space-24`), 32px (`--space-32`), 40px (`--space-40`), 48px (`--space-48`), 64px (`--space-64`), 80px (`--space-80`).
- **Layout Containers:**
  - Standard Container: `max-width: 1200px; padding: 0 var(--space-20);`
  - Editorial Reading Measure: `max-width: 760px; margin: 0 auto;`
  - Compact Modal: `max-width: 520px;`

---

## 5. Component Standards

1. **Editorial Masthead & Header:** Slim announcement strip + 60px sticky masthead with crest, title, desktop links, language switch, theme toggle, and mobile menu trigger.
2. **Asymmetric Editorial Grids:** Featured documentary hero block with contextual metadata column.
3. **Blood Donor Card:** Equalized flex height, prominent blood badge, verified readiness indicator, and strict consent privacy protection.
4. **Interactive HUD (Screen Switcher):** Non-intrusive floating pill at `bottom: 16px; right: 16px; z-index: 90;` that automatically hides when drawers or modals are active.
5. **Drawers & Modals:** Dynamic header alignment (`top: 56px`), backdrop dismiss, `Escape` key capture, and background scroll locking (`body.drawer-open`).
