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
  icon?: string
}

type CreativeToolkitProps = {
  eyebrow: string
  headline: string
  description: string
  tools: ReadonlyArray<Tool>
}

function CapCutMark() {
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" aria-hidden className="shrink-0">
      <rect width={48} height={48} rx={10} fill="#000" />
      <path
        fill="#fff"
        d="M14 32V16h6.2l4.4 9.8L29 16h6v16h-4.4V22l-4.8 10h-3.2l-4.8-10v10H14zm16.2-8.2 2.4-5.2 2.4 5.2h-4.8z"
      />
    </svg>
  )
}

function ToolkitIcon({ tool }: { tool: Tool }) {
  if (tool.name === 'CapCut') {
    return <CapCutMark />
  }
  if (!tool.icon) return null
  return <Icon icon={tool.icon} width={48} height={48} aria-label={tool.name} />
}

/** Layout: accelerate AutomationTools — bordered icon grid (video-motion toolkit). */
export default function CreativeToolkit({ eyebrow, headline, description, tools }: CreativeToolkitProps) {
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

        <RevealWrapper className="mx-auto grid w-fit grid-cols-2 border-l border-t dark:border-dark sm:grid-cols-3 lg:grid-cols-5">
          {tools.map((tool) => (
            <figure
              key={tool.name}
              className="flex size-[110px] items-center justify-center border-b border-r dark:border-dark sm:size-[120px] md:size-[130px]"
            >
              <ToolkitIcon tool={tool} />
            </figure>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}
