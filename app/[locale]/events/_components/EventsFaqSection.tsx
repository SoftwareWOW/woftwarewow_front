'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import gradientBg from '@/public/images/gradient-bg.png'
import Image from 'next/image'
import { useState } from 'react'
import { EVENTS_FAQ_HEADER, EVENTS_FAQS } from './events-content'

export default function EventsFaqSection() {
  const faqItems = EVENTS_FAQS
  const header = EVENTS_FAQ_HEADER
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="relative isolate overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 scale-x-[2.8] scale-y-[3.4] sm:scale-y-[1.6] md:scale-x-[1.9] md:scale-y-[1.5] lg:scale-x-[1.7] lg:scale-y-[1.5] xl:scale-y-[1.4] 2xl:scale-y-[1]"
      >
        <Image src={gradientBg} alt="gradient-bg" priority={false} />
      </div>

      <div className="container relative z-[1]">
        <div className="mb-8 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <RevealWrapper>
              <SectionLabel className="mb-5">{header.sectionLabel}</SectionLabel>
            </RevealWrapper>
            <h2 className="text-[48px] font-light leading-[1.05] tracking-[-0.055em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2] sm:text-[64px] md:text-[76px] lg:text-[58px] xl:text-[72px]">
              <TextAppearAnimation>
                <span className="text-appear block font-light">
                  {header.titleBefore} <InstrumentText>{header.titleAccent}</InstrumentText>
                </span>
              </TextAppearAnimation>
            </h2>
          </div>

          <div className="max-w-[420px] lg:text-right">
            <TextAppearAnimation>
              <p className="text-appear text-base leading-relaxed text-[#808080] transition-colors duration-300 md:text-lg">
                {header.description}
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="mt-6 flex justify-end md:mt-8">
              <ButtonComponentList>
                <ButtonComponent href={header.viewAllHref} variant="white">
                  View All FAQ
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper className="mx-auto w-full max-w-[900px] [&>*:not(:last-child)]:mb-6">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`faq-body-transition overflow-hidden border bg-backgroundBody duration-[400ms] dark:bg-dark ${
                activeIndex === index ? 'pb-10' : 'pb-0'
              }`}
              style={{
                borderColor: activeIndex === index ? 'black' : 'transparent ',
              }}
            >
              <div
                className={`relative cursor-pointer py-5 max-md:px-5 md:px-10 md:py-[35px] ${
                  activeIndex === index ? 'open active' : ''
                }`}
                onClick={() => toggleAccordion(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggleAccordion(index)
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-xl font-normal max-lg:pr-[33px] sm:text-[23px] sm:font-medium md:text-[25px] md:leading-[25.2px] md:tracking-wide">
                  {item.question}
                </h3>
                <div
                  className={`accordion-header-icon transition-transform duration-[400ms] ${
                    activeIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </div>
              <div
                className={`grid transition-all duration-[400ms] ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="faq-body-transition duration-[500ms] max-md:px-5 max-md:text-base md:px-10">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}
