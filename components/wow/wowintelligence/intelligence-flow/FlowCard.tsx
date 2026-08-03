'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'
import type { LucideIcon } from 'lucide-react'

export type Accent = 'violet' | 'blue' | 'pink'

type Props = {
  icon: LucideIcon
  title: string
  description: string
  accent: Accent
  align?: 'left' | 'right'
  index: number
}

export const accentVar: Record<Accent, string> = {
  violet: 'var(--neon-violet)',
  blue: 'var(--neon-blue)',
  pink: 'var(--neon-blue)',
}

export const FlowCard = forwardRef<HTMLDivElement, Props>(function FlowCard(
  { icon: Icon, title, description, accent, align = 'left', index },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      style={{ '--glow': accentVar[accent] } as CSSProperties}
      initial={{ opacity: 0, x: align === 'left' ? -32 : 32, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-radius-md border border-[color-mix(in_oklab,var(--glow)_22%,transparent)] bg-backgroundBody/88 px-4 py-3.5 transition-[border-color] duration-300 hover:border-[color-mix(in_oklab,var(--glow)_35%,transparent)] dark:bg-dark/88 sm:flex sm:items-center"
    >
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-[0.625rem] border border-[color-mix(in_oklab,var(--glow)_24%,transparent)] bg-[color-mix(in_oklab,var(--glow)_12%,transparent)] text-[var(--glow)]">
        <Icon className="size-[18px]" strokeWidth={1.75} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm leading-snug font-semibold text-balance text-foreground lg:truncate">
          {title}
        </span>
        <span className="mt-0.5 block text-xs leading-snug text-muted-foreground lg:truncate">
          {description}
        </span>
      </span>
    </motion.div>
  )
})
