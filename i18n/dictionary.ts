import { cache } from 'react'
import type { Locale } from './config'
import type { Dictionary } from './types'

const loadDictionary = async (locale: Locale): Promise<Dictionary> => {
  const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  'en-CA': () => import('@/messages/en-CA.json').then((m) => m.default),
  'en-US': () => import('@/messages/en-US.json').then((m) => m.default),
  'en-GB': () => import('@/messages/en-GB.json').then((m) => m.default),
  'fr-CA': () => import('@/messages/fr-CA.json').then((m) => m.default),
  'ar-SA': () => import('@/messages/ar-SA.json').then((m) => m.default),
    'ar-AE': () => import('@/messages/ar-AE.json').then((m) => m.default),
  }

  return dictionaries[locale]()
}

export const getDictionary = cache(loadDictionary)
