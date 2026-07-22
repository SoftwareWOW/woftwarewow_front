import RevealWrapper from '@/components/animation/RevealWrapper'
import { ArrowDownRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export type BlogHeroPost = {
  slug: string
  title: string
  description: string
  date: string
  featureImage?: string
  thumbnail?: string
  tags?: string | string[]
  author?: {
    name: string
    avatar: string
  }
}

type BlogHeroProps = {
  blog: BlogHeroPost
}

const DEFAULT_TAGS = ['Ecommerce', 'Technology', 'Artificial Intelligence', 'Design']
const DEFAULT_AUTHOR = {
  name: 'Frankie Dejong',
  avatar: '/images/wow/Hero/career/team/Avatar wrap-3.png',
}

function normalizeTags(tags?: string | string[]) {
  if (!tags) return DEFAULT_TAGS
  if (Array.isArray(tags)) return tags
  return tags.split(',').map((tag) => tag.trim()).filter(Boolean)
}

export default function BlogHero({ blog }: BlogHeroProps) {
  const tags = normalizeTags(blog.tags)
  const author =  DEFAULT_AUTHOR
  const imageSrc = '/images/wow/blog/blogheroimage.jpg'

  return (
    <section className="bg-backgroundBody px-4 pt-28 transition-colors duration-300 dark:bg-dark sm:px-8 sm:pt-32 md:px-16 lg:px-[200px] lg:pt-36">
      <div className="mx-auto w-full max-w-[1320px]">
        <RevealWrapper>
          <Link href={`/blog/${blog.slug}`} className="group block">
            <figure className="relative overflow-hidden rounded-radius-md">
              <div className="relative aspect-[16/9] w-full sm:aspect-[2/1] lg:aspect-[1320/523]">
                <Image
                  src={imageSrc}
                  alt={blog.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="absolute bottom-0 right-0 bg-backgroundBody p-3 transition-colors duration-300 dark:bg-dark sm:p-4">
                <div className="flex size-14 items-center justify-center bg-primary transition-transform duration-300 group-hover:scale-105 sm:size-16 lg:size-[72px]">
                  <ArrowDownRight
                    className="size-6 !stroke-white !text-white sm:size-7"
                    strokeWidth={1.75}
                    color="#ffffff"
                  />
                </div>
              </div>
            </figure>
          </Link>
        </RevealWrapper>

        <RevealWrapper className="mt-10 lg:mt-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <h1 className="max-w-3xl text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.15] tracking-[-0.02em] text-secondary dark:text-backgroundBody">
              {blog.title}
            </h1>

            <ul className="flex max-w-md flex-wrap justify-start gap-2 lg:justify-end">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-secondary/15 bg-background px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-secondary/70 dark:border-dark dark:bg-background dark:text-dark-100">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted dark:text-dark-100 sm:text-lg">
            {blog.description}
          </p>
        </RevealWrapper>

        <RevealWrapper className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between lg:mt-12">
          <div>
            <p className="mb-3 text-sm text-muted dark:text-dark-100">Written by</p>
            <div className="flex items-center gap-3">
              <Image
                src={author.avatar}
                alt={author.name}
                width={40}
                height={40}
                className="size-10 rounded-full object-cover"
              />
              <span className="text-base font-medium text-secondary dark:text-backgroundBody">{author.name}</span>
            </div>
          </div>

          <div className="sm:text-right">
            <p className="mb-2 text-sm text-muted dark:text-dark-100">Published on</p>
            <p className="text-base font-medium capitalize text-secondary dark:text-backgroundBody">{blog.date}</p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
