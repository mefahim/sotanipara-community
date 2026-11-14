/**
 * Satanipara Community Design System — Form Validation Helpers
 */

const Validation = (function () {
  // Bangladeshi mobile number validator: 11 digits starting with 01[3-9]
  function isValidMobile(mobile) {
    if (!mobile) return false;
    const clean = String(mobile).trim().replace(/[-+\s]/g, '');
    const regex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    return regex.test(clean);
  }

  function validateInput(inputEl, condition, errorMsg) {
    const group = inputEl.closest('.form-group') || inputEl.parentElement;
    let errEl = group.querySelector('.form-error');

    if (!condition) {
      inputEl.classList.add('is-invalid');
      if (!errEl) {
        errEl = document.createElement('div');
        errEl.className = 'form-error';
        group.appendChild(errEl);
      }
      errEl.innerHTML = `${Components.getIcon('alertCircle')} <span>${errorMsg}</span>`;
      return false;
    } else {
      inputEl.classList.remove('is-invalid');
      if (errEl) errEl.remove();
      return true;
    }
  }

  return {
    isValidMobile,
    validateInput
  };
})();

if (typeof window !== 'undefined') {
  window.Validation = Validation;
}
