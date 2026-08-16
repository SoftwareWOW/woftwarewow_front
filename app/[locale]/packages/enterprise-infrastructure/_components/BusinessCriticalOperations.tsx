import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const infrastructurePoints = [
  {
    title: 'Performance',
    description: 'Infrastructure designed for demanding workloads.',
  },
  {
    title: 'Reliability',
    description: 'Keep critical digital services available and dependable.',
  },
  {
    title: 'Security',
    description: 'Strengthen protection across your infrastructure.',
  },
  {
    title: 'Scalability',
    description: 'Expand resources as your business requirements grow.',
  },
  {
    title: 'Business continuity',
    description: 'Protect essential data with backup solutions.',
  },
]

/** Layout: Home-16 WhyChooseUsV5 — split title + stacked points, no numbers. */
const BusinessCriticalOperations = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1500px] px-4 md:px-[30px]">
        <div className="flex flex-col-reverse gap-y-8 md:flex-row-reverse md:gap-5 lg:gap-10 xl:gap-x-20">
          <div className="md:w-[45%]">
            <div className="[&>*:not(:first-child)]:mt-3.5">
              {infrastructurePoints.map((point) => (
                <RevealWrapper key={point.title} className="py-2.5">
                  <h6>{point.title}</h6>
                  <p className="mt-1.5 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{point.description}</p>
                </RevealWrapper>
              ))}
            </div>
            <RevealWrapper className="mt-7 max-md:w-full md:mt-14">
              <ButtonComponentList className="flex max-md:justify-center">
                <ButtonComponent href="/meet" variant="white">
                  Talk to an Expert
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
          <RevealWrapper className="md:w-[55%]">
            <SectionLabel className="mb-3.5">Built for Business-Critical Operations</SectionLabel>
            <TextAppearAnimation>
              <h2 className="text-appear">
                Built for performance. <InstrumentText>Ready to scale.</InstrumentText>
              </h2>
            </TextAppearAnimation>
            <TextAppearAnimation>
              <p className="text-appear mt-4 max-w-lg text-[#808080]">
                Create a stronger digital foundation for the systems and services your business depends on.
              </p>
            </TextAppearAnimation>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default BusinessCriticalOperations
