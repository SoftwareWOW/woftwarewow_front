export type HeaderPageFamily =
  | 'company-about'
  | 'explore'
  | 'explore-industry'
  | 'for-you-solution'
  | 'for-you-package'
  | 'more';

export type CmsSectionType =
  | 'hero'
  | 'page-rfq'
  | 'page-technologies'
  | 'page-projects'
  | 'page-images'
  | 'page-partners'
  | 'page-process'
  | 'page-faq'
  | 'page-blog-posts'
  | 'page-career-jobs'
  | 'page-team-members'
  | 'page-office-locations'
  | 'page-client-logos'
  | null;

export type PageSectionManifest = {
  identifier: string;
  family: HeaderPageFamily;
  frontendRoute: string;
  sections: Array<{ sectionKey: string; cms: CmsSectionType }>;
};

export type PageField = {
  name: string;
  component: string;
  sectionKey: string;
};

export type SuperagencyPageManifest = {
  slug: string;
  route: string;
  family: HeaderPageFamily;
  fields: PageField[];
};

const INDUSTRY_SLUGS = [
  'professional-services',
  'startups-and-entrepreneurs',
  'retail-and-ecommerce',
  'healthcare-and-wellness',
  'hospitality-and-tourism',
  'finance-and-real-estate',
  'organizations-and-nonprofits',
  'education-and-training',
  'technology-and-saas',
] as const;

const FOR_YOU_SLUGS = [
  'build-and-launch',
  'marketing-and-growth',
  'software-and-technology',
  'social-and-community',
  'ai-and-automation',
  'sales-and-revenue',
  'branding-and-creative',
  'hosting-and-infrastructure',
  'learning-and-events',
] as const;

const PACKAGE_SLUGS = [
  'startup-launch',
  'business-growth',
  'digital-transformation',
  'ai-automation',
  'brand-authority',
  'saas-product-development',
  'website-growth-engine',
  'sales-acceleration',
  'enterprise-infrastructure',
] as const;

export const HEADER_PAGE_SECTION_REGISTRY: PageSectionManifest[] = [
  {
    identifier: 'about',
    family: 'company-about',
    frontendRoute: '/about',
    sections: [
      { sectionKey: 'page-hero', cms: 'hero' },
      { sectionKey: 'technology-stack', cms: 'page-technologies' },
      { sectionKey: 'team', cms: 'page-team-members' },
      { sectionKey: 'partners', cms: 'page-partners' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'about-strategy-centre',
    family: 'company-about',
    frontendRoute: '/about/strategy-centre',
    sections: [
      { sectionKey: 'strategy-hero', cms: 'hero' },
      { sectionKey: 'wow-growth-framework', cms: 'page-process' },
      { sectionKey: 'how-we-build-strategy', cms: 'page-process' },
      { sectionKey: 'strategy-in-action', cms: 'page-projects' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'about-why-smbs',
    family: 'company-about',
    frontendRoute: '/about/why-smbs',
    sections: [
      { sectionKey: 'why-smbs-hero', cms: 'hero' },
      { sectionKey: 'smb-gallery', cms: 'page-images' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'about-partners',
    family: 'company-about',
    frontendRoute: '/about/partners',
    sections: [
      { sectionKey: 'partners-hero', cms: 'hero' },
      { sectionKey: 'partner-network', cms: 'page-partners' },
      { sectionKey: 'ways-to-partner', cms: 'page-technologies' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'about-why-us',
    family: 'company-about',
    frontendRoute: '/about/why-us',
    sections: [
      { sectionKey: 'why-us-hero', cms: 'hero' },
      { sectionKey: 'strategy-to-results', cms: 'page-process' },
      { sectionKey: 'built-around-business', cms: 'page-process' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'team',
    family: 'company-about',
    frontendRoute: '/team',
    sections: [
      { sectionKey: 'team-hero', cms: 'hero' },
      { sectionKey: 'team-members', cms: 'page-team-members' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'portfolio',
    family: 'explore',
    frontendRoute: '/portfolio',
    sections: [
      { sectionKey: 'portfolio-hero', cms: 'hero' },
      { sectionKey: 'featured-work', cms: 'page-projects' },
      { sectionKey: 'explore-work', cms: 'page-projects' },
      { sectionKey: 'how-we-create-impact', cms: 'page-process' },
      { sectionKey: 'expertise-behind-work', cms: 'page-technologies' },
      { sectionKey: 'portfolio-cta', cms: null },
    ],
  },
  {
    identifier: 'portfolio-recent',
    family: 'explore',
    frontendRoute: '/portfolio/recent',
    sections: [
      { sectionKey: 'recent-work-hero', cms: 'hero' },
      { sectionKey: 'recent-work-explorer', cms: 'page-projects' },
      { sectionKey: 'recent-work-cta', cms: null },
    ],
  },
  {
    identifier: 'clients',
    family: 'explore',
    frontendRoute: '/clients',
    sections: [
      { sectionKey: 'clients-hero', cms: 'hero' },
      { sectionKey: 'clients-marquee', cms: 'page-client-logos' },
      { sectionKey: 'client-stories', cms: 'page-projects' },
      { sectionKey: 'clients-cta', cms: null },
    ],
  },
  {
    identifier: 'partners',
    family: 'explore',
    frontendRoute: '/partners',
    sections: [
      { sectionKey: 'partners-hero', cms: 'hero' },
      { sectionKey: 'partner-network', cms: 'page-partners' },
      { sectionKey: 'how-we-partner', cms: 'page-process' },
      { sectionKey: 'why-partner-with-wow', cms: 'page-technologies' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'locations',
    family: 'explore',
    frontendRoute: '/locations',
    sections: [
      { sectionKey: 'locations-hero', cms: 'hero' },
      { sectionKey: 'locations-presence', cms: 'page-office-locations' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'industries',
    family: 'explore',
    frontendRoute: '/industries',
    sections: [
      { sectionKey: 'industries-hero', cms: 'hero' },
      { sectionKey: 'industry-capabilities', cms: 'page-technologies' },
    ],
  },
  ...INDUSTRY_SLUGS.map(
    (slug): PageSectionManifest => ({
      identifier: slug,
      family: 'explore-industry',
      frontendRoute: `/industries/${slug}`,
      sections: [
        { sectionKey: `${slug}-hero`, cms: 'hero' },
        { sectionKey: 'capabilities', cms: 'page-technologies' },
        { sectionKey: 'solutions', cms: 'page-technologies' },
        { sectionKey: 'journey', cms: 'page-process' },
        { sectionKey: 'gallery', cms: 'page-images' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
    }),
  ),
  ...FOR_YOU_SLUGS.map(
    (slug): PageSectionManifest => ({
      identifier: slug,
      family: 'for-you-solution',
      frontendRoute: `/for-you/${slug}`,
      sections: [
        { sectionKey: `${slug}-hero`, cms: 'hero' },
        { sectionKey: 'capabilities', cms: 'page-technologies' },
        { sectionKey: 'process', cms: 'page-process' },
        { sectionKey: 'projects', cms: 'page-projects' },
        { sectionKey: 'gallery', cms: 'page-images' },
        { sectionKey: 'rfq', cms: 'page-rfq' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
    }),
  ),
  ...PACKAGE_SLUGS.map(
    (slug): PageSectionManifest => ({
      identifier: slug,
      family: 'for-you-package',
      frontendRoute: `/packages/${slug}`,
      sections: [
        { sectionKey: `${slug}-hero`, cms: 'hero' },
        { sectionKey: 'whats-included', cms: 'page-technologies' },
        { sectionKey: 'journey', cms: 'page-process' },
        { sectionKey: 'faq', cms: 'page-faq' },
        { sectionKey: 'projects', cms: 'page-projects' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
    }),
  ),
  {
    identifier: 'meet',
    family: 'more',
    frontendRoute: '/meet',
    sections: [
      { sectionKey: 'meet-hero', cms: 'hero' },
      { sectionKey: 'why-meet-with-us', cms: 'page-technologies' },
      { sectionKey: 'meeting-information', cms: 'page-technologies' },
      { sectionKey: 'cal-com-section', cms: null },
      { sectionKey: 'meet-faq', cms: 'page-faq' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'thinktank',
    family: 'more',
    frontendRoute: '/thinktank',
    sections: [
      { sectionKey: 'thinktank-hero', cms: 'hero' },
      { sectionKey: 'why-thinktank', cms: 'page-technologies' },
      { sectionKey: 'before-we-meet', cms: 'page-technologies' },
      { sectionKey: 'thinktank-booking', cms: null },
      { sectionKey: 'thinktank-faq', cms: 'page-faq' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'quotation',
    family: 'more',
    frontendRoute: '/quotation',
    sections: [
      { sectionKey: 'quotation-hero', cms: 'hero' },
      { sectionKey: 'request-details', cms: 'page-rfq' },
      { sectionKey: 'how-it-works', cms: 'page-process' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'whitelabel',
    family: 'more',
    frontendRoute: '/whitelabel',
    sections: [
      { sectionKey: 'whitelabel-hero', cms: 'hero' },
      { sectionKey: 'capabilities', cms: 'page-technologies' },
      { sectionKey: 'how-we-partner', cms: 'page-process' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'affiliate',
    family: 'more',
    frontendRoute: '/affiliate',
    sections: [
      { sectionKey: 'affiliate-hero', cms: 'hero' },
      { sectionKey: 'affiliate-benefits', cms: 'page-technologies' },
      { sectionKey: 'affiliate-journey', cms: 'page-process' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'helpsupport',
    family: 'more',
    frontendRoute: '/helpsupport',
    sections: [
      { sectionKey: 'help-hero', cms: 'hero' },
      { sectionKey: 'support-categories', cms: 'page-technologies' },
      { sectionKey: 'support-contact', cms: null },
    ],
  },
  {
    identifier: 'brandkit',
    family: 'more',
    frontendRoute: '/brandkit',
    sections: [
      { sectionKey: 'brandkit-hero', cms: 'hero' },
      { sectionKey: 'brand-assets', cms: 'page-images' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'blog',
    family: 'more',
    frontendRoute: '/blog',
    sections: [
      { sectionKey: 'blog-hero', cms: 'hero' },
      { sectionKey: 'marquee', cms: null },
      { sectionKey: 'blog-insight', cms: 'page-blog-posts' },
      { sectionKey: 'blog-case-studies', cms: 'page-blog-posts' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'career',
    family: 'more',
    frontendRoute: '/career',
    sections: [
      { sectionKey: 'career-hero', cms: 'hero' },
      { sectionKey: 'company-gallery', cms: 'page-images' },
      { sectionKey: 'benefits-career', cms: 'page-technologies' },
      { sectionKey: 'jobs', cms: 'page-career-jobs' },
      { sectionKey: 'communities', cms: 'page-technologies' },
      { sectionKey: 'career-rfq', cms: 'page-rfq' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'clientportal',
    family: 'more',
    frontendRoute: '/clientportal',
    sections: [
      { sectionKey: 'clientportal-hero', cms: 'hero' },
      { sectionKey: 'client-portal-support', cms: 'page-technologies' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
];

const CMS_TO_COMPONENT: Record<Exclude<CmsSectionType, null | 'hero'>, string> = {
  'page-rfq': 'sections.page-rfq',
  'page-technologies': 'sections.page-technologies',
  'page-projects': 'sections.page-projects',
  'page-images': 'sections.page-images',
  'page-partners': 'sections.page-partners',
  'page-process': 'sections.page-process',
  'page-faq': 'sections.page-faq',
  'page-blog-posts': 'sections.page-blog-posts',
  'page-career-jobs': 'sections.page-career-jobs',
  'page-team-members': 'sections.page-team-members',
  'page-office-locations': 'sections.page-office-locations',
  'page-client-logos': 'sections.page-client-logos',
};

const FIELD_OVERRIDES: Partial<Record<string, PageField[]>> = {
  about: [
    { name: 'heroAbout', component: 'sections.hero-about', sectionKey: 'hero-about' },
    { name: 'techStack', component: 'sections.page-technologies', sectionKey: 'technology-stack' },
    { name: 'team', component: 'sections.page-team-members', sectionKey: 'team' },
    {
      name: 'solutionToChallenges',
      component: 'sections.page-technologies',
      sectionKey: 'solution-to-challenges',
    },
  ],
};

function sectionKeyToFieldName(sectionKey: string) {
  return sectionKey.replace(/-([a-z0-9])/g, (_, char: string) => char.toUpperCase());
}

function fieldsFromRegistry(
  identifier: string,
  sections: Array<{ sectionKey: string; cms: CmsSectionType }>,
): PageField[] {
  if (FIELD_OVERRIDES[identifier]) {
    return FIELD_OVERRIDES[identifier]!;
  }

  const fields: PageField[] = [];

  for (const section of sections) {
    if (!section.cms || section.cms === 'hero') continue;

    fields.push({
      name: sectionKeyToFieldName(section.sectionKey),
      component: CMS_TO_COMPONENT[section.cms],
      sectionKey: section.sectionKey,
    });
  }

  return fields;
}

export const SUPERAGENCY_PAGE_MANIFESTS: SuperagencyPageManifest[] =
  HEADER_PAGE_SECTION_REGISTRY.map((entry) => ({
    slug: entry.identifier,
    route: entry.frontendRoute,
    family: entry.family,
    fields: fieldsFromRegistry(entry.identifier, entry.sections),
  }));

export function pageApiId(slug: string) {
  return `superagency-page-${slug}`;
}

export function getPageManifest(slug: string) {
  return SUPERAGENCY_PAGE_MANIFESTS.find((entry) => entry.slug === slug) ?? null;
}

export function getPageSlugFromRoute(route: string) {
  const normalized = route.replace(/\/$/, '') || '/';
  return SUPERAGENCY_PAGE_MANIFESTS.find((entry) => entry.route === normalized)?.slug ?? null;
}

export function getPageRoute(slug: string) {
  return getPageManifest(slug)?.route ?? null;
}

export const SUPERAGENCY_PAGE_SLUGS = SUPERAGENCY_PAGE_MANIFESTS.map((entry) => entry.slug);
