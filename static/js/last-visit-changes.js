(() => {
  const root = document.getElementById('last-visit-module');
  if (!root) return;

  const summary = document.getElementById('last-visit-summary');
  const details = document.getElementById('last-visit-details');
  const seenAtEl = document.getElementById('last-visit-seen-at');

  const latestIso = root.dataset.latestDate || '';
  const latestTitle = root.dataset.latestTitle || 'Latest changelog entry';
  const latestUrl = root.dataset.latestUrl || '/changelog/';
  const storageKey = 'snowcrab.dev:last-visit-at';

  const safeDate = (iso) => {
    if (!iso) return null;
    const date = new Date(iso);
    return Number.isNaN(date.getTime()) ? null : date;
  };

  const formatDateTime = (date) => date.toLocaleString();

  const latestDate = safeDate(latestIso);
  const lastSeenRaw = window.localStorage.getItem(storageKey);
  const lastSeenDate = safeDate(lastSeenRaw);

  if (!lastSeenDate) {
    if (summary) summary.textContent = 'Welcome back — tracking starts now.';
    if (details) details.textContent = 'On your next visit, this module will highlight what changed since today.';
  } else if (!latestDate) {
    if (summary) summary.textContent = 'Could not compare visits right now.';
    if (details) details.textContent = 'Browse the full changelog for the latest updates.';
  } else if (latestDate > lastSeenDate) {
    if (summary) summary.textContent = 'New changes landed since your last visit.';
    if (details) {
      details.innerHTML = `<a href="${latestUrl}">${latestTitle}</a> was published after your last visit.`;
    }
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
