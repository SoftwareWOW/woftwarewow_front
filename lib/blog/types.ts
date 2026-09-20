export type BlogAuthor = {
  name: string
  avatar: string
}

export type BlogCard = {
  slug: string
  title: string
  description: string
  date: string
  content: string
  thumbnail?: string
  featureImage?: string
  tags?: string[]
  categorySlug?: string
  categoryLabel?: string
  author?: BlogAuthor
}

export type BlogPageHeroData = {
  slug: string
  title: string
  description: string
  tags: string[]
  image?: string
  date?: string
}

export type BlogCategoryTab = {
  label: string
  slug: string
}

export type BlogCaseStudyCarouselItem = {
  id: string
  slug: string
  title: string
  description: string
  date: string
  thumbnail: string
}
