import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import AuthorityFoundation from './_components/AuthorityFoundation'
import AuthorityJourney from './_components/AuthorityJourney'
import BrandAuthorityHero from './_components/BrandAuthorityHero'
import SpecialistExpertise from './_components/SpecialistExpertise'
import WhatsIncluded from './_components/WhatsIncluded'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Brand Authority Package | WOW Superagency',
    description: 'For entrepreneurs and companies building reputation.',
    keywords: [
      'brand authority package',
      'personal branding',
      'thought leadership',
      'reputation',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Brand Authority Package | WOW Superagency',
      description: 'For entrepreneurs and companies building reputation.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/packages/brand-authority`,
    },
  }
}

export default async function BrandAuthorityPackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Build a Brand People Trust — Home-19 HeroV19 */}
        <BrandAuthorityHero />
        {/* 2. Build Your Authority Foundation — Home-16 ServicesV14 */}
        <AuthorityFoundation />
        {/* 3. What’s Included — Home-12 WhyChooseUs */}
        <WhatsIncluded />
        {/* 4. Your Authority Journey — Home-20 ProcessV9 */}
        <AuthorityJourney />
        {/* 5. One Package. Specialist Expertise. — Home-15 ElevateBrand */}
        <SpecialistExpertise />
        {/* 6. Ready to Build Your Authority? */}
        <WowGrowthCta
          accentText="Make your expertise"
          mainText="impossible to overlook."
          ariaLabel="Start the Brand Authority Package with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
