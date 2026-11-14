# Direction D: Complete Information Architecture & Sitemap

**Project:** Satanipara Somaj Kallyan Sangha  
**Branch:** `direction-d-premium-rebuild`  
**Total Screens:** 35 Screens (12 Public, 5 Member, 12 Admin, 6 Mobile App)  
**Total Interactive Flows:** 8 User Journeys (F-01 through F-08)  

---

## 1. Information Architecture Overview

```mermaid
flowchart TD
    SiteRoot["সাতানীপাড়া ডিজিটাল প্ল্যাটফর্ম"]
    
    subgraph PublicPortal ["১. পাবলিক ওয়েবসাইট (Public Website)"]
        W01["W-01: হোমপেজ ও প্রধান পোর্টাল"]
        W02["W-02: এলাকার প্রোফাইল ও ইতিহাস"]
        W03["W-03: সংগঠন, সংবিধান ও কমিটি"]
        W04["W-04: বার্ষিক কার্যক্রম সূচি"]
        W05["W-05: কার্যক্রমের বিস্তারিত বিবরণ"]
        W06["W-06: প্রবাসী সহায়তা সেল (Priority)"]
        W07["W-07: জরুরি রক্তদাতা তালিকা (Priority)"]
        W08["W-08: নোটিশ ও অফিসিয়াল বিজ্ঞপ্তি"]
        W09["W-09: ফটো ও ভিডিও গ্যালারি"]
        W10["W-10: উন্মুক্ত আয়-ব্যয়ের হিসাব"]
        W11["W-11: যোগাযোগ ও জরুরি হেল্পলাইন"]
        W12["W-12: সদস্য লগইন ও নিবন্ধন"]
    end

    subgraph MemberPortal ["২. সদস্য পোর্টাল (Member Portal)"]
        M01["M-01: সদস্য ব্যক্তিগত ড্যাশবোর্ড"]
        M02["M-02: প্রবাসী সেবা আবেদন উইজার্ড"]
        M03["M-03: আমার আবেদন ও লাইভ ট্র্যাকিং"]
        M04["M-04: সদস্য প্রোফাইল ও সেটিং"]
        M05["M-05: পরিবারের সদস্য তথ্য রেজিস্ট্রি"]
    end

    subgraph AdminPortal ["৩. প্রশাসনিক ব্যবস্থাপনা (Admin Portal)"]
        A01["A-01: প্রশাসনিক ওভারভিউ"]
        A02["A-02: প্রবাসী আবেদন ও সহায়ক নিয়োগ"]
        A03["A-03: সদস্য ও পরিবার রেজিস্ট্রি"]
        A04["A-04: কমিউনিটি ডিরেক্টরি ব্যবস্থাপনা"]
        A05["A-05: কমিটি ও নির্বাহী পরিষদ"]
        A06["A-06: সমাজসেবা কার্যক্রম ব্যবস্থাপনা"]
        A07["A-07: নোটিশ, সংবাদ ও গ্যালারি"]
        A08["A-08: রক্তদাতা ডাটাবেজ ও জরুরি আবেদন"]
        A09["A-09: হিসাব ও আর্থিক অডিট"]
        A10["A-10: ব্যবহারকারী ও রোল ব্যবস্থাপনা"]
        A11["A-11: বার্ষিক ও বিশেষ রিপোর্ট জেনারেশন"]
        A12["A-12: সাইট সেটিংস ও ব্যাকআপ"]
    end

    subgraph AppShell ["৪. মোবাইল অ্যাপ ধারণা (Mobile App Concepts)"]
        P01["P-01: স্প্ল্যাশ ও অনবোর্ডিং"]
        P02["P-02: অ্যাপ হোম ট্যাব"]
        P03["P-03: অ্যাপ কমিউনিটি ডিরেক্টরি"]
        P04["P-04: সমাজকল্যাণ ও সেবা হাব"]
        P05["P-05: অ্যাপ প্রোফাইল ও সিমুলেটর"]
        P06["P-06: পুশ নোটিফিকেশন আর্কিটেকচার"]
    end

    SiteRoot --> PublicPortal
    SiteRoot --> MemberPortal
    SiteRoot --> AdminPortal
    SiteRoot --> AppShell
```

---

## 2. Navigation Taxonomy & Structural Pacing

1. **Top Announcement Strip:** High-priority notices, live blood emergency tickers, and instant language switch (BN/EN).
2. **Masthead (60px sticky):** Civic crest emblem, bilingual organization title, categorized desktop menu, theme toggle, and mobile sheet trigger.
3. **Categorized Mobile Navigation Drawer:**
   - **মূল সংগঠন ও এলাকা:** হোম, এলাকার প্রোফাইল, সংগঠন ও সংবিধান, বার্ষিক কার্যক্রম.
   - **জনকল্যাণ ও সেবাসমূহ:** প্রবাসী সহায়তা সেল, জরুরি রক্তদাতা তালিকা, নোটিশ ও সংবাদ.
   - **স্বচ্ছতা ও যোগাযোগ:** উন্মুক্ত হিসাব ও অডিট, ফটো গ্যালারি, যোগাযোগ ও জরুরি নম্বর.
   - **অ্যাকশন ফুটার:** সদস্য ড্যাশবোর্ড ও লগইন/নিবন্ধন সরাসরি বাটন.
4. **Interactive Prototype HUD:** Non-intrusive floating control (`#hudToggleBtn`) enabling instant switching between all 35 screens without breaking immersion.
