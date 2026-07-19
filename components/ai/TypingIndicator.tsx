'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export default function TypingIndicator() {
  return (
    <div
      className="inline-flex items-center gap-3 rounded-radius-md border border-[#1515151A] bg-white px-4 py-3 shadow-sm dark:border-[#EDF0F51A] dark:bg-dark"
      aria-label="Assistant is thinking"
      role="status"
    >
      <motion.span
        className="inline-flex h-5 w-5 shrink-0 items-center justify-center text-[#615CCE]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 0.85,
          repeat: Infinity,
          ease: 'linear',
        }}
        aria-hidden
      >
        <Loader2 className="h-5 w-5" strokeWidth={2.25} />
      </motion.span>

      <span className="text-sm font-normal text-[#666666] dark:text-dark-100">Thinking...</span>
    </div>
  )
}
