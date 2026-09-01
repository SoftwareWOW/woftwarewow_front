'use client'

import type { VoiceStatus } from '@/lib/voice'
import VoiceControls from './VoiceControls'
import VoiceOrb from './VoiceOrb'
import VoiceStatusLabel from './VoiceStatus'
import VoiceWaveform from './VoiceWaveform'

type VoiceDockProps = {
  status: VoiceStatus
  errorMessage: string
  isSupported: boolean
  onEnd: () => void
  onOrbPress: () => void
  onRetry?: () => void
}

export default function VoiceDock({
  status,
  errorMessage,
  isSupported,
  onEnd,
  onOrbPress,
  onRetry,
}: VoiceDockProps) {
  return (
    <div className="shrink-0 border-t border-[#1515151A] bg-background px-4 py-3 dark:border-[#EDF0F51A]">
      {!isSupported ? (
        <div className="flex flex-col items-center gap-3 py-2 text-center">
          <p className="max-w-[280px] text-sm leading-relaxed text-secondary dark:text-backgroundBody">
            Voice recognition is not supported by your current browser. You can continue chatting using
            text.
          </p>
          <button
            type="button"
            onClick={onEnd}
            className="text-sm font-medium text-primary underline-offset-2 hover:underline"
          >
            Return to text chat
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <VoiceOrb compact status={status} onPress={onOrbPress} />
          <VoiceWaveform status={status} />
          <VoiceStatusLabel status={status} />

          {errorMessage ? (
            <div
              className="w-full rounded-radius-sm border border-red-200 bg-red-50 px-3 py-2.5 text-center text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-200"
              role="alert"
            >
              <p>{errorMessage}</p>
              {onRetry ? (
                <button
                  type="button"
                  onClick={onRetry}
                  className="mt-2 font-medium underline underline-offset-2"
                >
                  Try again
                </button>
              ) : null}
            </div>
          ) : null}

          <VoiceControls onEnd={onEnd} />
        </div>
      )}
    </div>
  )
}
