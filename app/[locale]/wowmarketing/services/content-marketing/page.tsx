import { CONTENT, CONTENT_MARKETING_PAGE_METADATA } from './_content/page-content'
import BrandAuthorityHero from './_components/BrandAuthorityHero'
import AuthorityFoundation from './_components/AuthorityFoundation'
import WhatsIncluded from './_components/WhatsIncluded'
import AuthorityJourney from './_components/AuthorityJourney'
import SpecialistExpertise from './_components/SpecialistExpertise'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: CONTENT_MARKETING_PAGE_METADATA.title,
    description: CONTENT_MARKETING_PAGE_METADATA.description,
    openGraph: {
      title: CONTENT_MARKETING_PAGE_METADATA.title,
      description: CONTENT_MARKETING_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/marketing/services/content-marketing`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const {
    hero,
    authorityFoundation,
    whatsIncluded,
    authorityJourney,
    specialistExpertisePackage,
    cta,
  } = CONTENT

  const { primaryCta, secondaryCta, ...heroProps } = hero
  const { ctaLabel, ctaHref, ...whatsIncludedProps } = whatsIncluded
  const { showWowPrefix, ...specialistProps } = specialistExpertisePackage

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <BrandAuthorityHero
        {...heroProps}
        images={hero.images}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />
      <AuthorityFoundation {...authorityFoundation} />
      <WhatsIncluded {...whatsIncludedProps} ctaLabel={ctaLabel} ctaHref={ctaHref} />
      <AuthorityJourney {...authorityJourney} />
      <SpecialistExpertise {...specialistProps} showWowPrefix={showWowPrefix} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
