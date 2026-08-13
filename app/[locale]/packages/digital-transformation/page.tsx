import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 4. Before / After — AutomationInAction
import BeforeAfterGap from './_components/BeforeAfterGap'
// 1. Hero — BrandingCreativeHero / Home-04 HeroV11
import DigitalTransformationHero from './_components/DigitalTransformationHero'
// 6. Path — LaunchPath / ServiceProces
import ModernizationPath from './_components/ModernizationPath'
// 5. Priorities — SpecialistTeams / Home-15 ElevateBrand
import TransformationPriorities from './_components/TransformationPriorities'
// 3. Transformation Plan — RevenueCapabilities / Home-24 ServicesV16
import TransformationPlan from './_components/TransformationPlan'
// 2. The Gap — LearnYourWay / HostingThatFits
import TheGap from './_components/TheGap'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Digital Transformation Package | WOW Superagency',
    description:
      'We identify where technology can make the biggest difference, then bring the right improvements together into one coordinated transformation.',
    keywords: [
      'digital transformation package',
      'systems and integrations',
      'workflow automation',
      'process modernization',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Digital Transformation Package | WOW Superagency',
      description: 'Modernize how your business works — connected systems, automation and a clearer digital setup.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/packages/digital-transformation`,
    },
  }
}

export default async function DigitalTransformationPackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — BrandingCreativeHero / Home-04 HeroV11 */}
        <DigitalTransformationHero />
        {/* 2. The Gap — LearnYourWay / HostingThatFits */}
        <TheGap />
        {/* 3. Transformation Plan — RevenueCapabilities / Home-24 ServicesV16 */}
        <TransformationPlan />
        {/* 4. Before / After — AutomationInAction */}
        <BeforeAfterGap />
        {/* 5. Priorities — SpecialistTeams / Home-15 ElevateBrand */}
        <TransformationPriorities />
        {/* 6. Path — LaunchPath / ServiceProces */}
        <ModernizationPath />
        {/* 7. General CTA */}
        <WowGrowthCta
          accentText="Outgrown the old way?"
          mainText="Let's transform it."
          ariaLabel="Start the Digital Transformation Package with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
