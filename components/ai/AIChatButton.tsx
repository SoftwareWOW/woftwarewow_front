'use client'

import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

type AIChatButtonProps = {
  onClick: () => void
  isOpen?: boolean
}

export default function AIChatButton({ onClick, isOpen = false }: AIChatButtonProps) {
  if (isOpen) return null

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label="Open AI assistant"
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed z-[1200] flex h-14 w-14 items-center justify-center rounded-full',
        'bg-primary text-white shadow-lg shadow-primary/30',
        'bottom-[calc(5.75rem+env(safe-area-inset-bottom))] right-4 md:bottom-6 md:right-6',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-backgroundBody dark:focus-visible:ring-offset-dark',
      )}
    >
      <MessageCircle
        className="h-6 w-6 !text-white !stroke-white"
        stroke="currentColor"
        strokeWidth={1.75}
      />
    </motion.button>
  )
}
