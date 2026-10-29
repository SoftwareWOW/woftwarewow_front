import { landingNavImage } from './landing-nav-images'
import type { LucideIcon } from 'lucide-react'
import {
  Award,
  BookOpen,
  Bot,
  Briefcase,
  Building2,
  Calendar,
  Cloud,
  Code2,
  Compass,
  Cpu,
  FileText,
  FolderOpen,
  GraduationCap,
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
} as const

export type NavCardImageId = keyof typeof navCardImages

export function getNavCardImage(id: string): string {
  return navCardImages[id as NavCardImageId] ?? navCardImages.default
}
