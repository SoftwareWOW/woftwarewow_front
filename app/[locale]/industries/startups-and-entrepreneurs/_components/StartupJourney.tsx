import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    number: '1',
    title: 'Idea & Strategy',
    description: 'Define the opportunity, audience, direction, and what should actually be built.',
  },
  {
    number: '2',
    title: 'Brand & Product',
    description: 'Create your identity, website, MVP, platform, or other digital foundations.',
  },
  {
    number: '3',
    title: 'Go to Market',
    description: 'Introduce the business through marketing, content, campaigns, and sales systems.',
  },
  {
    number: '4',
    title: 'Optimize & Scale',
    description: 'Improve performance, automate operations, strengthen infrastructure, and expand.',
  },
]

/** Layout: Home-15 BrandingProcess — split heading + 2×2 numbered grid. All four cells the same style. */
const StartupJourney = () => {
  return (
    <section className="relative mx-auto max-w-[1600px] px-5">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div>
          <HeroGradientAnimation />
          <RevealWrapper className="reveal-me mb-3">
            <SectionLabel>The Startup Journey</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation02>
            <h2 className="text-appear max-w-4xl text-[38px] font-normal leading-[1.3] md:text-[55px] md:leading-[1.2] lg:text-[62px] xl:text-[72px] xl:tracking-[-2.16px]">
              One partner. <InstrumentText>Every stage.</InstrumentText>
            </h2>
          </TextAppearAnimation02>
          <TextAppearAnimation02>
            <p className="text-appear text-lg leading-[1.6] tracking-[0.36px] text-[#808080]">
              Startups evolve quickly. Our ecosystem can move with you—from shaping the first idea to building the
              product, launching the brand, and creating the systems needed for growth.
            </p>
          </TextAppearAnimation02>

          <RevealWrapper className="reveal-me mt-7 md:mt-14">
            <ButtonComponentList className="flex justify-start">
              <ButtonComponent href="/contact" variant="white">
                Build With WOW
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-2 gap-y-[26px]">
          {steps.map((step, index) => (
            <RevealWrapper
              key={step.title}
              className={`px-[30px] py-[50px] ${index % 2 === 0 ? 'border-r dark:border-dark' : ''}`}
            >
              <h2 className="font-instrument text-5xl font-normal italic leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.15] xl:tracking-[-2.88px]">
                {step.number}
              </h2>
              <h5 className="mb-6 mt-4">{step.title}</h5>
              <p className="text-base text-[#808080]">{step.description}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StartupJourney
