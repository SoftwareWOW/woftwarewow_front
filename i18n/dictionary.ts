import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import type { Locale } from './config'
import { routing } from './routing'
import type { Dictionary } from './types'

const loadDictionary = async (locale: string): Promise<Dictionary> => {
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const typedLocale = locale as Locale
  const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
    'en-US': () => import('@/messages/en-US.json').then((m) => m.default),
    'fr-CA': () => import('@/messages/fr-CA.json').then((m) => m.default),
  }

  return dictionaries[typedLocale]()
}

export const getDictionary = cache(loadDictionary)
