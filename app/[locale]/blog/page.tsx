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

function mapMarkdownBlog(blog: Record<string, unknown>): BlogCard {
  const tags = blog.tags;
  return {
    slug: String(blog.slug ?? ''),
    title: String(blog.title ?? ''),
    description: String(blog.description ?? ''),
    date: String(blog.date ?? ''),
    content: String(blog.content ?? ''),
    thumbnail: typeof blog.thumbnail === 'string' ? blog.thumbnail : undefined,
    featureImage: typeof blog.featureImage === 'string' ? blog.featureImage : undefined,
    tags: Array.isArray(tags) ? tags.map(String) : typeof tags === 'string' ? tags.split(',').map((t) => t.trim()) : [],
    author:
      blog.author && typeof blog.author === 'object' ?
        {
          name: String((blog.author as { name?: string }).name ?? ''),
          avatar: String((blog.author as { avatar?: string }).avatar ?? ''),
        }
      : undefined,
  }
}

function buildHeroPost(hero: BlogPageHeroData | null, fallbackPosts: BlogCard[]): BlogHeroPost {
  if (hero) {
    return {
      slug: hero.slug,
      title: hero.title,
      description: hero.description,
      date: hero.date ?? '',
      tags: hero.tags,
      featureImage: hero.image,
      thumbnail: hero.image,
    }
  }

  const featured =
    fallbackPosts.find((blog) => blog.slug === 'the-new-era-of-digital-advertising') ??
    fallbackPosts[0]

  return {
    slug: featured?.slug ?? '',
    title: featured?.title ?? 'Insights That Help Businesses Grow',
    description:
      featured?.description ??
      'Practical ideas, expert perspectives, and emerging trends across technology, marketing, AI, websites, and business growth.',
    date: featured?.date ?? '',
    tags: featured?.tags,
    featureImage: featured?.featureImage,
    thumbnail: featured?.thumbnail,
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
    mapMarkdownBlog,
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
