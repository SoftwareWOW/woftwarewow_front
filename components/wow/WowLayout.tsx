import AIAssistant from '@/components/ai/AIAssistant'
import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import { getLocale } from 'next-intl/server'
import { ReactNode } from 'react'
import { ContactDialogProvider } from './shared/ContactDialogProvider'
import { ToastProvider } from './shared/ToastProvider'
import WowFooter from './WowFooter'
import WowNavbar from './WowNavbar'

export default async function WowLayout({ children }: { children: ReactNode }) {
  const locale = (await getLocale()) as Locale
  const dictionary = await getDictionary(locale)

  return (
    <ToastProvider>
      <ContactDialogProvider>
        <div className="relative w-full max-w-full overflow-x-clip">
          <WowNavbar
            navbar={dictionary.navbar}
            navigation={dictionary.navigation}
            languageSwitcher={dictionary.languageSwitcher}
          />

          <main className="relative z-10 w-full max-w-full overflow-x-clip bg-backgroundBody pb-[calc(96px+env(safe-area-inset-bottom))] dark:bg-dark md:pb-0 lg:mb-[720px]">
            {children}
          </main>

          <WowFooter footer={dictionary.footer} />
          <AIAssistant />
        </div>
      </ContactDialogProvider>
    </ToastProvider>
  )
}
