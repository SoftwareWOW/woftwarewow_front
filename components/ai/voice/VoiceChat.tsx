'use client'

import type { VoiceStatus } from '@/lib/voice'
import { X } from 'lucide-react'
import VoiceControls from './VoiceControls'
import VoiceOrb from './VoiceOrb'
import VoiceStatusLabel from './VoiceStatus'
import VoiceTranscript from './VoiceTranscript'
import VoiceWaveform from './VoiceWaveform'

type VoiceChatProps = {
  status: VoiceStatus
  errorMessage: string
  isSupported: boolean
  interimTranscript: string
  userTranscript: string
  assistantTranscript: string
  isContinuous: boolean
  isMuted: boolean
  onClose: () => void
  onOrbPress: () => void
  onToggleMute: () => void
  onToggleContinuous: () => void
  onReplay: () => void
  onRetry?: () => void
}

export default function VoiceChat({
  status,
  errorMessage,
  isSupported,
  interimTranscript,
  userTranscript,
  assistantTranscript,
  isContinuous,
  isMuted,
  onClose,
  onOrbPress,
  onToggleMute,
  onToggleContinuous,
  onReplay,
  onRetry,
}: VoiceChatProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-backgroundBody dark:bg-dark">
      <div className="flex items-start justify-between gap-3 border-b border-[#1515151A] px-5 py-4 dark:border-[#EDF0F51A]">
        <div className="min-w-0">
          <h2 className="truncate font-seasons text-lg font-normal tracking-[-0.02em] text-secondary dark:text-backgroundBody">
            Voice conversation
          </h2>
          <p className="mt-1 text-sm text-[#808080] dark:text-dark-100">WOW Superagency AI</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close voice conversation"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#1515151A] text-secondary transition-colors hover:bg-[#1515150A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 dark:border-[#EDF0F51A] dark:text-backgroundBody dark:hover:bg-white/5"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-5 py-5">
        {!isSupported ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <p className="max-w-[280px] text-sm leading-relaxed text-secondary dark:text-backgroundBody">
              Voice recognition is not supported by your current browser. You can continue chatting
              using text.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="text-sm font-medium text-[#615CCE] underline-offset-2 hover:underline"
            >
              Return to text chat
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center gap-4 pb-4">
              <VoiceOrb status={status} onPress={onOrbPress} />
              <VoiceWaveform status={status} />
              <VoiceStatusLabel status={status} />
            </div>

            <VoiceTranscript
              userText={userTranscript}
              assistantText={assistantTranscript}
              interimText={interimTranscript}
            />

            {errorMessage ? (
              <div
                className="mt-3 rounded-radius-sm border border-red-200 bg-red-50 px-3 py-2.5 text-center text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-200"
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

            <div className="mt-4 pb-[max(0.25rem,env(safe-area-inset-bottom))]">
              <VoiceControls
                isMuted={isMuted}
                isContinuous={isContinuous}
                canReplay={Boolean(assistantTranscript)}
                onToggleMute={onToggleMute}
                onToggleContinuous={onToggleContinuous}
                onReplay={onReplay}
                onEnd={onClose}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
