import { WowMarketingServiceRoute } from '@/app/[locale]/marketing/_lib/wowMarketingOfferingRoute'
import WhyChooseUsV6 from '@/components/homepage-17/WhyChooseUsV6'
import ServiceContent from '@/components/services-page/ServiceContent'
import ServicesHero from '@/components/services-page/ServicesHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FaqV2 from '@/components/shared/FaqV2'
import LayoutOne from '@/components/shared/LayoutOne'
import { ServicesType } from '@/components/shared/ServicesV8'
import {
  WOW_MARKETING_NAV_SERVICE_SLUGS,
  getWowMarketingNavService,
} from '@/data/wowMarketingNavContent'
import { isWowMarketingServiceSegment } from '@/data/wowMarketingMegaNavRoutes'
import type { Locale } from '@/i18n/config'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const legacy: ServicesType[] = getMarkDownData('data/servicesV3')
  const slugs = new Set<string>([
    ...legacy.map((service) => service.slug),
    ...WOW_MARKETING_NAV_SERVICE_SLUGS,
  ])
  return [...slugs].map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params

  if (isWowMarketingServiceSegment(slug)) {
    const service = getWowMarketingNavService(slug)
    if (!service) return { title: 'Service Not Found | WOW Marketing' }
    return {
      title: `${service.title} | WOW Marketing`,
      description: service.description,
      alternates: { canonical: `/${locale}/marketing/services/${slug}` },
    }
  }

  try {
    const service = getMarkDownContent('data/servicesV3/', slug)
    const postServices = service.data
    return {
      title: postServices?.title ?? 'Service',
      description: postServices?.description,
    }
  } catch {
    return { title: 'Service Not Found' }
  }
}

const ServiceDetails = async ({ params }: Props) => {
  const { locale, slug } = await params
  setRequestLocale(locale as Locale)

  if (isWowMarketingServiceSegment(slug)) {
    return WowMarketingServiceRoute({ params: Promise.resolve({ locale, slug }) })
  }

  let service
  try {
    service = getMarkDownContent('data/servicesV3/', slug)
  } catch {
    notFound()
  }

  const postServices = service.data

  return (
    <LayoutOne>
      <ServicesHero
        badgeTitle={postServices?.badgeTitle}
        title={postServices?.title}
        description={postServices?.description}
        scale
      />
      <ServiceContent service={service} />
      <WhyChooseUsV6 />
      <FaqV2 titleChange />
      <CTA>
        Let&apos;s chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/08.png' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default ServiceDetails
