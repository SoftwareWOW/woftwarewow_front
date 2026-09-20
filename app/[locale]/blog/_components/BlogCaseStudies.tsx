'use client'

import type { BlogCaseStudyCarouselItem } from '@/lib/blog/types'
import { FC } from 'react'
import BlogItemsCarousel from './BlogItemsCarousel'

interface BlogCaseStudiesProps {
  caseStudies: BlogCaseStudyCarouselItem[]
}

const BlogCaseStudies: FC<BlogCaseStudiesProps> = ({ caseStudies }) => {
  const items = caseStudies.map((study) => ({
    id: study.id,
    slug: study.slug,
    title: study.title,
    date: study.date,
    thumbnail: study.thumbnail,
  }))

  return (
    <BlogItemsCarousel
      items={items}
      hrefPrefix="/case-study/"
      buttonText="View Case Study"
      sectionLabel="Case Studies"
      heading="View our previous works"
      subheading="Our success comes from a skilled team driving the future of Design solutions."
      maxItems={20}
    />
  )
}

export default BlogCaseStudies
