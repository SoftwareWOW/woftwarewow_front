import BlogHero, { type BlogHeroPost } from '@/app/[locale]/blog/_components/BlogHero'

import type { Locale } from '@/i18n/config'
import { mapMarkdownBlogCard } from '@/lib/blog/markdown'
import type { BlogCard, BlogPageHeroData } from '@/lib/blog/types'
import {
  buildBlogPageMetadata,
  loadBlogPageData,
} from '@/lib/strapi/load-blog-page'
import LayoutOne from '@/components/shared/LayoutOne'
import Marquess from '@/components/wow/LandascapComponets/Marquee'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import getMarkDownData from '@/utils/GetMarkDownData'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BlogCaseStudies from './_components/BlogCaseStudies'
import BlogInsight from './_components/BlogInsight'

export const revalidate = 60

export interface BlogType {
  slug: string
  content: string
  title?: string
  description?: string
  date?: string
  thumbnail?: string
  featureImage?: string
  tags?: string | string[]
  id?: string | number
  badge?: string
  author?: {
    name: string
    avatar: string
  }
  [key: string]: unknown
}

type Props = {
  params: Promise<{ locale: string }>
}

const DEFAULT_METADATA: Metadata = {
  title: 'Blog',
  description:
    'Practical ideas, expert perspectives, and emerging trends across technology, marketing, AI, websites, and business growth.',
}

function buildHeroPost(hero: BlogPageHeroData | null, fallbackPosts: BlogCard[]): BlogHeroPost {
  const featuredFallback =
    fallbackPosts.find((blog) => blog.slug === 'the-new-era-of-digital-advertising') ??
    fallbackPosts[0]

  if (hero) {
    return {
      slug: hero.slug || featuredFallback?.slug || '',
      title: hero.title || featuredFallback?.title || '',
      description: hero.description || featuredFallback?.description || '',
      date: hero.date ?? featuredFallback?.date ?? '',
      tags: hero.tags?.length ? hero.tags : featuredFallback?.tags,
      featureImage: hero.image || featuredFallback?.featureImage,
      thumbnail: hero.image || featuredFallback?.thumbnail,
    }
  }

  return {
    slug: featuredFallback?.slug ?? '',
    title: featuredFallback?.title ?? 'Insights That Help Businesses Grow',
    description:
      featuredFallback?.description ??
      'Practical ideas, expert perspectives, and emerging trends across technology, marketing, AI, websites, and business growth.',
    date: featuredFallback?.date ?? '',
    tags: featuredFallback?.tags,
    featureImage: featuredFallback?.featureImage,
    thumbnail: featuredFallback?.thumbnail,
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const { cms } = await loadBlogPageData(locale as Locale)
  return buildBlogPageMetadata(cms, DEFAULT_METADATA)
}

const BlogPage = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const markdownBlogs = (getMarkDownData('data/blogsV2') as Record<string, unknown>[]).map(
    (blog) => mapMarkdownBlogCard(blog),
  )

  const { hero, posts, categories, caseStudies } = await loadBlogPageData(locale as Locale)
  const blogPosts = posts.length ? posts : markdownBlogs
  const featuredPost = buildHeroPost(hero, blogPosts)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <BlogHero blog={featuredPost} imageSrc={hero?.image} />
        <Marquess />
        <BlogInsight Blogs={blogPosts} categories={categories} />
        <BlogCaseStudies caseStudies={caseStudies} />
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
