import { cn } from '@/lib/utils'
import type { ElementType, ReactNode } from 'react'

/** Purple → pink Instrument accent used across WOW headings (e.g. “Challenges”). */
export const INSTRUMENT_GRADIENT =
  'linear-gradient(90deg, #8b7cff 0%, #b794f4 50%, #f4a8b8 100%)'

/**
 * Gradient Instrument italic for use inside TextAppearAnimation.
 * Important: never paint gradient on BOTH the span and SplitType `.word`s —
 * that creates the purple/pink duplicate ghost. Use :has(.word) to switch.
 */
export const instrumentAccentGradientClassName = cn(
  'font-instrument italic align-baseline leading-[inherit]',
  // Pre-split (no .word yet): gradient on the span itself
  '[&:not(:has(.word))]:bg-gradient-to-r [&:not(:has(.word))]:from-[#8b7cff] [&:not(:has(.word))]:via-[#b794f4] [&:not(:has(.word))]:to-[#f4a8b8]',
  '[&:not(:has(.word))]:bg-clip-text [&:not(:has(.word))]:text-transparent',
  '[&:not(:has(.word))]:[-webkit-text-fill-color:transparent]',
  // Post-split: gradient only on words (span stays unfilled)
  '[&:has(.word)]:!bg-none [&:has(.word)]:[-webkit-text-fill-color:unset]',
  '[&_.word]:font-instrument [&_.word]:italic [&_.word]:align-baseline [&_.word]:leading-[inherit]',
  '[&_.word]:bg-gradient-to-r [&_.word]:from-[#8b7cff] [&_.word]:via-[#b794f4] [&_.word]:to-[#f4a8b8]',
  '[&_.word]:bg-clip-text [&_.word]:!text-transparent [&_.word]:[-webkit-text-fill-color:transparent]',
)

/** Solid Instrument italic (inherit text color). */
export const instrumentAccentSolidClassName = cn(
  'font-instrument italic align-baseline leading-[inherit]',
  '!bg-none !bg-clip-border !text-inherit [-webkit-text-fill-color:unset]',
  '[&_.word]:font-instrument [&_.word]:italic [&_.word]:align-baseline',
  '[&_.word]:!bg-none [&_.word]:!text-inherit [&_.word]:[-webkit-text-fill-color:unset]',
)

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
 * Reusable Instrument italic text — Tailwind only (no SCSS).
 */
export default function InstrumentText({
  children,
  className,
  as: Tag = 'span',
  variant = 'gradient',
}: InstrumentTextProps) {
  return (
    <Tag
      className={cn(
        variant === 'gradient' ? instrumentAccentGradientClassName : instrumentAccentSolidClassName,
        className,
      )}
    >
      {children}
    </Tag>
  )
}
