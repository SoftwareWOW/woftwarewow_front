import { localizedAlternates } from '@/lib/seo/localized-alternates'
import type { Metadata } from 'next'

export function divisionPageMetadata(
  locale: string,
  localizedPath: string,
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    alternates: localizedAlternates(locale, localizedPath),
  }
}
