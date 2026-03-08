(() => {
  const canvas = document.getElementById('webgpu-prototype-canvas');
  const status = document.getElementById('webgpu-prototype-status');
  if (!canvas || !status) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const drawFallback = () => {
    const { width, height } = canvas;
    const g = ctx.createLinearGradient(0, 0, width, height);
    g.addColorStop(0, 'rgba(20,173,196,0.24)');
    g.addColorStop(1, 'rgba(219,70,82,0.22)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = 'rgba(255,255,255,0.22)';
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

  const supportsWebGPU = typeof navigator !== 'undefined' && !!navigator.gpu;
  drawFallback();

  if (!supportsWebGPU) {
    status.textContent = 'Fallback mode active (WebGPU unavailable).';
    return;
  }

  status.textContent = 'WebGPU-capable browser detected. Enhanced animation layer active.';

  let t = 0;
  const animate = () => {
    t += 0.014;
    drawFallback();
    const { width, height } = canvas;

    ctx.fillStyle = 'rgba(103,232,249,0.26)';
    for (let i = 0; i < 18; i += 1) {
      const x = ((i * 53) + Math.sin(t + i) * 80 + width) % width;
      const y = ((i * 31) + Math.cos(t * 1.4 + i) * 46 + height) % height;
      ctx.beginPath();
      ctx.arc(x, y, 5 + (i % 3), 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.strokeStyle = 'rgba(255,255,255,0.28)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    for (let x = 0; x < width; x += 8) {
      const y = height * 0.5 + Math.sin((x * 0.02) + t * 4) * 30;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
})();
