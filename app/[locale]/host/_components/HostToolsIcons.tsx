'use client'

import { Icon, addCollection } from '@iconify/react'
import simpleIcons from '@iconify-json/simple-icons/icons.json'
import { HOST_TOOLS } from './host-content'

addCollection(simpleIcons)

export default function HostToolsIcons() {
  const icons = HOST_TOOLS.icons

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:mt-14 md:gap-12">
      {icons.map(({ id, name, icon }) => (
        <span
          key={id}
          className="inline-flex h-12 min-w-12 items-center justify-center sm:h-14 sm:min-w-14"
          title={name}
        >
          <Icon icon={icon} className="h-8 w-auto sm:h-10" aria-hidden />
          <span className="sr-only">{name}</span>
        </span>
      ))}
    </div>
  )
}
