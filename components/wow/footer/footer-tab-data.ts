import type { LucideIcon } from 'lucide-react'
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  CircleHelp,
  Cloud,
  FileCheck,
  FileText,
  Globe,
  Handshake,
  Info,
  Lock,
  Megaphone,
  Network,
  Palette,
  Share2,
  ShoppingBag,
  Sun,
  Target,
  TrendingUp,
  Workflow,
} from 'lucide-react'

export type FooterTabId = 'ask' | 'resources' | 'explore' | 'services' | 'contact' | 'connect'

export const footerTextTabs = [
  { id: 'resources', label: 'Resources' },
  { id: 'explore', label: 'Explore WOW' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
  { id: 'connect', label: 'Connect' },
] as const satisfies ReadonlyArray<{ id: Exclude<FooterTabId, 'ask'>; label: string }>

export const resourceColumns = [
  {
    title: 'Discover',
    links: [
      { label: 'About WOW', href: '/about', icon: Info },
      { label: 'How We Work', href: '/about/why-us', icon: Workflow },
      { label: 'Case Studies', href: '/case-study', icon: FileText },
      { label: 'Insights / Blog', href: '/blog', icon: BarChart3 },
      { label: 'Careers', href: '/career', icon: ArrowUpRight },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Resources', href: '/blog', icon: Bot },
      { label: 'Guides', href: '/blog', icon: FileText },
      { label: 'WOW Hub', href: '/wowhub', icon: Network },
      { label: 'FAQs', href: '/faq', icon: CircleHelp },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Partners', href: '/partners', icon: Handshake },
      { label: 'Press / Media', href: '/blog', icon: Megaphone },
      { label: 'Accessibility', href: '/policy', icon: Sun },
      { label: 'Privacy', href: '/policy', icon: Lock },
      { label: 'Terms', href: '/terms', icon: FileCheck },
    ],
  },
] as const

export const exploreDivisions = [
  { title: 'SoftwareWOW!', subtitle: 'Software, SaaS & apps', href: '/softwarewow' },
  { title: 'WOW Marketing', subtitle: 'Marketing, SEO & PPC', href: '/wowmarketing' },
  { title: 'WOW Social', subtitle: 'Social media & community', href: '/wowsocial' },
  { title: 'WOW Accelerate', subtitle: 'Sales & revenue growth', href: '/wowaccelerate' },
  { title: 'WOW Intelligence', subtitle: 'AI & automation', href: '/wowintelligence' },
  { title: 'WOW Design', subtitle: 'Branding & creative', href: '/wowdesign' },
  { title: 'WOW Websites', subtitle: 'Websites & eCommerce', href: '/wowwebsites' },
  { title: 'WOW Impact', subtitle: 'Personal brand & reputation', href: '/wowimpact' },
  { title: 'WOW Host', subtitle: 'Hosting & infrastructure', href: '/wowhost' },
  { title: 'WOW Hub', subtitle: 'Learning & community', href: '/wowhub' },
  { title: 'WOW Events', subtitle: 'Events & experiences', href: '/wowevents' },
] as const

export const serviceCards: ReadonlyArray<{
  title: string
  description: string
  href: string
  icon: LucideIcon
}> = [
  { title: 'Websites & eCommerce', description: 'Sites, landing pages & online stores.', href: '/wowwebsites', icon: ShoppingBag },
  { title: 'Marketing & SEO', description: 'SEO, PPC, content & campaigns.', href: '/wowmarketing', icon: TrendingUp },
  { title: 'Software & Apps', description: 'Custom software, SaaS & mobile apps.', href: '/softwarewow', icon: Globe },
  { title: 'AI & Automation', description: 'AI assistants, chatbots & workflows.', href: '/wowintelligence', icon: Bot },
  { title: 'Sales & Growth', description: 'Lead generation, funnels & CRM.', href: '/wowaccelerate', icon: Target },
  { title: 'Branding & Design', description: 'Brand identity, UX/UI & creative.', href: '/wowdesign', icon: Palette },
  { title: 'Social Media', description: 'Content, paid social & influencers.', href: '/wowsocial', icon: Share2 },
  { title: 'Hosting & Cloud', description: 'Domains, hosting & infrastructure.', href: '/wowhost', icon: Cloud },
  { title: 'Training & Events', description: 'Education, resources & experiences.', href: '/wowhub', icon: Network },
]

export const contactCards = [
  {
    title: 'Start a Project',
    description: "Tell us what you're planning.",
    href: '/quotation',
    action: 'link' as const,
  },
  {
    title: 'Talk to Sales',
    description: "Not sure what you need? Let's figure it out.",
    href: '/contact',
    action: 'contact' as const,
  },
  {
    title: 'Client Support',
    description: 'Need help with an existing service or project?',
    href: '/helpsupport',
    action: 'link' as const,
  },
  {
    title: 'Partnerships & Enquiries',
    description: 'Partnerships, media and general enquiries.',
    href: '/partners',
    action: 'link' as const,
  },
] as const

export const connectSocials = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'X', href: 'https://x.com/', icon: 'x' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/', icon: 'pinterest' },
  { label: 'Google', href: 'https://www.google.com/', icon: 'google' },
  { label: 'TikTok', href: 'https://www.tiktok.com/', icon: 'tiktok' },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'youtube' },
] as const
