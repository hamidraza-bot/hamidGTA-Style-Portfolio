import { useCallback, useEffect, useState } from 'react'
import { LocationId, locationThemes, portfolio } from './data/portfolio'
import { useGameState } from './hooks/useGameState'
import DeveloperTerminal from './components/DeveloperTerminal'
import GameHUD from './components/GameHUD'
import LoadingScreen from './components/LoadingScreen'
import MainMenu from './components/MainMenu'
import Minimap from './components/Minimap'
import Navigation from './components/Navigation'
import NotificationStack from './components/NotificationStack'
import ProjectModal from './components/ProjectModal'
import SceneContent from './components/SceneContent'

export default function App() {
  const game = useGameState()
  const [loading, setLoading] = useState(true)
  const [menuIndex, setMenuIndex] = useState(0)
  const [navOpen, setNavOpen] = useState(false)
  const [projectId, setProjectId] = useState<string | null>(null)
  const [showCompletion, setShowCompletion] = useState(false)

  const completeLoading = useCallback(() => setLoading(false), [])

  const navigate = useCallback((location: LocationId) => {
    game.visit(location)
    setNavOpen(false)
    setShowCompletion(false)
  }, [game])

  const startGame = useCallback(() => {
    game.startGame()
    setShowCompletion(false)
  }, [game])

  const navigateFromMenu = useCallback((location: LocationId) => {
    game.startGame()
    game.visit(location)
  }, [game])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        game.setTerminalOpen(!game.terminalOpen)
      }
      if (event.key === 'Escape') {
        if (projectId) setProjectId(null)
        else if (game.terminalOpen) game.setTerminalOpen(false)
        else if (navOpen) setNavOpen(false)
        else if (game.isPaused) game.setIsPaused(false)
        else if (game.gameStarted) game.setIsPaused(true)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [game, navOpen, projectId])

  useEffect(() => {
    document.documentElement.style.setProperty('--motion-scale', game.reduceMotion ? '0' : '1')
  }, [game.reduceMotion])

  const menuActive = !loading && !game.gameStarted
  const theme = locationThemes[game.currentLocation]
  const allVisited = game.visitedSections.length >= portfolio.nav.length

  return <div className="app-root">
    <div className={`screen-layer ${loading ? 'screen-layer-active' : 'screen-layer-hidden'}`} aria-hidden={!loading}>
      <LoadingScreen onComplete={completeLoading} />
    </div>
    <div className={`screen-layer ${menuActive ? 'screen-layer-active' : 'screen-layer-hidden'}`} aria-hidden={!menuActive}>
      <MainMenu active={menuActive} selectedIndex={menuIndex} onSelectedIndexChange={setMenuIndex} onStart={startGame} onNavigate={navigateFromMenu} onInfo={(message) => game.notify('SYSTEM MESSAGE', message, 'cyan')} />
    </div>
    {game.gameStarted && <div className={`app-shell scene-${game.currentLocation} ${game.reduceMotion ? 'motion-reduced' : ''}`}>
    <div className="ambient-world" aria-hidden="true"><div className="ambient-sun" /><div className="ambient-moon" /><div className="ambient-skyline skyline-far" /><div className="ambient-skyline skyline-near" /><div className="ambient-road" /><div className="ambient-particles" /></div>
    <GameHUD level={game.level} xp={game.xp} levelXp={game.levelXp} objective={game.currentMission.objective} location={theme.eyebrow} onLogoClick={game.incrementSecretClicks} onPause={() => setNavOpen((open) => !open)} onTerminal={() => game.setTerminalOpen(true)} onMapClick={() => game.notify('MAP SYSTEM ONLINE', 'Select a marker to jump across the city.', 'cyan')} soundEnabled={game.soundEnabled} musicEnabled={game.musicEnabled} onSoundToggle={() => game.setSoundEnabled((enabled) => !enabled)} onMusicToggle={() => game.setMusicEnabled((enabled) => !enabled)} />
    <div className="content-frame">
      <SceneContent location={game.currentLocation} visitedSections={game.visitedSections} onNavigate={navigate} onProjectSelect={setProjectId} onAchievement={game.unlockAchievement} unlockedAchievements={game.unlockedAchievements} onInfo={(message) => game.notify('SYSTEM MESSAGE', message, 'cyan')} onPlayAgain={() => { game.resetGame(); setLoading(true) }} />
    </div>
    <div className="world-footer"><span>LOCATION // {theme.eyebrow}</span><span>MISSION STATUS // {game.visitedSections.includes(game.currentLocation) ? 'VISITED' : 'AVAILABLE'}</span><span>SIGNAL // {game.level > 1 ? 'AMPLIFIED' : 'BUILDING'}</span></div>
    <Minimap currentLocation={game.currentLocation} onNavigate={navigate} />
    <Navigation currentLocation={game.currentLocation} onNavigate={navigate} open={navOpen} onToggle={() => setNavOpen((open) => !open)} />
    {allVisited && !showCompletion && <button className="finish-mission" onClick={() => setShowCompletion(true)}>FINALIZE RUN <span>→</span></button>}
    {(game.isPaused || navOpen) && <div className="accessibility-dock"><span>ACCESSIBILITY</span><button onClick={() => game.setReduceMotion(!game.reduceMotion)}>REDUCE MOTION {game.reduceMotion ? 'ON' : 'OFF'}</button><button onClick={() => game.setSoundEnabled(!game.soundEnabled)}>MUTE SFX {game.soundEnabled ? 'OFF' : 'ON'}</button></div>}
    <NotificationStack notifications={game.notifications} />
    {projectId && <ProjectModal project={portfolio.projects.find((item) => item.id === projectId) ?? null} onClose={() => setProjectId(null)} onInfo={(message) => game.notify('MISSION CHANNEL', message, 'cyan')} />}
    {game.terminalOpen && <DeveloperTerminal onClose={() => game.setTerminalOpen(false)} />}
    {showCompletion && <div className="completion-overlay"><SceneContent location={'complete' as LocationId} visitedSections={game.visitedSections} onNavigate={navigate} onProjectSelect={setProjectId} onAchievement={game.unlockAchievement} unlockedAchievements={game.unlockedAchievements} onInfo={(message) => game.notify('SYSTEM MESSAGE', message, 'cyan')} onPlayAgain={() => { game.resetGame(); setShowCompletion(false); setLoading(true) }} /></div>}
    </div>}
    <NotificationStack notifications={game.notifications} />
  </div>
}
