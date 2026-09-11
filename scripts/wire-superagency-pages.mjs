import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const INDUSTRY_SLUGS = [
  'professional-services',
  'startups-and-entrepreneurs',
  'retail-and-ecommerce',
  'healthcare-and-wellness',
  'hospitality-and-tourism',
  'finance-and-real-estate',
  'organizations-and-nonprofits',
  'education-and-training',
  'technology-and-saas',
];

const FOR_YOU_SLUGS = [
  'build-and-launch',
  'marketing-and-growth',
  'software-and-technology',
  'social-and-community',
  'ai-and-automation',
  'sales-and-revenue',
  'branding-and-creative',
  'hosting-and-infrastructure',
  'learning-and-events',
];

const PACKAGE_SLUGS = [
  'startup-launch',
  'business-growth',
  'digital-transformation',
  'ai-automation',
  'brand-authority',
  'saas-product-development',
  'website-growth-engine',
  'sales-acceleration',
  'enterprise-infrastructure',
];

const STATIC_PAGES = [
  ['about', '/about'],
  ['about-strategy-centre', '/about/strategy-centre'],
  ['about-why-smbs', '/about/why-smbs'],
  ['about-partners', '/about/partners'],
  ['about-why-us', '/about/why-us'],
  ['team', '/team'],
  ['portfolio', '/portfolio'],
  ['portfolio-recent', '/portfolio/recent'],
  ['clients', '/clients'],
  ['partners', '/partners'],
  ['locations', '/locations'],
  ['industries', '/industries'],
  ['meet', '/meet'],
  ['thinktank', '/thinktank'],
  ['quotation', '/quotation'],
  ['whitelabel', '/whitelabel'],
  ['affiliate', '/affiliate'],
  ['helpsupport', '/helpsupport'],
  ['brandkit', '/brandkit'],
  ['blog', '/blog'],
  ['career', '/career'],
  ['clientportal', '/clientportal'],
];

const pages = [
  ...STATIC_PAGES.map(([slug, route]) => ({ slug, route })),
  ...INDUSTRY_SLUGS.map((slug) => ({ slug, route: `/industries/${slug}` })),
  ...FOR_YOU_SLUGS.map((slug) => ({ slug, route: `/for-you/${slug}` })),
  ...PACKAGE_SLUGS.map((slug) => ({ slug, route: `/packages/${slug}` })),
];

function routeToPagePath(route) {
  return path.join(root, 'app', '[locale]', route.replace(/^\//, ''), 'page.tsx');
}

function titleFromSlug(slug) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function ensureImport(content, line) {
  if (content.includes(line)) return content;
  const lastImport = content.lastIndexOf('\nimport ');
  const lineEnd = content.indexOf('\n', lastImport + 1);
  return content.slice(0, lineEnd + 1) + line + '\n' + content.slice(lineEnd + 1);
}

function wirePage(filePath, slug) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('loadSuperagencyPage')) return false;

  const title = titleFromSlug(slug);

  content = ensureImport(content, "import { buildSuperagencyPageMetadata, loadSuperagencyPage } from '@/lib/strapi/superagency-page-loader'");

  if (!content.includes('const PAGE_SLUG')) {
    const insertAfter = content.match(/^(import[\s\S]*?\n)\n/m);
    const anchor = insertAfter ? insertAfter[0].length : 0;
    content =
      content.slice(0, anchor) +
      `\nconst PAGE_SLUG = '${slug}' as const\n\nexport const revalidate = 60\n\n` +
      content.slice(anchor);
  }

  if (!content.includes('export const revalidate')) {
    content = content.replace(
      `const PAGE_SLUG = '${slug}' as const`,
      `const PAGE_SLUG = '${slug}' as const\n\nexport const revalidate = 60`,
    );
  }

  if (!content.includes('type Props')) {
    content = content.replace(
      /export const revalidate = 60\n\n/,
      `export const revalidate = 60\n\ntype Props = { params: Promise<{ locale: string }> }\n\n`,
    );
  }

  if (content.includes('export async function generateMetadata')) {
    if (!content.includes('buildSuperagencyPageMetadata')) {
      content = content.replace(
        /export async function generateMetadata\(\{ params \}: Props\): Promise<Metadata> \{\n\s*const \{ locale \} = await params\n\n\s*return \{/,
        `export async function generateMetadata({ params }: Props): Promise<Metadata> {\n  const { locale } = await params\n  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)\n  return buildSuperagencyPageMetadata(cms, {`,
      );
    }
  } else if (content.includes('export const metadata')) {
    content = content.replace(
      /export const metadata[^\n]*\n[\s\S]*?\n\}/,
      `export async function generateMetadata({ params }: Props): Promise<Metadata> {\n  const { locale } = await params\n  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)\n  return buildSuperagencyPageMetadata(cms, { title: '${title}' })\n}`,
    );
  }

  if (/export default async function \w+\(\{ params \}: Props\)/.test(content)) {
    content = content.replace(
      /export default async function (\w+)\(\{ params \}: Props\) \{\n\s*const \{ locale \} = await params\n\s*setRequestLocale\(locale as Locale\)/,
      `export default async function $1({ params }: Props) {\n  const { locale } = await params\n  setRequestLocale(locale as Locale)\n  await loadSuperagencyPage(PAGE_SLUG, locale as Locale)`,
    );
  } else if (/const \w+ = async \(\{ params \}: Props\) => \{/.test(content)) {
    content = content.replace(
      /const (\w+) = async \(\{ params \}: Props\) => \{\n(\s*const \{ locale \} = await params\n\s*setRequestLocale\(locale as Locale\)\n)?/,
      `const $1 = async ({ params }: Props) => {\n  const { locale } = await params\n  setRequestLocale(locale as Locale)\n  await loadSuperagencyPage(PAGE_SLUG, locale as Locale)\n`,
    );
  } else if (/const \w+ = \(\) => \{/.test(content)) {
    content = content.replace(
      /const (\w+) = \(\) => \{/,
      `const $1 = async ({ params }: Props) => {\n  const { locale } = await params\n  setRequestLocale(locale as Locale)\n  await loadSuperagencyPage(PAGE_SLUG, locale as Locale)\n`,
    );
  }

  fs.writeFileSync(filePath, content);
  return true;
}

let updated = 0;
for (const { slug, route } of pages) {
  const filePath = routeToPagePath(route);
  if (!fs.existsSync(filePath)) {
    console.warn('Missing:', filePath);
    continue;
  }
  if (wirePage(filePath, slug)) {
    updated++;
    console.log('Wired', route);
  }
}

console.log(`Updated ${updated} pages.`);
