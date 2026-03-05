(() => {
  const root = document.getElementById('reliability-dashboard');
  if (!root) return;

  const lastDeployEl = document.getElementById('reliability-last-deploy');
  const ciEl = document.getElementById('reliability-ci-status');
  const incidentsEl = document.getElementById('reliability-incidents');
  const lastDeployLinkEl = document.getElementById('reliability-last-deploy-link');
  const ciLinkEl = document.getElementById('reliability-ci-link');
  const refreshedEl = document.getElementById('reliability-last-refreshed');
  const summaryLiveEl = document.getElementById('reliability-summary-live');
  const stripDeployEl = document.getElementById('reliability-strip-deploy');
  const stripCiEl = document.getElementById('reliability-strip-ci');
  const stripIncidentsEl = document.getElementById('reliability-strip-incidents');

  const owner = root.dataset.repoOwner;
  const repo = root.dataset.repoName;
  if (!owner || !repo) return;

  root.setAttribute('aria-busy', 'true');

  const fetchWithTimeout = (url, timeoutMs = 8000) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    return fetch(url, { signal: controller.signal })
      .finally(() => clearTimeout(timer));
  };

  const setStatusTone = (el, tone) => {
    if (!el) return;
    el.classList.remove('reliability-status--success', 'reliability-status--warn', 'reliability-status--bad');
    if (tone) el.classList.add(`reliability-status--${tone}`);
  };

  const setStripTone = (el, tone, text) => {
    if (!el) return;
    el.classList.remove('status-pill--ok', 'status-pill--watch', 'status-pill--bad');
    if (tone === 'ok') el.classList.add('status-pill--ok');
    if (tone === 'warn') el.classList.add('status-pill--watch');
    if (tone === 'bad') el.classList.add('status-pill--bad');
    if (text) el.textContent = text;
  };

  const fmt = (iso) => {
    if (!iso) return 'Unknown';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return 'Unknown';
    return d.toLocaleString();
  };

  const setRefreshedNow = () => {
    if (refreshedEl) refreshedEl.textContent = new Date().toLocaleString();
  };

  const getToneLabel = (el) => {
    if (!el) return 'unknown';
    if (el.classList.contains('reliability-status--success')) return 'healthy';
    if (el.classList.contains('reliability-status--warn')) return 'warning';
    if (el.classList.contains('reliability-status--bad')) return 'error';
    return 'unknown';
  };

  const classifyError = (error) => {
    if (error?.name === 'AbortError') return 'timeout';

    const message = String(error?.message || '').toLowerCase();
    if (message.includes('429') || message.includes('rate limit')) return 'rate-limit';
    return 'unavailable';
  };

  let incidentsSummary = 'incidents unknown';

  const deployReq = fetchWithTimeout(`https://api.github.com/repos/${owner}/${repo}/commits/main`)
    .then((r) => {
      if (!r.ok) return Promise.reject(new Error(`commit fetch failed (${r.status})`));
      return r.json();
    })
    .then((commit) => {
      if (lastDeployEl) lastDeployEl.textContent = `✅ ${fmt(commit?.commit?.author?.date)}`;
      setStatusTone(lastDeployEl, 'success');
      setStripTone(stripDeployEl, 'ok', 'Deploy · Healthy');
      if (lastDeployLinkEl && commit?.html_url) {
        lastDeployLinkEl.href = commit.html_url;
        lastDeployLinkEl.hidden = false;
      }
    })
    .catch((error) => {
      const kind = classifyError(error);
      if (lastDeployEl) {
        if (kind === 'timeout') lastDeployEl.textContent = '🟡 Timed out';
        else if (kind === 'rate-limit') lastDeployEl.textContent = '🟡 Rate limited';
        else lastDeployEl.textContent = '❌ Unavailable';
      }
      setStatusTone(lastDeployEl, kind === 'unavailable' ? 'bad' : 'warn');
      setStripTone(stripDeployEl, kind === 'unavailable' ? 'bad' : 'warn', kind === 'unavailable' ? 'Deploy · Down' : 'Deploy · Degraded');
      if (lastDeployLinkEl) lastDeployLinkEl.hidden = false;
    });

  const ciReq = fetchWithTimeout(`https://api.github.com/repos/${owner}/${repo}/actions/runs?branch=main&per_page=1`)
    .then((r) => {
      if (!r.ok) return Promise.reject(new Error(`ci fetch failed (${r.status})`));
      return r.json();
    })
    .then((data) => {
      const run = data?.workflow_runs?.[0];
      if (!run) {
        if (ciEl) ciEl.textContent = '⚪ No runs';
        setStatusTone(ciEl, 'warn');
        setStripTone(stripCiEl, 'warn', 'CI · No runs');
        return;
      }
      const status = run.status === 'completed' ? (run.conclusion || 'completed') : run.status;
      const tone = /success|neutral|skipped/i.test(status)
        ? 'success'
        : /queued|in_progress|pending|requested|waiting/i.test(status)
          ? 'warn'
          : 'bad';
      const emoji = tone === 'success' ? '✅' : tone === 'warn' ? '🟡' : '❌';
      if (ciEl) ciEl.textContent = `${emoji} ${status} · ${fmt(run.updated_at)}`;
      setStatusTone(ciEl, tone);
      setStripTone(stripCiEl, tone === 'success' ? 'ok' : tone === 'warn' ? 'warn' : 'bad', tone === 'success' ? 'CI · Healthy' : tone === 'warn' ? 'CI · Running' : 'CI · Failing');
      if (ciLinkEl && run?.html_url) {
        ciLinkEl.href = run.html_url;
        ciLinkEl.hidden = false;
      }
    })
    .catch((error) => {
      const kind = classifyError(error);
      if (ciEl) {
        if (kind === 'timeout') ciEl.textContent = '🟡 Timed out';
        else if (kind === 'rate-limit') ciEl.textContent = '🟡 Rate limited';
        else ciEl.textContent = '❌ Unavailable';
      }
      setStatusTone(ciEl, kind === 'unavailable' ? 'bad' : 'warn');
      setStripTone(stripCiEl, kind === 'unavailable' ? 'bad' : 'warn', kind === 'unavailable' ? 'CI · Down' : 'CI · Degraded');
      if (ciLinkEl) ciLinkEl.hidden = false;
    });

  if (incidentsEl) incidentsEl.setAttribute('aria-busy', 'true');

  const incidentsReq = fetchWithTimeout('/changelog/index.xml')
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
        incidentsSummary = 'no recent incident-tagged entries';
        setStripTone(stripIncidentsEl, 'ok', 'Incidents · Clear');
        return;
      }

      incidentsSummary = `${filtered.length} incident-related entr${filtered.length === 1 ? 'y' : 'ies'}`;
      setStripTone(stripIncidentsEl, 'warn', `Incidents · ${filtered.length}`);
      const list = document.createElement('ul');
      list.className = 'mini-list';

      filtered.forEach(({ title, link }) => {
        const item = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link || '#';
        anchor.textContent = title;
        item.appendChild(anchor);
        list.appendChild(item);
      });

      incidentsEl.replaceChildren(list);
    })
    .catch((error) => {
      const kind = classifyError(error);
      if (kind === 'timeout') {
        incidentsSummary = 'incident feed timed out';
        setStripTone(stripIncidentsEl, 'warn', 'Incidents · Delayed');
        if (incidentsEl) incidentsEl.textContent = 'Timed out';
        return;
      }

      if (kind === 'rate-limit') {
        incidentsSummary = 'incident feed rate limited';
        setStripTone(stripIncidentsEl, 'warn', 'Incidents · Limited');
        if (incidentsEl) incidentsEl.textContent = 'Rate limited';
        return;
      }

      incidentsSummary = 'incidents unavailable';
      setStripTone(stripIncidentsEl, 'bad', 'Incidents · Down');
      if (incidentsEl) incidentsEl.textContent = 'Unavailable';
    })
    .finally(() => {
      if (incidentsEl) incidentsEl.setAttribute('aria-busy', 'false');
    });

  Promise.allSettled([deployReq, ciReq, incidentsReq]).finally(() => {
    setRefreshedNow();
    root.setAttribute('aria-busy', 'false');

    if (summaryLiveEl) {
      const deployTone = getToneLabel(lastDeployEl);
      const ciTone = getToneLabel(ciEl);
      summaryLiveEl.textContent = `Reliability updated. Deploy status: ${deployTone}. CI status: ${ciTone}. Incident feed: ${incidentsSummary}.`;
    }
  });
})();
