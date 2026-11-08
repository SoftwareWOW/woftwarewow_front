'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { WowDivisionLogo } from '@/components/wow/nav/WowDivisionLogo'
import type { DivisionId } from '@/components/wow/nav/nav-brand-assets'
import { mergeFeatureItems } from '@/lib/strapi/cms-section-props'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'

/** Match header marks; slightly below full `em` scale. */
const ROW_LOGO_CLASS = 'h-[0.85em] w-auto max-w-[min(100%,14em)] object-contain object-left'

const teams: {
  id: string
  divisionId: DivisionId
  label: string
  description: string
}[] = [
  {
    id: '01',
    divisionId: 'wowAccelerate',
    label: 'WOW Accelerate',
    description: 'Sales systems & funnels',
  },
  {
    id: '02',
    divisionId: 'wowMarketing',
    label: 'WOW Marketing',
    description: 'Demand generation',
  },
  {
    id: '03',
    divisionId: 'wowIntelligence',
    label: 'WOW Intelligence',
    description: 'AI & automation',
  },
  {
    id: '04',
    divisionId: 'wowWebsites',
    label: 'WOW Websites',
    description: 'Landing pages & conversion',
  },
  {
    id: '05',
    divisionId: 'wowSocial',
    label: 'WOW Social',
    description: 'Social acquisition',
  },
  {
    id: '06',
    divisionId: 'softwareWow',
    label: 'SoftwareWOW!',
    description: 'Custom integrations when needed',
  },
]

type Props = Partial<CmsTechnologiesSection>

/** Layout: Home-19 ElevateBrandV2 — numbered hover specialist rows. */
const ConnectedExpertise = ({
  eyebrow = 'One Package. Connected Expertise.',
  title = 'One sales system. ',
  accentTitle = 'Multiple specialists behind it.',
  description =
    'Bring acquisition, technology, automation, conversion, and analytics together through one connected team.',
  items,
}: Props = {}) => {
  const mergedItems = mergeFeatureItems(
    teams.map(({ description: desc }) => ({ title: '', description: desc })),
    items,
  ).map((item, index) => ({
    ...teams[index],
    description: item.description ?? teams[index].description,
  }))

  return (
    <section>
      <div className="container">
        <RevealWrapper className="reveal-me mb-5">
          <SectionLabel>{eyebrow}</SectionLabel>
        </RevealWrapper>

        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation02>
              <h2 className="text-appear-2">
                {title}
                <InstrumentText>{accentTitle}</InstrumentText>
              </h2>
            </TextAppearAnimation02>
          </div>
          <div className="w-full md:w-80 lg:w-96">
            <TextAppearAnimation>
              <p className="text-appear text-appear-2 max-w-lg text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                {description}
              </p>
            </TextAppearAnimation>
          </div>
        </div>

        <div className="[&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
          {mergedItems.map((item) => (
            <div
              key={item.id}
              className="ease-[cubic-bezier(0.4, 0, 0.2, 1)] group flex transform items-start justify-between gap-5 pb-5 pt-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.010] hover:backdrop-blur-sm md:pb-10 md:pt-10"
            >
              <span className="w-8 font-instrument text-xl italic leading-[32px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody">
                {item.id}
              </span>
              <h3
                aria-label={item.label}
                className="mt-2 flex items-center text-2xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:w-[730px] md:text-[67px] lg:text-[84px] xl:text-[88px] xl:leading-[1.15] xl:tracking-[-2.88px]"
              >
                <WowDivisionLogo divisionId={item.divisionId} className={ROW_LOGO_CLASS} />
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

export default ConnectedExpertise
