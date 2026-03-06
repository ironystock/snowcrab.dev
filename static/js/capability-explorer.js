(() => {
  const root = document.getElementById('capability-explorer');
  if (!root) return;

  const stageTabs = Array.from(root.querySelectorAll('[data-cap-stage]'));
  const domainTabs = Array.from(root.querySelectorAll('[data-cap-domain]'));
  const cards = Array.from(root.querySelectorAll('[data-stage][data-domains]'));
  const summary = document.getElementById('capability-explorer-summary');

  if (!stageTabs.length || !cards.length) return;

  let activeStage = 'all';
  let activeDomain = 'all';

  const apply = () => {
    let visible = 0;

    stageTabs.forEach((tab) => {
      const active = tab.getAttribute('data-cap-stage') === activeStage;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.setAttribute('tabindex', active ? '0' : '-1');
    });

    domainTabs.forEach((tab) => {
      const active = tab.getAttribute('data-cap-domain') === activeDomain;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-pressed', String(active));
    });

    cards.forEach((card) => {
      const cardStage = card.getAttribute('data-stage') || 'roadmap';
      const cardDomains = (card.getAttribute('data-domains') || '')
        .split(',')
        .map((token) => token.trim())
        .filter(Boolean);

      const stageMatch = activeStage === 'all' || cardStage === activeStage;
      const domainMatch = activeDomain === 'all' || cardDomains.includes(activeDomain);
      const show = stageMatch && domainMatch;

      card.hidden = !show;
      if (show) visible += 1;
    });

    if (summary) {
      const stageLabel = activeStage === 'all' ? 'all stages' : `${activeStage} stage`;
      const domainLabel = activeDomain === 'all' ? 'all domains' : activeDomain.replace(/-/g, ' ');
      summary.textContent = `Showing ${visible} capabilit${visible === 1 ? 'y' : 'ies'} · ${stageLabel} · ${domainLabel}`;
    }
  };

  stageTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      activeStage = tab.getAttribute('data-cap-stage') || 'all';
      apply();
    });

    tab.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      const delta = event.key === 'ArrowRight' ? 1 : -1;
      const next = (index + delta + stageTabs.length) % stageTabs.length;
      const nextTab = stageTabs[next];
      nextTab?.focus();
      activeStage = nextTab?.getAttribute('data-cap-stage') || 'all';
      apply();
    });
  });

  domainTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activeDomain = tab.getAttribute('data-cap-domain') || 'all';
      apply();
    });
  });

  apply();
})();
