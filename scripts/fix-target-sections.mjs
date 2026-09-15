/**
 * Fix CMS section props — proper types from page-registry + re-patch stubs.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const CMS_TO_COMPONENT = {
  'page-rfq': 'sections.page-rfq',
  'page-technologies': 'sections.page-technologies',
  'page-projects': 'sections.page-projects',
  'page-portfolio-explorer': 'sections.page-portfolio-explorer',
  'page-images': 'sections.page-images',
  'page-partners': 'sections.page-partners',
  'page-process': 'sections.page-process',
  'page-faq': 'sections.page-faq',
  'page-blog-posts': 'sections.page-blog-posts',
  'page-career-jobs': 'sections.page-career-jobs',
  'page-team-members': 'sections.page-team-members',
  'page-office-locations': 'sections.page-office-locations',
  'page-client-logos': 'sections.page-client-logos',
  'page-package-list': 'sections.page-package-list',
  'hero-about': 'sections.hero-about',
  'image-gallery': 'sections.image-gallery',
  'page-rfq-accordion': 'sections.page-rfq-accordion',
  'package-offer': 'sections.package-offer',
  'page-events': 'sections.page-events',
};

function sectionKeyToFieldName(sectionKey) {
  return sectionKey.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

function fieldToComp(field) {
  return field.charAt(0).toUpperCase() + field.slice(1);
}

/** @type {Map<string, string>} */
function buildComponentTypeMap() {
  const map = new Map();
  const registry = fs.readFileSync(path.join(root, 'lib/strapi/page-registry.ts'), 'utf8');

  // FIELD_OVERRIDES
  for (const m of registry.matchAll(/\{\s*name: '([^']+)',\s*component: '([^']+)'/g)) {
    map.set(fieldToComp(m[1]), m[2]);
  }

  // HEADER_PAGE_SECTION_REGISTRY sections
  const sectionBlocks = registry.matchAll(
    /sections:\s*\[([\s\S]*?)\]\s*,?\s*\}/g,
  );
  for (const block of sectionBlocks) {
    for (const s of block[1].matchAll(/\{\s*sectionKey: '([^']+)',\s*cms: '([^']+)'/g)) {
      const cms = s[2];
      if (!cms || cms === 'hero' || cms === 'null') continue;
      const comp = CMS_TO_COMPONENT[cms];
      if (!comp) continue;
      map.set(fieldToComp(sectionKeyToFieldName(s[1])), comp);
    }
    for (const s of block[1].matchAll(/\{\s*sectionKey: `([^`]+)`,\s*cms: '([^']+)'/g)) {
      const cms = s[2];
      if (!cms || cms === 'hero') continue;
      const comp = CMS_TO_COMPONENT[cms];
      if (comp) map.set(fieldToComp(sectionKeyToFieldName(s[1].replace(/\$\{slug\}/g, 'placeholder'))), comp);
    }
  }

  // Manual overrides for frontend component names != section keys
  const manual = {
    HowWePartner: 'sections.page-process',
    WhyPartnerWithWow: 'sections.page-technologies',
    PartnerNetwork: 'sections.page-partners',
    FeaturedWork: 'sections.page-projects',
    ExploreWork: 'sections.page-projects',
    HowWeCreateImpact: 'sections.page-process',
    ExpertiseBehindWork: 'sections.page-technologies',
    ClientStories: 'sections.page-projects',
    IndustriesJourney: 'sections.page-technologies',
    OurIndustries: 'sections.page-technologies',
    IndustriesProcess: 'sections.page-process',
    ChallengeSolution: 'sections.page-technologies',
    WhatMattersMost: 'sections.page-technologies',
    ProfessionalServiceSolutions: 'sections.page-technologies',
    ClientJourney: 'sections.page-process',
    ConnectedExpertise: 'sections.page-technologies',
    RecommendedSolutions: 'sections.page-technologies',
    ExperiencePillars: 'sections.page-technologies',
    MissionSolutions: 'sections.page-technologies',
    GuestSolutions: 'sections.page-technologies',
    GuestJourney: 'sections.page-process',
    CareSolutions: 'sections.page-technologies',
    CareJourney: 'sections.page-process',
    CommerceSolutions: 'sections.page-technologies',
    CommerceJourneyPath: 'sections.page-process',
    SocialGallery: 'sections.image-gallery',
    StartupSolutions: 'sections.page-technologies',
    StartupJourney: 'sections.page-process',
    FromIdeaToGrowth: 'sections.page-technologies',
    MissionJourney: 'sections.page-process',
    ImpactJourney: 'sections.page-process',
    OurPortfolio: 'sections.page-projects',
    LeadToCustomer: 'sections.page-process',
    HowItWorks: 'sections.page-process',
    TheGap: 'sections.hero-about',
    StrategicExpertise: 'sections.page-technologies',
    BuiltAroundYourBusiness: 'sections.page-process',
    WowGrowthFramework: 'sections.page-process',
    HowWeBuildStrategy: 'sections.page-process',
    StrategyPlaybooks: 'sections.page-technologies',
    StrategyInAction: 'sections.page-projects',
    WaysToPartner: 'sections.page-technologies',
    SmbGallery: 'sections.page-images',
    BrandKitLogos: 'sections.page-images',
    GallaryImages: 'sections.page-images',
    Jobs: 'sections.page-career-jobs',
    CareerRfq: 'sections.page-faq',
    BlogInsight: 'sections.page-blog-posts',
    BlogCaseStudies: 'sections.page-blog-posts',
    LocationsPresence: 'sections.page-office-locations',
    LocationsHeroAbout: 'sections.hero-about',
    AffiliateBenefits: 'sections.page-technologies',
    HowWePartnerWhitelabel: 'sections.page-process',
    QuotationForm: 'sections.page-rfq',
    RecentWorkExplorer: 'sections.page-portfolio-explorer',
    SupportCategories: 'sections.page-technologies',
    RetailGrowthPillars: 'sections.page-technologies',
    DevisionOverview: 'sections.page-technologies',
    CareDevisionOverview: 'sections.page-technologies',
    CareGallery: 'sections.page-images',
    CarePackages: 'sections.page-package-list',
    StartupPackages: 'sections.page-package-list',
    TechnologyHeroAbout: 'sections.hero-about',
    FinanceHeroAbout: 'sections.hero-about',
    HealthcareHeroAbout: 'sections.hero-about',
    HospitalityHeroAbout: 'sections.hero-about',
    EducationHeroAbout: 'sections.hero-about',
    OrganizationsHeroAbout: 'sections.hero-about',
    RetailHeroAbout: 'sections.hero-about',
  };
  for (const [k, v] of Object.entries(manual)) map.set(k, v);

  return map;
}

function esc(s) {
  return (s ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function ensureImport(content, line) {
  if (content.includes(line.trim())) return content;
  const importEnd = content.lastIndexOf('\nimport ');
  if (importEnd === -1) return line + '\n' + content;
  let pos = importEnd;
  while (true) {
    const next = content.indexOf('\nimport ', pos + 1);
    if (next === -1) break;
    pos = next;
  }
  const end = content.indexOf('\n', pos + 1);
  return content.slice(0, end + 1) + line + '\n' + content.slice(end + 1);
}

function revertStub(content, compName) {
  return content
    .replace(new RegExp(`type ${compName}Props = Record<string, unknown>\\s*\\n\\s*\\n`), '')
    .replace(
      new RegExp(`const ${compName} = \\(_cms: ${compName}Props = \\{\\}\\) => \\{`),
      `const ${compName} = () => {`,
    );
}

function extractSectionLabel(content) {
  return content.match(/<SectionLabel[^>]*>([^<{]+)<\/SectionLabel>/)?.[1]?.trim() ?? '';
}

function extractInstrumentH2(content) {
  const m = content.match(/<h2[^>]*>([\s\S]*?)<InstrumentText>([^<]+)<\/InstrumentText>/);
  if (!m) return null;
  return { title: m[1].replace(/<[^>]+>/g, '').trim(), accentTitle: m[2].trim() };
}

function extractPlainH2(content) {
  return content.match(/<h2[^>]*>([^<{]+)<\/h2>/)?.[1]?.trim() ?? '';
}

function findArray(content) {
  for (const name of ['faqData', 'processSteps', 'partnershipTypes', 'partnerBenefits', 'data', 'logoCards']) {
    if (content.includes(`const ${name} =`) && content.includes(`${name}.map`)) return name;
  }
  const m = content.match(/const (\w+) = \[[\s\S]*?\]\s*\n/);
  if (m && content.includes(`${m[1]}.map`)) return m[1];
  const imp = content.match(/import \{ (\w+) \} from/);
  if (imp && content.includes(`${imp[1]}.map`)) return imp[1];
  return null;
}

function patchTechnologies(content, compName) {
  const arrayName = findArray(content);
  const eyebrow = extractSectionLabel(content);
  const instr = extractInstrumentH2(content);
  const plain = extractPlainH2(content);
  const title = instr?.title ?? plain;
  const accentTitle = instr?.accentTitle ?? '';
  const img = content.match(/src="(\/images[^"]+)"/)?.[1];

  content = ensureImport(content, "import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'");
  content = ensureImport(content, `import { mergeFeatureItems${img ? ', cmsImageSrc' : ''}, mergeSectionHeader } from '@/lib/strapi/cms-section-props'`);

  if (arrayName && !content.includes(`DEFAULT_${arrayName.toUpperCase()}`)) {
    content = content.replace(`const ${arrayName} =`, `const DEFAULT_${arrayName.toUpperCase()} =`);
    content = content.replace(`import { ${arrayName} }`, `import { ${arrayName} as DEFAULT_${arrayName.toUpperCase()} }`);
  }

  const def = arrayName ? `DEFAULT_${arrayName.toUpperCase()}` : null;
  const sig = `type ${compName}Props = Partial<CmsTechnologiesSection>

const ${compName} = ({
  eyebrow = '${esc(eyebrow)}',
  title = '${esc(title)}',
  accentTitle = '${esc(accentTitle)}',
  description,
  items${img ? ',\n  image' : ''},
}: ${compName}Props = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const mergedItems = ${def ? `mergeFeatureItems(${def}, items)` : '(items ?? [])'}${img ? `\n  const imageSrc = cmsImageSrc(image, '${esc(img)}')` : ''}
`;
  content = content.replace(`const ${compName} = () => {`, sig);
  content = content.replace(/<SectionLabel([^>]*)>[^<{]+<\/SectionLabel>/, '<SectionLabel$1>{header.eyebrow}</SectionLabel>');
  if (instr) {
    content = content.replace(/<h2([^>]*)>[\s\S]*?<InstrumentText>[^<]+<\/InstrumentText>[\s\S]*?<\/h2>/, '<h2$1>{header.title}<InstrumentText>{header.accentTitle}</InstrumentText></h2>');
  } else if (plain) {
    content = content.replace(/<h2([^>]*)>[^<{][^<]*<\/h2>/, '<h2$1>{header.title}</h2>');
  }
  if (def) content = content.replace(new RegExp(`\\b${arrayName}\\.map`, 'g'), 'mergedItems.map');
  if (img) content = content.replace(`src="${img}"`, 'src={imageSrc ?? \'\'}');
  return content;
}

function patchProcess(content, compName) {
  const arrayName = findArray(content) ?? (content.includes('processSteps') ? 'processSteps' : null);
  const eyebrow = extractSectionLabel(content);
  const instr = extractInstrumentH2(content);
  const plain = extractPlainH2(content);
  const heading = content.match(/before="([^"]*)"[\s\S]*?accent="([^"]*)"/);

  content = ensureImport(content, "import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'");
  content = ensureImport(content, "import { mergeProcessSteps, mergeSectionHeader } from '@/lib/strapi/cms-section-props'");

  if (arrayName && !content.includes(`DEFAULT_${arrayName.toUpperCase()}`)) {
    content = content.replace(`const ${arrayName} =`, `const DEFAULT_${arrayName.toUpperCase()} =`);
  }
  const def = arrayName ? `DEFAULT_${arrayName.toUpperCase()}` : '[]';
  const title = heading?.[1] ?? instr?.title ?? plain;
  const accentTitle = heading?.[2] ?? instr?.accentTitle ?? '';

  const sig = `type ${compName}Props = Partial<CmsProcessSection>

const ${compName} = ({
  eyebrow = '${esc(eyebrow)}',
  title = '${esc(title)}',
  accentTitle = '${esc(accentTitle)}',
  description,
  steps,
}: ${compName}Props = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const mergedSteps = mergeProcessSteps(${def}, steps)
`;
  content = content.replace(`const ${compName} = () => {`, sig);
  content = content.replace(/<SectionLabel([^>]*)>[^<{]+<\/SectionLabel>/, '<SectionLabel$1>{header.eyebrow}</SectionLabel>');
  if (heading) {
    content = content.replace(/before="[^"]*"/, 'before={header.title}');
    content = content.replace(/accent="[^"]*"/, 'accent={header.accentTitle ?? \'\'}');
  }
  if (arrayName) content = content.replace(new RegExp(`\\b${arrayName}\\.map`, 'g'), 'mergedSteps.map');
  return content;
}

function patchHeroAbout(content, compName) {
  const body = content.match(/<h3[^>]*>([^<{][^<]{15,})<\/h3>/s)?.[1]?.trim().replace(/\s+/g, ' ') ?? '';
  content = ensureImport(content, "import type { CmsHeroAboutSection } from '@/lib/strapi/mappers/page-sections'");
  const sig = `type ${compName}Props = Partial<CmsHeroAboutSection>

const ${compName} = ({ body = '${esc(body)}' }: ${compName}Props = {}) => {
`;
  content = content.replace(`const ${compName} = () => {`, sig);
  content = content.replace(/<h3([^>]*)>[^<{][^<]{15,}<\/h3>/s, '<h3$1>{body}</h3>');
  return content;
}

function patchProjects(content, compName) {
  const arrayName = content.includes('featuredProjects') ? 'featuredProjects' : findArray(content);
  content = ensureImport(content, "import type { CmsProjectCard } from '@/lib/strapi/mappers/page-sections'");
  if (arrayName) {
    content = content.replace(`import { ${arrayName}`, `import { ${arrayName} as DEFAULT_${arrayName.toUpperCase()}`);
    content = content.replace(`const ${arrayName}`, `const DEFAULT_${arrayName.toUpperCase()}`);
  }
  const def = arrayName ? `DEFAULT_${arrayName.toUpperCase()}` : '[]';
  const sig = `type ${compName}Props = { projects?: CmsProjectCard[] | null }

const ${compName} = ({ projects }: ${compName}Props = {}) => {
  const displayProjects = projects?.length
    ? projects.map((p, i) => ({
        slug: p.href?.split('/').pop() ?? String(i),
        title: p.title,
        description: p.description ?? '',
        image: p.thumbnail ?? '',
        alt: p.alt ?? p.title,
        client: '',
        industry: '',
        serviceTags: [] as string[],
        tagline: p.description ?? '',
      }))
    : ${def}
`;
  content = content.replace(`const ${compName} = () => {`, sig);
  if (arrayName) content = content.replace(new RegExp(`\\b${arrayName}\\.map`, 'g'), 'displayProjects.map');
  return content;
}

function patchFaq(content, compName) {
  content = ensureImport(content, "import type { CmsFaqItem } from '@/lib/strapi/mappers/page-sections'");
  if (!content.includes('DEFAULT_FAQDATA')) content = content.replace('const faqData =', 'const DEFAULT_FAQDATA =');
  const sig = `type ${compName}Props = { items?: CmsFaqItem[] | null }

const ${compName} = ({ items }: ${compName}Props = {}) => {
  const faqData = items?.length
    ? items.map((item, index) => ({ id: index + 1, question: item.question, answer: item.answer }))
    : DEFAULT_FAQDATA
`;
  content = content.replace(`const ${compName} = () => {`, sig);
  return content;
}

function patchGallery(content, compName, fullSection) {
  if (fullSection) {
    content = ensureImport(content, "import type { CmsImageGallerySection } from '@/lib/strapi/mappers/page-sections'");
    content = ensureImport(content, "import { mergeGalleryItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'");
    if (!content.includes('DEFAULT_DATA')) content = content.replace('const data =', 'const DEFAULT_DATA =');
    const sig = `type ${compName}Props = Partial<CmsImageGallerySection>

const ${compName} = ({ images, ...headerCms }: ${compName}Props = {}) => {
  const galleryItems = mergeGalleryItems(DEFAULT_DATA, images)
`;
    content = content.replace(`const ${compName} = () => {`, sig);
    content = content.replace(/\bdata\b/g, 'galleryItems');
  } else {
    content = ensureImport(content, "import type { CmsGalleryImage } from '@/lib/strapi/mappers/page-sections'");
    content = ensureImport(content, "import { mergeGalleryItems } from '@/lib/strapi/cms-section-props'");
    if (!content.includes('DEFAULT_DATA')) content = content.replace('const data =', 'const DEFAULT_DATA =');
    const sig = `type ${compName}Props = { images?: CmsGalleryImage[] | null }

const ${compName} = ({ images }: ${compName}Props = {}) => {
  const galleryItems = mergeGalleryItems(DEFAULT_DATA, images)
`;
    content = content.replace(`const ${compName} = () => {`, sig);
    content = content.replace(/\bdata\b/g, 'galleryItems');
  }
  return content;
}

function patchOfficeLocations(content, compName) {
  content = ensureImport(content, "import type { CmsGalleryImage } from '@/lib/strapi/mappers/page-sections'");
  const sig = `type ${compName}Props = {
  locations?: Array<{ city?: string | null; country?: string | null; address?: string | null }> | null
}

const ${compName} = ({ locations }: ${compName}Props = {}) => {
  const displayLocations = locations?.length
    ? locations.map((loc) => ({
        city: loc.city ?? '',
        region: loc.country ?? '',
        description: '',
        addressLines: loc.address ? [loc.address] : [],
        mapQuery: [loc.address, loc.city, loc.country].filter(Boolean).join(', '),
        meta: '',
        phone: '',
        phoneHref: '#',
        ctaLabel: 'Open in Maps',
      }))
    : officeLocations
`;
  content = content.replace(`const ${compName} = () => {`, sig);
  content = content.replace('officeLocations[0]', 'displayLocations[0]');
  return content;
}

function patchFile(filePath, compName, cmsType) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(`Partial<CmsTechnologiesSection>`) && !content.includes('Record<string, unknown>')) return false;

  content = revertStub(content, compName);
  if (!content.includes(`const ${compName} = () => {`) && !content.includes(`const ${compName} = (_cms`)) return false;
  if (content.includes(`const ${compName} = (_cms`)) {
    content = revertStub(content, compName);
  }

  switch (cmsType) {
    case 'sections.page-technologies':
      content = patchTechnologies(content, compName);
      break;
    case 'sections.page-process':
      content = patchProcess(content, compName);
      break;
    case 'sections.hero-about':
      content = patchHeroAbout(content, compName);
      break;
    case 'sections.page-projects':
      content = patchProjects(content, compName);
      break;
    case 'sections.page-faq':
      content = patchFaq(content, compName);
      break;
    case 'sections.image-gallery':
      content = patchGallery(content, compName, true);
      break;
    case 'sections.page-images':
      content = patchGallery(content, compName, false);
      break;
    case 'sections.page-office-locations':
      content = patchOfficeLocations(content, compName);
      break;
    default:
      return false;
  }

  fs.writeFileSync(filePath, content);
  return true;
}

function findFile(compName) {
  const dirs = [
    'app/[locale]/about', 'app/[locale]/portfolio', 'app/[locale]/clients',
    'app/[locale]/partners', 'app/[locale]/locations', 'app/[locale]/industries',
    'app/[locale]/team', 'app/[locale]/meet', 'app/[locale]/thinktank',
    'app/[locale]/quotation', 'app/[locale]/whitelabel', 'app/[locale]/affiliate',
    'app/[locale]/helpsupport', 'app/[locale]/brandkit', 'app/[locale]/blog',
    'app/[locale]/career', 'app/[locale]/clientportal',
  ];
  for (const d of dirs) {
    const base = path.join(root, d);
    if (!fs.existsSync(base)) continue;
    const stack = [base];
    while (stack.length) {
      const dir = stack.pop();
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) stack.push(full);
        else if (e.name === `${compName}.tsx`) return full;
      }
    }
  }
  return null;
}

const map = buildComponentTypeMap();
const targets = [...map.keys()];
const fixed = [];

for (const comp of targets) {
  const file = findFile(comp);
  if (!file || /Hero\.tsx$/.test(file)) continue;
  if (['BuiltAroundBusiness', 'StrategyToResults'].includes(comp)) continue;
  try {
    if (patchFile(file, comp, map.get(comp))) fixed.push(path.relative(root, file));
  } catch (e) {
    console.error('FAIL', comp, e.message);
  }
}

// Fix TechStack broken import
const techStack = path.join(root, 'app/[locale]/about/_components/TechStack.tsx');
let ts = fs.readFileSync(techStack, 'utf8');
if (ts.includes('import {\nimport type')) {
  ts = `'use client'

import { useState, useId } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { WOW_GRADIENT } from '@/components/wow/shared/WowText'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeSectionHeader } from '@/lib/strapi/cms-section-props'
import {
  techCategories,
  TechCard,
} from '@/components/wow/shared/TechStackShared'

type TechStackProps = Partial<CmsTechnologiesSection>

const TechStack = ({
  eyebrow = 'Our Stack',
  title = 'Powered by industry-leading',
  accentTitle = 'technology',
  description = 'We choose proven, modern tools to ship secure, scalable, and high-performance solutions — engineered for businesses that expect world-class digital experiences.',
}: TechStackProps = {}) => {
  const header = mergeSectionHeader(
    { eyebrow, title, accentTitle, description },
    { eyebrow, title, accentTitle, description },
  )
` + ts.split('const TechStack = ({')[1].split('const [activeId')[1];
  ts = ts.replace('const mergedItems = items ?? []', '');
  ts = ts.replace('<SectionLabel className="mb-6">Our Stack</SectionLabel>', '<SectionLabel className="mb-6">{header.eyebrow}</SectionLabel>');
  ts = ts.replace(/Powered by industry-leading[\s\S]*?technology/, '{header.title}{\' \'}<span className="font-instrument italic" style={{ background: WOW_GRADIENT, WebkitBackgroundClip: \'text\', backgroundClip: \'text\', WebkitTextFillColor: \'transparent\', color: \'transparent\' }}>{header.accentTitle}</span>');
  fs.writeFileSync(techStack, ts);
  fixed.push('app/[locale]/about/_components/TechStack.tsx (manual)');
}

console.log('FIXED', fixed.length);
fixed.forEach((f) => console.log(' ', f));
