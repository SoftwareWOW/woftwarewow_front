import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    number: '1',
    title: 'Build Awareness',
    description: 'Content, search, social media, campaigns, partnerships, and digital visibility.',
  },
  {
    number: '2',
    title: 'Tell the Story',
    description:
      'Use strong messaging, branding, stories, and digital experiences to create an emotional connection.',
  },
  {
    number: '3',
    title: 'Build Community',
    description: 'Keep supporters, members, volunteers, and partners informed and involved.',
  },
  {
    number: '4',
    title: 'Inspire Action',
    description:
      'Create clear journeys for donations, registrations, volunteering, participation, and support.',
  },
]

/** Layout: Home-15 BrandingProcess — split heading + 2×2 numbered grid. */
const ImpactJourney = () => {
  return (
    <section className="relative mx-auto max-w-[1600px] px-5">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div>
          <HeroGradientAnimation />
          <RevealWrapper className="reveal-me mb-3">
            <SectionLabel>THE IMPACT JOURNEY</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation02>
            <h2 className="text-appear max-w-4xl text-[38px] font-normal leading-[1.3] md:text-[55px] md:leading-[1.2] lg:text-[62px] xl:text-[72px] xl:tracking-[-2.16px]">
              Turn Attention Into <InstrumentText>Action.</InstrumentText>
            </h2>
          </TextAppearAnimation02>
          <TextAppearAnimation02>
            <p className="text-appear text-lg leading-[1.6] tracking-[0.36px] text-[#808080]">
              Impact grows when people understand your mission, believe in it, and have a clear way to participate.
            </p>
          </TextAppearAnimation02>

          <RevealWrapper className="reveal-me mt-7 md:mt-14">
            <ButtonComponentList className="flex justify-start">
              <ButtonComponent href="/contact" variant="white">
                Strengthen Your Impact
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

export default ImpactJourney
