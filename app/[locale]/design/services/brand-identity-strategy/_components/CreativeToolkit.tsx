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

type CreativeToolkitProps = {
  eyebrow: string
  headline: string
  description: string
  tools: ReadonlyArray<Tool>
}

function toolkitGridColsClass(count: number): string {
  if (count <= 3) return 'grid-cols-2 sm:grid-cols-3'
  if (count === 4) return 'grid-cols-2 sm:grid-cols-4'
  if (count === 5) return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
  if (count === 6) return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
  return 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-7'
}

/** Layout: accelerate AutomationTools — bordered icon grid. */
export default function CreativeToolkit({ eyebrow, headline, description, tools }: CreativeToolkitProps) {
  const gridCols = toolkitGridColsClass(tools.length)
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

        <RevealWrapper className={`mx-auto grid w-fit border-l border-t dark:border-dark ${gridCols}`}>
          {tools.map((tool) => (
            <figure
              key={tool.name}
              className="flex size-[110px] items-center justify-center border-b border-r dark:border-dark sm:size-[120px] md:size-[130px]"
            >
              <Icon
                icon={tool.icon}
                width={48}
                height={48}
                aria-label={tool.name}
                className="text-secondary dark:text-backgroundBody"
              />
            </figure>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}
