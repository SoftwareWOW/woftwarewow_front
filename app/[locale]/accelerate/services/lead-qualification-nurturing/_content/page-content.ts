import type { DivisionId } from '@/components/wow/nav/nav-brand-assets'

const HERO_IMAGE = '/images/wow/Hero/devision/Accelerate.jpg'

export const LEAD_QUALIFICATION_NURTURING_PAGE_METADATA = {
  title: 'Lead Qualification & Nurturing Services | WOW Accelerate',
  description:
    'Improve lead quality and sales readiness with lead scoring, prospect segmentation, automated nurturing, CRM workflows, and sales handoffs.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'LEAD QUALIFICATION & NURTURING',
    title: 'Find the right leads.',
    italicTitle: 'Build stronger relationships.',
    description:
      'Identify promising prospects, keep them engaged, and turn genuine interest into sales-ready opportunities.',
    images: [{ src: HERO_IMAGE, alt: 'Lead qualification and nurturing' }],
    primaryCta: { label: 'Qualify Your Leads', href: '/contact' },
    showTrustAvatars: false,
  },
  growthChallenges: {
    eyebrow: 'THE CHALLENGE',
    title: 'Good leads get lost.',
    accentTitle: "Great opportunities shouldn't.",
    description:
      'Without clear qualification and timely follow-ups, valuable prospects can slip through the cracks.',
    ctaLabel: 'Improve Your Lead Process',
    items: [
      {
        title: 'Unqualified Leads',
        description: "Your team spends time on prospects who aren't the right fit.",
      },
      {
        title: 'Missed Follow-Ups',
        description: 'Promising conversations lose momentum without timely responses.',
      },
      {
        title: 'Unclear Lead Priorities',
        description: "It's difficult to know which prospects deserve attention first.",
      },
      {
        title: 'Disconnected Lead Data',
        description: 'Customer information is scattered across tools and teams.',
      },
      {
        title: 'Low Lead Conversion',
        description: "Interested prospects aren't progressing toward sales conversations.",
      },
    ],
  },
  everythingToGrow: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'Better leads.',
    accentTitle: 'Better conversations.',
    description: 'Turn scattered enquiries into organized, qualified sales opportunities.',
    ctaLabel: 'Strengthen Your Lead Pipeline',
    items: [
      {
        title: 'Lead Scoring & Qualification',
        description: 'Identify high-potential prospects using clear qualification criteria.',
      },
      {
        title: 'Automated Nurturing Sequences',
        description: 'Keep leads engaged through timely, relevant follow-ups.',
      },
      {
        title: 'Prospect Segmentation',
        description: 'Group leads by needs, interests, and buying readiness.',
      },
      {
        title: 'Sales-Ready Lead Handoffs',
        description: 'Connect qualified prospects with the right salespeople.',
      },
      {
        title: 'Lead Engagement Tracking',
        description: 'Understand prospect activity and engagement signals.',
      },
      {
        title: 'CRM & Nurturing Automation',
        description: 'Connect lead data, communication, and follow-up workflows.',
      },
    ],
  },
  connectedGrowthSystem: {
    eyebrow: 'OUR FRAMEWORK',
    title: 'From first interest to',
    accentTitle: 'sales-ready.',
    description: 'Guide every prospect through a more relevant, connected journey.',
    footerTagline: 'Every lead deserves the right next step.',
    ctaLabel: 'Build Your Nurturing Journey',
    frameworkStages: [
      {
        id: 1,
        step: 'Stage 01',
        title: 'Capture',
        items: [
          'Collect new leads and their information.',
          'Forms · Enquiries · CRM · Lead Sources',
        ],
      },
      {
        id: 2,
        step: 'Stage 02',
        title: 'Qualify',
        items: [
          'Identify fit, needs, and potential.',
          'Lead Scoring · Criteria · Intent · Segmentation',
        ],
      },
      {
        id: 3,
        step: 'Stage 03',
        title: 'Engage',
        items: [
          'Build interest through meaningful communication.',
          'Email · Outreach · Content · Personalization',
        ],
      },
      {
        id: 4,
        step: 'Stage 04',
        title: 'Nurture',
        items: [
          'Keep conversations moving at the right pace.',
          'Follow-Ups · Automation · Reminders · Lead Journeys',
        ],
      },
      {
        id: 5,
        step: 'Stage 05',
        title: 'Convert',
        items: [
          'Hand over qualified leads and improve outcomes.',
          'Sales Handoffs · Meetings · Pipeline · Insights',
        ],
      },
    ],
  },
  builtAroundGoals: {
    eyebrow: 'TAILORED QUALIFICATION',
    title: 'Your prospects.',
    accentTitle: 'Your sales priorities.',
    description: 'Build qualification and nurturing around how your customers actually buy.',
    ctaLabel: 'Optimize Your Lead Journey',
    items: [
      {
        title: 'Ideal Customer Profile',
        description: 'Focus on prospects who match your target audience.',
      },
      {
        title: 'Buying Intent',
        description: 'Recognize signals that indicate genuine interest.',
      },
      {
        title: 'Sales Cycle',
        description: 'Match follow-ups to your typical buying journey.',
      },
      {
        title: 'Lead Readiness',
        description: 'Define when a prospect is ready for sales.',
      },
      {
        title: 'Team Capacity',
        description: 'Create workflows your sales team can manage.',
      },
    ],
  },
  specialistTeams: {
    variant: 'divisions' as const,
    eyebrow: 'POWERED BY WOW',
    title: 'One lead journey. ',
    accentTitle: 'Every team connected.',
    description:
      'Bring together the expertise needed to move leads from interest to opportunity.',
    ctaLabel: 'Explore the WOW Ecosystem',
    items: [
      {
        title: 'Accelerate',
        description: 'Lead qualification, nurturing, and sales handoffs.',
        divisionId: 'wowAccelerate' satisfies DivisionId,
      },
      {
        title: 'Marketing',
        description: 'Lead acquisition and targeted campaigns.',
        divisionId: 'wowMarketing' satisfies DivisionId,
      },
      {
        title: 'Social',
        description: 'Audience engagement and relationship building.',
        divisionId: 'wowSocial' satisfies DivisionId,
      },
      {
        title: 'Websites',
        description: 'Lead capture forms and conversion experiences.',
        divisionId: 'wowWebsites' satisfies DivisionId,
      },
      {
        title: 'Design',
        description: 'Persuasive messaging and nurturing content.',
        divisionId: 'wowDesign' satisfies DivisionId,
      },
      {
        title: 'Intelligence',
        description: 'Lead scoring, automation, and customer insights.',
        divisionId: 'wowIntelligence' satisfies DivisionId,
      },
    ],
  },
  cta: {
    accentText: 'Ready to turn',
    mainText: 'more leads into opportunities?',
    ariaLabel: 'Talk to WOW Accelerate about lead qualification and nurturing',
  },
}
