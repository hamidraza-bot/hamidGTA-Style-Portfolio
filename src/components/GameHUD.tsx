import { portfolio } from '../data/portfolio'

type Props = {
  level: number
  xp: number
  levelXp: number
  objective: string
  location: string
  onLogoClick: () => void
  onPause: () => void
  onTerminal: () => void
  onMapClick: () => void
  soundEnabled: boolean
  musicEnabled: boolean
  onSoundToggle: () => void
  onMusicToggle: () => void
}

export default function GameHUD({ level, xp, levelXp, objective, location, onLogoClick, onPause, onTerminal, onMapClick, soundEnabled, musicEnabled, onSoundToggle, onMusicToggle }: Props) {
  const time = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date())
  return (
    <header className="game-hud">
      <div className="hud-brand">
        <button className="hud-logo" onClick={onLogoClick} aria-label="Hamid Raza home logo">HR<span>//</span></button>
        <div><strong>{portfolio.name}</strong><small>{portfolio.displayTitle.toUpperCase()}</small></div>
      </div>
      <div className="hud-center"><span className="signal-dot" /> SYSTEM STATUS <strong>ONLINE</strong><span className="hud-divider" /> LOCATION <strong>{location}</strong></div>
      <div className="hud-actions">
        <button className="hud-action" onClick={onSoundToggle} aria-label="Toggle sound effects">SFX <strong>{soundEnabled ? 'ON' : 'OFF'}</strong></button>
        <button className="hud-action" onClick={onMusicToggle} aria-label="Toggle music">MUSIC <strong>{musicEnabled ? 'ON' : 'OFF'}</strong></button>
        <button className="hud-action hud-pause" onClick={onPause} aria-label="Open pause menu">PAUSE <strong>Ⅱ</strong></button>
      </div>
      <div className="hud-stats">
        <div><span>TIME</span><strong>{time}</strong></div>
        <div><span>LEVEL</span><strong>{String(level).padStart(2, '0')}</strong></div>
        <div className="hud-xp"><span>BUILD XP</span><strong>{xp.toLocaleString()}</strong><div className="xp-bar"><i style={{ width: `${(levelXp / 500) * 100}%` }} /></div><small>{levelXp} / 500</small></div>
      </div>
      <button className="hud-terminal-trigger" onClick={onTerminal}>CTRL + K <span>TERMINAL</span></button>
      <button className="hud-map" onClick={onMapClick} aria-label="Open map system"><span className="map-planet">+</span><span>MAP SYSTEM<br /><strong>ONLINE</strong></span></button>
      <div className="hud-objective"><span>CURRENT OBJECTIVE</span><strong>{objective}</strong><small>BUILD DIFFERENT / STAY CURIOUS</small></div>
    </header>
  )
}
