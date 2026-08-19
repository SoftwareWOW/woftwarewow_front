import LayoutOne from '@/components/shared/LayoutOne'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ClientStories from './_components/ClientStories'
import ClientsCta from './_components/ClientsCta'
import ClientsHero from './_components/ClientsHero'
import ClientsMarquee from './_components/ClientsMarquee'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Clients | WOW Superagency',
    description:
      'Businesses that trust WOW Superagency. Explore our client partnerships, success stories, and the results we create together.',
    keywords: [
      'clients',
      'partnerships',
      'case studies',
      'success stories',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Clients | WOW Superagency',
      description:
        'Businesses that trust WOW Superagency. Explore our client partnerships, success stories, and the results we create together.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/clients`,
    },
  }
}

export default async function ClientsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — industries/technology-and-saas/TechnologyHero */}
        <ClientsHero />
        {/* 2. Our Clients — wow/shared/Marquee (home page) */}
        <ClientsMarquee />
        {/* 3. Client Stories — portfolio/FeaturedWork alternating layout */}
        <ClientStories />
        {/* 4. Global CTA — WowGrowthCta defaults */}
        <ClientsCta />
      </div>
    </LayoutOne>
  )
}
