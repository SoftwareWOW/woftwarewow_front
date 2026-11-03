import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const buildItems = [
  {
    title: 'CRM & Customer Platforms',
    description:
      'Organize leads, customer information, relationships, and sales activities in one connected experience.',
    image: '/images/wow/LandingPageNaveBare/Client Portal 2.svg',
    alt: 'CRM and customer platform interface',
  },
  {
    title: 'Operations Management Systems',
    description: 'Coordinate tasks, teams, approvals, and everyday business processes more effectively.',
    image: '/images/wow/LandingPageNaveBare/trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc%202.svg',
    alt: 'Operations management dashboard',
  },
  {
    title: 'Workflow Automation',
    description: 'Connect actions and information across your tools to reduce repetitive manual work.',
    image: '/images/wow/LandingPageNaveBare/AI and Automation 2.svg',
    alt: 'Workflow automation builder interface',
  },
  {
    title: 'Reporting & Business Dashboards',
    description: 'Bring important operational information into clearer, more useful views.',
    image: '/images/wow/LandingPageNaveBare/Softwarewow%201%201.svg',
    alt: 'Business intelligence dashboard',
  },
  {
    title: 'System Integrations',
    description: 'Connect existing applications and business platforms without unnecessary replacement.',
    image: '/images/wow/LandingPageNaveBare/digital transofrmation 2.svg',
    alt: 'System integration connections',
  },
]

/** Layout: product-design-prototyping/WhatWeDesign (homepage-16/ServicesV14) — image-led cards. */
const WhatWeCanBuild = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 md:mb-20 md:flex-row md:items-end lg:justify-start">
          <div className="md:flex-1">
            <RevealWrapper className="mb-3">
              <SectionLabel>What We Can Build</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear mt-3">
                The right systems for the way you <InstrumentText>work.</InstrumentText>
              </h2>
            </TextAppearAnimation>
            <RevealWrapper className="reveal-me mt-3 max-w-2xl">
              <p className="text-base leading-relaxed text-[#808080] md:text-lg">
                Every business operates differently. We design and develop solutions that fit your processes,
                priorities, and existing technology.
              </p>
            </RevealWrapper>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1600px] flex-wrap justify-center gap-[30px]">
          {buildItems.map((item) => (
            <RevealWrapper
              key={item.title}
              className="reveal-me group w-full border px-6 py-9 dark:border-dark sm:max-w-[520px] md:w-[calc(50%-15px)] md:max-w-none lg:px-[30px] lg:py-[50px] xl:w-[calc(33.333%-20px)] xl:max-w-[480px]"
            >
              <figure className="mb-6 overflow-hidden rounded-radius-sm">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
              <h5 className="mb-2 lg:mb-3">{item.title}</h5>
              <p className="text-base leading-[1.6] text-[#808080]">{item.description}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeCanBuild
