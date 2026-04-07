# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

No test runner is configured in this project.

## Architecture

Single-page React portfolio (Vite + Tailwind CSS v4). All source files live flat in `src/` — no subdirectory structure beyond `src/assets/`.

**Sections and scroll navigation:** `App.jsx` is the root. It holds `useRef` refs for each section (`aboutRef`, `techRef`, `expRef`, `projectsRef`) and passes them to `Navbar`, which uses `scrollIntoView` for smooth navigation. Section order in the DOM: hero → tech stack → experience → projects.

**Component overview:**
- `navbar.jsx` — sticky navbar with smooth-scroll buttons and a light/dark theme toggle (persisted in `localStorage`, applied as `body.dark` class)
- `headerCard.jsx` — animated "code editor" card in the hero section with two rotating background layers (`Object.jsx` renders the code-like content inside)
- `customButton.jsx` — shared button with `primary`, `secondary`, and `ghost` variants via CSS classes
- `techStack.jsx` — icon grid built from `react-icons/si`; data is defined inline as a `stacks` array
- `experience.jsx` — vertical timeline layout
- `projects.jsx` — project cards grid with a modal for repos that have both frontend and backend links; project data is the `ProjectsInfo` array defined at the top of the file

**Styling:** All CSS is in `styles.css` (plain CSS, no Tailwind utilities — Tailwind is installed but styling is done via class names in `styles.css`). Dark mode works by toggling `body.dark` and using `body.dark .selector` overrides throughout the file.

**Assets:** Project screenshots and the PDF resume are imported directly into components from `src/assets/`.

## Key design details

- Brand color: `#22c55e` (green-500)
- Dark background: `#1f2937` (gray-800)
- `body.dark` is set as a class on `<body>` — not via Tailwind's `dark:` variant
- The hero card has two absolutely-positioned animated divs (`.headerCardBgOne`, `.headerCardBgTwo`) that rotate behind the main card for a glow effect
- At `≤640px`, the full code block inside `HeaderCard` is hidden and a compact version (`.code--compact`) is shown instead
