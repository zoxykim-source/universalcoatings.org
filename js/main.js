// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
  });
}

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  if (!q) return;
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(open => {
      if (open !== item) {
        open.classList.remove('open');
        open.querySelector('.faq-a').style.maxHeight = null;
      }
    });
    item.classList.toggle('open', !isOpen);
    const a = item.querySelector('.faq-a');
    a.style.maxHeight = !isOpen ? a.scrollHeight + 'px' : null;
  });
});

// Contact / technical-support forms — front-end only placeholder
document.querySelectorAll('form[data-demo-form]').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = form.querySelector('.form-msg');
    if (msg) {
      msg.classList.add('show');
      msg.textContent = 'Thanks — your message has been noted. This form is not yet connected to email; see the README for how to wire it up.';
    }
    form.reset();
  });
});
