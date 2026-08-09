'use client'

import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import { cn } from '@/lib/utils'
import type { ElementType, ReactNode } from 'react'
import InstrumentText from './InstrumentText'

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
 * Animated heading that keeps Instrument italic gradient visible.
 * TextAppearAnimation/SplitType must NOT wrap InstrumentText — it strips
 * nested text nodes and breaks bg-clip-text. Accent sits outside the split.
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
    <Tag className={cn(className)}>
      <TextAppearAnimation>
        <span className="text-appear">{before} </span>
      </TextAppearAnimation>
      <InstrumentText variant={variant} className={accentClassName}>
        {accent}
      </InstrumentText>
    </Tag>
  )
}
