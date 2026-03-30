# pixel-css

A framework-agnostic CSS library with a pixel-art aesthetic.

## Demo

Find a demo with code examples <a href="https://yawnwest.github.io/pixel-css/">here</a>.

## Installation

```bash
npm install @yawnwest/pixel-css
```

## Usage

Import the JS entry point to get CSS and touch support bundled together:

```js
import '@yawnwest/pixel-css'
```

Or import only the stylesheet if you don't need touch support:

```js
import '@yawnwest/pixel-css/style.css'
```

Or load it directly via CDN — no build step required:

```html
<link rel="stylesheet" href="https://unpkg.com/@yawnwest/pixel-css/dist/style.css" />
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@yawnwest/pixel-css/dist/style.css" />
```

This gives you the CSS reset, component styles, and the pixel-art theme tokens.

## Features

- **Design tokens** — semantic color palette, typography scale, spacing, and transitions via CSS custom properties
- **CSS reset** — minimal cross-browser reset with pixelated image rendering
- **Typography** — headings, paragraphs, links, and code using Press Start 2P
- **Dark mode** — automatic via `prefers-color-scheme`, or manual via `data-theme="dark"` / `data-theme="light"`
- **Buttons** — press animation with instant touch feedback on mobile via a small JS module
- **Size-constrained** — CSS bundle capped at 25 KB

## Dark mode

Dark mode activates automatically based on the user's system preference. You can also control it manually:

```html
<html data-theme="dark">
  …
</html>

<html data-theme="light">
  …
</html>
```

## Development

```bash
pnpm install
pnpm dev          # Start demo at http://localhost:5173
pnpm serve        # Start demo accessible on the local network (for mobile testing)
pnpm build        # Build the library
pnpm test         # Run unit tests
pnpm lint         # Lint
pnpm format       # Format
pnpm size         # Check bundle size
```

## License

MIT © yawn west
