import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    number: '1',
    title: 'Share the Opportunity',
    description: "Introduce a business that could benefit from WOW's services.",
  },
  {
    number: '2',
    title: 'WOW Takes It From Here',
    description: 'Our team speaks with the prospect, understands their needs, and recommends the right solution.',
  },
  {
    number: '3',
    title: 'The Project Moves Forward',
    description: "If there's a fit, WOW manages strategy, delivery, and the client experience.",
  },
  {
    number: '4',
    title: 'Receive Your Reward',
    description: 'Eligible referrals are rewarded according to the program terms.',
  },
]

/** Layout: organizations ImpactJourney — split heading + 2×2 numbered grid. */
const AffiliateJourney = () => {
  return (
    <section className="relative mx-auto max-w-[1600px] px-5">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div>
          <HeroGradientAnimation />
          <RevealWrapper className="reveal-me mb-3">
            <SectionLabel>SIMPLE FROM THE START</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation02>
            <h2 className="text-appear max-w-4xl text-[38px] font-normal leading-[1.3] md:text-[55px] md:leading-[1.2] lg:text-[62px] xl:text-[72px] xl:tracking-[-2.16px]">
              Introduce. Connect. Get <InstrumentText>Rewarded.</InstrumentText>
            </h2>
          </TextAppearAnimation02>
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

export default AffiliateJourney
