import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { HUB_HOW_IT_WORKS } from './hub-content'

export default function HubHowItWorksSection() {
  const content = HUB_HOW_IT_WORKS

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-8 md:mb-12">
          <RevealWrapper className="mb-3">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2>
              {content.titleBefore}
              <InstrumentText>{content.titleAccent}</InstrumentText>
            </h2>
          </RevealWrapper>
        </div>

        <div className="[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-[#e5e5e5] [&>*:not(:last-child)]:dark:border-dark">
          {content.steps.map((item) => (
            <div
              key={item.id}
              className="group flex transform items-start justify-between gap-5 pb-5 pt-5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:scale-[1.01] md:pb-10 md:pt-10"
            >
              <InstrumentText
                variant="solid"
                className="w-8 text-xl leading-[32px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody"
              >
                0{item.id}
              </InstrumentText>
              <h3 className="wow-approach-step-title">
                {item.title}
              </h3>
              <p className="ml-2.5 self-center text-xs text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody md:w-[370px] md:text-base md:leading-[1.6] md:tracking-[0.32px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
