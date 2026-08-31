'use client'

import type { VoiceStatus } from '@/lib/voice'

const STATUS_COPY: Record<VoiceStatus, string> = {
  idle: 'Tap to speak',
  listening: 'Listening...',
  processing: 'Thinking...',
  speaking: 'Speaking...',
  error: 'Something went wrong',
}

type VoiceStatusProps = {
  status: VoiceStatus
}

export default function VoiceStatusLabel({ status }: VoiceStatusProps) {
  return (
    <p
      className="text-center text-sm font-medium tracking-[-0.01em] text-secondary dark:text-backgroundBody"
      aria-live="polite"
    >
      {STATUS_COPY[status]}
    </p>
  )
}
