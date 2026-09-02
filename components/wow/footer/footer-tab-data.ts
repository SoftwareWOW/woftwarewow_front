import type { DivisionId } from '@/components/wow/nav/nav-brand-assets'
import type { NavMenuIconId } from '@/components/wow/nav/nav-assets'

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
      { label: 'About WOW', href: '/about', iconId: 'about' },
      { label: 'How We Work', href: '/about/why-us', iconId: 'ourProcess' },
      { label: 'Case Studies', href: '/case-study', iconId: 'caseStudies' },
      { label: 'Insights / Blog', href: '/blog', iconId: 'insights' },
      { label: 'Careers', href: '/career', iconId: 'careers' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Resources', href: '/blog', iconId: 'educationTraining' },
      { label: 'Guides', href: '/blog', iconId: 'caseStudies' },
      { label: 'WOW Hub', href: '/wowhub', iconId: 'learningEvents' },
      { label: 'FAQs', href: '/faq', iconId: 'helpSupport' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Partners', href: '/partners', iconId: 'partners' },
      { label: 'Press / Media', href: '/blog', iconId: 'insights' },
      { label: 'Accessibility', href: '/policy', iconId: 'whyUs' },
      { label: 'Privacy', href: '/policy', iconId: 'clientPortal' },
      { label: 'Terms', href: '/terms', iconId: 'quotation' },
    ],
  },
] as const satisfies ReadonlyArray<{
  title: string
  links: ReadonlyArray<{ label: string; href: string; iconId: NavMenuIconId }>
}>

export const exploreDivisions = [
  { title: 'SoftwareWOW!', subtitle: 'Software, SaaS & apps', href: '/softwarewow', divisionId: 'softwareWow', iconId: 'softwareTechnology' },
  { title: 'WOW Marketing', subtitle: 'Marketing, SEO & PPC', href: '/wowmarketing', divisionId: 'wowMarketing', iconId: 'marketingGrowth' },
  { title: 'WOW Social', subtitle: 'Social media & community', href: '/wowsocial', divisionId: 'wowSocial', iconId: 'socialCommunity' },
  { title: 'WOW Accelerate', subtitle: 'Sales & revenue growth', href: '/wowaccelerate', divisionId: 'wowAccelerate', iconId: 'salesRevenue' },
  { title: 'WOW Intelligence', subtitle: 'AI & automation', href: '/wowintelligence', divisionId: 'wowIntelligence', iconId: 'aiAutomation' },
  { title: 'WOW Design', subtitle: 'Branding & creative', href: '/wowdesign', divisionId: 'wowDesign', iconId: 'brandingCreative' },
  { title: 'WOW Websites', subtitle: 'Websites & eCommerce', href: '/wowwebsites', divisionId: 'wowWebsites', iconId: 'retailEcommerce' },
  { title: 'WOW Impact', subtitle: 'Personal brand & reputation', href: '/wowimpact', divisionId: 'wowImpact', iconId: 'brandAuthorityPackage' },
  { title: 'WOW Host', subtitle: 'Hosting & infrastructure', href: '/wowhost', divisionId: 'wowHost', iconId: 'hostingInfrastructure' },
  { title: 'WOW Hub', subtitle: 'Learning & community', href: '/wowhub', divisionId: 'wowHub', iconId: 'learningEvents' },
  { title: 'WOW Events', subtitle: 'Events & experiences', href: '/wowevents', divisionId: 'wowEvents', iconId: 'recentWorks' },
] as const satisfies ReadonlyArray<{
  title: string
  subtitle: string
  href: string
  divisionId: DivisionId
  iconId: NavMenuIconId
}>

export const serviceCards = [
  { title: 'Websites & eCommerce', description: 'Sites, landing pages & online stores.', href: '/wowwebsites', iconId: 'retailEcommerce' },
  { title: 'Marketing & SEO', description: 'SEO, PPC, content & campaigns.', href: '/wowmarketing', iconId: 'marketingGrowth' },
  { title: 'Software & Apps', description: 'Custom software, SaaS & mobile apps.', href: '/softwarewow', iconId: 'softwareTechnology' },
  { title: 'AI & Automation', description: 'AI assistants, chatbots & workflows.', href: '/wowintelligence', iconId: 'aiAutomation' },
  { title: 'Sales & Growth', description: 'Lead generation, funnels & CRM.', href: '/wowaccelerate', iconId: 'salesRevenue' },
  { title: 'Branding & Design', description: 'Brand identity, UX/UI & creative.', href: '/wowdesign', iconId: 'brandingCreative' },
  { title: 'Social Media', description: 'Content, paid social & influencers.', href: '/wowsocial', iconId: 'socialCommunity' },
  { title: 'Hosting & Cloud', description: 'Domains, hosting & infrastructure.', href: '/wowhost', iconId: 'hostingInfrastructure' },
  { title: 'Training & Events', description: 'Education, resources & experiences.', href: '/wowhub', iconId: 'learningEvents' },
] as const satisfies ReadonlyArray<{
  title: string
  description: string
  href: string
  iconId: NavMenuIconId
}>

export const contactCards = [
  {
    title: 'Start a Project',
    description: "Tell us what you're planning.",
    href: '/quotation',
    action: 'link' as const,
    iconId: 'quotation' as const,
  },
  {
    title: 'Talk to Sales',
    description: "Not sure what you need? Let's figure it out.",
    href: '/contact',
    action: 'contact' as const,
    iconId: 'contact' as const,
  },
  {
    title: 'Client Support',
    description: 'Need help with an existing service or project?',
    href: '/helpsupport',
    action: 'link' as const,
    iconId: 'helpSupport' as const,
  },
  {
    title: 'Partnerships & Enquiries',
    description: 'Partnerships, media and general enquiries.',
    href: '/partners',
    action: 'link' as const,
    iconId: 'partners' as const,
  },
]

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
