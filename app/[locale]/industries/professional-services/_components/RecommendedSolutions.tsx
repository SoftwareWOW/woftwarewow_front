import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { navItemIconBoxClass, navItemIconClass } from '@/components/wow/nav/nav-interaction-styles'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const packages = [
  {
    number: '01',
    title: 'Brand Authority',
    description: 'Turn expertise into a stronger market presence.',
    href: '/packages/brand-authority',
  },
  {
    number: '02',
    title: 'Website Growth',
    description: 'Turn your website into a stronger tool for credibility, lead generation, and conversion.',
    href: '/packages/website-growth-engine',
  },
  {
    number: '03',
    title: 'Sales Acceleration',
    description: 'Build better lead generation, follow-up, CRM, automation, and revenue systems.',
    href: '/packages/sales-acceleration',
  },
]

/** Layout: Home-19 OurExpertiseV2 — 3-card row. Default unstyled; hover border + header-sized arrow. */
const RecommendedSolutions = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Recommended Solutions</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">
              Built to Strengthen Your <InstrumentText>Business.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear text-[#808080]">
              Explore packages that combine the capabilities professional service firms commonly need to attract,
              convert, and grow.
            </p>
          </TextAppearAnimation>
        </div>
        <article>
          <RevealWrapper className="reveal-me flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            {packages.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className="group flex min-h-[280px] flex-1 flex-col rounded-radius-md border border-transparent px-[30px] py-10 transition-colors duration-300 hover:border-secondary dark:hover:border-dark"
              >
                <span className="font-instrument text-5xl italic leading-none">{item.number}</span>
                <h5 className="mb-2.5 mt-8">{item.title}</h5>
                <p className="text-[#808080]">{item.description}</p>
                <span
                  className={`mt-8 flex size-[28px] shrink-0 items-center justify-center self-end rounded-radius-sm border-[0.5px] p-[8px] ${navItemIconBoxClass}`}
                  aria-hidden
                >
                  <ArrowUpRight className={`size-full ${navItemIconClass}`} strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </RevealWrapper>
        </article>
      </div>
    </section>
  )
}

export default RecommendedSolutions
