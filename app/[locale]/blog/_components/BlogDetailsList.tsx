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
    thumbnail: item.thumbnail || item.featureImage || '/images/wow/blog/Blog card 1.jpg',
  }))

  return (
    <BlogItemsCarousel
      items={items}
      hrefPrefix="/blog/"
      buttonText="3 Minute Read"
      sectionLabel="Blog"
      heading="View our previous works"
      subheading="Practical ideas, expert perspectives, and emerging trends across technology, marketing, AI, websites, and business growth."
    />
  )
}

export default BlogDetailsList
