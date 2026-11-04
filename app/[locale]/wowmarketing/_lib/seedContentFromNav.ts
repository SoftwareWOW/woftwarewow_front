import type { WowMarketingOffering } from '@/data/wowMarketingNavContent'

const DEFAULT_HERO_IMAGE = {
  src: '/images/hero-img/video-img.png',
  alt: 'WOW Marketing',
} as const

export function seedHeroFromOffering(offering: WowMarketingOffering) {
  return {
    badgeTitle: 'WOW Marketing',
    title: offering.title,
    italicTitle: 'built for growth.',
    description: offering.description,
    images: [{ src: DEFAULT_HERO_IMAGE.src, alt: offering.title || DEFAULT_HERO_IMAGE.alt }],
    marqueeImages: null as { src: string; alt?: string }[] | null,
  }
}

export function seedFeatureItemsFromIncludes(includes: readonly string[]) {
  return includes.map((title) => ({
    title,
    description: 'Delivered with clear goals, measurable outcomes, and ongoing optimization.',
  }))
}

function seedWhatsIncludedFromIncludes(includes: readonly string[]) {
  if (!includes.length) return {}
  return {
    title: "What's included",
    groups: includes.map((title) => ({
      title,
      subtitle: '',
      items: ['Delivered with clear goals, measurable outcomes, and ongoing optimization.'],
    })),
  }
}

export function buildOfferingPageContent(offering: WowMarketingOffering | undefined) {
  if (!offering) {
    throw new Error('buildOfferingPageContent: missing offering — check nav slug and getWowMarketingNavService vs getWowMarketingNavSolution')
  }
  const hero = seedHeroFromOffering(offering)
  const capabilityItems = seedFeatureItemsFromIncludes(offering.includes)

  return {
    hero,
    growthChallenges: {},
    everythingToGrow: {
      eyebrow: 'What we deliver',
      title: offering.title,
      accentTitle: 'in practice',
      description: offering.description,
      items: capabilityItems,
    },
    connectedGrowthSystem: {},
    builtAroundGoals: {},
    specialistTeams: {},
    growthInAction: {},
    ourCapabilities: { items: capabilityItems },
    brandCapabilities: {},
    builtToBeUsed: {},
    ourTools: {},
    brandVisibility: {},
    salesJourneyGap: {},
    revenueCapabilities: { items: capabilityItems },
    leadToCustomer: {},
    salesVisibility: {},
    startWithTheWork: {},
    aiGallery: {},
    aiCapabilities: { items: capabilityItems },
    automationInAction: {},
    aiWithPurpose: {},
    socialProcess: {},
    socialCapabilities: { items: capabilityItems },
    platformPresence: {},
    buildCommunity: {},
    socialGallery: {},
    buildLaunchOurServices: {
      services: capabilityItems.map((item, index) => ({
        slug: `capability-${index + 1}`,
        title: item.title,
        description: item.description,
      })),
    },
    buildAndLaunchRfq: {},
    launchPath: {},
    startupPackageImage: { src: '/images/hero-img/video-img.png', alt: offering.title },
    wowGrowthFramework: {},
    strategicExpertise: {},
    howWeBuildStrategy: {},
    builtAroundYourBusiness: {},
    strategyInAction: {},
    builtForGrowth: {},
    growthPieces: { items: capabilityItems },
    connectedGrowth: {},
    howItWorks: {},
    salesGaps: {},
    whatsIncluded: seedWhatsIncludedFromIncludes(offering.includes),
    accelerationJourney: {},
    connectedExpertise: {},
    builtToPerform: {},
    websiteJourney: {},
    specialistExpertise: {},
    specialistExpertisePackage: {},
    theGap: {},
    transformationPlan: {},
    beforeAfterGap: {},
    transformationPriorities: {},
    modernizationPath: {},
    authorityFoundation: {},
    authorityJourney: {},
    whatMattersMost: {},
    professionalServiceSolutions: { items: capabilityItems },
    clientJourney: {},
    connectedExpertiseIndustry: {},
    recommendedSolutions: {},
    heroAbout: {},
    retailGrowthPillars: {},
    commerceSolutions: { items: capabilityItems },
    commerceJourney: {},
    commerceJourneyPath: {},
    cta: {
      accentText: 'Ready to grow with',
      mainText: 'WOW Marketing?',
      ariaLabel: `Talk to WOW Marketing about ${offering.title}`,
    },
  }
}
