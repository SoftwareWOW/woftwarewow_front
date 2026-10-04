import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { MARKETING_SERVICES } from './marketing-content'

type IconTone = 'front' | 'back'

const strokeClass = (tone: IconTone) =>
  tone === 'front'
    ? 'stroke-secondary dark:stroke-backgroundBody'
    : 'stroke-backgroundBody dark:stroke-secondary'

const MarketingIcon = ({ tone }: { tone: IconTone }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
    <circle cx="20" cy="20" r="12" className={strokeClass(tone)} strokeWidth="1.5" />
    <path d="M20 12v8l5 3" className={strokeClass(tone)} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

type ServiceCard = {
  title: string
  headline: string
  description: string
}

const gridRowClass =
  'flex flex-wrap justify-center px-5 max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark'

const FlipCard = ({ card }: { card: ServiceCard }) => (
  <RevealWrapper className="reveal-me group relative min-h-[320px] w-full overflow-hidden md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]">
    <div>
      <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
        <span className="inline-flex">
          <MarketingIcon tone="front" />
        </span>
        <h5 className="mb-3 mt-8 text-2xl leading-[1.2] -tracking-[1.08px]">{card.title}</h5>
        <p className="mb-2 text-lg font-normal leading-snug">{card.headline}</p>
        <p className="text-base leading-relaxed text-[#808080]">{card.description}</p>
      </div>
      <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-10 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
        <span className="inline-flex">
          <MarketingIcon tone="back" />
        </span>
        <h5 className="mb-3 mt-8 text-2xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary">
          {card.title}
        </h5>
        <p className="mb-2 text-lg text-backgroundBody dark:text-secondary">{card.headline}</p>
        <p className="text-base leading-relaxed text-backgroundBody/80 dark:text-secondary/80">{card.description}</p>
      </div>
    </div>
  </RevealWrapper>
)

export default function MarketingServicesGrid() {
  const content = MARKETING_SERVICES
  const cards: ServiceCard[] = content.items.map((item) => ({
    title: item.title,
    headline: item.description,
    description: item.description,
  }))

  const row1 = cards.slice(0, 3)
  const row2 = cards.slice(3, 5)
  const row3 = cards.slice(5, 8)
  const row4 = cards.slice(8, 10)

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-16 text-center md:mb-24">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              {content.titleBefore} <InstrumentText>{content.titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>
      </div>

      <div className={gridRowClass}>
        {row1.map((card) => (
          <FlipCard key={card.title} card={card} />
        ))}
      </div>

      <div className={`${gridRowClass} max-lg:mt-5 max-lg:[&>*]:border-y max-lg:dark:[&>*]:border-y-dark lg:[&>*]:border-b lg:dark:[&>*]:border-b-dark`}>
        {row2.map((card) => (
          <FlipCard key={card.title} card={card} />
        ))}
      </div>

      <div className={`${gridRowClass} max-lg:mt-5 max-lg:[&>*]:border-y max-lg:dark:[&>*]:border-y-dark lg:[&>*]:border-b lg:dark:[&>*]:border-b-dark`}>
        {row3.map((card) => (
          <FlipCard key={card.title} card={card} />
        ))}
      </div>

      <div className={`${gridRowClass} max-lg:mt-5 max-lg:[&>*]:border-y max-lg:dark:[&>*]:border-y-dark lg:[&>*]:border-b lg:dark:[&>*]:border-b-dark`}>
        {row4.map((card) => (
          <FlipCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  )
}
