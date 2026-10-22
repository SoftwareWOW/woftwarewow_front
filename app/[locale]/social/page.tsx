import SocialGallery from '@/app/[locale]/for-you/social-and-community/_components/SocialGallery'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import WowSuperAgencyClient from '@/components/wow/sections/WowSuperAgencyClient'
import SocialHero from '@/components/wow/wowsocial/SocialHero'
import WowEcosystem from '@/components/wow/WowEcosystem'
import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import { getSuperagencyHomepage } from '@/lib/strapi/fetchers/superagency'
import { mapStrapiEcosystem, mapStrapiTestimonialExtras, mapStrapiTestimonials } from '@/lib/strapi/mappers/superagency'
import { loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { divisionPageMetadata } from '@/lib/seo/division-page-metadata'
import { setRequestLocale } from 'next-intl/server'
import SocialApproachSection from './_components/SocialApproachSection'
import SocialChallengeSection from './_components/SocialChallengeSection'
import SocialClientResultsSection from './_components/SocialClientResultsSection'
import SocialCreativeToolsSection from './_components/SocialCreativeToolsSection'
import SocialFaqSection from './_components/SocialFaqSection'
import SocialFlexibleStartSection from './_components/SocialFlexibleStartSection'
import SocialPortfolioSection from './_components/SocialPortfolioSection'
import SocialProcessSection from './_components/SocialProcessSection'
import SocialServicesSection from './_components/SocialServicesSection'
import { SOCIAL_CTA } from './_components/social-content'
import WowDivisionsMarquee from '@/components/wow/LandascapComponets/WowDivisionsMarquee'

const SOCIAL_GALLERY_PAGE_SLUG = 'social-and-community' as const

export const revalidate = 60

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return divisionPageMetadata(
    locale,
    '/social',
    'WOW Social | Social Media Strategy & Community Growth',
    'Create social strategies, ads, and influencer campaigns that convert engagement into sales.',
  )
}

export default async function WowSocialPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const typedLocale = locale as Locale
  const dictionary = await getDictionary(typedLocale)
  const [cms, galleryPageCms] = await Promise.all([
    getSuperagencyHomepage(typedLocale),
    loadSuperagencyPage(SOCIAL_GALLERY_PAGE_SLUG, typedLocale),
  ])
  const gallerySections = resolvePageSections(galleryPageCms, SOCIAL_GALLERY_PAGE_SLUG)
  const ecosystem = mapStrapiEcosystem(cms.ecosystem, dictionary.ecosystem)
  const superAgencyClient = mapStrapiTestimonials(cms.testimonials, dictionary.superAgencyClient)
  const testimonialExtras = mapStrapiTestimonialExtras(cms.testimonials)

  return (
    <div className="flex w-full min-w-0 flex-col gap-12 overflow-x-clip bg-background transition-colors duration-300 dark:bg-background sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <SocialHero />
      <SocialPortfolioSection />
      <WowDivisionsMarquee />
      <SocialChallengeSection />
      <SocialGallery {...(gallerySections.socialGallery ?? {})} />
      <SocialServicesSection />
      <SocialApproachSection />
      <SocialProcessSection />
      <SocialClientResultsSection />
      <div className="-mt-10 sm:-mt-12 md:-mt-16 lg:-mt-20">
        <WowSuperAgencyClient
          superAgencyClient={superAgencyClient}
          clientImages={
            Object.keys(testimonialExtras.clientImages).length ? testimonialExtras.clientImages : undefined
          }
          reviewCaseStudies={
            Object.keys(testimonialExtras.reviewCaseStudies).length ? testimonialExtras.reviewCaseStudies : undefined
          }
        />
      </div>
      <SocialFlexibleStartSection />
      <SocialCreativeToolsSection />
      <WowEcosystem ecosystem={ecosystem} />
      <SocialFaqSection />
      <div className="-mb-5 sm:-mb-10 md:-mb-15 lg:-mb-20">
        <WowGrowthCta
          accentText={SOCIAL_CTA.accentText}
          mainText={SOCIAL_CTA.mainText}
          ariaLabel={SOCIAL_CTA.ariaLabel}
        />
      </div>
    </div>
  )
}
