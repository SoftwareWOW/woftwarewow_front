import {
  getWowAccelerateNavService,
  getWowAccelerateNavSolution,
} from '@/data/wowAccelerateNavContent'
import type { Metadata } from 'next'

export async function buildOfferingMetadata(
  locale: string,
  slug: string,
  kind: 'service' | 'solution',
): Promise<Metadata> {
  const offering =
    kind === 'service' ? getWowAccelerateNavService(slug) : getWowAccelerateNavSolution(slug)

  if (!offering) {
    return { title: 'Not Found | WOW Accelerate' }
  }

  const path = kind === 'service' ? `accelerate/services/${slug}` : `accelerate/solutions/${slug}`

  return {
    title: `${offering.title} | WOW Accelerate`,
    description: offering.description,
    openGraph: {
      title: `${offering.title} | WOW Accelerate`,
      description: offering.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/${path}`,
    },
  }
}
