/**
 * AUTO-GENERATED — do not edit. Run backend: npx tsx scripts/generate-division-landing-apis.ts
 */

import type { DivisionId } from '@/i18n/division-paths';

export type LandingContentMode = 'imageSlots' | 'repeatable' | 'workExplorer';
export type LandingCardKind = 'service' | 'industry' | 'client' | 'hosting';

export type DivisionImageSlot = {
  attributePath: string;
  fieldName: string;
  adminLabel: string;
  sectionKey: string;
  index: number;
  staticFallback: string;
};

export type DivisionLandingSectionDef = {
  attributeName: string;
  componentDisplayName: string;
  componentUid: string;
  sectionKey: string;
  contentMode: LandingContentMode;
  cardKind?: LandingCardKind;
  repeatableComponentUid?: string;
  workExplorerComponentUid?: string;
  slots: readonly DivisionImageSlot[];
  legacySlots: readonly DivisionImageSlot[];
};

export type DivisionLandingPageDef = {
  divisionId: DivisionId;
  apiSlug: string;
  adminLabel: string;
  hasPortfolio: boolean;
  sections: readonly DivisionLandingSectionDef[];
};

export const DIVISION_LANDING_PAGE_DEFS: readonly DivisionLandingPageDef[] = [
  {
    "divisionId": "softwareWow",
    "apiSlug": "softwarewow",
    "adminLabel": "SoftwareWOW",
    "hasPortfolio": true,
    "sections": [
      {
        "attributeName": "hero",
        "componentDisplayName": "Hero — banner",
        "componentUid": "division-landing.softwarewow-hero",
        "sectionKey": "softwarewow.hero",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "hero.banner",
            "fieldName": "banner",
            "adminLabel": "Hero — main banner image",
            "sectionKey": "softwarewow.hero",
            "index": 0,
            "staticFallback": "/images/wow/hero-banner.jpg"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "services",
        "componentDisplayName": "Services — grid cards",
        "componentUid": "division-landing.softwarewow-services",
        "sectionKey": "softwarewow.services",
        "contentMode": "repeatable",
        "cardKind": "service",
        "repeatableComponentUid": "division-landing.landing-service-card",
        "slots": [],
        "legacySlots": [
          {
            "attributePath": "services.customSoftwareDevelopment",
            "fieldName": "customSoftwareDevelopment",
            "adminLabel": "Services — Custom Software Development",
            "sectionKey": "softwarewow.services",
            "index": 0,
            "staticFallback": "/images/wow/LandingPageNaveBare/Branding%20%26%20Creative%202.svg"
          },
          {
            "attributePath": "services.webMobileApplications",
            "fieldName": "webMobileApplications",
            "adminLabel": "Services — Web & Mobile Applications",
            "sectionKey": "softwarewow.services",
            "index": 1,
            "staticFallback": "/images/wow/Hero/devision/Design 2.jpg"
          },
          {
            "attributePath": "services.businessSystemsAutomation",
            "fieldName": "businessSystemsAutomation",
            "adminLabel": "Services — Business Systems & Automation",
            "sectionKey": "softwarewow.services",
            "index": 2,
            "staticFallback": "/images/wow/Hero/devision/Mockup 2 Dark.png"
          },
          {
            "attributePath": "services.productDesignPrototyping",
            "fieldName": "productDesignPrototyping",
            "adminLabel": "Services — Product Design & Prototyping",
            "sectionKey": "softwarewow.services",
            "index": 3,
            "staticFallback": "/images/wow/Hero/devision/Design 1.jpg"
          },
          {
            "attributePath": "services.integrationsModernization",
            "fieldName": "integrationsModernization",
            "adminLabel": "Services — Integrations & Modernization",
            "sectionKey": "softwarewow.services",
            "index": 4,
            "staticFallback": "/images/wow/Hero/devision/Image-copy-scaled.jpeg"
          },
          {
            "attributePath": "services.softwareSupportImprovement",
            "fieldName": "softwareSupportImprovement",
            "adminLabel": "Services — Software Support & Improvement",
            "sectionKey": "softwarewow.services",
            "index": 5,
            "staticFallback": "/images/wow/Hero/devision/Mockup 2 Dark.png"
          }
        ]
      },
      {
        "attributeName": "framework",
        "componentDisplayName": "Framework section",
        "componentUid": "division-landing.softwarewow-framework",
        "sectionKey": "softwarewow.framework",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "framework.illustration",
            "fieldName": "illustration",
            "adminLabel": "Framework — section illustration",
            "sectionKey": "softwarewow.framework",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Intelligence.jpg"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "industries",
        "componentDisplayName": "Industries — carousel",
        "componentUid": "division-landing.softwarewow-industries",
        "sectionKey": "softwarewow.industries",
        "contentMode": "repeatable",
        "cardKind": "industry",
        "repeatableComponentUid": "division-landing.landing-industry-slide",
        "slots": [],
        "legacySlots": [
          {
            "attributePath": "industries.healthcare",
            "fieldName": "healthcare",
            "adminLabel": "Industries — Healthcare slide",
            "sectionKey": "softwarewow.industries",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Image-copy-scaled.jpeg"
          },
          {
            "attributePath": "industries.hospitality",
            "fieldName": "hospitality",
            "adminLabel": "Industries — Hospitality slide",
            "sectionKey": "softwarewow.industries",
            "index": 1,
            "staticFallback": "/images/wow/Hero/devision/Mockup 2 Dark.png"
          },
          {
            "attributePath": "industries.construction",
            "fieldName": "construction",
            "adminLabel": "Industries — Construction slide",
            "sectionKey": "softwarewow.industries",
            "index": 2,
            "staticFallback": "/images/wow/Hero/devision/Design 1.jpg"
          },
          {
            "attributePath": "industries.professionalServices",
            "fieldName": "professionalServices",
            "adminLabel": "Industries — Professional Services slide",
            "sectionKey": "softwarewow.industries",
            "index": 3,
            "staticFallback": "/images/wow/Hero/devision/Image-copy-scaled.jpeg"
          },
          {
            "attributePath": "industries.retailEcommerce",
            "fieldName": "retailEcommerce",
            "adminLabel": "Industries — Retail & eCommerce slide",
            "sectionKey": "softwarewow.industries",
            "index": 4,
            "staticFallback": "/images/wow/Hero/devision/Mockup 2 Dark.png"
          },
          {
            "attributePath": "industries.technologySaas",
            "fieldName": "technologySaas",
            "adminLabel": "Industries — Technology & SaaS slide",
            "sectionKey": "softwarewow.industries",
            "index": 5,
            "staticFallback": "/images/wow/Hero/devision/Design 1.jpg"
          }
        ]
      }
    ]
  },
  {
    "divisionId": "wowMarketing",
    "apiSlug": "wowmarketing",
    "adminLabel": "WOW Marketing",
    "hasPortfolio": true,
    "sections": [
      {
        "attributeName": "hero",
        "componentDisplayName": "Hero",
        "componentUid": "division-landing.wowmarketing-hero",
        "sectionKey": "wowmarketing.hero",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "hero.banner",
            "fieldName": "banner",
            "adminLabel": "Hero — banner",
            "sectionKey": "wowmarketing.hero",
            "index": 0,
            "staticFallback": "/images/home-5/hero-img.png"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "holdback",
        "componentDisplayName": "Holdback / intro",
        "componentUid": "division-landing.wowmarketing-holdback",
        "sectionKey": "wowmarketing.holdback",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "holdback.visual",
            "fieldName": "visual",
            "adminLabel": "Holdback — side visual",
            "sectionKey": "wowmarketing.holdback",
            "index": 0,
            "staticFallback": "/images/home-5/hero-img.png"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "framework",
        "componentDisplayName": "Marketing framework",
        "componentUid": "division-landing.wowmarketing-framework",
        "sectionKey": "wowmarketing.framework",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "framework.illustration",
            "fieldName": "illustration",
            "adminLabel": "Framework — illustration",
            "sectionKey": "wowmarketing.framework",
            "index": 0,
            "staticFallback": "/images/home-5/hero-img.png"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "growthPartner",
        "componentDisplayName": "Growth partner",
        "componentUid": "division-landing.wowmarketing-growth-partner",
        "sectionKey": "wowmarketing.growthPartner",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "growthPartner.visual",
            "fieldName": "visual",
            "adminLabel": "Growth partner — visual",
            "sectionKey": "wowmarketing.growthPartner",
            "index": 0,
            "staticFallback": "/images/home-5/hero-img.png"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "industries",
        "componentDisplayName": "Industries — carousel",
        "componentUid": "division-landing.wowmarketing-industries",
        "sectionKey": "wowmarketing.industries",
        "contentMode": "repeatable",
        "cardKind": "industry",
        "repeatableComponentUid": "division-landing.landing-industry-slide",
        "slots": [],
        "legacySlots": [
          {
            "attributePath": "industries.healthcare",
            "fieldName": "healthcare",
            "adminLabel": "Industries — Healthcare",
            "sectionKey": "wowmarketing.industries",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Image-copy-scaled.jpeg"
          },
          {
            "attributePath": "industries.hospitality",
            "fieldName": "hospitality",
            "adminLabel": "Industries — Hospitality",
            "sectionKey": "wowmarketing.industries",
            "index": 1,
            "staticFallback": "/images/wow/Hero/devision/Mockup 2 Dark.png"
          },
          {
            "attributePath": "industries.construction",
            "fieldName": "construction",
            "adminLabel": "Industries — Construction",
            "sectionKey": "wowmarketing.industries",
            "index": 2,
            "staticFallback": "/images/wow/Hero/devision/Design 1.jpg"
          },
          {
            "attributePath": "industries.professionalServices",
            "fieldName": "professionalServices",
            "adminLabel": "Industries — Professional Services",
            "sectionKey": "wowmarketing.industries",
            "index": 3,
            "staticFallback": "/images/wow/Hero/devision/Image-copy-scaled.jpeg"
          },
          {
            "attributePath": "industries.retailEcommerce",
            "fieldName": "retailEcommerce",
            "adminLabel": "Industries — Retail & eCommerce",
            "sectionKey": "wowmarketing.industries",
            "index": 4,
            "staticFallback": "/images/wow/Hero/devision/Mockup 2 Dark.png"
          },
          {
            "attributePath": "industries.legalFinance",
            "fieldName": "legalFinance",
            "adminLabel": "Industries — Legal & Finance",
            "sectionKey": "wowmarketing.industries",
            "index": 5,
            "staticFallback": "/images/wow/Hero/devision/Design 1.jpg"
          }
        ]
      }
    ]
  },
  {
    "divisionId": "wowDesign",
    "apiSlug": "wowdesign",
    "adminLabel": "WOW Design",
    "hasPortfolio": true,
    "sections": [
      {
        "attributeName": "hero",
        "componentDisplayName": "Hero — carousel (3 images)",
        "componentUid": "division-landing.wowdesign-hero",
        "sectionKey": "wowdesign.hero",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "hero.carouselImage1",
            "fieldName": "carouselImage1",
            "adminLabel": "Hero — carousel image 1",
            "sectionKey": "wowdesign.hero",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Design 1.jpg"
          },
          {
            "attributePath": "hero.carouselImage2",
            "fieldName": "carouselImage2",
            "adminLabel": "Hero — carousel image 2",
            "sectionKey": "wowdesign.hero",
            "index": 1,
            "staticFallback": "/images/wow/Hero/devision/Design 2.jpg"
          },
          {
            "attributePath": "hero.carouselImage3",
            "fieldName": "carouselImage3",
            "adminLabel": "Hero — carousel image 3",
            "sectionKey": "wowdesign.hero",
            "index": 2,
            "staticFallback": "/images/wow/Hero/devision/Mockup 2 Dark.png"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "challenge",
        "componentDisplayName": "Challenge — before / after",
        "componentUid": "division-landing.wowdesign-challenge",
        "sectionKey": "wowdesign.challenge",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "challenge.beforeImage",
            "fieldName": "beforeImage",
            "adminLabel": "Challenge — before image",
            "sectionKey": "wowdesign.challenge",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Website 1.jpg"
          },
          {
            "attributePath": "challenge.afterImage",
            "fieldName": "afterImage",
            "adminLabel": "Challenge — after image",
            "sectionKey": "wowdesign.challenge",
            "index": 1,
            "staticFallback": "/images/wow/Hero/devision/Mockup 2 Dark.png"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "services",
        "componentDisplayName": "Services — cards",
        "componentUid": "division-landing.wowdesign-services",
        "sectionKey": "wowdesign.services",
        "contentMode": "repeatable",
        "cardKind": "service",
        "repeatableComponentUid": "division-landing.landing-service-card",
        "slots": [],
        "legacySlots": [
          {
            "attributePath": "services.brandIdentity",
            "fieldName": "brandIdentity",
            "adminLabel": "Services — Brand identity",
            "sectionKey": "wowdesign.services",
            "index": 0,
            "staticFallback": "/images/wow/LandingPageNaveBare/Branding%20%26%20Creative%202.svg"
          },
          {
            "attributePath": "services.graphicDesign",
            "fieldName": "graphicDesign",
            "adminLabel": "Services — Graphic design",
            "sectionKey": "wowdesign.services",
            "index": 1,
            "staticFallback": "/images/wow/Hero/devision/Design 2.jpg"
          },
          {
            "attributePath": "services.digitalDesign",
            "fieldName": "digitalDesign",
            "adminLabel": "Services — Digital design",
            "sectionKey": "wowdesign.services",
            "index": 2,
            "staticFallback": "/images/wow/Hero/devision/Mockup 2 Dark.png"
          },
          {
            "attributePath": "services.videoMotion",
            "fieldName": "videoMotion",
            "adminLabel": "Services — Video & motion",
            "sectionKey": "wowdesign.services",
            "index": 3,
            "staticFallback": "/images/wow/Hero/devision/Design 1.jpg"
          }
        ]
      }
    ]
  },
  {
    "divisionId": "wowIntelligence",
    "apiSlug": "wowintelligence",
    "adminLabel": "WOW Intelligence",
    "hasPortfolio": false,
    "sections": [
      {
        "attributeName": "showcase",
        "componentDisplayName": "AI showcase",
        "componentUid": "division-landing.wowintelligence-showcase",
        "sectionKey": "wowintelligence.showcase",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "showcase.feature",
            "fieldName": "feature",
            "adminLabel": "Showcase — feature image",
            "sectionKey": "wowintelligence.showcase",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Intelligence.jpg"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "clients",
        "componentDisplayName": "Client highlights",
        "componentUid": "division-landing.wowintelligence-clients",
        "sectionKey": "wowintelligence.clients",
        "contentMode": "repeatable",
        "cardKind": "client",
        "repeatableComponentUid": "division-landing.landing-client-review",
        "slots": [],
        "legacySlots": [
          {
            "attributePath": "clients.clientMichaelCarter",
            "fieldName": "clientMichaelCarter",
            "adminLabel": "Clients — Michael Carter",
            "sectionKey": "wowintelligence.clients",
            "index": 0,
            "staticFallback": "/images/wow/Hero/client/Michael Carter.png"
          },
          {
            "attributePath": "clients.clientDanielFoster",
            "fieldName": "clientDanielFoster",
            "adminLabel": "Clients — Daniel Foster",
            "sectionKey": "wowintelligence.clients",
            "index": 1,
            "staticFallback": "/images/wow/Hero/client/Daniel Foster.png"
          },
          {
            "attributePath": "clients.clientEmmaRichardson",
            "fieldName": "clientEmmaRichardson",
            "adminLabel": "Clients — Emma Richardson",
            "sectionKey": "wowintelligence.clients",
            "index": 2,
            "staticFallback": "/images/wow/Hero/client/Emma Richardson.jpg"
          },
          {
            "attributePath": "clients.clientSophiaBennett",
            "fieldName": "clientSophiaBennett",
            "adminLabel": "Clients — Sophia Bennett",
            "sectionKey": "wowintelligence.clients",
            "index": 3,
            "staticFallback": "/images/wow/Hero/client/Sophia Bennett.png"
          },
          {
            "attributePath": "clients.clientAvatar",
            "fieldName": "clientAvatar",
            "adminLabel": "Clients — featured avatar",
            "sectionKey": "wowintelligence.clients",
            "index": 4,
            "staticFallback": "/images/wow/Hero/client/Avatar.png"
          }
        ]
      }
    ]
  },
  {
    "divisionId": "wowSocial",
    "apiSlug": "wowsocial",
    "adminLabel": "WOW Social",
    "hasPortfolio": false,
    "sections": [
      {
        "attributeName": "work",
        "componentDisplayName": "Portfolio — filterable work",
        "componentUid": "division-landing.wowsocial-work",
        "sectionKey": "wowsocial.work",
        "contentMode": "workExplorer",
        "workExplorerComponentUid": "division-landing.landing-work-explorer",
        "slots": [],
        "legacySlots": []
      },
      {
        "attributeName": "challenge",
        "componentDisplayName": "Challenge — before / after",
        "componentUid": "division-landing.wowsocial-challenge",
        "sectionKey": "wowsocial.challenge",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "challenge.beforeImage",
            "fieldName": "beforeImage",
            "adminLabel": "Challenge — before",
            "sectionKey": "wowsocial.challenge",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Website 1.jpg"
          },
          {
            "attributePath": "challenge.afterImage",
            "fieldName": "afterImage",
            "adminLabel": "Challenge — after",
            "sectionKey": "wowsocial.challenge",
            "index": 1,
            "staticFallback": "/images/wow/Hero/devision/Mockup 2 Dark.png"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "services",
        "componentDisplayName": "Services — cards",
        "componentUid": "division-landing.wowsocial-services",
        "sectionKey": "wowsocial.services",
        "contentMode": "repeatable",
        "cardKind": "service",
        "repeatableComponentUid": "division-landing.landing-service-card",
        "slots": [],
        "legacySlots": [
          {
            "attributePath": "services.socialStrategy",
            "fieldName": "socialStrategy",
            "adminLabel": "Services — Social strategy",
            "sectionKey": "wowsocial.services",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Design 1.jpg"
          },
          {
            "attributePath": "services.contentCreation",
            "fieldName": "contentCreation",
            "adminLabel": "Services — Content creation",
            "sectionKey": "wowsocial.services",
            "index": 1,
            "staticFallback": "/images/wow/Hero/devision/Design 2.jpg"
          },
          {
            "attributePath": "services.paidSocial",
            "fieldName": "paidSocial",
            "adminLabel": "Services — Paid social",
            "sectionKey": "wowsocial.services",
            "index": 2,
            "staticFallback": "/images/wow/Hero/devision/Intelligence.jpg"
          }
        ]
      }
    ]
  },
  {
    "divisionId": "wowAccelerate",
    "apiSlug": "wowaccelerate",
    "adminLabel": "WOW Accelerate",
    "hasPortfolio": false,
    "sections": [
      {
        "attributeName": "hero",
        "componentDisplayName": "Hero",
        "componentUid": "division-landing.wowaccelerate-hero",
        "sectionKey": "wowaccelerate.hero",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "hero.banner",
            "fieldName": "banner",
            "adminLabel": "Hero — banner",
            "sectionKey": "wowaccelerate.hero",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Accelerate.jpg"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "framework",
        "componentDisplayName": "Framework",
        "componentUid": "division-landing.wowaccelerate-framework",
        "sectionKey": "wowaccelerate.framework",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "framework.illustration",
            "fieldName": "illustration",
            "adminLabel": "Framework — illustration",
            "sectionKey": "wowaccelerate.framework",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Accelerate.jpg"
          }
        ],
        "legacySlots": []
      }
    ]
  },
  {
    "divisionId": "wowWebsites",
    "apiSlug": "wowwebsites",
    "adminLabel": "WOW Websites",
    "hasPortfolio": true,
    "sections": [
      {
        "attributeName": "hero",
        "componentDisplayName": "Hero",
        "componentUid": "division-landing.wowwebsites-hero",
        "sectionKey": "wowwebsites.hero",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "hero.banner",
            "fieldName": "banner",
            "adminLabel": "Hero — banner",
            "sectionKey": "wowwebsites.hero",
            "index": 0,
            "staticFallback": "/images/home-5/awards-feature-img.png"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "problem",
        "componentDisplayName": "Problem section",
        "componentUid": "division-landing.wowwebsites-problem",
        "sectionKey": "wowwebsites.problem",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "problem.visual",
            "fieldName": "visual",
            "adminLabel": "Problem — visual",
            "sectionKey": "wowwebsites.problem",
            "index": 0,
            "staticFallback": "/images/home-5/hero-img.png"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "framework",
        "componentDisplayName": "Framework",
        "componentUid": "division-landing.wowwebsites-framework",
        "sectionKey": "wowwebsites.framework",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "framework.illustration",
            "fieldName": "illustration",
            "adminLabel": "Framework — illustration",
            "sectionKey": "wowwebsites.framework",
            "index": 0,
            "staticFallback": "/images/home-5/awards-feature-img.png"
          }
        ],
        "legacySlots": []
      }
    ]
  },
  {
    "divisionId": "wowImpact",
    "apiSlug": "wowimpact",
    "adminLabel": "WOW Impact",
    "hasPortfolio": false,
    "sections": [
      {
        "attributeName": "hero",
        "componentDisplayName": "Hero",
        "componentUid": "division-landing.wowimpact-hero",
        "sectionKey": "wowimpact.hero",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "hero.banner",
            "fieldName": "banner",
            "adminLabel": "Hero — banner",
            "sectionKey": "wowimpact.hero",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Education.jpg"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "work",
        "componentDisplayName": "Work — project grid",
        "componentUid": "division-landing.wowimpact-work",
        "sectionKey": "wowimpact.work",
        "contentMode": "workExplorer",
        "workExplorerComponentUid": "division-landing.landing-work-explorer",
        "slots": [],
        "legacySlots": [
          {
            "attributePath": "work.project1",
            "fieldName": "project1",
            "adminLabel": "Work — project 1",
            "sectionKey": "wowimpact.work",
            "index": 0,
            "staticFallback": "/images/wow/Hero/Human/ali.png"
          },
          {
            "attributePath": "work.project2",
            "fieldName": "project2",
            "adminLabel": "Work — project 2",
            "sectionKey": "wowimpact.work",
            "index": 1,
            "staticFallback": "/images/wow/Hero/devision/Design 1.jpg"
          },
          {
            "attributePath": "work.project3",
            "fieldName": "project3",
            "adminLabel": "Work — project 3",
            "sectionKey": "wowimpact.work",
            "index": 2,
            "staticFallback": "/images/wow/Hero/devision/Education.jpg"
          },
          {
            "attributePath": "work.project4",
            "fieldName": "project4",
            "adminLabel": "Work — project 4",
            "sectionKey": "wowimpact.work",
            "index": 3,
            "staticFallback": "/images/wow/Hero/devision/DSCF0537.jpg"
          }
        ]
      },
      {
        "attributeName": "challenge",
        "componentDisplayName": "Challenge — before / after",
        "componentUid": "division-landing.wowimpact-challenge",
        "sectionKey": "wowimpact.challenge",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "challenge.beforeImage",
            "fieldName": "beforeImage",
            "adminLabel": "Challenge — before",
            "sectionKey": "wowimpact.challenge",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Website 1.jpg"
          },
          {
            "attributePath": "challenge.afterImage",
            "fieldName": "afterImage",
            "adminLabel": "Challenge — after",
            "sectionKey": "wowimpact.challenge",
            "index": 1,
            "staticFallback": "/images/wow/Hero/devision/Design 2.jpg"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "services",
        "componentDisplayName": "Services — cards",
        "componentUid": "division-landing.wowimpact-services",
        "sectionKey": "wowimpact.services",
        "contentMode": "repeatable",
        "cardKind": "service",
        "repeatableComponentUid": "division-landing.landing-service-card",
        "slots": [],
        "legacySlots": [
          {
            "attributePath": "services.service1",
            "fieldName": "service1",
            "adminLabel": "Services — card 1",
            "sectionKey": "wowimpact.services",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Website 2.jpg"
          },
          {
            "attributePath": "services.service2",
            "fieldName": "service2",
            "adminLabel": "Services — card 2",
            "sectionKey": "wowimpact.services",
            "index": 1,
            "staticFallback": "/images/wow/Hero/devision/Intelligence.jpg"
          },
          {
            "attributePath": "services.service3",
            "fieldName": "service3",
            "adminLabel": "Services — card 3",
            "sectionKey": "wowimpact.services",
            "index": 2,
            "staticFallback": "/images/wow/Hero/devision/Mockup 2 Dark.png"
          },
          {
            "attributePath": "services.service4",
            "fieldName": "service4",
            "adminLabel": "Services — card 4",
            "sectionKey": "wowimpact.services",
            "index": 3,
            "staticFallback": "/images/wow/Hero/devision/Events.jpg"
          }
        ]
      },
      {
        "attributeName": "approach",
        "componentDisplayName": "Approach",
        "componentUid": "division-landing.wowimpact-approach",
        "sectionKey": "wowimpact.approach",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "approach.visual",
            "fieldName": "visual",
            "adminLabel": "Approach — visual",
            "sectionKey": "wowimpact.approach",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/C-17.jpg"
          }
        ],
        "legacySlots": []
      }
    ]
  },
  {
    "divisionId": "wowHost",
    "apiSlug": "wowhost",
    "adminLabel": "WOW Host",
    "hasPortfolio": false,
    "sections": [
      {
        "attributeName": "hero",
        "componentDisplayName": "Hero",
        "componentUid": "division-landing.wowhost-hero",
        "sectionKey": "wowhost.hero",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "hero.banner",
            "fieldName": "banner",
            "adminLabel": "Hero — banner",
            "sectionKey": "wowhost.hero",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Server.jpg"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "hostingSolutions",
        "componentDisplayName": "Hosting solutions",
        "componentUid": "division-landing.wowhost-hosting-solutions",
        "sectionKey": "wowhost.hostingSolutions",
        "contentMode": "repeatable",
        "cardKind": "hosting",
        "repeatableComponentUid": "division-landing.landing-hosting-offering",
        "slots": [],
        "legacySlots": [
          {
            "attributePath": "hostingSolutions.solution1",
            "fieldName": "solution1",
            "adminLabel": "Hosting solutions — option 1",
            "sectionKey": "wowhost.hostingSolutions",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Intelligence.jpg"
          },
          {
            "attributePath": "hostingSolutions.solution2",
            "fieldName": "solution2",
            "adminLabel": "Hosting solutions — option 2",
            "sectionKey": "wowhost.hostingSolutions",
            "index": 1,
            "staticFallback": "/images/wow/Hero/devision/Website 1.jpg"
          },
          {
            "attributePath": "hostingSolutions.solution3",
            "fieldName": "solution3",
            "adminLabel": "Hosting solutions — option 3",
            "sectionKey": "wowhost.hostingSolutions",
            "index": 2,
            "staticFallback": "/images/wow/Hero/devision/Mockup 2 Dark.png"
          },
          {
            "attributePath": "hostingSolutions.solution4",
            "fieldName": "solution4",
            "adminLabel": "Hosting solutions — option 4",
            "sectionKey": "wowhost.hostingSolutions",
            "index": 3,
            "staticFallback": "/images/wow/LandingPageNaveBare/AI%20and%20Automation%202.svg"
          }
        ]
      },
      {
        "attributeName": "essentials",
        "componentDisplayName": "Essentials — services",
        "componentUid": "division-landing.wowhost-essentials",
        "sectionKey": "wowhost.essentials",
        "contentMode": "repeatable",
        "cardKind": "service",
        "repeatableComponentUid": "division-landing.landing-service-card",
        "slots": [],
        "legacySlots": [
          {
            "attributePath": "essentials.essential1",
            "fieldName": "essential1",
            "adminLabel": "Essentials — service 1",
            "sectionKey": "wowhost.essentials",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Website 2.jpg"
          },
          {
            "attributePath": "essentials.essential2",
            "fieldName": "essential2",
            "adminLabel": "Essentials — service 2",
            "sectionKey": "wowhost.essentials",
            "index": 1,
            "staticFallback": "/images/wow/Hero/devision/Design 2.jpg"
          },
          {
            "attributePath": "essentials.essential3",
            "fieldName": "essential3",
            "adminLabel": "Essentials — service 3",
            "sectionKey": "wowhost.essentials",
            "index": 2,
            "staticFallback": "/images/wow/Hero/devision/Accelerate.jpg"
          }
        ]
      },
      {
        "attributeName": "infrastructure",
        "componentDisplayName": "Infrastructure",
        "componentUid": "division-landing.wowhost-infrastructure",
        "sectionKey": "wowhost.infrastructure",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "infrastructure.visual",
            "fieldName": "visual",
            "adminLabel": "Infrastructure — visual",
            "sectionKey": "wowhost.infrastructure",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/C-17.jpg"
          }
        ],
        "legacySlots": []
      }
    ]
  },
  {
    "divisionId": "wowHub",
    "apiSlug": "wowhub",
    "adminLabel": "WOW Hub",
    "hasPortfolio": false,
    "sections": [
      {
        "attributeName": "hero",
        "componentDisplayName": "Hero",
        "componentUid": "division-landing.wowhub-hero",
        "sectionKey": "wowhub.hero",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "hero.banner",
            "fieldName": "banner",
            "adminLabel": "Hero — banner",
            "sectionKey": "wowhub.hero",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Education.jpg"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "explore",
        "componentDisplayName": "Explore — topic cards",
        "componentUid": "division-landing.wowhub-explore",
        "sectionKey": "wowhub.explore",
        "contentMode": "repeatable",
        "cardKind": "service",
        "repeatableComponentUid": "division-landing.landing-service-card",
        "slots": [],
        "legacySlots": [
          {
            "attributePath": "explore.topic1",
            "fieldName": "topic1",
            "adminLabel": "Explore — card 1",
            "sectionKey": "wowhub.explore",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Design 1.jpg"
          },
          {
            "attributePath": "explore.topic2",
            "fieldName": "topic2",
            "adminLabel": "Explore — card 2",
            "sectionKey": "wowhub.explore",
            "index": 1,
            "staticFallback": "/images/wow/Hero/devision/Design 2.jpg"
          },
          {
            "attributePath": "explore.topic3",
            "fieldName": "topic3",
            "adminLabel": "Explore — card 3",
            "sectionKey": "wowhub.explore",
            "index": 2,
            "staticFallback": "/images/wow/Hero/devision/Intelligence.jpg"
          },
          {
            "attributePath": "explore.topic4",
            "fieldName": "topic4",
            "adminLabel": "Explore — card 4",
            "sectionKey": "wowhub.explore",
            "index": 3,
            "staticFallback": "/images/wow/Hero/devision/Website 2.jpg"
          },
          {
            "attributePath": "explore.topic5",
            "fieldName": "topic5",
            "adminLabel": "Explore — card 5",
            "sectionKey": "wowhub.explore",
            "index": 4,
            "staticFallback": "/images/wow/Hero/devision/Events (1).jpg"
          },
          {
            "attributePath": "explore.topic6",
            "fieldName": "topic6",
            "adminLabel": "Explore — card 6",
            "sectionKey": "wowhub.explore",
            "index": 5,
            "staticFallback": "/images/wow/Hero/devision/C-17.jpg"
          }
        ]
      },
      {
        "attributeName": "community",
        "componentDisplayName": "Community banner",
        "componentUid": "division-landing.wowhub-community",
        "sectionKey": "wowhub.community",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "community.banner",
            "fieldName": "banner",
            "adminLabel": "Community — banner image",
            "sectionKey": "wowhub.community",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Events.jpg"
          }
        ],
        "legacySlots": []
      }
    ]
  },
  {
    "divisionId": "wowEvents",
    "apiSlug": "wowevents",
    "adminLabel": "WOW Events",
    "hasPortfolio": false,
    "sections": [
      {
        "attributeName": "hero",
        "componentDisplayName": "Hero",
        "componentUid": "division-landing.wowevents-hero",
        "sectionKey": "wowevents.hero",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "hero.banner",
            "fieldName": "banner",
            "adminLabel": "Hero — banner",
            "sectionKey": "wowevents.hero",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Events.jpg"
          }
        ],
        "legacySlots": []
      },
      {
        "attributeName": "work",
        "componentDisplayName": "Work — showcase",
        "componentUid": "division-landing.wowevents-work",
        "sectionKey": "wowevents.work",
        "contentMode": "workExplorer",
        "workExplorerComponentUid": "division-landing.landing-work-explorer",
        "slots": [],
        "legacySlots": [
          {
            "attributePath": "work.showcase1",
            "fieldName": "showcase1",
            "adminLabel": "Work — image 1",
            "sectionKey": "wowevents.work",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Events (1).jpg"
          },
          {
            "attributePath": "work.showcase2",
            "fieldName": "showcase2",
            "adminLabel": "Work — image 2",
            "sectionKey": "wowevents.work",
            "index": 1,
            "staticFallback": "/images/wow/Hero/devision/Education.jpg"
          },
          {
            "attributePath": "work.showcase3",
            "fieldName": "showcase3",
            "adminLabel": "Work — image 3",
            "sectionKey": "wowevents.work",
            "index": 2,
            "staticFallback": "/images/wow/Hero/devision/Design 1.jpg"
          },
          {
            "attributePath": "work.showcase4",
            "fieldName": "showcase4",
            "adminLabel": "Work — image 4",
            "sectionKey": "wowevents.work",
            "index": 3,
            "staticFallback": "/images/wow/Hero/devision/Intelligence.jpg"
          },
          {
            "attributePath": "work.showcase5",
            "fieldName": "showcase5",
            "adminLabel": "Work — image 5",
            "sectionKey": "wowevents.work",
            "index": 4,
            "staticFallback": "/images/wow/Hero/devision/C-17.jpg"
          }
        ]
      },
      {
        "attributeName": "services",
        "componentDisplayName": "Services — cards",
        "componentUid": "division-landing.wowevents-services",
        "sectionKey": "wowevents.services",
        "contentMode": "repeatable",
        "cardKind": "service",
        "repeatableComponentUid": "division-landing.landing-service-card",
        "slots": [],
        "legacySlots": [
          {
            "attributePath": "services.service1",
            "fieldName": "service1",
            "adminLabel": "Services — card 1",
            "sectionKey": "wowevents.services",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Events.jpg"
          },
          {
            "attributePath": "services.service2",
            "fieldName": "service2",
            "adminLabel": "Services — card 2",
            "sectionKey": "wowevents.services",
            "index": 1,
            "staticFallback": "/images/wow/Hero/devision/Design 2.jpg"
          },
          {
            "attributePath": "services.service3",
            "fieldName": "service3",
            "adminLabel": "Services — card 3",
            "sectionKey": "wowevents.services",
            "index": 2,
            "staticFallback": "/images/wow/Hero/devision/Website 2.jpg"
          },
          {
            "attributePath": "services.service4",
            "fieldName": "service4",
            "adminLabel": "Services — card 4",
            "sectionKey": "wowevents.services",
            "index": 3,
            "staticFallback": "/images/wow/Hero/devision/Mockup 2 Dark.png"
          }
        ]
      },
      {
        "attributeName": "approach",
        "componentDisplayName": "Approach",
        "componentUid": "division-landing.wowevents-approach",
        "sectionKey": "wowevents.approach",
        "contentMode": "imageSlots",
        "slots": [
          {
            "attributePath": "approach.visual",
            "fieldName": "visual",
            "adminLabel": "Approach — visual",
            "sectionKey": "wowevents.approach",
            "index": 0,
            "staticFallback": "/images/wow/Hero/devision/Events (1).jpg"
          }
        ],
        "legacySlots": []
      }
    ]
  }
] as const;

export function pageDefByDivisionId(divisionId: DivisionId): DivisionLandingPageDef | undefined {
  return DIVISION_LANDING_PAGE_DEFS.find((d) => d.divisionId === divisionId);
}
