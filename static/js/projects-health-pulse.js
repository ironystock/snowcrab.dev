(() => {
  const canvases = [...document.querySelectorAll('[data-health-pulse]')];
  if (!canvases.length) return;

  const status = document.querySelector('[data-health-pulse-status]');

  const css = getComputedStyle(document.documentElement);
  const tone = {
    accent: css.getPropertyValue('--accent').trim() || '#67e8f9',
    primary: css.getPropertyValue('--primary').trim() || '#ff6470',
    border: css.getPropertyValue('--border').trim() || '#334155',
    text: css.getPropertyValue('--text').trim() || '#e2e8f0',
    meta: css.getPropertyValue('--meta').trim() || '#94a3b8',
  };

  const lanes = {
    capacity: { unit: '%', values: [66, 70, 72, 74, 73, 77, 79], goodHigh: true },
    freshness: { unit: '%', values: [88, 91, 90, 92, 94, 95, 96], goodHigh: true },
    blocker: { unit: '%', values: [18, 17, 15, 16, 13, 12, 10], goodHigh: false },
    confidence: { unit: '%', values: [72, 74, 76, 78, 79, 81, 83], goodHigh: true },
  };

  const hexToRgb = (hex) => {
    const safe = hex.replace('#', '');
    const full = safe.length === 3 ? safe.split('').map((c) => c + c).join('') : safe;
    const int = parseInt(full.slice(0, 6), 16);
    return {
      r: (int >> 16) & 255,
      g: (int >> 8) & 255,
      b: int & 255,
    };
  };

  const withAlpha = (hex, alpha) => {
    const { r, g, b } = hexToRgb(hex.startsWith('#') ? hex : '#67e8f9');
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const drawSpark = (canvas, points, laneKey, step = 1) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(180, Math.floor(rect.width || canvas.width));
    const height = Math.max(60, Math.floor(rect.height || canvas.height));

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const accent = laneKey === 'blocker' ? tone.primary : tone.accent;
    const min = 0;
    const max = 100;
    const pad = 8;
    const chartW = width - pad * 2;
    const chartH = height - pad * 2;

    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = withAlpha(tone.border, 0.3);
    ctx.lineWidth = 1;
    for (let i = 1; i <= 3; i += 1) {
      const y = pad + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(pad, y);
      ctx.lineTo(width - pad, y);
      ctx.stroke();
    }

    ctx.beginPath();
    points.forEach((value, i) => {
      const x = pad + (chartW / (points.length - 1)) * i;
      const eased = points[0] + (value - points[0]) * step;
      const y = pad + chartH - ((eased - min) / (max - min)) * chartH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });

    ctx.strokeStyle = accent;
    ctx.lineWidth = 2;
    ctx.stroke();

    const latest = points[points.length - 1];
    const latestX = width - pad;
    const latestY = pad + chartH - ((points[0] + (latest - points[0]) * step - min) / (max - min)) * chartH;

    ctx.fillStyle = withAlpha(accent, 0.25);
    ctx.beginPath();
    ctx.arc(latestX, latestY, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = accent;
    ctx.beginPath();
    ctx.arc(latestX, latestY, 3, 0, Math.PI * 2);
    ctx.fill();
  };

  const updateCardValue = (laneKey, value) => {
    const card = document.querySelector(`[data-pulse-lane="${laneKey}"]`);
    if (!card) return;

    const lane = lanes[laneKey];
    const valTarget = card.querySelector('[data-pulse-value]');
    if (valTarget) {
      valTarget.textContent = `${Math.round(value)}${lane.unit}`;
    }

    const good = lane.goodHigh ? value >= 70 : value <= 18;
    card.classList.toggle('is-good', good);
    card.classList.toggle('is-watch', !good);
  };

  let tick = 0;
  const totalFrames = 45;
  const animate = () => {
    tick += 1;
    const step = Math.min(1, tick / totalFrames);

    canvases.forEach((canvas) => {
      const laneKey = canvas.getAttribute('data-health-pulse');
      const lane = lanes[laneKey];
      if (!lane) return;
      drawSpark(canvas, lane.values, laneKey, step);
      updateCardValue(laneKey, lane.values[lane.values.length - 1]);
    });

    if (step < 1) {
      requestAnimationFrame(animate);
    } else if (status) {
      status.textContent = 'Pulse module live — synced to lane-health signal ownership.';
    }
  };

  if (status) {
    status.textContent = 'Rendering lane pulse signals…';
  }

  requestAnimationFrame(animate);
  window.addEventListener('resize', () => {
    canvases.forEach((canvas) => {
      const laneKey = canvas.getAttribute('data-health-pulse');
      const lane = lanes[laneKey];
      if (!lane) return;
      drawSpark(canvas, lane.values, laneKey, 1);
    });
  }, { passive: true });
})();
