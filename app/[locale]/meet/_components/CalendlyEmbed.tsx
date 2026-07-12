'use client'

import { useTheme } from 'next-themes'
import { useEffect, useMemo, useState } from 'react'
import { InlineWidget, useCalendlyEventListener } from 'react-calendly'

type CalendlyEmbedProps = {
  url: string
}

const MIN_HEIGHT = 660

const calendlyTheme = {
  light: {
    backgroundColor: 'ededed',
    textColor: '171717',
    wrapperClass: 'bg-backgroundBody',
  },
  dark: {
    backgroundColor: '1f1f1f',
    textColor: 'f2f2f2',
    wrapperClass: 'bg-dark-200',
  },
} as const

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const [height, setHeight] = useState(MIN_HEIGHT)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  const isDark = mounted && resolvedTheme === 'dark'
  const theme = isDark ? calendlyTheme.dark : calendlyTheme.light

  // useCalendlyEventListener({
  //   onPageHeightResize: (event) => {
  //     const reportedHeight = event.data.payload.height
  //     if (reportedHeight > 0) {
  //       setHeight(Math.max(MIN_HEIGHT, reportedHeight))
  //     }
  //   },
  // })

  useEffect(() => {
    setMounted(true)
  }, [])

  const pageSettings = useMemo(
    () => ({
      backgroundColor: theme.backgroundColor,
      hideEventTypeDetails: false,
      hideLandingPageDetails: false,
      hideGdprBanner: true,
      primaryColor: '615CCE',
      textColor: theme.textColor,
    }),
    [theme.backgroundColor, theme.textColor],
  )

  return (
    <div className={`w-full transition-colors duration-300 ${theme.wrapperClass}`}>
      {mounted ? (
        <InlineWidget
          key={isDark ? 'dark' : 'light'}
          url={url}
          className="!min-h-0 !w-full"
          styles={{
            height: `${height}px`,
            minWidth: '100%',
            width: '100%',
          }}
          pageSettings={pageSettings}
        />
      ) : (
        <div className={`w-full ${theme.wrapperClass}`} style={{ height: MIN_HEIGHT }} aria-hidden />
      )}
    </div>
  )
}
