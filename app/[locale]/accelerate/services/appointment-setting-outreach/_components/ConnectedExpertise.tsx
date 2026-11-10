import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeSectionHeader } from '@/lib/strapi/cms-section-props'

type ExpertiseRow = {
  id: string
  title: string
  heading: string
  description: string
}

const DEFAULT_ROWS: ExpertiseRow[] = [
  {
    id: '01',
    title: 'WOW Websites',
    heading: 'Web Experiences',
    description: 'Professional websites built around credibility and conversion.',
  },
  {
    id: '02',
    title: 'WOW Marketing',
    heading: 'Visibility & Growth',
    description: 'SEO, campaigns, content, and customer acquisition.',
  },
  {
    id: '03',
    title: 'WOW Accelerate',
    heading: 'Sales & Revenue',
    description: 'CRM, lead generation, funnels, and sales systems.',
  },
]

type ConnectedExpertiseProps = Partial<CmsTechnologiesSection> & {
  rows?: ExpertiseRow[]
  ctaLabel?: string
}

const HEADER_DEFAULTS = {
  eyebrow: 'The WOW Ecosystem',
  title: 'More Capabilities.',
  accentTitle: 'One Connected Partner.',
  description:
    'As your firm grows, you may need much more than a website or campaign. Our ecosystem brings the capabilities together.',
}

const ConnectedExpertise = ({
  eyebrow,
  title,
  accentTitle,
  description,
  rows,
  ctaLabel = 'Find My Transformation Priorities',
}: ConnectedExpertiseProps = {}) => {
  const header = mergeSectionHeader(HEADER_DEFAULTS, { eyebrow, title, accentTitle, description })
  const displayRows = rows?.length ? rows : DEFAULT_ROWS

  return (
    <section>
      <div className="container">
        <RevealWrapper className="reveal-me mb-5">
          <SectionLabel>{header.eyebrow}</SectionLabel>
        </RevealWrapper>

        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation02>
              <h2 className="text-appear-2">
                {header.title}{' '}
                {header.accentTitle ? <InstrumentText>{header.accentTitle}</InstrumentText> : null}
              </h2>
            </TextAppearAnimation02>
          </div>
          <div className="w-full md:w-80 lg:w-96">
            <TextAppearAnimation>
              <p className="text-appear text-appear-2 max-w-lg text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                {header.description}
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList className="flex justify-end max-md:justify-center" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  {ctaLabel}
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <div className="[&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
          {displayRows.map((item) => (
            <div
              key={item.id}
              className="ease-[cubic-bezier(0.4, 0, 0.2, 1)] group flex transform items-start justify-between gap-5 pb-5 pt-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.010] hover:backdrop-blur-sm md:pb-10 md:pt-10"
            >
              <span className="w-8 font-instrument text-xl italic leading-[32px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody">
                {item.id}
              </span>
              <h3 className="wow-approach-step-title-wide text-nowrap uppercase">{item.title}</h3>
              <div className="ml-2.5 self-center text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody md:w-[370px]">
                <p className="text-sm font-medium md:text-base md:leading-[1.6] md:tracking-[0.32px]">{item.heading}</p>
                <p className="mt-1 text-xs text-[#808080] md:text-base md:leading-[1.6] md:tracking-[0.32px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ConnectedExpertise
