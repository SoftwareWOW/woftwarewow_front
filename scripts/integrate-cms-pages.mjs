/**
 * Wire resolvePageSections into all Superagency page.tsx files and spread CMS props to section components.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUGS = [
  'about',
  'about-strategy-centre',
  'about-why-smbs',
  'about-partners',
  'about-why-us',
  'team',
  'portfolio',
  'portfolio-recent',
  'clients',
  'partners',
  'locations',
  'industries',
  'professional-services',
  'startups-and-entrepreneurs',
  'retail-and-ecommerce',
  'healthcare-and-wellness',
  'hospitality-and-tourism',
  'finance-and-real-estate',
  'organizations-and-nonprofits',
  'education-and-training',
  'technology-and-saas',
  'build-and-launch',
  'marketing-and-growth',
  'software-and-technology',
  'social-and-community',
  'ai-and-automation',
  'sales-and-revenue',
  'branding-and-creative',
  'hosting-and-infrastructure',
  'learning-and-events',
  'startup-launch',
  'business-growth',
  'digital-transformation',
  'ai-automation',
  'brand-authority',
  'saas-product-development',
  'website-growth-engine',
  'sales-acceleration',
  'enterprise-infrastructure',
  'meet',
  'thinktank',
  'quotation',
  'whitelabel',
  'affiliate',
  'helpsupport',
  'brandkit',
  'blog',
  'career',
  'clientportal',
];

const ROUTE_MAP = {
  about: '/about',
  'about-strategy-centre': '/about/strategy-centre',
  'about-why-smbs': '/about/why-smbs',
  'about-partners': '/about/partners',
  'about-why-us': '/about/why-us',
  team: '/team',
  portfolio: '/portfolio',
  'portfolio-recent': '/portfolio/recent',
  clients: '/clients',
  partners: '/partners',
  locations: '/locations',
  industries: '/industries',
  'professional-services': '/industries/professional-services',
  'startups-and-entrepreneurs': '/industries/startups-and-entrepreneurs',
  'retail-and-ecommerce': '/industries/retail-and-ecommerce',
  'healthcare-and-wellness': '/industries/healthcare-and-wellness',
  'hospitality-and-tourism': '/industries/hospitality-and-tourism',
  'finance-and-real-estate': '/industries/finance-and-real-estate',
  'organizations-and-nonprofits': '/industries/organizations-and-nonprofits',
  'education-and-training': '/industries/education-and-training',
  'technology-and-saas': '/industries/technology-and-saas',
  'build-and-launch': '/for-you/build-and-launch',
  'marketing-and-growth': '/for-you/marketing-and-growth',
  'software-and-technology': '/for-you/software-and-technology',
  'social-and-community': '/for-you/social-and-community',
  'ai-and-automation': '/for-you/ai-and-automation',
  'sales-and-revenue': '/for-you/sales-and-revenue',
  'branding-and-creative': '/for-you/branding-and-creative',
  'hosting-and-infrastructure': '/for-you/hosting-and-infrastructure',
  'learning-and-events': '/for-you/learning-and-events',
  'startup-launch': '/packages/startup-launch',
  'business-growth': '/packages/business-growth',
  'digital-transformation': '/packages/digital-transformation',
  'ai-automation': '/packages/ai-automation',
  'brand-authority': '/packages/brand-authority',
  'saas-product-development': '/packages/saas-product-development',
  'website-growth-engine': '/packages/website-growth-engine',
  'sales-acceleration': '/packages/sales-acceleration',
  'enterprise-infrastructure': '/packages/enterprise-infrastructure',
  meet: '/meet',
  thinktank: '/thinktank',
  quotation: '/quotation',
  whitelabel: '/whitelabel',
  affiliate: '/affiliate',
  helpsupport: '/helpsupport',
  brandkit: '/brandkit',
  blog: '/blog',
  career: '/career',
  clientportal: '/clientportal',
};

function fieldToComponent(fieldName) {
  return fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
}

function readPageFile(slug) {
  const route = ROUTE_MAP[slug];
  return path.join(root, 'app', '[locale]', route.replace(/^\//, ''), 'page.tsx');
}

function ensureImport(content, importLine) {
  if (content.includes(importLine.trim())) return content;
  const lastImport = content.lastIndexOf('\nimport ');
  if (lastImport === -1) return importLine + '\n' + content;
  const end = content.indexOf('\n', lastImport + 1);
  return content.slice(0, end + 1) + importLine + '\n' + content.slice(end + 1);
}

function wirePage(slug) {
  const filePath = readPageFile(slug);
  if (!fs.existsSync(filePath)) {
    console.log('skip (missing):', slug);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Add resolvePageSections import
  if (!content.includes('resolvePageSections')) {
    content = content.replace(
      /from '@\/lib\/strapi\/superagency-page-loader'/,
      "from '@/lib/strapi/superagency-page-loader'",
    );
    content = ensureImport(
      content,
      "import { resolvePageSections } from '@/lib/strapi/superagency-page-loader'",
    );
    // Merge into existing import if loadSuperagencyPage import exists
    content = content.replace(
      /import \{([^}]*?)loadSuperagencyPage([^}]*?)\} from '@\/lib\/strapi\/superagency-page-loader'/,
      (match, before, after) => {
        if (match.includes('resolvePageSections')) return match;
        return `import {${before}loadSuperagencyPage, resolvePageSections${after}} from '@/lib/strapi/superagency-page-loader'`;
      },
    );
    // Remove duplicate standalone import if merged
    content = content.replace(
      /import \{ resolvePageSections \} from '@\/lib\/strapi\/superagency-page-loader'\n/,
      '',
    );
  }

  // Add sections resolution after hero
  if (!content.includes('resolvePageSections(cms')) {
    content = content.replace(
      /const hero = buildPageHero\(PAGE_SLUG, DEFAULT_HERO, cms\.hero\)/,
      'const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)\n  const sections = resolvePageSections(cms, PAGE_SLUG)',
    );
  }

  // Wire section components: <ComponentName /> -> <ComponentName {...(sections.fieldName ?? {})} />
  // Match PascalCase components imported from ./_components/
  const componentImports = [...content.matchAll(/import (\w+) from '\.\/_components\/(\w+)'/g)];
  for (const [, compName] of componentImports) {
    if (compName.endsWith('Hero') || compName === 'WowGrowthCta') continue;
    const fieldName = compName.charAt(0).toLowerCase() + compName.slice(1);
    const selfClosing = new RegExp(`<${compName} />`, 'g');
    const withProps = new RegExp(`<${compName} \\{\\.\\.\\.`);
    if (withProps.test(content)) continue;
    if (selfClosing.test(content)) {
      content = content.replace(selfClosing, `<${compName} {...(sections.${fieldName} ?? {})} />`);
    }
    // Also handle components with existing props like servicesData
    const withExistingProps = new RegExp(`<${compName} ([^/][^>]*) />`, 'g');
    content = content.replace(withExistingProps, (match, props) => {
      if (props.includes('sections.')) return match;
      return `<${compName} ${props} {...(sections.${fieldName} ?? {})} />`;
    });
  }

  fs.writeFileSync(filePath, content);
  console.log('wired:', slug);
}

for (const slug of SLUGS) {
  wirePage(slug);
}

console.log('Done wiring pages.');
