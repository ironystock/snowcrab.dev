(() => {
  const groups = document.querySelectorAll('[data-home-tabs]');
  if (!groups.length) return;

  groups.forEach((group) => {
    const tabs = Array.from(group.querySelectorAll('[role="tab"]'));
    const panels = Array.from(group.querySelectorAll('[role="tabpanel"]'));
    if (!tabs.length || !panels.length) return;

    const activate = (tab) => {
      const target = tab.getAttribute('data-target');
      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      panels.forEach((p) => {
        p.hidden = p.id !== target;
      });
    };

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', (e) => {
        const i = tabs.indexOf(tab);
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          const next = tabs[(i + 1) % tabs.length];
          next.focus();
          activate(next);
        }
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const prev = tabs[(i - 1 + tabs.length) % tabs.length];
          prev.focus();
          activate(prev);
        }
      });
    });
  });
})();
