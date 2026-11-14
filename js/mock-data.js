/**
 * Satanipara Community Design System — Mock Data Store
 * Built with realistic data strictly conforming to Section 14, 16 & 19 of Design Brief.
 * Uses explicit placeholders "প্রকৃত তথ্য পরে বসবে" / "প্রকৃত ছবি পরে বসবে" for unverified community facts.
 */

const MockData = (function () {
  const STORAGE_KEY = 'satanipara_mock_db_v1';

  const defaultData = {
    // Current authenticated session
    // Roles: 'guest', 'member', 'helper', 'superadmin'
    session: {
      user: {
        id: 'usr-001',
        name_bn: 'আব্দুর রহমান',
        name_en: 'Abdur Rahman',
        mobile: '01712345678',
        role: 'member', // Default session can be switched via HUD
        memberType: 'expatriate', // 'local' | 'expatriate'
        country: 'সৌদি আরব',
        country_en: 'Saudi Arabia',
        consentPhone: true,
        joinedDate: '2023-04-15'
      }
    },

    // Organization Information
    organization: {
      name_bn: 'সাতানীপাড়া সমাজকল্যাণ সংঘ',
      name_en: 'Satanipara Somaj Kallyan Sangha',
      est: '1999',
      tagline_bn: 'একটি এলাকা, একটি পরিবার',
      tagline_en: 'One Area, One Family',
      slogan_bn: 'শিক্ষা • ঐক্য • শান্তি • প্রগতি',
      slogan_en: 'Education • Unity • Peace • Progress',
      office_bn: 'সাতানীপাড়া সমাজকল্যাণ সংঘ কার্যালয় (প্রকৃত ঠিকানা পরে বসবে)',
      office_en: 'Satanipara Somaj Kallyan Sangha Office (Actual address to be placed later)',
      phone: '01700000000',
      email: 'info@satanipara.org',
      emergency999: '999',
      emergencySangha: '01700000000',
      hospital: 'উপজেলা স্বাস্থ্য কমপ্লেক্স (প্রকৃত নম্বর পরে বসবে)'
    },

    // Community Statistics (Section 19: All facts are TBD)
    stats: {
      families: '৭৫০+',
      families_en: '750+',
      population: '৩,৫০০+',
      population_en: '3,500+',
      expatriates: '৪২০+',
      expatriates_en: '420+',
      bloodDonors: '১২০+',
      bloodDonors_en: '120+',
      isPlaceholder: true
    },

    // Notice Ticker & Notices (W-08, A-07)
    notices: [
      {
        id: 'not-01',
        title_bn: 'সাতানীপাড়া মেধা ও শিক্ষাবৃত্তি ২০২৬-এর আবেদন শুরু',
        title_en: 'Applications Open for Satanipara Merit & Education Scholarship 2026',
        date: '2026-11-10',
        category_bn: 'শিক্ষা',
        category_en: 'Education',
        isTicker: true,
        priority: 'high',
        summary_bn: '২০২৬ সালের এসএসসি ও দাখিল পরীক্ষার্থীদের মধ্যে মেধাবৃত্তির জন্য আগামী ৩০ নভেম্বরের মধ্যে কার্যালয়ে যোগাযোগ করার অনুরোধ জানানো হচ্ছে।',
        summary_en: 'Candidates of SSC and Dakhil examinations 2026 are requested to apply for merit scholarships by 30th November at the office.'
      },
      {
        id: 'not-02',
        title_bn: 'বার্ষিক শীতবস্ত্র বিতরণ কর্মসূচি আগামী ৫ ডিসেম্বর অনুষ্ঠিত হবে',
        title_en: 'Annual Winter Clothes Distribution on 5 December',
        date: '2026-11-05',
        category_bn: 'ত্রাণ',
        category_en: 'Relief',
        isTicker: true,
        priority: 'normal',
        summary_bn: 'প্রতিবারের মতো এবারও এলাকার প্রবীণ ও সুবিধাবঞ্চিত পরিবারের মাঝে শীতবস্ত্র উপহার প্রদান করা হবে।',
        summary_en: 'Warm winter clothing will be gifted to elderly and underprivileged families of the community.'
      },
      {
        id: 'not-03',
        title_bn: 'প্রবাসীদের জরুরি সেবা সংক্রান্ত সমন্বয় সভা সম্পন্ন',
        title_en: 'Coordination Meeting on Expatriate Support Completed',
        date: '2026-10-28',
        category_bn: 'প্রবাসী সেবা',
        category_en: 'Expatriate Support',
        isTicker: false,
        priority: 'normal',
        summary_bn: 'প্রবাসী ভাইদের পরিবারের জরুরি চিকিৎসা ও ঔষধ সহায়তা দ্রুততর করতে নতুন ৫ জন স্বেচ্ছাসেবক দায়িত্ব নিয়েছেন।',
        summary_en: 'Five new volunteers have stepped forward to streamline emergency medicine and family support for expatriates.'
      }
    ],

    // Community Activities (W-04, W-05, A-06)
    activities: [
      {
        id: 'act-01',
        title_bn: 'মেধাবৃত্তি ও শিক্ষা উপকরণ বিতরণ ২০২৬',
        title_en: 'Merit Scholarship & Educational Kit Distribution 2026',
        year: '2026',
        category_bn: 'মেধাবৃত্তি ও শিক্ষাবৃত্তি',
        category_en: 'Scholarships & Education',
        date: '2026-03-15',
        beneficiaries_bn: '৬৫ জন শিক্ষার্থী',
        beneficiaries_en: '65 Students',
        budget_bn: '৳ ১,২০,০০০',
        budget_en: '৳ 120,000',
        summary_bn: 'বিদ্যালয় ও মাদ্রাসার কৃতি শিক্ষার্থীদের মাঝে বৃত্তি সনদ ও এক বছরের শিক্ষা উপকরণ প্রদান করা হয়।',
        summary_en: 'Merit certificates and one-year educational kits were awarded to deserving local students.'
      },
      {
        id: 'act-02',
        title_bn: 'বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও স্বেচ্ছায় রক্তদান ক্যাম্প',
        title_en: 'Free Blood Group Testing & Voluntary Blood Donation Camp',
        year: '2026',
        category_bn: 'রক্তদান',
        category_en: 'Blood Donation',
        date: '2026-02-21',
        beneficiaries_bn: '২৫০+ জন',
        beneficiaries_en: '250+ Persons',
        budget_bn: '৳ ৩৫,০০০',
        budget_en: '৳ 35,000',
        summary_bn: 'আন্তর্জাতিক মাতৃভাষা দিবসে এলাকার যুবসমাজের উদ্যোগে রক্তের গ্রুপ তালিকা হালনাগাদ করা হয়।',
        summary_en: 'On International Mother Language Day, local youth updated the village blood donor registry.'
      },
      {
        id: 'act-03',
        title_bn: 'শীতবস্ত্র ও কম্বল বিতরণ ২০২৫',
        title_en: 'Winter Clothing & Blanket Distribution 2025',
        year: '2025',
        category_bn: 'শীতবস্ত্র বিতরণ',
        category_en: 'Winter Relief',
        date: '2025-12-18',
        beneficiaries_bn: '৩২০টি পরিবার',
        beneficiaries_en: '320 Families',
        budget_bn: '৳ ১,৮৫,০০০',
        budget_en: '৳ 185,000',
        summary_bn: 'তীব্র শীতে অসহায় পরিবারগুলোর ঘরে ঘরে গিয়ে প্রবাসী ও স্থানীয় সদস্যদের সহায়তায় কম্বল পৌঁছে দেওয়া হয়।',
        summary_en: 'Warm blankets were delivered door-to-door with contributions from expatriate and local members.'
      },
      {
        id: 'act-04',
        title_bn: 'বৃক্ষরোপণ ও পরিচ্ছন্নতা সপ্তাহ ২০২৫',
        title_en: 'Tree Plantation & Cleanliness Drive 2025',
        year: '2025',
        category_bn: 'বৃক্ষরোপণ ও পরিচ্ছন্নতা',
        category_en: 'Environment & Tree Plantation',
        date: '2025-08-10',
        beneficiaries_bn: 'পুরো এলাকা',
        beneficiaries_en: 'Entire Community',
        budget_bn: '৳ ৪৫,০০০',
        budget_en: '৳ 45,000',
        summary_bn: 'সাতানীপাড়া প্রধান সড়ক ও কবরস্থানের চারপাশে ৫০০ ফলজ ও বনজ গাছের চারা রোপণ করা হয়।',
        summary_en: '500 fruit and timber saplings were planted along Satanipara main road and cemetery boundaries.'
      }
    ],

    // Blood Donors (W-07, A-08)
    // CRITICAL: When consent is false, phone MUST be absent!
    bloodDonors: [
      {
        id: 'bd-01',
        name_bn: 'মো. রফিকুল ইসলাম',
        name_en: 'Md. Rafiqul Islam',
        group: 'O+',
        area_bn: 'উত্তর পাড়া',
        area_en: 'North Para',
        lastDonation_bn: '১২ আগস্ট ২০২৬',
        lastDonation_en: '12 August 2026',
        isAvailable: true,
        consent: true,
        phone: '01711223344'
      },
      {
        id: 'bd-02',
        name_bn: 'তানভীর হাসান',
        name_en: 'Tanvir Hasan',
        group: 'A+',
        area_bn: 'মধ্য পাড়া',
        area_en: 'Central Para',
        lastDonation_bn: '০৫ সেপ্টেম্বর ২০২৬',
        lastDonation_en: '05 September 2026',
        isAvailable: true,
        consent: true,
        phone: '01819887766'
      },
      {
        id: 'bd-03',
        name_bn: 'মো. সোহেল রানা',
        name_en: 'Md. Sohel Rana',
        group: 'B+',
        area_bn: 'দক্ষিণ পাড়া',
        area_en: 'South Para',
        lastDonation_bn: '২০ জুন ২০২৬',
        lastDonation_en: '20 June 2026',
        isAvailable: true,
        consent: false, // Consent is false -> Phone must be strictly absent!
        phone: null
      },
      {
        id: 'bd-04',
        name_bn: 'মাহমুদুল হক',
        name_en: 'Mahmudul Haque',
        group: 'AB+',
        area_bn: 'পূর্ব পাড়া',
        area_en: 'East Para',
        lastDonation_bn: '১০ অক্টোবর ২০২৬',
        lastDonation_en: '10 October 2026',
        isAvailable: false, // Donated recently (< 90 days)
        consent: true,
        phone: '01912334455'
      },
      {
        id: 'bd-05',
        name_bn: 'মো. তারেক রহমান',
        name_en: 'Md. Tareq Rahman',
        group: 'O-',
        area_bn: 'পশ্চিম পাড়া',
        area_en: 'West Para',
        lastDonation_bn: '১৫ মে ২০২৬',
        lastDonation_en: '15 May 2026',
        isAvailable: true,
        consent: true,
        phone: '01799887711'
      },
      {
        id: 'bd-06',
        name_bn: 'জাহিদুল ইসলাম',
        name_en: 'Zahidul Islam',
        group: 'A-',
        area_bn: 'উত্তর পাড়া',
        area_en: 'North Para',
        lastDonation_bn: '০২ জুলাই ২০২৬',
        lastDonation_en: '02 July 2026',
        isAvailable: true,
        consent: false, // No phone
        phone: null
      },
      {
        id: 'bd-07',
        name_bn: 'শামীম ওসমান',
        name_en: 'Shamim Osman',
        group: 'B-',
        area_bn: 'মধ্য পাড়া',
        area_en: 'Central Para',
        lastDonation_bn: '১৮ আগস্ট ২০২৬',
        lastDonation_en: '18 August 2026',
        isAvailable: true,
        consent: true,
        phone: '01677889900'
      },
      {
        id: 'bd-08',
        name_bn: 'কাজী আরিফুল ইসলাম',
        name_en: 'Kazi Ariful Islam',
        group: 'AB-',
        area_bn: 'দক্ষিণ পাড়া',
        area_en: 'South Para',
        lastDonation_bn: '০১ এপ্রিল ২০২৬',
        lastDonation_en: '01 April 2026',
        isAvailable: true,
        consent: true,
        phone: '01511224466'
      }
    ],

    // Expatriate Support Requests (M-02, M-03, A-02)
    // Statuses strictly: 'Pending', 'Accepted', 'In Progress', 'Completed', 'Cancelled'
    requests: [
      {
        id: 'EXP-2026-0001',
        serviceType_bn: 'জরুরি ওষুধ ও প্রেসক্রিপশন সহায়তা',
        serviceType_en: 'Emergency Medicine & Prescription Support',
        serviceCode: 'medicine',
        beneficiary_bn: 'বাবা (মো. জমির উদ্দিন, বয়স ৭২)',
        beneficiary_en: 'Father (Md. Jamir Uddin, Age 72)',
        applicantId: 'usr-001',
        applicantName_bn: 'আব্দুর রহমান',
        applicantName_en: 'Abdur Rahman',
        applicantPhone: '01712345678',
        address_bn: 'সাতানীপাড়া উত্তর পাড়া, হাজী বাড়ি সংলগ্ন',
        address_en: 'Satanipara North Para, adjacent to Haji Bari',
        date: '2026-11-12',
        isUrgent: true,
        status: 'In Progress', // Pending -> Accepted -> In Progress -> Completed
        assignedHelper: 'helper-01',
        helperName_bn: 'কামরুল হাসান (প্রবাসী সহায়ক)',
        helperName_en: 'Kamrul Hasan (Helper)',
        helperPhone: '01711002233',
        description_bn: 'বাবার হার্টের ওষুধ শেষ হয়ে গেছে। জরুরি প্রেসক্রিপশনের ওষুধগুলো জেলা শহর থেকে সংগ্রহ করে বাড়িতে পৌঁছে দিতে হবে।',
        description_en: 'Father has run out of prescribed heart medication. Please collect from district pharmacy and deliver to home.',
        timeline: [
          { status: 'Pending', date: '2026-11-12 09:30', note_bn: 'আবেদন জমা হয়েছে।', note_en: 'Request submitted.' },
          { status: 'Accepted', date: '2026-11-12 10:15', note_bn: 'সহায়ক কামরুল হাসান দায়িত্ব গ্রহণ করেছেন।', note_en: 'Helper Kamrul Hasan accepted.' },
          { status: 'In Progress', date: '2026-11-12 14:00', note_bn: 'প্রেসক্রিপশন অনুযায়ী ওষুধ সংগ্রহ করা হয়েছে। বাড়িতে পৌঁছানোর পথে।', note_en: 'Medicines purchased. En route to deliver.' }
        ],
        expenses_bn: '৳ ২,৪৫০ (ওষুধ মূল্য ও যাতায়াত)',
        expenses_en: '৳ 2,450 (Medicine & Travel)'
      },
      {
        id: 'EXP-2026-0002',
        serviceType_bn: 'ডাক্তার দেখানো ও রোগী পরিবহন সহায়তা',
        serviceType_en: 'Doctor Appointment & Patient Transport',
        serviceCode: 'medical',
        beneficiary_bn: 'মা (নুরজাহান বেগম, বয়স ৬৪)',
        beneficiary_en: 'Mother (Nurjahan Begum, Age 64)',
        applicantId: 'usr-001',
        applicantName_bn: 'আব্দুর রহমান',
        applicantName_en: 'Abdur Rahman',
        applicantPhone: '01712345678',
        address_bn: 'সাতানীপাড়া মধ্য পাড়া',
        address_en: 'Satanipara Central Para',
        date: '2026-11-08',
        isUrgent: false,
        status: 'Completed',
        assignedHelper: 'helper-01',
        helperName_bn: 'কামরul হাসান (প্রবাসী সহায়ক)',
        helperName_en: 'Kamrul Hasan (Helper)',
        helperPhone: '01711002233',
        description_bn: 'মায়ের চোখের ডাক্তার দেখানোর সিরিয়াল নেওয়া এবং সিএনজি ঠিক করে হাসপাতালে নিয়ে যাওয়া ও পরীক্ষা সম্পন্ন করা।',
        description_en: 'Schedule eye specialist visit and arrange transport for mother to hospital.' ,
        timeline: [
          { status: 'Pending', date: '2026-11-08 11:00', note_bn: 'আবেদন জমা হয়েছে।', note_en: 'Request submitted.' },
          { status: 'Accepted', date: '2026-11-08 11:45', note_bn: 'দায়িত্ব গ্রহণ করা হয়েছে।', note_en: 'Request accepted.' },
          { status: 'In Progress', date: '2026-11-09 09:00', note_bn: 'হাসপাতালে নিয়ে ডাক্তার দেখানো হয়েছে। প্রেসক্রিপশন পাঠানো হয়েছে।', note_en: 'Doctor consultation completed.' },
          { status: 'Completed', date: '2026-11-09 15:30', note_bn: 'রোগীকে নিরাপদে বাড়ি পৌঁছে দেওয়া হয়েছে এবং হিসাব সম্পন্ন হয়েছে।', note_en: 'Patient safely back home.' }
        ],
        expenses_bn: '৳ ১,২০০',
        expenses_en: '৳ 1,200'
      },
      {
        id: 'EXP-2026-0003',
        serviceType_bn: 'জরুরি পারিবারিক বা সামাজিক পাশে দাঁড়ানো',
        serviceType_en: 'Emergency Family or Social Presence',
        serviceCode: 'family',
        beneficiary_bn: 'পরিবার',
        beneficiary_en: 'Family',
        applicantId: 'usr-002',
        applicantName_bn: 'মো. শাহীন আলম',
        applicantName_en: 'Md. Shahin Alam',
        applicantPhone: '01822334455',
        address_bn: 'সাতানীপাড়া দক্ষিণ পাড়া',
        address_en: 'Satanipara South Para',
        date: '2026-11-14',
        isUrgent: true,
        status: 'Pending', // Fresh request waiting for helper
        assignedHelper: null,
        helperName_bn: null,
        helperName_en: null,
        description_bn: 'বাড়ির বিদ্যুৎ সংযোগে হঠাৎ শর্টসার্কিট হয়ে লাইন বন্ধ হয়েছে। পল্লী বিদ্যুৎ অফিসের সাথে যোগাযোগ করে লাইন মেরামত তদারকি প্রয়োজন।',
        description_en: 'Power line fault at home. Need someone to coordinate with Rural Electrification office.',
        timeline: [
          { status: 'Pending', date: '2026-11-14 08:15', note_bn: 'নতুন আবেদন জমা হয়েছে।', note_en: 'New request submitted.' }
        ],
        expenses_bn: '৳ ০',
        expenses_en: '৳ 0'
      }
    ],

    // Financial Accounts & Transparency (W-10, A-09)
    accounts: {
      fiscalYear: '2026',
      totalIncome_bn: '৳ ৪,৭৫,০০০',
      totalIncome_en: '৳ 475,000',
      totalExpense_bn: '৳ ৩,৮৫,০০০',
      totalExpense_en: '৳ 385,000',
      currentBalance_bn: '৳ ৯০,০০০',
      currentBalance_en: '৳ 90,000',
      transactions: [
        {
          id: 'tx-01',
          date: '2026-11-01',
          type: 'income',
          category_bn: 'প্রবাসী সদস্যদের মাসিক অনুদান',
          category_en: 'Expatriate Member Monthly Contribution',
          project_bn: 'সাধারণ তহবিল',
          project_en: 'General Fund',
          amount_bn: '৳ ৫০,০০০',
          amount_en: '৳ 50,000',
          donor_bn: 'প্রবাসী কল্যাণ পরিষদ (সম্মতিপ্রাপ্ত)',
          donor_en: 'Expatriate Council (Consented)'
        },
        {
          id: 'tx-02',
          date: '2026-10-25',
          type: 'expense',
          category_bn: 'শিক্ষা সহায়তা',
          category_en: 'Education Support',
          project_bn: 'মেধাবৃত্তি ২০২৬',
          project_en: 'Merit Scholarship 2026',
          amount_bn: '৳ ৩৫,০০০',
          amount_en: '৳ 35,000',
          donor_bn: '—',
          donor_en: '—'
        },
        {
          id: 'tx-03',
          date: '2026-10-15',
          type: 'income',
          category_bn: 'আজীবন সদস্য ফি',
          category_en: 'Life Member Fee',
          project_bn: 'স্থায়ী তহবিল',
          project_en: 'Endowment Fund',
          amount_bn: '৳ ২৫,০০০',
          amount_en: '৳ 25,000',
          donor_bn: 'মো. আনোয়ার হোসেন (সম্মতিপ্রাপ্ত)',
          donor_en: 'Md. Anwar Hossain (Consented)'
        },
        {
          id: 'tx-04',
          date: '2026-09-30',
          type: 'expense',
          category_bn: 'চিকিৎসা সহায়তা অনুদান',
          category_en: 'Medical Aid Grant',
          project_bn: 'জরুরি সহায়তা',
          project_en: 'Emergency Relief',
          amount_bn: '৳ ২০,০০০',
          amount_en: '৳ 20,000',
          donor_bn: '—',
          donor_en: '—'
        }
      ]
    },

    // Executive Committee (W-03, A-05)
    // Section 19: Clearly labelled as sample / placeholder
    committee: [
      {
        role_bn: 'সভাপতি',
        role_en: 'President',
        name_bn: 'হাজী মো. মকবুল হোসেন (নমুনা নাম)',
        name_en: 'Haji Md. Mokbul Hossain (Sample Name)',
        term: '2025–2027',
        area_bn: 'সাতানীপাড়া মধ্য পাড়া',
        area_en: 'Satanipara Central Para'
      },
      {
        role_bn: 'সাধারণ সম্পাদক',
        role_en: 'General Secretary',
        name_bn: 'ইঞ্জিনিয়ার মো. জয়নাল আবেদীন (নমুনা নাম)',
        name_en: 'Engr. Md. Joynal Abedin (Sample Name)',
        term: '2025–2027',
        area_bn: 'সাতানীপাড়া উত্তর পাড়া',
        area_en: 'Satanipara North Para'
      },
      {
        role_bn: 'কোষাধ্যক্ষ',
        role_en: 'Treasurer',
        name_bn: 'মাওলানা আবুল কালাম (নমুনা নাম)',
        name_en: 'Mawlana Abul Kalam (Sample Name)',
        term: '2025–2027',
        area_bn: 'সাতানীপাড়া পূর্ব পাড়া',
        area_en: 'Satanipara East Para'
      },
      {
        role_bn: 'যুগ্ম সাধারণ সম্পাদক',
        role_en: 'Joint Secretary',
        name_bn: 'মো. দেলোয়ার হোসেন (নমুনা নাম)',
        name_en: 'Md. Delwar Hossain (Sample Name)',
        term: '2025–2027',
        area_bn: 'সাতানীপাড়া দক্ষিণ পাড়া',
        area_en: 'Satanipara South Para'
      }
    ],

    // Dashboard Users & Roles (A-10)
    // ONLY TWO ADMIN ROLES: 'superadmin' and 'helper'!
    adminUsers: [
      {
        id: 'adm-01',
        name_bn: 'এডমিন ইউজার (সুপার এডমিন)',
        name_en: 'Admin User (Super Admin)',
        mobile: '01700000001',
        role: 'superadmin',
        isActive: true,
        lastLogin: '2026-11-14 06:15'
      },
      {
        id: 'adm-02',
        name_bn: 'কামরুল হাসান (সহায়ক)',
        name_en: 'Kamrul Hasan (Helper)',
        mobile: '01700000002',
        role: 'helper',
        isActive: true,
        lastLogin: '2026-11-14 05:40'
      }
    ],

    // Pending Member Registrations (W-12 -> A-03)
    pendingRegistrations: [
      {
        id: 'reg-01',
        name_bn: 'মো. তৌহিদুল ইসলাম',
        name_en: 'Md. Touhidul Islam',
        mobile: '01788990011',
        memberType_bn: 'প্রবাসী সদস্য (কুয়েত)',
        memberType_en: 'Expatriate Member (Kuwait)',
        appliedDate: '2026-11-13',
        status: 'pending_approval'
      }
    ]
  };

  // Load from LocalStorage or initialize with defaults
  function getDB() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    saveDB(defaultData);
    return defaultData;
  }

  function saveDB(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  function resetDB() {
    localStorage.removeItem(STORAGE_KEY);
    return saveDB(defaultData);
  }

  return {
    getDB,
    saveDB,
    resetDB,
    defaultData
  };
})();

// Export globally
if (typeof window !== 'undefined') {
  window.MockData = MockData;
}
