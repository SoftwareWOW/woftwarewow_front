'use client'

import { cn } from '@/utils/cn'

type VoiceTranscriptProps = {
  userText: string
  assistantText: string
  interimText?: string
}

export default function VoiceTranscript({
  userText,
  assistantText,
  interimText = '',
}: VoiceTranscriptProps) {
  const displayedUser = interimText || userText

  if (!displayedUser && !assistantText) {
    return (
      <p className="px-2 text-center text-sm text-[#808080] dark:text-dark-100">
        Speak naturally — I am here to help with WOW Superagency.
      </p>
    )
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-1 [-webkit-overflow-scrolling:touch]">
      {displayedUser ? (
        <div>
          <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[#808080] dark:text-dark-100">
            You
          </p>
          <p
            className={cn(
              'text-sm leading-relaxed text-secondary dark:text-backgroundBody',
              interimText && !userText ? 'opacity-70' : '',
            )}
          >
            {displayedUser}
          </p>
        </div>
      ) : null}

      {assistantText ? (
        <div>
          <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[#808080] dark:text-dark-100">
            WOW AI
          </p>
          <p className="text-sm leading-relaxed text-secondary dark:text-backgroundBody">
            {assistantText}
          </p>
        </div>
      ) : null}
    </div>
  )
}
