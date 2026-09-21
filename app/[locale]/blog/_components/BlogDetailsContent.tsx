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

const OBSTACLES_HEADING = '### Overcoming Obstacles'

function stripMarkdownImages(content: string) {
  return content.replace(/!\[[^\]]*\]\([^)]+\)\s*/g, '').trim()
}

function splitContentForBodyImages(content: string) {
  const cleaned = stripMarkdownImages(content)
  const splitIndex = cleaned.indexOf(OBSTACLES_HEADING)

  if (splitIndex === -1) {
    return { before: cleaned, after: '' }
  }

  return {
    before: cleaned.slice(0, splitIndex).trim(),
    after: cleaned.slice(splitIndex).trim(),
  }
}

const BlogDetailsContent = ({ post, restBlogPosts }: BlogDetailsContentProps) => {
  const headings = post.content.match(/### .+/g) ?? []
  const tableOfContents = headings.map((heading: string) => heading.replace('### ', ''))
  const bodyImages = post.bodyImages ?? []
  const contentParts =
    bodyImages.length > 0 ?
      splitContentForBodyImages(post.content)
    : { before: stripMarkdownImages(post.content), after: '' }
  const { before, after } = contentParts

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        {(post.featureImage || post.thumbnail) ? (
          <RevealWrapper
            as="figure"
            className="reveal-me relative w-full overflow-hidden rounded-radius-md aspect-[16/9] sm:aspect-[2/1] lg:aspect-[1320/523]"
          >
            <Image
              src={post.featureImage || post.thumbnail || ''}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
              alt={post.title || 'Blog Details'}
              className="rounded-radius-md object-cover"
            />
          </RevealWrapper>
        ) : null}

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
            <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{before}</ReactMarkdown>

            {bodyImages.map((image, index) => (
              <figure
                key={`${image.src}-${index}`}
                className="relative my-8 w-full overflow-hidden rounded-radius-md aspect-[16/9] sm:aspect-[2/1] lg:aspect-[1320/523]"
              >
                <Image
                  src={image.src}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
                  alt={image.alt || post.title || 'Blog image'}
                  className="rounded-radius-md object-cover"
                />
              </figure>
            ))}

            {after ? (
              <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{after}</ReactMarkdown>
            ) : null}
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
