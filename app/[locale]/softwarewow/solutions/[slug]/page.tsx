import SoftwareWowSolutionDetail from '@/components/wow/softwarewow/SoftwareWowSolutionDetail'
import {
  SOFTWARE_WOW_NAV_SOLUTION_SLUGS,
  getSoftwareWowNavSolution,
} from '@/data/softwareWowNavSolutions'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return SOFTWARE_WOW_NAV_SOLUTION_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const solution = getSoftwareWowNavSolution(slug)

  if (!solution) {
    return { title: 'Solution Not Found | SoftwareWOW!' }
  }

  return {
    title: `${solution.title} | SoftwareWOW!`,
    description: solution.description,
    openGraph: {
      title: `${solution.title} | SoftwareWOW!`,
      description: solution.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/software/${slug}`,
    },
  }
}

export default async function SoftwareWowSolutionPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale as Locale)

  const solution = getSoftwareWowNavSolution(slug)
  if (!solution) notFound()

  return <SoftwareWowSolutionDetail solution={solution} />
}
