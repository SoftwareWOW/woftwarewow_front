import { cn } from '@/lib/utils'
import type { ElementType, ReactNode } from 'react'

/** Purple → pink Instrument accent used across WOW headings (e.g. “Challenges”). */
export const INSTRUMENT_GRADIENT =
  'linear-gradient(90deg, #8b7cff 0%, #b794f4 50%, #f4a8b8 100%)'

type InstrumentTextProps = {
  children: ReactNode
  className?: string
  as?: ElementType
  /**
   * `gradient` — Instrument italic with purple-to-pink fill (default).
   * `solid` — inherit heading/body color.
   */
  variant?: 'solid' | 'gradient'
}

/**
 * Reusable Instrument italic text.
 * Default matches the WOW gradient accent style.
 */
export default function InstrumentText({
  children,
  className,
  as: Tag = 'span',
  variant = 'gradient',
}: InstrumentTextProps) {
  const isGradient = variant === 'gradient'

  return (
    <Tag
      className={cn(
        'font-instrument italic',
        isGradient &&
          'bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-transparent',
        variant === 'solid' && '!bg-none !bg-clip-border !text-inherit',
        className,
      )}
      style={
        isGradient
          ? {
              backgroundImage: INSTRUMENT_GRADIENT,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }
          : undefined
      }
    >
      {children}
    </Tag>
  )
}
