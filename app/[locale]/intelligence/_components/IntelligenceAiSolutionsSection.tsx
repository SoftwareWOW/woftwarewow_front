import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { INTELLIGENCE_AI_SOLUTIONS } from './intelligence-content'

export default function IntelligenceAiSolutionsSection() {
  const content = INTELLIGENCE_AI_SOLUTIONS

  return (
    <section className="overflow-hidden bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-4xl">
              {content.titleBefore} <InstrumentText>{content.titleAccent}</InstrumentText> {content.titleSuffix}
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#808080] md:text-lg">{content.description}</p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-[30px] lg:grid-cols-3">
          {content.pillars.map((pillar) => (
            <RevealWrapper
              key={pillar.number}
              className="group relative flex h-full min-h-[480px] flex-col border border-secondary/15 bg-background px-[30px] py-10 transition-colors duration-300 hover:border-primary hover:bg-primary dark:border-dark dark:bg-dark dark:hover:bg-primary"
            >
              <span className="font-instrument mb-6 text-5xl italic leading-none text-secondary/40 transition-colors duration-300 group-hover:text-white dark:text-backgroundBody/30 md:text-6xl">
                {pillar.number}
              </span>
              <h3 className="mb-3 text-2xl leading-tight text-secondary transition-colors duration-300 group-hover:text-white dark:text-backgroundBody md:text-3xl">
                {pillar.title}
              </h3>
              <p className="mb-4 text-base font-light text-secondary transition-colors duration-300 group-hover:text-white/95 dark:text-backgroundBody">
                {pillar.leadIn}
              </p>
              <p className="mb-8 flex-1 text-base leading-relaxed text-[#808080] transition-colors duration-300 group-hover:text-white/90 dark:text-backgroundBody/70">
                {pillar.body}
              </p>
              <div className="mt-auto">
                <p className="mb-2 text-xs font-light uppercase tracking-wide text-secondary/60 transition-colors duration-300 group-hover:text-white/85 dark:text-backgroundBody/50">
                  Potential applications
                </p>
                <p className="text-sm leading-relaxed text-[#808080] transition-colors duration-300 group-hover:text-white/85 dark:text-backgroundBody/65">
                  {pillar.applications}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
