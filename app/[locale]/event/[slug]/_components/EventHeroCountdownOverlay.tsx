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

function CountdownDisplay({ parts }: { parts: CountdownParts }) {
  const segment = (value: string, unit: string) => (
    <span className="tabular-nums">
      {value}
      {unit}
    </span>
  )

  const separator = <span className="px-1 text-white/45 sm:px-1.5">:</span>

  return (
    <div
      className="
        flex h-[48px] w-[150px] items-center justify-center gap-[6px] overflow-hidden whitespace-nowrap
        rounded-[5px] border border-white/10 bg-[#121212] px-[16px] text-[8px] tracking-[0.06em] text-white
        sm:h-[56px] sm:w-[175px] sm:gap-[7px] sm:px-[20px] sm:text-[9px]
        md:h-[64px] md:w-[205px] md:gap-[8px] md:px-[24px] md:text-[10px]
        xl:h-[79px] xl:w-[244px] xl:gap-[10px] xl:px-[32px] xl:text-[11px]
        [&>*]:w-full [&>*]:max-w-full [&>*]:text-center
      "
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

/** Hero cutout + countdown — hidden entirely when the event time has passed or is invalid. */
const EventHeroCountdownOverlay = ({ targetIso }: Props) => {
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

  return (
    <div className="pointer-events-none absolute bottom-0 right-0 z-10 w-fit">
      <div className="relative w-fit rounded-tl-[8px] bg-background pl-[7px] pt-[7px] transition-colors duration-300 dark:bg-dark">
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-[-8px] z-[3] h-[8px] w-[8px]"
          style={{
            background:
              'radial-gradient(circle at 0% 0%, transparent 8px, var(--event-cutout) 8.5px)',
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute right-0 top-[-8px] z-[3] h-[8px] w-[8px]"
          style={{
            background:
              'radial-gradient(circle at 0% 0%, transparent 8px, var(--event-cutout) 8.5px)',
          }}
        />
        <CountdownDisplay parts={parts} />
      </div>
    </div>
  )
}

export default EventHeroCountdownOverlay
