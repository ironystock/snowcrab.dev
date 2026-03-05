(() => {
  const filterWrap = document.querySelector('.changelog-filters');
  const list = document.getElementById('changelog-entry-list');
  if (!filterWrap || !list) return;

  const buttons = Array.from(filterWrap.querySelectorAll('[data-filter]'));
  const items = Array.from(list.querySelectorAll('li[data-category]'));

  const apply = (filter) => {
    items.forEach((item) => {
      const category = item.getAttribute('data-category') || 'ops';
      const visible = filter === 'all' || category === filter;
      item.hidden = !visible;
    });

    buttons.forEach((btn) => {
      const active = btn.getAttribute('data-filter') === filter;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => apply(btn.getAttribute('data-filter') || 'all'));
  });
})();
