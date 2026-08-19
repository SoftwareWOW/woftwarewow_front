import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import WowText from '@/components/wow/shared/WowText'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'

const divisions: {
  href: string
  title: ReactNode
}[] = [
  {
    href: '/softwarewow',
    title: (
      <>
        Software<WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW!</WowText>
      </>
    ),
  },
  {
    href: '/wowmarketing',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Marketing</span>
      </>
    ),
  },
  {
    href: '/wowdesign',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Design</span>
      </>
    ),
  },
  {
    href: '/wowwebsites',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Websites</span>
      </>
    ),
  },
  {
    href: '/wowsocial',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Social</span>
      </>
    ),
  },
  {
    href: '/wowintelligence',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Intelligence</span>
      </>
    ),
  },
  {
    href: '/wowaccelerate',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Accelerate</span>
      </>
    ),
  },
  {
    href: '/wowhost',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Host</span>
      </>
    ),
  },
]

/** Layout: industries/technology-and-saas/_components/ConnectedExpertise.tsx (Home-19 ElevateBrandV2) — simplified 2×4 link grid. */
const ExpertiseBehindWork = () => {
  return (
    <section>
      <div className="container">
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
          {divisions.map((division) => (
            <RevealWrapper key={division.href} className="reveal-me">
              <Link
                href={division.href}
                className="group flex items-center justify-between rounded-radius-md border border-[#e5e5e5] px-5 py-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8b7cff] dark:border-[#333] md:px-6 md:py-7"
              >
                <h3 className="flex items-center gap-[0.25em] text-2xl font-normal leading-tight tracking-[-1px] sm:text-3xl md:text-4xl">
                  {division.title}
                </h3>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-radius-sm bg-[#8b7cff] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:size-11">
                  <ArrowUpRight aria-hidden className="size-5" strokeWidth={2} />
                </span>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertiseBehindWork
