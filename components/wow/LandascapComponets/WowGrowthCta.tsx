'use client'

import { useAIChatControllerOptional } from '@/components/ai/AIChatController'
import RevealWrapper from '@/components/animation/RevealWrapper'
import { cn } from '@/utils/cn'
import { ArrowUp, Mic, SendHorizontal } from 'lucide-react'
import Image from 'next/image'
import bigArrowIcon from '@/public/images/icons/big-arrow-Icon-dark.svg'
import { KeyboardEvent, useState } from 'react'
import { useContactDialogOptional } from '../shared/ContactDialogProvider'
import InstrumentText from '../shared/InstrumentText'

interface WowGrowthCtaProps {
  accentText?: string
  mainText?: string
  ariaLabel?: string
}

const MicWithWavesIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
    <path d="M4 9v6M2.5 10.5v3" strokeLinecap="round" />
    <rect x="9" y="4" width="6" height="10" rx="3" />
    <path d="M8 12a4 4 0 0 0 8 0M12 16v3" strokeLinecap="round" />
    <path d="M20 9v6M21.5 10.5v3" strokeLinecap="round" />
  </svg>
)

const CtaGlowOrb = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Start a voice conversation with WOW"
      className="relative mx-auto flex h-36 w-36 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:focus-visible:ring-offset-background md:h-44 md:w-44"
    >
      <span
        aria-hidden
        className="absolute inset-0 animate-pulse rounded-full bg-[radial-gradient(circle,rgba(183,148,244,0.55)_0%,rgba(97,92,206,0.28)_42%,transparent_70%)] blur-md"
      />
      <span
        aria-hidden
        className="absolute inset-6 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffffff_0%,#f4a8b8_28%,#b794f4_58%,#615cce_100%)] shadow-[0_0_48px_rgba(97,92,206,0.55)] md:inset-7"
      />
      <span aria-hidden className="absolute inset-10 rounded-full bg-white/80 blur-[2px] md:inset-12" />
    </button>
  )
}

const WowGrowthCta = ({
  accentText = 'Ready to',
  mainText = 'Grow?',
  ariaLabel = 'Contact WOW Superagency',
}: WowGrowthCtaProps) => {
  const contactDialog = useContactDialogOptional()
  const aiChat = useAIChatControllerOptional()
  const [input, setInput] = useState('')

  const handleOpenContact = () => {
    contactDialog?.open()
  }

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
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSubmit()
    }
  }

  const canSend = Boolean(input.trim())

  return (
    <section className="relative bg-background transition-colors duration-300 dark:bg-background">
      <div className="container flex flex-col items-center justify-center gap-y-10 sm:justify-between md:flex-row md:items-center md:gap-x-10 lg:gap-x-16 xl:gap-x-20">
        <RevealWrapper
          as="h2"
          className="reveal-me min-w-0 flex-1 text-[46px] font-normal leading-[1.1] max-lg:leading-[1.33] lg:text-[96px] lg:tracking-[-2.88px]"
        >
          <InstrumentText className="max-md:mr-4 lg:text-[100px]">{accentText}</InstrumentText>

          <br className="hidden md:block" />

          {mainText}
        </RevealWrapper>

        <button
          type="button"
          onClick={handleOpenContact}
          aria-label={ariaLabel}
          className="shrink-0 cursor-pointer border-0 bg-transparent p-0"
        >
          <RevealWrapper className="reveal-me group h-44 w-44 overflow-hidden rounded-radius-sm bg-secondary p-5 dark:bg-primary lg:h-[230px] lg:w-[230px]">
            <figure className="relative h-full w-full rounded-radius-sm bg-primary dark:bg-secondary">
              <Image
                src={bigArrowIcon}
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 inline -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-28 group-hover:translate-x-9 group-hover:opacity-0 max-lg:scale-75"
              />

              <Image
                src={bigArrowIcon}
                alt=""
                aria-hidden="true"
                className="absolute -left-2 top-full inline -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:-translate-y-[105px] group-hover:translate-x-[48%] group-hover:opacity-100 max-lg:scale-75 md:group-hover:-translate-y-32 md:group-hover:translate-x-[80%]"
              />
            </figure>
          </RevealWrapper>
        </button>
      </div>

      <div className="container mt-12 md:mt-16 lg:mt-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <CtaGlowOrb onClick={handleOpenVoice} />

          <h3 className="mt-8 text-2xl font-normal leading-tight text-secondary dark:text-backgroundBody md:text-3xl lg:text-4xl">
            What can we help you <InstrumentText>achieve?</InstrumentText>
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#808080] md:text-base">
            Ask WOW anything. Find a service, explore our divisions, get a recommendation, or tell us what your
            business needs.
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-3xl md:mt-14">
          <div className="flex items-center gap-2 dark:hidden md:gap-3">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask us anything about our services..."
              aria-label="Ask us anything about our services"
              className="min-h-12 min-w-0 flex-1 rounded-xl border border-[#C4B5FD] bg-white px-5 py-3 text-sm text-secondary placeholder:text-[#808080] focus:border-primary focus:outline-none md:min-h-14 md:text-base"
            />
            <button
              type="button"
              onClick={handleOpenVoice}
              aria-label="Start a voice conversation with WOW"
              className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-[#F2F2F2] text-secondary transition-colors hover:border-primary/40 md:size-14"
            >
              <Mic className="size-5" stroke="currentColor" />
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canSend}
              aria-label="Send message to WOW"
              className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-opacity hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40 md:size-14"
            >
              <SendHorizontal className="size-5 !stroke-white !text-white" stroke="currentColor" />
            </button>
          </div>

          <div className="hidden items-center gap-2 rounded-2xl bg-[#1A1A1A] px-3 py-2 dark:flex md:gap-2.5 md:rounded-3xl md:px-4 md:py-2.5">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask WOW anything..."
              aria-label="Ask WOW anything"
              className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-backgroundBody placeholder:text-[#808080] focus:outline-none md:text-base"
            />
            <button
              type="button"
              onClick={handleOpenVoice}
              aria-label="Start a voice conversation with WOW"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-radius-sm border border-white/20 text-backgroundBody transition-colors hover:border-primary/50 md:size-12"
            >
              <MicWithWavesIcon />
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canSend}
              aria-label="Send message to WOW"
              className={cn(
                'inline-flex size-11 shrink-0 items-center justify-center rounded-radius-sm bg-primary text-white transition-opacity hover:bg-primary/90 md:size-12',
                !canSend && 'cursor-not-allowed opacity-40',
              )}
            >
              <ArrowUp className="size-5 !stroke-white !text-white" stroke="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WowGrowthCta
