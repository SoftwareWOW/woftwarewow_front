import type { WowAccelerateOffering } from '@/data/wowAccelerateNavContent'

const DEFAULT_HERO_IMAGE = {
  src: '/images/wow/Hero/devision/Accelerate.jpg',
  alt: 'WOW Accelerate',
} as const

export function seedHeroFromOffering(offering: WowAccelerateOffering) {
  return {
    badgeTitle: 'WOW Accelerate',
    title: offering.title,
    italicTitle: offering.headline,
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

export function buildOfferingPageContent(offering: WowAccelerateOffering | undefined) {
  if (!offering) {
    throw new Error(
      'buildOfferingPageContent: missing offering — check nav slug and getWowAccelerateNavService vs getWowAccelerateNavSolution',
    )
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
    startupPackageImage: { src: DEFAULT_HERO_IMAGE.src, alt: offering.title },
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
    whatWeBuild: { items: capabilityItems },
    builtForTheFit: {},
    techLaunchPath: {},
    ourApproach: {},
    startWithTheRepetitive: {},
    aiPackageCard: {},
    automationTools: {},
    fromIdeaToAutomation: {},
    automationFaq: {},
    cta: {
      accentText: 'Ready to accelerate with',
      mainText: 'WOW Accelerate?',
      ariaLabel: `Talk to WOW Accelerate about ${offering.title}`,
    },
  }
}
