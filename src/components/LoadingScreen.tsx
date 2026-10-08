import { useEffect, useState } from 'react'

const messages = ['INITIALIZING AI SYSTEMS...', 'LOADING PROJECTS...', 'CONNECTING TO GITHUB...', 'LOADING AUTOMATIONS...', 'BUILDING DIGITAL EXPERIENCE...', 'SYSTEM READY.']

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(100, current + 4)
        setMessageIndex(Math.min(messages.length - 1, Math.floor(next / 20)))
        if (next >= 100) {
          window.clearInterval(interval)
          window.setTimeout(onComplete, 480)
        }
        return next
      })
    }, 72)
    return () => window.clearInterval(interval)
  }, [onComplete])

  return (
    <main className="loading-screen" aria-label="Loading digital world">
      <div className="loading-grid" />
      <div className="loading-mark" aria-hidden="true">HR<span>//</span></div>
      <div className="loading-copy">
        <p className="kicker">HAMID RAZA / AI DEVELOPER</p>
        <h1>LOADING<br /><em>DIGITAL WORLD</em></h1>
        <div className="loading-progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <span style={{ width: `${progress}%` }} />
        </div>
        <div className="loading-meta"><span>{messages[messageIndex]}</span><strong>{String(progress).padStart(3, '0')}%</strong></div>
      </div>
      <p className="loading-footer">ORIGINAL DIGITAL EXPERIENCE // SYSTEM BUILD 01</p>
    </main>
  )
}
