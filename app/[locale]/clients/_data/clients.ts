/** Client logo + story data for the /clients page */
export type ClientLogo = {
  id: number
  name: string
  logo: string
  darkLogo?: string
  alt: string
  caseStudySlug?: string
  serviceTags?: string[]
}

export type ClientStory = {
  slug: string
  client: string
  industry: string
  challenge: string
  serviceTags: string[]
  outcome: string
  image: string
  alt: string
}

export const clientLogos: ClientLogo[] = [
  {
    id: 1,
    name: 'CCG Breakthrough',
    logo: '/images/icons/company/client-1.svg',
    alt: 'CCG Breakthrough logo',
    caseStudySlug: 'ccg-breakthrough',
    serviceTags: ['Website', 'Branding', 'UX/UI'],
  },
  {
    id: 2,
    name: 'DaVinci Lounge',
    logo: '/images/icons/company/client-2.svg',
    alt: 'DaVinci Lounge logo',
    caseStudySlug: 'davinci-lounge',
    serviceTags: ['Website', 'Brand Strategy', 'UX/UI'],
  },
  {
    id: 3,
    name: 'Inity Inc',
    logo: '/images/icons/company/client-3.svg',
    alt: 'Inity Inc logo',
    caseStudySlug: 'inity-inc',
    serviceTags: ['Website', 'Software', 'UX/UI'],
  },
  {
    id: 4,
    name: 'Yo Doner',
    logo: '/images/icons/company/client-4.svg',
    alt: 'Yo Doner logo',
    caseStudySlug: 'yo-doner',
    serviceTags: ['Website', 'Brand Refresh', 'UX/UI'],
  },
  {
    id: 5,
    name: 'Smartek',
    logo: '/images/icons/company/client-5.svg',
    alt: 'Smartek logo',
    caseStudySlug: 'smartek',
    serviceTags: ['Website', 'SEO', 'UX/UI'],
  },
  {
    id: 6,
    name: 'Creshendo',
    logo: '/images/icons/company/client-6.svg',
    alt: 'Creshendo logo',
    caseStudySlug: 'creshendo',
    serviceTags: ['Website', 'Messaging', 'UX/UI'],
  },
  {
    id: 7,
    name: 'Client 07',
    logo: '/images/icons/company/client-7.svg',
    alt: 'Client logo',
  },
  {
    id: 8,
    name: 'Client 08',
    logo: '/images/icons/company/client-8.svg',
    alt: 'Client logo',
  },
  {
    id: 9,
    name: 'Client 09',
    logo: '/images/icons/company/client-9.svg',
    alt: 'Client logo',
  },
  {
    id: 10,
    name: 'Client 10',
    logo: '/images/icons/company/client-1.svg',
    alt: 'Client logo',
  },
  {
    id: 11,
    name: 'Client 11',
    logo: '/images/icons/company/client-2.svg',
    alt: 'Client logo',
  },
  {
    id: 12,
    name: 'Client 12',
    logo: '/images/icons/company/client-3.svg',
    alt: 'Client logo',
  },
]

export const clientStories: ClientStory[] = [
  {
    slug: 'ccg-breakthrough',
    client: 'CCG Breakthrough',
    industry: 'Leadership & Coaching',
    challenge:
      'CCG Breakthrough needed a credible digital presence that could convert executive coaching interest into qualified leads.',
    serviceTags: ['Website', 'Branding', 'UX/UI'],
    outcome:
      'A modern digital presence that strengthened brand credibility and created a conversion-focused platform for executive coaching.',
    image: '/images/wow/Hero/project/case-study/ccg.png',
    alt: 'CCG Breakthrough case study',
  },
  {
    slug: 'davinci-lounge',
    client: 'DaVinci Lounge',
    industry: 'Hospitality',
    challenge:
      'DaVinci Lounge needed to elevate its brand experience online and make it easier for guests to discover and engage with the venue.',
    serviceTags: ['Website', 'Brand Strategy', 'UX/UI'],
    outcome:
      'A premium hospitality website that elevated the brand experience and improved guest discovery and engagement.',
    image: '/images/wow/Hero/project/case-study/davinci.png',
    alt: 'DaVinci Lounge project',
  },
  {
    slug: 'inity-inc',
    client: 'Inity Inc',
    industry: 'Technology',
    challenge:
      'Inity Inc needed to make complex technology services clear and credible for growing businesses evaluating digital partners.',
    serviceTags: ['Website', 'Software', 'UX/UI'],
    outcome:
      'A scalable website that made complex technology services clear, credible, and conversion-ready for growing businesses.',
    image: '/images/wow/Hero/project/case-study/InityInc.png',
    alt: 'Inity Inc case study',
  },
]
