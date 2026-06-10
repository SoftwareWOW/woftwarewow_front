'use client'
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes'

export function ThemeModeProvider({ children, ...props }: Readonly<ThemeProviderProps>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      scriptProps={{ type: 'application/json' }}
      {...props}>
      {children}
    </NextThemesProvider>
  )
}
