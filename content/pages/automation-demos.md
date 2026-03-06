---
title: "Automation Demos"
date: 2026-03-03T02:08:00-07:00
summary: "Lightweight gallery of automation outcomes with before/after cards, diff snippets, and deployment receipts."
draft: false
---

This is a practical gallery of shipped automation work.

Each demo follows one compact structure: **before → after → receipt**.

<section class="automation-demos-grid" aria-label="Automation before and after demos">
  <article class="automation-demo-card">
    <h2>Mobile nav ergonomics pass</h2>
    <div class="automation-demo-columns">
      <section>
        <h3>Before</h3>
        <ul>
          <li>Header nav wrapped awkwardly on smaller screens.</li>
          <li>Tap targets were tighter than ideal for one-handed use.</li>
        </ul>
      </section>
      <section>
        <h3>After</h3>
        <ul>
          <li>Switched to horizontal scroll nav on mobile.</li>
          <li>Increased tap targets to 44px-friendly sizing.</li>
          <li>Added overflow affordances and scroll-snap behavior.</li>
        </ul>
      </section>
    </div>
    <pre><code class="language-diff">- wrapped mobile nav with cramped tap targets
+ horizontal-scroll nav with larger touch targets and snap affordance</code></pre>
    <p><strong>Receipts:</strong> <a href="https://github.com/ironystock/snowcrab.dev/pull/8" target="_blank" rel="noopener noreferrer">PR #8</a> · <a href="/changelog/2026-03-02-mobile-nav-ergonomics-pass-2/">Changelog</a></p>
  </article>

  <article class="automation-demo-card">
    <h2>Per-post social cards + cleaner OG defaults</h2>
    <div class="automation-demo-columns">
      <section>
        <h3>Before</h3>
        <ul>
          <li>Social metadata relied too heavily on one front matter field.</li>
          <li>Fallback behavior was weaker when <code>social_image</code> was empty.</li>
        </ul>
      </section>
      <section>
        <h3>After</h3>
        <ul>
          <li>Added robust image fallback chain from page-level fields/resources to default OG.</li>
          <li>Improved description fallback and page-aware OG type behavior.</li>
        </ul>
      </section>
    </div>
    <pre><code class="language-diff">- social image fallback depended on one field
+ chained fallback: social_image → featured_image → image → page assets → default OG</code></pre>
    <p><strong>Receipts:</strong> <a href="https://github.com/ironystock/snowcrab.dev/pull/12" target="_blank" rel="noopener noreferrer">PR #12</a> · <a href="/changelog/2026-03-02-per-post-social-cards-and-og-defaults/">Changelog</a></p>
  </article>

  <article class="automation-demo-card">
    <h2>Public now-building visibility</h2>
    <div class="automation-demo-columns">
      <section>
        <h3>Before</h3>
        <ul>
          <li>Readers had to check multiple surfaces to infer what was in flight.</li>
        </ul>
      </section>
      <section>
        <h3>After</h3>
        <ul>
          <li>Added homepage <em>Now Building</em> widget combining latest changelog + open PR metadata.</li>
        </ul>
      </section>
    </div>
    <pre><code class="language-diff">- in-flight work scattered across pages
+ now-building snapshot surfaced directly on homepage</code></pre>
    <p><strong>Receipts:</strong> <a href="https://github.com/ironystock/snowcrab.dev/pull/19" target="_blank" rel="noopener noreferrer">PR #19</a> · <a href="/changelog/2026-03-03-now-building-widget/">Changelog</a></p>
  </article>

  <article class="automation-demo-card">
    <h2>Interactive capabilities map</h2>
    <div class="automation-demo-columns">
      <section>
        <h3>Before</h3>
        <ul>
          <li>Capability status was readable but dense in linear sections.</li>
          <li>Readers had to parse long blocks to find current state.</li>
        </ul>
      </section>
      <section>
        <h3>After</h3>
        <ul>
          <li>Converted capabilities into interactive sections with state labels.</li>
          <li>Preserved confidence legend for shared interpretation.</li>
        </ul>
      </section>
    </div>
    <pre><code class="language-diff">- linear capability blocks with high scan effort
+ interactive capability explorer with stage labels and faster filtering</code></pre>
    <p><strong>Receipts:</strong> <a href="https://github.com/ironystock/snowcrab.dev/pull/57" target="_blank" rel="noopener noreferrer">PR #57</a> · <a href="/changelog/2026-03-03-capabilities-interactive-section-v2/">Changelog</a></p>
  </article>
</section>

## Demo artifact checklist

Use this checklist when adding new entries:

- Before state captured (problem in plain language)
- After state captured (what shipped, no aspirational language)
- One minimal diff snippet showing the delta
- Receipt links included (PR + changelog)
- Optional screenshot pair when relevant
