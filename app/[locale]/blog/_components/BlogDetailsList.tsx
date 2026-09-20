'use client'

import type { BlogCard } from '@/lib/blog/types'
import { FC } from 'react'
import BlogItemsCarousel from './BlogItemsCarousel'

interface BlogListProps {
  blogData: BlogCard[]
}

const BlogDetailsList: FC<BlogListProps> = ({ blogData }) => {
  const items = blogData.map((item) => ({
    id: item.slug,
    slug: item.slug,
    title: item.title,
    date: item.date,
    thumbnail: item.thumbnail || item.featureImage || '/images/blog-img/blog-img-5.png',
  }))

  return (
    <BlogItemsCarousel
      items={items}
      hrefPrefix="/blog/"
      buttonText="3 Minute Read"
      sectionLabel="Articles"
      heading="Related Articles"
      subheading="More insights and ideas to help you explore the topic further."
    />
  )
}

export default BlogDetailsList
