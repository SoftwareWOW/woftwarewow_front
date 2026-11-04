'use client'

import { Link, usePathname } from '@/i18n/navigation'
import { resolveSoftwareWowPublicHref } from '@/data/softwareWowMegaNavRoutes'
import { resolveWowMarketingPublicHref } from '@/data/wowMarketingMegaNavRoutes'
import { normalizeAppHref } from '@/i18n/division-paths'
import type { ComponentProps, MouseEvent } from 'react'

type WowNavLinkProps = ComponentProps<typeof Link>

export function WowNavLink({ href, onClick, ...rest }: WowNavLinkProps) {
  const pathname = usePathname()

  if (typeof href !== 'string') {
    return <Link href={href} onClick={onClick} {...rest} />
  }

  const normalized = resolveWowMarketingPublicHref(
    resolveSoftwareWowPublicHref(normalizeAppHref(href)),
  )
  const hashIndex = normalized.indexOf('#')
  const path = hashIndex >= 0 ? normalized.slice(0, hashIndex) : normalized
  const fragment = hashIndex >= 0 ? normalized.slice(hashIndex + 1) : ''

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented || !fragment) return

    const isSamePath = path === pathname || path === ''
    if (!isSamePath) return

    event.preventDefault()
    const url = `${window.location.pathname}${window.location.search}#${fragment}`
    window.history.replaceState(null, '', url)
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <Link href={normalized} onClick={handleClick} {...rest} />
}
