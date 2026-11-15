import DivisionMegaNavComingSoonPage from '@/components/wow/divisions/DivisionMegaNavComingSoonPage'
import type { Locale } from '@/i18n/config'
import type { DivisionMegaNavRoute, DivisionMegaNavRouteConfig } from '@/lib/divisions/divisionMegaNavTypes'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

type SlugPageFactoryOptions = {
  config: DivisionMegaNavRouteConfig
  segment: 'services' | 'solutions'
  getRouteBySlug: (slug: string) => DivisionMegaNavRoute | undefined
  slugs: string[]
}

export function createDivisionMegaNavSlugPage({
  config,
  segment,
  getRouteBySlug,
  slugs,
}: SlugPageFactoryOptions) {
  type Props = { params: Promise<{ locale: string; slug: string }> }

  function generateStaticParams() {
    return slugs
      .filter((slug) => getRouteBySlug(slug)?.segment === segment)
      .map((slug) => ({ slug }))
  }

  async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params
    const route = getRouteBySlug(slug)
    if (!route || route.segment !== segment) {
      return { title: config.divisionLabel }
    }

    const title = `${route.title} | ${config.divisionLabel}`
    return {
      title,
      description: 'Coming soon.',
      alternates: {
        canonical: `/${locale}/${config.divisionSlug}/${segment}/${slug}`,
      },
    }
  }

  async function Page({ params }: Props) {
    const { locale, slug } = await params
    setRequestLocale(locale as Locale)

    const route = getRouteBySlug(slug)
    if (!route || route.segment !== segment) notFound()

    return (
      <DivisionMegaNavComingSoonPage divisionLabel={config.divisionLabel} title={route.title} />
    )
  }

  return { generateStaticParams, generateMetadata, Page }
}