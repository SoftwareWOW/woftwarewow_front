import BlogHero, { type BlogHeroPost } from '@/app/[locale]/blog/_components/BlogHero'

import type { Locale } from '@/i18n/config'
import type { BlogCard, BlogPageHeroData } from '@/lib/blog/types'
import {
  buildBlogPageMetadata,
  loadBlogPageData,
} from '@/lib/strapi/load-blog-page'
import LayoutOne from '@/components/shared/LayoutOne'
import Marquess from '@/components/wow/LandascapComponets/Marquee'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
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

function buildHeroPost(
  hero: BlogPageHeroData | null,
  posts: BlogCard[],
): BlogHeroPost | null {
  const featuredPost =
    posts.find((blog) => blog.slug === hero?.slug) ??
    posts.find((blog) => blog.slug === 'the-new-era-of-digital-advertising') ??
    posts[0]

  if (hero) {
    return {
      slug: hero.slug || featuredPost?.slug || '',
      title: hero.title || featuredPost?.title || '',
      description: hero.description || featuredPost?.description || '',
      date: hero.date ?? featuredPost?.date ?? '',
      tags: hero.tags?.length ? hero.tags : featuredPost?.tags,
      featureImage: hero.image || featuredPost?.featureImage,
      thumbnail: hero.image || featuredPost?.thumbnail,
    }
  }

  if (!featuredPost) return null

  return {
    slug: featuredPost.slug,
    title: featuredPost.title,
    description: featuredPost.description,
    date: featuredPost.date,
    tags: featuredPost.tags,
    featureImage: featuredPost.featureImage,
    thumbnail: featuredPost.thumbnail,
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

  const { hero, posts, categories, caseStudies } = await loadBlogPageData(locale as Locale)
  const featuredPost = buildHeroPost(hero, posts)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {featuredPost ? <BlogHero blog={featuredPost} imageSrc={hero?.image} /> : null}
        <Marquess />
        <BlogInsight Blogs={posts} categories={categories} />
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
