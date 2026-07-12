'use client'

import { useEffect, useState } from 'react'
import { InlineWidget } from 'react-calendly'

type CalendlyEmbedProps = {
  url: string
}

function getCalendlyHeight(width: number) {
  if (width >= 1536) return '1200px'
  if (width >= 1280) return '1100px'
  if (width >= 1024) return '950px'
  if (width >= 768) return '820px'
  return '700px'
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const [height, setHeight] = useState('700px')

  useEffect(() => {
    const updateHeight = () => setHeight(getCalendlyHeight(window.innerWidth))

    updateHeight()
    window.addEventListener('resize', updateHeight)

    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return (
    <div className="w-full overflow-hidden rounded-radius-md border border-black/10 bg-backgroundBody p-2 dark:border-white/10 dark:bg-dark-200 sm:p-3 lg:p-4">
      <div className="w-full min-w-0">
        <InlineWidget
          url={url}
          styles={{
            height,
            minWidth: '280px',
            width: '100%',
          }}
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '615CCE',
            textColor: '171717',
          }}
        />
      </div>
    </div>
  )
}
