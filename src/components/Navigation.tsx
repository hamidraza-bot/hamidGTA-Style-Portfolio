import { LocationId, portfolio } from '../data/portfolio'

type Props = { currentLocation: LocationId; onNavigate: (location: LocationId) => void; open: boolean; onToggle: () => void }

export default function Navigation({ currentLocation, onNavigate, open, onToggle }: Props) {
  return <><button className="nav-toggle" onClick={onToggle} aria-expanded={open} aria-label="Open navigation">{open ? '×' : '≡'}<span>{open ? 'CLOSE' : 'NAV'}</span></button>{open && <aside className="pause-menu" aria-label="Pause navigation"><div className="pause-heading"><span>PAUSE MENU</span><strong>NAVIGATION</strong></div><nav>{portfolio.nav.map((item, index) => <button key={item.id} className={currentLocation === item.id ? 'active' : ''} onClick={() => onNavigate(item.id)}><span>{String(index + 1).padStart(2, '0')}</span>{item.label}<small>{item.location}</small></button>)}</nav><p>ESC CLOSE // SELECT A LOCATION</p></aside>}</>
}
