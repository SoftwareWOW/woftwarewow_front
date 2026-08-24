'use client'

import { isDivisionSitePathname } from '@/components/wow/nav/nav-brand-assets'
import type { Dictionary } from '@/i18n/types'
import { usePathname } from '@/i18n/navigation'
import { ReactNode } from 'react'
import WowFooter from './WowFooter'
import WowNavbar from './WowNavbar'

type SuperagencyChromeProps = {
  navbar: Dictionary['navbar']
  navigation: Dictionary['navigation']
  languageSwitcher: Dictionary['languageSwitcher']
  footer: Dictionary['footer']
  children: ReactNode
}

/** Renders Superagency navbar/footer except on division site routes. */
export default function SuperagencyChrome({
  navbar,
  navigation,
  languageSwitcher,
  footer,
  children,
}: SuperagencyChromeProps) {
  const pathname = usePathname()
  const isDivisionSite = isDivisionSitePathname(pathname)

  if (isDivisionSite) {
    return <>{children}</>
  }

  return (
    <>
      <WowNavbar navbar={navbar} navigation={navigation} languageSwitcher={languageSwitcher} />
      <main className="relative z-10 w-full max-w-full overflow-x-clip bg-backgroundBody pb-[calc(96px+env(safe-area-inset-bottom))] dark:bg-dark md:pb-0 lg:mb-[720px]">
        {children}
      </main>
      <WowFooter footer={footer} />
    </>
  )
}
