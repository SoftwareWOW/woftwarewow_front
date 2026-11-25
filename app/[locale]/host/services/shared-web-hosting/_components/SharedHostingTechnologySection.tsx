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

type Tool = { name: string; icon: string }

type SharedHostingTechnologySectionProps = {
  eyebrow: string
  headlineBefore: string
  headlineAccent: string
  description: string
  tools: ReadonlyArray<Tool>
}

/** Copy of BusinessWebsitesTechnologiesSection — 6-logo row for hosting stack. */
export default function SharedHostingTechnologySection({
  eyebrow,
  headlineBefore,
  headlineAccent,
  description,
  tools,
}: SharedHostingTechnologySectionProps) {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-12">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mx-auto mb-3 max-w-5xl text-[clamp(1.75rem,4vw,4rem)] font-light leading-[1.2]">
              {headlineBefore}
              <InstrumentText>{headlineAccent}</InstrumentText>
            </h2>
          </RevealWrapper>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-3xl text-[clamp(0.9375rem,1.5vw,1.25rem)] leading-relaxed text-[#808080]">
              {description}
            </p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="reveal-me mx-auto grid w-full max-w-[900px] grid-cols-3 place-items-center gap-x-3 gap-y-5 sm:grid-cols-6 sm:gap-x-6 sm:gap-y-6">
          {tools.map((tool) => (
            <figure key={tool.name} className="flex items-center justify-center">
              <Icon
                icon={tool.icon}
                width={48}
                height={48}
                aria-label={tool.name}
                className={cn(
                  'h-8 w-8 text-secondary sm:h-10 sm:w-10 md:h-12 md:w-12 dark:text-backgroundBody',
                )}
              />
            </figure>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}
