'use client'

import { useTheme } from 'next-themes'
import { useEffect, useMemo, useState } from 'react'
import { InlineWidget } from 'react-calendly'

type CalendlyEmbedProps = {
  url: string
}

function getCalendlyHeight(width: number) {
  if (width >= 1536) return '1400px'
  if (width >= 1280) return '1250px'
  if (width >= 1024) return '1100px'
  if (width >= 768) return '900px'
  return '750px'
}

const calendlyTheme = {
  light: {
    backgroundColor: 'ededed',
    textColor: '171717',
  },
  dark: {
    backgroundColor: '1f1f1f',
    textColor: 'f2f2f2',
  },
} as const

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const [height, setHeight] = useState('750px')
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  const isDark = mounted && resolvedTheme === 'dark'
  const theme = isDark ? calendlyTheme.dark : calendlyTheme.light

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const updateHeight = () => setHeight(getCalendlyHeight(window.innerWidth))

    updateHeight()
    window.addEventListener('resize', updateHeight)

    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  const pageSettings = useMemo(
    () => ({
      backgroundColor: theme.backgroundColor,
      hideEventTypeDetails: false,
      hideLandingPageDetails: false,
      primaryColor: '615CCE',
      textColor: theme.textColor,
    }),
    [theme.backgroundColor, theme.textColor],
  )

  return (
    <div
      className={`w-full overflow-hidden rounded-radius-md transition-colors duration-300 ${
        isDark ? 'bg-dark-200' : 'bg-backgroundBody'
      } [&_.calendly-inline-widget]:!w-full [&_.calendly-inline-widget]:!max-w-none [&_iframe]:!w-full`}
    >
     
      
      {mounted ? (
        <InlineWidget
          key={`${url}-${isDark ? 'dark' : 'light'}`}
          url={url}
          styles={{
            height,
            minWidth: '100%',
            width: '100%',
          }}
          pageSettings={pageSettings}
        />
      ) : (
        <div
          className="w-full bg-backgroundBody dark:bg-dark-200"
          style={{ height }}
          aria-hidden
        />
      )}
    </div>
  )
}
