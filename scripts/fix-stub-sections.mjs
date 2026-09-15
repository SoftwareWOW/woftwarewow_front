import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const TYPE_MAP = {
  OnePartner: 'technologies', WhatMakesUsDifferent: 'technologies', SuperagencyAdvantage: 'process',
  WhySuperagency: 'technologies', TheReality: 'technologies', ElevateSmb: 'technologies', BuiltToGrow: 'process',
  PartnerEcosystem: 'technologies', PartnerCategories: 'technologies', WhyWePartner: 'technologies', MutualGrowth: 'technologies',
  PortfolioCta: 'technologies', RecentWorkCta: 'technologies', RecentWorkExplorer: 'technologies',
  ClientsCta: 'technologies', PartnerNetwork: 'partners',
  ThinkTankFaq: 'faq', QuotationForm: 'rfq', WhiteLabelCapabilities: 'technologies',
  SupportContact: 'technologies',
  StartupPackages: 'package-list', CarePackages: 'package-list',
  TravelBlogs: 'technologies', ExclusiveTravelDeals: 'technologies',
  RecommendedSolutions: 'technologies', CareJourney: 'process',
  StrategicExpertise: 'technologies',
  IndustriesProcess: 'process',
  GallaryImages: 'images', BrandKitLogos: 'images',
  Jobs: 'jobs', Communities: 'technologies',
  BlogInsight: 'blog', BlogCaseStudies: 'blog',
  TeamMembers: 'team', AffiliateJourney: 'process',
  HowItWorks: 'process', QuotationHowItWorks: 'process',
  WhyMeetWithUs: 'technologies', MeetingInformation: 'technologies',
  WhyThinkTank: 'technologies', BeforeWeMeet: 'technologies', ThinkTankSessionInfo: 'technologies',
  PartnerBenefits: 'technologies', WhitelabelHowWePartner: 'process',
};

function walk(dir, fn) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, fn);
    else fn(full);
  }
}

function esc(s) { return (s ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }

function ensureImport(c, line) {
  if (c.includes(line.trim())) return c;
  const pos = c.lastIndexOf('\nimport ');
  const end = c.indexOf('\n', pos + 1);
  return c.slice(0, end + 1) + line + '\n' + c.slice(end + 1);
}

function revert(c, name) {
  return c
    .replace(new RegExp(`type ${name}Props = Record<string, unknown>\\s*\\n\\s*\\n?`), '')
    .replace(new RegExp(`const ${name} = \\(_cms: ${name}Props = \\{\\}\\) => \\{`), `const ${name} = () => {`);
}

function findArray(c) {
  for (const n of ['points', 'items', 'benefits', 'services', 'features', 'steps', 'categories', 'cards', 'faqData', 'data']) {
    if (c.includes(`const ${n} =`) && c.includes(`${n}.map`)) return n;
  }
  const imp = c.match(/import \{ (\w+) \} from/);
  if (imp && c.includes(`${imp[1]}.map`)) return imp[1];
  return null;
}

function patchTech(c, name) {
  const arr = findArray(c);
  const eyebrow = c.match(/<SectionLabel[^>]*>([^<{]+)<\/SectionLabel>/)?.[1]?.trim() ?? '';
  c = ensureImport(c, "import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'");
  c = ensureImport(c, "import { mergeFeatureItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'");
  if (arr) {
    c = c.replace(`const ${arr} =`, `const DEFAULT_${arr.toUpperCase()} =`);
    c = c.replace(`import { ${arr} }`, `import { ${arr} as DEFAULT_${arr.toUpperCase()} }`);
  }
  const def = arr ? `DEFAULT_${arr.toUpperCase()}` : '[]';
  c = c.replace(`const ${name} = () => {`, `type ${name}Props = Partial<CmsTechnologiesSection>

const ${name} = ({ eyebrow = '${esc(eyebrow)}', title, accentTitle, description, items }: ${name}Props = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const mergedItems = mergeFeatureItems(${def}, items)
`);
  if (eyebrow) c = c.replace(`<SectionLabel>${eyebrow}</SectionLabel>`, '<SectionLabel>{header.eyebrow}</SectionLabel>');
  if (arr) c = c.replace(new RegExp(`\\b${arr}\\.map`, 'g'), 'mergedItems.map');
  return c;
}

function patchProcess(c, name) {
  const arr = findArray(c);
  c = ensureImport(c, "import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'");
  c = ensureImport(c, "import { mergeProcessSteps, mergeSectionHeader } from '@/lib/strapi/cms-section-props'");
  if (arr) c = c.replace(`const ${arr} =`, `const DEFAULT_${arr.toUpperCase()} =`);
  const def = arr ? `DEFAULT_${arr.toUpperCase()}` : '[]';
  c = c.replace(`const ${name} = () => {`, `type ${name}Props = Partial<CmsProcessSection>

const ${name} = ({ eyebrow, title, accentTitle, description, steps }: ${name}Props = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const mergedSteps = mergeProcessSteps(${def}, steps)
`);
  if (arr) c = c.replace(new RegExp(`\\b${arr}\\.map`, 'g'), 'mergedSteps.map');
  return c;
}

function patchFaq(c, name) {
  c = ensureImport(c, "import type { CmsFaqItem } from '@/lib/strapi/mappers/page-sections'");
  if (c.includes('const faqData =')) c = c.replace('const faqData =', 'const DEFAULT_FAQDATA =');
  c = c.replace(`const ${name} = () => {`, `type ${name}Props = { items?: CmsFaqItem[] | null }

const ${name} = ({ items }: ${name}Props = {}) => {
  const faqData = items?.length ? items.map((item, i) => ({ id: i + 1, question: item.question, answer: item.answer })) : DEFAULT_FAQDATA
`);
  return c;
}

const fixed = [];
const dirs = ['app/[locale]/about','app/[locale]/portfolio','app/[locale]/clients','app/[locale]/partners','app/[locale]/locations','app/[locale]/industries','app/[locale]/team','app/[locale]/meet','app/[locale]/thinktank','app/[locale]/quotation','app/[locale]/whitelabel','app/[locale]/affiliate','app/[locale]/helpsupport','app/[locale]/brandkit','app/[locale]/blog','app/[locale]/career','app/[locale]/clientportal'];

for (const d of dirs) {
  const base = path.join(root, d);
  if (!fs.existsSync(base)) continue;
  walk(base, (file) => {
    if (!file.endsWith('.tsx') || !file.includes('_components')) return;
    if (/Hero\.tsx$|Marquee|BuiltAroundBusiness|StrategyToResults/.test(file)) return;
    let c = fs.readFileSync(file, 'utf8');
    if (!c.includes('Record<string, unknown>')) return;
    const name = path.basename(file, '.tsx');
    c = revert(c, name);
    const type = TYPE_MAP[name] ?? 'technologies';
    if (type === 'process') c = patchProcess(c, name);
    else if (type === 'faq') c = patchFaq(c, name);
    else c = patchTech(c, name);
    fs.writeFileSync(file, c);
    fixed.push(path.relative(root, file));
  });
}

console.log('STUB FIXED', fixed.length);
fixed.forEach(f => console.log(' ', f));
