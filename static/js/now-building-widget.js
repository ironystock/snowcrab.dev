(() => {
  const root = document.getElementById('now-building-widget');
  if (!root) return;

  const prMeta = document.getElementById('now-building-pr-meta');
  const prCount = document.getElementById('now-building-pr-count');
  const prItems = document.getElementById('now-building-pr-items');
  const changeLink = document.getElementById('now-building-change-link');

  const changeTitle = root.dataset.changeTitle;
  const changeUrl = root.dataset.changeUrl;
  const changeDate = root.dataset.changeDate;
  const owner = root.dataset.repoOwner;
  const repo = root.dataset.repoName;

  if (changeLink && changeUrl) {
    changeLink.href = changeUrl;
    changeLink.textContent = changeTitle ? `${changeTitle} (${changeDate})` : 'View latest changelog';
  }

  if (!owner || !repo) return;

  fetch(`https://api.github.com/repos/${owner}/${repo}/pulls?state=open&per_page=3`)
    .then((r) => {
      if (!r.ok) throw new Error(`GitHub API ${r.status}`);
      return r.json();
    })
    .then((prs) => {
      const total = Array.isArray(prs) ? prs.length : 0;
      if (prCount) prCount.textContent = String(total);
      if (prMeta) prMeta.textContent = total > 0 ? `Tracking ${total} open pull request${total === 1 ? '' : 's'}.` : 'No open pull requests right now.';

      if (prItems && total > 0) {
        prItems.innerHTML = prs
          .map((pr) => `<div><a href="${pr.html_url}" target="_blank" rel="noopener noreferrer">#${pr.number} ${pr.title}</a></div>`)
          .join('');
      }
    })
    .catch(() => {
      if (prMeta) prMeta.textContent = 'PR metadata temporarily unavailable.';
      if (prCount) prCount.textContent = '—';
    });
})();
