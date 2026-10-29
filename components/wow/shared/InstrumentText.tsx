import { cn } from '@/lib/utils'
import type { ElementType, ReactNode } from 'react'

/**
 * Instrument italic accent — inherits surrounding text color (no gradient fill).
 * Works with TextAppearAnimation / SplitType `.word` spans.
 */
export const instrumentAccentClassName = cn(
  'font-instrument italic align-baseline leading-[inherit]',
  '!bg-none !bg-clip-border !text-inherit [-webkit-text-fill-color:unset]',
  '[&_.word]:font-instrument [&_.word]:italic [&_.word]:align-baseline [&_.word]:leading-[inherit]',
  '[&_.word]:!bg-none [&_.word]:!text-inherit [&_.word]:[-webkit-text-fill-color:unset]',
)

/** @deprecated Use `instrumentAccentClassName` — gradient accents removed. */
export const instrumentAccentSolidClassName = instrumentAccentClassName

type InstrumentTextProps = {
  children: ReactNode
  className?: string
  as?: ElementType
  /** @deprecated Ignored — accent always uses Instrument italic and inherits color. */
  variant?: 'solid' | 'gradient'
}

/**
 * Reusable Instrument italic text — Tailwind only (no SCSS).
 */
export default function InstrumentText({
  children,
  className,
  as: Tag = 'span',
  variant: _variant,
}: InstrumentTextProps) {
  return <Tag className={cn(instrumentAccentClassName, className)}>{children}</Tag>
}
