import BlogHero, { type BlogHeroPost } from '@/app/[locale]/blog/_components/BlogHero'

import LayoutOne from '@/components/shared/LayoutOne'
import Marquess from '@/components/wow/LandascapComponets/Marquee'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import getMarkDownData from '@/utils/GetMarkDownData'
import BlogCaseStudies from './_components/BlogCaseStudies'
import BlogInsight from './_components/BlogInsight'

export const metadata = {
  title: 'AI Blog',
}

export interface BlogType {
  slug: string
  content: string
  title?: string
  description?: string
  date?: string
  thumbnail?: string
  featureImage?: string
  tags?: string | string[]
  author?: {
    name: string
    avatar: string
  }
  [key: string]: any
}

const loadedBlogs: BlogType[] = getMarkDownData('data/blogsV2') as BlogType[]
const featuredBlog = (loadedBlogs.find((blog) => blog.slug === 'the-new-era-of-digital-advertising') ??
  loadedBlogs[0]) as unknown as BlogHeroPost

const BlogPage = () => {
  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <BlogHero blog={featuredBlog} />
        <Marquess />
        <BlogInsight Blogs={loadedBlogs} />
        <BlogCaseStudies blogs={loadedBlogs} />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Grow?"
          ariaLabel="Contact WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}

export default BlogPage
