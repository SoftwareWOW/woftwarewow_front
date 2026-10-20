'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { INTELLIGENCE_HOW_WE_WORK } from './intelligence-content'

/** ProcessV8-style step cards with hover background (no shadow). */
export default function IntelligenceHowWeWorkSection() {
  const content = INTELLIGENCE_HOW_WE_WORK

  return (
    <section className="relative overflow-hidden bg-background px-3 pb-14 pt-14 transition-colors duration-300 dark:bg-background md:px-4 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(80vw,520px)] w-[min(90vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl dark:opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(97, 92, 206, 0.35) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-4xl">
              {content.titleBefore} <InstrumentText>{content.titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#808080] md:text-lg">{content.description}</p>
          </RevealWrapper>
        </div>

        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {content.steps.map((item) => (
            <RevealWrapper key={item.step} className="reveal-me w-full grow pt-6 sm:w-[48%] xl:w-auto xl:grow">
              <div className="group relative mx-auto grid min-h-[300px] h-full grid-cols-1 content-between border border-secondary/15 bg-background px-5 pb-[42px] pt-10 text-center transition-colors duration-300 hover:border-primary hover:bg-primary/15 dark:border-dark dark:bg-dark dark:hover:bg-primary">
                <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-radius-lg bg-secondary px-4 pb-2 pt-2.5 dark:bg-backgroundBody">
                  <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody dark:text-secondary">
                    {item.step}
                  </span>
                </div>
                <h6 className="text-2xl font-normal leading-[1.1] text-secondary transition-colors duration-300 group-hover:text-secondary dark:text-backgroundBody dark:group-hover:text-white">
                  {item.title}
                </h6>
                <p className="text-base font-normal leading-[1.3] text-[#808080] transition-colors duration-300 group-hover:text-secondary/80 dark:text-backgroundBody/70 dark:group-hover:text-white/90">
                  {item.description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="mt-7 flex justify-center max-md:w-full md:mt-14">
          <ButtonComponentList itemClassName="max-md:w-full">
            <ButtonComponent href={content.ctaHref} variant="white" fullWidth>
              {content.ctaLabel}
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}
