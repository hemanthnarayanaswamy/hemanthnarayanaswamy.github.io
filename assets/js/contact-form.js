/* FormSubmit handles email delivery; without JS the native POST remains available. */
(() => {
  const form = document.querySelector('[data-contact-form]');
  if (!form || !window.fetch || !window.AbortController) return;

  const fields = form.querySelector('fieldset');
  const button = form.querySelector('button[type="submit"]');
  const label = button.querySelector('[data-send-label]');
  const status = form.querySelector('[data-form-status]');
  const required = [...form.querySelectorAll('[required]')];
  let pending = false;

  required.forEach((field) => field.addEventListener('input', () => field.setCustomValidity('')));

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (pending) return;
    required.forEach((field) => field.setCustomValidity(field.value.trim() ? '' : 'Please fill in this field.'));
    if (!form.reportValidity()) return;

    const payload = Object.fromEntries(new FormData(form));
    ['name', 'email', 'subject'].forEach((key) => { payload[key] = payload[key].trim(); });
    payload._replyto = payload.email;

    pending = true;
    fields.disabled = true;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    label.textContent = 'Sending…';
    status.dataset.state = 'pending';
    status.textContent = 'Sending your message…';

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(form.dataset.contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      const result = await response.json();
      const needsActivation = response.ok && /activat|confirm.*email|email.*verif/i.test(result?.message || '');
      if (needsActivation) {
        status.dataset.state = 'error';
        status.textContent = 'The form needs email verification before delivery. Please use the email link below for now.';
      } else if (response.ok && (result?.success === true || result?.success === 'true')) {
        form.reset();
        status.dataset.state = 'success';
        status.textContent = 'Thanks! Your message has been submitted.';
      } else {
        status.dataset.state = 'error';
        status.textContent = 'Your message wasn’t accepted. Please try again or use the email link below. Your message is still here.';
      }
    } catch {
      status.dataset.state = 'error';
      status.textContent = 'I couldn’t confirm delivery. Please try again or use the email link below. Your message is still here.';
    } finally {
      window.clearTimeout(timeout);
      pending = false;
      fields.disabled = false;
      button.disabled = false;
      form.removeAttribute('aria-busy');
      label.textContent = 'Send message';
      status.focus({ preventScroll: true });
    }
  });
})();
