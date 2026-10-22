import { getSiteUrl } from '@/lib/seo/site-url'
import { locales } from '@/i18n/config'
import { promoDivisionSlugs } from '@/i18n/division-paths'

export function GET() {
  const siteUrl = getSiteUrl()
  const primaryLocale = locales[0] ?? 'en-US'

  const lines = [
    '# WOW Superagency',
    '',
    '> Integrated technology, marketing, design, AI, and growth services for ambitious businesses.',
    '',
    '## Primary entry',
    `- [Home (${primaryLocale})](${siteUrl}/${primaryLocale})`,
    '',
    '## Key pages',
    `- [Services](${siteUrl}/${primaryLocale}/services)`,
    `- [Portfolio](${siteUrl}/${primaryLocale}/portfolio/recent)`,
    `- [Blog](${siteUrl}/${primaryLocale}/blog)`,
    `- [FAQ](${siteUrl}/${primaryLocale}/faq)`,
    `- [About](${siteUrl}/${primaryLocale}/about)`,
    `- [Partners](${siteUrl}/${primaryLocale}/about/partners)`,
    '',
    '## Divisions',
    ...promoDivisionSlugs.map(
      (slug) => `- [${slug}](${siteUrl}/${primaryLocale}/${slug})`,
    ),
    '',
    '## Machine-readable',
    `- [Sitemap](${siteUrl}/sitemap.xml)`,
    `- [Robots](${siteUrl}/robots.txt)`,
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
