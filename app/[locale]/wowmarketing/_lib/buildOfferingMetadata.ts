import {
  getWowMarketingNavService,
  getWowMarketingNavSolution,
} from '@/data/wowMarketingNavContent'
import type { Metadata } from 'next'

export async function buildOfferingMetadata(
  locale: string,
  slug: string,
  kind: 'service' | 'solution',
): Promise<Metadata> {
  const offering =
    kind === 'service' ? getWowMarketingNavService(slug) : getWowMarketingNavSolution(slug)

  if (!offering) {
    return { title: 'Not Found | WOW Marketing' }
  }

  const path = kind === 'service' ? `marketing/services/${slug}` : `marketing/solutions/${slug}`

  return {
    title: `${offering.title} | WOW Marketing`,
    description: offering.description,
    openGraph: {
      title: `${offering.title} | WOW Marketing`,
      description: offering.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/${path}`,
    },
  }
}
