(() => {
  const key = 'snowcrab-theme';
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-toggle-icon');
  const label = document.getElementById('theme-toggle-label');

  const live = document.getElementById('theme-status-live');

  const apply = (theme, announce = false) => {
    root.setAttribute('data-theme', theme);
    if (btn) {
      const isDark = theme === 'dark';
      const nextAction = isDark ? 'Switch to light theme' : 'Switch to dark theme';
      if (icon) icon.textContent = isDark ? '🌙' : '☀️';
      if (label) label.textContent = nextAction;
      btn.setAttribute('aria-pressed', String(!isDark));
      btn.setAttribute('aria-label', nextAction);
      btn.title = nextAction;
      if (announce && live) {
        live.textContent = `Theme changed to ${isDark ? 'dark' : 'light'} mode`;
      }
    }
  };

  const saved = localStorage.getItem(key);
  const initial = saved === 'dark' || saved === 'light'
    ? saved
    : (root.getAttribute('data-theme') || 'dark');
  apply(initial, false);

  if (btn) {
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(key, next);
      apply(next, true);
    });
  }
})();
