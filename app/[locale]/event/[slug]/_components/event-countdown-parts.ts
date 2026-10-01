export type CountdownParts = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

export function pad2(value: number) {
  return String(Math.max(0, value)).padStart(2, '0')
}

export function computeCountdownParts(targetMs: number): CountdownParts | null {
  const diff = targetMs - Date.now()
  if (diff <= 0) return null

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return {
    days: String(days),
    hours: pad2(hours),
    minutes: pad2(minutes),
    seconds: pad2(seconds),
  }
}

export function parseCountdownTargetMs(targetIso?: string): number {
  return targetIso ? new Date(targetIso).getTime() : NaN
}
