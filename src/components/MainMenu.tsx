import { useEffect } from 'react'
import { LocationId, portfolio } from '../data/portfolio'

type Props = {
  active: boolean
  selectedIndex: number
  onSelectedIndexChange: (index: number) => void
  onStart: () => void
  onNavigate: (location: LocationId) => void
  onInfo: (message: string) => void
}

const menuItems: { label: string; location?: LocationId; note?: string }[] = [
  { label: 'START GAME' },
  { label: 'ABOUT ME', location: 'about' },
  { label: 'SKILLS', location: 'skills' },
  { label: 'PROJECTS', location: 'projects' },
  { label: 'EXPERIENCE', location: 'academy' },
  { label: 'ACHIEVEMENTS', location: 'achievements' },
  { label: 'ACADEMY', location: 'academy' },
  { label: 'CONTACT', location: 'contact' },
  { label: 'EXIT GAME', note: 'This world is browser-native. Keep the tab open to continue building.' },
]

export default function MainMenu({ active, selectedIndex, onSelectedIndexChange, onStart, onNavigate, onInfo }: Props) {
  useEffect(() => {
    if (!active) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key.toLowerCase() === 's') {
        event.preventDefault()
        onSelectedIndexChange((selectedIndex + 1) % menuItems.length)
      }
      if (event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') {
        event.preventDefault()
        onSelectedIndexChange((selectedIndex - 1 + menuItems.length) % menuItems.length)
      }
      if (event.key === 'Enter') {
        event.preventDefault()
        const item = menuItems[selectedIndex]
        if (item.label === 'START GAME') onStart()
        else if (item.location) onNavigate(item.location)
        else onInfo(item.note ?? 'System online.')
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [active, onInfo, onNavigate, onSelectedIndexChange, onStart, selectedIndex])

  const activate = (index: number) => {
    onSelectedIndexChange(index)
    const item = menuItems[index]
    if (item.label === 'START GAME') onStart()
    else if (item.location) onNavigate(item.location)
    else onInfo(item.note ?? 'System online.')
  }

  return (
    <main className="main-menu scene scene-home">
      <div className="scene-backdrop" aria-hidden="true"><div className="sun-glow" /><div className="skyline skyline-far" /><div className="skyline skyline-near" /><div className="road-grid" /><div className="orbital-line" /></div>
      <div className="menu-topline"><span>ORIGINAL DIGITAL WORLD</span><span>BUILD 01 / 2026</span></div>
      <section className="menu-panel" aria-label="Main menu">
        <div className="wordmark"><span className="wordmark-mark" aria-label="Hamid Raza">HR</span><div><strong>{portfolio.name}</strong><small>AI &amp; ML DEVELOPER</small></div></div>
        <p className="kicker">ENTERING SYSTEM // SIGNAL LOCKED</p>
        <h1>Portfolio</h1>
        <p className="menu-subtitle">{portfolio.subtitle}</p>
        <nav className="menu-list" aria-label="Game menu">
          {menuItems.map((item, index) => (
            <button key={item.label} className={`menu-item ${selectedIndex === index ? 'selected' : ''}`} onMouseEnter={() => onSelectedIndexChange(index)} onClick={() => activate(index)}>
              <span className="menu-arrow" aria-hidden="true">{selectedIndex === index ? '▸' : '·'}</span><span>{item.label}</span><span className="menu-index">{String(index + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </nav>
        <div className="menu-hint"><span>W / S</span><span>MOVE</span><span>ENTER</span><span>SELECT</span></div>
      </section>
      <aside className="menu-status">
        <div><span className="status-dot" />SYSTEM ONLINE</div>
        <div>LOCATION <strong>UNKNOWN CITY</strong></div>
        <div>VISITOR SIGNAL <strong>DETECTED</strong></div>
        <p>“See you in the next build.”</p>
      </aside>
      <div className="menu-scanline" aria-hidden="true" />
    </main>
  )
}
