import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WowText from '@/components/wow/shared/WowText'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'

const divisions: {
  id: string
  href: string
  title: ReactNode
  heading: string
  description: string
}[] = [
  {
    id: '01',
    href: '/softwarewow',
    title: (
      <>
        Software<WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW!</WowText>
      </>
    ),
    heading: 'Custom Technology',
    description: 'Platforms, portals, mobile apps, product builds, and operational software.',
  },
  {
    id: '02',
    href: '/wowmarketing',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Marketing</span>
      </>
    ),
    heading: 'Demand & Growth',
    description: 'SEO, campaigns, content, acquisition systems, and ongoing performance marketing.',
  },
  {
    id: '03',
    href: '/wowdesign',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Design</span>
      </>
    ),
    heading: 'Brand & Experience',
    description: 'Brand identity, product design, visual systems, and communication assets.',
  },
  {
    id: '04',
    href: '/wowwebsites',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Websites</span>
      </>
    ),
    heading: 'Digital Experiences',
    description: 'High-performance websites built for credibility, clarity, and conversion.',
  },
  {
    id: '05',
    href: '/wowsocial',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Social</span>
      </>
    ),
    heading: 'Community & Reach',
    description: 'Social content, storytelling, audience engagement, and brand visibility.',
  },
  {
    id: '06',
    href: '/wowintelligence',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Intelligence</span>
      </>
    ),
    heading: 'AI & Automation',
    description: 'Automation, AI workflows, internal efficiency tools, and smarter operations.',
  },
  {
    id: '07',
    href: '/wowaccelerate',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Accelerate</span>
      </>
    ),
    heading: 'Revenue Systems',
    description: 'Lead generation, funnels, CRM systems, and sales enablement for growth.',
  },
  {
    id: '08',
    href: '/wowhost',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Host</span>
      </>
    ),
    heading: 'Cloud & Infrastructure',
    description: 'Hosting, deployment, domains, and reliable digital infrastructure.',
  },
]

/** Layout: industries/technology-and-saas/_components/ConnectedExpertise.tsx (Home-19 ElevateBrandV2) — clickable specialist rows with portfolio division copy. */
const ExpertiseBehindWork = () => {
  return (
    <section>
      <div className="container">
        <RevealWrapper className="reveal-me mb-5">
          <SectionLabel>THE WOW ECOSYSTEM</SectionLabel>
        </RevealWrapper>

        <div className="mb-12 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-16 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation02>
              <h2 className="text-appear-2">Different expertise. One connected team.</h2>
            </TextAppearAnimation02>
          </div>
          <div className="w-full md:w-80 lg:w-96">
            <TextAppearAnimation>
              <p className="text-appear text-appear-2 max-w-lg text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                Our work brings together specialists from across WOW Superagency based on what each project needs.
              </p>
            </TextAppearAnimation>
          </div>
        </div>

        <div className="[&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
          {divisions.map((division) => (
            <RevealWrapper key={division.href} className="reveal-me">
              <Link
                href={division.href}
                className="ease-[cubic-bezier(0.4,0,0.2,1)] group flex transform items-center justify-between gap-5 pb-5 pt-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.010] hover:backdrop-blur-sm md:pb-10 md:pt-10"
              >
                <span className="w-8 shrink-0 font-instrument text-xl italic leading-[32px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody">
                  {division.id}
                </span>
                <h3 className="flex shrink-0 items-center gap-[0.25em] text-nowrap text-2xl font-normal leading-tight tracking-[-2px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:text-[55px] md:w-[730px] md:text-[67px] lg:text-[84px] xl:text-[88px] xl:leading-[1.15] xl:tracking-[-2.88px]">
                  {division.title}
                </h3>
                <div className="ml-2.5 shrink-0 text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody md:w-[370px]">
                  <p className="flex items-center justify-between gap-3 text-sm font-medium md:text-base md:leading-[1.6] md:tracking-[0.32px]">
                    <span>{division.heading}</span>
                    <ArrowUpRight aria-hidden className="size-5 shrink-0 opacity-60 transition-opacity duration-300 group-hover:opacity-100" strokeWidth={2} />
                  </p>
                  <p className="mt-1 text-xs text-[#808080] md:text-base md:leading-[1.6] md:tracking-[0.32px]">
                    {division.description}
                  </p>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertiseBehindWork
