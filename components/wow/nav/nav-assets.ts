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

function cardImage(filename: string) {
  return `${cardsBase}/${encodeURIComponent(filename)}`
}

export const navCardImages = {
  default: cardImage('explore-default.jpg'),
  exploreDefault: cardImage('explore-default.jpg'),

  // Company — Divisions
  softwareWow: cardImage('Softwaerwow.png'),
  wowMarketing: cardImage('Marketing.png'),
  wowDesign: cardImage('Design.png'),
  wowIntelligence: cardImage('Intelligent.png'),
  wowSocial: cardImage('Social.png'),
  wowAccelerate: cardImage('Accelerate.png'),
  wowWebsites: cardImage('Website.png'),
  wowImpact: cardImage('Impact.png'),
  wowHost: cardImage('Host.png'),
  wowHub: cardImage('Hub.png'),
  wowEvents: cardImage('Event.png'),

  // For You — Solutions
  buildLaunch: cardImage('build&lanch.png'),
  softwareTechnology: cardImage('software&technology.png'),
  marketingGrowth: cardImage('Marketing.png'),
  socialCommunity: cardImage('socail&comunity.png'),
  salesRevenue: cardImage(
    'sales-profit-numbers-changing-on-monitor-after-glo-2026-01-08-02-14-54-utc 1.png',
  ),
  aiAutomation: cardImage('AI and Automation 1.png'),
  brandingCreative: cardImage('Branding & Creative 1.png'),
  hostingInfrastructure: cardImage('Host.png'),
  learningEvents: cardImage('learningevent.png'),

  // For You — Packages
  startupLaunchPackage: cardImage('Startup laiunch 1.png'),
  businessGrowthPackage: cardImage('Business growth 1.png'),
  digitalTransformationPackage: cardImage('digital transofrmation 1.png'),
  aiAutomationPackage: cardImage('AI Automation 1.png'),
  saasProductDevelopmentPackage: cardImage('SaaS Dev 1.png'),
  brandAuthorityPackage: cardImage('social media start 1.png'),
  websiteGrowthEnginePackage: cardImage('Websit groeh 1.png'),
  salesAccelerationPackage: cardImage('Sales Acceleration 1.png'),
  enterpriseInfrastructurePackage: cardImage(
    'closeup-of-coiled-metal-spring-with-sufficiently-h-2026-01-08-22-22-51-utc 1.png',
  ),

  // Explore — Discover
  portfolio: cardImage('pexels-cottonbro-4069290 1.png'),
  recentWorks: cardImage('pexels-fauxels-3183132 1.png'),
  clients: cardImage('pexels-akoonie-35088940 1.png'),
  partnerNetwork: cardImage('pexels-polina-tankilevitch-5386217 1.png'),
  locations: cardImage('pexels-karola-g-6255984 1.png'),

  // Explore — Industries
  hospitalityTourism: cardImage('pexels-akaaljotsingh-anandpuria-156395437-10703306 1.png'),
  retailEcommerce: cardImage('pexels-cottonbro-8088441 1.png'),
  healthcareWellness: cardImage('pexels-pixabay-35208 1.png'),
} as const

export type NavCardImageId = keyof typeof navCardImages

export function getNavCardImage(id: string): string {
  return navCardImages[id as NavCardImageId] ?? navCardImages.default
}
