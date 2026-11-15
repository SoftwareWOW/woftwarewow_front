import { divisionNavBarImage } from '@/components/wow/nav/landing-nav-images'

const marketingServices = 'WOW Marketing/Services'
const marketingSolutions = 'WOW Marketing/Solutions'
const softwareServices = 'SoftwareWOW/Services'
const softwareSolutions = 'SoftwareWOW/Solutions'
const websites = 'WOW Websites'
const design = 'WOW Design'
const intelligentAi = 'WOW Intelligent/AI Solutions'
const intelligentUseCases = 'WOW Intelligent/Use Cases'
const accelerateServices = 'WOW Accelerate/Services'
const accelerateSolutions = 'WOW Accelerate/Solutions'
const social = 'WOW Social'
const host = 'WOW Host'

/** Mega-menu detail panel images keyed by nav item id (division mega-nav pills). */
export const divisionNavBarImageByNavId: Record<string, string> = {
  // WOW Marketing — services
  searchEngineOptimization: divisionNavBarImage(
    marketingServices,
    '1. Search Engine Optimization 1.svg',
  ),
  payPerClickAdvertising: divisionNavBarImage(
    marketingServices,
    '2. Pay-Per-Click Advertising 1.svg',
  ),
  socialMediaMarketing: divisionNavBarImage(marketingServices, '3. Social Media Marketing 1.svg'),
  contentMarketing: divisionNavBarImage(marketingServices, '4. Content Marketing 1.svg'),
  emailMarketing: divisionNavBarImage(marketingServices, '5. Email marketing 1.svg'),
  marketingAutomationService: divisionNavBarImage(
    marketingServices,
    '6. Marketing Automation 1.svg',
  ),
  leadGenerationService: divisionNavBarImage(marketingServices, '7. Lead Generation 1.svg'),
  analyticsReporting: divisionNavBarImage(marketingServices, '8. Analytics & Reporting 1.svg'),
  localSeo: divisionNavBarImage(marketingServices, '9. Local SEO 1.svg'),
  digitalStrategy: divisionNavBarImage(marketingServices, '10. Digital Strategy 1.svg'),

  // WOW Marketing — solutions
  brandAwarenessVisibility: divisionNavBarImage(
    marketingSolutions,
    '1. Brand Awareness & Visibility 1.svg',
  ),
  leadGenerationCustomerAcquisition: divisionNavBarImage(
    marketingSolutions,
    '2. Lead Generation & Customer Acquisition 1.svg',
  ),
  ecommerceSalesGrowth: divisionNavBarImage(
    marketingSolutions,
    '3. eCommerce & Sales Growth 1.svg',
  ),
  productLaunchGoToMarket: divisionNavBarImage(
    marketingSolutions,
    '4. Product Launch & Go-to-Market 1.svg',
  ),
  customerRetentionEngagement: divisionNavBarImage(
    marketingSolutions,
    '5. Customer Retention & Engagement 1.svg',
  ),
  marketingPerformanceOptimization: divisionNavBarImage(
    marketingSolutions,
    '6. Marketing Performance & Optimization 1.svg',
  ),

  // SoftwareWOW — services
  customSoftwareDevelopment: divisionNavBarImage(softwareServices, '1. Custom software 1.svg'),
  webApplications: divisionNavBarImage(softwareServices, '2. Web & Mobile app 1.svg'),
  mobileApplications: divisionNavBarImage(softwareServices, '2. Web & Mobile app 1.svg'),
  businessSystemsAutomation: divisionNavBarImage(softwareServices, '3. Business system 1.svg'),
  productDesignPrototyping: divisionNavBarImage(
    softwareServices,
    '4. Product Design & Prototyping 1.svg',
  ),
  integrationsModernization: divisionNavBarImage(
    softwareServices,
    '5. Integrations & Modernization 1.svg',
  ),
  softwareSupportImprovement: divisionNavBarImage(
    softwareServices,
    '6. Software Support & Improvement 1.svg',
  ),

  // SoftwareWOW — solutions
  manageMyBusiness: divisionNavBarImage(softwareSolutions, '1. Manage My Business 1.svg'),
  serveMyCustomers: divisionNavBarImage(softwareSolutions, '2. Serve My Customers 1.svg'),
  launchDigitalProduct: divisionNavBarImage(softwareSolutions, '3. Launch a Digital Product 1.svg'),
  connectMyTools: divisionNavBarImage(softwareSolutions, '4. Connect My Tools 1.svg'),
  createMobileExperience: divisionNavBarImage(
    softwareSolutions,
    '5. Create a Mobile Experience 1.svg',
  ),

  // WOW Websites
  businessWebsites: divisionNavBarImage(websites, '1. Business Websites 1.svg'),
  ecommerceWebsites: divisionNavBarImage(websites, '2. eCommerce Websites 1.svg'),
  websiteRedesigns: divisionNavBarImage(websites, '3. Website Redesigns 1.svg'),
  landingPages: divisionNavBarImage(websites, '4. Landing pages 1.svg'),
  accessibleWebExperiences: divisionNavBarImage(websites, '5.Accessible Web Experiences 1.svg'),
  multilingualWebsites: divisionNavBarImage(websites, '6. Multilingual Websites 1.svg'),
  websiteOptimization: divisionNavBarImage(websites, '7. Website Optimization 1.svg'),
  conversionOptimization: divisionNavBarImage(websites, '8. Conversion Optimization 1.svg'),

  // WOW Design
  brandIdentityStrategy: divisionNavBarImage(design, '1. Brand Identity & Strategy 1.svg'),
  graphicMarketingDesign: divisionNavBarImage(design, '2. Graphic & Marketing Design 1.svg'),
  uiUxDigitalDesign: divisionNavBarImage(design, '3. UI UX Design 1.svg'),
  videoMotionCreativeContent: divisionNavBarImage(
    design,
    '4. Video, Motion & Creative Content 1.svg',
  ),

  // WOW Intelligent — AI solutions
  aiAssistantsChatbots: divisionNavBarImage(
    intelligentAi,
    '1. AI Assistants & Chatbots 1.svg',
  ),
  intelligentAutomation: divisionNavBarImage(intelligentAi, '2. Intelligent Automation 1.svg'),
  businessIntelligencePredictiveInsights: divisionNavBarImage(
    intelligentAi,
    '3. Business Intelligence & Predictive Insights 1.svg',
  ),

  // WOW Intelligent — use cases
  useCaseSales: divisionNavBarImage(intelligentUseCases, '1. Sales (2) 1.svg'),
  useCaseMarketing: divisionNavBarImage(intelligentUseCases, '2. Marketing 1.svg'),
  useCaseCustomerService: divisionNavBarImage(intelligentUseCases, '3. Customer Service 1.svg'),
  useCaseOperations: divisionNavBarImage(intelligentUseCases, '4. Operations 1.svg'),

  // WOW Accelerate — services
  leadGeneration: divisionNavBarImage(accelerateServices, '1. Lead Generation.svg'),
  appointmentSettingOutreach: divisionNavBarImage(
    accelerateServices,
    '7. Appointment Setting & Outreach 1.svg',
  ),
  salesFunnelDevelopment: divisionNavBarImage(
    accelerateServices,
    '2. Sales Funnel Development.svg',
  ),
  leadQualificationNurturing: divisionNavBarImage(
    accelerateServices,
    '8. Lead Qualification & Nurturing 1.svg',
  ),
  crmSetupOptimization: divisionNavBarImage(
    accelerateServices,
    '3. CRM Setup & Optimization.svg',
  ),
  salesAutomation: divisionNavBarImage(accelerateServices, '4. Sales Automation 1.svg'),
  salesAnalyticsReporting: divisionNavBarImage(
    accelerateServices,
    '5. Sales Analytics & Reporting.svg',
  ),
  salesProcessOptimization: divisionNavBarImage(
    accelerateServices,
    '6. Sales Process Optimization 1.svg',
  ),

  // WOW Accelerate — solutions
  leadGenerationOutbound: divisionNavBarImage(
    accelerateSolutions,
    '1. Lead Generation & Outbound 1.svg',
  ),
  salesFunnelsConversion: divisionNavBarImage(
    accelerateSolutions,
    '2.  Sales Funnels & Conversion 1.svg',
  ),
  crmSalesSystems: divisionNavBarImage(accelerateSolutions, '3. CRM & Sales Systems 1.svg'),
  salesAutomationEnablement: divisionNavBarImage(
    accelerateSolutions,
    '4. Sales Automation & Enablement 1.svg',
  ),

  // WOW Social
  socialMediaStrategyManagement: divisionNavBarImage(
    social,
    '1. Social Media Strategy & Management 1.svg',
  ),
  socialInfluencerContentCreation: divisionNavBarImage(
    social,
    '2. Social & Influencer Content Creation 1.svg',
  ),
  paidSocialAdvertisingCommunityManagement: divisionNavBarImage(
    social,
    'Social Media Growth Campaign 1.svg',
  ),

  // WOW Host — hosting services only (solutions keep landing-nav fallbacks)
  sharedWebHosting: divisionNavBarImage(host, 'Hyper-Realistic Blue-Lit Data Center 1.svg'),
  vpsHosting: divisionNavBarImage(host, 'Futuristic Purple-Glowing VPS Server 1.svg'),
  dedicatedServers: divisionNavBarImage(host, 'Futuristic Data Center Light Trails 1.svg'),
  cloudHosting: divisionNavBarImage(host, 'Glowing Lavender Cloud in Purple Void 1.svg'),
}