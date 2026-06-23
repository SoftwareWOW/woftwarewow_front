import { cache } from 'react'
import type { Locale } from './config'
import type { Dictionary } from './types'

const loadDictionary = async (locale: Locale): Promise<Dictionary> => {
  const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
    'en-US': () => import('@/messages/en-US.json').then((m) => m.default),
    'fr-CA': () => import('@/messages/fr-CA.json').then((m) => m.default),
  }

  return dictionaries[locale]()
}

export const getDictionary = cache(loadDictionary)
