'use client'

import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'
import type { VoiceStatus } from '@/lib/voice'

const BAR_COUNT = 7
const IDLE_HEIGHTS = [10, 16, 12, 20, 14, 18, 11]
const LISTENING_HEIGHTS = [18, 32, 24, 40, 22, 34, 16]
const SPEAKING_HEIGHTS = [22, 38, 28, 44, 26, 36, 20]
const THINKING_HEIGHTS = [12, 18, 14, 22, 16, 20, 12]

type VoiceWaveformProps = {
  status: VoiceStatus
}

export default function VoiceWaveform({ status }: VoiceWaveformProps) {
  const heights =
    status === 'listening'
      ? LISTENING_HEIGHTS
      : status === 'speaking'
        ? SPEAKING_HEIGHTS
        : status === 'processing'
          ? THINKING_HEIGHTS
          : IDLE_HEIGHTS

  const duration = status === 'listening' || status === 'speaking' ? 0.7 : 1.8

  return (
    <div
      className="flex h-11 items-end justify-center gap-1.5"
      aria-hidden
    >
      {Array.from({ length: BAR_COUNT }).map((_, index) => (
        <motion.span
          key={index}
          className={cn(
            'w-1 rounded-full bg-primary',
            status === 'error' || status === 'ended' ? 'opacity-30' : 'opacity-80',
          )}
          animate={{
            height: [
              8,
              heights[index] ?? 16,
              8,
            ],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.08,
          }}
        />
      ))}
    </div>
  )
}
