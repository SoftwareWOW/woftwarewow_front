import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const packages = [
  {
    number: '01',
    title: 'Website Growth Engine',
    description:
      'Improve your digital experience, performance, conversion paths, and the journey from interest to inquiry or booking.',
    href: '/packages/website-growth-engine',
  },
  {
    number: '02',
    title: 'Brand Authority',
    description:
      'Build a stronger identity and presence that makes your hospitality brand easier to recognize, trust, and remember.',
    href: '/packages/brand-authority',
  },
  {
    number: '03',
    title: 'Sales Acceleration',
    description:
      'Strengthen lead capture, inquiries, CRM, follow-up, and revenue systems for events, groups, bookings, and other opportunities.',
    href: '/packages/sales-acceleration',
  },
]

/** Layout: Home-19 OurExpertiseV2 — 3-card row with WowProjects arrow. */
const RecommendedSolutions = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>RECOMMENDED SOLUTIONS</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">
              Built to Move Commerce <InstrumentText>Forward.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear text-[#808080]">
              Explore connected packages designed around the digital, sales, and operational challenges growing
              retailers face.
            </p>
          </TextAppearAnimation>
        </div>
        <article>
          <RevealWrapper className="reveal-me flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            {packages.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className="group flex min-h-[280px] flex-1 flex-col rounded-radius-md border px-[30px] py-10 dark:border-dark"
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
