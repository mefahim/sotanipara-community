/**
 * Satanipara Community Design System — Main Application Orchestrator
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme
  if (window.ThemeManager) {
    ThemeManager.init();
  }

  // 2. Initialize Language
  if (window.I18n) {
    I18n.init();
  }

  // 3. Initialize Ticker
  if (window.Navigation && window.Navigation.initTicker) {
    Navigation.initTicker();
  }

  // 4. Determine Current Screen ID from body data-screen attribute
  const screenId = document.body.getAttribute('data-screen') || '';
  if (window.Navigation && window.Navigation.renderHUD) {
    Navigation.renderHUD(screenId);
  }

  // 5. Mobile Drawer Toggle Handlers
  const drawerToggleBtns = document.querySelectorAll('.mobile-drawer-toggle');
  drawerToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.Navigation) Navigation.toggleDrawer();
    });
  });

  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', () => {
      if (window.Navigation) Navigation.toggleDrawer();
    });
  }

  // 6. Header Theme and Language Toggles
  const headerThemeToggle = document.getElementById('headerThemeToggle');
  if (headerThemeToggle) {
    headerThemeToggle.addEventListener('click', () => {
      ThemeManager.toggleTheme();
    });
  }

  const headerLangToggle = document.getElementById('headerLangToggle');
  if (headerLangToggle) {
    headerLangToggle.addEventListener('click', () => {
      const next = I18n.getLanguage() === 'bn' ? 'en' : 'bn';
      I18n.setLanguage(next);
      headerLangToggle.textContent = next === 'bn' ? 'EN' : 'বাং';
    });
  }

  // 7. Password visibility toggles
  document.querySelectorAll('.password-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.closest('.password-wrapper').querySelector('input');
      if (input.type === 'password') {
        input.type = 'text';
        btn.innerHTML = Components.getIcon('eyeOff');
      } else {
        input.type = 'password';
        btn.innerHTML = Components.getIcon('eye');
      }
    });
  });

  // 8. Admin Sidebar toggle for mobile
  const adminSidebarToggle = document.getElementById('adminSidebarToggle');
  const adminSidebar = document.querySelector('.admin-sidebar');
  if (adminSidebarToggle && adminSidebar) {
    adminSidebarToggle.addEventListener('click', () => {
      adminSidebar.classList.toggle('is-open');
    });
  }
});
