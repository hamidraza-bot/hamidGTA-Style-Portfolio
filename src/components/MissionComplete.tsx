type Props = { onPlayAgain: () => void; onProjects: () => void; onContact: () => void }

export default function MissionComplete({ onPlayAgain, onProjects, onContact }: Props) {
  return <section className="mission-complete"><div className="complete-ring" aria-hidden="true"><span>✓</span></div><p className="kicker">MISSION COMPLETE</p><h2>THANK YOU<br /><em>FOR PLAYING</em></h2><p className="complete-name">HAMID RAZA / AI DEVELOPER</p><p className="complete-quote">“See you in the next build.”</p><div className="complete-actions"><button className="button button-primary" onClick={onPlayAgain}>PLAY AGAIN</button><button className="button button-secondary" onClick={onProjects}>VIEW PROJECTS</button><button className="button button-quiet" onClick={onContact}>CONTACT HAMID</button></div></section>
}
