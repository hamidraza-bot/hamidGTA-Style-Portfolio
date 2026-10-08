import { MouseEvent } from 'react'
import { Project } from '../data/portfolio'

type Props = { project: Project | null; onClose: () => void; onInfo: (message: string) => void }

export default function ProjectModal({ project, onClose, onInfo }: Props) {
  if (!project) return null
  const placeholder = (event: MouseEvent<HTMLButtonElement>, channel: string) => { event.stopPropagation(); onInfo(`${channel} // ADD A VERIFIED URL IN src/data/portfolio.ts`) }
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) onClose() }}>
    <section className="mission-modal" role="dialog" aria-modal="true" aria-labelledby="mission-title">
      <button className="modal-close" onClick={onClose} aria-label="Close mission briefing">×</button>
      <div className="modal-topline"><span>MISSION BRIEFING</span><span>{project.signal}</span></div>
      <div className="modal-hero"><span className="modal-mission">{project.mission}</span><span className="modal-difficulty">{project.difficulty}</span><h2 id="mission-title">{project.name}</h2><p>{project.category}</p></div>
      <div className="modal-grid"><div><span className="label">OBJECTIVE</span><p>{project.description}</p></div><div><span className="label">TECHNOLOGIES</span><div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div><div><span className="label">STATUS</span><strong className="modal-status">{project.status}</strong><small>Live and code links remain editable until real URLs are added.</small></div></div>
      <div className="modal-actions">{project.liveUrl ? <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">VIEW LIVE <span>↗</span></a> : <button className="button button-primary" onClick={(event) => placeholder(event, 'LIVE CHANNEL')}>VIEW LIVE</button>}{project.codeUrl ? <a className="button button-secondary" href={project.codeUrl} target="_blank" rel="noreferrer">VIEW CODE <span>↗</span></a> : <button className="button button-secondary" onClick={(event) => placeholder(event, 'CODE CHANNEL')}>VIEW CODE</button>}<button className="button button-quiet" onClick={onClose}>CLOSE MISSION</button></div>
    </section>
  </div>
}
