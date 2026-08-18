import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const packages = [
  {
    number: '01',
    title: 'Website Growth Engine',
    description:
      'Improve how learners discover programs, explore your offering, register, and engage with your organization online.',
    href: '/packages/website-growth-engine',
  },
  {
    number: '02',
    title: 'Brand Authority',
    description:
      'Strengthen your presence, credibility, identity, and communication in a competitive education market.',
    href: '/packages/brand-authority',
  },
  {
    number: '03',
    title: 'AI Automation',
    description:
      'Automate learner communication, administrative workflows, lead management, and repetitive internal processes.',
    href: '/packages/ai-automation',
  },
]

/** Layout: Home-19 OurExpertiseV2 — split header + 3 cards with hover fill. */
const RecommendedSolutions = () => {
  return (
    <section>
      <div className="container">
        <RevealWrapper className="reveal-me mb-5">
          <SectionLabel>RECOMMENDED SOLUTIONS</SectionLabel>
        </RevealWrapper>

        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation02>
              <h2 className="text-appear-2">Built to Help Learning Grow.</h2>
            </TextAppearAnimation02>
          </div>
          <div className="w-full md:w-80 lg:w-96">
            <TextAppearAnimation>
              <p className="text-appear text-appear-2 max-w-lg text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                Explore packages that strengthen your digital presence, enrollment, learning experience, and
                operational systems.
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList className="flex justify-end max-md:justify-center" itemClassName="block">
                <ButtonComponent href="/packages/website-growth-engine" variant="primary">
                  Explore All Solutions
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <article>
          <RevealWrapper className="reveal-me flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            {packages.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className="group flex min-h-[280px] flex-1 flex-col rounded-radius-md border border-[#e5e5e5] px-[30px] py-10 transition-colors duration-300 hover:border-primary hover:bg-primary dark:border-dark"
              >
                <span className="font-instrument text-5xl italic leading-none transition-colors duration-300 group-hover:text-white">
                  {item.number}
                </span>
                <h5 className="mb-2.5 mt-8 transition-colors duration-300 group-hover:text-white">{item.title}</h5>
                <p className="text-[#808080] transition-colors duration-300 group-hover:text-white/85">
                  {item.description}
                </p>

                <div className="mt-auto flex justify-end pt-8 lg:pt-10">
                  <figure className="relative size-[60px] shrink-0 overflow-hidden rounded-radius-sm bg-primary transition-colors duration-300 group-hover:bg-white md:size-[65px] lg:size-[79px]">
                    <ArrowUpRight
                      aria-hidden
                      className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 !stroke-white opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0 group-hover:!stroke-primary"
                      strokeWidth={2}
                    />
                    <ArrowUpRight
                      aria-hidden
                      className="absolute size-10 -translate-x-4 translate-y-12 !stroke-white opacity-0 transition-all duration-500 group-hover:translate-x-[19px] group-hover:translate-y-5 group-hover:opacity-100 group-hover:!stroke-primary"
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
