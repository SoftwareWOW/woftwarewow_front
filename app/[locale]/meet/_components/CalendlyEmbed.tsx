'use client'

import { useTheme } from 'next-themes'
import { useEffect, useMemo, useRef, useState } from 'react'
import { InlineWidget } from 'react-calendly'

type CalendlyEmbedProps = {
  url: string
}

type CalendlyLayout = 'small' | 'medium' | 'large'

const CALENDLY_BREAKPOINTS = {
  small: 650,
  large: 1100,
} as const

const EMBED_HEIGHT: Record<CalendlyLayout, number> = {
  small: 660,
  medium: 720,
  large: 750,
}

const calendlyTheme = {
  light: {
    backgroundColor: 'ededed',
    textColor: '171717',
    wrapperClass: 'bg-background',
  },
  dark: {
    backgroundColor: '171717',
    textColor: 'f2f2f2',
    wrapperClass: 'bg-background',
  },
} as const

function getLayout(width: number): CalendlyLayout {
  if (width < CALENDLY_BREAKPOINTS.small) return 'small'
  if (width < CALENDLY_BREAKPOINTS.large) return 'medium'
  return 'large'
}

function useCalendlyLayout(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [layout, setLayout] = useState<CalendlyLayout>('large')

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const update = () => {
      setLayout(getLayout(node.getBoundingClientRect().width))
    }

    update()
    const resizeObserver = new ResizeObserver(update)
    resizeObserver.observe(node)
    return () => resizeObserver.disconnect()
  }, [containerRef])

  return layout
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const layout = useCalendlyLayout(containerRef)

  const isDark = mounted && resolvedTheme === 'dark'
  const theme = isDark ? calendlyTheme.dark : calendlyTheme.light
  const height = EMBED_HEIGHT[layout]
  const isSmallLayout = layout === 'small'

  useEffect(() => {
    setMounted(true)
  }, [])

  const calendlyUrl = useMemo(() => {
    return url.split('?')[0]
  }, [url])

  const pageSettings = useMemo(
    () => ({
      backgroundColor: theme.backgroundColor,
      hideEventTypeDetails: isSmallLayout,
      hideLandingPageDetails: false,
      primaryColor: '615CCE',
      textColor: theme.textColor,
    }),
    [isSmallLayout, theme.backgroundColor, theme.textColor],
  )

  return (
    <div ref={containerRef} className="w-full">
      <div
        className={`overflow-hidden rounded-radius-md border border-black/10 transition-colors duration-300 dark:border-white/10 ${isSmallLayout ? 'mx-auto max-w-[420px]' : 'w-full'} ${theme.wrapperClass}`}
      >
        {mounted ? (
          <InlineWidget
            key={`${isDark ? 'dark' : 'light'}-${layout}`}
            url={calendlyUrl}
            className="!min-h-0 !w-full"
            styles={{
              height: `${height}px`,
              minWidth: isSmallLayout ? '320px' : '100%',
              width: '100%',
            }}
            pageSettings={pageSettings}
          />
        ) : (
          <div
            className={`w-full ${theme.wrapperClass}`}
            style={{ height: EMBED_HEIGHT.large }}
            aria-hidden
          />
        )}
      </div>
    </div>
  )
}
