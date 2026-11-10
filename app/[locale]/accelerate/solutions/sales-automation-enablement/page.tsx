import {
  CONTENT,
  SALES_AUTOMATION_ENABLEMENT_PAGE_METADATA,
} from './_content/page-content'
import AiAutomationHero from './_components/AiAutomationHero'
import AiPackageCard from './_components/AiPackageCard'
import AutomationTools from './_components/AutomationTools'
import FromIdeaToAutomation from './_components/FromIdeaToAutomation'
import AutomationFaq from './_components/AutomationFaq'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SALES_AUTOMATION_ENABLEMENT_PAGE_METADATA.title,
    description: SALES_AUTOMATION_ENABLEMENT_PAGE_METADATA.description,
    openGraph: {
      title: SALES_AUTOMATION_ENABLEMENT_PAGE_METADATA.title,
      description: SALES_AUTOMATION_ENABLEMENT_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/accelerate/solutions/sales-automation-enablement`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { cta, hero, aiPackageCard, automationTools, fromIdeaToAutomation, automationFaq } = CONTENT
  const {
    primaryCtaLabel,
    secondaryCtaLabel,
    primaryCtaHref,
    secondaryCtaHref,
    images,
    ...heroProps
  } = hero

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <AiAutomationHero
        {...heroProps}
        images={images}
        primaryCtaLabel={primaryCtaLabel}
        secondaryCtaLabel={secondaryCtaLabel}
        primaryCtaHref={primaryCtaHref}
        secondaryCtaHref={secondaryCtaHref}
      />
      <AiPackageCard {...aiPackageCard} />
      <AutomationTools {...automationTools} />
      <FromIdeaToAutomation {...fromIdeaToAutomation} />
      <AutomationFaq {...automationFaq} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
