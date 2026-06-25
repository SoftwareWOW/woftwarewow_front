import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import Image from 'next/image'
import Link from 'next/link'
import WowButton from '../WowButton'

const posts = [
  {
    image: '/images/blog-img/homeV3-img-2.png',
    tag: 'Trends',
    title: 'Creating an effective digital branding strategy for small businesses',
  },
  {
    image: '/images/blog-img/blog-img-3.png',
    tag: 'Trends',
    title: 'How AI is reshaping customer experience in 2026',
  },
  {
    image: '/images/blog-img/blogV3-img-3.png',
    tag: 'Trends',
    title: 'Put your creative energy into growth with modern web platforms',
  },
]

export default function WowBlog() {
  return (
    <section className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-[1170px]">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <TextAppearAnimation>
            <h2 className="text-appear max-w-[670px] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1]">
              The latest trends &amp; expert insights
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="max-w-[470px]">
            <p className="text-base text-colorText dark:text-dark-100">
              Discover key trends and insights to elevate your organization.
            </p>
            <WowButton href="/ai-blog" className="mt-6">
              View All Blogs
            </WowButton>
          </RevealWrapper>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <RevealWrapper key={post.title} className="group">
              <div className="relative mb-[-60px] h-[240px] overflow-hidden rounded-radius-sm sm:mb-[-80px] sm:h-[280px] md:h-[354px]">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="370px"
                />
              </div>
              <div className="relative z-10 mx-2 rounded-radius-sm bg-secondary p-6 text-white dark:bg-dark-200">
                <span className="inline-block rounded bg-white/10 px-3 py-1 text-xs uppercase tracking-wider">{post.tag}</span>
                <h3 className="mt-4 text-lg font-medium leading-snug">{post.title}</h3>
                <Link href="/ai-blog" className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                  Read more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </Link>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
