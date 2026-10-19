import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { WEBSITES_WHY_WOW } from './websites-content'

/** Why WOW Websites — numbered rows with balanced title/description scale on hover. */
export default function WebsitesWhyWowSection() {
  const content = WEBSITES_WHY_WOW
  const rowItems = content.items.map((item, index) => ({
    id: index + 1,
    title: item.title,
    description: item.description,
  }))

  return (
    <section>
      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-16 md:flex-row md:items-start lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="mb-3">
              <SectionLabel>{content.eyebrow}</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h2>{content.title}</h2>
            </RevealWrapper>
          </div>
          <div className="w-full md:w-80 lg:w-96">
            <RevealWrapper className="reveal-me">
              <p className="max-w-lg text-base leading-relaxed text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                {content.description}
              </p>
            </RevealWrapper>
          </div>
        </div>

        <div className="[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-secondary/10 [&>*:not(:last-child)]:dark:border-backgroundBody/10">
          {rowItems.map((item) => (
            <div
              key={item.id}
              className="group grid grid-cols-1 items-start gap-3 py-6 transition-colors duration-300 md:grid-cols-[minmax(2.75rem,3.25rem)_minmax(0,1fr)_minmax(0,24rem)] md:items-center md:gap-x-8 md:py-8 lg:gap-x-12"
            >
              <InstrumentText
                variant="solid"
                className="text-lg leading-none text-secondary/40 transition-colors duration-300 group-hover:text-secondary dark:text-backgroundBody/40 dark:group-hover:text-backgroundBody md:text-xl"
              >
                0{item.id}.
              </InstrumentText>
              <h3 className="text-3xl font-normal leading-tight tracking-[-0.02em] text-secondary/40 transition-all duration-300 group-hover:text-secondary dark:text-backgroundBody/40 dark:group-hover:text-backgroundBody sm:text-[2rem] md:text-4xl lg:text-5xl lg:leading-[1.1] lg:tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-secondary/40 transition-colors duration-300 group-hover:text-secondary/90 dark:text-backgroundBody/40 dark:group-hover:text-backgroundBody/90 md:text-right md:text-lg md:leading-[1.6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
