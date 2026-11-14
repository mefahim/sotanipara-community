/**
 * Satanipara Community Design System — Navigation Controller & Prototype HUD
 * Handles responsive header, mobile drawer, notice ticker, and global screen switcher HUD.
 */

const Navigation = (function () {
  // Base path detection for GitHub Pages or subpath hosting
  function getBasePath() {
    const pathname = window.location.pathname;
    const match = pathname.match(/^(\/[^\/]+)\/(pages\/|docs\/|index\.html|TYPOGRAPHY_SPECIMEN\.html|$)/);
    if (match && match[1] && !['/pages', '/docs', '/css', '/js', '/assets'].includes(match[1])) {
      return match[1];
    }
    return '';
  }

  function resolveUrl(url) {
    if (!url || typeof url !== 'string') return url;
    if (url.startsWith('/')) {
      const base = getBasePath();
      return base ? base + url : url;
    }
    return url;
  }

  if (typeof window !== 'undefined') {
    window.resolveUrl = resolveUrl;
    window.getBasePath = getBasePath;
  }

  // Screen Registry (All 35 Screens)
  const screens = [
    // Public Website (W-01 to W-12)
    { id: 'W-01', group: 'public', title_bn: 'W-01: হোমপেজ', title_en: 'W-01: Home', path: '/pages/public/w01-home.html' },
    { id: 'W-02', group: 'public', title_bn: 'W-02: এলাকার প্রোফাইল', title_en: 'W-02: Community Profile', path: '/pages/public/w02-community.html' },
    { id: 'W-03', group: 'public', title_bn: 'W-03: সংগঠন', title_en: 'W-03: Organization', path: '/pages/public/w03-organization.html' },
    { id: 'W-04', group: 'public', title_bn: 'W-04: বার্ষিক কার্যক্রম', title_en: 'W-04: Activities', path: '/pages/public/w04-activities.html' },
    { id: 'W-05', group: 'public', title_bn: 'W-05: কার্যক্রমের বিবরণ', title_en: 'W-05: Activity Detail', path: '/pages/public/w05-activity-detail.html' },
    { id: 'W-06', group: 'public', title_bn: 'W-06: প্রবাসী সহায়তা', title_en: 'W-06: Expatriate Support', path: '/pages/public/w06-expatriate.html' },
    { id: 'W-07', group: 'public', title_bn: 'W-07: রক্তদাতা', title_en: 'W-07: Blood Donors', path: '/pages/public/w07-blood-donors.html' },
    { id: 'W-08', group: 'public', title_bn: 'W-08: নোটিশ ও সংবাদ', title_en: 'W-08: Notices & News', path: '/pages/public/w08-notices.html' },
    { id: 'W-09', group: 'public', title_bn: 'W-09: গ্যালারি', title_en: 'W-09: Gallery', path: '/pages/public/w09-gallery.html' },
    { id: 'W-10', group: 'public', title_bn: 'W-10: হিসাব ও স্বচ্ছতা', title_en: 'W-10: Accounts & Transparency', path: '/pages/public/w10-accounts.html' },
    { id: 'W-11', group: 'public', title_bn: 'W-11: যোগাযোগ ও জরুরি নম্বর', title_en: 'W-11: Contact & Emergency', path: '/pages/public/w11-contact.html' },
    { id: 'W-12', group: 'public', title_bn: 'W-12: সদস্য লগইন ও নিবন্ধন', title_en: 'W-12: Login & Register', path: '/pages/public/w12-login.html' },

    // Member Portal (M-01 to M-05)
    { id: 'M-01', group: 'member', title_bn: 'M-01: সদস্য ড্যাশবোর্ড', title_en: 'M-01: Member Dashboard', path: '/pages/member/m01-dashboard.html' },
    { id: 'M-02', group: 'member', title_bn: 'M-02: প্রবাসী আবেদন উইজার্ড', title_en: 'M-02: Request Support Wizard', path: '/pages/member/m02-request-wizard.html' },
    { id: 'M-03', group: 'member', title_bn: 'M-03: আমার আবেদনসমূহ ও বিবরণ', title_en: 'M-03: My Requests & Detail', path: '/pages/member/m03-my-requests.html' },
    { id: 'M-04', group: 'member', title_bn: 'M-04: আমার প্রোফাইল', title_en: 'M-04: My Profile', path: '/pages/member/m04-profile.html' },
    { id: 'M-05', group: 'member', title_bn: 'M-05: পরিবারের তথ্য', title_en: 'M-05: Family Info', path: '/pages/member/m05-family.html' },

    // Admin Dashboard (A-01 to A-12)
    { id: 'A-01', group: 'admin', title_bn: 'A-01: ওভারভিউ', title_en: 'A-01: Overview', path: '/pages/admin/a01-overview.html' },
    { id: 'A-02', group: 'admin', title_bn: 'A-02: প্রবাসী আবেদন পরিচালনা', title_en: 'A-02: Expatriate Requests', path: '/pages/admin/a02-requests.html' },
    { id: 'A-03', group: 'admin', title_bn: 'A-03: সদস্য ও পরিবার', title_en: 'A-03: Members & Families', path: '/pages/admin/a03-members.html' },
    { id: 'A-04', group: 'admin', title_bn: 'A-04: কমিউনিটি তথ্য', title_en: 'A-04: Community Info', path: '/pages/admin/a04-community.html' },
    { id: 'A-05', group: 'admin', title_bn: 'A-05: কমিটি ও সংগঠন', title_en: 'A-05: Committee & Org', path: '/pages/admin/a05-committee.html' },
    { id: 'A-06', group: 'admin', title_bn: 'A-06: কার্যক্রম পরিচালনা', title_en: 'A-06: Activities Mgmt', path: '/pages/admin/a06-activities.html' },
    { id: 'A-07', group: 'admin', title_bn: 'A-07: নোটিশ, সংবাদ ও গ্যালারি', title_en: 'A-07: Notices & Gallery', path: '/pages/admin/a07-notices.html' },
    { id: 'A-08', group: 'admin', title_bn: 'A-08: রক্তদাতা ও জরুরি রক্ত', title_en: 'A-08: Blood Donors', path: '/pages/admin/a08-blood.html' },
    { id: 'A-09', group: 'admin', title_bn: 'A-09: হিসাব ও অডিট', title_en: 'A-09: Accounts & Audit', path: '/pages/admin/a09-accounts.html' },
    { id: 'A-10', group: 'admin', title_bn: 'A-10: ব্যবহারকারী ও রোল (Super Admin)', title_en: 'A-10: Users & Roles (Super Admin)', path: '/pages/admin/a10-users.html' },
    { id: 'A-11', group: 'admin', title_bn: 'A-11: বার্ষিক ও বিশেষ রিপোর্ট', title_en: 'A-11: Reports', path: '/pages/admin/a11-reports.html' },
    { id: 'A-12', group: 'admin', title_bn: 'A-12: সাইট সেটিংস', title_en: 'A-12: Site Settings', path: '/pages/admin/a12-settings.html' },

    // Mobile App Concepts (P-01 to P-06)
    { id: 'P-01', group: 'app', title_bn: 'P-01: স্প্ল্যাশ ও অনবোর্ডিং', title_en: 'P-01: Splash & Onboarding', path: '/pages/app/p01-splash.html' },
    { id: 'P-02', group: 'app', title_bn: 'P-02: হোম ট্যাব', title_en: 'P-02: App Home', path: '/pages/app/p02-home.html' },
    { id: 'P-03', group: 'app', title_bn: 'P-03: কমিউনিটি ট্যাব', title_en: 'P-03: App Community', path: '/pages/app/p03-community.html' },
    { id: 'P-04', group: 'app', title_bn: 'P-04: সার্ভিসেস ট্যাব', title_en: 'P-04: App Services', path: '/pages/app/p04-services.html' },
    { id: 'P-05', group: 'app', title_bn: 'P-05: প্রোফাইল ও সেটিংস ট্যাব', title_en: 'P-05: App Profile & Settings', path: '/pages/app/p05-profile.html' },
    { id: 'P-06', group: 'app', title_bn: 'P-06: পুশ নোটিফিকেশন স্টেট', title_en: 'P-06: Push Notification State', path: '/pages/app/p06-notifications.html' }
  ];

  // Dynamic Mobile Drawer Setup & Header Alignment
  function updateDrawerPosition(drawer) {
    const header = document.querySelector('.site-header') || document.querySelector('header');
    if (header && drawer) {
      const rect = header.getBoundingClientRect();
      const topPos = Math.max(0, Math.round(rect.bottom));
      drawer.style.top = topPos + 'px';
      drawer.style.height = `calc(100vh - ${topPos}px)`;
    }
  }

  function createMobileDrawer() {
    let drawer = document.getElementById('mobileDrawer');
    if (drawer) return drawer;

    const currentScreen = document.body.getAttribute('data-screen') || '';
    const crestPath = resolveUrl('/assets/images/satanipara-crest.svg');

    drawer = document.createElement('div');
    drawer.className = 'mobile-drawer';
    drawer.id = 'mobileDrawer';
    drawer.innerHTML = `
      <div class="drawer-header">
        <div style="display: flex; align-items: center; gap: 8px;">
          <img src="${crestPath}" alt="Crest" style="width: 32px; height: 32px;">
          <span style="font-weight: 700; font-size: 15px; color: var(--color-green-700);" data-i18n="brand.name">সাতানীপাড়া কমিউনিটি</span>
        </div>
        <button class="btn btn-icon btn-ghost" id="drawerCloseBtn" aria-label="Close Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <div class="drawer-nav-group">
        <div class="drawer-nav-group-title">মূল সংগঠন ও এলাকা</div>
        <ul class="drawer-nav-list">
          <li><a href="${resolveUrl('/pages/public/w01-home.html')}" class="drawer-nav-link ${currentScreen === 'W-01' ? 'active' : ''}">হোম</a></li>
          <li><a href="${resolveUrl('/pages/public/w02-community.html')}" class="drawer-nav-link ${currentScreen === 'W-02' ? 'active' : ''}">এলাকার প্রোফাইল</a></li>
          <li><a href="${resolveUrl('/pages/public/w03-organization.html')}" class="drawer-nav-link ${currentScreen === 'W-03' ? 'active' : ''}">সংগঠন ও সংবিধান</a></li>
          <li><a href="${resolveUrl('/pages/public/w04-activities.html')}" class="drawer-nav-link ${currentScreen === 'W-04' ? 'active' : ''}">বার্ষিক কার্যক্রম</a></li>
        </ul>
      </div>

      <div class="drawer-nav-group">
        <div class="drawer-nav-group-title">জনকল্যাণ ও সেবাসমূহ</div>
        <ul class="drawer-nav-list">
          <li><a href="${resolveUrl('/pages/public/w06-expatriate.html')}" class="drawer-nav-link ${currentScreen === 'W-06' ? 'active' : ''}">প্রবাসী সহায়তা সেল</a></li>
          <li><a href="${resolveUrl('/pages/public/w07-blood-donors.html')}" class="drawer-nav-link ${currentScreen === 'W-07' ? 'active' : ''}">জরুরি রক্তদাতা তালিকা</a></li>
          <li><a href="${resolveUrl('/pages/public/w08-notices.html')}" class="drawer-nav-link ${currentScreen === 'W-08' ? 'active' : ''}">নোটিশ ও সংবাদ</a></li>
        </ul>
      </div>

      <div class="drawer-nav-group">
        <div class="drawer-nav-group-title">স্বচ্ছতা ও যোগাযোগ</div>
        <ul class="drawer-nav-list">
          <li><a href="${resolveUrl('/pages/public/w10-accounts.html')}" class="drawer-nav-link ${currentScreen === 'W-10' ? 'active' : ''}">হিসাব ও স্বচ্ছতা</a></li>
          <li><a href="${resolveUrl('/pages/public/w09-gallery.html')}" class="drawer-nav-link ${currentScreen === 'W-09' ? 'active' : ''}">ফটো গ্যালারি</a></li>
          <li><a href="${resolveUrl('/pages/public/w11-contact.html')}" class="drawer-nav-link ${currentScreen === 'W-11' ? 'active' : ''}">যোগাযোগ ও জরুরি নম্বর</a></li>
        </ul>
      </div>

      <div class="drawer-footer-actions">
        <a href="${resolveUrl('/pages/member/m01-dashboard.html')}" class="btn btn-primary btn-block">সদস্য ড্যাশবোর্ড</a>
        <a href="${resolveUrl('/pages/public/w12-login.html')}" class="btn btn-outline btn-block">লগইন / নিবন্ধন</a>
      </div>
    `;

    document.body.appendChild(drawer);
    bindDrawerEvents(drawer);
    return drawer;
  }

  function bindDrawerEvents(drawer) {
    if (!drawer) return;
    const closeBtn = drawer.querySelector('#drawerCloseBtn');
    if (closeBtn && !closeBtn._bound) {
      closeBtn._bound = true;
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleDrawer(false);
      });
    }

    // Auto-close menu after navigation
    drawer.querySelectorAll('a').forEach(link => {
      if (!link._bound) {
        link._bound = true;
        link.addEventListener('click', () => {
          toggleDrawer(false);
        });
      }
    });
  }

  // Mobile Drawer Toggle
  function toggleDrawer(forceState) {
    let drawer = document.getElementById('mobileDrawer');
    if (!drawer) {
      drawer = createMobileDrawer();
    }
    if (!drawer) return;

    bindDrawerEvents(drawer);

    const willOpen = typeof forceState === 'boolean' ? forceState : !drawer.classList.contains('is-open');
    if (!willOpen) {
      drawer.classList.remove('is-open');
      document.body.classList.remove('drawer-open');
      document.documentElement.classList.remove('drawer-open');
    } else {
      updateDrawerPosition(drawer);
      drawer.classList.add('is-open');
      document.body.classList.add('drawer-open');
      document.documentElement.classList.add('drawer-open');
    }
  }

  // Global Escape Key Listener and Outside Click for Drawer and Modals
  if (typeof document !== 'undefined') {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const drawer = document.getElementById('mobileDrawer');
        if (drawer && drawer.classList.contains('is-open')) {
          toggleDrawer(false);
        }
      }
    });

    document.addEventListener('click', (e) => {
      const drawer = document.getElementById('mobileDrawer');
      if (drawer && drawer.classList.contains('is-open')) {
        const toggleBtn = e.target.closest('.mobile-drawer-toggle');
        if (!toggleBtn && !drawer.contains(e.target)) {
          toggleDrawer(false);
        }
      }
    });

    window.addEventListener('resize', () => {
      const drawer = document.getElementById('mobileDrawer');
      if (drawer && drawer.classList.contains('is-open')) {
        updateDrawerPosition(drawer);
      }
    });
  }

  // Notice Ticker Controller
  let tickerIndex = 0;
  let tickerPaused = false;
  let tickerInterval = null;

  function initTicker() {
    const tickerEl = document.getElementById('noticeTicker');
    if (!tickerEl) return;

    const db = MockData.getDB();
    const tickerNotices = db.notices.filter(n => n.isTicker);
    if (!tickerNotices || tickerNotices.length === 0) {
      tickerEl.hidden = true;
      return;
    }

    tickerEl.hidden = false;
    const contentEl = tickerEl.querySelector('.ticker-content');
    const playPauseBtn = tickerEl.querySelector('.ticker-play-pause');

    function renderTickerItem() {
      const notice = tickerNotices[tickerIndex];
      const lang = I18n.getLanguage();
      const title = lang === 'bn' ? notice.title_bn : notice.title_en;
      contentEl.innerHTML = `<a href="${resolveUrl('/pages/public/w08-notices.html?id=' + notice.id)}" style="color: inherit; text-decoration: none;">${title}</a>`;
    }

    renderTickerItem();

    if (tickerInterval) clearInterval(tickerInterval);
    tickerInterval = setInterval(() => {
      if (!tickerPaused) {
        tickerIndex = (tickerIndex + 1) % tickerNotices.length;
        renderTickerItem();
      }
    }, 4500);

    if (playPauseBtn) {
      playPauseBtn.addEventListener('click', () => {
        tickerPaused = !tickerPaused;
        playPauseBtn.innerHTML = tickerPaused ? Components.getIcon('play') : Components.getIcon('pause');
      });
    }

    window.addEventListener('languageChanged', () => {
      renderTickerItem();
    });
  }

  // Prototype HUD (Floating Toggle Button & Bottom Sheet Panel)
  function renderHUD(currentScreenId) {
    if (document.getElementById('hudToggleBtn') || document.getElementById('hudSheet')) return;

    const currentLang = I18n.getLanguage();
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const db = MockData.getDB();
    const currentRole = db.session.user ? db.session.user.role : 'guest';

    // 1. Floating Toggle Trigger Button (Pill at bottom-right)
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'hudToggleBtn';
    toggleBtn.className = 'hud-toggle-pill';
    toggleBtn.setAttribute('aria-label', 'Toggle Prototype Controls');
    toggleBtn.innerHTML = `
      <span class="hud-pulse-dot"></span>
      <span id="hudToggleBtnText">⚙️ HUD মেনু</span>
    `;

    // 2. Backdrop Overlay
    const backdrop = document.createElement('div');
    backdrop.id = 'hudBackdrop';
    backdrop.className = 'hud-backdrop';

    // 3. Slide-up Sheet Panel
    const sheet = document.createElement('div');
    sheet.id = 'hudSheet';
    sheet.className = 'hud-sheet';
    sheet.innerHTML = `
      <div class="hud-sheet-header">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #4CAF7D;"></span>
          <span style="font-weight: 700; color: #E9C95C; font-size: 14.5px;">প্রোটোটাইপ কন্ট্রোল প্যানেল</span>
        </div>
        <button class="hud-close-btn" id="hudCloseBtn">✕ বন্ধ করুন</button>
      </div>

      <div class="hud-sheet-body">
        <!-- Screen Switcher -->
        <div class="hud-field-group">
          <label class="hud-field-label" for="hudScreenSelect">১. স্ক্রিন নির্বাচন (৩৫টি স্ক্রিনের যেকোনোটিতে যান):</label>
          <select class="hud-select" id="hudScreenSelect">
            <optgroup label="Public Website (12 Screens)">
              ${screens.filter(s => s.group === 'public').map(s => `
                <option value="${s.path}" ${s.id === currentScreenId ? 'selected' : ''}>${s.id}: ${currentLang === 'bn' ? s.title_bn.split(': ')[1] : s.title_en.split(': ')[1]}</option>
              `).join('')}
            </optgroup>
            <optgroup label="Member Portal (5 Screens)">
              ${screens.filter(s => s.group === 'member').map(s => `
                <option value="${s.path}" ${s.id === currentScreenId ? 'selected' : ''}>${s.id}: ${currentLang === 'bn' ? s.title_bn.split(': ')[1] : s.title_en.split(': ')[1]}</option>
              `).join('')}
            </optgroup>
            <optgroup label="Admin Dashboard (12 Screens)">
              ${screens.filter(s => s.group === 'admin').map(s => `
                <option value="${s.path}" ${s.id === currentScreenId ? 'selected' : ''}>${s.id}: ${currentLang === 'bn' ? s.title_bn.split(': ')[1] : s.title_en.split(': ')[1]}</option>
              `).join('')}
            </optgroup>
            <optgroup label="Mobile App Concepts (6 Screens)">
              ${screens.filter(s => s.group === 'app').map(s => `
                <option value="${s.path}" ${s.id === currentScreenId ? 'selected' : ''}>${s.id}: ${currentLang === 'bn' ? s.title_bn.split(': ')[1] : s.title_en.split(': ')[1]}</option>
              `).join('')}
            </optgroup>
          </select>
        </div>

        <!-- Role Switcher -->
        <div class="hud-field-group">
          <label class="hud-field-label" for="hudRoleSelect">২. প্রশাসনিক ভূমিকা / রোল পরিবর্তন:</label>
          <select class="hud-select" id="hudRoleSelect">
            <option value="guest" ${currentRole === 'guest' ? 'selected' : ''}>Public Guest (সাধারণ দর্শনার্থী - লগইন ছাড়া)</option>
            <option value="member" ${currentRole === 'member' ? 'selected' : ''}>Member (নিবন্ধিত প্রবাসী বা স্থানীয় সদস্য)</option>
            <option value="helper" ${currentRole === 'helper' ? 'selected' : ''}>Expatriate Helper (প্রবাসী সহায়ক — শুধু আবেদন পরিচালনা)</option>
            <option value="superadmin" ${currentRole === 'superadmin' ? 'selected' : ''}>Super Admin (সর্বোচ্চ প্রশাসনিক ক্ষমতা)</option>
          </select>
        </div>

        <!-- Flows Launcher -->
        <div class="hud-field-group">
          <label class="hud-field-label" for="hudFlowSelect">৩. ইন্টারেক্টিভ ফ্লো টেস্ট (F-01..F-08):</label>
          <select class="hud-select" id="hudFlowSelect">
            <option value="">-- ফ্লো বেছে নিয়ে শুরু করুন --</option>
            <option value="F-01">F-01: রক্তদাতা খোঁজা (Public)</option>
            <option value="F-02">F-02: প্রবাসী সহায়তা আবেদন (৩ ধাপের উইজার্ড)</option>
            <option value="F-03">F-03: সহায়ক আবেদন গ্রহণ ও পরিচালনা</option>
            <option value="F-04">F-04: সদস্য নিবন্ধন ও প্রশাসনিক অনুমোদন</option>
            <option value="F-05">F-05: নতুন ইউজার তৈরি (A-10 সুপার এডমিন)</option>
            <option value="F-06">F-06: নোটিশ প্রকাশ ও টিকার আপডেট</option>
            <option value="F-07">F-07: আর্থিক হিসাব এন্ট্রি ও স্বচ্ছতা</option>
            <option value="F-08">F-08: ভুলে যাওয়া পাসওয়ার্ড পুনরুদ্ধার (OTP ছাড়া)</option>
          </select>
        </div>

        <!-- Quick Controls -->
        <div class="hud-field-group">
          <label class="hud-field-label">৪. কুইক অ্যাকশন:</label>
          <div class="hud-quick-buttons">
            <button class="hud-btn" id="hudLangToggle">
              ${currentLang === 'bn' ? 'English (EN)' : 'বাংলা (BN)'}
            </button>
            <button class="hud-btn" id="hudThemeToggle">
              ${currentTheme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
            <button class="hud-btn hud-btn-danger" id="hudResetDb">
              মক রিসেট
            </button>
          </div>
        </div>

        <button class="hud-btn" id="hudBottomCloseBtn" style="margin-top: 6px; width: 100%; padding: 10px; background: rgba(255, 255, 255, 0.12);">
          প্যানেল বন্ধ করুন
        </button>
      </div>
    `;

    document.body.appendChild(toggleBtn);
    document.body.appendChild(backdrop);
    document.body.appendChild(sheet);

    // Toggle interaction logic
    let isHudOpen = false;

    function toggleHud(open) {
      isHudOpen = typeof open === 'boolean' ? open : !isHudOpen;
      if (isHudOpen) {
        sheet.classList.add('is-open');
        backdrop.classList.add('is-open');
        document.getElementById('hudToggleBtnText').textContent = '✕ বন্ধ করুন';
      } else {
        sheet.classList.remove('is-open');
        backdrop.classList.remove('is-open');
        document.getElementById('hudToggleBtnText').textContent = '⚙️ HUD মেনু';
      }
    }

    toggleBtn.addEventListener('click', () => toggleHud());
    document.getElementById('hudCloseBtn').addEventListener('click', () => toggleHud(false));
    document.getElementById('hudBottomCloseBtn').addEventListener('click', () => toggleHud(false));
    backdrop.addEventListener('click', () => toggleHud(false));

    // Event listeners for HUD actions
    document.getElementById('hudScreenSelect').addEventListener('change', (e) => {
      if (e.target.value) {
        toggleHud(false);
        window.location.href = resolveUrl(e.target.value);
      }
    });

    document.getElementById('hudRoleSelect').addEventListener('change', (e) => {
      const newRole = e.target.value;
      const db = MockData.getDB();
      if (newRole === 'guest') {
        db.session.user = null;
      } else {
        db.session.user = {
          id: 'usr-001',
          name_bn: newRole === 'superadmin' ? 'এডমিন ইউজার' : (newRole === 'helper' ? 'কামরুল হাসান' : 'আব্দুর রহমান'),
          name_en: newRole === 'superadmin' ? 'Admin User' : (newRole === 'helper' ? 'Kamrul Hasan' : 'Abdur Rahman'),
          mobile: newRole === 'superadmin' ? '01700000001' : (newRole === 'helper' ? '01700000002' : '01712345678'),
          role: newRole,
          memberType: 'expatriate',
          consentPhone: true
        };
      }
      MockData.saveDB(db);
      Components.showToast(`ভূমিকা পরিবর্তিত হয়েছে: ${newRole.toUpperCase()}`, 'info');
      setTimeout(() => window.location.reload(), 400);
    });

    document.getElementById('hudFlowSelect').addEventListener('change', (e) => {
      const flowId = e.target.value;
      if (!flowId) return;
      toggleHud(false);
      if (window.Flows && window.Flows.startFlow) {
        window.Flows.startFlow(flowId);
      }
    });

    document.getElementById('hudLangToggle').addEventListener('click', () => {
      const nextLang = I18n.getLanguage() === 'bn' ? 'en' : 'bn';
      I18n.setLanguage(nextLang);
      document.getElementById('hudLangToggle').textContent = nextLang === 'bn' ? 'English (EN)' : 'বাংলা (BN)';
      Components.showToast(nextLang === 'bn' ? 'ভাষা: বাংলা' : 'Language: English', 'success');
    });

    document.getElementById('hudThemeToggle').addEventListener('click', () => {
      ThemeManager.toggleTheme();
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.getElementById('hudThemeToggle').textContent = isDark ? '☀️ Light' : '🌙 Dark';
    });

    document.getElementById('hudResetDb').addEventListener('click', () => {
      if (confirm('আপনি কি মক ডেটাবেস রিসেট করতে চান? (সব সংরক্ষিত আবেদন ও নোটিশ প্রাথমিক অবস্থায় ফিরে যাবে)')) {
        MockData.resetDB();
        Components.showToast('মক ডেটাবেস রিসেট সম্পন্ন হয়েছে', 'success');
        setTimeout(() => window.location.reload(), 500);
      }
    });
  }

  return {
    screens,
    getBasePath,
    resolveUrl,
    toggleDrawer,
    initTicker,
    renderHUD
  };
})();

if (typeof window !== 'undefined') {
  window.Navigation = Navigation;
}
