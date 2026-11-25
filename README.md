# Hamid Raza — Digital World 🎮

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)

An original, **playable AI developer portfolio built as a neon-noir game interface**. This is intentionally not a normal portfolio page: visitors enter a fictional digital world, unlock missions, scan skills, open project briefings, and navigate through a lightweight HUD.

> 🎨 The visual language is inspired by open-world game HUDs, but everything is original — CSS-built city scenes, map geometry, typography, color, and interaction patterns. No Rockstar/GTA logos, characters, exact UI, screenshots, or music are used.

## ✨ Features

- 🕹️ **Game-style navigation** — keyboard-driven main menu (W/S or Arrow keys, Enter to select)
- 🗺️ **Interactive world map** with mission markers and project briefings
- 💻 **Developer terminal** (Ctrl + K) for a command-line way to explore
- 🎯 **Missions & skill scans** — projects presented as briefings, skills as scan progress
- 🔊 **Optional sound/music toggles** in the HUD (off by default)
- ♿ **Reduced-motion mode** in the pause menu — keeps state changes, disables ambient motion
- 🔒 **Secret mode** — click the HUD mark five times to unlock a small notification

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Styling | CSS (custom, no UI framework) |
| Language | TypeScript |

## 🚀 Run Locally

**Prerequisites:** Node.js 18+ and npm.

```bash
npm install
npm run dev
```

The dev server listens on `http://localhost:3000` (and `0.0.0.0:3000` for managed preview).

## 📦 Build

```bash
npm run build
npm run preview
```

The production build is emitted to `dist/` and contains `index.html`.

## ✏️ Edit Portfolio Content

All editable facts live in `src/data/portfolio.ts`: identity, title, bio, mission facts, skill progress, projects, achievements, education, goal, contact links, and GitHub username. Update that one file to change anything shown in the world.

> The interface deliberately does not invent client names, live links, GitHub statistics, or achievement numbers — replace placeholders only with verified values.

## 🎮 Experience Controls

| Input | Action |
|---|---|
| W / S or ↑ / ↓ | Move through the main menu |
| Enter | Select |
| Esc | Close pause menu, modal, or terminal |
| Ctrl + K | Open the developer terminal |
| HUD mark ×5 clicks | Unlock secret-mode notification |

## 🌐 Deployment

This is a static Vite site. Deploy the contents of `dist/` to any static host (Vercel, Netlify, GitHub Pages, etc.). No server or database is required. Keep the `/manus-routes.json` file available at the site root.

## 📁 Project Structure

```
├── src/
│   ├── data/portfolio.ts   # All editable portfolio content
│   ├── components/         # HUD, map, menus, terminal
│   └── ...
├── public/                 # Static assets
├── index.html
├── vite.config.ts
└── package.json
```

## 📄 License

MIT — see [LICENSE](LICENSE).

---

Built by [Hamid Raza](https://github.com/hamidraza-bot) · AI Automation Engineer · [Fiverr](https://www.fiverr.com/hamid_buildai)
