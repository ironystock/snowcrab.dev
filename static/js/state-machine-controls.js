(() => {
  const nodes = Array.from(document.querySelectorAll('[data-state-node]'));
  const cards = Array.from(document.querySelectorAll('.integration-item[data-status]'));
  const receipt = document.getElementById('projects-transition-receipt');
  if (!nodes.length || !cards.length) return;

  const receipts = {
    next: '/changelog/2026-03-07-project-state-machine-visualization-phase2/',
    now: '/changelog/2026-03-07-diff-explorer-diffusion-projects-and-detail-pages/',
    watch: '/changelog/2026-03-07-roadmap3-charts-graph-placement-pass/'
  };

  let active = '';

  const render = () => {
    cards.forEach((card) => {
      const status = card.getAttribute('data-status') || '';
      card.hidden = active ? status !== active : false;
    });

    nodes.forEach((node) => {
      const isActive = node.getAttribute('data-state-node') === active;
      node.classList.toggle('is-active', isActive);
      node.setAttribute('aria-pressed', String(isActive));
    });

    if (!receipt) return;
    if (!active) {
      receipt.innerHTML = 'Transition receipts ready.';
      return;
    }

    const href = receipts[active] || '/changelog/';
    receipt.innerHTML = `Filtered to <strong>${active}</strong> lane · <a href="${href}">transition receipt</a>.`;
  };

  const toggle = (lane) => {
    active = active === lane ? '' : lane;
    render();
  };

  nodes.forEach((node) => {
    const lane = node.getAttribute('data-state-node');
    node.addEventListener('click', () => toggle(lane));
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle(lane);
      }
    });
  });

  render();
})();
