/**
 * Push blog categories, posts, and blog page hero to Strapi via REST API.
 *
 * Usage (from front/ root):
 *   STRAPI_URL=https://wow.softwarewow.xyz STRAPI_API_TOKEN=your_token node scripts/push-blog-to-strapi.mjs
 *
 * Create token: Strapi Admin → Settings → API Tokens → Full access
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const STRAPI_URL = (process.env.STRAPI_URL || 'https://wow.softwarewow.xyz').replace(/\/$/, '')
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN
const LOCALE = 'en-US'

const BLOG_CATEGORIES = [
  { slug: 'news', label: 'NEWS', order: 1 },
  { slug: 'case-study', label: 'CASE STUDY', order: 2 },
  { slug: 'technology', label: 'TECHNOLOGY', order: 3 },
  { slug: 'event', label: 'EVENT', order: 4 },
]

const BLOG_POST_ENRICHMENT = {
  'the-new-era-of-digital-advertising': { categorySlug: 'technology', releaseDate: '2026-04-10' },
  'ai-driven-personalization-in-marketing': { categorySlug: 'technology', releaseDate: '2025-04-03' },
  'artificial-intelligence-automation': { categorySlug: 'technology', releaseDate: '2025-03-27' },
  'role-of-blockchain-in-advertising': { categorySlug: 'technology', releaseDate: '2025-05-08' },
  'the-changing-aace-of-digital-advertising': { categorySlug: 'news', releaseDate: '2020-04-25' },
  'the-changing-face-of-digital-advertising': { categorySlug: 'news', releaseDate: '2020-09-10' },
  'the-evolution-of-video-marketing': { categorySlug: 'technology', releaseDate: '2025-05-01' },
  'the-future-of-email-marketing': { categorySlug: 'technology', releaseDate: '2025-05-29' },
  'the-future-of-voice-search-optimization': { categorySlug: 'technology', releaseDate: '2025-04-10' },
  'the-growth-of-podcast-advertising': { categorySlug: 'event', releaseDate: '2025-05-22' },
  'the-power-of-micro-moments-in-marketing': { categorySlug: 'technology', releaseDate: '2025-04-24' },
  'the-rapid-evolution-of-digital-advertising': { categorySlug: 'case-study', releaseDate: '2022-01-15' },
  'the-rise-of-sustainable-marketing': { categorySlug: 'news', releaseDate: '2025-04-17' },
  'the-role-of-gamification-in-marketing': { categorySlug: 'technology', releaseDate: '2025-06-05' },
  'the-shifting-dynamics-of-digital-advertising': { categorySlug: 'case-study', releaseDate: '2021-10-18' },
  'the-transformation-of-digital-advertising': { categorySlug: 'case-study', releaseDate: '2022-11-20' },
}

const FEATURED_SLUG = 'the-new-era-of-digital-advertising'

function loadBlogPostSeeds() {
  const seedPath = path.resolve(__dirname, '../../../backend/src/lib/seed/editorial-content.ts')
  const raw = fs.readFileSync(seedPath, 'utf8')
  const match = raw.match(/export const BLOG_POST_SEEDS = (\[[\s\S]*?\n\]) satisfies/)
  if (!match) throw new Error('Could not parse BLOG_POST_SEEDS from editorial-content.ts')
  return JSON.parse(match[1])
}

async function strapiRequest(method, apiPath, body) {
  const headers = { 'Content-Type': 'application/json' }
  if (STRAPI_API_TOKEN) headers.Authorization = `Bearer ${STRAPI_API_TOKEN}`

  const separator = apiPath.includes('?') ? '&' : '?'
  const url = `${STRAPI_URL}/api/${apiPath}${separator}locale=${LOCALE}`

  const response = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  const text = await response.text()
  if (!response.ok) {
    throw new Error(`${method} ${apiPath} → ${response.status}: ${text.slice(0, 500)}`)
  }

  return text ? JSON.parse(text) : null
}

async function findBySlug(collection, slug) {
  const draft = await strapiRequest(
    'GET',
    `${collection}?filters[slug][$eq]=${encodeURIComponent(slug)}&status=draft`,
  )
  if (draft?.data?.[0]) return draft.data[0]

  const published = await strapiRequest(
    'GET',
    `${collection}?filters[slug][$eq]=${encodeURIComponent(slug)}`,
  )
  return published?.data?.[0] ?? null
}

async function upsertCategory(category) {
  const existing = await findBySlug('superagency-blog-categories', category.slug)
  if (existing?.documentId) {
    console.log(`  [skip] category ${category.slug}`)
    return existing.documentId
  }

  const created = await strapiRequest('POST', 'superagency-blog-categories', {
    data: category,
  })
  console.log(`  [create] category ${category.slug}`)
  return created.data.documentId
}

async function upsertPost(post, categoryDocumentId) {
  const existing = await findBySlug('superagency-blog-posts', post.slug)
  const meta = BLOG_POST_ENRICHMENT[post.slug] ?? { categorySlug: 'news', releaseDate: '2025-01-01' }

  const data = {
    title: post.title,
    slug: post.slug,
    description: post.description,
    displayDate: post.displayDate,
    releaseDate: meta.releaseDate,
    tags: post.tags ?? [],
    author: post.author ?? null,
    thumbnailPath: post.thumbnailPath ?? null,
    featureImagePath: post.featureImagePath ?? null,
    body: post.body,
    featured: post.featured ?? false,
    seo: post.seo ?? null,
    order: post.order ?? 0,
    ...(categoryDocumentId ? { category: categoryDocumentId } : {}),
  }

  if (existing?.documentId) {
    await strapiRequest('PUT', `superagency-blog-posts/${existing.documentId}`, { data })
    console.log(`  [update] post ${post.slug}`)
    return existing.documentId
  }

  const created = await strapiRequest('POST', 'superagency-blog-posts', { data })
  console.log(`  [create] post ${post.slug}`)
  return created.data.documentId
}

async function upsertBlogPage(blogPostSeeds, featuredPostDocumentId) {
  const featured = blogPostSeeds.find((p) => p.slug === FEATURED_SLUG)

  const hero = {
    title: featured?.title ?? 'The New Era of Digital Advertising',
    description:
      featured?.description ??
      'Practical ideas, expert perspectives, and emerging trends across technology, marketing, AI, websites, and business growth.',
    tags: featured?.tags ?? ['Ecommerce', 'Technology', 'Artificial Intelligence', 'Design'],
    post: featuredPostDocumentId,
  }

  const seo = {
    title: 'Blog | WOW Superagency',
    description:
      'Practical ideas, expert perspectives, and emerging trends across technology, marketing, AI, websites, and business growth.',
  }

  await strapiRequest('PUT', 'superagency-page-blog', { data: { hero, seo } })
  console.log('[update] Blog Page hero + seo')
}

async function main() {
  if (!STRAPI_API_TOKEN) {
    console.error('Missing STRAPI_API_TOKEN.')
    console.error('Create one in Strapi Admin → Settings → API Tokens → Full access')
    console.error(
      'Then run: STRAPI_URL=https://wow.softwarewow.xyz STRAPI_API_TOKEN=xxx node scripts/push-blog-to-strapi.mjs',
    )
    process.exit(1)
  }

  const blogPostSeeds = loadBlogPostSeeds()
  console.log(`Pushing blog content to ${STRAPI_URL} (${LOCALE})…`)

  console.log('Categories:')
  const categoryIds = {}
  for (const category of BLOG_CATEGORIES) {
    categoryIds[category.slug] = await upsertCategory(category)
  }

  console.log('Posts:')
  let featuredPostDocumentId = null
  for (const post of blogPostSeeds) {
    const meta = BLOG_POST_ENRICHMENT[post.slug] ?? { categorySlug: 'news' }
    const categoryId = categoryIds[meta.categorySlug]
    const documentId = await upsertPost(post, categoryId)
    if (post.slug === FEATURED_SLUG) featuredPostDocumentId = documentId
  }

  console.log('Blog Page:')
  await upsertBlogPage(blogPostSeeds, featuredPostDocumentId)

  const feed = await strapiRequest('GET', 'superagency-blog-posts/feed')
  console.log(`Done. Feed now has ${feed?.data?.length ?? 0} published post(s).`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
