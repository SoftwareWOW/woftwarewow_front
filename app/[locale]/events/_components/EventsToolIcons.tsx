'use client'

import { Icon, addCollection } from '@iconify/react'
import logos from '@iconify-json/logos/icons.json'
import simpleIcons from '@iconify-json/simple-icons/icons.json'
import { HopinToolMark, SlidoToolMark, WhovaToolMark } from './EventsToolBrandIcons'

addCollection(simpleIcons)
addCollection(logos)

const iconSize = 'h-8 w-auto sm:h-9'

const tools = [
  {
    name: 'Zoom',
    node: <Icon icon="logos:zoom-icon" className={`${iconSize} shrink-0`} aria-hidden />,
  },
  {
    name: 'Microsoft Teams',
    node: <Icon icon="simple-icons:microsoftteams" className={`${iconSize} shrink-0`} aria-hidden />,
  },
  {
    name: 'Hopin',
    node: <HopinToolMark />,
  },
  {
    name: 'Eventbrite',
    node: <Icon icon="logos:eventbrite-icon" className={`${iconSize} shrink-0`} aria-hidden />,
  },
  {
    name: 'Whova',
    node: <WhovaToolMark />,
  },
  {
    name: 'Slido',
    node: <SlidoToolMark />,
  },
] as const

export default function EventsToolIcons() {
  return (
    <div className="mt-10 flex w-full flex-nowrap items-stretch justify-center overflow-x-auto md:mt-14 md:overflow-visible">
      {tools.map(({ name, node }, index) => (
        <span
          key={name}
          className={`inline-flex min-h-16 min-w-[108px] flex-1 items-center justify-center px-3 py-4 sm:min-h-20 sm:min-w-[120px] sm:px-4 md:max-w-[180px] ${
            index > 0 ? 'border-l border-[#1515151A] dark:border-[#EDF0F51A]' : ''
          }`}
          title={name}
        >
          {node}
          <span className="sr-only">{name}</span>
        </span>
      ))}
    </div>
  )
}
