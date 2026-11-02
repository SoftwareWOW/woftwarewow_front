import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'

const points = [
  {
    title: 'Greater Reliability',
    description: 'Maintain application stability and address issues before they become larger operational problems.',
    image: '/images/wow/LandingPageNaveBare/SaaS%20Dev%202.svg',
    alt: 'Application reliability and system monitoring',
  },
  {
    title: 'Better Performance',
    description: 'Identify inefficiencies and improve how your software responds to everyday demands.',
    image: '/images/wow/LandingPageNaveBare/trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc%202.svg',
    alt: 'Performance monitoring dashboard',
  },
  {
    title: 'Stronger Security',
    description: 'Keep software components updated and address security risks as technologies change.',
    image: '/images/wow/LandingPageNaveBare/Softwarewow%201%201.svg',
    alt: 'Secure software maintenance',
  },
  {
    title: 'Improved User Experience',
    description: 'Refine interfaces, workflows, and functionality around how people actually use your software.',
    image: '/images/wow/LandingPageNaveBare/digital%20transofrmation%202.svg',
    alt: 'Improved application user experience',
  },
  {
    title: 'Long-Term Flexibility',
    description: 'Make your applications easier to maintain, enhance, and adapt as your business grows.',
    image: '/images/wow/LandingPageNaveBare/engineer-and-coworker-use-ai-cognitive-computing-o-2026-01-11-10-54-36-utc%202.svg',
    alt: 'Flexible software evolution',
  },
]

/** Layout: homepage-08/Solution — title + description rows with image. */
const BuiltForSaasGrowth = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-5 flex justify-center md:mb-8">
            <SectionLabel>Built for the Long Run</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">
              Reliable today. <InstrumentText>Ready for tomorrow.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-3 max-w-[770px] text-base leading-relaxed text-[#808080]">
              Software needs change. Users expect more, technologies evolve, and new business priorities emerge. We help
              you stay ahead with ongoing technical care and improvements that keep your applications useful,
              dependable, and easier to evolve.
            </p>
          </TextAppearAnimation>
        </div>
        <div className="[&>*:not(:last-child)]:mb-4">
          {points.map((point) => (
            <RevealWrapper
              key={point.title}
              className="group flex flex-col-reverse items-start border dark:border-dark md:flex-row md:items-center md:gap-x-11 md:gap-y-10 md:pr-5 lg:gap-x-[70px] lg:pr-0"
            >
              <div className="flex-1 pl-5 max-lg:py-6 max-md:pr-5 lg:pl-10">
                <div className="mb-6">
                  <h3 className="cursor-default text-[27px] md:text-4xl md:leading-[1.2] md:tracking-[-0.72px]">
                    {point.title}
                  </h3>
                </div>
                <p className="border-t pt-2 dark:border-dark md:pt-5">{point.description}</p>
              </div>
              <figure className="h-full w-full flex-1 overflow-hidden">
                <Image
                  width={509}
                  height={295}
                  src={point.image}
                  alt={point.alt}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </figure>
            </RevealWrapper>
          ))}
        </div>
        <RevealWrapper className="mt-7 flex justify-center max-md:w-full md:mt-14">
          <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
            <ButtonComponent href="/contact" variant="white">
              Start a Project
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BuiltForSaasGrowth
