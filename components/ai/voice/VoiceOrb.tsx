'use client'

import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'
import { Mic, Square } from 'lucide-react'
import type { VoiceStatus } from '@/lib/voice'

type VoiceOrbProps = {
  status: VoiceStatus
  onPress: () => void
  disabled?: boolean
}

const STATUS_LABEL: Record<VoiceStatus, string> = {
  idle: 'Tap to speak',
  listening: 'Stop listening',
  processing: 'Thinking',
  speaking: 'Stop speaking',
  error: 'Try again',
}

export default function VoiceOrb({ status, onPress, disabled = false }: VoiceOrbProps) {
  const isListening = status === 'listening'
  const isSpeaking = status === 'speaking'
  const isProcessing = status === 'processing'
  const isActive = isListening || isSpeaking

  return (
    <button
      type="button"
      onClick={onPress}
      disabled={disabled || isProcessing}
      aria-label={STATUS_LABEL[status]}
      className="relative mx-auto flex h-36 w-36 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-backgroundBody disabled:cursor-not-allowed dark:focus-visible:ring-offset-dark"
    >
      <motion.span
        aria-hidden
        className={cn(
          'absolute inset-0 rounded-full border',
          isListening ? 'border-[#615CCE]/55' : 'border-[#615CCE]/20',
        )}
        animate={
          isActive
            ? { scale: [1, 1.16, 1], opacity: [0.55, 0.18, 0.55] }
            : isProcessing
              ? { rotate: 360, opacity: 0.4 }
              : { scale: [1, 1.04, 1], opacity: [0.22, 0.12, 0.22] }
        }
        transition={
          isProcessing
            ? { duration: 8, repeat: Infinity, ease: 'linear' }
            : { duration: isActive ? 1.2 : 3.6, repeat: Infinity, ease: 'easeInOut' }
        }
      />
      <motion.span
        aria-hidden
        className={cn(
          'absolute inset-3 rounded-full border',
          isListening ? 'border-[#615CCE]/60' : 'border-[#615CCE]/25',
        )}
        animate={
          isActive
            ? { scale: [1, 1.12, 1], opacity: [0.65, 0.22, 0.65] }
            : { scale: [1, 1.03, 1], opacity: [0.2, 0.1, 0.2] }
        }
        transition={{ duration: isActive ? 0.9 : 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
      />
      <motion.span
        className={cn(
          'relative z-10 flex h-20 w-20 items-center justify-center rounded-full text-white shadow-lg shadow-[#615CCE]/25',
          isListening ? 'bg-[#4F46B8]' : 'bg-[#615CCE]',
        )}
        animate={
          isListening
            ? { scale: [1, 1.08, 1] }
            : isSpeaking
              ? { scale: [1, 1.04, 1] }
              : { scale: [1, 1.03, 1] }
        }
        transition={{ duration: isListening ? 0.85 : 2.8, repeat: Infinity, ease: 'easeInOut' }}
        whileTap={{ scale: 0.96 }}
      >
        {isListening ? (
          <Square className="h-6 w-6 fill-current" stroke="currentColor" />
        ) : (
          <Mic className="h-7 w-7" stroke="currentColor" />
        )}
      </motion.span>
    </button>
  )
}
