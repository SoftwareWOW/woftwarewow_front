'use client'

import { Icon, addCollection } from '@iconify/react'
import logos from '@iconify-json/logos/icons.json'
import simpleIcons from '@iconify-json/simple-icons/icons.json'

addCollection(simpleIcons)
addCollection(logos)

/** Brand-colored event platform logos (Iconify simple-icons / logos). */
const tools = [
  { name: 'Zoom', icon: 'simple-icons:zoom' },
  { name: 'Microsoft Teams', icon: 'logos:microsoft-teams' },
  { name: 'Hopin', icon: 'simple-icons:hopin' },
  { name: 'Eventbrite', icon: 'simple-icons:eventbrite' },
  { name: 'Whova', icon: 'simple-icons:whova' },
  { name: 'Slido', icon: 'simple-icons:slido' },
] as const

export default function EventsToolIcons() {
  return (
    <div className="mt-10 flex w-full flex-wrap items-center justify-center md:mt-14">
      {tools.map(({ name, icon }, index) => (
        <span
          key={name}
          className={`inline-flex h-14 min-w-[100px] flex-1 items-center justify-center px-4 sm:h-16 sm:min-w-[120px] sm:px-6 md:flex-none md:min-w-[140px] ${
            index > 0 ? 'border-l border-[#1515151A] dark:border-[#EDF0F51A]' : ''
          }`}
          title={name}
        >
          <Icon icon={icon} className="h-9 w-auto max-w-[120px] sm:h-10" aria-hidden />
          <span className="sr-only">{name}</span>
        </span>
      ))}
    </div>
  )
}
