'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'

const MAIN_MOCKUP = '/images/wow/Hero/devision/Mockup 2 Dark.png'
const FLOATING_PANELS = [
  {
    src: '/images/wow/LandingPageNaveBare/Client Portal 2.svg',
    alt: 'Customer activity panel',
    className: 'right-0 top-0 z-20 w-[42%] max-w-[200px] -translate-y-2 translate-x-2 sm:max-w-[240px]',
  },
  {
    src: '/images/wow/LandingPageNaveBare/trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc%202.svg',
    alt: 'Team performance panel',
    className: 'bottom-[8%] left-0 z-20 w-[38%] max-w-[180px] -translate-x-2 sm:max-w-[220px]',
  },
  {
    src: '/images/wow/LandingPageNaveBare/Website 1 2.svg',
    alt: 'Operations overview panel',
    className: 'bottom-[18%] right-[4%] z-20 w-[36%] max-w-[170px] sm:max-w-[200px]',
  },
]

/** Layout: custom-software-development/CustomSoftwareHero — split headline + dashboard mockups. */
const ManageMyBusinessHero = () => {
  return (
    <RevealWrapper
      as="section"
      className="relative overflow-x-hidden pb-10 pt-6 sm:pt-8 md:pb-14 md:pt-10 lg:pt-12 xl:pb-16 xl:pt-14"
      aria-labelledby="manage-my-business-hero-heading"
    >
      <div className="relative">
        <div className="mx-auto flex max-w-[1600px] flex-col items-stretch justify-between gap-y-10 px-4 md:px-[30px] lg:flex-row lg:items-center lg:gap-x-12 xl:gap-x-16">
          <div className="flex w-full min-w-0 flex-col lg:max-w-[50%] xl:max-w-[610px]">
            <div className="relative mb-3">
              <HeroGradientAnimation />
              <SectionLabel className="mb-5">Manage My Business</SectionLabel>
              <TextAppearAnimation>
                <h1
                  id="manage-my-business-hero-heading"
                  className="text-appear text-[clamp(2rem,4.8vw,5.5rem)] font-light leading-[1.15] tracking-[-0.02em]"
                >
                  Run your business. <InstrumentText>Not your software.</InstrumentText>
                </h1>
              </TextAppearAnimation>
            </div>
            <RevealWrapper as="p" className="reveal-me mt-3 max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">
              Bring your operations, people, and everyday workflows together. We create connected business systems that
              simplify how you work, give you clearer visibility, and help your business move forward.
            </RevealWrapper>

            <RevealWrapperV2 className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9 lg:mt-10">
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  Start a Project
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/software#solutions" variant="secondary">
                  Explore Solutions
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapperV2>
          </div>

          <div className="relative w-full min-w-0 lg:w-[48%] xl:w-[50%]">
            <RevealWrapper className="reveal-me relative mx-auto aspect-[4/3] max-w-[640px] lg:max-w-none">
              <figure className="relative h-full w-full overflow-hidden rounded-radius-md border dark:border-dark">
                <Image
                  src={MAIN_MOCKUP}
                  alt="Business operations dashboard with tasks, customers, and team activity"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </figure>
              {FLOATING_PANELS.map((panel) => (
                <figure
                  key={panel.src}
                  className={`absolute rounded-radius-sm border bg-backgroundBody shadow-lg dark:border-dark dark:bg-dark ${panel.className}`}
                >
                  <img src={panel.src} alt={panel.alt} className="h-auto w-full object-contain p-1" />
                </figure>
              ))}
            </RevealWrapper>
          </div>
        </div>
      </div>
    </RevealWrapper>
  )
}

export default ManageMyBusinessHero
