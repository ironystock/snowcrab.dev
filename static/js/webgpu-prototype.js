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

    const drawFallback = () => {
      const { width, height } = canvas;
      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, 'rgba(20,173,196,0.24)');
      g.addColorStop(1, 'rgba(124,58,237,0.22)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(255,255,255,0.14)';
      ctx.lineWidth = 1;
      for (let x = 20; x < width; x += 24) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 20; y < height; y += 20) {
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
      drawFallback();
      const { width, height } = canvas;

      ctx.fillStyle = 'rgba(103,232,249,0.2)';
      for (let i = 0; i < 16; i += 1) {
        const x = ((i * 53) + Math.sin(t + i) * 80 + width) % width;
        const y = ((i * 31) + Math.cos(t * 1.4 + i) * 46 + height) % height;
        ctx.beginPath();
        ctx.arc(x, y, 4 + (i % 3), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      for (let x = 0; x < width; x += 8) {
        const y = height * 0.5 + Math.sin((x * 0.02) + t * 4) * 24;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    window.addEventListener('resize', syncSize, { passive: true });
  };

  targets.forEach(setupCanvas);
})();
