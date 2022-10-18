(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const closeBtnRef = document.querySelector('[data-close-button]');
  const mobileLink = document.querySelectorAll('.mobile__link');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

  });
  closeBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'false' || true;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
  });

  mobileLink.forEach(item => {
    item.addEventListener('click', function () {
      menuBtnRef.classList.remove('is-open');
      document.body.classList.remove('overflow');
    });
  });
})();