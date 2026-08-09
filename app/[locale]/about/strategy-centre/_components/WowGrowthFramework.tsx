import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    id: 1,
    title: 'Discover',
    description: 'Clarify goals, constraints, and opportunities across your market and operations.',
  },
  {
    id: 2,
    title: 'Strategize',
    description: 'Define the growth model, priorities, and positioning that guide every decision.',
  },
  {
    id: 3,
    title: 'Implement',
    description: 'Activate the roadmap across brand, marketing, technology, AI, and sales.',
  },
  {
    id: 4,
    title: 'Measure',
    description: 'Track KPIs and commercial signals so progress stays visible and accountable.',
  },
  {
    id: 5,
    title: 'Optimize',
    description: 'Refine channels, offers, and systems based on performance — not assumptions.',
  },
  {
    id: 6,
    title: 'Scale',
    description: 'Expand what works into repeatable playbooks that compound growth over time.',
  },
]

const WowGrowthFramework = () => {
  return (
    <section
      id="growth-framework"
      className="relative mx-auto max-w-[1600px] px-5"
    >
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="">
          <HeroGradientAnimation />
          <RevealWrapper className="mb-5">
            <SectionLabel>Framework</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation02>
            <h2 className="text-appear max-w-4xl text-[38px] font-normal leading-[1.3] md:text-[55px] md:leading-[1.2] lg:text-[62px] xl:text-[72px] xl:tracking-[-2.16px]">
              The WOW Growth
              <i className="font-instrument"> Framework</i>
            </h2>
          </TextAppearAnimation02>
          <TextAppearAnimation02>
            <p className="text-appear text-lg leading-[1.6] tracking-[0.36px]">
              Discover → Strategize → Implement → Measure → Optimize → Scale
            </p>
          </TextAppearAnimation02>

          <div className="mt-7 md:mt-14">
            <ButtonComponent href="/meet" variant="white">
              Book a Strategy Session
            </ButtonComponent>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-y-[26px] lg:mt-0">
          {steps.map((step, index) => {
            const isLeftColumn = index % 2 === 0

            return (
              <RevealWrapper
                key={step.id}
                className={isLeftColumn ? 'border-r px-[30px] py-[50px] dark:border-dark' : 'px-[30px] py-[50px]'}
              >
                <h2 className="font-instrument text-5xl font-normal italic leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.15] xl:tracking-[-2.88px]">
                  {step.id}
                </h2>
                <h5 className="mb-6 mt-4">{step.title}</h5>
                <p className="text-base">{step.description}</p>
              </RevealWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WowGrowthFramework
