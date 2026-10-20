import BusinessProblems from '@/components/wow/wowintelligence/BusinessProblems'
import IntelligenceClients from '@/components/wow/wowintelligence/IntelligenceClients'
import IntelligenceRfq from '@/components/wow/wowintelligence/IntelligenceRfq'
import Marquess from '@/components/wow/LandascapComponets/Marquee'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import { divisionPageMetadata } from '@/lib/seo/division-page-metadata'
import { setRequestLocale } from 'next-intl/server'
import IntelligenceAiSolutionsSection from './_components/IntelligenceAiSolutionsSection'
import IntelligenceFlexibleStartSection from './_components/IntelligenceFlexibleStartSection'
import IntelligenceHowWeWorkSection from './_components/IntelligenceHowWeWorkSection'
import IntelligencePracticalAiHeroSection from './_components/IntelligencePracticalAiHeroSection'
import IntelligenceProblemSection from './_components/IntelligenceProblemSection'
import IntelligenceShowcaseSection from './_components/IntelligenceShowcaseSection'
import { INTELLIGENCE_CTA, INTELLIGENCE_TESTIMONIALS } from './_components/intelligence-content'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return divisionPageMetadata(
    locale,
    '/intelligence',
    'WOW Intelligence | AI Solutions & Automation',
    'AI assistants, predictive analytics, and workflow automation that sharpen decisions, reduce manual work, and accelerate results.',
  )
}

export default async function WowIntelligencePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <div className="flex w-full min-w-0 flex-col gap-12 overflow-x-clip bg-background transition-colors duration-300 dark:bg-background sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      <IntelligencePracticalAiHeroSection />
      <Marquess />
      <IntelligenceProblemSection />
      <IntelligenceShowcaseSection />
      <IntelligenceAiSolutionsSection />
      <BusinessProblems />
      <IntelligenceHowWeWorkSection />
      <IntelligenceClients
        eyebrow={INTELLIGENCE_TESTIMONIALS.eyebrow}
        title={INTELLIGENCE_TESTIMONIALS.title}
      />
      <IntelligenceFlexibleStartSection />
      <IntelligenceRfq />
      <WowGrowthCta
        accentText={INTELLIGENCE_CTA.accentText}
        mainText={INTELLIGENCE_CTA.mainText}
        ariaLabel={INTELLIGENCE_CTA.ariaLabel}
      />
    </div>
  )
}
