import type { LucideIcon } from 'lucide-react'
import {
  Banknote,
  Briefcase,
  Building2,
  Car,
  Cloud,
  Factory,
  GraduationCap,
  HardHat,
  HeartHandshake,
  HeartPulse,
  Home,
  Landmark,
  Lightbulb,
  Network,
  Scale,
  Shield,
  ShoppingBag,
  ShoppingCart,
  Sprout,
  Truck,
  UtensilsCrossed,
} from 'lucide-react'

export type SoftwareWowIndustry = {
  id: string
  label: string
  icon: LucideIcon
}

export const SOFTWARE_WOW_INDUSTRIES: SoftwareWowIndustry[] = [
  { id: 'healthcare', label: 'Healthcare', icon: HeartPulse },
  { id: 'construction', label: 'Construction', icon: HardHat },
  { id: 'retail', label: 'Retail', icon: ShoppingBag },
  { id: 'manufacturing', label: 'Manufacturing', icon: Factory },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'ecommerce', label: 'eCommerce', icon: ShoppingCart },
  { id: 'hospitality', label: 'Hospitality', icon: UtensilsCrossed },
  { id: 'real-estate', label: 'Real Estate', icon: Home },
  { id: 'professional-services', label: 'Professional Services', icon: Network },
  { id: 'non-profit', label: 'Non-Profit', icon: HeartHandshake },
  { id: 'legal', label: 'Legal', icon: Scale },
  { id: 'finance', label: 'Finance', icon: Banknote },
  { id: 'technology-saas', label: 'Technology & SaaS', icon: Cloud },
  { id: 'startups', label: 'Startups', icon: Lightbulb },
  { id: 'logistics', label: 'Logistics', icon: Truck },
  { id: 'insurance', label: 'Insurance', icon: Shield },
  { id: 'government', label: 'Government', icon: Landmark },
  { id: 'automotive', label: 'Automotive', icon: Car },
  { id: 'agriculture', label: 'Agriculture', icon: Sprout },
  { id: 'enterprise', label: 'Enterprise', icon: Building2 },
  { id: 'consulting', label: 'Consulting', icon: Briefcase },
]
