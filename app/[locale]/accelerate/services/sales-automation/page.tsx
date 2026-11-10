import { CONTENT, SALES_AUTOMATION_PAGE_METADATA } from './_content/page-content'
import AiAutomationHero from './_components/AiAutomationHero'
import AiCapabilities from './_components/AiCapabilities'
import AutomationInAction from './_components/AutomationInAction'
import ConnectedMarketing from './_components/ConnectedMarketing'
import AiWithPurpose from './_components/AiWithPurpose'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SALES_AUTOMATION_PAGE_METADATA.title,
    description: SALES_AUTOMATION_PAGE_METADATA.description,
    openGraph: {
      title: SALES_AUTOMATION_PAGE_METADATA.title,
      description: SALES_AUTOMATION_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/accelerate/services/sales-automation`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, aiCapabilities, automationInAction, connectedMarketing, aiWithPurpose, cta } = CONTENT

  const { primaryCta, secondaryCta, ...heroProps } = hero
  const { accentTitle: capabilitiesAccent, titleSuffix: capabilitiesSuffix, ...capabilitiesProps } =
    aiCapabilities
  const { beforeLabel, afterLabel, ...automationProps } = automationInAction
  const { accentTitle: purposeAccent, ctaLabel: purposeCtaLabel, ...purposeProps } = aiWithPurpose

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <AiAutomationHero {...heroProps} primaryCta={primaryCta} secondaryCta={secondaryCta} />
      <AiCapabilities
        {...capabilitiesProps}
        accentTitle={capabilitiesAccent}
        titleSuffix={capabilitiesSuffix}
      />
      <AutomationInAction {...automationProps} beforeLabel={beforeLabel} afterLabel={afterLabel} />
      <ConnectedMarketing {...connectedMarketing} />
      <AiWithPurpose {...purposeProps} accentTitle={purposeAccent} ctaLabel={purposeCtaLabel} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
