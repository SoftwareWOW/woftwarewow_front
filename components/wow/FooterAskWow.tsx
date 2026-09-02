'use client'

import { useAIChatControllerOptional } from '@/components/ai/AIChatController'
import AskWowPromptBar from '@/components/wow/shared/AskWowPromptBar'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import Image from 'next/image'
import { useState } from 'react'

export default function FooterAskWow() {
  const aiChat = useAIChatControllerOptional()
  const [input, setInput] = useState('')

  const handleOpenVoice = () => {
    aiChat?.open({ voice: true })
  }

  const handleSubmit = () => {
    const message = input.trim()
    if (!message) return
    aiChat?.open({ message })
    setInput('')
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

      <AskWowPromptBar
        className="relative z-[1] max-w-[842px]"
        value={input}
        onChange={setInput}
        onSubmit={handleSubmit}
        onVoice={handleOpenVoice}
      />
    </div>
  )
}
