'use client'

import WowText from '@/components/wow/shared/WowText'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

type HeroTypingTitleProps = {
  primaryText: string
  secondaryText: string
}

// 🔥 SAME SPEED for both primary and secondary (continuous typing)
const TYPING_SPEED = 100 // Same speed for all typing
const BACKSPACE_SPEED = 70
const PHASE_DELAY = 1500 // Delay after both texts are complete
const REPEAT_DELAY = 2500 // Delay before repeating

export default function HeroTypingTitle({
  primaryText,
  secondaryText,
}: HeroTypingTitleProps) {
  const [primaryIndex, setPrimaryIndex] = useState(0)
  const [secondaryIndex, setSecondaryIndex] = useState(0)
  const [phase, setPhase] = useState<'primary' | 'secondary' | 'done' | 'backspace'>('primary')
  const [showCursor, setShowCursor] = useState(true)
  const [skipAnimation, setSkipAnimation] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const applyPreference = () => {
      if (mediaQuery.matches) {
        setSkipAnimation(true)
        setPrimaryIndex(primaryText.length)
        setSecondaryIndex(secondaryText.length)
        setPhase('done')
      }
    }

    applyPreference()
    mediaQuery.addEventListener('change', applyPreference)

    return () => mediaQuery.removeEventListener('change', applyPreference)
  }, [primaryText.length, secondaryText.length])

  useEffect(() => {
    if (skipAnimation) return

    const cursorInterval = window.setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 520)

    return () => window.clearInterval(cursorInterval)
  }, [skipAnimation])

  useEffect(() => {
    if (skipAnimation) return

    // Primary typing phase - starts immediately
    if (phase === 'primary') {
      if (primaryIndex < primaryText.length) {
        const timeout = window.setTimeout(
          () => setPrimaryIndex((index) => index + 1),
          TYPING_SPEED,
        )
        return () => window.clearTimeout(timeout)
      }

      // 🔥 Immediately start secondary without delay
      setPhase('secondary')
      return
    }

    // Secondary typing phase - continuous from primary
    if (phase === 'secondary') {
      if (secondaryIndex < secondaryText.length) {
        const timeout = window.setTimeout(
          () => setSecondaryIndex((index) => index + 1),
          TYPING_SPEED,
        )
        return () => window.clearTimeout(timeout)
      }

      // Both texts complete - pause before done
      const timeout = window.setTimeout(() => setPhase('done'), PHASE_DELAY)
      return () => window.clearTimeout(timeout)
    }

    // Done phase - hold the full text
    if (phase === 'done') {
      const timeout = window.setTimeout(() => setPhase('backspace'), REPEAT_DELAY)
      return () => window.clearTimeout(timeout)
    }

    // Backspace phase - remove characters one by one
    if (phase === 'backspace') {
      // First remove secondary text if present
      if (secondaryIndex > 0) {
        const timeout = window.setTimeout(
          () => setSecondaryIndex((index) => index - 1),
          BACKSPACE_SPEED,
        )
        return () => window.clearTimeout(timeout)
      }

      // Then remove primary text
      if (primaryIndex > 0) {
        const timeout = window.setTimeout(
          () => setPrimaryIndex((index) => index - 1),
          BACKSPACE_SPEED,
        )
        return () => window.clearTimeout(timeout)
      }

      // After everything is cleared, restart
      const timeout = window.setTimeout(() => {
        setPhase('primary')
      }, PHASE_DELAY)
      return () => window.clearTimeout(timeout)
    }
  }, [
    phase,
    primaryIndex,
    secondaryIndex,
    primaryText.length,
    secondaryText.length,
    skipAnimation,
  ])

  const primaryDisplay = primaryText.slice(0, primaryIndex)
  const secondaryDisplay = secondaryText.slice(0, secondaryIndex)
  const isTyping = phase !== 'done' && phase !== 'backspace'

  return (
    <h1 className="mb-4 mt-3.5 text-[clamp(2.75rem,12vw,6rem)] font-normal leading-[1.05] tracking-[-0.04em] sm:tracking-[-0.06em] xl:leading-[1.1] xl:tracking-[-2.88px]">
      <span className="inline-flex max-w-full flex-nowrap items-baseline justify-center gap-x-[0.2em] overflow-visible whitespace-nowrap">
        {primaryDisplay ? (
          <WowText className="align-baseline text-[1em]">{primaryDisplay}</WowText>
        ) : null}

        {(phase === 'secondary' || phase === 'done' || phase === 'backspace') && secondaryDisplay ? (
          <span className="text-[0.92em]">{secondaryDisplay}</span>
        ) : null}

        <span
          aria-hidden
          className={cn(
            'inline-block shrink-0 rounded-full bg-current align-middle',
            'h-[0.72em] w-[0.08em] sm:w-[0.07em]',
            phase === 'done' ? 'animate-pulse opacity-60' : 'opacity-90',
            isTyping && !showCursor && 'opacity-0',
          )}
        />
      </span>
    </h1>
  )
}
