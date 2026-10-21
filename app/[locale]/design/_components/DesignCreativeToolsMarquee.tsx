'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import { Icon, addCollection } from '@iconify/react'
import logos from '@iconify-json/logos/icons.json'
import simpleIcons from '@iconify-json/simple-icons/icons.json'
import Marquee from 'react-fast-marquee'
import { DESIGN_CREATIVE_TOOL_ICONS } from './design-content'

addCollection(logos)
addCollection(simpleIcons)

const logoMarkClass =
  'opacity-85 brightness-0 dark:opacity-95 dark:brightness-0 dark:invert'

function CreativeToolLogo({
  icon,
  name,
  highlight,
}: {
  icon: string
  name: string
  highlight?: boolean
}) {
  return (
    <div className="mx-4 flex h-14 shrink-0 items-center justify-center sm:mx-5 md:mx-6 md:h-16">
      <span
        className={[
          'inline-flex items-center justify-center rounded-radius-sm border p-3 transition-colors',
          highlight
            ? 'border-primary/40 bg-primary/15 dark:border-primary/50 dark:bg-primary/25'
            : 'border-black/10 bg-transparent dark:border-white/10',
        ].join(' ')}
      >
        <Icon
          icon={icon}
          aria-label={name}
          className={`h-8 w-auto max-w-[3rem] object-contain sm:h-9 md:h-10 ${highlight ? 'opacity-100' : logoMarkClass}`}
        />
      </span>
    </div>
  )
}

export default function DesignCreativeToolsMarquee() {
  return (
    <RevealWrapper className="relative mt-6 overflow-hidden sm:mt-10">
      <Marquee pauseOnHover speed={35} gradient={false} autoFill>
        {DESIGN_CREATIVE_TOOL_ICONS.map((tool) => (
          <CreativeToolLogo
            key={tool.id}
            icon={tool.icon}
            name={tool.name}
            highlight={'highlight' in tool ? tool.highlight : undefined}
          />
        ))}
      </Marquee>
    </RevealWrapper>
  )
}
