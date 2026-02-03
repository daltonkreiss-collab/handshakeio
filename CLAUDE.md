# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HandshakeIO is a React-based marketing landing page for a B2B SaaS platform that monitors SEC filings (10-K, 8-K) to identify automation project opportunities for material handling system integrators. It's a single-page application with no routing—all sections render sequentially on one page.

## Commands

```bash
npm run dev      # Start dev server on http://0.0.0.0:3000
npm run build    # Production build (outputs to dist/)
npm run preview  # Preview production build locally
```

There is no test framework, linter, or formatter configured.

## Architecture

**Stack:** React 19, TypeScript, Vite 6, Tailwind CSS (loaded via CDN), Lucide React icons.

**Entry flow:** `index.html` → `index.tsx` (React root mount) → `App.tsx` → sequential child components.

**Component structure** (`components/` directory):
- All components are self-contained functional components using local state only (useState/useEffect)
- No centralized state management, no React Router, no context providers
- App.tsx orchestrates the page by rendering: Navbar → Hero → Triggers → ProcessSlider → Customization → LeadMagnet → Footer

**Styling:** Tailwind utility classes exclusively. Custom theme extensions (colors `slate-850`, `emerald` palette) and custom animations (`scan`, `blink`) are defined inline in `index.html` via Tailwind CDN config.

**Path alias:** `@` maps to the project root (configured in both `vite.config.ts` and `tsconfig.json`).

## Key Notes

- The LeadMagnet form currently has `preventDefault()` only—no backend submission is wired up
- `GEMINI_API_KEY` is configured in `.env.local` and exposed via Vite's `define` in `vite.config.ts`, but is not used by any frontend component
- TypeScript strict mode is enabled
- Fonts: Inter (body) and JetBrains Mono (terminal aesthetic), loaded via Google Fonts in `index.html`
