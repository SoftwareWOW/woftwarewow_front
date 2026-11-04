import { CONTENT } from './_content/page-content'
import BuildLaunchHero from './_components/BuildLaunchHero'
import BuildLaunchOurServices from './_components/BuildLaunchOurServices'
import BuildAndLaunchRfq from './_components/BuildAndLaunchRfq'
import LaunchPath from './_components/LaunchPath'
import StartupPackage from './_components/StartupPackage'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, 'product-launch-go-to-market', 'solution')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta, buildLaunchOurServices, startupPackageImage } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <BuildLaunchHero {...CONTENT.hero} />
      <BuildLaunchOurServices {...buildLaunchOurServices} />
      <BuildAndLaunchRfq {...CONTENT.buildAndLaunchRfq} />
      <LaunchPath {...CONTENT.launchPath} />
      <StartupPackage image={startupPackageImage} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
