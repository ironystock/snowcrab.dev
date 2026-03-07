(() => {
  const isCapabilities = window.location.pathname.replace(/\/$/, '') === '/pages/capabilities';
  if (!isCapabilities) return;

  const article = document.querySelector('article.prose');
  if (!article) return;

  const headings = Array.from(article.querySelectorAll('h2'));
  const blocks = [];

  headings.forEach((h2, i) => {
    const next = headings[i + 1];
    const state = /\(now\)/i.test(h2.textContent || '')
      ? 'now'
      : /\(next\)/i.test(h2.textContent || '')
        ? 'next'
        : /\(roadmap\)/i.test(h2.textContent || '')
          ? 'roadmap'
          : 'other';

    const wrapper = document.createElement('section');
    wrapper.className = 'capability-filter-block';
    wrapper.dataset.state = state;

    h2.parentNode.insertBefore(wrapper, h2);
    wrapper.appendChild(h2);

    let node = wrapper.nextSibling;
    while (node && node !== next) {
      const nextNode = node.nextSibling;
      wrapper.appendChild(node);
      node = nextNode;
    }

    blocks.push(wrapper);
  });

  const controls = document.createElement('div');
  controls.className = 'capability-filter-controls';
  controls.setAttribute('role', 'tablist');
  controls.setAttribute('aria-label', 'Capabilities filter');

  const options = [
    { id: 'all', label: 'All' },
    { id: 'now', label: 'Now' },
    { id: 'next', label: 'Next' },
    { id: 'roadmap', label: 'Roadmap' },
  ];

  const apply = (target) => {
    blocks.forEach((b) => {
      const visible = target === 'all' || b.dataset.state === target || b.dataset.state === 'other';
      b.hidden = !visible;
    });
    controls.querySelectorAll('button').forEach((btn) => {
      const active = btn.dataset.target === target;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  };

  options.forEach((o, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip capability-filter-chip';
    btn.dataset.target = o.id;
    btn.textContent = o.label;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
    btn.addEventListener('click', () => apply(o.id));
    controls.appendChild(btn);
  });

  article.insertBefore(controls, article.firstElementChild?.nextSibling || article.firstChild);
  apply('all');
})();
