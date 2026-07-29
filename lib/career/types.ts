export type CareerPostData = {
  slug?: string
  title: string
  description: string
  tags: string[]
  department?: string
  employment?: string
  location?: string
  experience?: string
  salary?: string
  posted?: string
  division?: string
  divisionDescription?: string
  industry?: string
  companySize?: string
  companyLocation?: string
  phone?: string
  website?: string
}

export type CareerListItem = CareerPostData & {
  slug: string
  content: string
}

export type ParsedCareerSection = {
  intro: string
  items: string[]
}

export type ParsedCareerRequirements = {
  required: string[]
  niceToHave: string[]
}

export type ParsedCareerContent = {
  aboutTheRole: ParsedCareerSection
  responsibilities: ParsedCareerSection
  requirements: ParsedCareerRequirements
  benefits: ParsedCareerSection
}
