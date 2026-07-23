'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import { WOW_GRADIENT } from '@/components/wow/shared/WowText'
import { ArrowRight, CirclePlay } from 'lucide-react'
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
    <section className="softwarewow-ecosystem relative overflow-x-clip bg-backgroundBody px-3 pt-24 transition-colors duration-300 dark:bg-dark md:px-4 md:pt-28">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-8 sm:gap-10 xl:flex-row xl:items-center xl:gap-10 2xl:gap-14">
        <div className="flex w-full shrink-0 flex-col items-center text-center xl:w-[44%] xl:items-start xl:text-left 2xl:w-[42%]">

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

          <RevealWrapper delay={0.15} className="mt-5 max-w-lg">
            <p className="text-base leading-relaxed text-colorText dark:text-dark-100 sm:text-lg">
              Technology. Marketing. AI. Design. Growth. Everything your business needs under one
              connected ecosystem.
            </p>
          </RevealWrapper>

         <div  className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center xl:justify-start" >
      <ButtonComponent
              href="/services"
              variant="primary"

            >
                Explore the Ecosystem
        
            </ButtonComponent>
            <ButtonComponent href="/meet" variant="secondary" >
                How We Help You Grow   
            </ButtonComponent>
         </div>
      


          <RevealWrapper delay={0.25} className="mt-8 flex flex-col items-center gap-3 sm:flex-row xl:items-center">
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

        <div className="flex w-full min-w-0 flex-1 items-center justify-center xl:justify-end">
          <div className="w-full max-w-[min(100%,720px)] xl:max-w-none">
            <SoftwareWowEcosystem variant="hero" />
          </div>
        </div>
      </div>
    </section>
  )
}
