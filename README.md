# MorphCSS Community

**The official public home of the planned MorphCSS Community distribution.**

> [!IMPORTANT]
> MorphCSS Community is currently in **pre-release**. No downloadable MorphCSS Community software is published in this repository yet. The repository currently contains project, licensing, support, and community documentation only.

MorphCSS is a context-first adaptive CSS system. It is designed so components can respond to the space available to them while keeping their public contract predictable and focused.

## Planned contents

The first planned candidate, **0.1.0-alpha.0**, is **CSS-only**. Its proposed release package contains:

- `morph.community.css` — compiled Community stylesheet;
- `manifest.json` — package version and SHA-256 integrity information;
- `LICENSE.md` — the MorphCSS Community License 1.0.

No JavaScript runtime, private source code, internal tooling, or development diagnostics are included. This is a candidate specification, **not an announcement that a downloadable release is available**.

Private commercial source code, unpublished MorphCSS implementations, internal tooling, development diagnostics, and licensed third-party materials are not part of this repository.

## Installation (after a release is published)

Download the official Community release package, verify the files against the SHA-256 values in `manifest.json`, and place `morph.community.css` in your website's public assets directory. Add this tag inside the page's `<head>`:

```html
<link rel="stylesheet" href="/assets/morph.community.css">
```

Use documented Community classes such as `m-stack`, `m-grid`, `m-button`, `m-link`, `m-badge`, and `m-card`. No JavaScript initialization is required for the CSS-only edition. Until the first release is published, there is no official downloadable package to install.

## Links

- [MorphCSS website](https://morphcss.site/)
- [Documentation](https://morphcss.site/docs/)
- [Examples](https://morphcss.site/examples/)
- [Community](https://morphcss.site/community/)

## Licensing

Future files and releases are licensed only when they explicitly state that the [MorphCSS Community License 1.0](LICENSE.md) applies.

The planned Community license permits free personal, internal, commercial, and client use as part of a larger website, application, or product. It does not permit standalone redistribution, resale, rebranding, or distribution of MorphCSS as a competing framework, library, component kit, template, or design system.

MorphCSS Community is proprietary software and is **not open source under the Open Source Definition**. This repository does not grant rights to unpublished code, private MorphCSS releases, or other MorphCSS materials.

## Community

- Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a contribution.
- Use [SUPPORT.md](SUPPORT.md) for support guidance.
- Report security concerns according to [SECURITY.md](SECURITY.md).
- Participation is governed by [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Current contribution scope

Until a software contribution policy is published, this repository accepts documentation corrections, repository feedback, and well-scoped proposals only. Do not submit MorphCSS product code.

---

Copyright © 2026 Jacek Kukulski. All rights reserved.
