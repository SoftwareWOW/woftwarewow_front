import CursorPointer from '@/components/animation/CursorPointer'
import SmoothScrollProvider from '@/components/shared/SmoothScroll'
import WowLayout from '@/components/wow/WowLayout'
import { isRtlLocale, type Locale } from '@/i18n/config'
import { routing } from '@/i18n/routing'
import { getSiteUrl } from '@/lib/seo/site-url'
import { outfit, seasons } from '@/utils/fonts'
import { ThemeModeProvider } from '@/utils/Providers'
import type { Metadata } from 'next'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
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
  const siteUrl = getSiteUrl()

  const languageAlternates = Object.fromEntries(
    routing.locales.map((loc) => [loc, `${siteUrl}/${loc}`]),
  )

  return {
    metadataBase: new URL(siteUrl),
    title: messages.metadata.siteName,
    description: messages.metadata.description,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: languageAlternates,
    },
    openGraph: {
      type: 'website',
      locale,
      url: `${siteUrl}/${locale}`,
      siteName: messages.metadata.siteName,
      title: messages.metadata.siteName,
      description: messages.metadata.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.metadata.siteName,
      description: messages.metadata.description,
    },
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
  const dir = isRtlLocale(typedLocale) ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${outfit.variable} ${seasons.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SmoothScrollProvider>
            <ThemeModeProvider>
              <CursorPointer />
              <WowLayout>{children}</WowLayout>
            </ThemeModeProvider>
          </SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
