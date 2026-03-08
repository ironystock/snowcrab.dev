(() => {
  const groups = document.querySelectorAll('[data-home-tabs]');
  if (!groups.length) return;

  groups.forEach((group) => {
    const tabs = Array.from(group.querySelectorAll('[role="tab"]'));
    const panels = Array.from(group.querySelectorAll('[role="tabpanel"]'));
    if (!tabs.length || !panels.length) return;

    const focusTab = (tab) => {
      if (!tab) return;
      tab.focus({ preventScroll: true });
    };

    const panelById = (id) => panels.find((panel) => panel.id === id);

    const activate = (tab, { moveFocus = false } = {}) => {
      const target = tab.getAttribute('data-target');
      const activePanel = panelById(target);

      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
        t.tabIndex = active ? 0 : -1;
      });

      panels.forEach((panel) => {
        const active = panel === activePanel;
        panel.hidden = !active;
        panel.setAttribute('aria-hidden', active ? 'false' : 'true');
        panel.tabIndex = active ? 0 : -1;
      });

      if (moveFocus) focusTab(tab);
    };

    const moveBy = (tab, delta) => {
      const index = tabs.indexOf(tab);
      if (index < 0) return;
      const next = tabs[(index + delta + tabs.length) % tabs.length];
      activate(next, { moveFocus: true });
    };

    tabs.forEach((tab) => {
      const target = tab.getAttribute('data-target');
      if (target) {
        tab.setAttribute('aria-controls', target);
      }

      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', (event) => {
        switch (event.key) {
          case 'ArrowRight':
          case 'ArrowDown':
            event.preventDefault();
            moveBy(tab, 1);
            break;
          case 'ArrowLeft':
          case 'ArrowUp':
            event.preventDefault();
            moveBy(tab, -1);
            break;
          case 'Home':
            event.preventDefault();
            activate(tabs[0], { moveFocus: true });
            break;
          case 'End':
            event.preventDefault();
            activate(tabs[tabs.length - 1], { moveFocus: true });
            break;
          case 'Enter':
          case ' ':
            event.preventDefault();
            activate(tab);
            break;
          default:
            break;
        }
      });
    });

    const current = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0];
    activate(current);
  });
})();
