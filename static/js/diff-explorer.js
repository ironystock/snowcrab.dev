(() => {
  const root = document.getElementById('automation-diff-explorer');
  const dataEl = document.getElementById('diff-explorer-data');
  if (!root || !dataEl) return;

  const select = document.getElementById('diff-explorer-select');
  const modeButtons = Array.from(root.querySelectorAll('[data-diff-mode]'));
  const textWrap = document.getElementById('diff-explorer-text');
  const textCode = textWrap?.querySelector('code');
  const imageWrap = document.getElementById('diff-explorer-image');
  const beforeImg = document.getElementById('diff-explorer-before');
  const afterImg = document.getElementById('diff-explorer-after');
  const beforeLink = document.getElementById('diff-explorer-before-link');
  const afterLink = document.getElementById('diff-explorer-after-link');
  const receiptsWrap = document.querySelector('#diff-explorer-receipts span');

  let demos = [];
  try {
    demos = JSON.parse(dataEl.textContent || '[]');
  } catch (_) {
    demos = [];
  }

  if (!Array.isArray(demos) || demos.length === 0 || !select) return;

  demos.forEach((demo, index) => {
    const opt = document.createElement('option');
    opt.value = String(index);
    opt.textContent = demo.title || `Demo ${index + 1}`;
    select.appendChild(opt);
  });

  let activeMode = 'text';

  const setMode = (mode) => {
    activeMode = mode === 'image' ? 'image' : 'text';
    const showImage = activeMode === 'image';
    if (textWrap) textWrap.hidden = showImage;
    if (imageWrap) imageWrap.hidden = !showImage;

    modeButtons.forEach((btn) => {
      const isActive = btn.getAttribute('data-diff-mode') === activeMode;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  };

  const renderReceipts = (receipts) => {
    if (!receiptsWrap) return;
    const links = Array.isArray(receipts) ? receipts : [];
    if (links.length === 0) {
      receiptsWrap.textContent = 'No receipts linked.';
      return;
    }

    receiptsWrap.innerHTML = links
      .map((item) => `<a href="${item.url || '#'}">${item.label || 'Receipt'}</a>`)
      .join(' · ');
  };

  const render = () => {
    const index = Number.parseInt(select.value || '0', 10);
    const demo = demos[index] || demos[0];
    if (!demo) return;

    if (textCode) textCode.textContent = demo.diff || '';

    if (beforeImg && afterImg && beforeLink && afterLink) {
      beforeImg.src = demo.before || '';
      afterImg.src = demo.after || '';
      beforeLink.href = demo.before || '#';
      afterLink.href = demo.after || '#';
    }

    renderReceipts(demo.receipts);
  };

  select.addEventListener('change', render);
  modeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      setMode(btn.getAttribute('data-diff-mode'));
    });
  });

  setMode('text');
  render();
})();
