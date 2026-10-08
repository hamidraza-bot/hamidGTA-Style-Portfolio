# Hamid Raza — Digital World

## Product direction

An original, playable digital portfolio for Hamid Raza. Visitors enter a fictional city-like interface and explore career, skills, projects, education, goals and contact through missions, a HUD, a minimap and unlockable states. It is not a conventional portfolio with a decorative game background: the interaction model itself is game-like, while content stays accurate and editable.

## Implementation approach

- Use a lightweight React + TypeScript + Vite frontend with no server or database. Keep the experience static, fast to load and easy to deploy.
- Keep every editable portfolio fact in `src/data/portfolio.ts`: identity, bio, skills/progress values, projects, achievements, education, goal, contact links and the GitHub placeholder. Components render that data without hard-coded portfolio claims.
- Use a single-page location router driven by `currentLocation` and a small game-state hook. Locations are HOME, ABOUT, SKILLS, PROJECTS, ACHIEVEMENTS, ACADEMY, GOALS and CONTACT. Each location is a full-screen scene with a distinct atmosphere, while a floating pause-style navigation provides quick access.
- Implement `useGameState` for `gameStarted`, `currentLocation`, `currentMission`, `xp`, `level`, `unlockedAchievements`, `visitedSections`, `soundEnabled`, `musicEnabled`, `reduceMotion`, `isPaused`, secret-click count and terminal visibility. Section visits award XP once, update missions and trigger a compact notification. XP thresholds update the visible level without presenting unverified real-world metrics.
- Build reusable UI modules: LoadingScreen, MainMenu, GameHUD, Minimap, Navigation/PauseMenu, MissionSystem, AboutScene, SkillsScene, ProjectsScene, ProjectModal, AchievementsScene, AcademyScene, GoalsScene, ContactTerminal, MissionComplete, NotificationStack and DeveloperTerminal.
- Use CSS-first motion and atmospheric effects rather than heavy 3D: layered gradients, faux skyline silhouettes, road/sea bands, radial lights, scanlines, grain, HUD brackets, marker pulses, card tilt on pointer movement, reveal transitions and reduced-motion fallbacks. No copyrighted game logos, images, music or exact UI.
- Use accessible native buttons and dialogs, descriptive labels, focus-visible styles, keyboard controls (W/S, arrows, Enter, Escape), touch-friendly targets, visible mute/reduced-motion controls and a no-horizontal-overflow mobile layout. Disable the custom cursor on touch/coarse pointers.
- Make contact actions real: LinkedIn opens the supplied URL in a new tab after a notification, email uses the supplied `mailto:` link after a notification, and GitHub remains a non-link “Coming soon” state until a real username is configured.
- Add semantic public HTML and metadata in `index.html`; use the supplied title/description, Open Graph/Twitter tags without guessing a canonical public origin. Add `public/manus-routes.json` with the single public route `/` and include a lightweight `public/robots.txt`/`public/sitemap.xml` only if the project runtime supports them without inventing an origin.
- Provide `README.md` with install, dev, build, preview and deployment instructions, plus an explicit note about which values are placeholders and where to edit them.

## Design system

### Design movement

**Neon-noir open-world interface**: a cinematic, game HUD language fused with an editorial developer portfolio. It is original and avoids recognizable Rockstar/GTA marks, assets or layouts.

### Core principles

1. **World before webpage** — every major section is a location with a name, atmosphere and objective.
2. **Information as mission intel** — facts arrive through briefings, stats, unlocked cards and terminal readouts.
3. **Controlled intensity** — neon is reserved for focus, state changes and progress; the dark field keeps reading calm.
4. **Always navigable** — the experience can be explored cinematically but never traps the visitor behind animation.

### Color philosophy

The black/navy base creates the night-road canvas; neon pink is the ownable signature color for focus and mission completion; cyan communicates systems, links and live signal; purple is used for deep-space/academy moments; sunset orange marks the warmer home and goal scenes. Gray and off-white preserve legibility and keep glow accents special.

- Ink: `#050509`
- Navy: `#0B1020`
- Signature pink: `#FF2D9A`
- Cyan: `#27D9FF`
- Purple: `#7B3CFF`
- Sunset orange: `#FF7A45`
- White: `#F5F5F5`
- Muted: `#9297A3`

### Layout paradigm

A full-bleed viewport with asymmetrical HUD rails and location panels. Content anchors to left/right mission rails rather than a centered marketing grid. On mobile, rails collapse into a top status strip and bottom navigation dock; the content remains vertically staged and touch-friendly.

### Signature elements

- **Mission bracket**: clipped corner panels with a pink/cyan status rail and small technical labels.
- **Signal line**: a thin animated scanline that marks active location, progress and route state.
- **City strata**: CSS-made skyline, horizon glow, water/road bands and map geometry that change per scene.

### Interaction and animation

Interactions feel like operating a field console: focus targets brighten, buttons shift a few pixels toward the selected direction, and completing a section updates the HUD instead of navigating away. Use short opacity/transform reveals, slow background drift, marker pulses, count-up XP and modal scale/fade. Keep most durations between 160–700ms; use slower ambient movement only in the background. `prefers-reduced-motion` disables parallax, drift, cursor trails and staggered reveals while retaining state changes and focus clarity.

### Typography

Use `Arial Narrow`/`Roboto Condensed`/system fallback for condensed uppercase display headings, `Inter`/`DM Sans`/system sans for body text, and a restrained italic accent treatment for small location labels rather than a script font dependency. Headings are uppercase with tight tracking; body copy uses generous line height; metadata is compact monospace.

### Brand essence and voice

**Positioning:** Hamid Raza’s AI portfolio as a playable digital world for exploring practical automation, intelligent workflows and a builder’s learning path.

Personality: **curious, precise, cinematic**.

Voice: mission-like, direct and optimistic without hype. Example lines: “BUILD DIFFERENT. STAY CURIOUS.” and “The next capability is still loading.”

### Wordmark and mark

A custom text lockup: `HR//` inside a clipped signal bracket, paired with `HAMID RAZA` and a small `DIGITAL WORLD` label. The mark is made with text/CSS and does not imitate any game logo.

## Project structure

```text
hamidworld/
├── public/
│   ├── manus-routes.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── AcademyScene.tsx
│   │   ├── AboutScene.tsx
│   │   ├── AchievementsScene.tsx
│   │   ├── ContactTerminal.tsx
│   │   ├── DeveloperTerminal.tsx
│   │   ├── GameHUD.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── MainMenu.tsx
│   │   ├── MissionComplete.tsx
│   │   ├── Minimap.tsx
│   │   ├── Navigation.tsx
│   │   ├── NotificationStack.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── ProjectsScene.tsx
│   │   ├── SkillsScene.tsx
│   │   └── GoalsScene.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── hooks/
│   │   └── useGameState.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── app.config.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── plan.md
```

## Serving and build

The app listens on `0.0.0.0:3000` for managed Preview. `npm run dev` is the local development command; `npm run build` emits `dist/` with `index.html`. The project remains static (`server:false`, `database:false`). The final checkpoint will include the complete source, route manifest, metadata, and instructions. No publication will be enabled automatically.
