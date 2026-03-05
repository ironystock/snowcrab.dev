(() => {
  const jsOnlyWrap = document.querySelector('[data-js-only="true"]');
  if (jsOnlyWrap) jsOnlyWrap.hidden = false;

  const filterWrap = document.querySelector('.changelog-filters');
  const list = document.getElementById('changelog-entry-list');
  if (!filterWrap || !list) return;

  const buttons = Array.from(filterWrap.querySelectorAll('[data-filter]'));
  const items = Array.from(list.querySelectorAll('li[data-category]'));
  const summary = document.getElementById('changelog-filter-summary');
  const empty = document.getElementById('changelog-empty-state');
  const panel = document.getElementById('changelog-results-panel');
  const allowedFilters = new Set(buttons.map((btn) => btn.getAttribute('data-filter')).filter(Boolean));

  const normalizeFilter = (value) => {
    const fallback = 'all';
    if (!value) return fallback;
    return allowedFilters.has(value) ? value : fallback;
  };

  const readFilterFromUrl = () => {
    const url = new URL(window.location.href);
    const queryFilter = url.searchParams.get('category');
    return {
      normalized: normalizeFilter(queryFilter),
      raw: queryFilter,
    };
  };

  const writeFilterToUrl = (filter) => {
    const normalized = normalizeFilter(filter);
    const url = new URL(window.location.href);

    if (normalized === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', normalized);
    }

    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  };

  const apply = (filter, { syncUrl = true } = {}) => {
    const selectedFilter = normalizeFilter(filter);
    let visibleCount = 0;

    items.forEach((item) => {
      const category = item.getAttribute('data-category') || 'ops';
      const visible = selectedFilter === 'all' || category === selectedFilter;
      item.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    let activeId = '';
    buttons.forEach((btn) => {
      const active = btn.getAttribute('data-filter') === selectedFilter;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', String(active));
      btn.setAttribute('tabindex', active ? '0' : '-1');
      if (active) activeId = btn.id || '';
    });

    if (panel && activeId) {
      panel.setAttribute('aria-labelledby', activeId);
    }

    if (summary) {
      const label = selectedFilter === 'all' ? 'all categories' : `${selectedFilter} only`;
      summary.textContent = `Showing ${visibleCount} entr${visibleCount === 1 ? 'y' : 'ies'} · ${label}`;
    }

    if (empty) {
      if (visibleCount === 0) {
        const emptyLabel = selectedFilter === 'all'
          ? 'No changelog entries available yet.'
          : `No entries match the ${selectedFilter} category yet.`;
        empty.textContent = emptyLabel;
        empty.hidden = false;
      } else {
        empty.hidden = true;
      }
    }

    if (syncUrl) {
      writeFilterToUrl(selectedFilter);
    }
  };

  const activateButton = (btn, options) => {
    const filter = btn?.getAttribute('data-filter') || 'all';
    apply(filter, options);
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

      if (event.key === 'Escape') {
        event.preventDefault();
        const allButton = buttons.find((candidate) => candidate.getAttribute('data-filter') === 'all') || buttons[0];
        if (allButton) {
          allButton.focus();
          activateButton(allButton);
        }
      }
    });
  });

  const { normalized: urlFilter, raw: rawUrlFilter } = readFilterFromUrl();
  if (rawUrlFilter && rawUrlFilter !== urlFilter) {
    writeFilterToUrl(urlFilter);
  }

  const initiallyActive = buttons.find((btn) => btn.getAttribute('data-filter') === urlFilter)
    || buttons.find((btn) => btn.getAttribute('aria-selected') === 'true')
    || buttons[0];

  if (initiallyActive) {
    activateButton(initiallyActive, { syncUrl: false });
  }

  window.addEventListener('popstate', () => {
    const { normalized: nextFilter } = readFilterFromUrl();
    apply(nextFilter, { syncUrl: false });

    const nextButton = buttons.find((btn) => btn.getAttribute('data-filter') === nextFilter);
    if (nextButton) {
      nextButton.setAttribute('tabindex', '0');
    }
  });
})();
