(() => {
  const surface = document.getElementById('post-reading-surface');
  const controls = document.getElementById('reading-mode-controls');
  if (!surface || !controls) return;

  const buttons = Array.from(controls.querySelectorAll('[data-reading-preset]'));
  if (!buttons.length) return;

  const storageKey = 'snowcrab.dev:reading-mode-preset';

  const applyPreset = (preset, { persist = true } = {}) => {
    const nextPreset = preset || 'default';
    surface.dataset.readingPreset = nextPreset;

    buttons.forEach((button) => {
      const active = button.getAttribute('data-reading-preset') === nextPreset;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    if (persist) {
      try {
        window.localStorage.setItem(storageKey, nextPreset);
      } catch (_) {
        // Ignore storage failures.
      }
    }
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      applyPreset(button.getAttribute('data-reading-preset') || 'default');
    });
  });

  let savedPreset = 'default';
  try {
    savedPreset = window.localStorage.getItem(storageKey) || 'default';
  } catch (_) {
    savedPreset = 'default';
  }

  applyPreset(savedPreset, { persist: false });
})();
