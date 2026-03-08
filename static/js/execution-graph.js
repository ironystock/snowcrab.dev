(() => {
  const root = document.getElementById('execution-graph-prototype');
  if (!root) return;

  const buttons = Array.from(root.querySelectorAll('[data-graph-view]'));
  const panels = Array.from(root.querySelectorAll('[data-graph-panel]'));
  if (!buttons.length || !panels.length) return;

  const setView = (view) => {
    const selected = view === 'timeline' ? 'timeline' : 'flow';

    buttons.forEach((btn) => {
      const active = btn.getAttribute('data-graph-view') === selected;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    panels.forEach((panel) => {
      panel.hidden = panel.getAttribute('data-graph-panel') !== selected;
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => setView(btn.getAttribute('data-graph-view')));
  });

  setView('flow');
})();
