'use client'

import type { VoiceStatus } from '@/lib/voice'

const STATUS_COPY: Record<VoiceStatus, string> = {
  listening: 'Listening...',
  processing: 'Thinking...',
  speaking: 'Speaking...',
  error: 'Something went wrong',
  ended: '',
}

type VoiceStatusProps = {
  status: VoiceStatus
}

export default function VoiceStatusLabel({ status }: VoiceStatusProps) {
  if (status === 'ended') return null

  return (
    <p
      className="text-center text-sm font-medium tracking-[-0.01em] text-secondary dark:text-backgroundBody"
      aria-live="polite"
    >
      {STATUS_COPY[status]}
    </p>
  )
}
