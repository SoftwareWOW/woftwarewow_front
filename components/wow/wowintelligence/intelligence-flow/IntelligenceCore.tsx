'use client'

import { motion } from 'framer-motion'
import { BrainCircuit } from 'lucide-react'

export function IntelligenceCore() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex w-full max-w-[280px] items-center justify-center py-10 sm:max-w-[320px] sm:py-6 lg:py-0"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-[18%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--neon-violet)_28%,transparent)_0%,transparent_68%)] blur-[24px]"
      />
      <div
        aria-hidden="true"
        className="absolute -inset-[12%] animate-[ring-spin_18s_linear_infinite] rounded-full border border-[color-mix(in_oklab,var(--neon-violet)_22%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -inset-[22%] animate-[ring-spin_26s_linear_infinite_reverse] rounded-full border border-[color-mix(in_oklab,var(--neon-pink)_18%,transparent)]"
      />

      {[0, 1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute top-[8%] size-[5px] animate-if-core-particle rounded-full bg-[var(--neon-pink)] opacity-75"
          style={{ animationDelay: `${i * 0.9}s`, left: `${12 + i * 14}%` }}
        />
      ))}

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 flex w-full flex-col items-center gap-3 rounded-[calc(var(--radius-md)+4px)] border border-[color-mix(in_oklab,var(--neon-violet)_28%,transparent)] bg-backgroundBody/92 px-6 py-8 text-center shadow-[0_0_0_1px_color-mix(in_oklab,var(--neon-violet)_8%,transparent),0_24px_64px_color-mix(in_oklab,var(--neon-violet)_14%,transparent)] backdrop-blur-[18px] dark:bg-dark/92 sm:px-8 sm:py-10"
      >
        <span className="inline-flex size-14 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--neon-violet)_30%,transparent)] bg-[linear-gradient(135deg,color-mix(in_oklab,var(--neon-violet)_18%,transparent),color-mix(in_oklab,var(--neon-pink)_12%,transparent))] text-primary">
          <BrainCircuit className="size-7" strokeWidth={1.5} />
        </span>
        <h3 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          WOW Intelligence
        </h3>
      </motion.div>
    </motion.div>
  )
}
