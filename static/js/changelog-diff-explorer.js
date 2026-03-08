(() => {
  const root = document.getElementById('changelog-diff-explorer');
  const dataEl = document.getElementById('changelog-diff-explorer-data');
  if (!root || !dataEl) return;

  const select = document.getElementById('changelog-diff-select');
  const modeButtons = Array.from(root.querySelectorAll('[data-changelog-diff-mode]'));
  const textWrap = document.getElementById('changelog-diff-text');
  const textCode = textWrap?.querySelector('code');
  const imageWrap = document.getElementById('changelog-diff-image');
  const beforeImg = document.getElementById('changelog-diff-before');
  const afterImg = document.getElementById('changelog-diff-after');
  const imageButtons = Array.from(root.querySelectorAll('[data-changelog-image-kind]'));
  const modal = document.getElementById('changelog-diff-image-modal');
  const modalImg = document.getElementById('changelog-diff-modal-img');
  const modalLabel = document.getElementById('changelog-diff-modal-label');
  const modalFlipButtons = Array.from(root.querySelectorAll('[data-changelog-image-flip]'));
  const receiptsWrap = document.querySelector('#changelog-diff-receipts span');

  let entries = [];
  try {
    const parsed = JSON.parse(dataEl.textContent || '[]');
    entries = typeof parsed === 'string' ? JSON.parse(parsed) : parsed;
  } catch {
    entries = [];
  }
  if (!Array.isArray(entries) || !entries.length || !select) return;

  entries.forEach((entry, index) => {
    const opt = document.createElement('option');
    opt.value = String(index);
    opt.textContent = entry.title || `Change ${index + 1}`;
    select.appendChild(opt);
  });

  let activeEntry = entries[0];

  const renderReceipts = (receipts) => {
    if (!receiptsWrap) return;
    const links = Array.isArray(receipts) ? receipts : [];
    if (!links.length) {
      receiptsWrap.textContent = 'No receipts linked.';
      return;
    }
    receiptsWrap.innerHTML = links.map((item) => `<a href="${item.url || '#'}">${item.label || 'Receipt'}</a>`).join(' · ');
  };

  const renderDiffCode = (raw = '') => {
    if (!textCode) return;
    const lines = String(raw).split('\n');
    textCode.innerHTML = lines.map((line, i) => {
      const kind = line.startsWith('+') ? 'add' : line.startsWith('-') ? 'del' : 'ctx';
      const safe = line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return `<span class="diff-line diff-line--${kind}"><span class="diff-ln">${i + 1}</span><span class="diff-code">${safe || '&nbsp;'}</span></span>`;
    }).join('');
  };

  const openImageModal = (kind = 'before') => {
    if (!modal || !modalImg || !activeEntry) return;
    const activeKind = kind === 'after' ? 'after' : 'before';
    const src = activeKind === 'after' ? activeEntry.after : activeEntry.before;
    modalImg.src = src || '';
    if (modalLabel) modalLabel.textContent = activeKind === 'after' ? 'After' : 'Before';
    modalFlipButtons.forEach((btn) => btn.classList.toggle('is-active', btn.getAttribute('data-changelog-image-flip') === activeKind));
    if (!modal.open) modal.showModal();
  };

  const setMode = (mode) => {
    const active = mode === 'image' ? 'image' : 'text';
    if (textWrap) textWrap.hidden = active === 'image';
    if (imageWrap) imageWrap.hidden = active !== 'image';
    modeButtons.forEach((btn) => {
      const isActive = btn.getAttribute('data-changelog-diff-mode') === active;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  };

  const render = () => {
    const idx = Number.parseInt(select.value || '0', 10);
    const entry = entries[idx] || entries[0];
    if (!entry) return;
    activeEntry = entry;
    renderDiffCode(entry.diff || '');
    if (beforeImg && afterImg) {
      beforeImg.src = entry.before || '';
      afterImg.src = entry.after || '';
    }
    renderReceipts(entry.receipts);
  };

  select.addEventListener('change', render);
  modeButtons.forEach((btn) => btn.addEventListener('click', () => setMode(btn.getAttribute('data-changelog-diff-mode'))));
  imageButtons.forEach((btn) => btn.addEventListener('click', () => openImageModal(btn.getAttribute('data-changelog-image-kind'))));
  modalFlipButtons.forEach((btn) => btn.addEventListener('click', () => openImageModal(btn.getAttribute('data-changelog-image-flip'))));

  modal?.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); openImageModal('after'); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); openImageModal('before'); }
  });

  setMode('text');
  render();
})();
