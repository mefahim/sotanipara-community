# Direction D: User Journeys & Functional Verification

**Project:** Satanipara Somaj Kallyan Sangha  
**Branch:** `direction-d-premium-rebuild`  
**Flow Count:** 8 Interactive End-to-End User Journeys (F-01 through F-08)  

---

## 1. Journey Architecture & Role Matrix

| Flow ID | Journey Name | Primary Persona | Starting Screen | Terminal Screen | State Transition |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **F-01** | Emergency Blood Search | Public Visitor / Patient | `W-01` (Home) | `W-07` (Blood Donors) | Real-time chip filtering, telephone consent verification |
| **F-02** | Expatriate Support Wizard | Expatriate Member | `W-06` (Expat) | `M-02` (Wizard) | 3-step progressive validation, Request ID generation |
| **F-03** | Helper Request Assignment | Admin / Helper | `A-02` (Requests) | `A-02` Modal | Pending → Accepted → In Progress → Completed |
| **F-04** | Member Register & Approval | Prospective Member | `W-12` (Register) | `A-03` (Admin) | Application queued, Super Admin approval badge |
| **F-05** | Role Assignment | Super Admin | `A-10` (Users) | `A-10` Table | Role downgrade/upgrade (Helper / Admin / Auditor) |
| **F-06** | Emergency Notice Publish | Admin | `A-07` (Notices) | `W-01` / `W-08` | Form authoring, ticker toggle, broadcast to top banner |
| **F-07** | Financial Entry & Audit | Accounts Admin | `A-09` (Accounts) | `W-10` (Public) | Voucher creation, math tally, public ledger update |
| **F-08** | Password Recovery | Member / Public | `W-12` (Login) | `W-12` Modal | Phone lookup, instructions prompt, return to login |

---

## 2. Detailed Journey Walkthroughs

### F-01 • রক্তদাতা খোঁজা (Emergency Blood Search)
- **Actor:** Public Visitor in emergency.
- **Workflow:**
  1. From `W-01` hero, click secondary CTA **"জরুরি রক্তদাতা খুঁজুন"**.
  2. Navigates to `W-07` (`pages/public/w07-blood-donors.html`).
  3. Interactive Blood Group Chips (`A+`, `A-`, `B+`, `B-`, `O+`, `O-`, `AB+`, `AB-`) filter donors in real-time (<30s).
  4. **Strict Consent Privacy:** If `consent: true`, displays direct call button. If `consent: false`, phone is strictly absent and directs to Sangha helpline.
  5. **Empty State:** If zero donors available, displays direct hotline and modal trigger for Emergency Blood Request broadcast.

### F-02 • প্রবাসী সহায়তা আবেদন (Expatriate Support Request)
- **Actor:** Overseas Expatriate Member.
- **Workflow:**
  1. On `W-06`, user reviews 6 service categories and policy limits, clicks **"সহায়তার আবেদন দাখিল করুন"**.
  2. On `M-02` (`pages/member/m02-request-wizard.html`), completes 3-step wizard:
     - *Step 1:* Category, subject, and detailed description.
     - *Step 2:* Beneficiary name, para location, local phone, urgency toggle.
     - *Step 3:* Policy disclaimer confirmation checkbox.
  3. Generates unique Request ID (e.g., `EXP-2026-0084`) and updates status to `Pending`.

### F-03 • সহায়ক দায়িত্ব বণ্টন (Helper Request Assignment)
- **Actor:** Admin / Expatriate Desk Helper.
- **Workflow:**
  1. Admin opens `A-02` (`pages/admin/a02-requests.html`), locates `Pending` request.
  2. Opens **"সহায়ক নিয়োগ"** modal, selects available volunteer helper from dropdown.
  3. Status updates: `Pending` → `Accepted` → `In Progress` → `Completed`.

### F-04 • সদস্য নিবন্ধন ও অনুমোদন (Member Registration & Approval)
- **Actor:** Prospective Member & Super Admin.
- **Workflow:**
  1. User visits `W-12`, switches to **"নিবন্ধন"** tab, inputs name, phone, village address, and expatriate country.
  2. Submission creates pending record in mock DB.
  3. Super Admin opens `A-03`, reviews pending card, clicks **"অনুমোদন করুন"**, activating the member profile.

### F-05 • ব্যবহারকারী ও রোল ব্যবস্থাপনা (Role Assignment)
- **Actor:** Super Admin.
- **Workflow:**
  1. Super Admin opens `A-10` (`pages/admin/a10-users.html`).
  2. Modifies role for user (Admin, Expatriate Helper, Auditor, Member).
  3. System enforces safety constraint: exactly 2 Super Admins maintained at all times.

### F-06 • নোটিশ ও ব্রেকিং নিউজ প্রচার (Notice & Ticker Publishing)
- **Actor:** Public Relations Admin.
- **Workflow:**
  1. Admin navigates to `A-07` (`pages/admin/a07-notices.html`).
  2. Authors notice with title, category (জরুরি, সাধারণ, কার্যক্রম), and full text.
  3. Toggles **"হোমপেজ টিকারে প্রদর্শন করুন"** checkbox and saves.
  4. Notice immediately appears in `W-01` and `W-08` top notice tickers.

### F-07 • হিসাব ভাউচার দাখিল ও স্বচ্ছতা (Financial Entry & Transparency)
- **Actor:** Accounts Secretary.
- **Workflow:**
  1. Navigates to `A-09` (`pages/admin/a09-accounts.html`).
  2. Adds income or expenditure transaction with voucher number, project category, and amount.
  3. The public accounts ledger on `W-10` (`pages/public/w10-accounts.html`) automatically updates total collection, expenditures, and remaining reserve balance.

### F-08 • পাসওয়ার্ড পুনরুদ্ধার (Password Recovery)
- **Actor:** Member who forgot credentials.
- **Workflow:**
  1. On `W-12` login screen, clicks **"পাসওয়ার্ড ভুলে গেছেন?"**.
  2. Modal opens with guidance and hotline helpline number.
  3. Confirms identity reset flow.
