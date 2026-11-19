import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

export type LandingPagesWhatWeBuildCard = {
  title: string
  headline: string
  description: string
}

type LandingPagesWhatWeBuildSectionProps = {
  eyebrow: string
  titleBefore: string
  titleAccent: string
  description: string
  capabilityCards: ReadonlyArray<LandingPagesWhatWeBuildCard>
  sectionId?: string
}

const gridRowClass =
  'flex flex-wrap justify-center px-5 max-xl:justify-center max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-xl:[&>*:nth-child(3)]:border-r dark:max-xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark'

const twoColWidth = 'md:w-[calc(50%-10px)] lg:w-[calc(50%-15px)] xl:w-[595px]'
const threeColWidth = 'md:w-[calc(50%-10px)] lg:w-[calc(33.333%-15px)] xl:w-[395px]'

const cardInset = 'px-[30px] py-10'

const StaticCard = ({
  card,
  widthClass,
}: {
  card: LandingPagesWhatWeBuildCard
  widthClass: string
}) => (
  <RevealWrapper className={`reveal-me w-full ${widthClass}`}>
    <div className={cardInset}>
      <h5 className="mb-4 text-4xl leading-[1.2] -tracking-[1.08px] max-sm:text-2xl">{card.title}</h5>
      {card.headline ? <p className="mb-2 text-lg font-normal leading-snug">{card.headline}</p> : null}
      <p>{card.description}</p>
    </div>
  </RevealWrapper>
)

/** Layout copy: BiPredictiveIntelligenceSection — 3+2 grid, static cards (no icons, no flip hover). */
export default function LandingPagesWhatWeBuildSection({
  eyebrow,
  titleBefore,
  titleAccent,
  description,
  capabilityCards,
  sectionId,
}: LandingPagesWhatWeBuildSectionProps) {
  const topRow = capabilityCards.slice(0, 3)
  const bottomRow = capabilityCards.slice(3, 5)

  return (
    <section id={sectionId} className="scroll-mt-24">
      <div className="container">
        <div className="mb-16 text-center md:mb-24">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 lg:leading-[1.21]">
              {titleBefore}
              <InstrumentText>{titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-[770px] text-[#808080]">{description}</p>
          </TextAppearAnimation>
        </div>
      </div>

      <div className={gridRowClass}>
        {topRow.map((card) => (
          <StaticCard key={card.title} card={card} widthClass={threeColWidth} />
        ))}
      </div>

      <div className={`${gridRowClass} lg:[&>*]:border-b lg:dark:[&>*]:border-b-dark`}>
        {bottomRow.map((card) => (
          <StaticCard key={card.title} card={card} widthClass={twoColWidth} />
        ))}
      </div>
    </section>
  )
}