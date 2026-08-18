import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Link from 'next/link'

const packages = [
  {
    number: '01',
    title: 'Sales Acceleration',
    description:
      'Strengthen your lead generation, CRM, follow-up, automation, funnels, and sales processes.',
    href: '/packages/sales-acceleration',
    image: '/images/wow/nav/cards/Sales%20Acceleration%201.png',
  },
  {
    number: '02',
    title: 'Brand Authority',
    description:
      'Strengthen your positioning, credibility, identity, and professional presence in a trust-driven market.',
    href: '/packages/brand-authority',
    image: '/images/wow/nav/cards/Branding%20%26%20Creative%201.png',
  },
  {
    number: '03',
    title: 'Website Growth Engine',
    description:
      'Create a stronger digital experience designed to build trust, generate inquiries, and support conversion.',
    href: '/packages/website-growth-engine',
    image: '/images/wow/nav/cards/Websit%20groeh%201.png',
  },
]

/** Layout: Home-13 TravelBlogs — 3 overlapping content panels. Title underline on hover. */
const TravelBlogs = () => {
  return (
    <section className="relative overflow-visible pb-28 md:pb-40 lg:pb-48">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>RECOMMENDED SOLUTIONS</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">Packages Built for High-Trust Growth.</h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full md:max-w-[370px] md:self-end lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg text-[#808080] md:place-self-end md:text-right">
                Explore connected solutions designed around credibility, demand, and conversion.
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList className="flex justify-end max-md:justify-center" itemClassName="block">
                <ButtonComponent href="/packages" variant="white">
                  Explore All
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
          {packages.map((item) => (
            <div key={item.number} className="relative">
              <RevealWrapper as="figure" className="reveal-me w-full">
                <img src={item.image} alt={item.title} className="h-auto w-full rounded-radius-md object-cover" />
              </RevealWrapper>
              <RevealWrapper className="reveal-me absolute inset-x-[5px] top-[22%] mx-auto max-w-[calc(100%-10px)] bg-backgroundBody px-6 pb-8 pt-6 dark:bg-dark sm:top-[38%] md:top-1/2 lg:top-3/4">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <span className="font-instrument text-2xl italic leading-none">{item.number}</span>
                  <div className="blog-title">
                    <Link href={item.href}>
                      <h3 className="text-center text-[28px] font-normal lg:text-[34px] lg:leading-[1.05]">
                        {item.title}
                      </h3>
                    </Link>
                  </div>
                </div>
                <p className="mb-7 text-center text-[#808080]">{item.description}</p>
                <div className="flex justify-center">
                  <ButtonComponent href={item.href} variant="white" size="sm-v2">
                    Explore
                  </ButtonComponent>
                </div>
              </RevealWrapper>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TravelBlogs
