import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import { getLocale } from 'next-intl/server'
import { ReactNode } from 'react'
import WowFooter from './WowFooter'
import WowNavbar from './WowNavbar'

export default async function WowLayout({ children }: { children: ReactNode }) {
  const locale = (await getLocale()) as Locale
  const dictionary = await getDictionary(locale)

  return (
    <div className="bg-backgroundBody text-secondary dark:bg-dark dark:text-backgroundBody">
      <WowNavbar
        navbar={dictionary.navbar}
        navigation={dictionary.navigation}
        languageSwitcher={dictionary.languageSwitcher}
      />
      <main className="pb-[calc(96px+env(safe-area-inset-bottom))] lg:pb-0">{children}</main>
      <WowFooter footer={dictionary.footer} />
    </div>
  )
}
