import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'
import { mergeProcessSteps } from '@/lib/strapi/cms-section-props'

const DEFAULT_STEPS = [
  {
    number: '1',
    title: 'Listen',
    description: 'Understand what your audience cares about.',
  },
  {
    number: '2',
    title: 'Engage',
    description: 'Create reasons for people to interact.',
  },
  {
    number: '3',
    title: 'Respond',
    description: 'Keep conversations active and human.',
  },
  {
    number: '4',
    title: 'Strengthen',
    description: 'Turn repeated interaction into lasting connection.',
  },
]

/** Layout: SoftwareWOW WoWProces — numbered community steps, responsive. */
const BuildCommunity = ({
  eyebrow = 'Build Community',
  title = 'Followers are numbers.',
  description = 'Relationships are an asset.',
  steps,
}: Partial<CmsProcessSection> = {}) => {
  const displaySteps = mergeProcessSteps(DEFAULT_STEPS, steps)

  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2>
              {title}
              <br />
              {description}
            </h2>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:gap-x-10 xl:grid-cols-4">
          {displaySteps.map((step) => (
            <RevealWrapper
              key={step.title}
              className="relative flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 select-none bg-gradient-to-b from-[#86858599] to-white bg-clip-text font-black leading-none text-transparent dark:to-[#15151599] text-[clamp(5rem,22vw,11.25rem)]"
              >
                {step.number}
              </span>
              <h5 className="relative z-10 mb-3 text-center sm:mb-5">{step.title}</h5>
              <p className="relative z-10 max-w-[280px] text-center text-base leading-relaxed text-[#808080]">
                {step.description}
              </p>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="mt-14 flex justify-center">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="primary">
              Start Building Community
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BuildCommunity
