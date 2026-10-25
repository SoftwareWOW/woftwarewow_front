import TestimonialV2 from '@/components/shared/TestimonialV2'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import WowEcosystem from '@/components/wow/WowEcosystem'
import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import { getSuperagencyHomepage } from '@/lib/strapi/fetchers/superagency'
import { mapStrapiEcosystem } from '@/lib/strapi/mappers/superagency'
import { divisionPageMetadata } from '@/lib/seo/division-page-metadata'
import { setRequestLocale } from 'next-intl/server'
import EventsApproachSection from './_components/EventsApproachSection'
import EventsChallengeSection from './_components/EventsChallengeSection'
import EventsFaqSection from './_components/EventsFaqSection'
import EventsHero from './_components/EventsHero'
import EventsPackagesSection from './_components/EventsPackagesSection'
import EventsProcessSection from './_components/EventsProcessSection'
import EventsServicesSection from './_components/EventsServicesSection'
import EventsToolsSection from './_components/EventsToolsSection'
import EventsWorkSection from './_components/EventsWorkSection'
import { EVENTS_CTA } from './_components/events-content'
import WowDivisionsMarquee from '@/components/wow/LandascapComponets/WowDivisionsMarquee'

export const revalidate = 60

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return divisionPageMetadata(
    locale,
    '/events',
    'WOW Events | WOW Superagency',
    'Corporate conferences, brand launches, networking, and hybrid events—experiences that connect people and leave a lasting impression.',
  )
}

export default async function WowEventsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const typedLocale = locale as Locale
  const dictionary = await getDictionary(typedLocale)
  const cms = await getSuperagencyHomepage(typedLocale)
  const ecosystem = mapStrapiEcosystem(cms.ecosystem, dictionary.ecosystem)

  return (
    <div className="flex w-full min-w-0 flex-col gap-12 overflow-x-clip bg-background transition-colors duration-300 dark:bg-background sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <EventsHero />
      <EventsWorkSection />
      <WowDivisionsMarquee />
      <EventsChallengeSection />
      <EventsServicesSection />
      <EventsApproachSection />
      <EventsProcessSection />
      <TestimonialV2 />
      <EventsPackagesSection />
      <EventsToolsSection />
      <WowEcosystem ecosystem={ecosystem} />
      <div className="relative z-0 min-w-0 overflow-visible">
        <EventsFaqSection />
      </div>
      <div className="-mb-5 sm:-mb-10 md:-mb-15 lg:-mb-20">
        <WowGrowthCta
          accentText={EVENTS_CTA.accentText}
          mainText={EVENTS_CTA.mainText}
          ariaLabel={EVENTS_CTA.ariaLabel}
        />
      </div>
    </div>
  )
}
