import type { DivisionId } from '@/i18n/division-paths';

/** REST single-type slug: `{apiSlug}-landing-page` */
export const DIVISION_LANDING_API_SLUG: Record<DivisionId, string> = {
  softwareWow: 'softwarewow',
  wowMarketing: 'wowmarketing',
  wowDesign: 'wowdesign',
  wowIntelligence: 'wowintelligence',
  wowSocial: 'wowsocial',
  wowAccelerate: 'wowaccelerate',
  wowWebsites: 'wowwebsites',
  wowImpact: 'wowimpact',
  wowHost: 'wowhost',
  wowHub: 'wowhub',
  wowEvents: 'wowevents',
};

export function divisionLandingApiPath(divisionId: DivisionId): string {
  return `${DIVISION_LANDING_API_SLUG[divisionId]}-landing-page`;
}

/** Stable section keys — must match Strapi `sections.page-images.sectionKey` */
export const LANDING_SECTION_KEYS = {
  softwareWow: {
    hero: 'softwarewow.hero',
    services: 'softwarewow.services',
    framework: 'softwarewow.framework',
    industries: 'softwarewow.industries',
  },
  wowMarketing: {
    hero: 'wowmarketing.hero',
    holdback: 'wowmarketing.holdback',
    framework: 'wowmarketing.framework',
    growthPartner: 'wowmarketing.growthPartner',
    industries: 'wowmarketing.industries',
  },
  wowDesign: {
    hero: 'wowdesign.hero',
    challenge: 'wowdesign.challenge',
    services: 'wowdesign.services',
  },
  wowIntelligence: {
    showcase: 'wowintelligence.showcase',
    clients: 'wowintelligence.clients',
  },
  wowSocial: {
    challenge: 'wowsocial.challenge',
    services: 'wowsocial.services',
  },
  wowAccelerate: {
    hero: 'wowaccelerate.hero',
    framework: 'wowaccelerate.framework',
  },
  wowWebsites: {
    hero: 'wowwebsites.hero',
    problem: 'wowwebsites.problem',
    framework: 'wowwebsites.framework',
  },
  wowImpact: {
    hero: 'wowimpact.hero',
    work: 'wowimpact.work',
    challenge: 'wowimpact.challenge',
    services: 'wowimpact.services',
    approach: 'wowimpact.approach',
  },
  wowHost: {
    hero: 'wowhost.hero',
    hostingSolutions: 'wowhost.hostingSolutions',
    essentials: 'wowhost.essentials',
    infrastructure: 'wowhost.infrastructure',
  },
  wowHub: {
    hero: 'wowhub.hero',
    explore: 'wowhub.explore',
    community: 'wowhub.community',
  },
  wowEvents: {
    hero: 'wowevents.hero',
    work: 'wowevents.work',
    services: 'wowevents.services',
    approach: 'wowevents.approach',
  },
} as const satisfies Record<DivisionId, Record<string, string>>;

export const DIVISIONS_WITH_PORTFOLIO: readonly DivisionId[] = [
  'softwareWow',
  'wowMarketing',
  'wowDesign',
  'wowSocial',
  'wowWebsites',
] as const;