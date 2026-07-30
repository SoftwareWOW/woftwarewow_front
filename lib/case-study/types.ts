export type CaseStudyAudience = {
  label: string
  description: string
}

export type CaseStudyTestimonial = {
  quote: string
  author: string
}

export type CaseStudyData = {
  slug?: string
  title: string
  tagline: string
  subtitle: string
  website?: string
  image?: string
  imageAlt?: string
  companySize: string
  date: string
  projectDuration: string
  services: string[]
  aboutClient: string[]
  challengeParagraphs: string[]
  approachIntro?: string
  approachCallout: string
  approachParagraphs: string[]
  businessGoals: string[]
  targetAudience: CaseStudyAudience[]
  testimonial?: CaseStudyTestimonial
}

export type CaseStudyItem = CaseStudyData & {
  slug: string
  content: string
}
