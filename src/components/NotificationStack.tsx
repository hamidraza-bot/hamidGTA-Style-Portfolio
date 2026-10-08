import { Notification } from '../hooks/useGameState'

export default function NotificationStack({ notifications }: { notifications: Notification[] }) {
  return <div className="notification-stack" aria-live="polite">{notifications.map((notice) => <div key={notice.id} className={`notification ${notice.tone ?? 'pink'}`}><span className="notification-icon">✦</span><div><strong>{notice.title}</strong><p>{notice.detail}</p></div></div>)}</div>
}
