import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { mergeProcessSteps } from '@/lib/strapi/cms-section-props'
import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'

const DEFAULT_STEPS = [
  {
    id: 1,
    title: 'Define',
    description: 'Clarify your positioning, audience, and authority goals.',
  },
  {
    id: 2,
    title: 'Build',
    description: 'Create the brand, messaging, and digital foundations.',
  },
  {
    id: 3,
    title: 'Amplify',
    description: 'Share your expertise across the right channels.',
  },
  {
    id: 4,
    title: 'Strengthen',
    description: 'Grow visibility, trust, and reputation over time.',
  },
]

type Props = Partial<CmsProcessSection>

/** Home-20 — ProcessV9: 4 bordered step cards with step badges. */
const AuthorityJourney = ({
  eyebrow = 'Your Authority Journey',
  title = 'From expertise to ',
  accentTitle = 'influence.',
  steps,
}: Props = {}) => {
  const mergedSteps = mergeProcessSteps(DEFAULT_STEPS, steps).map((step, index) => ({
    ...DEFAULT_STEPS[index],
    title: step.title,
    description: step.description,
  }))

  return (
    <section aria-labelledby="authority-journey-heading">
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 id="authority-journey-heading" className="text-appear mb-3">
              {title}
              <InstrumentText>{accentTitle}</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {mergedSteps.map((item) => (
            <RevealWrapper key={item.id} className="w-full grow pt-6 sm:w-[48%] xl:grow">
              <div className="relative mx-auto grid min-h-[300px] grid-cols-1 content-between border px-5 pb-[42px] pt-10 text-center dark:border-dark">
                <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-radius-lg bg-secondary px-4 pb-2 pt-2.5 dark:bg-backgroundBody/20">
                  <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody dark:text-backgroundBody">
                    Step {item.id.toString().padStart(2, '0')}
                  </span>
                </div>
                <h6 className="text-2xl font-normal leading-[1.1] text-black dark:text-white">{item.title}</h6>
                <p className="text-base font-normal leading-[1.3] text-black/70 dark:text-backgroundBody/70">
                  {item.description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AuthorityJourney
