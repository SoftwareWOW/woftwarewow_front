import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const localeBase = path.join(root, 'app', '[locale]')

const SOURCES = {
  'marketing-growth': path.join(localeBase, 'for-you', 'marketing-and-growth', '_components'),
  'sales-revenue': path.join(localeBase, 'for-you', 'sales-and-revenue', '_components'),
  branding: path.join(localeBase, 'for-you', 'branding-and-creative', '_components'),
  'build-launch': path.join(localeBase, 'for-you', 'build-and-launch', '_components'),
  'ai-automation': path.join(localeBase, 'for-you', 'ai-and-automation', '_components'),
  social: path.join(localeBase, 'for-you', 'social-and-community', '_components'),
  strategy: path.join(localeBase, 'about', 'strategy-centre', '_components'),
  'business-growth': path.join(localeBase, 'packages', 'business-growth', '_components'),
  'sales-acceleration': path.join(localeBase, 'packages', 'sales-acceleration', '_components'),
  'website-growth-engine': path.join(localeBase, 'packages', 'website-growth-engine', '_components'),
  'digital-transformation': path.join(localeBase, 'packages', 'digital-transformation', '_components'),
  'brand-authority': path.join(localeBase, 'packages', 'brand-authority', '_components'),
  'professional-services': path.join(localeBase, 'industries', 'professional-services', '_components'),
  'retail-ecommerce': path.join(localeBase, 'industries', 'retail-and-ecommerce', '_components'),
}

const PAGES = [
  { kind: 'solutions', slug: 'brand-awareness-visibility', template: 'branding' },
  { kind: 'solutions', slug: 'lead-generation-customer-acquisition', template: 'sales-acceleration' },
  { kind: 'solutions', slug: 'ecommerce-sales-growth', template: 'retail-ecommerce' },
  { kind: 'solutions', slug: 'product-launch-go-to-market', template: 'build-launch' },
  { kind: 'solutions', slug: 'customer-retention-engagement', template: 'social' },
  { kind: 'solutions', slug: 'marketing-performance-optimization', template: 'website-growth-engine' },
  { kind: 'services', slug: 'search-engine-optimization', template: 'marketing-growth' },
  { kind: 'services', slug: 'pay-per-click-advertising', template: 'sales-revenue' },
  { kind: 'services', slug: 'content-marketing', template: 'brand-authority' },
  { kind: 'services', slug: 'email-marketing', template: 'social' },
  { kind: 'services', slug: 'analytics-reporting', template: 'digital-transformation' },
  { kind: 'services', slug: 'local-seo', template: 'professional-services' },
  { kind: 'services', slug: 'marketing-automation', template: 'ai-automation' },
  { kind: 'services', slug: 'lead-generation', template: 'business-growth' },
  { kind: 'services', slug: 'social-media-marketing', template: 'social' },
  { kind: 'services', slug: 'digital-strategy', template: 'strategy' },
]

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name)
    const d = path.join(dest, entry.name)
    if (entry.isDirectory()) copyDir(s, d)
    else fs.copyFileSync(s, d)
  }
}

function pageContentTs(kind, slug) {
  const getter = kind === 'services' ? 'getWowMarketingNavService' : 'getWowMarketingNavSolution'
  return `import { buildOfferingPageContent } from '@/app/[locale]/wowmarketing/_lib/seedContentFromNav'
import { ${getter} } from '@/data/wowMarketingNavContent'

const offering = ${getter}('${slug}')!

export const CONTENT = buildOfferingPageContent(offering)
`
}

const PAGE_BODIES = {
  'marketing-growth': `import { CONTENT } from './_content/page-content'
import MarketingGrowthHero from './_components/MarketingGrowthHero'
import GrowthChallenges from './_components/GrowthChallenges'
import EverythingToGrow from './_components/EverythingToGrow'
import ConnectedGrowthSystem from './_components/ConnectedGrowthSystem'
import BuiltAroundGoals from './_components/BuiltAroundGoals'
import SpecialistTeams from './_components/SpecialistTeams'
import GrowthInAction from './_components/GrowthInAction'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, '__SLUG__', '__KIND__')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <MarketingGrowthHero {...CONTENT.hero} />
      <GrowthChallenges {...CONTENT.growthChallenges} />
      <EverythingToGrow {...CONTENT.everythingToGrow} />
      <ConnectedGrowthSystem {...CONTENT.connectedGrowthSystem} />
      <BuiltAroundGoals {...CONTENT.builtAroundGoals} />
      <SpecialistTeams {...CONTENT.specialistTeams} />
      <GrowthInAction {...CONTENT.growthInAction} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
`,
  'sales-revenue': `import { CONTENT } from './_content/page-content'
import SalesRevenueHero from './_components/SalesRevenueHero'
import SalesJourneyGap from './_components/SalesJourneyGap'
import RevenueCapabilities from './_components/RevenueCapabilities'
import LeadToCustomer from './_components/LeadToCustomer'
import SalesVisibility from './_components/SalesVisibility'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, '__SLUG__', '__KIND__')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <SalesRevenueHero {...CONTENT.hero} />
      <SalesJourneyGap {...CONTENT.salesJourneyGap} />
      <RevenueCapabilities {...CONTENT.revenueCapabilities} />
      <LeadToCustomer {...CONTENT.leadToCustomer} />
      <SalesVisibility {...CONTENT.salesVisibility} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
`,
  branding: `import { CONTENT } from './_content/page-content'
import BrandingCreativeHero from './_components/BrandingCreativeHero'
import OurCapabilities from './_components/OurCapabilities'
import BrandCapabilities from './_components/BrandCapabilities'
import BuiltToBeUsed from './_components/BuiltToBeUsed'
import OurTools from './_components/OurTools'
import BrandVisibility from './_components/BrandVisibility'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, '__SLUG__', '__KIND__')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <BrandingCreativeHero {...CONTENT.hero} />
      <OurCapabilities {...CONTENT.ourCapabilities} />
      <BrandCapabilities {...CONTENT.brandCapabilities} />
      <BuiltToBeUsed {...CONTENT.builtToBeUsed} />
      <OurTools {...CONTENT.ourTools} />
      <BrandVisibility {...CONTENT.brandVisibility} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
`,
  'build-launch': `import { CONTENT } from './_content/page-content'
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
  return buildOfferingMetadata(locale, '__SLUG__', '__KIND__')
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
`,
  'ai-automation': `import { CONTENT } from './_content/page-content'
import AiAutomationHero from './_components/AiAutomationHero'
import StartWithTheWork from './_components/StartWithTheWork'
import AiGallery from './_components/AiGallery'
import AiCapabilities from './_components/AiCapabilities'
import AutomationInAction from './_components/AutomationInAction'
import Marquee from '@/components/wow/LandascapComponets/Marquee'
import AiWithPurpose from './_components/AiWithPurpose'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, '__SLUG__', '__KIND__')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <AiAutomationHero {...CONTENT.hero} />
      <StartWithTheWork {...CONTENT.startWithTheWork} />
      <AiGallery {...CONTENT.aiGallery} />
      <AiCapabilities {...CONTENT.aiCapabilities} />
      <AutomationInAction {...CONTENT.automationInAction} />
      <Marquee />
      <AiWithPurpose {...CONTENT.aiWithPurpose} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
`,
  social: `import { CONTENT } from './_content/page-content'
import SocialCommunityHero from './_components/SocialCommunityHero'
import SocialProcess from './_components/SocialProcess'
import SocialCapabilities from './_components/SocialCapabilities'
import PlatformPresence from './_components/PlatformPresence'
import BuildCommunity from './_components/BuildCommunity'
import SocialGallery from './_components/SocialGallery'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, '__SLUG__', '__KIND__')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta, startupPackageImage } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <SocialCommunityHero {...CONTENT.hero} />
      <SocialProcess {...CONTENT.socialProcess} />
      <SocialCapabilities {...CONTENT.socialCapabilities} />
      <PlatformPresence image={startupPackageImage} {...CONTENT.platformPresence} />
      <BuildCommunity {...CONTENT.buildCommunity} />
      <SocialGallery {...CONTENT.socialGallery} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
`,
  strategy: `import { CONTENT } from './_content/page-content'
import StrategyHero from './_components/StrategyHero'
import WowGrowthFramework from './_components/WowGrowthFramework'
import StrategicExpertise from './_components/StrategicExpertise'
import HowWeBuildStrategy from './_components/HowWeBuildStrategy'
import BuiltAroundYourBusiness from './_components/BuiltAroundYourBusiness'
import GrowthStrategies from '@/components/wow/LandascapComponets/GrowthStrategies'
import StrategyInAction from './_components/StrategyInAction'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, '__SLUG__', '__KIND__')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      <StrategyHero {...CONTENT.hero} />
      <WowGrowthFramework {...CONTENT.wowGrowthFramework} />
      <StrategicExpertise {...CONTENT.strategicExpertise} />
      <HowWeBuildStrategy {...CONTENT.howWeBuildStrategy} />
      <BuiltAroundYourBusiness {...CONTENT.builtAroundYourBusiness} />
      <GrowthStrategies />
      <StrategyInAction {...CONTENT.strategyInAction} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
`,
  'business-growth': `import { CONTENT } from './_content/page-content'
import BusinessGrowthHero from './_components/BusinessGrowthHero'
import BuiltForGrowth from './_components/BuiltForGrowth'
import GrowthPieces from './_components/GrowthPieces'
import ConnectedGrowth from './_components/ConnectedGrowth'
import HowItWorks from './_components/HowItWorks'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, '__SLUG__', '__KIND__')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <BusinessGrowthHero {...CONTENT.hero} images={CONTENT.hero.images} />
      <BuiltForGrowth {...CONTENT.builtForGrowth} />
      <GrowthPieces {...CONTENT.growthPieces} />
      <ConnectedGrowth {...CONTENT.connectedGrowth} />
      <HowItWorks {...CONTENT.howItWorks} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
`,
  'sales-acceleration': `import { CONTENT } from './_content/page-content'
import SalesAccelerationHero from './_components/SalesAccelerationHero'
import SalesGaps from './_components/SalesGaps'
import WhatsIncluded from './_components/WhatsIncluded'
import AccelerationJourney from './_components/AccelerationJourney'
import ConnectedExpertise from './_components/ConnectedExpertise'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, '__SLUG__', '__KIND__')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <SalesAccelerationHero {...CONTENT.hero} />
      <SalesGaps {...CONTENT.salesGaps} />
      <WhatsIncluded {...CONTENT.whatsIncluded} />
      <AccelerationJourney {...CONTENT.accelerationJourney} />
      <ConnectedExpertise {...CONTENT.connectedExpertise} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
`,
  'website-growth-engine': `import { CONTENT } from './_content/page-content'
import WebsiteGrowthHero from './_components/WebsiteGrowthHero'
import BuiltToPerform from './_components/BuiltToPerform'
import WhatsIncluded from './_components/WhatsIncluded'
import WebsiteJourney from './_components/WebsiteJourney'
import SpecialistExpertise from './_components/SpecialistExpertise'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, '__SLUG__', '__KIND__')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <WebsiteGrowthHero {...CONTENT.hero} />
      <BuiltToPerform {...CONTENT.builtToPerform} />
      <WhatsIncluded {...CONTENT.whatsIncluded} />
      <WebsiteJourney {...CONTENT.websiteJourney} />
      <SpecialistExpertise {...CONTENT.specialistExpertise} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
`,
  'digital-transformation': `import { CONTENT } from './_content/page-content'
import DigitalTransformationHero from './_components/DigitalTransformationHero'
import TheGap from './_components/TheGap'
import TransformationPlan from './_components/TransformationPlan'
import BeforeAfterGap from './_components/BeforeAfterGap'
import TransformationPriorities from './_components/TransformationPriorities'
import ModernizationPath from './_components/ModernizationPath'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, '__SLUG__', '__KIND__')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <DigitalTransformationHero {...CONTENT.hero} />
      <TheGap {...CONTENT.theGap} />
      <TransformationPlan {...CONTENT.transformationPlan} />
      <BeforeAfterGap {...CONTENT.beforeAfterGap} />
      <TransformationPriorities {...CONTENT.transformationPriorities} />
      <ModernizationPath {...CONTENT.modernizationPath} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
`,
  'brand-authority': `import { CONTENT } from './_content/page-content'
import BrandAuthorityHero from './_components/BrandAuthorityHero'
import AuthorityFoundation from './_components/AuthorityFoundation'
import WhatsIncluded from './_components/WhatsIncluded'
import AuthorityJourney from './_components/AuthorityJourney'
import SpecialistExpertise from './_components/SpecialistExpertise'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, '__SLUG__', '__KIND__')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <BrandAuthorityHero {...CONTENT.hero} images={CONTENT.hero.images} />
      <AuthorityFoundation {...CONTENT.authorityFoundation} />
      <WhatsIncluded {...CONTENT.whatsIncluded} />
      <AuthorityJourney {...CONTENT.authorityJourney} />
      <SpecialistExpertise {...CONTENT.specialistExpertisePackage} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
`,
  'professional-services': `import { CONTENT } from './_content/page-content'
import ProfessionalServicesHero from './_components/ProfessionalServicesHero'
import WhatMattersMost from './_components/WhatMattersMost'
import ProfessionalServiceSolutions from './_components/ProfessionalServiceSolutions'
import ClientJourney from './_components/ClientJourney'
import ConnectedExpertise from './_components/ConnectedExpertise'
import RecommendedSolutions from './_components/RecommendedSolutions'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, '__SLUG__', '__KIND__')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <ProfessionalServicesHero {...CONTENT.hero} images={CONTENT.hero.images} />
      <WhatMattersMost {...CONTENT.whatMattersMost} />
      <ProfessionalServiceSolutions {...CONTENT.professionalServiceSolutions} />
      <ClientJourney {...CONTENT.clientJourney} />
      <ConnectedExpertise {...CONTENT.connectedExpertiseIndustry} />
      <RecommendedSolutions {...CONTENT.recommendedSolutions} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
`,
  'retail-ecommerce': `import { CONTENT } from './_content/page-content'
import RetailEcommerceHero from './_components/RetailEcommerceHero'
import RetailHeroAbout from './_components/RetailHeroAbout'
import RetailGrowthPillars from './_components/RetailGrowthPillars'
import CommerceSolutions from './_components/CommerceSolutions'
import ClientJourney from './_components/ClientJourney'
import SocialGallery from './_components/SocialGallery'
import CommerceJourneyPath from './_components/CommerceJourneyPath'
import RecommendedSolutions from './_components/RecommendedSolutions'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, '__SLUG__', '__KIND__')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <div>
        <RetailEcommerceHero
          {...CONTENT.hero}
          images={CONTENT.hero.images}
          marqueeImages={CONTENT.hero.marqueeImages}
        />
        <RetailHeroAbout {...CONTENT.heroAbout} />
      </div>
      <RetailGrowthPillars {...CONTENT.retailGrowthPillars} />
      <CommerceSolutions {...CONTENT.commerceSolutions} />
      <ClientJourney {...CONTENT.commerceJourney} />
      <SocialGallery {...CONTENT.socialGallery} />
      <CommerceJourneyPath {...CONTENT.commerceJourneyPath} />
      <RecommendedSolutions {...CONTENT.recommendedSolutions} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
`,
}

for (const page of PAGES) {
  const destDir = path.join(localeBase, 'wowmarketing', page.kind, page.slug)
  const componentsDest = path.join(destDir, '_components')
  const contentDest = path.join(destDir, '_content')
  if (fs.existsSync(componentsDest)) {
    fs.rmSync(componentsDest, { recursive: true, force: true })
  }
  copyDir(SOURCES[page.template], componentsDest)
  fs.mkdirSync(contentDest, { recursive: true })
  fs.writeFileSync(path.join(contentDest, 'page-content.ts'), pageContentTs(page.kind, page.slug))
  const kindSingular = page.kind === 'services' ? 'service' : 'solution'
  const body = PAGE_BODIES[page.template]
    .replaceAll('__KIND__', kindSingular)
    .replaceAll('__SLUG__', page.slug)
  fs.writeFileSync(path.join(destDir, 'page.tsx'), body)
  console.log('scaffolded', page.kind, page.slug)
}

console.log('done', PAGES.length)
