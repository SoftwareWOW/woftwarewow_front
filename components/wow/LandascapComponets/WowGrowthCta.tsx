'use client'

import { useAIChatControllerOptional } from '@/components/ai/AIChatController'
import PromptBar from '@/components/ai/PromptBar'
import RevealWrapper from '@/components/animation/RevealWrapper'
import Image from 'next/image'
import bigArrowIcon from '@/public/images/icons/big-arrow-Icon-dark.svg'
import { useState } from 'react'
import { useContactDialogOptional } from '../shared/ContactDialogProvider'
import InstrumentText from '../shared/InstrumentText'

interface WowGrowthCtaProps {
  accentText?: string
  mainText?: string
  ariaLabel?: string
}

const CtaGlowOrb = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Start a voice conversation with WOW"
      className="relative mx-auto flex h-36 w-36 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:focus-visible:ring-offset-background md:h-44 md:w-44"
    >
      <Image
        src="/images/wow/aiicon.png"
        alt=""
        width={176}
        height={176}
        className="h-full w-full object-contain"
        priority
      />
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
          <PromptBar
            value={input}
            onChange={setInput}
            onSubmit={handleSubmit}
            onVoice={handleOpenVoice}
            placeholder="Ask WOW anything..."
            ariaLabel="Ask WOW anything"
          />
        </div>
      </div>
    </section>
  )
}

export default WowGrowthCta
