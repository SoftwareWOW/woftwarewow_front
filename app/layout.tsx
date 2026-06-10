import CursorPointer from '@/components/animation/CursorPointer'
import SmoothScrollProvider from '@/components/shared/SmoothScroll'
import ThemeSwitcher from '@/components/theme/ThemeSwitcher'
import { outfit, seasons } from '@/utils/fonts'
import { ThemeModeProvider } from '@/utils/Providers'
import type { Metadata } from 'next'
import { ReactNode, Suspense } from 'react'
import '../scss/main.scss'

export const metadata: Metadata = {
  title: 'WOW Superagency',
  description:
    'Help small businesses grow faster, smarter, and more confidently through an integrated ecosystem of technology, marketing, and creative services.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${seasons.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SmoothScrollProvider>
            <ThemeModeProvider>
              <ThemeSwitcher />
              <CursorPointer />
              {children}
            </ThemeModeProvider>
          </SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  )
}
