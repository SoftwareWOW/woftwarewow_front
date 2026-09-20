import type { BlogCard } from '@/lib/blog/types';
import {
  normalizeBlogBodyImages,
  pickBlogCardFallback,
  pickBlogFeatureFallback,
  resolveBlogPostImage,
} from '@/lib/blog/images';

function resolveMarkdownImage(
  path: string | undefined,
  slug: string,
  kind: 'thumbnail' | 'feature',
): string {
  if (!path?.trim()) {
    return kind === 'feature' ? pickBlogFeatureFallback(slug) : pickBlogCardFallback(slug);
  }

  const trimmed = path.trim();
  if (trimmed.startsWith('/images/blog-img/') || trimmed.startsWith('/images/services/')) {
    return kind === 'feature' ? pickBlogFeatureFallback(slug) : pickBlogCardFallback(slug);
  }

  return trimmed;
}

export function mapMarkdownBlogCard(
  blog: Record<string, unknown>,
  content?: string,
): BlogCard {
  const tags = blog.tags;
  const slug = String(blog.slug ?? '');

  return {
    slug,
    title: String(blog.title ?? ''),
    description: String(blog.description ?? ''),
    date: String(blog.date ?? ''),
    content: normalizeBlogBodyImages(
      typeof content === 'string' ? content : String(blog.content ?? ''),
      slug,
    ),
    thumbnail: resolveMarkdownImage(
      typeof blog.thumbnail === 'string' ? blog.thumbnail : undefined,
      slug,
      'thumbnail',
    ),
    featureImage: resolveMarkdownImage(
      typeof blog.featureImage === 'string' ? blog.featureImage : undefined,
      slug,
      'feature',
    ),
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
