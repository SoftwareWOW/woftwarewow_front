'use client'

import { Icon, addCollection } from '@iconify/react'
import simpleIcons from '@iconify-json/simple-icons/icons.json'

addCollection(simpleIcons)

const iconClass = 'size-8 sm:size-9'

const tools = [
  { name: 'Zoom', node: <Icon icon="simple-icons:zoom" className={iconClass} aria-hidden /> },
  { name: 'Microsoft Teams', node: <Icon icon="simple-icons:microsoftteams" className={iconClass} aria-hidden /> },
  { name: 'Hopin', node: <Icon icon="simple-icons:hopin" className={iconClass} aria-hidden /> },
  { name: 'Eventbrite', node: <Icon icon="simple-icons:eventbrite" className={iconClass} aria-hidden /> },
  { name: 'Whova', node: <Icon icon="simple-icons:whova" className={iconClass} aria-hidden /> },
  { name: 'Slido', node: <Icon icon="simple-icons:slido" className={iconClass} aria-hidden /> },
] as const

export default function EventsToolIcons() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-0 divide-x divide-[#1515151A] dark:divide-[#EDF0F51A] md:mt-14">
      {tools.map(({ name, node }) => (
        <span
          key={name}
          className="inline-flex size-16 items-center justify-center px-4 text-secondary transition-colors dark:text-backgroundBody sm:size-20 sm:px-6"
          title={name}
        >
          {node}
          <span className="sr-only">{name}</span>
        </span>
      ))}
    </div>
  )
}
