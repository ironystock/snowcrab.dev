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
      btn.setAttribute('aria-pressed', String(active));
    });

    if (summary) {
      const label = filter === 'all' ? 'all categories' : `${filter} only`;
      summary.textContent = `Showing ${visibleCount} entr${visibleCount === 1 ? 'y' : 'ies'} · ${label}`;
    }

    if (empty) {
      empty.hidden = visibleCount !== 0;
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => apply(btn.getAttribute('data-filter') || 'all'));
  });
})();
