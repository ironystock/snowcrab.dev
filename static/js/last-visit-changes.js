(() => {
  const root = document.getElementById('last-visit-module');
  if (!root) return;

  const summary = document.getElementById('last-visit-summary');
  const details = document.getElementById('last-visit-details');
  const seenAtEl = document.getElementById('last-visit-seen-at');
  const listEl = document.getElementById('last-visit-list');
  const dataEl = document.getElementById('last-visit-data');

  const latestIso = root.dataset.latestDate || '';
  const latestTitle = root.dataset.latestTitle || 'Latest changelog entry';
  const latestUrl = root.dataset.latestUrl || '/changelog/';
  const storageKey = 'snowcrab.dev:last-visit-at';

  let entries = [];
  try {
    const parsed = JSON.parse(dataEl?.textContent || '[]');
    entries = typeof parsed === 'string' ? JSON.parse(parsed) : parsed;
  } catch (_) {
    entries = [];
  }

  if (!Array.isArray(entries)) entries = [];

  const safeDate = (iso) => {
    if (!iso) return null;
    const date = new Date(iso);
    return Number.isNaN(date.getTime()) ? null : date;
  };

  const formatDateTime = (date) => date.toLocaleString();

  const latestDate = safeDate(latestIso);
  const lastSeenRaw = window.localStorage.getItem(storageKey);
  const lastSeenDate = safeDate(lastSeenRaw);

  const rankCategory = (category) => {
    switch ((category || '').toLowerCase()) {
      case 'reliability':
        return 4;
      case 'ops':
        return 3;
      case 'content':
        return 2;
      case 'design':
        return 1;
      default:
        return 0;
    }
  };

  const newEntries = lastSeenDate
    ? entries
      .map((entry) => ({
        ...entry,
        _date: safeDate(entry?.date),
        _categoryRank: rankCategory(entry?.category),
      }))
      .filter((entry) => entry._date && entry._date > lastSeenDate)
      .sort((a, b) => {
        if (a._categoryRank !== b._categoryRank) return b._categoryRank - a._categoryRank;
        return b._date - a._date;
      })
    : [];

  if (!lastSeenDate) {
    if (summary) summary.textContent = 'Welcome back — tracking starts now.';
    if (details) details.textContent = 'On your next visit, this module will rank and highlight the most important recent changes.';
  } else if (!latestDate) {
    if (summary) summary.textContent = 'Could not compare visits right now.';
    if (details) details.textContent = 'Browse the full changelog for the latest updates.';
  } else if (newEntries.length > 0) {
    const top = newEntries.slice(0, 3);
    const reliabilityCount = newEntries.filter((entry) => (entry.category || '').toLowerCase() === 'reliability').length;

    if (summary) {
      summary.textContent = `${newEntries.length} new change${newEntries.length === 1 ? '' : 's'} since your last visit${reliabilityCount > 0 ? ` · ${reliabilityCount} reliability` : ''}.`;
    }
    if (details) details.textContent = 'Top signals first (reliability/ops prioritized):';

    if (listEl) {
      listEl.innerHTML = top.map((entry) => {
        const category = (entry.category || 'ops').toLowerCase();
        const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);
        return `
        <li>
          <a href="${entry.url || '/changelog/'}">${entry.title || 'Changelog entry'}</a>
          <span class="muted">· ${entry.dateLabel || ''} · ${categoryLabel}</span>
        </li>
      `;
      }).join('');
      listEl.hidden = false;
    }
  } else if (latestDate > lastSeenDate) {
    if (summary) summary.textContent = 'New changes landed since your last visit.';
    if (details) details.innerHTML = `<a href="${latestUrl}">${latestTitle}</a> was published after your last visit.`;
  } else {
    if (summary) summary.textContent = 'You are fully up to date.';
    if (details) details.textContent = 'No newer changelog entries since your last visit.';
  }

  if (seenAtEl) {
    seenAtEl.textContent = lastSeenDate ? formatDateTime(lastSeenDate) : 'First tracked visit';
  }

  const recordVisit = () => {
    try {
      window.localStorage.setItem(storageKey, new Date().toISOString());
    } catch (_) {
      // no-op when storage is unavailable
    }
  };

  window.addEventListener('beforeunload', recordVisit);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') recordVisit();
  });
})();
