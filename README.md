# pixel-css

A CSS library with a pixel-art aesthetic built on Tailwind CSS v4. Provides a complete pixel-art design system — hard shadows, zero border radius, pixelated rendering, and the Press Start 2P font — with all Tailwind utilities available out of the box.

## Installation

```bash
npm install @yawnwest/pixel-css
```

## Usage

Import the stylesheet once in your project:

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

This gives you Tailwind's preflight reset, all Tailwind utility classes, and the pixel-art theme tokens.

## Features

- **Tailwind utilities** — full set of Tailwind CSS v4 utility classes included
- **Design tokens** — semantic color palette, typography scale, spacing, shadows, and transitions via `@theme`
- **CSS reset** — Tailwind preflight with pixelated image rendering
- **Typography** — headings, paragraphs, links, and code using Press Start 2P
- **Dark mode** — automatic via `prefers-color-scheme`, or manual via `data-theme="dark"` / `data-theme="light"`
- **Size-constrained** — CSS bundle capped at 35 KB

## Colors

The theme exposes a semantic color palette as Tailwind-compatible utilities:

| Token                      | Utility                 | Purpose                   |
| -------------------------- | ----------------------- | ------------------------- |
| `--color-background`       | `bg-background`         | Page background           |
| `--color-foreground`       | `text-foreground`       | Default text              |
| `--color-primary`          | `bg-primary`            | Main accent, CTAs         |
| `--color-accent`           | `bg-accent`             | Links, highlights         |
| `--color-card`             | `bg-card`               | Card and panel background |
| `--color-muted-foreground` | `text-muted-foreground` | Secondary text            |
| `--color-border`           | `border-border`         | Borders and dividers      |
| `--color-success`          | `bg-success`            | Success states            |
| `--color-destructive`      | `bg-destructive`        | Errors, dangerous actions |

Each color has a paired `-foreground` token for legible text on that background (e.g. `text-primary-foreground` on `bg-primary`).

## Typography

Font sizes use the Press Start 2P pixel font:

| Class       | Size |
| ----------- | ---- |
| `text-xs`   | 8px  |
| `text-sm`   | 12px |
| `text-base` | 16px |
| `text-lg`   | 20px |
| `text-xl`   | 24px |
| `text-2xl`  | 32px |
| `text-3xl`  | 40px |
| `text-4xl`  | 48px |

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

## JavaScript

pixel-css is CSS-only. Two common interactions require a small amount of JavaScript:

**Theme toggle**

```js
const current = document.documentElement.dataset.theme
document.documentElement.dataset.theme = current === 'dark' ? 'light' : 'dark'
```

**Copy to clipboard** (for `.panel-extra` code blocks)

```js
document.querySelectorAll('[data-copy-btn]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const code = btn.closest('.panel-extra').querySelector('code').textContent ?? ''
    navigator.clipboard.writeText(code)
    btn.textContent = 'copied!'
    setTimeout(() => {
      btn.textContent = 'copy'
    }, 1500)
  })
})
```

## Development

```bash
pnpm install
pnpm dev          # Start playground at http://localhost:5173
pnpm build        # Build the library
pnpm test         # Run unit tests
pnpm test:visual  # Run visual regression tests
pnpm lint         # Lint
pnpm format       # Format
pnpm size         # Check bundle size
```

## License

MIT © Yawn West
