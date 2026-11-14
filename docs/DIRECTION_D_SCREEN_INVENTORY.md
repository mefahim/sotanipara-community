# Direction D: Screen Inventory & Preservation Matrix

**Total Screens:** 35 Screens  
**Audit Status:** 100% Functionality & URL Routing Preserved  
**Aesthetic Standard:** Direction D (Premium Digital Product × International Editorial × Bengali Identity)  

---

| Screen ID | File Path | Primary Purpose | Key Components | Preserved Functionality | QA Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **W-01** | `pages/public/w01-home.html` | Homepage & Masthead | Editorial Hero, Live Ticker, Stats, Documentary Photo Essay, Financial Strip, Footer | Full navigation, lightbox, notice ticker, dynamic stats | **Verified** |
| **W-02** | `pages/public/w02-community.html` | Community Profile | Demographics, History, Map overview, Institution directory | Accordion institutions, category filters | **Verified** |
| **W-03** | `pages/public/w03-organization.html` | Organization & Constitution | Mission, Vision, Executive Committee, Constitutional bylaws | Committee card grid, timeline milestones | **Verified** |
| **W-04** | `pages/public/w04-activities.html` | Annual Activities | Chronological activity stream, category filters, upcoming schedule | Year/Category filters, activity card modals | **Verified** |
| **W-05** | `pages/public/w05-activity-detail.html` | Activity Detail View | Deep dive into specific events with photo galleries and transparent budgets | Voucher breakdown, image lightbox | **Verified** |
| **W-06** | `pages/public/w06-expatriate.html` | Expatriate Support (Priority) | Service catalog, 4-step process, policy disclaimers, emergency notice | Application CTA, dynamic FAQ accordion | **Verified** |
| **W-07** | `pages/public/w07-blood-donors.html` | Blood Donor Search (Priority) | Group chip selector, area filter, donor card grid, emergency modal | Client-side 30s filtering, telephone privacy consent | **Verified** |
| **W-08** | `pages/public/w08-notices.html` | Notices & Circulars | Categorized notice stream (Emergency, General, Activity), search | Notice filter, detail modal, printable notice view | **Verified** |
| **W-09** | `pages/public/w09-gallery.html` | Photo & Video Archive | Editorial documentary photo grid, year/category chips | Aspect-ratio safe image rendering, lightbox modal | **Verified** |
| **W-10** | `pages/public/w10-accounts.html` | Financial Transparency | Income/Expense balance cards, sector donut breakdown, verified donor ledger | Live balance calculations, voucher filter | **Verified** |
| **W-11** | `pages/public/w11-contact.html` | Contact & Emergency Helpline | Direct phone links, office map location, feedback message form | Form validation, emergency one-tap dialer | **Verified** |
| **W-12** | `pages/public/w12-login.html` | Member Login & Register | Tabbed login / registration form, password recovery modal | Tab switcher, form validation, simulated session | **Verified** |
| **M-01** | `pages/member/m01-dashboard.html` | Member Dashboard | Personalized greeting, active request progress stepper, quick actions | Live stepper state, quick action routing | **Verified** |
| **M-02** | `pages/member/m02-request-wizard.html` | Service Request Wizard | 3-step progressive form for expatriate family assistance | Step navigation, input validation, auto-ID generation | **Verified** |
| **M-03** | `pages/member/m03-my-requests.html` | My Requests & Tracking | Filterable request list with status badges, timeline detail view | Filter chips, timeline drawer/modal | **Verified** |
| **M-04** | `pages/member/m04-profile.html` | Member Profile & Privacy | Personal data, blood donation readiness toggle, phone privacy toggle | State persistence in mock DB, toggle switches | **Verified** |
| **M-05** | `pages/member/m05-family.html` | Family Member Registry | Family roster, relationship tags, blood group records, add member form | Dynamic member injection, delete/edit confirmation | **Verified** |
| **A-01** | `pages/admin/a01-overview.html` | Administrative Overview | Core KPI cards, pending request queue, recent financial transactions | Quick approval actions, status summary | **Verified** |
| **A-02** | `pages/admin/a02-requests.html` | Expatriate Requests Mgmt | Table of all requests, helper assignment modal, status updater | Modal assignment, status transitions | **Verified** |
| **A-03** | `pages/admin/a03-members.html` | Member & Family Management | Member registry, approval badge queue, search and filter | Member approval trigger, search filter | **Verified** |
| **A-04** | `pages/admin/a04-community.html` | Community Directory Mgmt | Institution editor, neighborhood boundaries, infrastructure stats | Add/edit institution modal | **Verified** |
| **A-05** | `pages/admin/a05-committee.html` | Committee Management | Executive body list, term dates, role assignments, advisor roster | Role hierarchy, contact updates | **Verified** |
| **A-06** | `pages/admin/a06-activities.html` | Activity Program Mgmt | Project planner, budget allocator, photo uploader, completion marker | Status toggle, budget tally | **Verified** |
| **A-07** | `pages/admin/a07-notices.html` | Notice & Ticker Publishing | Notice authoring form, ticker toggle, emergency banner broadcast | Ticker publish flow F-06, archive action | **Verified** |
| **A-08** | `pages/admin/a08-blood.html` | Blood Database & Emergency | Donor registry, emergency blood broadcast trigger, availability toggle | Emergency broadcast modal, donor filter | **Verified** |
| **A-09** | `pages/admin/a09-accounts.html` | Accounts, Vouchers & Audit | Double-entry voucher form, receipt upload simulator, audit lock | Balance arithmetic, voucher creation F-07 | **Verified** |
| **A-10** | `pages/admin/a10-users.html` | User & Role Management | Super Admin user table, role assignment (Admin, Helper, Auditor) | Role toggle flow F-05, password reset | **Verified** |
| **A-11** | `pages/admin/a11-reports.html` | Annual & Special Reports | Printable official letterhead reports (Financial, Service, Blood) | Dynamic report generator, print style | **Verified** |
| **A-12** | `pages/admin/a12-settings.html` | System Settings & Backup | Site metadata, cloud sync status, mock DB reset, JSON backup download | DB reset trigger, manual backup simulator | **Verified** |
| **P-01** | `pages/app/p01-splash.html` | Mobile Splash & Onboarding | Animated crest intro, 3-slide value onboarding carousel | Slide transitions, skip to app home | **Verified** |
| **P-02** | `pages/app/p02-home.html` | Mobile App Home Tab | Mobile news ticker, compact 2x2 stats, service shortcuts, notices | Bottom tab navigation, tap targets | **Verified** |
| **P-03** | `pages/app/p03-community.html` | Mobile App Community Tab | Directory cards, emergency numbers, local institution directory | Back button navigation, search | **Verified** |
| **P-04** | `pages/app/p04-services.html` | Mobile Services Hub | Segmented chips (Expat, Blood, Helpline), 4-step explainer | Segment switcher, quick wizard launch | **Verified** |
| **P-05** | `pages/app/p05-profile.html` | Mobile Profile & Simulator | Logged-in vs Logged-out view simulator, dark mode toggle | Session simulator, language/theme triggers | **Verified** |
| **P-06** | `pages/app/p06-notifications.html` | Push Notification Hub | Lockscreen push notification simulators (Accepted, Completed, Alert) | FCM push simulator, system prompt modal | **Verified** |
