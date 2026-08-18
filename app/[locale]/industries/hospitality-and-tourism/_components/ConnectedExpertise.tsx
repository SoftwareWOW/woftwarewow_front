import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WowText from '@/components/wow/shared/WowText'
import type { ReactNode } from 'react'

const teams: {
  id: string
  title: ReactNode
  heading: string
  description: string
}[] = [
  {
    id: '01',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Websites</span>
      </>
    ),
    heading: 'Digital Experiences',
    description: 'Modern websites and booking-focused experiences.',
  },
  {
    id: '02',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Marketing</span>
      </>
    ),
    heading: 'Visibility & Acquisition',
    description: 'SEO, advertising, campaigns, content, and audience growth.',
  },
  {
    id: '03',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Social</span>
      </>
    ),
    heading: 'Content & Community',
    description: 'Social strategy, storytelling, content creation, and engagement.',
  },
  {
    id: '04',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Design</span>
      </>
    ),
    heading: 'Brand & Creative',
    description: 'Identity, campaign creative, menus, collateral, and visual communication.',
  },
  {
    id: '05',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-black dark:text-[#F2F2F2]">Intelligence</span>
      </>
    ),
    heading: 'AI & Automation',
    description: 'Automated communication, workflows, assistants, and business intelligence.',
  },
  {
    id: '06',
    title: (
      <>
        <span className="text-black dark:text-[#F2F2F2]">Software</span>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW!</WowText>
      </>
    ),
    heading: 'Custom Technology',
    description: 'Booking systems, integrations, applications, portals, and internal tools.',
  },
]

/** Layout: Home-19 ElevateBrandV2 — numbered hover specialist rows + header CTA. */
const ConnectedExpertise = () => {
  return (
    <section>
      <div className="container">
        <RevealWrapper className="reveal-me mb-5">
          <SectionLabel>THE WOW ECOSYSTEM</SectionLabel>
        </RevealWrapper>

        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation02>
              <h2 className="text-appear-2">Everything Behind a Better Guest Experience.</h2>
            </TextAppearAnimation02>
          </div>
          <div className="w-full md:w-80 lg:w-96">
            <TextAppearAnimation>
              <p className="text-appear text-appear-2 max-w-lg text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                Hospitality growth can require much more than marketing. Our ecosystem connects the creative, digital,
                technical, and operational capabilities behind your brand.
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList className="flex justify-end max-md:justify-center" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  Explore the WOW Ecosystem
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <div className="[&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
          {teams.map((item) => (
            <div
              key={item.id}
              className="ease-[cubic-bezier(0.4, 0, 0.2, 1)] group flex transform items-start justify-between gap-5 pb-5 pt-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.010] hover:backdrop-blur-sm md:pb-10 md:pt-10"
            >
              <span className="w-8 font-instrument text-xl italic leading-[32px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody">
                {item.id}
              </span>
              <h3 className="mt-2 flex items-baseline gap-[0.25em] text-nowrap text-2xl font-normal leading-tight tracking-[-2px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:text-[55px] md:w-[730px] md:text-[67px] lg:text-[84px] xl:text-[88px] xl:leading-[1.15] xl:tracking-[-2.88px]">
                {item.title}
              </h3>
              <div className="ml-2.5 self-center text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody md:w-[370px]">
                <p className="text-sm font-medium md:text-base md:leading-[1.6] md:tracking-[0.32px]">{item.heading}</p>
                <p className="mt-1 text-xs text-[#808080] md:text-base md:leading-[1.6] md:tracking-[0.32px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ConnectedExpertise
