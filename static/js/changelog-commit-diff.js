(() => {
  const blocks = Array.from(document.querySelectorAll('.changelog-inline-diff[data-commit-sha]'));
  if (!blocks.length) return;

  const repo = 'ironystock/snowcrab.dev';

  const esc = (s = '') => String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const renderPatch = (patch = '') => {
    return patch.split('\n').map((line, i) => {
      const kind = line.startsWith('+') ? 'add' : line.startsWith('-') ? 'del' : 'ctx';
      return `<span class="diff-line diff-line--${kind}"><span class="diff-ln">${i + 1}</span><span class="diff-code">${esc(line) || '&nbsp;'}</span></span>`;
    }).join('');
  };

  const renderFiles = (files = []) => {
    const shown = files.filter((f) => f.patch).slice(0, 8);
    if (!shown.length) return '<p class="meta">No patch text available for this commit.</p>';

    return shown.map((file) => `
      <article class="changelog-inline-diff-file">
        <p class="meta"><strong>${esc(file.filename)}</strong> · +${file.additions} / -${file.deletions}</p>
        <pre class="automation-diff-text"><code>${renderPatch(file.patch)}</code></pre>
      </article>
    `).join('');
  };

  const load = async (details) => {
    if (details.dataset.loaded === 'true' || details.dataset.loading === 'true') return;
    const sha = details.getAttribute('data-commit-sha');
    const body = details.querySelector('.changelog-inline-diff-body');
    if (!sha || !body) return;

    details.dataset.loading = 'true';
    body.innerHTML = '<p class="meta">Loading commit diff…</p>';

    try {
      const res = await fetch(`https://api.github.com/repos/${repo}/commits/${sha}`, { headers: { Accept: 'application/vnd.github+json' } });
      if (!res.ok) throw new Error(`GitHub ${res.status}`);
      const data = await res.json();
      body.innerHTML = `
        <p class="meta">${esc(data.sha?.slice(0, 7) || sha.slice(0, 7))} · ${esc(data.commit?.message?.split('\n')[0] || '')}</p>
        ${renderFiles(data.files || [])}
      `;
      details.dataset.loaded = 'true';
    } catch (err) {
      body.innerHTML = `<p class="meta">Could not load commit diff (${esc(err.message)}).</p>`;
    } finally {
      details.dataset.loading = 'false';
    }
  };

  blocks.forEach((details) => {
    details.addEventListener('toggle', () => {
      if (details.open) load(details);
    });
  });
})();
