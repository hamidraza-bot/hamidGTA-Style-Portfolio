type Props = { onClose: () => void }

export default function DeveloperTerminal({ onClose }: Props) {
  return <div className="terminal-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) onClose() }}><section className="developer-terminal" role="dialog" aria-modal="true" aria-labelledby="terminal-title"><div className="terminal-head"><span id="terminal-title">DEVELOPER TERMINAL</span><button onClick={onClose} aria-label="Close developer terminal">×</button></div><div className="terminal-body"><p>&gt; SYSTEM ONLINE</p><p>&gt; USER: HAMID RAZA</p><p>&gt; ROLE: AI DEVELOPER</p><p>&gt; STATUS: BUILDING</p><p className="terminal-caret">&gt; <span>_</span></p></div><div className="terminal-foot">CTRL + K TO TOGGLE // SIGNAL SECURE</div></section></div>
}
