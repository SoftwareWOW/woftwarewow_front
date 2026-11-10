import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { ReactNode } from 'react'
import { mergeFeatureItems } from '@/lib/strapi/cms-section-props'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'

type CapabilityCard = {
  title: string
  description: string
  icon: ReactNode
}

const GENERIC_ICON: ReactNode = (
  <svg xmlns="http://www.w3.org/2000/svg" width={42} height={50} viewBox="0 0 42 50" fill="none" aria-hidden>
    <path d="M8.33333 39.5833H33.3333V27.0833H8.33333V39.5833ZM10.4167 29.1667H31.25V37.5H10.4167V29.1667ZM18.75 20.8333H8.33333V18.75H18.75V20.8333ZM18.75 12.5H8.33333V10.4167H18.75V12.5ZM26.4729 0H5.20833C2.3375 0 0 2.3375 0 5.20833V50H41.6667V15.1937L26.4729 0ZM27.0833 3.55625L38.1104 14.5833H27.0833V3.55625ZM2.08333 47.9167V5.20833C2.08333 3.48542 3.48542 2.08333 5.20833 2.08333H25V16.6667H39.5833V47.9167H2.08333Z" />
  </svg>
)

const buildDefaultCards = (count: number): CapabilityCard[] =>
  Array.from({ length: count }, () => ({
    title: '',
    description: '',
    icon: GENERIC_ICON,
  }))

const gridRowClass =
  'flex flex-wrap justify-center px-5 max-xl:justify-start max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark'

const FlipCard = ({ card, widthClass }: { card: CapabilityCard; widthClass: string }) => (
  <RevealWrapper className={`reveal-me group relative min-h-[410px] w-full overflow-hidden ${widthClass}`}>
    <div>
      <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
        <span className="inline-flex [&_path]:fill-secondary [&_path]:dark:fill-backgroundBody">{card.icon}</span>
        <h5 className="mb-4 mt-9 text-4xl leading-[1.2] -tracking-[1.08px] max-sm:text-2xl">{card.title}</h5>
        <p>{card.description}</p>
      </div>

      <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-12 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
        <span className="inline-flex [&_path]:fill-backgroundBody [&_path]:dark:fill-secondary">{card.icon}</span>
        <h5 className="mb-3 mt-9 text-4xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary max-sm:text-2xl">
          {card.title}
        </h5>
        <p className="text-backgroundBody dark:text-secondary">{card.description}</p>
      </div>
    </div>
  </RevealWrapper>
)

type Props = Partial<CmsTechnologiesSection> & {
  accentTitle?: string
  ctaLine?: string
  ctaButtonLabel?: string
  ctaAriaLabel?: string
}

/** Layout: RevenueCapabilities — hover-flip cards, 3+3 grid for six capabilities. */
const TransformationPlan = ({
  eyebrow = 'Your Transformation Plan',
  title = 'Modernize what matters.',
  accentTitle,
  description =
    'We identify where technology can make the biggest difference, then bring the right improvements together into one coordinated transformation.',
  items,
  ctaLine = 'Build My Transformation Plan',
  ctaButtonLabel = 'Get Started',
  ctaAriaLabel = 'Build my transformation plan',
}: Props = {}) => {
  const itemCount = items?.length ? items.length : 6
  const defaultPlaceholders = buildDefaultCards(itemCount)
  const merged = mergeFeatureItems(
    defaultPlaceholders.map(({ title: t, description: d }) => ({ title: t, description: d })),
    items,
  )
    .map((item, index) => ({
      ...defaultPlaceholders[index],
      title: item.title,
      description: item.description ?? defaultPlaceholders[index].description,
    }))
    .filter((card) => card.title.trim().length > 0)

  const topRowCards = merged.slice(0, Math.min(3, merged.length))
  const bottomRowCards = merged.slice(3)

  return (
    <section>
      <div className="container">
        <div className="mb-16 text-center md:mb-24">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 lg:leading-[1.21]">
              {title}{' '}
              {accentTitle ? <InstrumentText>{accentTitle}</InstrumentText> : null}
            </h2>
          </TextAppearAnimation>
          {description ? (
            <TextAppearAnimation>
              <p className="text-appear mx-auto max-w-[770px] text-[#808080]">{description}</p>
            </TextAppearAnimation>
          ) : null}
        </div>
      </div>

      <div className={gridRowClass}>
        {topRowCards.map((card) => (
          <FlipCard
            key={card.title}
            card={card}
            widthClass="md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]"
          />
        ))}
      </div>

      <div
        className={`${gridRowClass} max-xl:justify-center max-xl:[&>*:first-child]:border-r max-xl:[&>*:nth-child(2)]:border-r max-2xl:[&>*:nth-child(3)]:border-r-0 lg:[&>*]:border-b lg:dark:[&>*]:border-b-dark`}
      >
        {bottomRowCards.map((card) => (
          <FlipCard
            key={card.title}
            card={card}
            widthClass={
              bottomRowCards.length === 2
                ? 'md:w-[calc(50%-10px)] lg:w-[calc(50%-15px)] xl:w-[595px]'
                : 'md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]'
            }
          />
        ))}
      </div>

      <div className="container">
        <RevealWrapper className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-5">
          {ctaLine ? (
            <p className="font-instrument text-center text-2xl italic md:text-[32px]">
              <InstrumentText>{ctaLine}</InstrumentText>
            </p>
          ) : null}
          <ButtonComponentList className="flex shrink-0 justify-center">
            <ButtonComponent href="/contact" variant="primary" aria-label={ctaAriaLabel}>
              {ctaButtonLabel}
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default TransformationPlan
