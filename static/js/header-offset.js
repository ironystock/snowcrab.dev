(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const setOffset = () => {
    const h = Math.ceil(header.getBoundingClientRect().height || 0);
    if (!h) return;
    document.documentElement.style.setProperty('--header-offset', `${h}px`);
  };

  setOffset();
  window.addEventListener('resize', setOffset, { passive: true });
  window.addEventListener('orientationchange', setOffset, { passive: true });
})();
