import { LocationId, portfolio } from '../data/portfolio'

type Props = { currentLocation: LocationId; onNavigate: (location: LocationId) => void }

const markerPosition: Record<LocationId, { left: string; top: string; label: string }> = {
  home: { left: '17%', top: '58%', label: "HAMID'S BASE" },
  about: { left: '36%', top: '28%', label: 'VICE BEACH' },
  skills: { left: '67%', top: '22%', label: 'SKILLS DISTRICT' },
  projects: { left: '77%', top: '66%', label: 'PROJECT BAY' },
  achievements: { left: '45%', top: '72%', label: 'ACHIEVEMENT PLAZA' },
  academy: { left: '82%', top: '33%', label: 'ACADEMY HEIGHTS' },
  goals: { left: '53%', top: '43%', label: 'FUTURE DISTRICT' },
  contact: { left: '22%', top: '80%', label: 'MISSION CONTROL' },
}

export default function Minimap({ currentLocation, onNavigate }: Props) {
  return <div className="minimap-wrap"><div className="minimap-heading"><span>MINIMAP</span><strong>CITY GRID // 01</strong></div><div className="minimap" role="group" aria-label="Fictional city map markers"><span className="map-water" /><span className="map-road road-a" /><span className="map-road road-b" /><span className="map-road road-c" />{portfolio.nav.map((item) => <button key={item.id} className={`map-marker ${currentLocation === item.id ? 'active' : ''}`} style={markerPosition[item.id]} title={markerPosition[item.id].label} aria-label={`Navigate to ${markerPosition[item.id].label}`} onClick={() => onNavigate(item.id)} />)}<span className="map-player" /></div><div className="minimap-legend"><span className="legend-pink" /> CURRENT LOCATION <span className="legend-cyan" /> DISCOVERED</div></div>
}
