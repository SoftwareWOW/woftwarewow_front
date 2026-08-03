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
      className="relative mx-auto flex w-full max-w-[320px] items-center justify-center"
    >
      <div className="core-halo" aria-hidden="true" />
      <div className="core-ring core-ring-a" aria-hidden="true" />
      <div className="core-ring core-ring-b" aria-hidden="true" />

      {[0, 1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          aria-hidden="true"
          className="core-particle"
          style={{ animationDelay: `${i * 0.9}s`, left: `${12 + i * 14}%` }}
        />
      ))}

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="core-card relative z-10 flex flex-col items-center gap-3 px-8 py-10 text-center"
      >
        <span className="core-badge">
          <BrainCircuit className="size-7" strokeWidth={1.5} />
        </span>
        <span className="core-wordmark">WOW</span>
        <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--if-foreground)]">
          WOW Intelligence
        </h3>
        <p className="text-xs text-[var(--if-muted)]">AI-Powered Business Intelligence</p>
      </motion.div>
    </motion.div>
  )
}
