import DivisionFooter from '@/components/wow/divisions/DivisionFooter'
import DivisionNavbar from '@/components/wow/divisions/DivisionNavbar'
import { getDivisionSiteConfig } from '@/components/wow/divisions/division-site-config'
import { stickyFooterMainClass } from '@/components/wow/footer-layout'
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
  const config = getDivisionSiteConfig(divisionId)
  const locale = (await getLocale()) as Locale
  const dictionary = await getDictionary(locale)

  return (
    <div className="relative w-full max-w-full overflow-x-clip">
      <DivisionNavbar
        config={config}
        navbar={dictionary.navbar}
        navigation={dictionary.navigation}
        languageSwitcher={dictionary.languageSwitcher}
      />
      <main className={stickyFooterMainClass}>{children}</main>
      <DivisionFooter config={config} />
    </div>
  )
}
