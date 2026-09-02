'use client'

import { useAIChatControllerOptional } from '@/components/ai/AIChatController'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import { cn } from '@/utils/cn'
import { ArrowRight, AudioLines } from 'lucide-react'
import Image from 'next/image'
import { KeyboardEvent, useState } from 'react'

export default function FooterAskWow() {
  const aiChat = useAIChatControllerOptional()
  const [input, setInput] = useState('')
  const canSend = Boolean(input.trim())

  const handleOpenVoice = () => {
    aiChat?.open({ voice: true })
  }

  const handleSubmit = () => {
    const message = input.trim()
    if (!message) return
    aiChat?.open({ message })
    setInput('')
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return
    event.preventDefault()
    if (canSend) handleSubmit()
  }

  return (
    <div className="relative flex w-full flex-col items-center gap-10 overflow-hidden px-4 py-10 sm:px-8 sm:py-14 md:px-[80px] md:py-[75px]">
      <div className="relative flex w-full flex-col items-center gap-5">
        <div className="relative flex size-[112px] items-center justify-center">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 size-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(97,92,206,0.42)_0%,transparent_68%)]"
          />
          <button
            type="button"
            onClick={handleOpenVoice}
            aria-label="Start a voice conversation with WOW"
            className="relative z-[1] flex size-[112px] items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <Image
              src="/images/wow/aiicon.png"
              alt=""
              width={112}
              height={112}
              className="size-[112px] object-contain"
            />
          </button>
        </div>

        <h2 className="text-center font-outfit text-[clamp(1.75rem,4.2vw,48px)] font-light leading-[1.1] text-secondary dark:text-[#F2F2F2]">
          What can we help you <InstrumentText variant="solid">achieve?</InstrumentText>
        </h2>

        <p className="max-w-[720px] text-center font-outfit text-base font-light leading-[1.6] !text-[#808080]">
          Ask WOW anything. Find a service, explore our divisions, get a recommendation, or tell us what your
          business needs.
        </p>
      </div>

      <div className="relative z-[1] flex w-full max-w-[842px] items-center justify-center gap-3">
        <div
          className={cn(
            'flex h-16 min-w-0 flex-1 items-center justify-between rounded-[8px] border py-2.5 pl-5 pr-2.5',
            'border-[#1515151A] bg-background dark:border-[#EDF0F51A] dark:bg-[#151515]',
          )}
        >
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask WOW anything…"
            aria-label="Ask WOW anything"
            className="min-w-0 flex-1 bg-transparent font-outfit text-[18px] font-light leading-[1.6] text-secondary placeholder:text-[#808080] focus:outline-none dark:text-[#F2F2F2] md:text-[20px]"
          />
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSend}
            aria-label="Send message to WOW"
            className={cn(
              'inline-flex shrink-0 items-center justify-center rounded-radius-sm p-2.5 text-secondary transition-opacity dark:text-[#F2F2F2]',
              canSend
                ? 'bg-[#15151533] hover:bg-[#1515154D] dark:bg-[rgba(237,240,245,0.28)] dark:hover:bg-[rgba(237,240,245,0.36)]'
                : 'cursor-not-allowed bg-[#1515151A] opacity-70 dark:bg-[rgba(237,240,245,0.2)]',
            )}
          >
            <ArrowRight className="size-6" strokeWidth={1.75} />
          </button>
        </div>

        <button
          type="button"
          onClick={handleOpenVoice}
          aria-label="Start a voice conversation with WOW"
          className="inline-flex size-16 shrink-0 items-center justify-center rounded-radius-sm bg-primary text-white transition-opacity hover:bg-primary/90"
        >
          <AudioLines className="size-8 !stroke-white !text-white" strokeWidth={1.75} />
        </button>
      </div>
    </div>
  )
}
