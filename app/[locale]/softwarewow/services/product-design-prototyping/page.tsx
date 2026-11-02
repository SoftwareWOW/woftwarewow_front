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
    title: 'Product Design & Prototyping | SoftwareWOW!',
    description: 'Product design and prototyping services from SoftwareWOW.',
    alternates: {
      canonical: `/${locale}/software/product-design-prototyping`,
    },
  }
}

export default async function ProductDesignPrototypingPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return <SoftwareWowServicePlaceholderPage title="Product Design & Prototyping" />
}
