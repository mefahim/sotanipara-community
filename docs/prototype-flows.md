# Satanipara Community — Interactive Prototype User Flows (F-01 to F-08)

This document provides a comprehensive, step-by-step operational walkthrough of the **8 interactive user flows** implemented in the Satanipara Community UI/UX prototype. All flows are fully functional using client-side vanilla JavaScript, localStorage state management, and the floating Prototype HUD.

---

## User Personas & Role Matrix

| Persona | Primary Needs & Permissions | Key Prototype Views |
| :--- | :--- | :--- |
| **Public Visitor (সাধারণ দর্শনার্থী)** | Browse community history, emergency contacts, find blood donors, view verified transparency reports. No login required. Phone numbers hidden without consent. | `W-01` to `W-11`, `P-01` to `P-04` |
| **Member (নিবন্ধিত সদস্য / প্রবাসী)** | Submit expatriate assistance requests, track status timeline in real-time, manage personal & family directory. Login via Mobile + Password (NO OTP). | `W-12`, `M-01` to `M-05`, `P-05` |
| **Expatriate Helper (প্রবাসী সহায়ক)** | Volunteer assigned to field tasks. Strictly can only view & manage Expatriate Requests (`A-02`) and own profile. All other admin modules hidden. | `A-02` (Helper view) |
| **Super Admin (সুপার এডমিন)** | Full control: user management (`A-10`), role assignment (max 2 Super Admins), request oversight, accounts audit, site settings (`A-12`), reports (`A-11`). | `A-01` to `A-12` |

---

## Flow Walkthroughs

### F-01 • রক্তদাতা খোঁজা (Blood Donor Search)
* **Goal**: Quickly find an active blood donor in emergency situations without requiring user registration or login.
* **Actor**: Public Visitor (জরুরি রোগী বা স্বজন)
* **Starting Screen**: `W-01` (Homepage) or `P-04` (App Services)
* **Steps**:
  1. From `W-01` hero, click secondary CTA **"রক্তদাতা খুঁজুন"** (or click Service Card).
  2. Navigates to `W-07` (`/pages/public/w07-blood-donors.html`).
  3. Interactive Blood Group Chips (`A+`, `A-`, `B+`, `B-`, `O+`, `O-`, `AB+`, `AB-`) filter donors in real-time.
  4. **Happy Path (Consent = True)**:
     - The donor card renders a green/red badge and an active **"কল করুন"** button with direct `tel:` link.
     - Tapping initiates phone call.
  5. **Alternative Path (Consent = False)**:
     - Phone number is completely absent from DOM.
     - Card displays: *"গোপনীয়তার কারণে সরাসরি নম্বর অপ্রকাশিত — সংঘ কার্যালয়ের হেল্পলাইনে যোগাযোগ করুন"*.
  6. **Failure / Zero Result Path**:
     - Selecting a rare group with 0 donors displays the **Empty State** card with emergency hotline and a primary CTA to trigger the **"জরুরি রক্তের আবেদন ফর্ম"** modal.

---

### F-02 • প্রবাসী সহায়তা আবেদন (Expatriate Request Submission)
* **Goal**: An expatriate or family member submits a request for medical, logistical, or emergency support.
* **Actor**: Expatriate Member
* **Starting Screen**: `W-06` (Expatriate Support) -> `W-12` (if unauthenticated) -> `M-02` (Request Wizard)
* **Steps**:
  1. On `W-06`, user reviews 6 service categories and Section 14 policy limits, then clicks **"সহায়তার আবেদন করুন"**.
  2. If not logged in, system redirects to `W-12` with return redirect set to `M-02`.
  3. On `M-02` (`/pages/member/m02-request-wizard.html`), the user navigates the 3-step wizard:
     - **ধাপ ১: সেবার ধরন ও তথ্য**: Service Category selection (জরুরি চিকিৎসা, ওষুধ পৌঁছে দেওয়া, প্রাতিষ্ঠানিক সনদ, ইত্যাদি), Subject, and Detailed description.
     - **ধাপ ২: সুবিধাভোগী ও স্থানীয় যোগাযোগ**: Family member name, exact village para/house location, local active phone number, urgent assistance toggle.
     - **ধাপ ৩: যাচাই ও চূড়ান্ত সম্মতি**: Summary review card, mandatory Section 14 consent checkbox (*"আমি নিশ্চিত করছি যে প্রদত্ত তথ্য সত্য এবং এটি সম্পূর্ণ স্বেচ্ছাসেবী সামাজিক সহায়তা"*).
  4. **Submission**: Click **"আবেদন দাখিল করুন"**.
  5. **Happy Path Outcome**:
     - Generates unique tracking ID (e.g. `REQ-2024-005`).
     - Saves to `MockData.db.expatriateRequests` with status `Pending`.
     - Displays formatted success screen with Request ID, estimated review window (২-৪ ঘণ্টা), and button to view on `M-03`.
     - **Instant Web Push Trigger (Section 11)**: Simulates push notification for Super Admin & Helpers: *"নতুন প্রবাসী আবেদন REQ-2024-005 জমা হয়েছে!"*.
  6. **Validation Failure Path**:
     - Submitting without required fields highlights inputs in red with Bengali error text (*"বিবরণ আবশ্যক"*, *"সঠিক ১১ ডিজিটের ফোন নম্বর দিন"*).
     - Submitting without consent checkbox prevents progression.

---

### F-03 • আবেদন পরিচালনা ও অগ্রগতি (Request Management & Progression)
* **Goal**: A Helper or Super Admin takes ownership of a pending request, executes tasks, posts updates/expenses, and marks it complete.
* **Actor**: Expatriate Helper / Super Admin
* **Starting Screen**: `A-02` (Expatriate Requests Management)
* **Steps**:
  1. Helper opens `A-02` (`/pages/admin/a02-requests.html`). (If notification alert clicked, jumps directly to request details modal).
  2. Filter tabs: `সকল`, `Pending`, `Accepted`, `In Progress`, `Completed`.
  3. Helper clicks a `Pending` request (e.g. `REQ-2024-005`) to view modal.
  4. Clicks **"দায়িত্ব গ্রহণ করুন"**:
     - Status updates from `Pending` -> `Accepted`.
     - Assigned helper name is stamped.
     - Timeline logs timestamp.
  5. Clicks **"মাঠপর্যায়ের কাজ শুরু"**:
     - Status updates from `Accepted` -> `In Progress`.
     - Helper adds an operational update note and optional expense breakdown (e.g. *"ওষুধ ক্রয় ও যাতায়াত: ৳ ১,২০০"*).
  6. Clicks **"সেবা সম্পন্ন করুন"**:
     - Status updates to `Completed`.
     - Prompts for closing remarks and completion confirmation.
  7. **Real-time Member Feedback**:
     - Member visiting `M-03` sees 4-step progress stepper updated to `Completed`, with full dated timeline.

---

### F-04 • নতুন সদস্য নিবন্ধন ও প্রশাসনিক অনুমোদন (Member Registration & Approval)
* **Goal**: A resident of Satanipara registers as a platform member; Super Admin reviews and approves the membership.
* **Actor**: Guest Resident -> Super Admin
* **Starting Screen**: `W-12` (Register Tab) -> `A-01` / `A-03` (Admin Review)
* **Steps**:
  1. On `W-12`, user selects **"নতুন সদস্য নিবন্ধন"** tab.
  2. Fills: Full Name, Mobile Number (login identity), Password (min 6 chars, NO OTP), Village Para, Blood Group, Expatriate status toggle.
  3. Checks declaration: *"আমি সাতানীপাড়ার স্থায়ী/বংশগত বাসিন্দা"*.
  4. Submits form:
     - Status is saved as `pending_approval`.
     - Displays informational message: *"আপনার আবেদন গৃহীত হয়েছে। সংঘ কার্যনির্বাহী কমিটির যাচাই শেষে আপনার অ্যাকাউন্ট সক্রিয় করা হবে।"*.
  5. **Super Admin Review (`A-03`)**:
     - Super Admin opens `A-03` (`/pages/admin/a03-members.html`).
     - "অপেক্ষমান নিবন্ধন" tab shows pending applicant.
     - Clicks **"অনুমোদন দিন"** (Approve) or **"বাতিল"** (Reject with reason).
  6. **Post-Approval**:
     - User can now login on `W-12` and access `M-01` Member Dashboard.

---

### F-05 • সুপার এডমিন কর্তৃক ইউজার ও রোল তৈরি (User & Role Creation - Super Admin Only)
* **Goal**: Super Admin creates a new administrative user and assigns either `Super Admin` or `Helper` role.
* **Actor**: Super Admin
* **Starting Screen**: `A-10` (`/pages/admin/a10-users.html`)
* **Steps**:
  1. Super Admin navigates to `A-10` (Strictly hidden from Helper role).
  2. Clicks **"+ নতুন প্রশাসনিক ইউজার"** to open 5-step modal wizard:
     - **ধাপ ১: পূর্ণ নাম**: e.g., "রফিকুল ইসলাম"
     - **ধাপ ২: মোবাইল নম্বর**: e.g., "০১৮১১-৯৯৮৮৭৭" (Login ID)
     - **ধাপ ৩: প্রাথমিক পাসওয়ার্ড**: Super Admin sets initial strong password.
     - **ধাপ ৪: রোল নির্বাচন**: Two distinct role selection cards:
       - Card A: **সুপার এডমিন** (*"সম্পূর্ণ সিস্টেম ও ইউজার নিয়ন্ত্রণের ক্ষমতা — সর্বোচ্চ ২ জন"*)
       - Card B: **প্রবাসী সহায়ক (Helper)** (*"শুধুমাত্র প্রবাসী আবেদন দেখা ও পরিচালনা করার অধিকার"*)
     - **ধাপ ৫: যাচাই ও নিশ্চিতকরণ**: Summary review card.
  3. Click **"ইউজার তৈরি করুন"**:
     - Creates user and adds to `MockData.db.adminUsers`.
     - Shows success confirmation card with safety reminder: *"ব্যবহারকারীকে নিরাপদে পাসওয়ার্ড জানিয়ে দিন — নিরাপত্তার স্বার্থে পাসওয়ার্ড পুনরায় দেখানো হবে না"*.
  4. **Enforced Safeguards**:
     - A Super Admin cannot deactivate or demote their own account.
     - Warning modal prevents creating more than 2 active Super Admins.

---

### F-06 • নোটিশ প্রকাশ ও টিকার নিয়ন্ত্রণ (Notice Publishing & Ticker Control)
* **Goal**: Admin publishes an official notice and flags it as urgent to display in the global homepage ticker.
* **Actor**: Super Admin
* **Starting Screen**: `A-07` (`/pages/admin/a07-notices.html`)
* **Steps**:
  1. On `A-07`, clicks **"+ নতুন নোটিশ তৈরি করুন"**.
  2. Inputs: Notice Title, Category (জরুরি, সাধারণ, কার্যক্রম, প্রবাসী), Publish Date, Expiry Date, Full Bengali Description.
  3. Toggles **"জরুরি নোটিশ হিসেবে শীর্ষ টিকারে প্রদর্শন করুন"** (Ticker Flag = True).
  4. Clicks **"প্রকাশ করুন"**.
  5. **Verification**:
     - Navigating to `W-01` Homepage shows the notice immediately in the top scrolling ticker bar.
     - Clicking the ticker item opens the notice modal / detail page (`W-08`).
     - Ticker bar is positioned strictly above hero without overlapping content.

---

### F-07 • হিসাব এন্ট্রি ও পাবলিক স্বচ্ছতা (Accounts Entry & Public Transparency)
* **Goal**: Record incoming community donation with donor consent flag, updating the public transparency ledger and annual reports.
* **Actor**: Super Admin -> Public Visitor
* **Starting Screen**: `A-09` (Admin Accounts) -> `W-10` (Public Transparency) -> `A-11` (Audit PDF)
* **Steps**:
  1. Super Admin opens `A-09` (`/pages/admin/a09-accounts.html`).
  2. Clicks **"+ নতুন হিসাব এন্ট্রি"**.
  3. Fills Entry Form:
     - Type: Income (আয়) or Expense (ব্যয়)
     - Category: কবরস্থান উন্নয়ন, চিকিৎসা সহায়তা, সাধারণ কল্যাণ, শিক্ষা তহবিল
     - Amount: ৳ ৫০,০০০
     - Donor Name: "হাজী মোহাম্মদ ইউনুস"
     - **দাতার নাম ও পরিচয় প্রকাশের সম্মতি (Consent Toggle)**:
       - If enabled: Donor's name appears on public ledger.
       - If disabled: Donor is labeled as *"নাম প্রকাশে অনিচ্ছুক শুভাকাঙ্ক্ষী"*.
  4. Saves entry. Audit log automatically records admin user ID and timestamp.
  5. **Public Visibility (`W-10`)**:
     - Opening `W-10` immediately reflects the updated running balance, monthly breakdown, and transparency ledger table.
  6. **Export (`A-11`)**:
     - Navigating to `A-11` allows generating the official signed Annual Financial Audit PDF with 1-click preview and print.

---

### F-08 • পাসওয়ার্ড ভুলে যাওয়া (Password Reset - Zero OTP Policy)
* **Goal**: A user who forgot their password recovers account access through the official manual admin reset workflow without any automated OTP or SMS gateway.
* **Actor**: Member -> Super Admin
* **Starting Screen**: `W-12` (Login Screen) -> `A-03` / `A-10` (Admin Reset Modal)
* **Steps**:
  1. On `W-12`, user clicks **"পাসওয়ার্ড ভুলে গেছেন?"**.
  2. System displays the Section 8 & Section 10 instruction modal:
     - Clear explanation: *"নিরাপত্তা ও ওটিপি-বিহীন কাঠামোর কারণে পাসওয়ার্ড রিসেট সরাসরি সংঘ কার্যালয় অথবা সুপার এডমিনের মাধ্যমে সম্পন্ন হয়।"*
     - Shows Sangha official helpline: `০১৭১১-০০০০০০ (TBD)` and office hours.
     - Button: **"অফিসিয়াল হেল্পলাইনে কল করুন"**.
  3. **Super Admin Action (`A-03` or `A-10`)**:
     - Super Admin verifies member identity offline.
     - Opens member row in `A-03` or `A-10` and clicks **"পাসওয়ার্ড রিসেট"**.
     - Enters temporary password and confirms.
  4. **Member Re-login & Change**:
     - Member logs in on `W-12` with temporary password.
     - Navigates to `M-04` (My Profile) to set their own permanent secure password.

---

## Prototype Floating HUD Controls

At any moment, any user flow can be triggered and tested with a single click using the bottom-right floating **Prototype HUD (কন্ট্রোল প্যানেল)**:
* **F-01**: Jumps directly to `W-07` with blood group filter active.
* **F-02**: Launches the 3-step Expatriate Request Wizard (`M-02`).
* **F-03**: Opens Admin Request Management (`A-02`) with simulated new request.
* **F-04**: Opens Member Registration Form (`W-12?tab=register`).
* **F-05**: Opens Admin User Creation wizard (`A-10?flow=F-05`).
* **F-06**: Opens Notice Creator (`A-07`).
* **F-07**: Opens Accounts Entry Form (`A-09`).
* **F-08**: Opens Password Recovery Modal on `W-12`.
* **Quick Role Switcher**: Instant switch between `Public Visitor`, `Member`, `Expatriate Helper`, and `Super Admin`.
* **Language & Theme Toggles**: Switch between Bengali/English and Light/Dark modes instantly.
