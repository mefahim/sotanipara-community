/**
 * Satanipara Community Design System — Language & Internationalization
 * Strict implementation of Section 14 of the Design Brief.
 * Default: Bengali ('bn'), full English toggle ('en').
 */

const I18n = (function () {
  const STORAGE_KEY = 'satanipara_language';

  // Bengali Numeral Mapping
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

  function toBengaliNumerals(str) {
    if (str === null || str === undefined) return '';
    return String(str).replace(/[0-9]/g, function (d) {
      return bnDigits[parseInt(d, 10)];
    });
  }

  // South-Asian Currency Formatter
  function formatMoney(amount, lang = 'bn') {
    if (!amount) return lang === 'bn' ? '৳ ০' : '৳ 0';
    const num = Math.round(Number(amount));
    const formatted = num.toLocaleString('en-IN');
    if (lang === 'bn') {
      return '৳ ' + toBengaliNumerals(formatted);
    }
    return '৳ ' + formatted;
  }

  // Dictionary of Interface Strings
  const translations = {
    // Brand & General
    'brand.name': { bn: 'সাতানীপাড়া কিমউিনটি', en: 'Satanipara Community' },
    'brand.org': { bn: 'সাতানীপাড়া সমাজকল্যাণ সংঘ', en: 'Satanipara Somaj Kallyan Sangha' },
    'brand.tagline': { bn: 'একটি এলাকা, একটি পরিবার', en: 'One Area, One Family' },
    'brand.slogan': { bn: 'শিক্ষা • ঐক্য • শান্তি • প্রগতি', en: 'Education • Unity • Peace • Progress' },
    'brand.est': { bn: 'প্রতিষ্ঠা: ১৯৯৯', en: 'Established: 1999' },

    // Navigation Links
    'nav.home': { bn: 'হোম', en: 'Home' },
    'nav.community': { bn: 'এলাকার প্রোফাইল', en: 'Community' },
    'nav.organization': { bn: 'সংগঠন', en: 'Organization' },
    'nav.activities': { bn: 'কার্যক্রম', en: 'Activities' },
    'nav.expatriate': { bn: 'প্রবাসী সেবা', en: 'Expatriate Support' },
    'nav.blood': { bn: 'রক্তদাতা', en: 'Blood Donors' },
    'nav.notices': { bn: 'নোটিশ ও সংবাদ', en: 'Notices & News' },
    'nav.gallery': { bn: 'গ্যালারি', en: 'Gallery' },
    'nav.accounts': { bn: 'হিসাব ও স্বচ্ছতা', en: 'Accounts' },
    'nav.contact': { bn: 'যোগাযোগ ও জরুরি নম্বর', en: 'Contact' },
    'nav.login': { bn: 'সদস্য লগইন', en: 'Member Login' },
    'nav.register': { bn: 'নিবন্ধন', en: 'Register' },
    'nav.logout': { bn: 'লগআউট', en: 'Logout' },

    // Member Subnav
    'member.dashboard': { bn: 'আমার ড্যাশবোর্ড', en: 'My Dashboard' },
    'member.request': { bn: 'প্রবাসী আবেদন করুন', en: 'Request Support' },
    'member.my_requests': { bn: 'আমার আবেদনসমূহ', en: 'My Requests' },
    'member.profile': { bn: 'আমার প্রোফাইল', en: 'My Profile' },
    'member.family': { bn: 'পরিবারের তথ্য', en: 'Family Info' },

    // Admin Sidebar
    'admin.overview': { bn: 'ওভারভিউ', en: 'Overview' },
    'admin.requests': { bn: 'প্রবাসী আবেদন', en: 'Expatriate Requests' },
    'admin.members': { bn: 'সদস্য ও পরিবার', en: 'Members & Families' },
    'admin.community': { bn: 'কমিউনিটি তথ্য', en: 'Community Info' },
    'admin.organization': { bn: 'কমিটি ও সংগঠন', en: 'Committee & Org' },
    'admin.activities': { bn: 'কার্যক্রম পরিচালনা', en: 'Activities Mgmt' },
    'admin.notices': { bn: 'নোটিশ, সংবাদ ও গ্যালারি', en: 'Notices & Gallery' },
    'admin.blood': { bn: 'রক্তদাতা ও জরুরি রক্ত', en: 'Blood Donors' },
    'admin.accounts': { bn: 'হিসাব', en: 'Accounts' },
    'admin.users': { bn: 'ব্যবহারকারী ও রোল', en: 'Users & Roles' },
    'admin.reports': { bn: 'রিপোর্ট', en: 'Reports' },
    'admin.settings': { bn: 'সেটিংস', en: 'Settings' },

    // Buttons & Actions
    'btn.apply_expatriate': { bn: 'প্রবাসী সহায়তার আবেদন', en: 'Request Expatriate Support' },
    'btn.find_blood': { bn: 'রক্তদাতা খুঁজুন', en: 'Find Blood Donors' },
    'btn.view_profile': { bn: 'এলাকার প্রোফাইল দেখুন →', en: 'View Community Profile →' },
    'btn.submit_application': { bn: 'আবেদন জমা দিন', en: 'Submit Application' },
    'btn.search': { bn: 'অনুসন্ধান করুন', en: 'Search' },
    'btn.filter': { bn: 'ফিল্টার', en: 'Filter' },
    'btn.reset': { bn: 'রিসেট করুন', en: 'Reset' },
    'btn.save': { bn: 'সংরক্ষণ করুন', en: 'Save' },
    'btn.cancel': { bn: 'বাতিল', en: 'Cancel' },
    'btn.close': { bn: 'বন্ধ করুন', en: 'Close' },
    'btn.call_now': { bn: 'কল করুন', en: 'Call Now' },
    'btn.all_activities': { bn: 'সকল কার্যক্রম দেখুন →', en: 'View All Activities →' },
    'btn.all_notices': { bn: 'সকল নোটিশ →', en: 'All Notices →' },
    'btn.view_site': { bn: 'ওয়েবসাইট দেখুন', en: 'View Website' },
    'btn.next': { bn: 'পরবর্তী ধাপ →', en: 'Next Step →' },
    'btn.prev': { bn: '← পূর্ববর্তী ধাপ', en: '← Previous Step' },

    // Status Badges (Strict names)
    'status.pending': { bn: 'অপেক্ষমাণ', en: 'Pending' },
    'status.accepted': { bn: 'গৃহীত', en: 'Accepted' },
    'status.in_progress': { bn: 'চলমান', en: 'In Progress' },
    'status.completed': { bn: 'সম্পন্ন', en: 'Completed' },
    'status.cancelled': { bn: 'বাতিল', en: 'Cancelled' },

    // Role Badges
    'role.superadmin': { bn: 'সুপার এডমিন', en: 'Super Admin' },
    'role.helper': { bn: 'প্রবাসী সহায়ক', en: 'Expatriate Helper' },
    'role.member': { bn: 'সদস্য', en: 'Member' },
    'role.expatriate': { bn: 'প্রবাসী সদস্য', en: 'Expatriate Member' },

    // Required Disclaimers (Section 14: Verbatim)
    'disclaimer.service_policy': {
      bn: 'সংগঠন বা স্বেচ্ছাসেবকরা কোনো সার্ভিস চার্জ বা মুনাফা নেন না। পণ্য কেনার প্রকৃত মূল্য এবং প্রযোজ্য যাতায়াত খরচ আবেদনকারীকেই বহন করতে হবে। প্রতিটি আবেদনের একটি Request ID থাকবে এবং আবেদনের অবস্থা Pending, Accepted, In Progress ও Completed — এই ধাপে দেখা যাবে।',
      en: 'The organization or volunteers take no service charge or profit. The actual purchase cost and applicable travel expenses must be borne by the applicant. Each application receives a Request ID and status follows Pending, Accepted, In Progress, and Completed.'
    },
    'disclaimer.emergency': {
      bn: 'এই সেবা সরকারি জরুরি সেবা বা অ্যাম্বুলেন্সের বিকল্প নয়। জীবন-ঝুঁকির জরুরি অবস্থায় প্রথমে জাতীয় জরুরি সেবা ৯৯৯ নম্বরে কল করুন।',
      en: 'This service is not an alternative to public emergency services or ambulances. In life-threatening emergencies, call national emergency 999 immediately.'
    },
    'disclaimer.blood_consent': {
      bn: 'আপনার ফোন নম্বর শুধু তখনই প্রকাশ করা হবে, যখন আপনি সম্মতি দিয়েছেন। সম্মতি যেকোনো সময় প্রোফাইল থেকে বাতিল করা যাবে।',
      en: 'Your phone number will only be published if you have given consent. Consent can be withdrawn from your profile at any time.'
    },
    'disclaimer.personal_privacy': {
      bn: 'ব্যক্তিগত তথ্য সংশ্লিষ্ট ব্যক্তির সম্মতি ছাড়া প্রকাশ করা হয় না।',
      en: 'Personal details are never published without the individual\'s explicit consent.'
    },
    'disclaimer.accounts_privacy': {
      bn: 'দাতা বা অনুদানকারীদের নাম শুধু তাঁদের সম্মতি অনুযায়ী প্রকাশ করা হয়। ব্যক্তিগত বা গোপন আর্থিক তথ্য সবার জন্য উন্মুক্ত নয়।',
      en: 'Donor names are published strictly in accordance with their consent. Private financial information is never made public.'
    },

    // Placeholders
    'placeholder.data': { bn: 'প্রকৃত তথ্য পরে বসবে', en: 'Actual data to be placed later' },
    'placeholder.photo': { bn: 'প্রকৃত ছবি পরে বসবে', en: 'Actual photo to be placed later' },
    'empty.notifications': { bn: 'নতুন কোনো খবর নেই', en: 'No new notifications' },
    'empty.records': { bn: 'কোনো তথ্য পাওয়া যায়নি', en: 'No records found' }
  };

  // Current language getter & setter
  function getLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'bn';
    } catch (e) {
      return 'bn';
    }
  }

  function setLanguage(lang) {
    if (lang !== 'bn' && lang !== 'en') lang = 'bn';
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    document.documentElement.setAttribute('lang', lang);
    updateDOM(lang);

    // Dispatch event
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  function t(key, lang = null) {
    const current = lang || getLanguage();
    if (translations[key] && translations[key][current]) {
      return translations[key][current];
    }
    return key;
  }

  // Update elements with [data-i18n]
  function updateDOM(lang = null) {
    const current = lang || getLanguage();
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][current]) {
        el.textContent = translations[key][current];
      }
    });

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[key] && translations[key][current]) {
        el.setAttribute('placeholder', translations[key][current]);
      }
    });

    // Update active state on language buttons
    const bnBtns = document.querySelectorAll('[data-lang-btn="bn"]');
    const enBtns = document.querySelectorAll('[data-lang-btn="en"]');
    bnBtns.forEach(b => b.classList.toggle('active', current === 'bn'));
    enBtns.forEach(b => b.classList.toggle('active', current === 'en'));
  }

  // Initialize
  function init() {
    const current = getLanguage();
    document.documentElement.setAttribute('lang', current);
    updateDOM(current);
  }

  return {
    getLanguage,
    setLanguage,
    t,
    toBengaliNumerals,
    formatMoney,
    updateDOM,
    init,
    translations
  };
})();

if (typeof window !== 'undefined') {
  window.I18n = I18n;
}
