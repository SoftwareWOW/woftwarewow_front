import SoftwareWowServicePlaceholderPage from '../_components/SoftwareWowServicePlaceholderPage'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Software Support & Improvement | SoftwareWOW!',
    description: 'Ongoing software support and improvement from SoftwareWOW.',
    alternates: {
      canonical: `/${locale}/software/software-support-improvement`,
    },
  }
}

export default async function SoftwareSupportImprovementPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return <SoftwareWowServicePlaceholderPage title="Software Support & Improvement" />
}
