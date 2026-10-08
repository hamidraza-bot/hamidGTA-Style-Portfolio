# Hamid Raza — Digital World

An original, playable AI developer portfolio built as a neon-noir game interface. It is intentionally not a normal portfolio page: visitors enter a fictional digital world, unlock missions, scan skills, open project briefings and navigate through a lightweight HUD.

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on `http://localhost:3000` (and `0.0.0.0:3000` for managed Preview).

## Build

```bash
npm run build
npm run preview
```

The production build is emitted to `dist/` and contains `index.html`.

## Edit portfolio content

All editable facts live in `src/data/portfolio.ts`: identity, title, bio, mission facts, skill progress, projects, achievements, education, goal, contact links and GitHub username. Replace placeholder project URLs or the GitHub username only when verified values are available. The interface deliberately does not invent client names, live links, GitHub statistics or achievement numbers.

## Experience controls

- Use W/S or Arrow Up/Down to move through the main menu.
- Press Enter to select and Escape to close the pause menu, modal or terminal.
- Press Ctrl + K to open the developer terminal.
- Click the HUD mark five times to unlock the small secret-mode notification.
- Sound and music are off by default. Use the HUD toggles to enable them if audio is added later.
- Use the reduced-motion option in the pause menu to keep state changes while disabling ambient motion.

## Deployment

This is a static Vite site. Deploy the contents of `dist/` to any static host or use the managed Webdev build configuration. No server or database is required. Keep the `/manus-routes.json` file available at the site root.

## Originality

The visual language is inspired by open-world game HUDs but uses original CSS-built city scenes, map geometry, typography, color, and interaction patterns. It does not use Rockstar/GTA logos, characters, exact UI, screenshots or music.
