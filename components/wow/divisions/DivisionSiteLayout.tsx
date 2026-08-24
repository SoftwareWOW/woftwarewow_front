import DivisionFooter from '@/components/wow/divisions/DivisionFooter'
import DivisionNavbar from '@/components/wow/divisions/DivisionNavbar'
import { getDivisionSiteConfig } from '@/components/wow/divisions/division-site-config'
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
      <DivisionNavbar config={config} navbar={dictionary.navbar} languageSwitcher={dictionary.languageSwitcher} />
      <main className="relative z-10 w-full max-w-full overflow-x-clip bg-backgroundBody pb-[calc(96px+env(safe-area-inset-bottom))] dark:bg-dark md:pb-0 lg:mb-[720px]">
        {children}
      </main>
      <DivisionFooter config={config} />
    </div>
  )
}
