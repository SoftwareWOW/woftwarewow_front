import CursorPointer from '@/components/animation/CursorPointer'
import SmoothScrollProvider from '@/components/shared/SmoothScroll'
import { isRtlLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionary'
import { routing } from '@/i18n/routing'
import { outfit, seasons } from '@/utils/fonts'
import { ThemeModeProvider } from '@/utils/Providers'
import type { Metadata } from 'next'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { ReactNode, Suspense } from 'react'
import '../../scss/main.scss'

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const messages = (await import(`@/messages/${locale}.json`)).default

  return {
    title: messages.metadata.siteName,
    description: messages.metadata.description,
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale as Locale)

  const messages = await getMessages()
  const typedLocale = locale as Locale
  const dictionary = await getDictionary(typedLocale)
  const dir = isRtlLocale(typedLocale) ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${outfit.variable} ${seasons.variable} antialiased`}>
        <Suspense fallback={<div>{dictionary.common.loading}</div>}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <SmoothScrollProvider>
              <ThemeModeProvider>
                <CursorPointer />
                {children}
              </ThemeModeProvider>
            </SmoothScrollProvider>
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  )
}
