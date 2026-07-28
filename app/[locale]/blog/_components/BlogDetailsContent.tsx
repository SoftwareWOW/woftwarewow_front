import RevealWrapper from '@/components/animation/RevealWrapper'
import TableOfContent from '@/components/shared/TableOfContent'
import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import { type IconType } from 'react-icons'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaXTwitter } from 'react-icons/fa6'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import BlogDetailsList from './BlogDetailsList'

interface RestOfTheBlogType {
  slug: string
  content: string
  [key: string]: any
}

const blogs: RestOfTheBlogType[] = getMarkDownData('data/blogsV2')

const shareLinks: { name: string; href: string; icon: IconType }[] = [
  { name: 'Facebook', href: 'https://www.facebook.com/', icon: FaFacebookF },
  { name: 'TikTok', href: 'https://www.tiktok.com/', icon: FaTiktok },
  { name: 'Instagram', href: 'https://www.instagram.com/', icon: FaInstagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/', icon: FaLinkedinIn },
  { name: 'Twitter', href: 'https://x.com/', icon: FaXTwitter },
]

const BlogDetailsContent = ({ blog, slug }: { blog: any; slug?: string }) => {
  const currentSlug = slug ?? blog?.data?.slug
  const RestBlogData = blogs.filter((item) => item.slug !== currentSlug).slice(0, 3)
  const headings = blog.content.match(/### .+/g) ?? []
  const tableOfContents = headings.map((heading: string) => heading.replace('### ', ''))

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <RevealWrapper as="figure" className="reveal-me w-full 2xl:max-h-[523px]">
          <Image
            src={blog?.data?.thumbnail || blog?.data?.featureImage || '/images/blog-img/blog-img-5.png'}
            width={1280}
            height={523}
            alt={blog?.data?.title || 'Blog Details'}
            className="w-full object-cover"
          />
        </RevealWrapper>

        <div className="mt-12 flex flex-col justify-start gap-10 pb-14 md:mt-[60px] md:pb-16 lg:flex-row lg:pb-[88px] xl:pb-[100px]">
          <aside className="min-w-[275px] flex-1">
            <div className="sticky top-24 max-md:mb-10">
              <TableOfContent tableOfContents={tableOfContents}>
                <div className="mb-7 mt-10 lg:mt-16 xl:mt-20">
                  <h6>Share This Post</h6>
                </div>
                <ul className="flex items-center gap-2">
                  {shareLinks.map(({ name, href, icon: Icon }) => (
                    <li key={name}>
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Share on ${name}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-secondary text-secondary transition-colors duration-300 hover:bg-primary hover:text-secondary dark:border-dark dark:text-backgroundBody dark:hover:bg-primary dark:hover:text-white">
                        <Icon className="size-5" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </TableOfContent>
            </div>
          </aside>
          <article className="career-details-body overflow-hidden">
            <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{blog.content}</ReactMarkdown>
          </article>
        </div>
      </div>
      <div className="container overflow-hidden pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px]">
        <BlogDetailsList blogData={RestBlogData} />
      </div>
    </section>
  )
}

export default BlogDetailsContent
