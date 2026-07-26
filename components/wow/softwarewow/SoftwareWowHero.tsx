'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import { WOW_GRADIENT } from '@/components/wow/shared/WowText'

import Image from 'next/image'
import { SoftwareWowEcosystem } from './SoftwareWowEcosystem'

const AVATARS = [
  '/images/wow/Hero/client/Avatar.png',
  '/images/wow/Hero/client/Avatar (1).png',
  '/images/wow/Hero/client/Avatar (2).png',
  '/images/wow/Hero/client/Michael Carter.png',
  
]

export default function SoftwareWowHero() {
  return (
    <section className="softwarewow-ecosystem relative overflow-x-clip bg-backgroundBody px-3 pt-24 transition-colors duration-300 dark:bg-dark md:px-4 md:pt-28 lg:overflow-visible lg:pt-32">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-4 sm:gap-10 lg:flex-row lg:items-center lg:gap-6 xl:gap-10 2xl:gap-12">
        <div className="flex w-full shrink-0 flex-col items-center gap-8 text-center sm:gap-10 lg:w-[46%] lg:items-start lg:gap-10 lg:text-left xl:w-[44%] 2xl:w-[42%] 2xl:gap-12">
          <TextAppearAnimation>
            <h1 className="max-w-xl text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.12] tracking-tight text-secondary dark:text-backgroundBody">
              This is where ambitions become{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: WOW_GRADIENT }}
              >
                achievements.
              </span>
            </h1>
          </TextAppearAnimation>

          <RevealWrapper delay={0.15} className="max-w-lg">
            <p className="text-base leading-relaxed text-colorText dark:text-dark-100 sm:text-lg">
              Technology. Marketing. AI. Design. Growth. Everything your business needs under one
              connected ecosystem.
            </p>
          </RevealWrapper>

          <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center lg:items-start lg:justify-start">
            <ButtonComponent href="/services" variant="primary">
              Explore the Ecosystem
            </ButtonComponent>
            <ButtonComponent href="/meet" variant="secondary">
              How We Help You Grow
            </ButtonComponent>
          </div>

          <RevealWrapper delay={0.25} className="flex flex-col items-center gap-3 sm:flex-row lg:items-center">
            <div className="flex items-center">
              {AVATARS.map((src, i) => (
                <div
                  key={src}
                  className="relative -ml-2.5 size-10 overflow-hidden rounded-full border-2 border-backgroundBody first:ml-0 dark:border-dark"
                  style={{ zIndex: AVATARS.length - i }}
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="40px" />
                </div>
              ))}
            </div>
            <p className="max-w-xs text-sm text-colorText dark:text-dark-100">
              Trusted by ambitious businesses across the world.
            </p>
          </RevealWrapper>
        </div>

        <div className="flex w-full min-w-0 flex-1 items-center justify-center lg:justify-end">
          <div className="w-full max-w-[min(100%,720px)] lg:mx-0 lg:max-w-[min(100%,500px)] xl:max-w-[min(100%,560px)] 2xl:max-w-[min(100%,620px)]">
            <SoftwareWowEcosystem variant="hero" />
          </div>
        </div>
      </div>
    </section>
  )
}
