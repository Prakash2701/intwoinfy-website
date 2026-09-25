(() => {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll('[data-demo-form],[data-contact-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const message = form.querySelector('[data-form-message]');
      if (message) {
        message.textContent = form.matches('[data-contact-form]')
          ? 'Thank you. Your message has been captured for backend/API integration.'
          : 'Thanks. Your demo request is ready to connect to your backend/API.';
        message.classList.remove('d-none');
      }
      form.reset();
    });
  });
})();
