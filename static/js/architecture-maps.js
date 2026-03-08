(() => {
  const roots = Array.from(
    document.querySelectorAll('[data-architecture-maps], #architecture-maps')
  );
  if (!roots.length) return;

  roots.forEach((root) => {
    const buttons = Array.from(root.querySelectorAll('[data-arch-view]'));
    const panels = Array.from(root.querySelectorAll('[data-arch-panel]'));
    if (buttons.length === 0 || panels.length === 0) return;

    const setView = (view) => {
      const selected = view === 'deep' ? 'deep' : 'simple';

      buttons.forEach((btn) => {
        const active = btn.getAttribute('data-arch-view') === selected;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
      });

      panels.forEach((panel) => {
        panel.hidden = panel.getAttribute('data-arch-panel') !== selected;
      });
    };

    buttons.forEach((btn) => {
      btn.addEventListener('click', () =>
        setView(btn.getAttribute('data-arch-view'))
      );
    });

    setView('simple');
  });
})();
