(() => {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const links = Array.from(nav.querySelectorAll('a[href]'));
  const navHint = document.getElementById('main-nav-hint');
  const step = 120;
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let scrollBehavior = reducedMotionQuery.matches ? 'auto' : 'smooth';

  const syncMotionPreference = () => {
    scrollBehavior = reducedMotionQuery.matches ? 'auto' : 'smooth';
  };

  const syncOverflowA11y = () => {
    const hasOverflow = nav.scrollWidth > nav.clientWidth + 2;
    nav.tabIndex = hasOverflow ? 0 : -1;
    if (hasOverflow) {
      nav.setAttribute('aria-describedby', 'main-nav-hint');
    } else {
      nav.removeAttribute('aria-describedby');
    }
    if (navHint) navHint.hidden = !hasOverflow;
  };

  syncMotionPreference();
  syncOverflowA11y();

  window.addEventListener('resize', syncOverflowA11y, { passive: true });
  if (typeof reducedMotionQuery.addEventListener === 'function') {
    reducedMotionQuery.addEventListener('change', syncMotionPreference);
  } else if (typeof reducedMotionQuery.addListener === 'function') {
    reducedMotionQuery.addListener(syncMotionPreference);
  }

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
