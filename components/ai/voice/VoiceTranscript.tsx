'use client'

import { cn } from '@/utils/cn'
import type { VoiceHistoryMessage, VoiceStatus } from '@/lib/voice'
import { useEffect, useRef } from 'react'

type VoiceTranscriptProps = {
  status?: VoiceStatus
  history: VoiceHistoryMessage[]
  interimText?: string
}

const NEAR_BOTTOM_PX = 72

export default function VoiceTranscript({
  status = 'listening',
  history,
  interimText = '',
}: VoiceTranscriptProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const nearBottomRef = useRef(true)
  const lastUser = [...history].reverse().find((message) => message.role === 'user')
  const showInterim =
    Boolean(interimText.trim()) &&
    lastUser?.content.trim() !== interimText.trim()

  useEffect(() => {
    const el = scrollerRef.current
    if (!el || !nearBottomRef.current) return
    el.scrollTop = el.scrollHeight
  }, [history, interimText])

  const handleScroll = () => {
    const el = scrollerRef.current
    if (!el) return
    nearBottomRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < NEAR_BOTTOM_PX
  }

  if (history.length === 0 && !showInterim) {
    if (status === 'speaking' || status === 'ended') return <div className="min-h-0 flex-1" />

    const helper =
      status === 'listening'
        ? "I'm listening. Pause when you are finished."
        : status === 'processing'
          ? 'One moment…'
          : 'Speak naturally — I am here to help with WOW Superagency.'

    return (
      <div className="flex min-h-0 flex-1 items-start justify-center px-2">
        <p className="text-center text-sm text-muted dark:text-dark-100">{helper}</p>
      </div>
    )
  }

  return (
    <div
      ref={scrollerRef}
      data-chat-scroll
      data-lenis-prevent
      onScroll={handleScroll}
      className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain px-1 [-webkit-overflow-scrolling:touch]"
    >
      <div className="flex flex-col gap-3 pb-2">
        {history.map((message) => (
          <div key={message.id}>
            <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.08em] text-muted dark:text-dark-100">
              {message.role === 'user' ? 'YOU' : 'WOW AI'}
            </p>
            {message.content ? (
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-secondary dark:text-backgroundBody">
                {message.content}
              </p>
            ) : message.role === 'assistant' ? (
              <p className="text-sm leading-relaxed text-muted dark:text-dark-100">…</p>
            ) : null}
          </div>
        ))}

        {showInterim ? (
          <div>
            <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.08em] text-muted dark:text-dark-100">
              YOU
            </p>
            <p className="text-sm leading-relaxed text-secondary opacity-70 dark:text-backgroundBody">
              {interimText}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
