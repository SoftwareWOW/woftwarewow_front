'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import { Icon, addCollection } from '@iconify/react'
import logos from '@iconify-json/logos/icons.json'
import simpleIcons from '@iconify-json/simple-icons/icons.json'
import { SOFTWAREWOW_PLATFORM_ICONS } from './softwarewow-content'

addCollection(logos)
addCollection(simpleIcons)

function PlatformLogo({ icon, name }: { icon: string; name: string }) {
  return (
    <figure className="flex size-14 shrink-0 items-center justify-center overflow-hidden sm:size-16 md:size-[4.5rem]">
      <Icon
        icon={icon}
        width={44}
        height={44}
        aria-label={name}
        className="max-h-full max-w-full text-secondary dark:text-backgroundBody"
      />
    </figure>
  )
}

export default function SoftwareWowPlatformIcons() {
  return (
    <RevealWrapper className="relative mt-6 overflow-x-auto overflow-y-hidden md:mt-10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-6 px-2 sm:gap-x-10 md:gap-x-12">
        {SOFTWAREWOW_PLATFORM_ICONS.map((tool) => (
          <PlatformLogo key={tool.id} icon={tool.icon} name={tool.name} />
        ))}
      </div>
    </RevealWrapper>
  )
}
