'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import { Icon, addCollection } from '@iconify/react'
import logos from '@iconify-json/logos/icons.json'
import simpleIcons from '@iconify-json/simple-icons/icons.json'
import Marquee from 'react-fast-marquee'
import { ACCELERATE_SALES_TOOLS } from './accelerate-content'

addCollection(logos)
addCollection(simpleIcons)

const logoMarkClass =
  'opacity-85 brightness-0 dark:opacity-95 dark:brightness-0 dark:invert'

function SalesToolLogo({
  icon,
  name,
  invertInDark,
}: {
  icon: string
  name: string
  invertInDark?: boolean
}) {
  return (
    <div className="mx-6 flex h-14 shrink-0 items-center justify-center sm:mx-5 md:mx-8 md:h-16">
      <span
        className={[
          'inline-flex items-center justify-center',
          invertInDark ? 'text-black dark:invert' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <Icon
          icon={icon}
          aria-label={name}
          className={`h-10 max-h-full w-auto max-w-[7.75rem] object-contain sm:h-11 sm:max-w-[8.25rem] md:h-12 md:max-w-[9rem] ${logoMarkClass}`}
        />
      </span>
    </div>
  )
}

export default function AccelerateSalesToolsMarquee() {
  return (
    <RevealWrapper className="relative mt-6 overflow-hidden sm:mt-10">
      <Marquee pauseOnHover speed={35} gradient={false} autoFill>
        {ACCELERATE_SALES_TOOLS.map((tool) => (
          <SalesToolLogo
            key={tool.id}
            icon={tool.icon}
            name={tool.name}
            invertInDark={'invertInDark' in tool ? tool.invertInDark : undefined}
          />
        ))}
      </Marquee>
    </RevealWrapper>
  )
}
