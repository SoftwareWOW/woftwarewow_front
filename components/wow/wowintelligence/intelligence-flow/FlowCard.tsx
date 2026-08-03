'use client'

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
  pink: 'var(--neon-pink)',
}

export function FlowCard({
  icon: Icon,
  title,
  description,
  accent,
  align = 'left',
  index,
}: Props) {
  return (
    <motion.div
      style={{ '--glow': accentVar[accent] } as CSSProperties}
      initial={{ opacity: 0, x: align === 'left' ? -32 : 32, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="glass-card group flex items-center gap-3 px-4 py-3"
    >
      <span className="icon-chip">
        <Icon className="size-[18px]" strokeWidth={1.75} />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold text-[var(--if-foreground)]">{title}</span>
        <span className="block truncate text-xs text-[var(--if-muted)]">{description}</span>
      </span>
    </motion.div>
  )
}
