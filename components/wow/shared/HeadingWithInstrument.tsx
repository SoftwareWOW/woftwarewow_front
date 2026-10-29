'use client'

import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import { cn } from '@/lib/utils'
import type { ElementType, ReactNode } from 'react'
import { instrumentAccentClassName } from './InstrumentText'
import { WOW_FONT_WEIGHT } from './WowTypography'

type HeadingWithInstrumentProps = {
  /** Plain title text before the italic accent */
  before: ReactNode
  /** Italic Instrument accent (inherits heading color) */
  accent: ReactNode
  as?: ElementType
  className?: string
  accentClassName?: string
}

/**
 * Animated heading: plain text + Instrument accent share the same TextAppearAnimation.
 */
export default function HeadingWithInstrument({
  before,
  accent,
  as: Tag = 'h2',
  className,
  accentClassName,
}: HeadingWithInstrumentProps) {
  return (
    <TextAppearAnimation>
      <Tag className={cn('text-appear', WOW_FONT_WEIGHT, '[&_.line]:!overflow-visible', className)}>
        {before}{' '}
        <span
          className={cn(instrumentAccentClassName, WOW_FONT_WEIGHT, accentClassName)}
        >
          {accent}
        </span>
      </Tag>
    </TextAppearAnimation>
  )
}
