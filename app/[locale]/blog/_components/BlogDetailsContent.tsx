import type { BlogCard } from '@/lib/blog/types'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TableOfContent from '@/components/shared/TableOfContent'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import BlogDetailsList from './BlogDetailsList'
import BlogShareButtons from './BlogShareButtons'

type BlogDetailsContentProps = {
  post: BlogCard
  restBlogPosts: BlogCard[]
}

const BlogDetailsContent = ({ post, restBlogPosts }: BlogDetailsContentProps) => {
  const headings = post.content.match(/### .+/g) ?? []
  const tableOfContents = headings.map((heading: string) => heading.replace('### ', ''))

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <RevealWrapper as="figure" className="reveal-me w-full overflow-hidden rounded-radius-md 2xl:max-h-[523px]">
          <Image
            src={post.thumbnail || post.featureImage || '/images/wow/blog/Blog card 1.jpg'}
            width={1280}
            height={523}
            alt={post.title || 'Blog Details'}
            className="w-full rounded-radius-md object-cover"
          />
        </RevealWrapper>

        <div className="mt-12 flex flex-col justify-start gap-10 pb-14 md:mt-[60px] md:pb-16 lg:flex-row lg:pb-[88px] xl:pb-[100px]">
          <aside className="min-w-[275px] flex-1">
            <div className="sticky top-24 max-md:mb-10">
              <TableOfContent tableOfContents={tableOfContents}>
                <div className="mb-7 mt-10 lg:mt-16 xl:mt-20">
                  <h6>Share This Post</h6>
                </div>
                <BlogShareButtons
                  title={post.title || 'Blog post'}
                  description={post.description}
                />
              </TableOfContent>
            </div>
          </aside>
          <article className="career-details-body overflow-hidden">
            <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{post.content}</ReactMarkdown>
          </article>
        </div>
      </div>
      <div className="overflow-hidden pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px]">
        <BlogDetailsList blogData={restBlogPosts} />
      </div>
    </section>
  )
}

export default BlogDetailsContent
