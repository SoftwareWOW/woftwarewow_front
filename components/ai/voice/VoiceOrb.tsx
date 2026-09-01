'use client'

import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { VoiceStatus } from '@/lib/voice'

type VoiceOrbProps = {
  status: VoiceStatus
  onPress: () => void
  disabled?: boolean
  compact?: boolean
}

const STATUS_LABEL: Record<VoiceStatus, string> = {
  listening: 'Listening',
  processing: 'Thinking',
  speaking: 'Speaking',
  error: 'Try again',
  ended: 'Start listening',
}

export default function VoiceOrb({ status, onPress, disabled = false, compact = false }: VoiceOrbProps) {
  const isListening = status === 'listening'
  const isSpeaking = status === 'speaking'
  const isProcessing = status === 'processing'

  return (
    <button
      type="button"
      onClick={onPress}
      disabled={disabled || isProcessing}
      aria-label={STATUS_LABEL[status]}
      className={cn(
        'relative mx-auto flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed',
        compact ? 'h-14 w-14' : 'h-20 w-20',
      )}
    >
      <motion.span
        className="relative block h-full w-full"
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
        <Image
          src="/images/wow/aiicon.png"
          alt=""
          fill
          className="object-contain"
          sizes={compact ? '56px' : '80px'}
        />
      </motion.span>
    </button>
  )
}
