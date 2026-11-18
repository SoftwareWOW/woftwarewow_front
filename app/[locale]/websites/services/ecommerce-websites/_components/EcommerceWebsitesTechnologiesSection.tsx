'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { cn } from '@/utils/cn'
import { Icon, addCollection } from '@iconify/react'
import logos from '@iconify-json/logos/icons.json'
import simpleIcons from '@iconify-json/simple-icons/icons.json'

addCollection(logos)
addCollection(simpleIcons)

type Tool = {
  name: string
  icon: string
  wide?: boolean
  monochrome?: boolean
}

type EcommerceWebsitesTechnologiesSectionProps = {
  eyebrow: string
  headlineBefore: string
  headlineAccent: string
  description: string
  tools: ReadonlyArray<Tool>
}

/** eCommerce only — 6 brand logos centered in one row (colored logos:* where available). */
export default function EcommerceWebsitesTechnologiesSection({
  eyebrow,
  headlineBefore,
  headlineAccent,
  description,
  tools,
}: EcommerceWebsitesTechnologiesSectionProps) {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-12">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mx-auto mb-3 max-w-5xl">
              {headlineBefore}
              <InstrumentText>{headlineAccent}</InstrumentText>
            </h2>
          </RevealWrapper>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-3xl text-base leading-relaxed text-[#808080]">{description}</p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="reveal-me mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-10 md:gap-x-12 lg:gap-x-14">
          {tools.map((tool) => {
            const coloredLogo = tool.icon.startsWith('logos:')
            const isWide = tool.wide === true

            return (
              <figure
                key={tool.name}
                className={cn(
                  'flex shrink-0 items-center justify-center',
                  isWide ? 'h-12 w-[11rem] sm:h-14 sm:w-[13.5rem]' : 'h-14 w-14 sm:h-16 sm:w-16',
                )}
              >
                <Icon
                  icon={tool.icon}
                  aria-label={tool.name}
                  className={cn(
                    'max-h-full max-w-full object-contain',
                    isWide ? 'h-full w-full' : 'h-14 w-14 sm:h-16 sm:w-16',
                    tool.monochrome && 'text-black dark:invert',
                    !coloredLogo &&
                      !tool.monochrome &&
                      'text-secondary dark:text-backgroundBody',
                  )}
                />
              </figure>
            )
          })}
        </RevealWrapper>
      </div>
    </section>
  )
}