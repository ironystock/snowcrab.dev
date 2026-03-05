(() => {
  const key = 'snowcrab-theme';
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');

  const apply = (theme) => {
    root.setAttribute('data-theme', theme);
    if (btn) {
      const isDark = theme === 'dark';
      btn.textContent = isDark ? '🌙' : '☀️';
      btn.setAttribute('aria-pressed', String(!isDark));
      btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      btn.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
    }
  };

  const saved = localStorage.getItem(key);
  const initial = saved === 'dark' || saved === 'light'
    ? saved
    : (root.getAttribute('data-theme') || 'dark');
  apply(initial);

  if (btn) {
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(key, next);
      apply(next);
    });
  }
})();
