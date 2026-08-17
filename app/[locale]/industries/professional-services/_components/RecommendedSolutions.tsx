import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

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

/** Layout: Home-19 OurExpertiseV2 — 3-card row with WowProjects arrow on hover. */
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
                className="group flex min-h-[280px] flex-1 flex-col rounded-radius-md border border-transparent px-[30px] py-10 transition-colors duration-300 hover:border-[#e5e5e5] dark:hover:border-white/10"
              >
                <span className="font-instrument text-5xl italic leading-none">{item.number}</span>
                <h5 className="mb-2.5 mt-8">{item.title}</h5>
                <p className="text-[#808080]">{item.description}</p>

                <div className="mt-auto flex justify-end pt-8 lg:pt-10">
                  <figure className="relative size-[60px] shrink-0 overflow-hidden rounded-radius-sm bg-primary md:size-[65px] lg:size-[79px]">
                    <ArrowUpRight
                      aria-hidden
                      className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 !stroke-white !text-white opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                      strokeWidth={2}
                    />
                    <ArrowUpRight
                      aria-hidden
                      className="absolute size-10 -translate-x-4 translate-y-12 !stroke-white !text-white opacity-0 transition-all duration-500 group-hover:translate-x-[19px] group-hover:translate-y-5 group-hover:opacity-100"
                      strokeWidth={2}
                    />
                  </figure>
                </div>
              </Link>
            ))}
          </RevealWrapper>
        </article>
      </div>
    </section>
  )
}

export default RecommendedSolutions
