'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import { SocialOrbit } from './SocialOrbit'

export default function SocialHero() {
  return (
    <section className="wowsocial-ecosystem relative overflow-x-clip bg-backgroundBody px-3 pt-24 transition-colors duration-300 dark:bg-dark md:px-4 md:pt-28 lg:overflow-visible lg:pt-32">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:gap-6 xl:gap-10 2xl:gap-12">
        <div className="flex w-full shrink-0 flex-col items-center gap-8 text-center sm:gap-10 lg:w-[46%] lg:items-start lg:gap-10 lg:text-left xl:w-[44%] 2xl:w-[42%] 2xl:gap-12">
          <TextAppearAnimation>
            <h1 className="max-w-xl text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.12] tracking-tight text-secondary dark:text-backgroundBody">
              This is where content becomes{' '}
              <span className="font-instrument italic !bg-none !bg-clip-border !text-inherit">
                community.
              </span>
            </h1>
          </TextAppearAnimation>

          <RevealWrapper delay={0.15} className="max-w-lg">
            <p className="text-base leading-relaxed text-colorText dark:text-dark-100 sm:text-lg">
              Create social strategies, ads, and influencer campaigns that convert engagement into
              sales.
            </p>
          </RevealWrapper>

          <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center lg:items-start lg:justify-start">
            <ButtonComponent href="/contact" variant="primary">
              Start Growing Socially
            </ButtonComponent>
            <ButtonComponent href="/meet" variant="secondary">
              Book a Strategy Call
            </ButtonComponent>
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-1 items-center justify-center lg:justify-end">
          <div className="w-full max-w-[min(100%,560px)] lg:max-w-[min(100%,880px)]">
            <SocialOrbit />
          </div>
        </div>
      </div>
    </section>
  )
}
