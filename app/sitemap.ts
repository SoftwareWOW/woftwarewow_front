import { locales } from '@/i18n/config'
import { promoDivisionSlugs } from '@/i18n/division-paths'
import { getSiteUrl } from '@/lib/seo/site-url'
import type { MetadataRoute } from 'next'

/** Locale-prefixed marketing paths (no leading slash on segments). */
const localeMarketingPaths = [
  '',
  '/about',
  '/about/partners',
  '/blog',
  '/faq',
  '/services',
  '/partners',
  '/locations',
  '/portfolio/recent',
  '/pricing',
  '/team',
  ...promoDivisionSlugs.map((slug) => `/${slug}`),
]

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const entries: MetadataRoute.Sitemap = []
  const now = new Date()

  for (const locale of locales) {
    for (const path of localeMarketingPaths) {
      const url = path ? `${siteUrl}/${locale}${path}` : `${siteUrl}/${locale}`
      entries.push({
        url,
        lastModified: now,
        changeFrequency: path === '' || path === '/blog' ? 'daily' : 'weekly',
        priority: path === '' ? 1 : path.startsWith('/about') ? 0.7 : 0.8,
      })
    }
  }

  return entries
}
