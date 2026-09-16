'use client'

import { Icon, addCollection } from '@iconify/react'
import simpleIcons from '@iconify-json/simple-icons/icons.json'
import Link from 'next/link'
import type { CmsSocialLink } from '@/lib/strapi/social-icons'

addCollection(simpleIcons)

type TeamSocialLinksProps = {
  links: CmsSocialLink[]
  className?: string
}

function GenericLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-6 text-secondary dark:text-[#F2F2F2]"
      aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 13a5 5 0 0 1 7.07-7.07l1.41 1.41" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 11a5 5 0 0 1-7.07 7.07L5.52 16.66" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16 16 8" />
    </svg>
  )
}

const TeamSocialLinks = ({ links, className }: TeamSocialLinksProps) => {
  if (!links.length) return null

  return (
    <ul className={className ?? 'flex gap-x-5 gap-y-5 md:gap-x-10 md:self-end'}>
      {links.map((link) => (
        <li key={`${link.platform}-${link.url}`}>
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="inline-flex transition-transform duration-300 ease-in-out hover:-translate-y-2">
            {link.icon === 'generic-link' ?
              <GenericLinkIcon />
            : <Icon
                icon={link.icon}
                className="size-6 text-secondary dark:text-[#F2F2F2]"
                aria-hidden
              />
            }
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default TeamSocialLinks
