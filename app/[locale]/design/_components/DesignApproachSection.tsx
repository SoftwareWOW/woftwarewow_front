import gradientBg from '@/public/images/gradient-bg.png'
import Image from 'next/image'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { DESIGN_APPROACH } from './design-content'

export default function DesignApproachSection() {
  const content = DESIGN_APPROACH

  return (
    <section className="relative overflow-hidden bg-background transition-colors duration-300 dark:bg-background">
      <div className="absolute left-1/2 top-1/2 -z-30 -translate-x-1/2 -translate-y-1/2 scale-x-[2.2] max-lg:scale-y-[2.8]">
        <Image src={gradientBg} alt="" aria-hidden="true" />
      </div>
      <div className="container">
        <div className="mb-8 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-14 md:flex-row lg:justify-between">
          <div className="flex-1 md:self-start">
            <RevealWrapper className="reveal-me mb-4 md:mb-5">
              <SectionLabel>{content.eyebrow}</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">
                {content.titleBefore}
                <InstrumentText>{content.titleAccent}</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full md:self-end">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg text-[#808080] md:place-self-end md:text-right">{content.description}</p>
            </TextAppearAnimation>
          </div>
        </div>

        <div className="border-t border-black/10 dark:border-white/10">
          {content.steps.map((step) => (
            <RevealWrapper
              key={step.number}
              className="grid grid-cols-1 items-center gap-4 border-b border-black/10 py-8 dark:border-white/10 md:grid-cols-12 md:gap-6 md:py-10 lg:py-12"
            >
              <p className="font-instrument text-lg italic text-[#808080] md:col-span-2 md:text-xl">{step.number}</p>
              <h3
                className="text-3xl font-normal leading-tight text-secondary transition-opacity dark:text-backgroundBody md:col-span-4 md:text-4xl lg:text-5xl"
                style={{ opacity: step.titleOpacity }}
              >
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-[#808080] md:col-span-6 md:text-right md:text-lg">
                {step.description}
              </p>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="reveal-me mt-10 text-center md:mt-14">
          <p className="text-base text-[#808080] md:text-lg">{content.footer}</p>
        </RevealWrapper>
      </div>
    </section>
  )
}
