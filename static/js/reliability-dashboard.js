(() => {
  const root = document.getElementById('reliability-dashboard');
  if (!root) return;

  const lastDeployEl = document.getElementById('reliability-last-deploy');
  const ciEl = document.getElementById('reliability-ci-status');
  const incidentsEl = document.getElementById('reliability-incidents');
  const lastDeployLinkEl = document.getElementById('reliability-last-deploy-link');
  const ciLinkEl = document.getElementById('reliability-ci-link');

  const owner = root.dataset.repoOwner;
  const repo = root.dataset.repoName;
  if (!owner || !repo) return;

  const fmt = (iso) => {
    if (!iso) return 'Unknown';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return 'Unknown';
    return d.toLocaleString();
  };

  // Last deploy proxy: latest commit to main branch.
  fetch(`https://api.github.com/repos/${owner}/${repo}/commits/main`)
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error('commit fetch failed'))))
    .then((commit) => {
      if (lastDeployEl) lastDeployEl.textContent = fmt(commit?.commit?.author?.date);
      if (lastDeployLinkEl && commit?.html_url) {
        lastDeployLinkEl.href = commit.html_url;
        lastDeployLinkEl.hidden = false;
      }
    })
    .catch(() => {
      if (lastDeployEl) lastDeployEl.textContent = 'Unavailable';
      if (lastDeployLinkEl) lastDeployLinkEl.hidden = true;
    });

  // CI status from latest workflow run on main.
  fetch(`https://api.github.com/repos/${owner}/${repo}/actions/runs?branch=main&per_page=1`)
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error('ci fetch failed'))))
    .then((data) => {
      const run = data?.workflow_runs?.[0];
      if (!run) {
        if (ciEl) ciEl.textContent = 'No recent runs';
        return;
      }
      const status = run.status === 'completed' ? (run.conclusion || 'completed') : run.status;
      if (ciEl) ciEl.textContent = `${status} (${fmt(run.updated_at)})`;
      if (ciLinkEl && run?.html_url) {
        ciLinkEl.href = run.html_url;
        ciLinkEl.hidden = false;
      }
    })
    .catch(() => {
      if (ciEl) ciEl.textContent = 'Unavailable';
      if (ciLinkEl) ciLinkEl.hidden = true;
    });

  // Recent incident/fix signals from changelog titles.
  fetch('/changelog/index.xml')
    .then((r) => (r.ok ? r.text() : Promise.reject(new Error('rss fetch failed'))))
    .then((xmlText) => {
      const xml = new DOMParser().parseFromString(xmlText, 'text/xml');
      const items = Array.from(xml.querySelectorAll('item')).slice(0, 5);
      const filtered = items
        .map((item) => ({
          title: item.querySelector('title')?.textContent || '',
          link: item.querySelector('link')?.textContent || '#',
        }))
        .filter(({ title }) => /fix|incident|reliability|stabil|error|issue/i.test(title))
        .slice(0, 3);

      if (!incidentsEl) return;
      if (filtered.length === 0) {
        incidentsEl.textContent = 'No recent incident/fix-tagged entries.';
        return;
      }

      incidentsEl.innerHTML = filtered
        .map(({ title, link }) => `<div><a href="${link}">${title}</a></div>`)
        .join('');
    })
    .catch(() => {
      if (incidentsEl) incidentsEl.textContent = 'Unavailable';
    });
})();
