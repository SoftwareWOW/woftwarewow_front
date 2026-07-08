import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import { getLocale } from 'next-intl/server'
import { ReactNode } from 'react'
import { ContactDialogProvider } from './shared/ContactDialogProvider'
import WowFooter from './WowFooter'
import WowNavbar from './WowNavbar'

export default async function WowLayout({ children }: { children: ReactNode }) {
  const locale = (await getLocale()) as Locale
  const dictionary = await getDictionary(locale)

  return (
    <ContactDialogProvider>
      <div className="relative">
        <WowNavbar
          navbar={dictionary.navbar}
          navigation={dictionary.navigation}
          languageSwitcher={dictionary.languageSwitcher}
        />

        <main className="relative z-10 bg-backgroundBody pb-[calc(96px+env(safe-area-inset-bottom))] dark:bg-dark md:pb-0 lg:mb-[720px]">
          {children}
        </main>

        <WowFooter footer={dictionary.footer} />
      </div>
    </ContactDialogProvider>
  )
}
