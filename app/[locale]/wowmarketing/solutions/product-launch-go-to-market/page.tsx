import {
  CONTENT,
  PRODUCT_LAUNCH_PAGE_METADATA,
} from './_content/page-content'
import BuildLaunchHero from './_components/BuildLaunchHero'
import BuildLaunchOurServices from './_components/BuildLaunchOurServices'
import LaunchPath from './_components/LaunchPath'
import StartupPackage from './_components/StartupPackage'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: PRODUCT_LAUNCH_PAGE_METADATA.title,
    description: PRODUCT_LAUNCH_PAGE_METADATA.description,
    openGraph: {
      title: PRODUCT_LAUNCH_PAGE_METADATA.title,
      description: PRODUCT_LAUNCH_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/marketing/solutions/product-launch-go-to-market`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta, hero, buildLaunchOurServices, launchPath, startupPackage, startupPackageImage } =
    CONTENT
  const {
    primaryCtaLabel,
    secondaryCtaLabel,
    primaryCtaHref,
    secondaryCtaHref,
    ...heroProps
  } = hero
  const { ctaLabel: launchPathCtaLabel, ...launchPathProps } = launchPath
  const {
    secondaryCtaLabel: packageSecondaryCtaLabel,
    secondaryCtaHref: packageSecondaryCtaHref,
    ...startupPackageProps
  } = startupPackage

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <BuildLaunchHero
        {...heroProps}
        primaryCtaLabel={primaryCtaLabel}
        secondaryCtaLabel={secondaryCtaLabel}
        primaryCtaHref={primaryCtaHref}
        secondaryCtaHref={secondaryCtaHref}
      />
      <BuildLaunchOurServices {...buildLaunchOurServices} />
      <LaunchPath {...launchPathProps} ctaLabel={launchPathCtaLabel} />
      <StartupPackage
        {...startupPackageProps}
        image={startupPackageImage}
        secondaryCtaLabel={packageSecondaryCtaLabel}
        secondaryCtaHref={packageSecondaryCtaHref}
      />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
