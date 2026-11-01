import { landingNavImage } from './landing-nav-images'
import type { LucideIcon } from 'lucide-react'
import {
  Award,
  BookOpen,
  Bot,
  Briefcase,
  Building2,
  Calendar,
  Clapperboard,
  Cloud,
  Code2,
  Compass,
  Cpu,
  FileText,
  Filter,
  FolderOpen,
  Globe,
  GraduationCap,
  Headphones,
  Handshake,
  Heart,
  HeartPulse,
  HelpCircle,
  Landmark,
  LayoutGrid,
  Lightbulb,
  LineChart,
  Mail,
  MapPin,
  Megaphone,
  MoreHorizontal,
  Network,
  Newspaper,
  Palette,
  Plane,
  Receipt,
  RefreshCw,
  Rocket,
  Server,
  Shield,
  Share2,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  SwatchBook,
  Tag,
  Target,
  TrendingUp,
  Users,
  UsersRound,
  Workflow,
  Zap,
} from 'lucide-react'

/** Lucide icons for navigation menu items (links & packages). Division logos use nav-brand-assets.ts */
export const navMenuIcons = {
  // Company — About
  aboutUs: Building2,
  about: Building2,
  strategyCentre: Target,
  teamExperts: Users,
  whySmbs: Store,
  partners: Handshake,
  whyUs: Sparkles,
  ourProcess: Workflow,
  contact: Mail,

  // SoftwareWOW — Services
  customSoftware: Code2,
  customSoftwareDevelopment: Code2,
  webMobileApplications: Smartphone,
  businessSystemsAutomation: Workflow,
  productDesignPrototyping: Palette,
  integrationsModernization: RefreshCw,
  softwareSupportImprovement: HelpCircle,
  manageMyBusiness: Briefcase,
  serveMyCustomers: Users,
  launchDigitalProduct: Rocket,
  connectMyTools: Network,
  createMobileExperience: Smartphone,
  saasDevelopment: Cloud,
  webApplications: LayoutGrid,
  mobileApps: Smartphone,
  modernizationIntegrations: RefreshCw,

  // SoftwareWOW — Solutions
  startupMvp: Rocket,
  businessSystems: Briefcase,
  saasProducts: Cloud,
  digitalTransformation: Zap,
  aiSolutions: Cpu,

  // SoftwareWOW — Work
  caseStudies: FileText,

  // WOW Marketing — Services
  searchEngineOptimization: TrendingUp,
  payPerClickAdvertising: Target,
  socialMediaMarketing: Share2,
  contentMarketing: FileText,
  emailMarketing: Mail,
  marketingAutomationService: Workflow,
  leadGenerationService: Users,
  analyticsReporting: LineChart,
  localSeo: MapPin,
  digitalStrategy: Compass,

  // WOW Marketing — Solutions
  brandAwarenessVisibility: Megaphone,
  leadGenerationCustomerAcquisition: Target,
  ecommerceSalesGrowth: ShoppingBag,
  productLaunchGoToMarket: Rocket,
  customerRetentionEngagement: Heart,
  marketingPerformanceOptimization: LineChart,

  // WOW Websites — Services
  businessWebsites: LayoutGrid,
  ecommerceWebsites: ShoppingBag,
  websiteRedesigns: RefreshCw,
  landingPages: Megaphone,
  accessibleWebExperiences: HeartPulse,
  multilingualWebsites: Globe,
  conversionOptimization: LineChart,
  websiteOptimization: Zap,

  // WOW Intelligence — AI Solutions & Use Cases
  aiAssistantsChatbots: Bot,
  intelligentAutomation: Workflow,
  businessIntelligencePredictiveInsights: LineChart,
  useCaseSales: TrendingUp,
  useCaseMarketing: Megaphone,
  useCaseCustomerService: Headphones,
  useCaseOperations: Briefcase,

  // WOW Accelerate — Services & Solutions
  leadGeneration: Target,
  salesFunnelDevelopment: Filter,
  crmSetupOptimization: Briefcase,
  salesAutomation: Workflow,
  salesAnalyticsReporting: LineChart,
  salesProcessOptimization: RefreshCw,
  appointmentSettingOutreach: Calendar,
  leadQualificationNurturing: Users,
  leadGenerationOutbound: Target,
  salesFunnelsConversion: Megaphone,
  crmSalesSystems: LayoutGrid,
  salesAutomationEnablement: Zap,

  // WOW Design — Services
  brandIdentityStrategy: SwatchBook,
  graphicMarketingDesign: Palette,
  uiUxDigitalDesign: LayoutGrid,
  videoMotionCreativeContent: Clapperboard,

  // WOW Social — Services
  socialMediaStrategyManagement: LineChart,
  socialInfluencerContentCreation: Megaphone,
  paidSocialAdvertisingCommunityManagement: UsersRound,

  // WOW Host — Hosting & Solutions
  sharedWebHosting: Server,
  vpsHosting: Cpu,
  dedicatedServers: LayoutGrid,
  cloudHosting: Cloud,
  hostDigitalIdentity: Globe,
  hostProfessionalEmail: Mail,
  hostProtectOnline: Shield,

  // WOW Impact — Services
  personalBranding: Award,
  thoughtLeadership: Lightbulb,
  reputationVisibility: TrendingUp,
  speakingMediaPresence: Megaphone,

  // For You — Solutions
  buildLaunch: Rocket,
  softwareTechnology: Code2,
  marketingGrowth: TrendingUp,
  socialCommunity: UsersRound,
  salesRevenue: Receipt,
  aiAutomation: Bot,
  brandingCreative: Palette,
  hostingInfrastructure: Server,
  learningEvents: GraduationCap,

  // For You — Packages
  startupLaunchPackage: Rocket,
  businessGrowthPackage: LineChart,
  digitalTransformationPackage: Zap,
  aiAutomationPackage: Bot,
  saasProductDevelopmentPackage: Cloud,
  brandAuthorityPackage: Award,
  websiteGrowthEnginePackage: Megaphone,
  salesAccelerationPackage: TrendingUp,
  enterpriseInfrastructurePackage: Server,

  // Explore — Discover
  portfolio: FolderOpen,
  recentWorks: Calendar,
  clients: Users,
  partnerNetwork: Network,
  locations: MapPin,

  // Explore — Industries
  startupsEntrepreneurs: Lightbulb,
  professionalServices: Briefcase,
  retailEcommerce: ShoppingBag,
  healthcareWellness: HeartPulse,
  hospitalityTourism: Plane,
  financeRealEstate: Landmark,
  organizationsNonprofits: Handshake,
  educationTraining: BookOpen,
  technologySaas: Cloud,

  // More
  meet: Calendar,
  thinkTank: Lightbulb,
  quotation: FileText,
  clientPortal: LayoutGrid,
  whiteLabel: Tag,
  affiliate: Share2,
  insights: Newspaper,
  careers: Briefcase,
  helpSupport: HelpCircle,
  brandKit: SwatchBook,
} as const satisfies Record<string, LucideIcon>

export type NavMenuIconId = keyof typeof navMenuIcons

/** Lucide icons for mobile bottom navigation tabs */
export const mobileBottomNavIcons = {
  company: Building2,
  forYou: Heart,
  explore: Compass,
  more: MoreHorizontal,
  // SoftwareWOW division
  services: Code2,
  solutions: Rocket,
  work: FolderOpen,
} as const satisfies Record<string, LucideIcon>

export type MobileBottomNavIconId = keyof typeof mobileBottomNavIcons

const cardsBase = '/images/wow/nav/cards'

function landingNav(filename: string) {
  return landingNavImage(filename)
}

function cardImage(filename: string) {
  return `${cardsBase}/${encodeURIComponent(filename)}`
}

export const navCardImages = {
  default: cardImage('explore-default.jpg'),
  exploreDefault: cardImage('explore-default.jpg'),

  // Company — Divisions
  softwareWow: landingNav('Softwarewow 1 1.svg'),
  wowMarketing: cardImage('Marketing.png'),
  wowDesign: landingNav(
    'ux-graphic-designer-planning-application-process-d-2026-03-11-00-50-35-utc 2.svg',
  ),
  wowIntelligence: landingNav('Intelligence 2.svg'),
  wowSocial: landingNav('Social 3.svg'),
  wowAccelerate: landingNav('Accelerate 2.svg'),
  wowWebsites: landingNav('Website 1 2.svg'),
  wowImpact: landingNav('Impact 2.svg'),
  wowHost: landingNav('Hosting 2.svg'),
  wowHub: cardImage('Hub.png'),
  wowEvents: landingNav('Events 3.svg'),

  // Company — About
  aboutUs: landingNav('About Us 1.svg'),
  strategyCentre: landingNav('Strategy Center 1.svg'),
  teamExperts: landingNav('Teams & Experts 1.svg'),
  whySmbs: landingNav('Why Smbs 1.svg'),
  partners: landingNav('Partner 1.svg'),
  whyUs: landingNav('Why us 1.svg'),

  // For You — Solutions
  buildLaunch: landingNav(
    'new-modern-rocket-with-smoke-and-blast-successfull-2026-03-10-22-19-55-utc 2.svg',
  ),
  softwareTechnology: landingNav(
    'engineer-and-coworker-use-ai-cognitive-computing-o-2026-01-11-10-54-36-utc 2.svg',
  ),
  marketingGrowth: cardImage('Marketing.png'),
  socialCommunity: landingNav('Social 2 1.svg'),
  salesRevenue: landingNav(
    'trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc 2.svg',
  ),
  aiAutomation: landingNav('AI and Automation 2.svg'),
  brandingCreative: landingNav('Branding & Creative 2.svg'),
  hostingInfrastructure: landingNav('Hosting 2.svg'),
  learningEvents: landingNav(
    'rear-view-of-audience-in-the-conference-hall-or-se-2026-01-05-06-35-37-utc 2.svg',
  ),

  // For You — Packages
  startupLaunchPackage: landingNav('Startup laiunch 2.svg'),
  businessGrowthPackage: cardImage('Business growth 1.png'),
  digitalTransformationPackage: landingNav('digital transofrmation 2.svg'),
  aiAutomationPackage: landingNav('AI Automation 3.svg'),
  saasProductDevelopmentPackage: landingNav('SaaS Dev 2.svg'),
  brandAuthorityPackage: cardImage('social media start 1.png'),
  websiteGrowthEnginePackage: landingNav('Website 1 2.svg'),
  salesAccelerationPackage: cardImage('Sales Acceleration 1.png'),
  enterpriseInfrastructurePackage: landingNav(
    'data-servers-close-up-2026-01-08-06-54-55-utc 2.svg',
  ),

  // Explore — Discover
  portfolio: cardImage('pexels-cottonbro-4069290 1.png'),
  recentWorks: cardImage('pexels-fauxels-3183132 1.png'),
  clients: landingNav('pexels-akoonie-35088940 2.svg'),
  partnerNetwork: landingNav('Partner 1.svg'),
  locations: cardImage('pexels-karola-g-6255984 1.png'),

  // Explore — Industries
  startupsEntrepreneurs: landingNav(
    'new-modern-rocket-with-smoke-and-blast-successfull-2026-03-10-22-19-55-utc 2.svg',
  ),
  professionalServices: landingNav(
    'woman-using-laptop-with-technology-background-disp-2026-03-19-02-04-49-utc 1.svg',
  ),
  retailEcommerce: landingNav('pexels-cottonbro-8088441 2.svg'),
  healthcareWellness: landingNav(
    'hands-in-unity-teamwork-with-a-robotic-limb-2026-01-08-00-16-05-utc 1.svg',
  ),
  hospitalityTourism: cardImage('pexels-akaaljotsingh-anandpuria-156395437-10703306 1.png'),
  financeRealEstate: cardImage('explore-default.jpg'),
  organizationsNonprofits: landingNav(
    'multiracial-business-team-gathering-hands-in-unity-2026-01-09-11-41-19-utc 2.svg',
  ),
  educationTraining: landingNav('Education 2.svg'),
  technologySaas: landingNav('SaaS Dev 2.svg'),

  // More
  meet: landingNav('Meet 1.svg'),
  thinkTank: landingNav(
    'notes-with-words-and-female-hand-on-light-backgrou-2026-03-24-21-39-26-utc 1.svg',
  ),
  quotation: cardImage('explore-default.jpg'),
  clientPortal: cardImage('explore-default.jpg'),
  whiteLabel: cardImage('explore-default.jpg'),
  affiliate: cardImage('explore-default.jpg'),
  insights: landingNav(
    'notes-with-words-and-female-hand-on-light-backgrou-2026-03-24-21-39-26-utc 1.svg',
  ),
  careers: landingNav(
    'multiracial-business-team-gathering-hands-in-unity-2026-01-09-11-41-19-utc 2.svg',
  ),
  helpSupport: cardImage('explore-default.jpg'),
  brandKit: landingNav(
    'ux-graphic-designer-planning-application-process-d-2026-03-11-00-50-35-utc 2.svg',
  ),

  // SoftwareWOW division mega-menu
  customSoftwareDevelopment: landingNav('Softwarewow 1 1.svg'),
  webMobileApplications: landingNav('Website 1 2.svg'),
  businessSystemsAutomation: landingNav('AI and Automation 2.svg'),
  productDesignPrototyping: landingNav(
    'ux-graphic-designer-planning-application-process-d-2026-03-11-00-50-35-utc 2.svg',
  ),
  integrationsModernization: landingNav('digital transofrmation 2.svg'),
  softwareSupportImprovement: landingNav('Hosting 2.svg'),
  manageMyBusiness: landingNav(
    'trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc 2.svg',
  ),
  serveMyCustomers: landingNav('Social 2 1.svg'),
  launchDigitalProduct: landingNav(
    'new-modern-rocket-with-smoke-and-blast-successfull-2026-03-10-22-19-55-utc 2.svg',
  ),
  connectMyTools: landingNav(
    'engineer-and-coworker-use-ai-cognitive-computing-o-2026-01-11-10-54-36-utc 2.svg',
  ),
  createMobileExperience: landingNav('Website 1 2.svg'),

  // WOW Marketing division mega-menu
  searchEngineOptimization: landingNav(
    'woman-using-laptop-with-technology-background-disp-2026-03-19-02-04-49-utc 1.svg',
  ),
  payPerClickAdvertising: landingNav(
    'trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc 2.svg',
  ),
  socialMediaMarketing: landingNav('Social 2 1.svg'),
  contentMarketing: landingNav(
    'notes-with-words-and-female-hand-on-light-backgrou-2026-03-24-21-39-26-utc 1.svg',
  ),
  emailMarketing: cardImage('explore-default.jpg'),
  marketingAutomationService: landingNav('AI Automation 3.svg'),
  leadGenerationService: landingNav('pexels-akoonie-35088940 2.svg'),
  analyticsReporting: landingNav(
    'trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc 2.svg',
  ),
  localSeo: landingNav('Why Smbs 1.svg'),
  digitalStrategy: landingNav('Strategy Center 1.svg'),
  brandAwarenessVisibility: landingNav('Branding & Creative 2.svg'),
  leadGenerationCustomerAcquisition: landingNav('Partner 1.svg'),
  ecommerceSalesGrowth: landingNav('pexels-cottonbro-8088441 2.svg'),
  productLaunchGoToMarket: landingNav(
    'new-modern-rocket-with-smoke-and-blast-successfull-2026-03-10-22-19-55-utc 2.svg',
  ),
  customerRetentionEngagement: landingNav(
    'friends-looking-at-their-mobile-phone-on-winter-da-2026-01-07-00-16-22-utc 2.svg',
  ),
  marketingPerformanceOptimization: landingNav('Intelligence 2.svg'),

  // WOW Websites division mega-menu
  businessWebsites: landingNav('Website 1 2.svg'),
  ecommerceWebsites: landingNav('pexels-cottonbro-8088441 2.svg'),
  websiteRedesigns: landingNav('digital transofrmation 2.svg'),
  landingPages: landingNav(
    'new-modern-rocket-with-smoke-and-blast-successfull-2026-03-10-22-19-55-utc 2.svg',
  ),
  accessibleWebExperiences: landingNav(
    'hands-in-unity-teamwork-with-a-robotic-limb-2026-01-08-00-16-05-utc 1.svg',
  ),
  multilingualWebsites: landingNav('Education 2.svg'),
  conversionOptimization: landingNav(
    'trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc 2.svg',
  ),
  websiteOptimization: landingNav('Hosting 2.svg'),

  // WOW Intelligence division mega-menu
  aiAssistantsChatbots: landingNav('Intelligence 2.svg'),
  intelligentAutomation: landingNav('AI and Automation 2.svg'),
  businessIntelligencePredictiveInsights: landingNav(
    'trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc 2.svg',
  ),
  useCaseSales: landingNav(
    'trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc 2.svg',
  ),
  useCaseMarketing: landingNav('Branding & Creative 2.svg'),
  useCaseCustomerService: landingNav('Social 2 1.svg'),
  useCaseOperations: landingNav('AI Automation 3.svg'),

  // WOW Accelerate division mega-menu
  leadGeneration: landingNav(
    'new-modern-rocket-with-smoke-and-blast-successfull-2026-03-10-22-19-55-utc 2.svg',
  ),
  salesFunnelDevelopment: landingNav('Startup laiunch 2.svg'),
  crmSetupOptimization: landingNav('Partner 1.svg'),
  salesAutomation: landingNav('AI Automation 3.svg'),
  salesAnalyticsReporting: landingNav(
    'trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc 2.svg',
  ),
  salesProcessOptimization: landingNav('digital transofrmation 2.svg'),
  appointmentSettingOutreach: landingNav('Meet 1.svg'),
  leadQualificationNurturing: landingNav('pexels-akoonie-35088940 2.svg'),
  leadGenerationOutbound: cardImage('Sales Acceleration 1.png'),
  salesFunnelsConversion: landingNav('Website 1 2.svg'),
  crmSalesSystems: landingNav(
    'engineer-and-coworker-use-ai-cognitive-computing-o-2026-01-11-10-54-36-utc 2.svg',
  ),
  salesAutomationEnablement: landingNav('Accelerate 2.svg'),

  // WOW Design division mega-menu
  brandIdentityStrategy: landingNav('Branding & Creative 2.svg'),
  graphicMarketingDesign: landingNav(
    'ux-graphic-designer-planning-application-process-d-2026-03-11-00-50-35-utc 2.svg',
  ),
  uiUxDigitalDesign: landingNav('Website 1 2.svg'),
  videoMotionCreativeContent: cardImage('explore-default.jpg'),

  // WOW Social division mega-menu
  socialMediaStrategyManagement: landingNav('Social 2.svg'),
  socialInfluencerContentCreation: landingNav('Social 3.svg'),
  paidSocialAdvertisingCommunityManagement: landingNav('Social 2 1.svg'),

  // WOW Host division mega-menu
  sharedWebHosting: landingNav('Hosting 2.svg'),
  vpsHosting: landingNav('data-servers-close-up-2026-01-08-06-54-55-utc 2.svg'),
  dedicatedServers: landingNav(
    'engineer-and-coworker-use-ai-cognitive-computing-o-2026-01-11-10-54-36-utc 2.svg',
  ),
  cloudHosting: landingNav('AI and Automation 2.svg'),
  hostDigitalIdentity: landingNav('Website 1 2.svg'),
  hostProfessionalEmail: landingNav('woman-using-laptop-with-technology-background-disp-2026-03-19-02-04-49-utc 1.svg'),
  hostProtectOnline: landingNav('Partner 1.svg'),

  // WOW Impact division mega-menu
  personalBranding: landingNav('Impact 2.svg'),
  thoughtLeadership: landingNav('Why Smbs 1.svg'),
  reputationVisibility: landingNav('Education 2.svg'),
  speakingMediaPresence: landingNav('Events 3.svg'),
} as const

export type NavCardImageId = keyof typeof navCardImages

export function getNavCardImage(id: string): string {
  return navCardImages[id as NavCardImageId] ?? navCardImages.default
}
