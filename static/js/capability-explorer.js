(() => {
  const root = document.getElementById('capability-explorer');
  if (!root) return;

  const tabs = Array.from(root.querySelectorAll('[data-cap-stage]'));
  const cards = Array.from(root.querySelectorAll('[data-stage][data-domains]'));
  const summary = document.getElementById('capability-explorer-summary');

  if (!tabs.length || !cards.length) return;

  const apply = (stage) => {
    const selected = stage || 'all';
    let visible = 0;

    tabs.forEach((tab) => {
      const active = tab.getAttribute('data-cap-stage') === selected;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.setAttribute('tabindex', active ? '0' : '-1');
    });

    cards.forEach((card) => {
      const cardStage = card.getAttribute('data-stage') || 'roadmap';
      const show = selected === 'all' || cardStage === selected;
      card.hidden = !show;
      if (show) visible += 1;
    });

    if (summary) {
      const stageLabel = selected === 'all' ? 'all stages' : `${selected} stage`;
      summary.textContent = `Showing ${visible} capabilit${visible === 1 ? 'y' : 'ies'} · ${stageLabel}`;
    }
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => apply(tab.getAttribute('data-cap-stage') || 'all'));

    tab.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      const delta = event.key === 'ArrowRight' ? 1 : -1;
      const next = (index + delta + tabs.length) % tabs.length;
      tabs[next]?.focus();
      apply(tabs[next]?.getAttribute('data-cap-stage') || 'all');
    });
  });

  apply('all');
})();
