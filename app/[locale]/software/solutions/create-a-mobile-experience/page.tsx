import SoftwareWowSolutionDetail from '@/components/wow/softwarewow/SoftwareWowSolutionDetail'
import { getSoftwareWowNavSolution } from '@/data/softwareWowNavSolutions'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ locale: string }>
}

const slug = 'create-a-mobile-experience'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
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
      canonical: `/${locale}/software/solutions/${slug}`,
    },
  }
}

export default async function CreateMobileExperienceSolutionPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const solution = getSoftwareWowNavSolution(slug)
  if (!solution) notFound()

  return <SoftwareWowSolutionDetail solution={solution} />
}
