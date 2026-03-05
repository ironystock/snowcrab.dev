(() => {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const step = 120;

  nav.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      nav.scrollBy({ left: step, behavior: 'smooth' });
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      nav.scrollBy({ left: -step, behavior: 'smooth' });
    }

    if (event.key === 'Home') {
      event.preventDefault();
      nav.scrollTo({ left: 0, behavior: 'smooth' });
    }

    if (event.key === 'End') {
      event.preventDefault();
      nav.scrollTo({ left: nav.scrollWidth, behavior: 'smooth' });
    }
  });
})();
