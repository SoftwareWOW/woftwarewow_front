'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useTheme } from 'next-themes'
import { useEffect, useMemo, useState } from 'react'

type CalComEmbedProps = {
  calLink: string
  className?: string
}

/** Accepts `username/event` or a full `https://cal.com/...` URL. */
function toCalLink(value: string) {
  const trimmed = value.trim()
  if (!trimmed) return ''

  try {
    if (trimmed.startsWith('http')) {
      const pathname = new URL(trimmed).pathname.replace(/^\/+|\/+$/g, '')
      return pathname
    }
  } catch {
    return trimmed.replace(/^\/+|\/+$/g, '')
  }

  return trimmed.replace(/^\/+|\/+$/g, '')
}

function CalEmbedSkeleton() {
  return (
    <div aria-hidden className="flex min-h-[640px] w-full flex-col gap-4 p-6 sm:p-8">
      <div className="h-8 w-2/5 animate-pulse rounded-radius-sm bg-[#1515150D] dark:bg-[#EDF0F510]" />
      <div className="grid flex-1 grid-cols-7 gap-2">
        {Array.from({ length: 35 }).map((_, index) => (
          <div
            key={index}
            className="aspect-square animate-pulse rounded-radius-sm bg-[#15151508] dark:bg-[#EDF0F508]"
            style={{ animationDelay: `${index * 20}ms` }}
          />
        ))}
      </div>
      <div className="flex gap-3">
        <div className="h-10 flex-1 animate-pulse rounded-radius-sm bg-[#1515150D] dark:bg-[#EDF0F510]" />
        <div className="h-10 w-32 animate-pulse rounded-radius-sm bg-[#1515150D] dark:bg-[#EDF0F510]" />
      </div>
    </div>
  )
}

export default function CalComEmbed({ calLink, className = '' }: CalComEmbedProps) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const link = useMemo(() => toCalLink(calLink), [calLink])
  const isDark = mounted && resolvedTheme === 'dark'
  const namespace = useMemo(() => link.replaceAll('/', '-') || 'meeting', [link])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !link) return

    ;(async () => {
      const cal = await getCalApi({ namespace })
      cal('ui', {
        theme: isDark ? 'dark' : 'light',
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#615CCE',
            'cal-brand-emphasis': '#4f4bb8',
            'cal-brand-text': '#ffffff',
            'cal-text': '#0D0D0D',
            'cal-text-emphasis': '#0D0D0D',
            'cal-border': '#1515151A',
            'cal-border-subtle': '#1515150D',
            'cal-bg': '#EDEDED',
            'cal-bg-emphasis': '#ffffff',
          },
          dark: {
            'cal-brand': '#9592DE',
            'cal-brand-emphasis': '#7b78c9',
            'cal-brand-text': '#ffffff',
            'cal-text': '#F2F2F2',
            'cal-text-emphasis': '#F2F2F2',
            'cal-border': '#EDF0F51A',
            'cal-border-subtle': '#EDF0F50D',
            'cal-bg': '#171717',
            'cal-bg-emphasis': '#1f1f1f',
          },
        },
      })
    })()
  }, [mounted, link, namespace, isDark])

  if (!link) return null

  return (
    <div className={`cal-embed relative w-full ${className}`}>
      {!mounted && <CalEmbedSkeleton />}

      {mounted && (
        <Cal
          key={`${namespace}-${isDark ? 'dark' : 'light'}`}
          namespace={namespace}
          calLink={link}
          style={{
            width: '100%',
            height: '100%',
            overflow: 'auto',
            minHeight: '640px',
          }}
          config={{
            layout: 'month_view',
            theme: isDark ? 'dark' : 'light',
          }}
        />
      )}
    </div>
  )
}
