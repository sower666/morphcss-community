# Theming — MorphCSS Community v0.1.0-alpha.1

This release contains CSS theme tokens and **no JavaScript theme controller**. The default font stack is system UI without loading Inter or an external font. To use Inter, self-host it in your application and override `--m-font-sans` in `@layer app`.

## Light and dark

Without a `data-m-theme` attribute on the root element, light tokens are the default and `prefers-color-scheme: dark` supplies dark tokens automatically when the operating system requests them.

Force a theme explicitly with `<html data-m-theme="dark">` or `<html data-m-theme="light">`. Community CSS does not change or persist these attributes in response to user interaction.

## Customize safely

Add your app-specific stylesheet **after** `morph.community.css`. Use the last CSS cascade layer, `app`, instead of editing the verified distributed CSS:

```css
@layer app {
  :root {
    --m-action: oklch(57% .16 170);
    --m-action-hover: oklch(51% .16 170);
    --m-radius: .8rem;
    --m-space: 1rem;
  }
}
```

Review `--m-action-content` for contrast after changing the action color. Consider dark mode, focus outlines and high-contrast accessibility when customizing.

Scope layout settings to specific elements using the published custom properties:

```html
<div class="m-grid" style="--m-grid-min: 18rem; --m-grid-gap: 1.5rem">...</div>
<div class="m-cluster" style="--m-cluster-justify: space-between">...</div>
<main class="m-center" style="--m-center-max: 74rem">...</main>
```

Community defines `--m-surface`, `--m-surface-raised`, `--m-content`, `--m-action`, `--m-border`, `--m-focus`, `--m-space-*` and more. Keep the original release archive for integrity checks; styling changes belong to your application.

See [components](components.md) and [quick start](quickstart.md). The [Community License](../LICENSE.md) restricts redistribution of the framework itself.
