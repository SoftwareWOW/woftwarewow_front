'use client'

import { Icon, addCollection } from '@iconify/react'
import simpleIcons from '@iconify-json/simple-icons/icons.json'
import { InstagramIcon, LinkedInIcon, YoutubeIcon } from '@/components/wow/footer/social-brand-icons'

addCollection(simpleIcons)

const iconClass = 'size-8 sm:size-9'

const channels = [
  { name: 'Spotify', node: <Icon icon="simple-icons:spotify" className={iconClass} aria-hidden /> },
  { name: 'Substack', node: <Icon icon="simple-icons:substack" className={iconClass} aria-hidden /> },
  { name: 'YouTube', node: <YoutubeIcon className={iconClass} /> },
  { name: 'LinkedIn', node: <LinkedInIcon className={iconClass} /> },
  { name: 'Instagram', node: <InstagramIcon className={iconClass} /> },
  { name: 'Medium', node: <Icon icon="simple-icons:medium" className={iconClass} aria-hidden /> },
] as const

export default function ImpactChannelIcons() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-0 divide-x divide-[#1515151A] dark:divide-[#EDF0F51A] md:mt-14">
      {channels.map(({ name, node }) => (
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
