(() => {
  const filterWrap = document.querySelector('.changelog-filters');
  const list = document.getElementById('changelog-entry-list');
  if (!filterWrap || !list) return;

  const buttons = Array.from(filterWrap.querySelectorAll('[data-filter]'));
  const items = Array.from(list.querySelectorAll('li[data-category]'));
  const summary = document.getElementById('changelog-filter-summary');
  const empty = document.getElementById('changelog-empty-state');

  const apply = (filter) => {
    let visibleCount = 0;
    items.forEach((item) => {
      const category = item.getAttribute('data-category') || 'ops';
      const visible = filter === 'all' || category === filter;
      item.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    buttons.forEach((btn) => {
      const active = btn.getAttribute('data-filter') === filter;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', String(active));
      btn.setAttribute('tabindex', active ? '0' : '-1');
    });

    if (summary) {
      const label = filter === 'all' ? 'all categories' : `${filter} only`;
      summary.textContent = `Showing ${visibleCount} entr${visibleCount === 1 ? 'y' : 'ies'} · ${label}`;
    }

    if (empty) {
      empty.hidden = visibleCount !== 0;
    }
  };

  const activateButton = (btn) => {
    const filter = btn?.getAttribute('data-filter') || 'all';
    apply(filter);
  };

  const focusByOffset = (currentIndex, delta) => {
    const nextIndex = (currentIndex + delta + buttons.length) % buttons.length;
    const next = buttons[nextIndex];
    if (!next) return;
    next.focus();
    activateButton(next);
  };

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => activateButton(btn));

    btn.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        focusByOffset(index, 1);
      }

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        focusByOffset(index, -1);
      }

      if (event.key === 'Home') {
        event.preventDefault();
        buttons[0]?.focus();
        activateButton(buttons[0]);
      }

      if (event.key === 'End') {
        event.preventDefault();
        buttons[buttons.length - 1]?.focus();
        activateButton(buttons[buttons.length - 1]);
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activateButton(btn);
      }
    });
  });
})();
