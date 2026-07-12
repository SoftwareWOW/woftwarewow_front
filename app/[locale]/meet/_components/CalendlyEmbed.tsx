'use client'

import { InlineWidget } from 'react-calendly'

type CalendlyEmbedProps = {
  url: string
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  return (
    <div className="w-full overflow-hidden rounded-radius-md border border-black/10 bg-backgroundBody dark:border-white/10 dark:bg-dark-200">
      <InlineWidget
        url={url}
        styles={{
          height: '700px',
          minWidth: '280px',
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
  )
}
