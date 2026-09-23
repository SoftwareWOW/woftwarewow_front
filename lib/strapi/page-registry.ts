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
  | 'page-portfolio-explorer'
  | 'page-images'
  | 'page-partners'
  | 'page-process'
  | 'page-process-steps'
  | 'page-section-image'
  | 'page-faq'
  | 'page-blog-posts'
  | 'page-career-jobs'
  | 'page-career-community'
  | 'page-team-members'
  | 'page-office-locations'
  | 'page-client-logos'
  | 'page-stats-banner'
  | 'page-package-list'
  | 'hero-about'
  | 'image-gallery'
  | 'page-rfq-accordion'
  | 'package-offer'
  | 'page-events'
  | 'faq-list'
  | 'brand-kit-logos'
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
  // Company / About (6)
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
      { sectionKey: 'wow-growth-framework', cms: 'page-process-steps' },
      { sectionKey: 'how-we-build-strategy', cms: 'page-process-steps' },
      { sectionKey: 'built-around-your-business', cms: 'page-section-image' },
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
      { sectionKey: 'partner-categories', cms: 'page-section-image' },
      { sectionKey: 'mutual-growth', cms: 'page-section-image' },
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
  // Explore (6)
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
      { sectionKey: 'recent-work-explorer', cms: 'page-portfolio-explorer' },
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
  // Explore / Industries (9) — per-page sections; Phase 1 overrides for 3 slugs
  ...(
    [
      'professional-services',
      'startups-and-entrepreneurs',
      'retail-and-ecommerce',
      'healthcare-and-wellness',
      'hospitality-and-tourism',
      'finance-and-real-estate',
      'organizations-and-nonprofits',
      'education-and-training',
      'technology-and-saas',
    ] as const
  ).map((slug): PageSectionManifest => {
    const defaultSections: PageSectionManifest['sections'] = [
      { sectionKey: `${slug}-hero`, cms: 'hero' },
      { sectionKey: 'capabilities', cms: 'page-technologies' },
      { sectionKey: 'solutions', cms: 'page-technologies' },
      { sectionKey: 'journey', cms: 'page-process' },
      { sectionKey: 'gallery', cms: 'page-images' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ];

    const phase1Sections: Record<string, PageSectionManifest['sections']> = {
      'startups-and-entrepreneurs': [
        { sectionKey: 'startups-and-entrepreneurs-hero', cms: 'hero' },
        { sectionKey: 'startup-packages', cms: 'page-package-list' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'professional-services': [
        { sectionKey: 'professional-services-hero', cms: 'hero' },
        { sectionKey: 'what-matters-most', cms: 'page-technologies' },
        { sectionKey: 'client-journey', cms: 'page-process' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'retail-and-ecommerce': [
        { sectionKey: 'retail-and-ecommerce-hero', cms: 'hero' },
        { sectionKey: 'hero-about', cms: 'hero-about' },
        { sectionKey: 'hero-marquee', cms: 'page-images' },
        { sectionKey: 'client-journey', cms: 'page-process' },
        { sectionKey: 'social-gallery', cms: 'image-gallery' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
    };

    return {
      identifier: slug,
      family: 'explore-industry',
      frontendRoute: `/industries/${slug}`,
      sections: phase1Sections[slug] ?? defaultSections,
    };
  }),
  // For You / Solutions (9) — frontend-accurate per-page sections
  ...(
    [
      'build-and-launch',
      'marketing-and-growth',
      'software-and-technology',
      'social-and-community',
      'ai-and-automation',
      'sales-and-revenue',
      'branding-and-creative',
      'hosting-and-infrastructure',
      'learning-and-events',
    ] as const
  ).map((slug): PageSectionManifest => {
    const solutionSections: Record<string, PageSectionManifest['sections']> = {
      'build-and-launch': [
        { sectionKey: 'build-and-launch-hero', cms: 'hero' },
        { sectionKey: 'our-services', cms: 'page-technologies' },
        { sectionKey: 'build-and-launch-rfq', cms: 'page-rfq-accordion' },
        { sectionKey: 'launch-path', cms: 'page-process' },
        { sectionKey: 'startup-package', cms: 'package-offer' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'marketing-and-growth': [
        { sectionKey: 'marketing-and-growth-hero', cms: 'hero' },
        { sectionKey: 'growth-challenges', cms: 'page-technologies' },
        { sectionKey: 'everything-to-grow', cms: 'page-technologies' },
        { sectionKey: 'connected-growth-system', cms: 'page-process' },
        { sectionKey: 'built-around-goals', cms: 'page-technologies' },
        { sectionKey: 'growth-in-action', cms: 'page-projects' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'software-and-technology': [
        { sectionKey: 'software-and-technology-hero', cms: 'hero' },
        { sectionKey: 'what-we-build', cms: 'page-technologies' },
        { sectionKey: 'built-for-the-fit', cms: 'hero-about' },
        { sectionKey: 'tech-launch-path', cms: 'page-process' },
        { sectionKey: 'our-approach', cms: 'page-technologies' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'branding-and-creative': [
        { sectionKey: 'branding-and-creative-hero', cms: 'hero' },
        { sectionKey: 'our-capabilities', cms: 'page-technologies' },
        { sectionKey: 'brand-capabilities', cms: 'page-technologies' },
        { sectionKey: 'built-to-be-used', cms: 'page-technologies' },
        { sectionKey: 'brand-visibility', cms: 'page-process' },
        { sectionKey: 'our-tools', cms: 'page-technologies' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'ai-and-automation': [
        { sectionKey: 'ai-and-automation-hero', cms: 'hero' },
        { sectionKey: 'start-with-the-work', cms: 'page-rfq-accordion' },
        { sectionKey: 'ai-gallery', cms: 'page-images' },
        { sectionKey: 'ai-capabilities', cms: 'page-technologies' },
        { sectionKey: 'automation-in-action', cms: 'page-technologies' },
        { sectionKey: 'ai-with-purpose', cms: 'page-process' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'sales-and-revenue': [
        { sectionKey: 'sales-and-revenue-hero', cms: 'hero' },
        { sectionKey: 'sales-journey-gap', cms: 'hero-about' },
        { sectionKey: 'revenue-capabilities', cms: 'page-technologies' },
        { sectionKey: 'lead-to-customer', cms: 'page-process' },
        { sectionKey: 'sales-visibility', cms: 'page-process' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'social-and-community': [
        { sectionKey: 'social-and-community-hero', cms: 'hero' },
        { sectionKey: 'social-process', cms: 'page-process' },
        { sectionKey: 'social-capabilities', cms: 'page-technologies' },
        { sectionKey: 'platform-presence', cms: 'page-technologies' },
        { sectionKey: 'build-community', cms: 'page-process' },
        { sectionKey: 'social-gallery', cms: 'image-gallery' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'hosting-and-infrastructure': [
        { sectionKey: 'hosting-and-infrastructure-hero', cms: 'hero' },
        { sectionKey: 'digital-foundations', cms: 'page-technologies' },
        { sectionKey: 'built-for-business', cms: 'hero-about' },
        { sectionKey: 'infrastructure-solutions', cms: 'page-technologies' },
        { sectionKey: 'hosting-that-fits', cms: 'package-offer' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'learning-and-events': [
        { sectionKey: 'learning-and-events-hero', cms: 'hero' },
        { sectionKey: 'learn-your-way', cms: 'package-offer' },
        { sectionKey: 'learning-topics', cms: 'page-technologies' },
        { sectionKey: 'upcoming-events', cms: 'page-events' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
    };

    return {
      identifier: slug,
      family: 'for-you-solution',
      frontendRoute: `/for-you/${slug}`,
      sections: solutionSections[slug]!,
    };
  }),
  // For You / Packages (9) — frontend-accurate per-page sections
  ...(
    [
      'startup-launch',
      'business-growth',
      'digital-transformation',
      'ai-automation',
      'brand-authority',
      'saas-product-development',
      'website-growth-engine',
      'sales-acceleration',
      'enterprise-infrastructure',
    ] as const
  ).map((slug): PageSectionManifest => {
    const packageSections: Record<string, PageSectionManifest['sections']> = {
      'startup-launch': [
        { sectionKey: 'startup-launch-hero', cms: 'hero' },
        { sectionKey: 'launch-foundations', cms: 'page-technologies' },
        { sectionKey: 'whats-included', cms: 'page-technologies' },
        { sectionKey: 'launch-journey', cms: 'page-process' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'business-growth': [
        { sectionKey: 'business-growth-hero', cms: 'hero' },
        { sectionKey: 'built-for-growth', cms: 'hero-about' },
        { sectionKey: 'growth-pieces', cms: 'page-technologies' },
        { sectionKey: 'connected-growth', cms: 'page-process' },
        { sectionKey: 'how-it-works', cms: 'page-process' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'digital-transformation': [
        { sectionKey: 'digital-transformation-hero', cms: 'hero' },
        { sectionKey: 'the-gap', cms: 'hero-about' },
        { sectionKey: 'transformation-plan', cms: 'page-technologies' },
        { sectionKey: 'before-after-gap', cms: 'page-technologies' },
        { sectionKey: 'transformation-priorities', cms: 'page-technologies' },
        { sectionKey: 'modernization-path', cms: 'page-process' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'brand-authority': [
        { sectionKey: 'brand-authority-hero', cms: 'hero' },
        { sectionKey: 'authority-foundation', cms: 'page-technologies' },
        { sectionKey: 'whats-included', cms: 'page-technologies' },
        { sectionKey: 'authority-journey', cms: 'page-process' },
        { sectionKey: 'specialist-expertise', cms: 'page-technologies' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'website-growth-engine': [
        { sectionKey: 'website-growth-engine-hero', cms: 'hero' },
        { sectionKey: 'built-to-perform', cms: 'page-technologies' },
        { sectionKey: 'whats-included', cms: 'page-technologies' },
        { sectionKey: 'website-journey', cms: 'page-process' },
        { sectionKey: 'specialist-expertise', cms: 'page-technologies' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'sales-acceleration': [
        { sectionKey: 'sales-acceleration-hero', cms: 'hero' },
        { sectionKey: 'sales-gaps', cms: 'page-technologies' },
        { sectionKey: 'whats-included', cms: 'page-technologies' },
        { sectionKey: 'acceleration-journey', cms: 'page-process' },
        { sectionKey: 'connected-expertise', cms: 'page-technologies' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'enterprise-infrastructure': [
        { sectionKey: 'enterprise-infrastructure-hero', cms: 'hero' },
        { sectionKey: 'business-critical-operations', cms: 'page-technologies' },
        { sectionKey: 'whats-included', cms: 'page-technologies' },
        { sectionKey: 'infrastructure-journey', cms: 'page-process' },
        { sectionKey: 'connected-expertise', cms: 'page-technologies' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'ai-automation': [
        { sectionKey: 'ai-automation-hero', cms: 'hero' },
        { sectionKey: 'start-with-the-repetitive', cms: 'page-rfq-accordion' },
        { sectionKey: 'ai-package-card', cms: 'package-offer' },
        { sectionKey: 'automation-tools', cms: 'page-technologies' },
        { sectionKey: 'from-idea-to-automation', cms: 'page-process' },
        { sectionKey: 'automation-faq', cms: 'page-faq' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
      'saas-product-development': [
        { sectionKey: 'saas-product-development-hero', cms: 'hero' },
        { sectionKey: 'from-idea-to-product', cms: 'page-rfq-accordion' },
        { sectionKey: 'saas-package-card', cms: 'package-offer' },
        { sectionKey: 'saas-transform-plan', cms: 'page-technologies' },
        { sectionKey: 'idea-to-product-path', cms: 'page-process' },
        { sectionKey: 'product-journey', cms: 'page-process' },
        { sectionKey: 'focus-first-release', cms: 'page-technologies' },
        { sectionKey: 'saas-integrations', cms: 'page-technologies' },
        { sectionKey: 'saas-faq', cms: 'page-faq' },
        { sectionKey: 'wow-growth-cta', cms: null },
      ],
    };

    return {
      identifier: slug,
      family: 'for-you-package',
      frontendRoute: `/packages/${slug}`,
      sections: packageSections[slug]!,
    };
  }),
  // More (10)
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
      { sectionKey: 'partner-benefits', cms: 'page-technologies' },
      { sectionKey: 'wow-growth-cta', cms: null },
    ],
  },
  {
    identifier: 'affiliate',
    family: 'more',
    frontendRoute: '/affiliate',
    sections: [
      { sectionKey: 'affiliate-hero', cms: 'hero' },
      { sectionKey: 'partner-paths', cms: 'page-technologies' },
      { sectionKey: 'affiliate-journey', cms: 'page-process' },
      { sectionKey: 'affiliate-benefits', cms: 'page-technologies' },
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
      { sectionKey: 'brand-kit-logos', cms: 'page-images' },
      { sectionKey: 'brand-system', cms: 'page-technologies' },
      { sectionKey: 'brand-visual-style', cms: 'page-technologies' },
      { sectionKey: 'brand-usage-guidelines', cms: 'page-technologies' },
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
      { sectionKey: 'career-rfq', cms: 'page-faq' },
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

export const CMS_TO_COMPONENT: Record<Exclude<CmsSectionType, null | 'hero'>, string> = {
  'page-rfq': 'sections.page-rfq',
  'page-technologies': 'sections.page-technologies',
  'page-projects': 'sections.page-projects',
  'page-portfolio-explorer': 'sections.page-portfolio-explorer',
  'page-images': 'sections.page-images',
  'page-partners': 'sections.page-partners',
  'page-process': 'sections.page-process',
  'page-process-steps': 'sections.page-process-steps',
  'page-section-image': 'sections.page-section-image',
  'page-faq': 'sections.page-faq',
  'page-blog-posts': 'sections.page-blog-posts',
  'page-career-jobs': 'sections.page-career-jobs',
  'page-career-community': 'sections.page-career-community',
  'page-team-members': 'sections.page-team-members',
  'page-office-locations': 'sections.page-office-locations',
  'page-client-logos': 'sections.page-client-logos',
  'page-stats-banner': 'sections.page-stats-banner',
  'page-package-list': 'sections.page-package-list',
  'hero-about': 'sections.hero-about',
  'image-gallery': 'sections.image-gallery',
  'page-rfq-accordion': 'sections.page-rfq-accordion',
  'package-offer': 'sections.package-offer',
  'page-events': 'sections.page-events',
  'faq-list': 'sections.faq-list',
  'brand-kit-logos': 'sections.brand-kit-logos',
};

export const SECTION_KEY_TO_CMS: Record<
  string,
  Exclude<CmsSectionType, null | 'hero'>
> = Object.fromEntries(
  HEADER_PAGE_SECTION_REGISTRY.flatMap((page) =>
    page.sections
      .filter(
        (section): section is { sectionKey: string; cms: Exclude<CmsSectionType, null | 'hero'> } =>
          Boolean(section.cms && section.cms !== 'hero'),
      )
      .map((section) => [section.sectionKey, section.cms]),
  ),
) as Record<string, Exclude<CmsSectionType, null | 'hero'>>;

export function getCmsTypeForSectionKey(sectionKey: string) {
  return SECTION_KEY_TO_CMS[sectionKey] ?? null;
}

export function getComponentForCmsType(cmsType: Exclude<CmsSectionType, null | 'hero'>) {
  return CMS_TO_COMPONENT[cmsType];
}

type StrapiSectionKeyConfig = {
  cmsType: Exclude<CmsSectionType, null | 'hero'>;
  populate: Record<string, unknown>;
};

/** Strapi sectionKey values that differ from the frontend registry section keys. */
export const STRAPI_SECTION_KEY_CONFIG: Record<string, StrapiSectionKeyConfig> = {
  'care-gallery': {
    cmsType: 'page-images',
    populate: { images: { populate: '*' } },
  },
  'care-journey': {
    cmsType: 'page-process',
    populate: { items: { populate: '*' } },
  },
  'care-packages': {
    cmsType: 'page-package-list',
    populate: { items: { populate: { image: { populate: '*' } } } },
  },
  'built-around-guest': {
    cmsType: 'page-process',
    populate: { items: { populate: '*' } },
  },
  'featured-Work': {
    cmsType: 'page-projects',
    populate: { projects: { populate: '*' } },
  },
  'explore-Work': {
    cmsType: 'page-projects',
    populate: { projects: { populate: '*' } },
  },
  'how-we-create-impact': {
    cmsType: 'page-process',
    populate: { steps: { populate: '*' } },
  },
  'social-gallery': {
    cmsType: 'image-gallery',
    populate: { images: { populate: '*' } },
  },
  'growth-journey': {
    cmsType: 'page-process',
    populate: { items: { populate: '*' } },
  },
  'product-journey': {
    cmsType: 'page-process',
    populate: { items: { populate: '*' } },
  },
  'portfolio-gallery': {
    cmsType: 'page-images',
    populate: { images: { populate: '*' } },
  },
  'about-skew-marquee': {
    cmsType: 'page-images',
    populate: { images: { populate: '*' } },
  },
  'skew-marquee': {
    cmsType: 'page-images',
    populate: { images: { populate: '*' } },
  },
  'team-member': {
    cmsType: 'page-team-members',
    populate: {
      featuredMember: { populate: { image: true, socialLinks: true } },
      members: { populate: { image: true, socialLinks: true } },
    },
  },
  team: {
    cmsType: 'page-team-members',
    populate: {
      featuredMember: { populate: { image: true, socialLinks: true } },
      members: { populate: { image: true, socialLinks: true } },
    },
  },
  'company-gallery': {
    cmsType: 'image-gallery',
    populate: { images: { populate: { image: true } } },
  },
  'carrer-company-galleryimage': {
    cmsType: 'image-gallery',
    populate: { images: { populate: { image: true } } },
  },
  'community-images': {
    cmsType: 'page-career-community',
    populate: {
      avatars: { populate: { image: true } },
      teamImage: { populate: { image: true } },
    },
  },
  'career-communityimage': {
    cmsType: 'page-career-community',
    populate: {
      avatars: { populate: { image: true } },
      teamImage: { populate: { image: true } },
    },
  },
  'career-community-image': {
    cmsType: 'page-career-community',
    populate: {
      avatars: { populate: { image: true } },
      teamImage: { populate: { image: true } },
    },
  },
  'career-jobs': {
    cmsType: 'page-career-jobs',
    populate: {
      jobs: {
        fields: [
          'title',
          'slug',
          'description',
          'tags',
          'department',
          'employment',
          'location',
          'order',
        ],
      },
    },
  },
  'career-rfq': {
    cmsType: 'page-rfq-accordion',
    populate: { groups: true },
  },
  'superagency-partnerCategories': {
    cmsType: 'page-section-image',
    populate: { image: { populate: { image: true } } },
  },
  'superagency-mutualGrouwth-page': {
    cmsType: 'page-section-image',
    populate: { image: { populate: { image: true } } },
  },
  'strategy-to-results': {
    cmsType: 'page-process',
    populate: {
      steps: { populate: '*' },
      image: { populate: { image: true } },
    },
  },
  'built-around-business': {
    cmsType: 'page-process',
    populate: {
      steps: { populate: '*' },
      image: { populate: { image: true } },
    },
  },
};

export function getStrapiSectionKeyConfig(sectionKey: string) {
  return STRAPI_SECTION_KEY_CONFIG[sectionKey] ?? null;
}

const COMPONENT_TO_CMS_TYPE = Object.fromEntries(
  Object.entries(CMS_TO_COMPONENT).map(([cmsType, component]) => [component, cmsType]),
) as Record<string, Exclude<CmsSectionType, null | 'hero'>>;

export function inferCmsTypeFromSectionValue(
  value: unknown,
): Exclude<CmsSectionType, null | 'hero'> | null {
  if (!value || typeof value !== 'object') return null;

  const section = value as Record<string, unknown>;

  if (typeof section.__component === 'string') {
    const fromComponent = COMPONENT_TO_CMS_TYPE[section.__component];
    if (fromComponent) return fromComponent;
  }

  if (typeof section.sectionKey === 'string') {
    const strapiConfig = getStrapiSectionKeyConfig(section.sectionKey);
    if (strapiConfig) return strapiConfig.cmsType;

    const cmsType = getCmsTypeForSectionKey(section.sectionKey);
    if (cmsType) return cmsType;
  }

  if ('filterGroups' in section) return 'page-portfolio-explorer';
  if ('clientLogos' in section) return 'page-client-logos';
  if ('locations' in section) return 'page-office-locations';
  if ('partners' in section) return 'page-partners';
  if ('body' in section && !('image' in section)) return 'page-rfq';
  if ('body' in section) return 'hero-about';
  if ('avatars' in section || 'teamImage' in section) return 'page-career-community';
  if ('jobs' in section) return 'page-career-jobs';
  if ('steps' in section) return 'page-process';

  return null;
}

const FIELD_OVERRIDES: Partial<Record<string, PageField[]>> = {
  about: [
    { name: 'heroAbout', component: 'sections.hero-about', sectionKey: 'hero-about' },
    {
      name: 'techStack',
      component: 'sections.page-technologies',
      sectionKey: 'technology-stack',
    },
    { name: 'team', component: 'sections.page-team-members', sectionKey: 'team' },
    {
      name: 'solutionToChallenges',
      component: 'sections.page-technologies',
      sectionKey: 'solution-to-challenges',
    },
  ],
  'about-partners': [
    {
      name: 'partnerCategories',
      component: 'sections.page-section-image',
      sectionKey: 'partner-categories',
    },
    {
      name: 'mutualGrowth',
      component: 'sections.page-section-image',
      sectionKey: 'mutual-growth',
    },
  ],
  'about-strategy-centre': [
    {
      name: 'wowGrowthFramework',
      component: 'sections.page-process-steps',
      sectionKey: 'wow-growth-framework',
    },
    {
      name: 'howWeBuildStrategy',
      component: 'sections.page-process-steps',
      sectionKey: 'how-we-build-strategy',
    },
    {
      name: 'builtAroundYourBusiness',
      component: 'sections.page-section-image',
      sectionKey: 'built-around-your-business',
    },
    {
      name: 'strategyInAction',
      component: 'sections.page-projects',
      sectionKey: 'strategy-in-action',
    },
  ],
  'about-why-smbs': [
    { name: 'smbGallery', component: 'sections.page-images', sectionKey: 'smb-gallery' },
  ],
  'startups-and-entrepreneurs': [
    {
      name: 'startupPackages',
      component: 'sections.page-package-list',
      sectionKey: 'startup-packages',
    },
  ],
  'healthcare-and-wellness': [
    {
      name: 'carePackages',
      component: 'sections.page-package-list',
      sectionKey: 'care-packages',
    },
  ],
  'finance-and-real-estate': [
    {
      name: 'wowEcosystem',
      component: 'sections.page-package-list',
      sectionKey: 'wow-ecosystem',
    },
    {
      name: 'recommendedSolutions',
      component: 'sections.page-package-list',
      sectionKey: 'recommended-solutions',
    },
  ],
  'professional-services': [
    {
      name: 'whatMattersMost',
      component: 'sections.page-technologies',
      sectionKey: 'what-matters-most',
    },
    {
      name: 'clientJourney',
      component: 'sections.page-process',
      sectionKey: 'client-journey',
    },
  ],
  'retail-and-ecommerce': [
    { name: 'heroAbout', component: 'sections.hero-about', sectionKey: 'hero-about' },
    { name: 'heroMarquee', component: 'sections.page-images', sectionKey: 'hero-marquee' },
    {
      name: 'clientJourney',
      component: 'sections.page-process',
      sectionKey: 'client-journey',
    },
    {
      name: 'socialGallery',
      component: 'sections.image-gallery',
      sectionKey: 'social-gallery',
    },
  ],
  // For You / Solutions (9)
  'build-and-launch': [
    { name: 'ourServices', component: 'sections.page-technologies', sectionKey: 'our-services' },
    {
      name: 'buildAndLaunchRfq',
      component: 'sections.page-rfq-accordion',
      sectionKey: 'build-and-launch-rfq',
    },
    { name: 'launchPath', component: 'sections.page-process', sectionKey: 'launch-path' },
    { name: 'startupPackage', component: 'sections.package-offer', sectionKey: 'startup-package' },
  ],
  'marketing-and-growth': [
    {
      name: 'growthChallenges',
      component: 'sections.page-technologies',
      sectionKey: 'growth-challenges',
    },
    {
      name: 'everythingToGrow',
      component: 'sections.page-technologies',
      sectionKey: 'everything-to-grow',
    },
    {
      name: 'connectedGrowthSystem',
      component: 'sections.page-process',
      sectionKey: 'connected-growth-system',
    },
    {
      name: 'builtAroundGoals',
      component: 'sections.page-technologies',
      sectionKey: 'built-around-goals',
    },
    {
      name: 'growthInAction',
      component: 'sections.page-projects',
      sectionKey: 'growth-in-action',
    },
  ],
  'software-and-technology': [
    { name: 'whatWeBuild', component: 'sections.page-technologies', sectionKey: 'what-we-build' },
    { name: 'builtForTheFit', component: 'sections.hero-about', sectionKey: 'built-for-the-fit' },
    { name: 'techLaunchPath', component: 'sections.page-process', sectionKey: 'tech-launch-path' },
    { name: 'ourApproach', component: 'sections.page-technologies', sectionKey: 'our-approach' },
  ],
  'branding-and-creative': [
    {
      name: 'ourCapabilities',
      component: 'sections.page-technologies',
      sectionKey: 'our-capabilities',
    },
    {
      name: 'brandCapabilities',
      component: 'sections.page-technologies',
      sectionKey: 'brand-capabilities',
    },
    {
      name: 'builtToBeUsed',
      component: 'sections.page-technologies',
      sectionKey: 'built-to-be-used',
    },
    { name: 'brandVisibility', component: 'sections.page-process', sectionKey: 'brand-visibility' },
    { name: 'ourTools', component: 'sections.page-technologies', sectionKey: 'our-tools' },
  ],
  'ai-and-automation': [
    {
      name: 'startWithTheWork',
      component: 'sections.page-rfq-accordion',
      sectionKey: 'start-with-the-work',
    },
    { name: 'aiGallery', component: 'sections.page-images', sectionKey: 'ai-gallery' },
    { name: 'aiCapabilities', component: 'sections.page-technologies', sectionKey: 'ai-capabilities' },
    {
      name: 'automationInAction',
      component: 'sections.page-technologies',
      sectionKey: 'automation-in-action',
    },
    { name: 'aiWithPurpose', component: 'sections.page-process', sectionKey: 'ai-with-purpose' },
  ],
  'sales-and-revenue': [
    { name: 'salesJourneyGap', component: 'sections.hero-about', sectionKey: 'sales-journey-gap' },
    {
      name: 'revenueCapabilities',
      component: 'sections.page-technologies',
      sectionKey: 'revenue-capabilities',
    },
    { name: 'leadToCustomer', component: 'sections.page-process', sectionKey: 'lead-to-customer' },
    { name: 'salesVisibility', component: 'sections.page-process', sectionKey: 'sales-visibility' },
  ],
  'social-and-community': [
    { name: 'socialProcess', component: 'sections.page-process', sectionKey: 'social-process' },
    {
      name: 'socialCapabilities',
      component: 'sections.page-technologies',
      sectionKey: 'social-capabilities',
    },
    {
      name: 'platformPresence',
      component: 'sections.page-technologies',
      sectionKey: 'platform-presence',
    },
    { name: 'buildCommunity', component: 'sections.page-process', sectionKey: 'build-community' },
    { name: 'socialGallery', component: 'sections.image-gallery', sectionKey: 'social-gallery' },
  ],
  'hosting-and-infrastructure': [
    {
      name: 'digitalFoundations',
      component: 'sections.page-technologies',
      sectionKey: 'digital-foundations',
    },
    { name: 'builtForBusiness', component: 'sections.hero-about', sectionKey: 'built-for-business' },
    {
      name: 'infrastructureSolutions',
      component: 'sections.page-technologies',
      sectionKey: 'infrastructure-solutions',
    },
    {
      name: 'hostingThatFits',
      component: 'sections.package-offer',
      sectionKey: 'hosting-that-fits',
    },
  ],
  'learning-and-events': [
    { name: 'learnYourWay', component: 'sections.package-offer', sectionKey: 'learn-your-way' },
    { name: 'learningTopics', component: 'sections.page-technologies', sectionKey: 'learning-topics' },
    { name: 'upcomingEvents', component: 'sections.page-events', sectionKey: 'upcoming-events' },
  ],
  // For You / Packages (9)
  'startup-launch': [
    {
      name: 'launchFoundations',
      component: 'sections.page-technologies',
      sectionKey: 'launch-foundations',
    },
    { name: 'whatsIncluded', component: 'sections.page-technologies', sectionKey: 'whats-included' },
    { name: 'launchJourney', component: 'sections.page-process', sectionKey: 'launch-journey' },
  ],
  'business-growth': [
    { name: 'builtForGrowth', component: 'sections.hero-about', sectionKey: 'built-for-growth' },
    { name: 'growthPieces', component: 'sections.page-technologies', sectionKey: 'growth-pieces' },
    { name: 'connectedGrowth', component: 'sections.page-process', sectionKey: 'connected-growth' },
    { name: 'howItWorks', component: 'sections.page-process', sectionKey: 'how-it-works' },
  ],
  'digital-transformation': [
    { name: 'theGap', component: 'sections.hero-about', sectionKey: 'the-gap' },
    {
      name: 'transformationPlan',
      component: 'sections.page-technologies',
      sectionKey: 'transformation-plan',
    },
    {
      name: 'beforeAfterGap',
      component: 'sections.page-technologies',
      sectionKey: 'before-after-gap',
    },
    {
      name: 'transformationPriorities',
      component: 'sections.page-technologies',
      sectionKey: 'transformation-priorities',
    },
    {
      name: 'modernizationPath',
      component: 'sections.page-process',
      sectionKey: 'modernization-path',
    },
  ],
  'brand-authority': [
    {
      name: 'authorityFoundation',
      component: 'sections.page-technologies',
      sectionKey: 'authority-foundation',
    },
    { name: 'whatsIncluded', component: 'sections.page-technologies', sectionKey: 'whats-included' },
    { name: 'authorityJourney', component: 'sections.page-process', sectionKey: 'authority-journey' },
    {
      name: 'specialistExpertise',
      component: 'sections.page-technologies',
      sectionKey: 'specialist-expertise',
    },
  ],
  'website-growth-engine': [
    { name: 'builtToPerform', component: 'sections.page-technologies', sectionKey: 'built-to-perform' },
    { name: 'whatsIncluded', component: 'sections.page-technologies', sectionKey: 'whats-included' },
    { name: 'websiteJourney', component: 'sections.page-process', sectionKey: 'website-journey' },
    {
      name: 'specialistExpertise',
      component: 'sections.page-technologies',
      sectionKey: 'specialist-expertise',
    },
  ],
  'sales-acceleration': [
    { name: 'salesGaps', component: 'sections.page-technologies', sectionKey: 'sales-gaps' },
    { name: 'whatsIncluded', component: 'sections.page-technologies', sectionKey: 'whats-included' },
    {
      name: 'accelerationJourney',
      component: 'sections.page-process',
      sectionKey: 'acceleration-journey',
    },
    {
      name: 'connectedExpertise',
      component: 'sections.page-technologies',
      sectionKey: 'connected-expertise',
    },
  ],
  'enterprise-infrastructure': [
    {
      name: 'businessCriticalOperations',
      component: 'sections.page-technologies',
      sectionKey: 'business-critical-operations',
    },
    { name: 'whatsIncluded', component: 'sections.page-technologies', sectionKey: 'whats-included' },
    {
      name: 'infrastructureJourney',
      component: 'sections.page-process',
      sectionKey: 'infrastructure-journey',
    },
    {
      name: 'connectedExpertise',
      component: 'sections.page-technologies',
      sectionKey: 'connected-expertise',
    },
  ],
  'ai-automation': [
    {
      name: 'startWithTheRepetitive',
      component: 'sections.page-rfq-accordion',
      sectionKey: 'start-with-the-repetitive',
    },
    { name: 'aiPackageCard', component: 'sections.package-offer', sectionKey: 'ai-package-card' },
    { name: 'automationTools', component: 'sections.page-technologies', sectionKey: 'automation-tools' },
    {
      name: 'fromIdeaToAutomation',
      component: 'sections.page-process',
      sectionKey: 'from-idea-to-automation',
    },
    { name: 'automationFaq', component: 'sections.page-faq', sectionKey: 'automation-faq' },
  ],
  'saas-product-development': [
    {
      name: 'fromIdeaToProduct',
      component: 'sections.page-rfq-accordion',
      sectionKey: 'from-idea-to-product',
    },
    { name: 'saasPackageCard', component: 'sections.package-offer', sectionKey: 'saas-package-card' },
    {
      name: 'saasTransformPlan',
      component: 'sections.page-technologies',
      sectionKey: 'saas-transform-plan',
    },
    {
      name: 'ideaToProductPath',
      component: 'sections.page-process',
      sectionKey: 'idea-to-product-path',
    },
    { name: 'productJourney', component: 'sections.page-process', sectionKey: 'product-journey' },
    {
      name: 'focusFirstRelease',
      component: 'sections.page-technologies',
      sectionKey: 'focus-first-release',
    },
    {
      name: 'saasIntegrations',
      component: 'sections.page-technologies',
      sectionKey: 'saas-integrations',
    },
    { name: 'saasFaq', component: 'sections.faq-list', sectionKey: 'saas-faq' },
  ],
  // More (fixes)
  whitelabel: [
    { name: 'capabilities', component: 'sections.page-technologies', sectionKey: 'capabilities' },
    { name: 'howWePartner', component: 'sections.page-process', sectionKey: 'how-we-partner' },
    { name: 'partnerBenefits', component: 'sections.page-technologies', sectionKey: 'partner-benefits' },
  ],
  affiliate: [
    { name: 'partnerPaths', component: 'sections.page-technologies', sectionKey: 'partner-paths' },
    { name: 'affiliateJourney', component: 'sections.page-process', sectionKey: 'affiliate-journey' },
    { name: 'affiliateBenefits', component: 'sections.page-technologies', sectionKey: 'affiliate-benefits' },
  ],
  brandkit: [
    { name: 'brandKitLogos', component: 'sections.brand-kit-logos', sectionKey: 'brand-kit-logos' },
    { name: 'brandVisualStyle', component: 'sections.page-process', sectionKey: 'brand-visual-style' },
  ],
  meet: [{ name: 'meetFaq', component: 'sections.faq-list', sectionKey: 'meet-faq' }],
  thinktank: [{ name: 'thinktankFaq', component: 'sections.faq-list', sectionKey: 'thinktank-faq' }],
  quotation: [{ name: 'requestDetails', component: 'sections.page-rfq', sectionKey: 'request-details' }],
  career: [
    { name: 'companyGallery', component: 'sections.image-gallery', sectionKey: 'company-gallery' },
    { name: 'communityImages', component: 'sections.page-career-community', sectionKey: 'community-images' },
    { name: 'careerJobs', component: 'sections.page-career-jobs', sectionKey: 'career-jobs' },
    { name: 'careerRfq', component: 'sections.page-rfq-accordion', sectionKey: 'career-rfq' },
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
