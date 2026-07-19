'use client'

import { motion } from 'framer-motion'

export default function TypingIndicator() {
  return (
    <div
      className="flex items-center gap-1.5 rounded-radius-sm bg-[#1515150A] px-4 py-3 dark:bg-white/5"
      aria-label="Assistant is typing"
      role="status"
    >
      {[0, 1, 2].map((index) => (
        <motion.span
          key={index}
          className="h-2 w-2 rounded-full bg-primary/70 dark:bg-primary-50"
          animate={{ opacity: [0.35, 1, 0.35], y: [0, -3, 0] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            delay: index * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
