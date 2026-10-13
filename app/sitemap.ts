import { locales } from '@/i18n/config'
import { promoDivisionSlugs } from '@/i18n/division-paths'
import type { MetadataRoute } from 'next'

const siteUrl = process.env.SITE_URL?.replace(/\/$/, '') ?? 'https://www.wow.onl'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const slug of promoDivisionSlugs) {
      entries.push({
        url: `${siteUrl}/${locale}/${slug}`,
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    }
  }

  return entries
}
