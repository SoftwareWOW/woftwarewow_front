'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import { useState } from 'react'

const tabs = [
  {
    id: 'research',
    label: 'Research',
    title: 'Research',
    description: '',
    featured: false,
  },
  {
    id: 'mobile',
    label: 'Mobile Applications',
    title: 'Mobile Applications',
    description:
      'What specific research are you interested in? Research can range across a variety of fields such as scientific research (e.g., medical, environmental, technological studies).',
    featured: true,
  },
  {
    id: 'modernization',
    label: 'System Modernization',
    title: 'System Modernization',
    description: '',
    featured: false,
  },
  {
    id: 'ai',
    label: 'Artificial Intelligence',
    title: 'Artificial Intelligence',
    description: '',
    featured: false,
  },
]

export default function WowProcessSection() {
  const [active, setActive] = useState('mobile')

  return (
    <section className="px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-4">
          {tabs.map((tab) => {
            const isActive = tab.id === active
            return (
              <RevealWrapper
                key={tab.id}
                as="button"
                type="button"
                onClick={() => setActive(tab.id)}
                className={`min-h-[280px] border border-secondary/10 p-6 text-left transition sm:min-h-[360px] md:min-h-[500px] md:p-8 dark:border-dark ${
                  isActive
                    ? 'bg-secondary text-white dark:bg-dark-200'
                    : 'bg-white text-secondary hover:bg-black/[0.02] dark:bg-dark dark:hover:bg-white/[0.03]'
                }`}>
                {isActive ? (
                  <>
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-medium leading-tight md:text-3xl">{tab.title}</h3>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
                        <path d="M5 16H27M18 7L27 16L18 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    {tab.description && (
                      <p className="text-sm leading-relaxed text-white/70 md:text-base">{tab.description}</p>
                    )}
                  </>
                ) : (
                  <h3 className="text-lg font-medium md:text-2xl">{tab.label}</h3>
                )}
              </RevealWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
