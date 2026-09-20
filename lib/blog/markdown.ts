import type { BlogCard } from '@/lib/blog/types';
import { normalizeBlogBody } from '@/lib/strapi/mappers/blog';

const DEFAULT_BLOG_CARD_IMAGE = '/images/wow/blog/Blog card 1.jpg';
const DEFAULT_BLOG_DETAIL_IMAGE = '/images/wow/blog/Blog card 2.jpg';

function resolveMarkdownImage(path?: string): string | undefined {
  if (!path?.trim()) return undefined;
  const trimmed = path.trim();
  if (trimmed.startsWith('/images/blog-img/')) return DEFAULT_BLOG_CARD_IMAGE;
  if (trimmed.startsWith('/images/services/')) return DEFAULT_BLOG_DETAIL_IMAGE;
  return trimmed;
}

export function mapMarkdownBlogCard(
  blog: Record<string, unknown>,
  content?: string,
): BlogCard {
  const tags = blog.tags;

  return {
    slug: String(blog.slug ?? ''),
    title: String(blog.title ?? ''),
    description: String(blog.description ?? ''),
    date: String(blog.date ?? ''),
    content: normalizeBlogBody(typeof content === 'string' ? content : String(blog.content ?? '')),
    thumbnail: resolveMarkdownImage(
      typeof blog.thumbnail === 'string' ? blog.thumbnail : undefined,
    ) ?? DEFAULT_BLOG_CARD_IMAGE,
    featureImage: resolveMarkdownImage(
      typeof blog.featureImage === 'string' ? blog.featureImage : undefined,
    ) ?? DEFAULT_BLOG_DETAIL_IMAGE,
    tags: Array.isArray(tags) ? tags.map(String) : typeof tags === 'string' ? tags.split(',').map((t) => t.trim()) : [],
    author:
      blog.author && typeof blog.author === 'object' ?
        {
          name: String((blog.author as { name?: string }).name ?? ''),
          avatar: String((blog.author as { avatar?: string }).avatar ?? ''),
        }
      : undefined,
  };
}
