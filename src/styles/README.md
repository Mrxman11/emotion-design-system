Color Tokens — Design System

Purpose
- Centralize color definitions as CSS variables (tokens).
- Ensure components reference tokens (e.g., `var(--color-primary-500)`) instead of hardcoded hex values.

How to use
- Import `src/styles/colors.css` in your global entry (e.g., in `src/main.tsx` or `src/index.css`).
- Reference semantic tokens in components: `--color-bg`, `--color-surface`, `--color-text`, `--color-border`, `--color-primary-500`, etc.
- Do not use raw hex values in component styles; create new tokens instead.

Accessibility
- Tokens were chosen so primary text (`--color-text`) on `--color-bg` and `--color-primary-foreground` on `--color-primary-500` meet WCAG AA contrast in normal circumstances. For changes or new accents, verify contrast ratios before use.

Dark mode
- Toggle dark mode by setting `data-theme="dark"` on the `html` or `body` element. Components should rely on the semantic token names and automatically adapt.

Next steps (optional)
- I can inject an `@import "./styles/colors.css"` line into `src/index.css` for you, or add example components using the tokens. Proceed? 
