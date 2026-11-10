import type { WowEcosystemExpertiseRow } from '@/components/wow/sections/WowEcosystemExpertiseSection'

const WOW_CARD = '/images/wow/nav/cards/pexels-pixabay-35208 1.png'
const WOW_HERO_A = '/images/wow/Hero/devision/Accelerate.jpg'
const WOW_HERO_B = '/images/wow/Hero/Growth/image (2).png'
const WOW_HERO_C = '/images/wow/Hero/Growth/image (3).png'
const WOW_JOURNEY = '/images/wow/locations/landmarks/UK.png'

export const APPOINTMENT_SETTING_PAGE_METADATA = {
  title: 'Appointment Setting & Sales Outreach | WOW Accelerate',
  description:
    'Connect with decision-makers through targeted prospecting, personalized outreach, lead qualification, follow-up campaigns, and appointment setting.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'APPOINTMENT SETTING & OUTREACH',
    title: 'Start conversations.',
    italicTitle: 'Open new doors.',
    description:
      'Connect with the right decision-makers through personalized outreach that turns interest into booked meetings.',
    images: [
      { src: WOW_HERO_A, alt: 'Sales outreach and appointment setting' },
      { src: WOW_HERO_B, alt: 'Prospect conversations and meetings' },
      { src: WOW_HERO_C, alt: 'Booked sales appointments' },
    ],
    primaryCtaLabel: 'Book More Meetings',
    secondaryCtaLabel: 'Explore Our Solutions',
    secondaryCtaHref: '/accelerate#solutions',
  },
  whatMattersMost: {
    eyebrow: 'What Matters Most',
    title: 'The right conversation can',
    accentTitle: 'change everything.',
    description:
      'Reach ideal prospects, build interest, and create more opportunities for your sales team.',
    image: { src: WOW_CARD, alt: 'Meaningful sales conversations' },
    items: [
      {
        title: 'Reach Decision-Makers',
        description: 'Connect with the people who influence buying decisions.',
      },
      {
        title: 'Make Outreach Personal',
        description: 'Start relevant conversations that earn attention.',
      },
      {
        title: 'Generate More Replies',
        description: 'Create messages that encourage genuine responses.',
      },
      {
        title: 'Book Qualified Meetings',
        description: 'Turn interested prospects into valuable appointments.',
      },
      {
        title: 'Keep Conversations Moving',
        description: 'Stay connected through timely, thoughtful follow-ups.',
      },
    ],
  },
  professionalServiceSolutions: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'Better outreach.',
    accentTitle: 'More meaningful meetings.',
    description:
      'Bring targeting, messaging, outreach, and scheduling into one connected process.',
    ctaLabel: 'Start More Conversations',
    ctaAriaLabel: 'Start more sales conversations with WOW Accelerate',
    items: [
      {
        title: 'Prospect Research & Targeting',
        description: 'Find the right people at the right companies.',
        detailLine: 'Ideal customer profiles · Decision-makers · Prospect research · Target lists',
      },
      {
        title: 'Personalized Outreach Campaigns',
        description: 'Start conversations with messages that resonate.',
        detailLine: 'Cold email · LinkedIn outreach · Personalization · Campaign sequences',
      },
      {
        title: 'Appointment Setting & Scheduling',
        description: 'Turn positive responses into confirmed meetings.',
        detailLine: 'Meeting qualification · Calendar booking · Scheduling · Reminders',
      },
      {
        title: 'Follow-Up & Engagement',
        description: 'Keep promising conversations moving forward.',
        detailLine: 'Follow-up sequences · Reply management · CRM updates · Lead nurturing',
      },
    ],
  },
  clientJourney: {
    eyebrow: 'FROM PROSPECT TO MEETING',
    title: 'From first contact to',
    accentTitle: 'real conversations.',
    description: 'Make every outreach step purposeful, personal, and easy to follow.',
    image: { src: WOW_JOURNEY, alt: 'Outreach journey from prospect to meeting' },
    steps: [
      {
        number: '01',
        title: 'Identify',
        description: 'Find the right prospects and decision-makers.',
      },
      {
        number: '02',
        title: 'Connect',
        description: 'Reach out with relevant, personalized messages.',
      },
      {
        number: '03',
        title: 'Engage',
        description: 'Build interest through genuine conversations.',
      },
      {
        number: '04',
        title: 'Book',
        description: 'Turn qualified interest into scheduled meetings.',
      },
    ],
  },
  connectedExpertise: {
    eyebrow: 'THE WOW ECOSYSTEM',
    title: 'One outreach strategy.',
    accentTitle: 'Connected expertise.',
    description:
      'Bring together the capabilities that support better prospecting and appointment setting.',
    ctaLabel: 'Explore the WOW Ecosystem',
    rows: [
      {
        id: '01',
        divisionId: 'wowAccelerate',
        heading: 'Sales Outreach',
        description: 'Prospecting, appointment setting, and follow-ups.',
      },
      {
        id: '02',
        divisionId: 'wowMarketing',
        heading: 'Audience Targeting',
        description: 'Campaign insights and customer acquisition.',
      },
      {
        id: '03',
        divisionId: 'wowIntelligence',
        heading: 'Smart Automation',
        description: 'Workflow automation and lead intelligence.',
      },
      {
        id: '04',
        divisionId: 'wowDesign',
        heading: 'Sales Messaging',
        description: 'Clear, compelling outreach and sales materials.',
      },
      {
        id: '05',
        divisionId: 'wowWebsites',
        heading: 'Conversion Experiences',
        description: 'Landing pages and appointment booking journeys.',
      },
      {
        id: '06',
        divisionId: 'wowSocial',
        heading: 'Social Engagement',
        description: 'Professional networking and relationship building.',
      },
    ] satisfies WowEcosystemExpertiseRow[],
  },
  recommendedSolutions: {
    eyebrow: 'SOLUTIONS FOR YOUR SALES PIPELINE',
    title: 'More conversations.',
    accentTitle: 'More opportunities.',
    description: 'Connect outreach with the systems that help your sales team grow.',
    items: [
      {
        number: '01',
        title: 'Lead Generation & Outbound',
        description: 'Reach ideal prospects and build a stronger pipeline.',
        href: '/accelerate/solutions/lead-generation-outbound',
      },
      {
        number: '02',
        title: 'CRM & Sales Systems',
        description: 'Organize conversations, contacts, and opportunities.',
        href: '/accelerate/solutions/crm-sales-systems',
      },
      {
        number: '03',
        title: 'Sales Automation & Enablement',
        description: 'Streamline follow-ups and help your team move faster.',
        href: '/accelerate/solutions/sales-automation-enablement',
      },
    ],
  },
  cta: {
    accentText: 'Ready to fill',
    mainText: 'your calendar with opportunities?',
    ariaLabel: 'Talk to WOW Accelerate about appointment setting and outreach',
  },
}
