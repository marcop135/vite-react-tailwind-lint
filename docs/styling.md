# Styling

## Tailwind CSS v4

Configuration lives in CSS, not in a `tailwind.config.js`. `src/style.css` starts with `@import 'tailwindcss';` and holds everything else. `@tailwindcss/vite` compiles it; there is no PostCSS config.

Prettier sorts class names (`prettier-plugin-tailwindcss`), so `npm run format` settles class order.

## Design tokens

Colours are CSS custom properties on `:root`, mapped into Tailwind with `@theme inline`:

```css
:root {
  --canvas: #f6f6f3;
  --ink: #121216;
}

@theme inline {
  --color-canvas: var(--canvas);
  --color-ink: var(--ink);
}
```

That makes `bg-canvas`, `text-ink`, `border-line` and so on available as utilities.

| Token               | Use                            |
| ------------------- | ------------------------------ |
| `canvas`, `surface` | Page and card backgrounds      |
| `ink`, `muted`      | Body text and secondary text   |
| `line`              | Borders                        |
| `vite`, `react`     | Accent text, AA in both themes |
| `bolt`, `on-bolt`   | Yellow fill and text on it     |
| `term*`             | Terminal block                 |

## Dark mode

The `prefers-color-scheme: dark` block redefines the same variables. Components use `text-ink`, never `dark:text-white`, so dark mode needs no `dark:` variants for colour. To add a colour, define it in both blocks and map it in `@theme inline`.

## Fonts

Self-hosted `woff2` files in `src/assets/fonts/` (SIL OFL licences next to them), declared with `@font-face` at the top of `style.css`:

| Utility        | Family      | Weights  |
| -------------- | ----------- | -------- |
| `font-display` | Catamaran   | 700      |
| `font-sans`    | Cabin       | 400, 600 |
| `font-mono`    | Roboto Mono | 400, 700 |

To swap a font, replace the file, its `@font-face` block and the family in `@theme inline`.

## Shared utilities

Repeated treatments are defined once with `@utility`; everything else stays inline in JSX.

| Utility      | Does                                         |
| ------------ | -------------------------------------------- |
| `surface`    | Card: border, surface background, rounded    |
| `text-link`  | Underlined link that thickens on hover       |
| `focus-ring` | `focus-visible` outline in the accent colour |
| `iso-plane`  | Isometric transform for the hero artwork     |

## Reduced motion

Under `prefers-reduced-motion: reduce`, transitions and animations drop to near zero and smooth scrolling is off. New animations inherit this without extra code.
