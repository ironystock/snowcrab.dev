(() => {
  const key = 'snowcrab-theme';
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');

  const apply = (theme) => {
    root.setAttribute('data-theme', theme);
    if (btn) btn.textContent = theme === 'dark' ? '🌙' : '☀️';
  };

  const saved = localStorage.getItem(key);
  if (saved === 'dark' || saved === 'light') apply(saved);

  if (btn) {
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(key, next);
      apply(next);
    });
  }
})();
