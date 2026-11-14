# Satanipara Community — Design System Specification

Established: **1999**  
Tagline: **একটি এলাকা, একটি পরিবার** (One Area, One Family)  
Slogan: **শিক্ষা • ঐক্য • শান্তি • প্রগতি** (Education • Unity • Peace • Progress)  

---

## 1. Brand Tokens & Color Palette

Strict implementation of Section 2 of the Design Brief.

### Primary Palette
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `green-900` | `#0B2E1F` | Darkest surface, dark header, footer |
| `green-700` | `#14532D` | Primary brand color, primary button, active link |
| `green-600` | `#166534` | Hover state, icons, secondary accent |
| `green-100` | `#DCEFE3` | Selected chip, light badge, success bg |
| `green-50` | `#EFF7F1` | Alternate section background |
| `gold-500` | `#C9A227` | Accent, CTA button, slogan, divider, badge |
| `gold-700` | `#9A7B1C` | Gold text on Ivory background (for contrast) |
| `gold-100` | `#FBF4DB` | Ticker background, subtle gold tint |
| `ivory` | `#FAF7EE` | Light mode main background |
| `surface` | `#FFFEF8` | Card & panel background in Light mode |

### Dark Theme Tokens
| Token | Dark Hex | Light Hex Equivalent | Usage |
| :--- | :--- | :--- | :--- |
| `bg` | `#0E1A13` | `#FAF7EE` | Main Dark Background |
| `surface` | `#16241B` | `#FFFEF8` | Dark Cards & Panels |
| `surface-raised` | `#1D3023` | `#FFFFFF` | Elevated Modals & Menus |
| `text-strong` | `#F2EFE6` | `#1A1F1C` | Headings and Main Text |
| `text-muted` | `#A8B5AB` | `#5A665E` | Secondary Text & Metadata |
| `border` | `#2C4234` | `#D9DED9` | Card and Input Borders |
| `primary` | `#4CAF7D` | `#14532D` | High-contrast Vibrant Green |
| `gold` | `#E9C95C` | `#C9A227` | Bright Gold Accent |

> [!IMPORTANT]
> **Strict Rule:** Gold backgrounds (`#C9A227` or `#E9C95C`) MUST always use dark green text (`#0B2E1F`), NEVER white text, to guarantee WCAG 2.1 AA contrast.

---

## 2. Typography

- **Primary Font**: `Hind Siliguri` (Bengali & English)
- **Fallbacks**: `Noto Sans Bengali`, system sans-serif
- **Weights**: Regular 400, Medium 500, SemiBold 600, Bold 700 (No Light or Thin)

### Scale & Hierarchy
- **Display (Hero Only)**: 40px / 50px line-height (Mobile: 30px / 40px), Bold 700
- **H1 (Page Titles)**: 30px / 40px line-height, Bold 700
- **H2 (Section Titles)**: 24px / 34px line-height, Bold 700
- **H3 (Cards & Subheadings)**: 19px / 28px line-height, SemiBold 600
- **Body**: 16px / 27px line-height, Regular 400 (Never below 16px on public website)
- **Body Small**: 14.5px / 24px line-height, Regular 400
- **Caption / Meta**: 12.5px / 19px line-height, Medium 500
- **Button**: 15.5px / 20px line-height, SemiBold 600

---

## 3. Spacing & Radius System

### Spacing Scale (Strict 4pt system)
`4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `40px`, `48px`, `64px`, `80px`

### Radius
- Inputs & Small Buttons: `10px`
- Cards: `16px`
- Large Panels & Modals: `20px`
- Badges & Pills: `999px`

### Icons
- Lucide-style outline icon family with consistent **1.8px** stroke.

---

## 4. Non-Negotiable UX Rules

1. **Only Two Admin Roles**:
   - `Super Admin`: Full system access, users, settings, accounts, reports.
   - `Expatriate Helper`: Can see ONLY the Expatriate Requests module and their own profile. All other modules are completely hidden.
2. **NO OTP Anywhere**:
   - Authentication is Mobile + Password only.
   - Forgotten passwords are reset manually by Super Admin.
3. **Privacy by Design**:
   - Personal phone numbers appear ONLY when consent is true.
   - When consent is false, the element is completely absent (no fake masked numbers).
4. **Bilingual Support**:
   - Default Bengali, complete English toggle with the same layout.
   - Bengali numerals for Bengali interface, except Request IDs (`EXP-2026-0001`), phone numbers, and years.
5. **No Fabricated Facts**:
   - Placeholders: `"প্রকৃত তথ্য পরে বসবে"` and `"প্রকৃত ছবি পরে বসবে"`.
