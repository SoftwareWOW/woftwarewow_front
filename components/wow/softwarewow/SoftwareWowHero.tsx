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
  '/images/agent/01.jpg',
]

export default function SoftwareWowHero() {
  return (
    <section className="softwarewow-ecosystem relative overflow-hidden bg-backgroundBody px-3 pt-24 transition-colors duration-300 dark:bg-dark md:px-4 md:pt-28">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-8 xl:gap-12">
        <div className="flex w-full flex-col items-center text-center lg:w-[45%] lg:items-start lg:text-left xl:w-[42%]">
          <RevealWrapper>
            <span
              className="mb-5 inline-flex rounded-full border px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-primary sm:text-[11px]"
              style={{
                borderColor: 'color-mix(in oklab, var(--wow-1) 35%, transparent)',
                background: 'color-mix(in oklab, var(--wow-1) 8%, transparent)',
              }}
            >
              The Superagency for Small Business Growth
            </span>
          </RevealWrapper>

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

          <RevealWrapper delay={0.2} className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <ButtonComponent
              href="/services"
              variant="primary"
              className="!rounded-radius-md !border-0 !bg-brand-gradient !px-6 !py-3.5 !text-white hover:!opacity-95"
            >
              <span className="inline-flex items-center gap-2">
                Explore the Ecosystem
                <ArrowRight className="h-4 w-4" />
              </span>
            </ButtonComponent>
            <ButtonComponent href="/meet" variant="secondary" className="!rounded-radius-md !px-6 !py-3.5">
              <span className="inline-flex items-center gap-2">
                How We Help You Grow
                <CirclePlay className="h-4 w-4" />
              </span>
            </ButtonComponent>
          </RevealWrapper>

          <RevealWrapper delay={0.25} className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-center">
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
          <SoftwareWowEcosystem variant="hero" />
        </div>
      </div>
    </section>
  )
}
