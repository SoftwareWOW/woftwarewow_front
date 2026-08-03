'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit } from 'lucide-react'

const ORBIT_R = 46
const ORBIT_PATH = `M 50,${50 - ORBIT_R} A ${ORBIT_R},${ORBIT_R} 0 1,1 49.9,${50 - ORBIT_R}`

export const IntelligenceCore = forwardRef<HTMLDivElement>(function IntelligenceCore(_, ref) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex w-full max-w-[280px] items-center justify-center py-10 sm:max-w-[320px] sm:py-6 lg:py-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[130%] max-w-[340px] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--neon-violet)_28%,transparent)_0%,transparent_68%)] blur-[24px]" />

        <div className="absolute inset-[10%] animate-[ring-spin_18s_linear_infinite] rounded-full border border-[color-mix(in_oklab,var(--neon-violet)_22%,transparent)]" />
        <div className="absolute inset-[2%] animate-[ring-spin_26s_linear_infinite_reverse] rounded-full border border-[color-mix(in_oklab,var(--neon-pink)_18%,transparent)]" />

        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="absolute inset-0 size-full animate-[ring-spin_22s_linear_infinite]"
        >
          <circle
            cx="50"
            cy="50"
            r={ORBIT_R}
            fill="none"
            stroke="var(--neon-violet)"
            strokeOpacity="0.35"
            strokeWidth="0.6"
            strokeDasharray="4 7"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="absolute inset-0 size-full animate-[ring-spin_32s_linear_infinite_reverse]"
        >
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="var(--neon-pink)"
            strokeOpacity="0.3"
            strokeWidth="0.5"
            strokeDasharray="3 8"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute inset-0 size-full">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle key={i} r="1.8" fill="var(--neon-pink)" opacity={0.85}>
              <animateMotion
                dur={`${7 + (i % 3)}s`}
                repeatCount="indefinite"
                path={ORBIT_PATH}
                begin={`${i * -1.2}s`}
              />
            </circle>
          ))}
        </svg>
      </div>

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
})
