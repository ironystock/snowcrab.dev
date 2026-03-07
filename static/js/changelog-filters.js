(() => {
  const jsOnlyWrap = document.querySelector('[data-js-only="true"]');
  if (jsOnlyWrap) jsOnlyWrap.hidden = false;

  const filterWrap = document.querySelector('.changelog-filters');
  const list = document.getElementById('changelog-entry-list');
  if (!filterWrap || !list) return;

  const buttons = Array.from(filterWrap.querySelectorAll('[data-filter]'));
  const rangeButtons = Array.from(document.querySelectorAll('[data-range]'));
  const customWrap = document.querySelector('[data-custom-range]');
  const customStart = document.querySelector('[data-range-start]');
  const customEnd = document.querySelector('[data-range-end]');
  const customApply = document.querySelector('[data-range-apply]');
  const items = Array.from(list.querySelectorAll('li[data-category]'));
  const summary = document.getElementById('changelog-filter-summary');
  const empty = document.getElementById('changelog-empty-state');
  const panel = document.getElementById('changelog-results-panel');
  const allowedFilters = new Set(buttons.map((btn) => btn.getAttribute('data-filter')).filter(Boolean));
  const allowedRanges = new Set(['7d', '30d', '90d', 'custom']);

  const normalizeFilter = (value) => {
    const fallback = 'all';
    if (!value) return fallback;
    return allowedFilters.has(value) ? value : fallback;
  };

  const normalizeRange = (value) => {
    const fallback = '7d';
    if (!value) return fallback;
    return allowedRanges.has(value) ? value : fallback;
  };

  const toIsoDate = (value) => {
    if (!value) return '';
    const date = new Date(`${value}T00:00:00`);
    if (Number.isNaN(date.getTime())) return '';
    return date.toISOString().slice(0, 10);
  };

  const readStateFromUrl = () => {
    const url = new URL(window.location.href);
    const queryFilter = url.searchParams.get('category');
    const queryRange = url.searchParams.get('range');
    const querySince = toIsoDate(url.searchParams.get('since'));
    const queryUntil = toIsoDate(url.searchParams.get('until'));

    return {
      filter: normalizeFilter(queryFilter),
      range: normalizeRange(queryRange),
      since: querySince,
      until: queryUntil,
    };
  };

  const writeStateToUrl = (state) => {
    const normalizedFilter = normalizeFilter(state.filter);
    const normalizedRange = normalizeRange(state.range);
    const url = new URL(window.location.href);

    if (normalizedFilter === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', normalizedFilter);
    }

    if (normalizedRange === '7d') {
      url.searchParams.delete('range');
    } else {
      url.searchParams.set('range', normalizedRange);
    }

    if (normalizedRange === 'custom' && state.since && state.until) {
      url.searchParams.set('since', state.since);
      url.searchParams.set('until', state.until);
    } else {
      url.searchParams.delete('since');
      url.searchParams.delete('until');
    }

    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  };

  const computeWindow = (range, since, until) => {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    if (range === 'custom' && since && until) {
      const startDate = new Date(`${since}T00:00:00`);
      const endDate = new Date(`${until}T00:00:00`);
      if (!Number.isNaN(startDate.getTime()) && !Number.isNaN(endDate.getTime()) && startDate <= endDate) {
        return { start: startDate, end: endDate };
      }
    }

    const days = range === '30d' ? 30 : range === '90d' ? 90 : 7;
    const start = new Date(end);
    start.setDate(start.getDate() - (days - 1));
    return { start, end };
  };

  const isWithinWindow = (itemDate, window) => {
    const parsed = new Date(`${itemDate}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return false;
    return parsed >= window.start && parsed <= window.end;
  };

  const apply = (state, { syncUrl = true } = {}) => {
    const selectedFilter = normalizeFilter(state.filter);
    const selectedRange = normalizeRange(state.range);
    const focusedBeforeUpdate = document.activeElement;
    const window = computeWindow(selectedRange, state.since, state.until);
    let visibleCount = 0;

    if (panel) panel.setAttribute('aria-busy', 'true');

    const visibleItems = [];

    items.forEach((item) => {
      const category = item.getAttribute('data-category') || 'ops';
      const itemDate = item.getAttribute('data-date') || '';
      const matchesCategory = selectedFilter === 'all' || category === selectedFilter;
      const matchesRange = isWithinWindow(itemDate, window);
      const visible = matchesCategory && matchesRange;
      item.hidden = !visible;
      item.classList.remove('is-latest-visible');
      item.classList.remove('is-timeline-group-start');
      item.removeAttribute('data-visible-index');
      item.style.removeProperty('--timeline-group-label');
      item.removeAttribute('data-timeline-group-label');

      if (visible) {
        visibleCount += 1;
        visibleItems.push(item);
      }
    });

    list.dataset.activeFilter = selectedFilter;
    list.dataset.activeRange = selectedRange;
    list.classList.toggle('is-filtered-view', selectedFilter !== 'all' || selectedRange !== '7d');

    if (visibleItems.length > 0) {
      visibleItems[0].classList.add('is-latest-visible');
      let lastTimelineGroup = '';

      visibleItems.forEach((item, index) => {
        item.setAttribute('data-visible-index', String(index + 1));

        const timelineGroup = item.getAttribute('data-timeline-group') || '';
        const isGroupStart = index === 0 || (timelineGroup && timelineGroup !== lastTimelineGroup);
        item.classList.toggle('is-timeline-group-start', isGroupStart);

        if (isGroupStart) {
          const timelineLabel = item.getAttribute('data-timeline-label') || '';
          if (timelineLabel) {
            item.style.setProperty('--timeline-group-label', `"${timelineLabel}"`);
            item.setAttribute('data-timeline-group-label', timelineLabel);
          }
        }

        if (timelineGroup) {
          lastTimelineGroup = timelineGroup;
        }
      });
    }

    let activeId = '';
    buttons.forEach((btn) => {
      const active = btn.getAttribute('data-filter') === selectedFilter;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', String(active));
      btn.setAttribute('tabindex', active ? '0' : '-1');
      if (active) activeId = btn.id || '';
    });

    rangeButtons.forEach((btn) => {
      const active = btn.getAttribute('data-range') === selectedRange;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    const isCustom = selectedRange === 'custom';
    if (customWrap) {
      customWrap.hidden = !isCustom;
    }

    if (customStart) customStart.value = state.since || '';
    if (customEnd) customEnd.value = state.until || '';

    if (panel && activeId) {
      panel.setAttribute('aria-labelledby', activeId);
    }

    if (summary) {
      const categoryLabel = selectedFilter === 'all' ? 'all categories' : `${selectedFilter} only`;
      const rangeLabel = selectedRange === 'custom' && state.since && state.until
        ? `${state.since} → ${state.until}`
        : selectedRange;
      summary.textContent = `Showing ${visibleCount} entr${visibleCount === 1 ? 'y' : 'ies'} · ${categoryLabel} · ${rangeLabel}`;
    }

    if (empty) {
      if (visibleCount === 0) {
        empty.textContent = 'No entries match this category + timeframe yet.';
        empty.hidden = false;
      } else {
        empty.hidden = true;
      }
    }

    if (focusedBeforeUpdate && focusedBeforeUpdate instanceof HTMLElement && focusedBeforeUpdate !== document.body) {
      const focusedInsideList = list.contains(focusedBeforeUpdate);
      const focusNowHidden = focusedInsideList && !!focusedBeforeUpdate.closest('li[hidden]');

      if (focusNowHidden) {
        if (summary) {
          summary.tabIndex = -1;
          summary.focus({ preventScroll: true });

          const cleanupSummaryTabindex = () => {
            summary.removeAttribute('tabindex');
            summary.removeEventListener('blur', cleanupSummaryTabindex);
          };
          summary.addEventListener('blur', cleanupSummaryTabindex);
        } else if (panel) {
          panel.focus({ preventScroll: true });
        }
      }
    }

    if (syncUrl) {
      writeStateToUrl(state);
    }

    if (panel) panel.setAttribute('aria-busy', 'false');
  };

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const activateButton = (btn, options = {}) => {
    const filter = btn?.getAttribute('data-filter') || 'all';
    const state = {
      ...readStateFromUrl(),
      filter,
    };
    apply(state, options);

    if (btn instanceof HTMLElement) {
      btn.scrollIntoView({
        block: 'nearest',
        inline: 'nearest',
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  const activateRange = (range, options = {}) => {
    const state = readStateFromUrl();
    state.range = normalizeRange(range);

    if (state.range !== 'custom') {
      state.since = '';
      state.until = '';
    } else {
      state.since = customStart?.value || state.since;
      state.until = customEnd?.value || state.until;
    }

    apply(state, options);
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

  rangeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const range = btn.getAttribute('data-range') || '7d';
      activateRange(range);
    });
  });

  customApply?.addEventListener('click', () => {
    activateRange('custom');
  });

  const initialState = readStateFromUrl();
  const initiallyActive = buttons.find((btn) => btn.getAttribute('data-filter') === initialState.filter)
    || buttons.find((btn) => btn.getAttribute('aria-selected') === 'true')
    || buttons[0];

  if (initiallyActive) {
    const seededState = {
      ...initialState,
      filter: initiallyActive.getAttribute('data-filter') || initialState.filter,
    };
    apply(seededState, { syncUrl: false });
  }

  window.addEventListener('popstate', () => {
    const nextState = readStateFromUrl();
    apply(nextState, { syncUrl: false });

    const nextButton = buttons.find((btn) => btn.getAttribute('data-filter') === nextState.filter);
    if (nextButton) {
      nextButton.setAttribute('tabindex', '0');
    }
  });
})();
