'use client'

import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import { cn } from '@/lib/utils'
import type { ElementType, ReactNode } from 'react'
import {
  instrumentAccentGradientClassName,
  instrumentAccentSolidClassName,
} from './InstrumentText'

type HeadingWithInstrumentProps = {
  /** Plain title text before the italic accent */
  before: ReactNode
  /** Italic Instrument accent (gradient by default) */
  accent: ReactNode
  as?: ElementType
  className?: string
  accentClassName?: string
  variant?: 'solid' | 'gradient'
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
  variant = 'gradient',
}: HeadingWithInstrumentProps) {
  return (
    <TextAppearAnimation>
      <Tag className={cn('text-appear [&_.line]:!overflow-visible', className)}>
        {before}{' '}
        <span
          className={cn(
            variant === 'gradient' ? instrumentAccentGradientClassName : instrumentAccentSolidClassName,
            accentClassName,
          )}
        >
          {accent}
        </span>
      </Tag>
    </TextAppearAnimation>
  )
}
