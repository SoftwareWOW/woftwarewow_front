'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import { Icon, addCollection } from '@iconify/react'
import logos from '@iconify-json/logos/icons.json'
import simpleIcons from '@iconify-json/simple-icons/icons.json'
import { MARKETING_PLATFORM_ICONS } from './marketing-content'

addCollection(logos)
addCollection(simpleIcons)

function PlatformLogo({ icon, name }: { icon: string; name: string }) {
  return (
    <figure className="flex h-14 w-[4.5rem] shrink-0 items-center justify-center sm:h-16 sm:w-20 md:h-[4.5rem] md:w-[5rem]">
      <Icon
        icon={icon}
        width={44}
        height={44}
        aria-label={name}
        className="max-h-[44px] max-w-[44px] text-secondary dark:text-backgroundBody"
      />
    </figure>
  )
}

/** Same layout as SoftwareWowPlatformIcons — static row, no marquee. */
export default function MarketingPlatformIcons() {
  return (
    <RevealWrapper className="relative mt-6 md:mt-10">
      <div className="grid w-full grid-cols-4 place-items-center gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-6 md:grid-cols-8 md:gap-x-3 lg:gap-x-6">
        {MARKETING_PLATFORM_ICONS.map((tool) => (
          <PlatformLogo key={tool.id} icon={tool.icon} name={tool.name} />
        ))}
      </div>
    </RevealWrapper>
  )
}
