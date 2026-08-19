/** Project data mapped from data/case-study/*.md + lib/case-study/caseStudyImages.ts */
export type PortfolioFilter =
  | 'All'
  | 'Websites'
  | 'Software'
  | 'Branding'
  | 'Marketing'
  | 'AI & Automation'
  | 'Social'

export type PortfolioProject = {
  slug: string
  title: string
  client: string
  industry: string
  tagline: string
  description: string
  image: string
  alt: string
  year: number
  completedAt: string
  featured: boolean
  status: 'published' | 'draft'
  categories: Exclude<PortfolioFilter, 'All'>[]
  serviceTags: string[]
}

export const PORTFOLIO_FILTERS: PortfolioFilter[] = [
  'All',
  'Websites',
  'Software',
  'Branding',
  'Marketing',
  'AI & Automation',
  'Social',
]

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'ccg-breakthrough',
    title: 'CCG Breakthrough',
    client: 'CCG Breakthrough',
    industry: 'Leadership & Coaching',
    tagline: 'Empowering Minds, Inspiring Leaders',
    description:
      'A modern digital presence that strengthened brand credibility and created a conversion-focused platform for executive coaching.',
    image: '/images/wow/Hero/project/case-study/ccg.png',
    alt: 'CCG Breakthrough case study',
    year: 2025,
    completedAt: '2025-06-20',
    featured: true,
    status: 'published',
    categories: ['Websites', 'Branding'],
    serviceTags: ['Website', 'Branding', 'UX/UI'],
  },
  {
    slug: 'davinci-lounge',
    title: 'DaVinci Lounge',
    client: 'DaVinci Lounge',
    industry: 'Hospitality',
    tagline: 'Creativity In Motion',
    description:
      'A premium hospitality website that elevated the brand experience and improved guest discovery and engagement.',
    image: '/images/wow/Hero/project/case-study/davinci.png',
    alt: 'DaVinci Lounge project',
    year: 2025,
    completedAt: '2025-09-18',
    featured: true,
    status: 'published',
    categories: ['Websites', 'Branding'],
    serviceTags: ['Website', 'Brand Strategy', 'UX/UI'],
  },
  {
    slug: 'inity-inc',
    title: 'Inity Inc',
    client: 'Inity Inc',
    industry: 'Technology',
    tagline: 'Building Smarter Digital Products',
    description:
      'A scalable website that made complex technology services clear, credible, and conversion-ready for growing businesses.',
    image: '/images/wow/Hero/project/case-study/InityInc.png',
    alt: 'Inity Inc case study',
    year: 2025,
    completedAt: '2025-11-12',
    featured: true,
    status: 'published',
    categories: ['Websites', 'Software'],
    serviceTags: ['Website', 'Software', 'UX/UI'],
  },
  {
    slug: 'yo-doner',
    title: 'Yo Doner',
    client: 'Yo Doner',
    industry: 'Food & Franchise',
    tagline: 'Bold Flavor, Modern Experience',
    description:
      'A vibrant brand refresh and website built to support location discovery, franchise interest, and digital growth.',
    image: '/images/wow/Hero/project/case-study/yodoner.png',
    alt: 'Yo Doner project',
    year: 2024,
    completedAt: '2024-07-15',
    featured: true,
    status: 'published',
    categories: ['Websites', 'Branding'],
    serviceTags: ['Website', 'Brand Refresh', 'UX/UI'],
  },
  {
    slug: 'smartek',
    title: 'Smartek',
    client: 'Smartek',
    industry: 'Technology Solutions',
    tagline: 'Intelligent Systems for Modern Business',
    description:
      'A modernized platform that clarified service offerings and created stronger pathways for consultation and lead generation.',
    image: '/images/wow/Hero/project/case-study/smartek.png',
    alt: 'Smartek project',
    year: 2020,
    completedAt: '2020-03-11',
    featured: false,
    status: 'published',
    categories: ['Websites', 'Software', 'Marketing'],
    serviceTags: ['Website', 'SEO', 'UX/UI'],
  },
  {
    slug: 'creshendo',
    title: 'Creshendo',
    client: 'Creshendo',
    industry: 'Consulting',
    tagline: 'Growth Through Better Systems',
    description:
      'A conversion-focused website that improved clarity, strengthened trust, and increased qualified consultation requests.',
    image: '/images/wow/Hero/project/case-study/creshendo.png',
    alt: 'Creshendo case study',
    year: 2024,
    completedAt: '2024-10-08',
    featured: false,
    status: 'published',
    categories: ['Websites', 'Marketing'],
    serviceTags: ['Website', 'Messaging', 'UX/UI'],
  },
]

export const publishedPortfolioProjects = portfolioProjects.filter((project) => project.status === 'published')

export const featuredProjects = publishedPortfolioProjects.filter((project) => project.featured)

export const recentPortfolioProjects = [...publishedPortfolioProjects].sort(
  (a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime(),
)

export const recentProjectsByYear = recentPortfolioProjects.reduce<Record<number, PortfolioProject[]>>((groups, project) => {
  const group = groups[project.year] ?? []
  group.push(project)
  groups[project.year] = group
  return groups
}, {})
