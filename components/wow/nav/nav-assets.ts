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
  MapPin,
  Megaphone,
  MoreHorizontal,
  Network,
  Newspaper,
  Palette,
  Plane,
  Receipt,
  Rocket,
  Server,
  Share2,
  ShoppingBag,
  Sparkles,
  Store,
  SwatchBook,
  Tag,
  Target,
  TrendingUp,
  Users,
  UsersRound,
  Zap,
} from 'lucide-react'

/** Lucide icons for navigation menu items (links & packages). Division logos use nav-brand-assets.ts */
export const navMenuIcons = {
  // Company — About
  aboutUs: Building2,
  strategyCentre: Target,
  teamExperts: Users,
  whySmbs: Store,
  partners: Handshake,
  whyUs: Sparkles,

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
} as const satisfies Record<string, LucideIcon>

export type MobileBottomNavIconId = keyof typeof mobileBottomNavIcons

export const navCardImages = {
  default: '/images/wow/nav/cards/default.jpg',
  exploreDefault: '/images/wow/nav/cards/explore-default.jpg',
} as const
