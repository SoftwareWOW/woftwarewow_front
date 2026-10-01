'use client'

import { useEffect, useState } from 'react'

import {
  computeCountdownParts,
  parseCountdownTargetMs,
  type CountdownParts,
} from './event-countdown-parts'

type Props = {
  targetIso?: string
}

const EventCountdown = ({ targetIso }: Props) => {
  const targetMs = parseCountdownTargetMs(targetIso)
  const [parts, setParts] = useState<CountdownParts | null>(() =>
    Number.isFinite(targetMs) ? computeCountdownParts(targetMs) : null,
  )

  useEffect(() => {
    if (!Number.isFinite(targetMs)) return

    const tick = () => setParts(computeCountdownParts(targetMs))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [targetMs])

  if (!parts) return null

  const segment = (value: string, unit: string) => (
    <span className="tabular-nums">
      {value}
      {unit}
    </span>
  )

  const separator = <span className="px-1 text-white/45 sm:px-1.5">:</span>

  return (
    <div
      className="inline-flex items-center whitespace-nowrap rounded-radius-sm bg-[#111111] px-4 py-3 text-[13px] font-medium leading-none tracking-[0.02em] text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] dark:bg-[#0A0A0A] sm:px-5 sm:py-4 sm:text-[15px] md:text-base"
      role="timer"
      aria-live="polite"
    >
      {segment(parts.days, 'D')}
      {separator}
      {segment(parts.hours, 'HR')}
      {separator}
      {segment(parts.minutes, 'M')}
      {separator}
      {segment(parts.seconds, 'S')}
    </div>
  )
}

export default EventCountdown
