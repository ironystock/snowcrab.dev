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
  const imageButtons = Array.from(root.querySelectorAll('[data-image-kind]'));
  const modal = document.getElementById('diff-explorer-image-modal');
  const modalImg = document.getElementById('diff-image-modal-img');
  const modalLabel = document.getElementById('diff-image-modal-label');
  const modalFlipButtons = Array.from(root.querySelectorAll('[data-image-flip]'));
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
  let activeDemo = demos[0];
  let activeImageKind = 'before';

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

  const renderDiffCode = (raw = '') => {
    if (!textCode) return;
    const lines = String(raw).split('\n');
    textCode.innerHTML = lines.map((line, i) => {
      const kind = line.startsWith('+') ? 'add' : line.startsWith('-') ? 'del' : 'ctx';
      const safe = line
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      return `<span class="diff-line diff-line--${kind}"><span class="diff-ln">${i + 1}</span><span class="diff-code">${safe || '&nbsp;'}</span></span>`;
    }).join('');
  };

  const openImageModal = (kind = 'before') => {
    if (!modal || !modalImg || !activeDemo) return;
    activeImageKind = kind === 'after' ? 'after' : 'before';
    const src = activeImageKind === 'after' ? activeDemo.after : activeDemo.before;
    modalImg.src = src || '';
    if (modalLabel) modalLabel.textContent = activeImageKind === 'after' ? 'After' : 'Before';
    modalFlipButtons.forEach((btn) => btn.classList.toggle('is-active', btn.getAttribute('data-image-flip') === activeImageKind));
    if (!modal.open) modal.showModal();
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
    activeDemo = demo;

    renderDiffCode(demo.diff || '');

    if (beforeImg && afterImg) {
      beforeImg.src = demo.before || '';
      afterImg.src = demo.after || '';
    }

    renderReceipts(demo.receipts);
  };

  select.addEventListener('change', render);
  modeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      setMode(btn.getAttribute('data-diff-mode'));
    });
  });

  imageButtons.forEach((btn) => {
    btn.addEventListener('click', () => openImageModal(btn.getAttribute('data-image-kind')));
  });

  modalFlipButtons.forEach((btn) => {
    btn.addEventListener('click', () => openImageModal(btn.getAttribute('data-image-flip')));
  });

  modal?.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      openImageModal('after');
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      openImageModal('before');
    }
  });

  setMode('text');
  render();
})();
