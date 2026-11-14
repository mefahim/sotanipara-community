/**
 * Satanipara Community Design System — Interactive User Journeys (F-01 to F-08)
 * Connects the 8 flows across screens with mock state progression.
 */

const Flows = (function () {
  function resolveUrl(url) {
    if (window.Navigation && window.Navigation.resolveUrl) {
      return window.Navigation.resolveUrl(url);
    }
    if (window.resolveUrl) {
      return window.resolveUrl(url);
    }
    return url;
  }

  function startFlow(flowId) {
    switch (flowId) {
      case 'F-01':
        // F-01: Public Blood Donor Search
        Components.showToast('শুরু হচ্ছে: F-01 রক্তদাতা খোঁজা ফ্লো', 'info');
        setTimeout(() => {
          window.location.href = resolveUrl('/pages/public/w07-blood-donors.html?flow=F-01');
        }, 300);
        break;

      case 'F-02':
        // F-02: Expatriate Support Request
        Components.showToast('শুরু হচ্ছে: F-02 প্রবাসী সহায়তা আবেদন ফ্লো', 'info');
        setTimeout(() => {
          window.location.href = resolveUrl('/pages/public/w06-expatriate.html?flow=F-02');
        }, 300);
        break;

      case 'F-03':
        // F-03: Admin/Helper Request Management
        Components.showToast('শুরু হচ্ছে: F-03 সহায়ক আবেদন পরিচালনা ফ্লো', 'info');
        // Set user to Helper role
        const db3 = MockData.getDB();
        db3.session.user = {
          id: 'adm-02',
          name_bn: 'কামরুল হাসান (প্রবাসী সহায়ক)',
          name_en: 'Kamrul Hasan (Helper)',
          mobile: '01700000002',
          role: 'helper',
          memberType: 'expatriate',
          consentPhone: true
        };
        MockData.saveDB(db3);
        setTimeout(() => {
          window.location.href = resolveUrl('/pages/admin/a02-requests.html?flow=F-03');
        }, 300);
        break;

      case 'F-04':
        // F-04: Member Registration and Admin Approval
        Components.showToast('শুরু হচ্ছে: F-04 সদস্য নিবন্ধন ও অনুমোদন', 'info');
        setTimeout(() => {
          window.location.href = resolveUrl('/pages/public/w12-login.html?tab=register&flow=F-04');
        }, 300);
        break;

      case 'F-05':
        // F-05: Super Admin Creates a New User
        Components.showToast('শুরু হচ্ছে: F-05 নতুন ইউজার তৈরি ফ্লো', 'info');
        const db5 = MockData.getDB();
        db5.session.user = {
          id: 'adm-01',
          name_bn: 'এডমিন ইউজার (সুপার এডমিন)',
          name_en: 'Admin User (Super Admin)',
          mobile: '01700000001',
          role: 'superadmin'
        };
        MockData.saveDB(db5);
        setTimeout(() => {
          window.location.href = resolveUrl('/pages/admin/a10-users.html?flow=F-05');
        }, 300);
        break;

      case 'F-06':
        // F-06: Create and Publish Notice
        Components.showToast('শুরু হচ্ছে: F-06 নোটিশ প্রকাশ ও টিকার আপডেট', 'info');
        const db6 = MockData.getDB();
        db6.session.user = { id: 'adm-01', name_bn: 'এডমিন ইউজার', role: 'superadmin' };
        MockData.saveDB(db6);
        setTimeout(() => {
          window.location.href = resolveUrl('/pages/admin/a07-notices.html?action=new&flow=F-06');
        }, 300);
        break;

      case 'F-07':
        // F-07: Admin Adds Financial Entry
        Components.showToast('শুরু হচ্ছে: F-07 আর্থিক এন্ট্রি ও প্রকাশ', 'info');
        const db7 = MockData.getDB();
        db7.session.user = { id: 'adm-01', name_bn: 'এডমিন ইউজার', role: 'superadmin' };
        MockData.saveDB(db7);
        setTimeout(() => {
          window.location.href = resolveUrl('/pages/admin/a09-accounts.html?action=new&flow=F-07');
        }, 300);
        break;

      case 'F-08':
        // F-08: Forgotten Password
        Components.showToast('শুরু হচ্ছে: F-08 ভুলে যাওয়া পাসওয়ার্ড ম্যানুয়াল রিসেট', 'info');
        setTimeout(() => {
          window.location.href = resolveUrl('/pages/public/w12-login.html?action=forgot&flow=F-08');
        }, 300);
        break;
    }
  }

  // Trigger simulated browser web push notification (Section 11)
  function simulateWebPushNotification(requestId, serviceName) {
    const notifyBar = document.createElement('div');
    notifyBar.style.cssText = `
      position: fixed;
      top: 16px;
      right: 16px;
      max-width: 380px;
      background: #0B2E1F;
      border: 2px solid #C9A227;
      color: #FAF7EE;
      border-radius: 12px;
      padding: 14px 18px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      z-index: 10000;
      animation: slideInDown 300ms ease;
    `;

    notifyBar.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
        <span style="font-size: 12px; color: #E9C95C; font-weight: 700; display: flex; align-items: center; gap: 6px;">
          ${Components.getIcon('bell')} ব্রাউজার ওয়েব পুশ নোটিফিকেশন
        </span>
        <button onclick="this.closest('div').parentElement.remove()" style="color: #A8B5AB; cursor: pointer;">✕</button>
      </div>
      <div style="font-weight: 700; font-size: 15px; margin-bottom: 4px;">নতুন প্রবাসী সহায়তা আবেদন জমা হয়েছে!</div>
      <div style="font-size: 13.5px; color: #CBD5E1; margin-bottom: 10px;">
        আইডি: <strong>${requestId}</strong> • সেবা: ${serviceName}
      </div>
      <a href="${resolveUrl('/pages/admin/a02-requests.html?id=' + requestId)}" class="btn btn-sm btn-gold" style="width: 100%; text-align: center; justify-content: center;">
        আবেদনটি খুলুন ও দায়িত্ব নিন →
      </a>
    `;

    document.body.appendChild(notifyBar);

    setTimeout(() => {
      if (notifyBar.parentElement) notifyBar.remove();
    }, 12000);
  }

  return {
    startFlow,
    simulateWebPushNotification
  };
})();

if (typeof window !== 'undefined') {
  window.Flows = Flows;
}
