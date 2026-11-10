import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { mergeFeatureItems } from '@/lib/strapi/cms-section-props'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'

const DEFAULT_BEFORE_STEPS = [
  'Too much work is still manual.',
  'Information in different places',
  'Disconnected tools',
  'Outdated processes',
  'Limited visibility',
  'Technology that creates friction',
]

const DEFAULT_AFTER_STEPS = [
  'Automated workflows',
  'Better-connected information',
  'Integrated systems',
  'Modern digital workflows',
  'Clearer business insights',
  'Technology that supports the work',
]

const cardClassName = 'relative bg-background px-[30px] pb-[30px] pt-8 dark:bg-background md:pt-12'

const CloseIcon = () => (
  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary/20 dark:bg-backgroundBody/20">
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M3 3L9 9M9 3L3 9"
        className="stroke-secondary dark:stroke-backgroundBody"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </span>
)

const CheckIcon = () => (
  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary dark:bg-backgroundBody">
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 6.5L4.5 8.5L9.5 3.5"
        className="stroke-backgroundBody dark:stroke-secondary"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
)

const ComparisonList = ({ steps, variant }: { steps: string[]; variant: 'before' | 'after' }) => (
  <ul className="[&>*:not(:last-child)]:mb-4 md:[&>*:not(:last-child)]:mb-5">
    {steps.map((step) => (
      <li
        key={step}
        className="flex list-none items-start gap-4 text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70"
      >
        {variant === 'after' ? <CheckIcon /> : <CloseIcon />}
        <span>{step}</span>
      </li>
    ))}
  </ul>
)

type Props = Partial<CmsTechnologiesSection> & {
  accentTitle?: string
  closingLine?: string
}

/** Layout: AutomationInAction — two comparison cards with X / check lists. */
const BeforeAfterGap = ({
  eyebrow = 'The Gap',
  title = "More providers shouldn't mean more problems.",
  accentTitle,
  description =
    'But for many growing businesses, getting the right expertise means managing an increasingly fragmented network.',
  items,
  closingLine = "Digital transformation isn't about adding more technology. It's about making the business work better with it.",
}: Props = {}) => {
  const defaultItems = [
    ...DEFAULT_BEFORE_STEPS.map((step) => ({ title: step, description: '' })),
    ...DEFAULT_AFTER_STEPS.map((step) => ({ title: step, description: '' })),
  ]
  const mergedItems = mergeFeatureItems(defaultItems, items)
  const half = Math.floor(mergedItems.length / 2)
  const beforeSteps = mergedItems.slice(0, half).map((item) => item.title)
  const afterSteps = mergedItems.slice(half).map((item) => item.title)

  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mx-auto mb-5 md:mb-8">
              {title}
              {accentTitle ? (
                <>
                  {' '}
                  <InstrumentText>{accentTitle}</InstrumentText>
                </>
              ) : null}
            </h2>
          </RevealWrapper>
          {description ? (
            <RevealWrapper className="reveal-me">
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">{description}</p>
            </RevealWrapper>
          ) : null}
        </div>

        <RevealWrapper className="reveal-me mt-10 grid justify-center md:mt-16 lg:grid-cols-2">
          <div className={`${cardClassName} lg:border-r lg:border-[#e5e5e5] lg:pr-8 dark:lg:border-white/10`}>
            <h6 className="mb-8 text-2xl font-normal uppercase tracking-[0.04em] text-secondary dark:text-white md:mb-10 md:text-3xl">
              Before
            </h6>
            <ComparisonList steps={beforeSteps} variant="before" />
          </div>

          <div className={`${cardClassName} border-0 lg:pl-8`}>
            <h6 className="mb-8 text-2xl font-normal uppercase tracking-[0.04em] text-inherit md:mb-10 md:text-3xl">
              After
            </h6>
            <ComparisonList steps={afterSteps} variant="after" />
          </div>
        </RevealWrapper>

        <RevealWrapper className="reveal-me mt-14 md:mt-20">
          <p className="mx-auto max-w-4xl text-center text-2xl leading-snug md:text-4xl md:leading-[1.3]">{closingLine}</p>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BeforeAfterGap
