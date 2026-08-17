import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
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
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText> Websites
      </>
    ),
    heading: 'Web Experiences',
    description: 'Professional websites built around credibility and conversion.',
  },
  {
    id: '02',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText> Marketing
      </>
    ),
    heading: 'Visibility & Growth',
    description: 'SEO, campaigns, content, and customer acquisition.',
  },
  {
    id: '03',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText> Accelerate
      </>
    ),
    heading: 'Sales & Revenue',
    description: 'CRM, lead generation, funnels, and sales systems.',
  },
  {
    id: '04',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText> Design
      </>
    ),
    heading: 'Brand & Creative',
    description: 'Brand identity, visual communication, and creative assets.',
  },
  {
    id: '05',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText> Intelligence
      </>
    ),
    heading: 'AI & Automation',
    description: 'Automate workflows, communication, data, and repetitive operations.',
  },
  {
    id: '06',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText> Social
      </>
    ),
    heading: 'Content & Community',
    description: 'Build visibility and authority across social platforms.',
  },
]

/** Layout: Home-19 ElevateBrandV2 — numbered hover specialist rows + header CTA. */
const ConnectedExpertise = () => {
  return (
    <section>
      <div className="container">
        <RevealWrapper className="reveal-me mb-5">
          <SectionLabel>The WOW Ecosystem</SectionLabel>
        </RevealWrapper>

        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation02>
              <h2 className="text-appear-2">
                More Capabilities. <InstrumentText>One Connected Partner.</InstrumentText>
              </h2>
            </TextAppearAnimation02>
          </div>
          <div className="w-full md:w-80 lg:w-96">
            <TextAppearAnimation>
              <p className="text-appear text-appear-2 max-w-lg text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                As your firm grows, you may need much more than a website or campaign. Our ecosystem brings the
                capabilities together.
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList className="flex justify-end max-md:justify-center" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  Find My Transformation Priorities
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
