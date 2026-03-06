(() => {
  const dialog = document.getElementById('command-palette');
  const toggle = document.getElementById('command-toggle');
  const input = document.getElementById('command-palette-input');
  const results = document.getElementById('command-palette-results');
  const dataEl = document.getElementById('command-palette-data');

  if (!dialog || !toggle || !input || !results || !dataEl) return;

  let items = [];
  let activeIndex = 0;
  let activeResults = [];

  try {
    items = JSON.parse(dataEl.textContent || '[]');
  } catch (_) {
    items = [];
  }

  const setActiveDescendant = () => {
    const links = Array.from(results.querySelectorAll('.command-result'));
    const active = links[activeIndex];
    input.setAttribute('aria-activedescendant', active?.id || '');
  };

  const render = (query = '') => {
    const q = query.trim().toLowerCase();
    const filtered = items
      .filter((item) => {
        if (!q) return true;
        return `${item.title} ${item.section}`.toLowerCase().includes(q);
      })
      .slice(0, 12);

    activeResults = filtered;

    if (!filtered.length) {
      results.innerHTML = '<li class="command-palette-empty" role="status">No matches found.</li>';
      activeIndex = 0;
      input.setAttribute('aria-activedescendant', '');
      return;
    }

    results.innerHTML = filtered
      .map((item, idx) => `
        <li role="presentation">
          <a id="command-result-${idx}" href="${item.url}" role="option" aria-selected="${idx === activeIndex ? 'true' : 'false'}" class="command-result ${idx === activeIndex ? 'is-active' : ''}" data-index="${idx}">
            <span>${item.title}</span>
            <span class="meta">${item.section} · ${item.date}</span>
          </a>
        </li>
      `)
      .join('');

    const links = Array.from(results.querySelectorAll('.command-result'));
    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        activeIndex = Number(link.dataset.index || 0);
        render(query);
      });
    });

    setActiveDescendant();
  };

  const openPalette = () => {
    dialog.showModal();
    input.setAttribute('aria-expanded', 'true');
    activeIndex = 0;
    input.value = '';
    render('');
    window.requestAnimationFrame(() => input.focus());
  };

  const closePalette = () => {
    if (dialog.open) dialog.close();
    input.setAttribute('aria-expanded', 'false');
    input.setAttribute('aria-activedescendant', '');
    toggle.focus({ preventScroll: true });
  };

  toggle.addEventListener('click', openPalette);

  window.addEventListener('keydown', (event) => {
    const metaK = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';
    const slash = event.key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey;

    if (metaK || slash) {
      const target = event.target;
      const typing = target instanceof HTMLElement && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
      if (typing && slash) return;
      event.preventDefault();
      openPalette();
      return;
    }

    if (!dialog.open) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closePalette();
      return;
    }

    const links = Array.from(results.querySelectorAll('.command-result'));
    if (!links.length) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      activeIndex = (activeIndex + 1) % links.length;
      render(input.value);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      activeIndex = (activeIndex - 1 + links.length) % links.length;
      render(input.value);
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      activeIndex = 0;
      render(input.value);
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      activeIndex = links.length - 1;
      render(input.value);
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      const active = links[activeIndex];
      const href = active?.getAttribute('href') || activeResults[activeIndex]?.url || '/';
      window.location.href = href;
    }
  });

  input.addEventListener('input', () => {
    activeIndex = 0;
    render(input.value);
  });

  dialog.addEventListener('click', (event) => {
    const target = event.target;
    if (target === dialog) closePalette();
  });

  dialog.addEventListener('close', () => {
    input.setAttribute('aria-expanded', 'false');
    input.setAttribute('aria-activedescendant', '');
    toggle.focus({ preventScroll: true });
  });
})();
