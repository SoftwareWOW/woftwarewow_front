import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'

const points = [
  {
    title: 'Multi-Tenant Architecture',
    description: 'Built to support multiple customers efficiently.',
    image: '/images/wow/nav/cards/SaaS%20Dev%201.png',
    alt: 'Multi-tenant SaaS product interface',
  },
  {
    title: 'Subscriptions & Billing',
    description: 'Support recurring plans and customer account management.',
    image: '/images/wow/nav/cards/sales-profit-numbers-changing-on-monitor-after-glo-2026-01-08-02-14-54-utc%201.png',
    alt: 'Subscription and billing dashboard',
  },
  {
    title: 'User Management',
    description: 'Flexible roles, permissions, and account access.',
    image: '/images/wow/nav/cards/Softwaerwow.png',
    alt: 'User management product interface',
  },
  {
    title: 'Integrations',
    description: 'Connect your product with APIs and third-party platforms.',
    image: '/images/wow/nav/cards/digital%20transofrmation%201.png',
    alt: 'Software integrations and connected systems',
  },
  {
    title: 'Scalable Foundation',
    description: 'Architecture designed to evolve as usage grows.',
    image: '/images/wow/nav/cards/software%26technology.png',
    alt: 'Scalable software architecture',
  },
]

/** Layout: homepage-08/Solution — title + description rows with image. */
const BuiltForSaasGrowth = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-5 flex justify-center md:mb-8">
            <SectionLabel>Built for Scale</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">
              Designed for more than the <InstrumentText>first release.</InstrumentText>
            </h2>
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
