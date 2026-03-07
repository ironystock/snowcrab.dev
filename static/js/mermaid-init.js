(() => {
  const nodes = Array.from(document.querySelectorAll('pre.mermaid'));
  if (!nodes.length) return;

  const init = async () => {
    try {
      const mermaid = await import('https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs');
      mermaid.default.initialize({
        startOnLoad: true,
        securityLevel: 'strict',
        theme: document.documentElement.dataset.theme === 'light' ? 'default' : 'dark',
        flowchart: { useMaxWidth: true, htmlLabels: true }
      });
      await mermaid.default.run({ querySelector: 'pre.mermaid' });
    } catch (error) {
      console.warn('Mermaid initialization failed', error);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
