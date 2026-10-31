import { getDivisionChrome } from '@/components/wow/divisions/division-chrome'
import { stickyFooterMainClass } from '@/components/wow/footer-layout'
import WowFooter from '@/components/wow/WowFooter'
import WowNavbar from '@/components/wow/WowNavbar'
import type { DivisionId } from '@/components/wow/nav/nav-brand-assets'
import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import { getLocale } from 'next-intl/server'
import { ReactNode } from 'react'

type DivisionSiteLayoutProps = {
  divisionId: DivisionId
  children: ReactNode
}

export default async function DivisionSiteLayout({ divisionId, children }: DivisionSiteLayoutProps) {
  const chrome = getDivisionChrome(divisionId)
  const locale = (await getLocale()) as Locale
  const dictionary = await getDictionary(locale)

  return (
    <div className="wow-brand-surface relative w-full max-w-full overflow-x-clip">
      <WowNavbar
        brand={chrome.brand}
        navigation={chrome.navigation}
        navbar={dictionary.navbar}
        languageSwitcher={dictionary.languageSwitcher}
        hasMegaMenu={chrome.hasMegaMenu}
        mobileLinkNavItems={chrome.linkNavItems}
      />
      <main className={stickyFooterMainClass}>{children}</main>
      <WowFooter footer={dictionary.footer} divisionChrome={chrome.footer} />
    </div>
  )
}
