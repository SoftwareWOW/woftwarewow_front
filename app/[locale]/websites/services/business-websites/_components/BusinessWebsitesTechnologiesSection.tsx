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
}

type BusinessWebsitesTechnologiesSectionProps = {
  eyebrow: string
  headlineBefore: string
  headlineAccent: string
  description: string
  tools: ReadonlyArray<Tool>
}

/** Business Websites only — 8 tech logos in one row, no cell borders (CreativeToolkit layout variant). */
export default function BusinessWebsitesTechnologiesSection({
  eyebrow,
  headlineBefore,
  headlineAccent,
  description,
  tools,
}: BusinessWebsitesTechnologiesSectionProps) {
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

        <RevealWrapper className="reveal-me mx-auto grid w-full max-w-[1080px] grid-cols-4 place-items-center gap-x-2 gap-y-5 sm:grid-cols-8 sm:gap-x-3 md:gap-x-4 lg:gap-x-5 xl:gap-x-6">
          {tools.map((tool) => (
            <figure key={tool.name} className="flex items-center justify-center">
              <Icon
                icon={tool.icon}
                width={48}
                height={48}
                aria-label={tool.name}
                className={cn(
                  'h-12 w-12 text-secondary dark:text-backgroundBody',
                  tool.icon.includes('vercel') && 'dark:invert',
                  tool.icon.includes('nextjs') && 'dark:invert',
                )}
              />
            </figure>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}