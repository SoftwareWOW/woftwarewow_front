import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const ROUTES = [
  '/portfolio',
  '/portfolio/recent',
  '/clients',
  '/partners',
  '/locations',
  '/industries',
  '/industries/professional-services',
  '/industries/startups-and-entrepreneurs',
  '/industries/retail-and-ecommerce',
  '/industries/healthcare-and-wellness',
  '/industries/hospitality-and-tourism',
  '/industries/finance-and-real-estate',
  '/industries/organizations-and-nonprofits',
  '/industries/education-and-training',
  '/industries/technology-and-saas',
  '/for-you/build-and-launch',
  '/for-you/marketing-and-growth',
  '/for-you/software-and-technology',
  '/for-you/social-and-community',
  '/for-you/ai-and-automation',
  '/for-you/sales-and-revenue',
  '/for-you/branding-and-creative',
  '/for-you/hosting-and-infrastructure',
  '/for-you/learning-and-events',
  '/packages/startup-launch',
  '/packages/business-growth',
  '/packages/digital-transformation',
  '/packages/ai-automation',
  '/packages/brand-authority',
  '/packages/saas-product-development',
  '/packages/website-growth-engine',
  '/packages/sales-acceleration',
  '/packages/enterprise-infrastructure',
];

const CMS_BLOCK = `
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
`;

function routeToPagePath(route) {
  return path.join(root, 'app', '[locale]', route.replace(/^\//, ''), 'page.tsx');
}

function dedupeImports(content) {
  const lines = content.split('\n');
  const seen = new Set();
  return lines
    .filter((line) => {
      if (!line.startsWith('import ')) return true;
      if (seen.has(line)) return false;
      seen.add(line);
      return true;
    })
    .join('\n');
}

for (const route of ROUTES) {
  const filePath = routeToPagePath(route);
  let content = fs.readFileSync(filePath, 'utf8');
  content = dedupeImports(content);

  content = content.replace(/\r\n/g, '\n');
  content = content.replace(/\n\s*await loadSuperagencyPage\(PAGE_SLUG, locale as Locale\)\n/g, '\n');

  if (!content.includes('const hero = buildPageHero')) {
    content = content.replace(
      /setRequestLocale\(locale as Locale\)\s*\n/,
      `setRequestLocale(locale as Locale)\n${CMS_BLOCK}\n`,
    );
  }

  fs.writeFileSync(filePath, content);
  console.log('Fixed', route);
}
