(() => {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const links = Array.from(nav.querySelectorAll('a[href]'));
  const step = 120;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const revealLink = (link) => {
    if (!link) return;
    link.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: scrollBehavior });
  };

  nav.addEventListener('keydown', (event) => {
    const activeEl = document.activeElement;
    const activeIndex = links.indexOf(activeEl);
    const focusIsLink = activeIndex >= 0;

    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();

      if (focusIsLink) {
        const delta = event.key === 'ArrowRight' ? 1 : -1;
        const nextIndex = clamp(activeIndex + delta, 0, links.length - 1);
        const nextLink = links[nextIndex];
        if (nextLink) {
          nextLink.focus();
          revealLink(nextLink);
        }
        return;
      }

      const direction = event.key === 'ArrowRight' ? 1 : -1;
      nav.scrollBy({ left: step * direction, behavior: scrollBehavior });
    }

    if (event.key === 'Home') {
      event.preventDefault();
      if (focusIsLink && links[0]) {
        links[0].focus();
        revealLink(links[0]);
      } else {
        nav.scrollTo({ left: 0, behavior: scrollBehavior });
      }
    }

    if (event.key === 'End') {
      event.preventDefault();
      if (focusIsLink && links.length > 0) {
        const last = links[links.length - 1];
        last.focus();
        revealLink(last);
      } else {
        nav.scrollTo({ left: nav.scrollWidth, behavior: scrollBehavior });
      }
    }
  });
})();
