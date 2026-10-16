# Quick start — MorphCSS Community v0.1.0-alpha.0

MorphCSS Community is a **CSS-only proprietary-licensed alpha**. This guide uses the [published ZIP](https://github.com/sower666/morphcss-community/releases/tag/v0.1.0-alpha.0), not private MorphCSS Full sources.

## Download and verify

Download [MorphCSS Community ZIP](https://github.com/sower666/morphcss-community/releases/download/v0.1.0-alpha.0/MorphCSS-Community-0.1.0-alpha.0.zip).

ZIP SHA-256:

```text
32925ab9a0c9fc57d38e0c54e20631f63132987b96e340ff558d05c11b49e157
```

Check with `sha256sum MorphCSS-Community-0.1.0-alpha.0.zip` (Linux), `shasum -a 256 ...zip` (macOS), or `Get-FileHash .\MorphCSS-Community-0.1.0-alpha.0.zip -Algorithm SHA256` (PowerShell).

The archive contains exactly three files: `morph.community.css`, `manifest.json` and `LICENSE.md`. The manifest contains individual SHA-256 values for the stylesheet and license; retain and read the license.

## Install

Copy `morph.community.css` into your application's public assets. Link it in the page's `<head>`:

```html
<link rel="stylesheet" href="/assets/morph.community.css">
```

Create a responsive grid and a complete card:

```html
<main class="m-center m-stack" style="--m-center-max: 68rem">
  <h1>MorphCSS Community</h1>
  <div class="m-grid" style="--m-grid-min: 18rem">
    <article class="m-card">
      <div class="m-card__frame">
        <div class="m-card__body m-stack">
          <span class="m-badge" data-m-intent="success">Ready</span>
          <h2 class="m-card__title">CSS-only card</h2>
          <p>Works without a framework JavaScript runtime.</p>
        </div>
        <div class="m-card__actions">
          <a href="#more" class="m-button" data-m-intent="primary">Explore</a>
        </div>
      </div>
    </article>
  </div>
</main>
```

No npm package, build step, JavaScript initializer or Full-edition license key is required for this edition.

## Standalone example

Open [the starter HTML](../examples/community-starter/index.html). Place the extracted `morph.community.css` **beside `index.html`**, then serve the directory with a local static HTTP server (for example, `python3 -m http.server 8000`). The example intentionally does not bundle the framework CSS or depend on external images or JavaScript. There is **no official CSS CDN URL** in this alpha.

## Learn and report

Read [components](components.md), [theming](theming.md), [support](../SUPPORT.md) and the [public issue forms](https://github.com/sower666/morphcss-community/issues/new/choose). Send security concerns privately using [SECURITY.md](../SECURITY.md). The alpha API may change, so test target browsers before production rollout.
