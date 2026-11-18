'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
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
  headline: string
  description: string
  tools: ReadonlyArray<Tool>
}

/** Business Websites only — 8 tech logos in one row, no cell borders (CreativeToolkit layout variant). */
export default function BusinessWebsitesTechnologiesSection({
  eyebrow,
  headline,
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
            <h2 className="mx-auto mb-3 max-w-5xl">{headline}</h2>
          </RevealWrapper>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-3xl text-base leading-relaxed text-[#808080]">{description}</p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="reveal-me flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:flex-nowrap lg:justify-between lg:gap-4 xl:gap-8">
          {tools.map((tool) => (
            <figure key={tool.name} className="flex shrink-0 items-center justify-center p-1 sm:p-2">
              <Icon
                icon={tool.icon}
                width={40}
                height={40}
                aria-label={tool.name}
                className="text-secondary dark:text-backgroundBody sm:h-11 sm:w-11"
              />
            </figure>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}