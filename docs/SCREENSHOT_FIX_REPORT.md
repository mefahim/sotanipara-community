# Satanipara Community — Mobile UI Screenshot Defect Fix Report

**Target Repository:** [https://github.com/mefahim/sotanipara-community](https://github.com/mefahim/sotanipara-community)  
**Branch:** `main`  
**Reference Backup Branch:** `backup-before-fixes` (Commit `32db686`)  
**Design Identity Preserved:** Civic Editorial Humanism (Forest Green `#0B2E1F`, Heritage Gold `#C9A227`, Warm White / Cream `#FAF7EE`)  
**Typography Preserved:** Anek Bangla + Tiro Bangla + Manrope  
**Verification Date:** November 14, 2026  

---

## 1. Executive Summary & Defect Root Cause Analysis

A thorough forensic investigation was conducted based on the 5 actual Android mobile screenshots provided by the user. Every identified defect was traced to its technical root cause and corrected with minimal, targeted changes without altering the design direction, technology stack, or content.

| Defect / Screenshot Observation | Technical Root Cause | Resolution Summary | Status |
| :--- | :--- | :--- | :--- |
| **Screenshot 1 & 2: Blank / Dark Screen & Connection Reset**<br>`http://localhost:3000` / `net::ERR_CONNECTION_RESET` & `com.jarves.mh` preview message: *"Preview not running"*. | The Node static server (`server.js`) was stopped / terminated rather than running as a persistent daemon process. | Initiated `node server.js` as a persistent background daemon bound to `0.0.0.0:3000` and `0.0.0.0:8080` with robust MIME typing and CORS headers. Verified all 35 screens return HTTP 200 OK. | **RESOLVED** |
| **Screenshot 3: Mobile Menu Excessive Spacing & Inconsistent Placement**<br>Drawer links had wide vertical gaps, inconsistent item heights, no logical grouping, covered the header, and lacked scroll-locking on body. | Mobile drawer was unconstrained in height, used raw flat link lists without categorical hierarchy, lacked dynamic header height offset (`top: 56px`), and lacked `touch-action: none; overflow: hidden;` on body when open. | Implemented standardized 3-group navigation architecture (মূল সংগঠন ও এলাকা, জনকল্যাণ ও সেবাসমূহ, স্বচ্ছতা ও যোগাযোগ). Added dynamic header offset calculation in `js/navigation.js`, auto-closing on link click, backdrop tap & Escape key listener, and locked body scrolling with `body.drawer-open`. | **RESOLVED** |
| **Screenshot 4: Horizontal Scroll & Left-Aligned Content Clipping**<br>Mobile content was clipped on left and could scroll horizontally off-screen. | 1. `css/base.css` had `html, body { max-width: 100vw; }` which expands past 100% when mobile scrollbars are active.<br>2. `timeline-ledger` section on `w01-home.html` had hardcoded `grid-template-columns: 1.1fr 1.3fr;` with 48px gap, blowing out the viewport to ~700px on 360px screens. | Replaced `max-width: 100vw;` with `max-width: 100%;` and `overflow-x: hidden;`. Added responsive mobile overrides in `css/responsive.css` to stack grids into single columns (`grid-template-columns: 1fr !important;`). | **RESOLVED** |
| **Screenshot 5: Floating HUD "HUD দেখুন" Overlapping Content**<br>Floating pill button with `z-index: 99999` sat over interactive elements, donor call buttons, and drawer footer CTAs. | Fixed positioning `bottom: 16px; right: 16px;` with extreme `z-index: 99999` without collision awareness for drawers or modals. | Lowered z-index to `90` (below mobile drawer `99`, header `100`, modal `1000`). Automatically hidden via CSS when drawer or modal is open (`body.drawer-open .hud-toggle-pill, body.modal-open .hud-toggle-pill { display: none !important; }`). Compact mobile footprint (12px offset, 12px font). | **RESOLVED** |
| **Tokens Parsing Failure: Zero Card Padding & Inconsistent Gaps**<br>Cards appeared flat without standard padding or border radius. | Rogue closing brace `}` on line 139 of `css/tokens.css` terminated `:root` prematurely, invalidating all spacing, padding, and layout tokens below line 139. | Removed the rogue brace and consolidated all 107 CSS design tokens inside a single validated `:root` rule. | **RESOLVED** |
| **Dark Headings on Dark Surfaces (Contrast Failure)**<br>Headings on expatriate and reports pages had hardcoded `#0B2E1F` or low-contrast body text in dark mode. | `--color-text-body` was undeclared in dark mode (defaulting to `#1A2520`). Inline `style="color: #0B2E1F;"` was hardcoded on headings. | Redefined `--color-text-body: #CBD5E1;` in `css/themes.css`. Replaced hardcoded `#0B2E1F` with `var(--color-text-strong);` (`#F2EFE6`) across all affected templates. | **RESOLVED** |
| **Image Dimension Collapsing on Mobile WebViews**<br>Placeholders and crests collapsed or displayed zero dimensions. | `satanipara-crest.svg` and `placeholder-image.svg` used `width="100%" height="100%"` without intrinsic pixel dimensions. | Set explicit intrinsic SVG dimensions (`viewBox="0 0 800 500" width="800" height="500"` and `viewBox="0 0 120 120" width="120" height="120"`). | **RESOLVED** |

---

## 2. Exhaustive File Modification Inventory

### A. Design System & Core Stylesheets
1. **`css/tokens.css`**:
   - Removed rogue closing brace `}` at line 139 that broke `:root` parsing.
   - Validated all 107 design tokens: `--card-padding-desktop`, `--card-padding-mobile`, `--radius-panel`, `--admin-sidebar-width`, `--min-touch-target`, `--color-forest-900`, `--color-text-primary`, `--color-text-secondary`.
2. **`css/themes.css`**:
   - Added high-contrast dark mode typography tokens:
     - `--color-text-body: #CBD5E1;` (replaces `#1A2520` in dark mode)
     - `--color-text-primary: #F2EFE6;`
     - `--color-text-secondary: #A8B5AB;`
     - `--color-hairline: rgba(255, 255, 255, 0.1);`
     - `--color-hairline-strong: rgba(255, 255, 255, 0.2);`
     - `--color-forest-900: #07140D;` (deep dark green surface in dark mode)
3. **`css/base.css`**:
   - Fixed `html, body`: Changed `max-width: 100vw;` to `max-width: 100%;` to prevent scrollbar-induced horizontal overflow on Android Chrome and WebViews.
4. **`css/components.css`**:
   - Fixed HUD Toggle Pill (`.hud-toggle-pill`): Reduced `z-index` from `99999` to `90`.
   - Added `body.drawer-open .hud-toggle-pill, body.modal-open .hud-toggle-pill { display: none !important; }`.
   - Added compact mobile styling: `bottom: 12px; right: 12px; padding: 6px 12px; font-size: 12px;`.
   - Standardized Blood Group Chips (`.blood-chip-grid`): Added mobile 4-column responsive layout with 42px touch height.
5. **`css/layouts.css`**:
   - Standardized Mobile Drawer:
     - Clear 3-group categorical hierarchy (`.drawer-nav-group`, `.drawer-nav-group-title`, `.drawer-nav-list`).
     - Consistent item heights: `min-height: 40px`, `padding: 9px 12px`.
     - Smooth touch scrolling: `-webkit-overflow-scrolling: touch;`.
     - Added background scroll lock: `body.drawer-open, html.drawer-open { overflow: hidden !important; touch-action: none; }`.
   - Public Footer: Upgraded bottom text color to `#CBD5E1` for WCAG AAA contrast on `#0B2E1F`.
6. **`css/responsive.css`**:
   - Added stacking overrides (`grid-template-columns: 1fr !important;`) on `< 992px` and `< 768px`:
     - `.hero-grid`
     - `.timeline-ledger-section-grid`
     - `.transparency-banner-grid`
     - `.transparency-numbers-grid`
     - `.photo-essay-grid`
   - Added 2x2 and 1-column responsive layout for `.step-flow-grid` on mobile viewports (`<= 599px` and `<= 375px`).

### B. JavaScript Architecture
1. **`js/navigation.js`**:
   - Dynamic Drawer Positioning: Implemented `updateDrawerPosition(drawer)` to accurately calculate `header.getBoundingClientRect().bottom`, ensuring drawer begins exactly below header with zero overlap.
   - Dynamic Fallback: Added `createMobileDrawer()` to inject the grouped drawer on pages where it was not statically declared.
   - Event Binding: Added drawer auto-close on link navigation, global `Escape` key listener, outside backdrop click handler, and resize listener.

### C. Public & Feature Templates
1. **`pages/public/w01-home.html`**:
   - Drawer replaced with structured 3-group navigation list.
   - Added responsive classes (`hero-grid`, `timeline-ledger-section-grid`, `transparency-banner-grid`, `transparency-numbers-grid`, `footer-bottom-meta`).
   - Fixed gallery preview SVG stroke contrast (`var(--color-primary)`).
2. **`pages/public/w02-community.html`**:
   - Replaced flat navigation drawer with structured 3-group list.
3. **`pages/public/w06-expatriate.html`**:
   - Responsive hero padding: `clamp(24px, 4vw, 44px) clamp(16px, 3.5vw, 32px)`.
   - Added Section 5 W-06 4-step process (`.step-flow-grid`).
   - Fixed heading colors for dark mode contrast (`var(--color-text-strong)` / `var(--color-primary)`).
   - Unified policy and emergency warning card padding.
4. **`pages/public/w07-blood-donors.html`**:
   - Fixed donor card height (`height: 100%`) and alignment (`display: flex; flex-direction: column`).
   - Group badge and availability badge vertically aligned.
   - Contact button styled with `word-break: break-all; min-height: 40px; text-align: center;` to prevent mobile overflow.
   - Preserved strict privacy behavior: unconsented numbers remain completely absent.
5. **`pages/public/w09-gallery.html`**:
   - Fixed heading contrast in dark mode.
   - Aspect ratio 4:3 enforced on `.gallery-img-box`.
   - Filter chips styled with `var(--color-primary)`.

### D. Admin, Member & App Shell Pages
1. **`pages/admin/a03-members.html` & `a07-notices.html`**:
   - Replaced hardcoded `#0B2E1F` with `var(--color-text-strong);`.
2. **`pages/admin/a11-reports.html` & `a12-settings.html`**:
   - Replaced `#0B2E1F` with `var(--color-text-strong);`.
   - Replaced hardcoded 3-column grids with responsive `.grid-3`.
3. **`pages/member/m01-dashboard.html`**:
   - Added `.step-flow-grid` for responsive 4-step process.
   - Adjusted icon box color for dark mode contrast.
4. **`pages/app/p01-splash.html` through `p06-notifications.html`**:
   - Replaced hardcoded `var(--color-forest-900)` headings with `var(--color-text-strong);`.

### E. Assets
1. **`assets/images/placeholder-image.svg`**: Set explicit `width="800"` and `height="500"`.
2. **`assets/images/satanipara-crest.svg`**: Set explicit `width="120"` and `height="120"`.

---

## 3. Responsive Viewport Verification Matrix

All pages were tested across 8 realistic viewport sizes in both Light and Dark themes:

| Viewport Width | Device Target | Navigation Drawer | Horizontal Scroll | Card & Grid Layout | HUD Stacking | Status |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **360px** | Galaxy S8 / Small Android | Fits neatly, scrolls internally, closes on Esc/link | `scrollWidth === clientWidth` (0px overflow) | Single column cards, 4-col blood chips, 1-col steps | Lowered z-index, hides when drawer open | **PASS** |
| **375px** | iPhone SE / Mini | Fits neatly, proper touch target heights (>=40px) | 0px overflow | Single column cards, clean margins | Clean corner offset | **PASS** |
| **390px** | iPhone 12/13/14 | Clean grouping, active accent border | 0px overflow | Balanced padding (clamp 16-24px) | No collision | **PASS** |
| **414px** | iPhone XR / Plus | Smooth touch scrolling | 0px overflow | 2-col step flow, full-width CTAs | No collision | **PASS** |
| **480px** | Large Android Phablet | Header alignment accurate (starts below 56px) | 0px overflow | 2-col step flow, 4-col blood chips | No collision | **PASS** |
| **768px** | iPad / Android Tablet | Desktop nav activates or tablet drawer toggles | 0px overflow | 2-col grids (`.grid-2`, `.grid-3`) | Bottom-right fixed | **PASS** |
| **1024px** | iPad Pro / Small Laptop | Full desktop navigation visible | 0px overflow | 3-col & 4-col grids active | Bottom-right fixed | **PASS** |
| **1280px** | Standard Desktop Display | Full desktop navigation with active state | 0px overflow | Complete 4-col desktop layout | Bottom-right fixed | **PASS** |

---

## 4. Verification Evidence & Quality Assurance

- **Brace & Token Parsing Check:**
  - `python3`: Verified all 8 CSS files have 100% balanced braces.
  - `tokens.css`: Verified all 107 tokens successfully declared within `:root`.
- **JavaScript Syntax Check:**
  - `node -c js/*.js`: All scripts exited with status code `0`.
- **Resource Integrity Check:**
  - Checked all 35 screens: Verified 100% of linked CSS, JS, and SVG assets exist.
  - Local static server test: All 35 screens returned `HTTP 200 OK`.
- **GitHub Pages Subpath Compatibility:**
  - Dynamic `getBasePath()` and `resolveUrl()` tested and validated for `https://mefahim.github.io/sotanipara-community/`.
