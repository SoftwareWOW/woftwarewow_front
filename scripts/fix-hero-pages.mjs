import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const PAGES = JSON.parse(fs.readFileSync(path.join(__dirname, 'wire-hero-pages-data.json'), 'utf8'));

function routeToPagePath(route) {
  return path.join(root, 'app', '[locale]', route.replace(/^\//, ''), 'page.tsx');
}

function formatDefaultHero(obj) {
  const lines = Object.entries(obj).map(([key, value]) => {
    const escaped = String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return `  ${key}: '${escaped}',`;
  });
  return `const DEFAULT_HERO = {\n${lines.join('\n')}\n}`;
}

function dedupeImports(content) {
  const lines = content.split('\n');
  const seen = new Set();
  const out = [];
  for (const line of lines) {
    if (line.startsWith('import ')) {
      if (seen.has(line)) continue;
      seen.add(line);
    }
    out.push(line);
  }
  return out.join('\n');
}

function fixPage(page) {
  const filePath = routeToPagePath(page.route);
  if (!fs.existsSync(filePath)) return false;

  let content = fs.readFileSync(filePath, 'utf8');
  content = dedupeImports(content);

  if (!content.includes('import { buildPageHero }')) {
    content = content.replace(
      /(import \{ buildSuperagencyPageMetadata, loadSuperagencyPage \} from '@\/lib\/strapi\/superagency-page-loader')/,
      "$1\nimport { buildPageHero } from '@/lib/strapi/resolve-page-hero'",
    );
  }

  if (!content.includes('const DEFAULT_HERO')) {
    content = content.replace(
      /(export const revalidate = 60\n\n)/,
      `$1${formatDefaultHero(page.defaultHero)}\n\n`,
    );
  }

  const cmsHeroBlock = `  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)

`;

  content = content.replace(/\n\s*await loadSuperagencyPage\(PAGE_SLUG, locale as Locale\)\n/g, '\n');
  content = content.replace(/\n\s*const cms = await loadSuperagencyPage\(PAGE_SLUG, locale as Locale\)\n\s*const hero = buildPageHero\(PAGE_SLUG, DEFAULT_HERO, cms\.hero\)\n\n/g, '\n');

  if (!content.includes('const hero = buildPageHero')) {
    content = content.replace(
      /(setRequestLocale\(locale as Locale\)\n)/,
      `$1\n${cmsHeroBlock}`,
    );
  }

  const heroTag = `<${page.hero} />`;
  const heroTagWired = `<${page.hero} {...hero} images={hero.images} />`;
  if (content.includes(heroTag)) {
    content = content.replace(heroTag, heroTagWired);
  }

  fs.writeFileSync(filePath, content);
  return true;
}

const data = fs.readFileSync(path.join(__dirname, 'wire-hero-pages.mjs'), 'utf8');
// extract PAGES array from wire-hero-pages.mjs by eval - simpler to inline
