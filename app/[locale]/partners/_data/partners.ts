import type { Tech } from '@/components/wow/shared/TechStackShared'

export type PartnerCategory = {
  title: string
  description: string
  partners: Tech[]
}

export type PartnershipType = {
  id: number
  title: string
  description: string
}

export type PartnerBenefit = {
  title: string
  description: string
}

export const partnerCategories: PartnerCategory[] = [
  {
    title: 'Technology & AI',
    description: 'Platforms and technologies supporting smarter solutions.',
    partners: [
      { name: 'OpenAI', icon: 'simple-icons:openai', invertInDark: true },
      { name: 'Anthropic', icon: 'simple-icons:anthropic', invertInDark: true },
      { name: 'React', icon: 'logos:react' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs', invertInDark: true },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Reliable platforms for hosting, security, and scale.',
    partners: [
      { name: 'AWS', icon: 'simple-icons:amazonaws', color: '#FF9900' },
      { name: 'Vercel', icon: 'simple-icons:vercel', invertInDark: true },
      { name: 'Cloudflare', icon: 'logos:cloudflare-icon' },
      { name: 'Docker', icon: 'logos:docker-icon' },
    ],
  },
  {
    title: 'Marketing & Growth',
    description: 'Tools and partners supporting acquisition and performance.',
    partners: [
      { name: 'HubSpot', icon: 'simple-icons:hubspot', color: '#FF7A59' },
      { name: 'Meta Ads', icon: 'logos:meta-icon' },
      { name: 'Google Ads', icon: 'logos:google-ads' },
      { name: 'Salesforce', icon: 'logos:salesforce' },
    ],
  },
  {
    title: 'Creative & Digital',
    description: 'Specialists extending design and digital capabilities.',
    partners: [
      { name: 'Figma', icon: 'logos:figma' },
      { name: 'Shopify', icon: 'simple-icons:shopify', color: '#96BF48' },
      { name: 'Stripe', icon: 'logos:stripe' },
      { name: 'Sanity', icon: 'simple-icons:sanity', color: '#F03E2F' },
    ],
  },
]

export const partnershipTypes: PartnershipType[] = [
  {
    id: 1,
    title: 'Technology Partners',
    description: 'Platforms and technologies integrated into client solutions.',
  },
  {
    id: 2,
    title: 'Service Partners',
    description: 'Specialists who complement our capabilities and delivery.',
  },
  {
    id: 3,
    title: 'Referral Partners',
    description: 'Mutual opportunities built around trusted introductions.',
  },
  {
    id: 4,
    title: 'Strategic Partners',
    description: 'Long-term collaborations focused on shared growth.',
  },
]

export const partnerBenefits: PartnerBenefit[] = [
  {
    title: 'Broader opportunities',
    description: 'Access opportunities across our connected service ecosystem.',
  },
  {
    title: 'Complementary expertise',
    description: 'Combine strengths to deliver more complete solutions.',
  },
  {
    title: 'Growing business audience',
    description: 'Reach businesses looking for practical growth support.',
  },
  {
    title: 'Collaborative delivery',
    description: 'Work together through clear roles and coordinated execution.',
  },
  {
    title: 'Long-term potential',
    description: 'Build relationships designed to create value over time.',
  },
]
