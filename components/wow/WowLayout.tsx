import AIAssistant from '@/components/ai/AIAssistant'
import { AIChatProvider } from '@/components/ai/AIChatController'
import SuperagencyChrome from '@/components/wow/SuperagencyChrome'
import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import { getLocale } from 'next-intl/server'
import { ReactNode } from 'react'
import { ContactDialogProvider } from './shared/ContactDialogProvider'
import { MeetDialogProvider } from './shared/MeetDialogProvider'
import { ToastProvider } from './shared/ToastProvider'

export default async function WowLayout({ children }: { children: ReactNode }) {
  const locale = (await getLocale()) as Locale
  const dictionary = await getDictionary(locale)

  return (
    <ToastProvider>
      <ContactDialogProvider>
        <MeetDialogProvider>
          <AIChatProvider>
            <div className="relative w-full max-w-full overflow-x-clip">
              <SuperagencyChrome
                navbar={dictionary.navbar}
                navigation={dictionary.navigation}
                languageSwitcher={dictionary.languageSwitcher}
                footer={dictionary.footer}
              >
                {children}
              </SuperagencyChrome>
              <AIAssistant />
            </div>
          </AIChatProvider>
        </MeetDialogProvider>
      </ContactDialogProvider>
    </ToastProvider>
  )
}
