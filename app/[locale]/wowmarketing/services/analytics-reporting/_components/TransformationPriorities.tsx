import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

export type AnalyticsPriorityRow = {
  id: string
  title: string
  heading: string
  subtext?: string
  bullets: string
}

const DEFAULT_ROWS: AnalyticsPriorityRow[] = [
  {
    id: '01',
    title: 'Now',
    heading: "Fix what's holding you back",
    subtext: 'High-impact problems creating friction today.',
    bullets: 'Automation • Integrations • Critical system upgrades',
  },
  {
    id: '02',
    title: 'Next',
    heading: 'Connect & Improve',
    subtext: 'Improvements that make the business work better together.',
    bullets: 'CRM • Workflows • Reporting • Digital experience',
  },
  {
    id: '03',
    title: 'Later',
    heading: 'Prepare to Scale',
    subtext: 'Longer-term capabilities for where the business is going.',
    bullets: 'Custom software • AI • Infrastructure • New systems',
  },
]

type Props = {
  eyebrow?: string
  title?: string
  accentTitle?: string
  description?: string
  rows?: AnalyticsPriorityRow[]
  ctaLabel?: string
}

/** Layout: SpecialistTeams — split header + large numbered rows with metrics. */
const TransformationPriorities = ({
  eyebrow = 'Prioritize the Right Changes',
  title = "You don't need to change everything at once.",
  accentTitle,
  description = '',
  rows,
  ctaLabel = 'Find My Transformation Priorities',
}: Props = {}) => {
  const displayRows = rows?.length ? rows : DEFAULT_ROWS

  return (
    <section>
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>{eyebrow}</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation02>
              <h2>
                {title}{' '}
                {accentTitle ? <InstrumentText>{accentTitle}</InstrumentText> : null}
              </h2>
            </TextAppearAnimation02>
          </div>
          <div className="w-full md:w-80 lg:w-96">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                {description}
              </p>
            </TextAppearAnimation>
          </div>
        </div>

        <div className="[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:dark:border-dark">
          {displayRows.map((item) => (
            <div
              key={item.id}
              className="ease-[cubic-bezier(0.4, 0, 0.2, 1)] group flex transform flex-col items-start justify-between gap-5 pb-5 pt-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.010] hover:backdrop-blur-sm md:flex-row md:pb-10 md:pt-10"
            >
              <div className="flex items-start gap-5">
                <span className="w-8 font-instrument text-xl italic leading-[32px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody">
                  {item.id}.
                </span>
                <h3 className="wow-approach-step-title-narrow text-nowrap uppercase">{item.title}</h3>
              </div>
              <div className="ml-2.5 self-center text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody md:w-[370px]">
                <p className="text-sm font-medium uppercase tracking-wide md:text-base">{item.heading}</p>
                {item.subtext ? (
                  <p className="mt-2 text-xs md:text-base md:leading-[1.6] md:tracking-[0.32px]">{item.subtext}</p>
                ) : null}
                <p className="mt-2 text-xs text-secondary/50 dark:text-backgroundBody/50 md:text-sm">{item.bullets}</p>
              </div>
            </div>
          ))}
        </div>

        <RevealWrapper className="mt-10 max-md:w-full md:mt-14">
          <ButtonComponentList className="flex max-md:justify-center">
            <ButtonComponent href="/contact" variant="primary">
              {ctaLabel}
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default TransformationPriorities
