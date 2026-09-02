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
    <div className="relative flex w-full flex-col items-center gap-4 overflow-hidden px-3 py-4 sm:gap-5 sm:px-6 sm:py-5 2xl:gap-10 2xl:px-[80px] 2xl:py-[60px]">
      <div className="relative flex w-full flex-col items-center gap-3 sm:gap-4 2xl:gap-5">
        <div className="relative flex size-16 items-center justify-center sm:size-[72px] 2xl:size-[112px]">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 size-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(97,92,206,0.42)_0%,transparent_68%)] sm:size-[180px] 2xl:size-[280px]"
          />
          <button
            type="button"
            onClick={handleOpenVoice}
            aria-label="Start a voice conversation with WOW"
            className="relative z-[1] flex size-16 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 sm:size-[72px] 2xl:size-[112px]"
          >
            <Image
              src="/images/wow/aiicon.png"
              alt=""
              width={112}
              height={112}
              className="size-16 object-contain sm:size-[72px] 2xl:size-[112px]"
            />
          </button>
        </div>

        <h2 className="text-center font-outfit text-[22px] font-light leading-[1.15] text-secondary dark:text-[#F2F2F2] sm:text-[26px] 2xl:text-[48px] 2xl:leading-[1.1]">
          What can we help you <InstrumentText variant="solid">achieve?</InstrumentText>
        </h2>

        <p className="max-w-[720px] text-center font-outfit text-xs font-light leading-[1.5] !text-[#808080] sm:text-sm 2xl:text-base 2xl:leading-[1.6]">
          Ask WOW anything. Find a service, explore our divisions, get a recommendation, or tell us what your
          business needs.
        </p>
      </div>

      <div className="relative z-[1] flex w-full max-w-[842px] items-center justify-center gap-2 sm:gap-3">
        <div
          className={cn(
            'flex h-10 min-w-0 flex-1 items-center justify-between rounded-[8px] border py-1.5 pl-3 pr-1.5 sm:h-11 sm:pl-4 sm:pr-2 2xl:h-16 2xl:py-2.5 2xl:pl-5 2xl:pr-2.5',
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
            className="min-w-0 flex-1 bg-transparent font-outfit text-sm font-light leading-[1.5] text-secondary placeholder:text-[#808080] focus:outline-none dark:text-[#F2F2F2] sm:text-base 2xl:text-[20px] 2xl:leading-[1.6]"
          />
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSend}
            aria-label="Send message to WOW"
            className={cn(
              'inline-flex shrink-0 items-center justify-center rounded-radius-sm p-1.5 text-secondary transition-opacity dark:text-[#F2F2F2] sm:p-2 2xl:p-2.5',
              canSend
                ? 'bg-[#15151533] hover:bg-[#1515154D] dark:bg-[rgba(237,240,245,0.28)] dark:hover:bg-[rgba(237,240,245,0.36)]'
                : 'cursor-not-allowed bg-[#1515151A] opacity-70 dark:bg-[rgba(237,240,245,0.2)]',
            )}
          >
            <ArrowRight className="size-4 sm:size-5 2xl:size-6" strokeWidth={1.75} />
          </button>
        </div>

        <button
          type="button"
          onClick={handleOpenVoice}
          aria-label="Start a voice conversation with WOW"
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-radius-sm bg-primary text-white transition-opacity hover:bg-primary/90 sm:size-11 2xl:size-16"
        >
          <AudioLines className="size-5 !stroke-white !text-white sm:size-6 2xl:size-8" strokeWidth={1.75} />
        </button>
      </div>
    </div>
  )
}
