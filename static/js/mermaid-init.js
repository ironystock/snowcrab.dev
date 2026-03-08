(() => {
  const allNodes = Array.from(document.querySelectorAll('pre.mermaid'));
  if (!allNodes.length) return;

  let mermaidApi = null;

  const visibleUnrendered = (nodes = allNodes) =>
    nodes.filter((node) => !node.dataset.mermaidRendered && !node.closest('[hidden]'));

  const renderNodes = async (nodes = allNodes) => {
    if (!mermaidApi) return;
    const targets = visibleUnrendered(nodes);
    if (!targets.length) return;
    await mermaidApi.run({ nodes: targets });
    targets.forEach((n) => { n.dataset.mermaidRendered = 'true'; });
  };

  const init = async () => {
    try {
      const mod = await import('https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs');
      mermaidApi = mod.default;
      mermaidApi.initialize({
        startOnLoad: false,
        securityLevel: 'strict',
        theme: document.documentElement.dataset.theme === 'light' ? 'default' : 'dark',
        flowchart: { useMaxWidth: true, htmlLabels: true }
      });
      await renderNodes(allNodes);

      window.addEventListener('architecture:panel-shown', async (event) => {
        const panel = event.detail?.panel;
        if (!panel) return;
        const nodes = Array.from(panel.querySelectorAll('pre.mermaid'));
        await renderNodes(nodes);
      });
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
