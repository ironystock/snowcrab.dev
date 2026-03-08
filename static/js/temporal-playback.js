(() => {
  const root = document.getElementById('temporal-playback-prototype');
  if (!root) return;

  const rail = root.querySelector('[data-playback-rail]');
  const headline = root.querySelector('[data-playback-headline]');
  const summary = root.querySelector('[data-playback-summary]');
  const meta = root.querySelector('[data-playback-meta]');
  const progress = root.querySelector('[data-playback-progress]');
  const speed = root.querySelector('#temporal-playback-speed');
  const buttons = Array.from(root.querySelectorAll('[data-playback-action]'));
  const items = Array.from(rail?.querySelectorAll('li') || []).map((item) => ({
    node: item,
    date: item.getAttribute('data-playback-date') || '',
    title: item.getAttribute('data-playback-title') || 'Untitled event',
    summary: item.getAttribute('data-playback-summary') || '',
    receipt: item.getAttribute('data-playback-receipt') || '/changelog/'
  }));

  if (!items.length) return;

  let currentIndex = 0;
  let isPlaying = true;
  let timer = null;

  const renderRail = () => {
    items.forEach((entry, index) => {
      entry.node.classList.toggle('is-active', index === currentIndex);
      entry.node.innerHTML = `<p class="temporal-playback-point-meta">${entry.date}</p><p><strong>${entry.title}</strong></p><p class="meta">${entry.summary}</p><p class="meta"><a href="${entry.receipt}">Receipt ↗</a></p>`;
    });
  };

  const renderStage = () => {
    const event = items[currentIndex];
    headline.textContent = event.title;
    summary.textContent = event.summary;
    meta.innerHTML = `${event.date} · <a href="${event.receipt}">Open receipt ↗</a>`;
    progress.style.width = `${((currentIndex + 1) / items.length) * 100}%`;
    renderRail();
  };

  const getDelay = () => {
    const speedMultiplier = Number(speed?.value || '1.5');
    const base = 2600;
    return Math.max(600, Math.round(base / speedMultiplier));
  };

  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  const schedule = () => {
    clearTimer();
    if (!isPlaying) return;
    timer = setTimeout(() => {
      currentIndex = (currentIndex + 1) % items.length;
      renderStage();
      schedule();
    }, getDelay());
  };

  const setActionState = (action) => {
    buttons.forEach((button) => {
      button.classList.toggle('is-active', button.getAttribute('data-playback-action') === action);
      button.setAttribute('aria-pressed', String(button.getAttribute('data-playback-action') === action));
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.getAttribute('data-playback-action');
      if (action === 'play') {
        isPlaying = true;
        setActionState('play');
        schedule();
      }
      if (action === 'pause') {
        isPlaying = false;
        setActionState('pause');
        clearTimer();
      }
      if (action === 'restart') {
        currentIndex = 0;
        renderStage();
        isPlaying = true;
        setActionState('play');
        schedule();
      }
    });
  });

  speed?.addEventListener('change', () => {
    if (isPlaying) schedule();
  });

  renderStage();
  schedule();
})();
