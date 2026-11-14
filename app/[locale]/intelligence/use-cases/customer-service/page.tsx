import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import CustomerServiceUseCaseApproachSection from './_components/CustomerServiceUseCaseApproachSection'
import CustomerServiceUseCaseChallengeSection from './_components/CustomerServiceUseCaseChallengeSection'
import CustomerServiceUseCaseExperienceSection from './_components/CustomerServiceUseCaseExperienceSection'
import CustomerServiceUseCaseHero from './_components/CustomerServiceUseCaseHero'
import CustomerServiceUseCasePoweredSection from './_components/CustomerServiceUseCasePoweredSection'
import { CONTENT, CUSTOMER_SERVICE_USE_CASE_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: CUSTOMER_SERVICE_USE_CASE_PAGE_METADATA.title,
    description: CUSTOMER_SERVICE_USE_CASE_PAGE_METADATA.description,
    openGraph: {
      title: CUSTOMER_SERVICE_USE_CASE_PAGE_METADATA.title,
      description: CUSTOMER_SERVICE_USE_CASE_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/intelligence/use-cases/customer-service`,
    },
  }
}

export default async function IntelligenceCustomerServiceUseCasePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, powered, experience, approach, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — Home-25 HeroV25 (Home-24 dual imagery) */}
      <CustomerServiceUseCaseHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        images={[...hero.images]}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        enableVideoModal={hero.enableVideoModal}
        headingId={hero.headingId}
      />
      {/* 2. Challenge — social/PaidSocialWhatWeManageSection */}
      <CustomerServiceUseCaseChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        capabilityCards={[...challenge.capabilityCards]}
      />
      {/* 3. Powered — for-you/social-and-community SocialProcess (image right) */}
      <CustomerServiceUseCasePoweredSection
        eyebrow={powered.eyebrow}
        titleBefore={powered.titleBefore}
        titleAccent={powered.titleAccent}
        description={powered.description}
        steps={[...powered.steps]}
        image={powered.image}
        sectionId={powered.sectionId}
      />
      {/* 4. Experience — Home-02 ProcessV2 (RetailGrowthPillars) */}
      <CustomerServiceUseCaseExperienceSection
        eyebrow={experience.eyebrow}
        title={experience.title}
        description={experience.description}
        pillars={[...experience.pillars]}
      />
      {/* 5. Approach — Home-19 ProcessV10 (LeadToCustomer) */}
      <CustomerServiceUseCaseApproachSection
        eyebrow={approach.eyebrow}
        titleBefore={approach.titleBefore}
        titleAccent={approach.titleAccent}
        description={approach.description}
        steps={[...approach.steps]}
      />
      {/* 6. CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}