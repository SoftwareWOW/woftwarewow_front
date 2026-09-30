'use client'

import { useEffect, useState } from 'react'

type Props = {
  targetIso?: string
}

type CountdownParts = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

function pad(value: number) {
  return String(Math.max(0, value)).padStart(2, '0')
}

function computeParts(targetMs: number): CountdownParts | null {
  const diff = targetMs - Date.now()
  if (diff <= 0) return null

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  }
}

const EventCountdown = ({ targetIso }: Props) => {
  const targetMs = targetIso ? new Date(targetIso).getTime() : NaN
  const [parts, setParts] = useState<CountdownParts | null>(() =>
    Number.isFinite(targetMs) ? computeParts(targetMs) : null,
  )

  useEffect(() => {
    if (!Number.isFinite(targetMs)) return

    const tick = () => setParts(computeParts(targetMs))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [targetMs])

  if (!parts) return null

  return (
    <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 bg-secondary px-4 py-3 font-mono text-sm text-backgroundBody dark:bg-backgroundBody dark:text-secondary sm:text-base">
      <span>{parts.days}D</span>
      <span className="opacity-60">:</span>
      <span>{parts.hours}HR</span>
      <span className="opacity-60">:</span>
      <span>{parts.minutes}M</span>
      <span className="opacity-60">:</span>
      <span>{parts.seconds}S</span>
    </div>
  )
}

export default EventCountdown
