(() => {
  const root = document.getElementById('reliability-dashboard');
  if (!root) return;

  const lastDeployEl = document.getElementById('reliability-last-deploy');
  const ciEl = document.getElementById('reliability-ci-status');
  const incidentsEl = document.getElementById('reliability-incidents');
  const lastDeployLinkEl = document.getElementById('reliability-last-deploy-link');
  const ciLinkEl = document.getElementById('reliability-ci-link');
  const refreshedEl = document.getElementById('reliability-last-refreshed');
  const refreshedRelativeEl = document.getElementById('reliability-last-refreshed-relative');
  const summaryLiveEl = document.getElementById('reliability-summary-live');
  const stripDeployEl = document.getElementById('reliability-strip-deploy');
  const stripCiEl = document.getElementById('reliability-strip-ci');
  const stripIncidentsEl = document.getElementById('reliability-strip-incidents');
  const refreshBtn = document.getElementById('reliability-refresh');
  const overallEl = document.getElementById('reliability-overall');
  const stripSummaryEl = document.getElementById('reliability-strip-summary');
  const deployRowStateEl = document.getElementById('reliability-row-deploy-state');
  const ciRowStateEl = document.getElementById('reliability-row-ci-state');
  const incidentsRowStateEl = document.getElementById('reliability-row-incidents-state');
  const stripLinks = [stripDeployEl, stripCiEl, stripIncidentsEl].filter(Boolean);

  const owner = root.dataset.repoOwner;
  const repo = root.dataset.repoName;
  if (!owner || !repo) return;

  const focusHashTarget = () => {
    const hash = window.location.hash;
    if (!hash || !hash.startsWith('#reliability-row-')) return;

    const target = document.querySelector(hash);
    if (!(target instanceof HTMLElement)) return;

    target.focus({ preventScroll: true });
  };

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

  const setRowState = (el, tone, text) => {
    if (!el) return;
    el.classList.remove('reliability-row-state--ok', 'reliability-row-state--warn', 'reliability-row-state--bad');
    if (tone === 'ok') el.classList.add('reliability-row-state--ok');
    if (tone === 'warn') el.classList.add('reliability-row-state--warn');
    if (tone === 'bad') el.classList.add('reliability-row-state--bad');
    if (text) el.textContent = text;
  };

  const setStripTone = (el, tone, text) => {
    if (!el) return;
    el.classList.remove('status-pill--ok', 'status-pill--watch', 'status-pill--bad');
    if (tone === 'ok') el.classList.add('status-pill--ok');
    if (tone === 'warn') el.classList.add('status-pill--watch');
    if (tone === 'bad') el.classList.add('status-pill--bad');

    if (text) {
      el.textContent = text;
      const [label, state] = text.split('·').map((part) => part.trim());
      if (label && state) {
        el.setAttribute('aria-label', `${label} status: ${state}`);
      } else {
        el.setAttribute('aria-label', text);
      }
    }

    if (tone) {
      el.dataset.state = tone;
    } else {
      delete el.dataset.state;
    }

    updateOverallTone();
  };

  const updateOverallTone = () => {
    const states = [stripDeployEl, stripCiEl, stripIncidentsEl]
      .map((el) => el?.dataset?.state)
      .filter(Boolean);

    const counts = {
      ok: states.filter((entry) => entry === 'ok').length,
      warn: states.filter((entry) => entry === 'warn').length,
      bad: states.filter((entry) => entry === 'bad').length,
    };

    let state = 'warn';
    if (states.some((entry) => entry === 'bad')) state = 'bad';
    else if (states.length > 0 && states.every((entry) => entry === 'ok')) state = 'ok';

    if (overallEl) {
      overallEl.classList.remove('status-pill--ok', 'status-pill--watch', 'status-pill--bad');
      if (state === 'ok') {
        overallEl.classList.add('status-pill--ok');
        overallEl.textContent = 'Overall · Healthy';
        overallEl.setAttribute('aria-label', 'Overall reliability status: healthy');
      } else if (state === 'bad') {
        overallEl.classList.add('status-pill--bad');
        overallEl.textContent = 'Overall · Down';
        overallEl.setAttribute('aria-label', 'Overall reliability status: down');
      } else {
        overallEl.classList.add('status-pill--watch');
        overallEl.textContent = 'Overall · Degraded';
        overallEl.setAttribute('aria-label', 'Overall reliability status: degraded');
      }
    }

    if (stripSummaryEl) {
      stripSummaryEl.textContent = `State mix · Healthy ${counts.ok} · Degraded ${counts.warn} · Down ${counts.bad}`;
    }
  };

  const fmt = (iso) => {
    if (!iso) return 'Unknown';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return 'Unknown';
    return d.toLocaleString();
  };

  let lastRefreshedAt = null;

  const formatRelativeTime = (date) => {
    if (!date) return '(pending)';
    const diffMs = Math.max(0, Date.now() - date.getTime());
    const diffSec = Math.floor(diffMs / 1000);

    if (diffSec < 5) return '(just now)';
    if (diffSec < 60) return `(${diffSec}s ago)`;

    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `(${diffMin}m ago)`;

    const diffHr = Math.floor(diffMin / 60);
    if (diffHr < 24) return `(${diffHr}h ago)`;

    const diffDay = Math.floor(diffHr / 24);
    return `(${diffDay}d ago)`;
  };

  const updateRelativeRefreshed = () => {
    if (!refreshedRelativeEl) return;
    refreshedRelativeEl.textContent = formatRelativeTime(lastRefreshedAt);
  };

  const setRefreshedNow = () => {
    if (!refreshedEl) return;
    const now = new Date();
    lastRefreshedAt = now;
    refreshedEl.textContent = now.toLocaleString();
    refreshedEl.setAttribute('datetime', now.toISOString());
    updateRelativeRefreshed();
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

  const runRefresh = () => {
    if (refreshBtn) {
      refreshBtn.disabled = true;
      refreshBtn.setAttribute('aria-busy', 'true');
      refreshBtn.textContent = 'Refreshing…';
    }
    root.setAttribute('aria-busy', 'true');

    setStripTone(stripDeployEl, 'warn', 'Deploy · Loading');
    setStripTone(stripCiEl, 'warn', 'CI · Loading');
    setStripTone(stripIncidentsEl, 'warn', 'Incidents · Loading');
    setRowState(deployRowStateEl, 'warn', 'Loading');
    setRowState(ciRowStateEl, 'warn', 'Loading');
    setRowState(incidentsRowStateEl, 'warn', 'Loading');

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
        setRowState(deployRowStateEl, 'ok', 'Healthy');
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
        setRowState(deployRowStateEl, kind === 'unavailable' ? 'bad' : 'warn', kind === 'unavailable' ? 'Down' : 'Degraded');
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
          setRowState(ciRowStateEl, 'warn', 'No runs');
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
        setRowState(ciRowStateEl, tone === 'success' ? 'ok' : tone === 'warn' ? 'warn' : 'bad', tone === 'success' ? 'Healthy' : tone === 'warn' ? 'Running' : 'Failing');
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
        setRowState(ciRowStateEl, kind === 'unavailable' ? 'bad' : 'warn', kind === 'unavailable' ? 'Down' : 'Degraded');
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
          setRowState(incidentsRowStateEl, 'ok', 'Clear');
          return;
        }

        incidentsSummary = `${filtered.length} incident-related entr${filtered.length === 1 ? 'y' : 'ies'}`;
        setStripTone(stripIncidentsEl, 'warn', `Incidents · ${filtered.length}`);
        setRowState(incidentsRowStateEl, 'warn', `${filtered.length} recent`);
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
          setRowState(incidentsRowStateEl, 'warn', 'Delayed');
          if (incidentsEl) incidentsEl.textContent = 'Timed out';
          return;
        }

        if (kind === 'rate-limit') {
          incidentsSummary = 'incident feed rate limited';
          setStripTone(stripIncidentsEl, 'warn', 'Incidents · Limited');
          setRowState(incidentsRowStateEl, 'warn', 'Limited');
          if (incidentsEl) incidentsEl.textContent = 'Rate limited';
          return;
        }

        incidentsSummary = 'incidents unavailable';
        setStripTone(stripIncidentsEl, 'bad', 'Incidents · Down');
        setRowState(incidentsRowStateEl, 'bad', 'Down');
        if (incidentsEl) incidentsEl.textContent = 'Unavailable';
      })
      .finally(() => {
        if (incidentsEl) incidentsEl.setAttribute('aria-busy', 'false');
      });

    Promise.allSettled([deployReq, ciReq, incidentsReq]).finally(() => {
      setRefreshedNow();
      root.setAttribute('aria-busy', 'false');
      if (refreshBtn) {
        refreshBtn.disabled = false;
        refreshBtn.setAttribute('aria-busy', 'false');
        refreshBtn.textContent = 'Refresh status';
      }

      if (summaryLiveEl) {
        const deployTone = getToneLabel(lastDeployEl);
        const ciTone = getToneLabel(ciEl);
        summaryLiveEl.textContent = `Reliability updated. Deploy status: ${deployTone}. CI status: ${ciTone}. Incident feed: ${incidentsSummary}.`;
      }
    });
  };

  if (refreshBtn) {
    refreshBtn.addEventListener('click', runRefresh);
  }

  stripLinks.forEach((link) => {
    link.addEventListener('click', () => {
      window.requestAnimationFrame(focusHashTarget);
    });
  });

  window.addEventListener('hashchange', focusHashTarget);

  updateRelativeRefreshed();
  window.setInterval(updateRelativeRefreshed, 30000);

  runRefresh();
  focusHashTarget();
})();
