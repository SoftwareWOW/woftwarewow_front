import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import { cn } from '@/utils/cn'
import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'

type CaseStudy = {
  slug: string
  title?: string
  image?: string
  description?: string
  [key: string]: unknown
}

const caseStudies = (getMarkDownData('data/marketing/project') as CaseStudy[]).reverse().slice(0, 4)

const fallbackCases = [
  {
    slug: 'visibility',
    title: 'From invisible to in-demand',
    image: '/images/hero-img/startup-hero-1.jpg',
    problem: 'Low organic visibility and inconsistent inbound interest.',
    solution: 'SEO, content and paid media working as one acquisition system.',
    result: 'Stronger qualified demand and clearer channel performance.',
  },
  {
    slug: 'pipeline',
    title: 'Leads that sales can close',
    image: '/images/hero-img/startup-hero-2.jpg',
    problem: 'Traffic without conversion — and no reliable follow-up system.',
    solution: 'Landing pages, funnels, CRM and automation connected end to end.',
    result: 'More qualified opportunities and measurable pipeline growth.',
  },
]

/** Layout: Home-16 ProjectServicesV4 — staggered case grid with Problem → Solution → Result. */
const GrowthInAction = () => {
  const items =
    caseStudies.length > 0
      ? caseStudies.map((item, index) => ({
          slug: item.slug,
          title: String(item.title ?? 'Growth result'),
          image: String(item.image ?? '/images/hero-img/startup-hero-1.jpg'),
          problem: 'A growth challenge holding the business back.',
          solution: 'A connected marketing and sales response across the right channels.',
          result: String(item.description ?? 'Measurable improvement in visibility, leads or revenue.'),
          href: `/marketing/project/${item.slug}`,
          offset: (index + 1) % 2 === 0,
        }))
      : fallbackCases.map((item, index) => ({
          ...item,
          href: '/contact',
          offset: (index + 1) % 2 === 0,
        }))

  return (
    <section>
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 md:mb-16 md:flex-row md:items-end lg:justify-start">
          <div className="w-full md:w-[55%] lg:w-[60%]">
            <RevealWrapper className="reveal-me">
              <h2 className="mt-3 md:mt-4">
                Growth in <InstrumentText>action</InstrumentText>
              </h2>
            </RevealWrapper>
          </div>
          <div className="w-full md:w-[45%] lg:w-[40%]">
            <RevealWrapper className="reveal-me">
              <p className="text-base leading-relaxed text-[#808080] md:text-right">
                Problem → Solution → Result — how connected growth systems turn marketing into measurable outcomes.
              </p>
            </RevealWrapper>
            <RevealWrapper className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList className="flex justify-end max-md:justify-center">
                <ButtonComponent href="/contact" variant="secondary">
                  Talk to a Growth Expert
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1430px] grid-cols-1 gap-x-6 gap-y-14 px-4 md:grid-cols-2 md:px-[30px]">
        {items.map((item) => (
          <RevealWrapper
            key={item.slug}
            className={cn('reveal-me group', item.offset ? 'md:mt-12 lg:mt-20' : '')}
          >
            <Link href={item.href} className="block">
              <figure className="overflow-hidden rounded-radius-md">
                <img
                  src={item.image}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-110"
                  alt={item.title}
                />
              </figure>
              <div className="mt-6 lg:mt-8">
                <h3 className="text-[27px] font-normal leading-tight md:text-3xl lg:text-[36px] lg:leading-[1.2]">
                  {item.title}
                </h3>
                <dl className="mt-4 space-y-2 text-sm leading-relaxed text-[#808080] md:text-base">
                  <div>
                    <dt className="inline font-medium text-secondary dark:text-backgroundBody">Problem: </dt>
                    <dd className="inline">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="inline font-medium text-secondary dark:text-backgroundBody">Solution: </dt>
                    <dd className="inline">{item.solution}</dd>
                  </div>
                  <div>
                    <dt className="inline font-medium text-secondary dark:text-backgroundBody">Result: </dt>
                    <dd className="inline">{item.result}</dd>
                  </div>
                </dl>
              </div>
            </Link>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default GrowthInAction
