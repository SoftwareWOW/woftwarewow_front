import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { HUB_CHALLENGE } from './hub-content'

export default function HubChallengeSection() {
  const content = HUB_CHALLENGE

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-4xl">
              {content.titleBefore}
              <InstrumentText>{content.titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mt-4">
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#808080] md:text-lg">{content.description}</p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 border-t border-[#e5e5e5] dark:border-dark md:grid-cols-3">
          {content.steps.map((step, index) => (
            <RevealWrapper
              key={step.id}
              className={`group min-h-[320px] border-b border-[#e5e5e5] p-8 transition-colors duration-500 dark:border-dark md:border-b-0 md:px-10 md:py-12 ${
                index < content.steps.length - 1 ? 'md:border-r' : ''
              } hover:bg-primary`}
            >
              <p className="font-instrument text-5xl font-light italic leading-none tracking-[-2px] text-[#0D0D0D] transition-colors duration-500 group-hover:text-white dark:text-[#F2F2F2] sm:text-6xl md:text-7xl">
                {step.id}
              </p>
              <h3 className="mt-8 text-2xl transition-colors duration-500 group-hover:text-white md:text-3xl">{step.title}</h3>
              <p className="mt-4 text-base text-[#808080] transition-colors duration-500 group-hover:text-white/90">
                {step.description}
              </p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
