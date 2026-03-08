(() => {
  const targets = [...document.querySelectorAll('[data-webgpu-prototype]')];
  if (!targets.length) {
    const legacy = document.getElementById('webgpu-prototype-canvas');
    if (legacy) targets.push(legacy);
  }
  if (!targets.length) return;

  const supportsWebGPU = typeof navigator !== 'undefined' && !!navigator.gpu;

  const setupCanvas = (canvas) => {
    const statusTargetId = canvas.getAttribute('data-status-target');
    const status = statusTargetId
      ? document.getElementById(statusTargetId)
      : document.getElementById('webgpu-prototype-status');

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const syncSize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    const css = getComputedStyle(document.documentElement);
    const raw = {
      bg: css.getPropertyValue('--bg').trim() || '#0b1220',
      bgElev: css.getPropertyValue('--bg-elev').trim() || '#111827',
      primary: css.getPropertyValue('--primary').trim() || '#ff6470',
      accent: css.getPropertyValue('--accent').trim() || '#67e8f9',
      muted: css.getPropertyValue('--muted').trim() || '#94a3b8',
      text: css.getPropertyValue('--text').trim() || '#e2e8f0',
      aurora1: css.getPropertyValue('--aurora-ink-1').trim(),
      aurora2: css.getPropertyValue('--aurora-ink-2').trim(),
      aurora3: css.getPropertyValue('--aurora-ink-3').trim(),
    };

    const toRgba = (color, alpha = 1) => {
      if (!color) return `rgba(255,255,255,${alpha})`;
      if (color.startsWith('rgba(')) {
        return color.replace(/rgba\(([^)]+),[^,\s)]+\)$/, `rgba($1, ${alpha})`);
      }
      if (color.startsWith('rgb(')) {
        return color.replace('rgb(', 'rgba(').replace(')', `, ${alpha})`);
      }
      if (color.startsWith('#')) {
        const hex = color.slice(1);
        const full = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
        const n = parseInt(full.slice(0, 6), 16);
        const r = (n >> 16) & 255;
        const g = (n >> 8) & 255;
        const b = n & 255;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      }
      return color;
    };

    const palette = {
      deep: toRgba(raw.bg, 0.9),
      cyan: raw.aurora2 || toRgba(raw.accent, 0.24),
      violet: raw.aurora3 || toRgba(raw.primary, 0.2),
      rose: raw.aurora1 || toRgba(raw.primary, 0.18),
      ice: toRgba(raw.text, 0.16),
      line: toRgba(raw.muted, 0.16),
      glow: toRgba(raw.accent, 0.24),
    };

    const crabImage = new Image();
    crabImage.src = '/media/avatars/snowcrab-avatar.png';
    const crabWalk = {
      active: false,
      direction: 1,
      startMs: 0,
      durationMs: 7200,
      yRatio: 0.35,
      startScale: 0.9,
      endScale: 1.1,
      nextStartMs: (typeof performance !== 'undefined' ? performance.now() : Date.now()) + 2800,
    };

    const drawCrabWalk = (nowMs, width, height) => {
      if (!crabImage.complete) return;

      if (!crabWalk.active && nowMs >= crabWalk.nextStartMs) {
        crabWalk.active = true;
        crabWalk.startMs = nowMs;
        crabWalk.durationMs = 5200 + Math.random() * 2600;
        crabWalk.direction = Math.random() > 0.5 ? 1 : -1;
        crabWalk.yRatio = 0.10 + Math.random() * 0.65; // 10%..75%
        crabWalk.startScale = 0.5;
        crabWalk.endScale = 1.5;
      }

      if (!crabWalk.active) return;

      const progress = Math.min(1, (nowMs - crabWalk.startMs) / crabWalk.durationMs);
      const baseY = height * crabWalk.yRatio;
      const startX = crabWalk.direction === 1 ? -width * 0.1 : width * 1.1;
      const endX = crabWalk.direction === 1 ? width * 1.1 : -width * 0.1;
      const x = startX + (endX - startX) * progress;
      const zScale = crabWalk.startScale + ((crabWalk.endScale - crabWalk.startScale) * progress);
      const bob = Math.sin(progress * Math.PI * 12) * 4.2;
      const crabW = width * 0.05 * zScale;
      const crabH = crabW;

      ctx.save();
      ctx.globalAlpha = 0.9;
      ctx.translate(x, baseY + bob);
      if (crabWalk.direction === -1) ctx.scale(-1, 1);
      ctx.shadowColor = 'rgba(34, 211, 238, 0.28)';
      ctx.shadowBlur = 10;
      ctx.drawImage(crabImage, -crabW / 2, -crabH / 2, crabW, crabH);
      ctx.restore();

      if (progress >= 1) {
        crabWalk.active = false;
        crabWalk.nextStartMs = nowMs + 9000 + Math.random() * 13000;
      }
    };

    const drawFallback = (t = 0) => {
      const { width, height } = canvas;
      const g = ctx.createRadialGradient(width * 0.25, height * 0.15, 0, width * 0.55, height * 0.6, width * 0.9);
      g.addColorStop(0, palette.cyan);
      g.addColorStop(0.5, palette.violet);
      g.addColorStop(1, palette.deep);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      // Snowcrab/Ironystock vibe: flowing bands + scanline texture (not corporate grid)
      for (let i = 0; i < 3; i += 1) {
        const yBase = height * (0.28 + i * 0.2);
        ctx.strokeStyle = i === 1 ? palette.rose : palette.ice;
        ctx.lineWidth = i === 1 ? 2.2 : 1.4;
        ctx.beginPath();
        for (let x = 0; x <= width; x += 10) {
          const y = yBase + Math.sin((x * 0.015) + (t * (1.8 + i * 0.4))) * (12 + i * 6);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.strokeStyle = palette.line;
      ctx.lineWidth = 1;
      for (let y = 2; y < height; y += 4) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    syncSize();
    drawFallback();

    if (!supportsWebGPU) {
      if (status) status.textContent = 'Fallback mode active (WebGPU unavailable).';
      return;
    }

    if (status) status.textContent = 'WebGPU-capable browser detected. Enhanced animation layer active.';

    let t = 0;
    const animate = () => {
      t += 0.014;
      syncSize();
      drawFallback(t);
      const { width, height } = canvas;
      const nowMs = typeof performance !== 'undefined' ? performance.now() : Date.now();

      // Orbiting "claw nodes" with connective filaments
      const nodes = [];
      for (let i = 0; i < 14; i += 1) {
        const r = 60 + (i % 4) * 16;
        const cx = width * 0.5 + Math.cos(t * 0.9 + i * 0.8) * (width * 0.22);
        const cy = height * 0.5 + Math.sin(t * 1.1 + i * 0.65) * (height * 0.26);
        const x = cx + Math.cos(t * 2 + i) * r * 0.25;
        const y = cy + Math.sin(t * 1.8 + i) * r * 0.18;
        nodes.push({ x, y });
      }

      ctx.strokeStyle = palette.glow;
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        const b = nodes[(i + 3) % nodes.length];
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      ctx.fillStyle = 'rgba(125, 211, 252, 0.32)';
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3.2, 0, Math.PI * 2);
        ctx.fill();
      }

      drawCrabWalk(nowMs, width, height);

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    window.addEventListener('resize', syncSize, { passive: true });
  };

  targets.forEach(setupCanvas);
})();
