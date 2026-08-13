import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 2. Launch foundations — Home-16 ServicesV14
import LaunchFoundations from './_components/LaunchFoundations'
// 4. Launch journey — Home-20 ProcessV9
import LaunchJourney from './_components/LaunchJourney'
// 5. Specialist teams — Home-15 ElevateBrand
import SpecialistTeams from './_components/SpecialistTeams'
// 1. Hero — Home-19 HeroV19
import StartupLaunchHero from './_components/StartupLaunchHero'
// 3. What's included — Home-12 WhyChooseUs
import WhatsIncluded from './_components/WhatsIncluded'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Startup Launch Package | WOW Superagency',
    description:
      'Turn your idea into a launch-ready business with the essential brand, digital, marketing, and technology foundations in one package.',
    keywords: [
      'startup launch package',
      'startup package',
      'brand foundations',
      'website launch',
      'go-to-market',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Startup Launch Package | WOW Superagency',
      description:
        'Everything you need to launch — brand, website, marketing, social, technology and hosting in one coordinated package.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/packages/startup-launch`,
    },
  }
}

export default async function StartupLaunchPackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-19 HeroV19 */}
        <StartupLaunchHero />
        {/* 2. Foundations — Home-16 ServicesV14 */}
        <LaunchFoundations />
        {/* 3. What's Included — Home-12 WhyChooseUs */}
        <WhatsIncluded />
        {/* 4. Launch Journey — Home-20 ProcessV9 */}
        <LaunchJourney />
        {/* 5. Specialist Teams — Home-15 ElevateBrand */}
        <SpecialistTeams />
        {/* 6. General CTA */} 
        <WowGrowthCta
          accentText="Ready to bring your idea to"
          mainText="life?"
          ariaLabel="Start your launch with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
