import { useCallback, useMemo, useRef, useState } from 'react'
import { LocationId, portfolio } from '../data/portfolio'

export type Notification = { id: number; title: string; detail: string; tone?: 'pink' | 'cyan' | 'orange' }

const initialUnlocked = portfolio.achievements.filter((item) => item.unlocked).map((item) => item.id)

export function useGameState() {
  const [gameStarted, setGameStarted] = useState(false)
  const [currentLocation, setCurrentLocation] = useState<LocationId>('home')
  const [visitedSections, setVisitedSections] = useState<LocationId[]>([])
  const [xp, setXp] = useState(0)
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>(initialUnlocked)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [musicEnabled, setMusicEnabled] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [terminalOpen, setTerminalOpen] = useState(false)
  const visitedRef = useRef<LocationId[]>([])
  const xpRef = useRef(0)
  const notificationIdRef = useRef(0)
  const secretClickRef = useRef(0)

  const level = Math.floor(xp / 500) + 1
  const levelXp = xp % 500
  const currentMission = portfolio.missions[currentLocation]
  const currentNav = portfolio.nav.find((item) => item.id === currentLocation) ?? portfolio.nav[0]

  const notify = useCallback((title: string, detail: string, tone: Notification['tone'] = 'pink') => {
    const nextId = notificationIdRef.current + 1
    notificationIdRef.current = nextId
    setNotifications((current) => [...current.slice(-2), { id: nextId, title, detail, tone }])
    window.setTimeout(() => setNotifications((current) => current.filter((item) => item.id !== nextId)), 4200)
  }, [])

  const awardXp = useCallback((amount: number, reason: string) => {
    const previousLevel = Math.floor(xpRef.current / 500) + 1
    const next = xpRef.current + amount
    xpRef.current = next
    setXp(next)
    const nextLevel = Math.floor(next / 500) + 1
    if (nextLevel > previousLevel) notify('LEVEL UP!', `LEVEL ${String(nextLevel).padStart(2, '0')} UNLOCKED`, 'cyan')
    notify('MISSION COMPLETE', `${reason}  //  +${amount} XP`, 'pink')
  }, [notify])

  const markVisited = useCallback((location: LocationId) => {
    setCurrentLocation(location)
    if (visitedRef.current.includes(location)) return
    visitedRef.current = [...visitedRef.current, location]
    setVisitedSections(visitedRef.current)
    awardXp(portfolio.missions[location].reward, portfolio.missions[location].label)
  }, [awardXp])

  const visit = useCallback((location: LocationId) => markVisited(location), [markVisited])

  const startGame = useCallback(() => {
    setGameStarted(true)
    setIsPaused(false)
    markVisited('home')
  }, [markVisited])

  const resetGame = useCallback(() => {
    setGameStarted(false)
    setCurrentLocation('home')
    visitedRef.current = []
    setVisitedSections([])
    xpRef.current = 0
    setXp(0)
    setUnlockedAchievements(initialUnlocked)
    secretClickRef.current = 0
    setIsPaused(false)
    setNotifications([])
  }, [])

  const unlockAchievement = useCallback((id: string, title: string) => {
    if (!unlockedAchievements.includes(id)) {
      setUnlockedAchievements((current) => current.includes(id) ? current : [...current, id])
      notify('ACHIEVEMENT UNLOCKED', title, 'orange')
      return
    }
    notify('ACHIEVEMENT LOG', `${title} // ALREADY UNLOCKED`, 'cyan')
  }, [notify, unlockedAchievements])

  const incrementSecretClicks = useCallback(() => {
    secretClickRef.current += 1
    if (secretClickRef.current >= 5) {
      secretClickRef.current = 0
      notify('SECRET MODE UNLOCKED', 'HUD signal authenticated. Keep building.', 'orange')
    }
  }, [notify])

  const state = useMemo(() => ({
    gameStarted, currentLocation, currentMission, currentNav, visitedSections, xp, level, levelXp,
    soundEnabled, musicEnabled, reduceMotion, isPaused, notifications, terminalOpen, unlockedAchievements,
  }), [gameStarted, currentLocation, currentMission, currentNav, visitedSections, xp, level, levelXp, soundEnabled, musicEnabled, reduceMotion, isPaused, notifications, terminalOpen, unlockedAchievements])

  return {
    ...state,
    startGame,
    resetGame,
    visit,
    notify,
    unlockAchievement,
    incrementSecretClicks,
    setSoundEnabled,
    setMusicEnabled,
    setReduceMotion,
    setIsPaused,
    setTerminalOpen,
  }
}
