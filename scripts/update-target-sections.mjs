/**
 * Wire CMS section props into target page section components.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const TARGET_PREFIXES = [
  'app/[locale]/about',
  'app/[locale]/portfolio',
  'app/[locale]/clients',
  'app/[locale]/partners',
  'app/[locale]/locations',
  'app/[locale]/industries',
  'app/[locale]/team',
  'app/[locale]/meet',
  'app/[locale]/thinktank',
  'app/[locale]/quotation',
  'app/[locale]/whitelabel',
  'app/[locale]/affiliate',
  'app/[locale]/helpsupport',
  'app/[locale]/brandkit',
  'app/[locale]/blog',
  'app/[locale]/career',
  'app/[locale]/clientportal',
];

const SKIP_FILES = new Set([
  'BuiltAroundBusiness.tsx',
  'StrategyToResults.tsx',
]);

const SKIP_PATTERNS = [
  /Hero\.tsx$/,
  /WowGrowthCta/,
  /SkewMarquee/,
  /Marquee\.tsx$/,
  /CalCom/,
  /BookingWizard/,
  /AnimatedHeroImage/,
  /HeroHoverImages/,
  /meetSectionSpacing/,
  /BlogDetails/,
  /BlogShare/,
  /CareerDetails/,
  /CareerShare/,
  /CareerRelated/,
  /MoreFromPortfolio/,
  /LatestProjects/,
];

/** @type {Map<string, string>} componentName -> cms component type */
const componentTypeMap = new Map();

function compToField(name) {
  return name.charAt(0).toLowerCase() + name.slice(1);
}

function loadManifestMap() {
  const registryPath = path.join(root, 'lib/strapi/page-registry.ts');
  const content = fs.readFileSync(registryPath, 'utf8');
  const manifests = content.matchAll(
    /slug: '([^']+)'[\s\S]*?fields: \[([\s\S]*?)\]\s*,?\s*\}\)/g,
  );

  for (const [, slug, fieldsBlock] of manifests) {
    const fields = [...fieldsBlock.matchAll(/\{\s*name: '([^']+)',\s*component: '([^']+)'/g)];
    for (const [, fieldName, component] of fields) {
      const compName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
      componentTypeMap.set(compName, component);
    }
  }

  // Parse FIELD_OVERRIDES entries too
  const overrides = content.matchAll(
    /\{\s*name: '([^']+)',\s*component: '([^']+)'/g,
  );
  for (const [, fieldName, component] of overrides) {
    const compName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
    componentTypeMap.set(compName, component);
  }
}

function scanPagesForWiredComponents() {
  /** @type {Map<string, string>} */
  const wired = new Map();

  for (const prefix of TARGET_PREFIXES) {
    const dir = path.join(root, prefix);
    if (!fs.existsSync(dir)) continue;
    walk(dir, (file) => {
      if (!file.endsWith('page.tsx')) return;
      const content = fs.readFileSync(file, 'utf8');
      const imports = [...content.matchAll(/import (\w+) from '\.\/_components\/(\w+)'/g)];
      for (const [, compName] of imports) {
        const field = compToField(compName);
        if (content.includes(`sections.${field}`)) {
          wired.set(compName, field);
        }
      }
      // nested _components imports in subdirs
      const nested = [...content.matchAll(/import (\w+) from '\.\/_components\/(\w+)'/g)];
      for (const [, compName] of nested) {
        const field = compToField(compName);
        if (content.includes(`sections.${field}`)) {
          wired.set(compName, field);
        }
      }
    });
  }

  return wired;
}

function walk(dir, fn) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, fn);
    else fn(full);
  }
}

function shouldSkip(filePath) {
  const base = path.basename(filePath);
  if (SKIP_FILES.has(base)) return true;
  return SKIP_PATTERNS.some((re) => re.test(base) || re.test(filePath));
}

function ensureImport(content, line) {
  if (content.includes(line.trim())) return content;
  const lastImport = content.lastIndexOf('\nimport ');
  if (lastImport === -1) return `${line}\n${content}`;
  const end = content.indexOf('\n', lastImport + 1);
  return content.slice(0, end + 1) + line + '\n' + content.slice(end + 1);
}

function getComponentName(content) {
  const m = content.match(/const (\w+) = \(\{/);
  if (m) return m[1];
  const m2 = content.match(/const (\w+) = \(\) =>/);
  return m2?.[1] ?? null;
}

function extractSectionLabel(content) {
  const m = content.match(/<SectionLabel[^>]*>([^<{]+)<\/SectionLabel>/);
  return m?.[1]?.trim() ?? null;
}

function extractPlainH2(content) {
  const m = content.match(/<h2[^>]*>([^<{]+)<\/h2>/);
  return m?.[1]?.trim() ?? null;
}

function extractInstrumentH2(content) {
  const m = content.match(
    /<h2[^>]*>([\s\S]*?)<InstrumentText>([^<]+)<\/InstrumentText>([\s\S]*?)<\/h2>/,
  );
  if (!m) return null;
  const before = m[1].replace(/<[^>]+>/g, '').trim();
  const accent = m[2].trim();
  return { title: before, accentTitle: accent };
}

function extractHeadingWithInstrument(content) {
  const m = content.match(
    /HeadingWithInstrument[\s\S]*?before="([^"]*)"[\s\S]*?accent="([^"]*)"/,
  );
  if (!m) return null;
  return { title: m[1], accentTitle: m[2] };
}

function findMainArray(content) {
  // const name = [
  const constMatch = content.match(/const (\w+) = \[\s*\{[\s\S]*?title:/);
  if (constMatch) return constMatch[1];

  // import { name } from
  const importMatch = content.match(/import \{ (\w+) \} from ['"][^'"]+['"]/);
  if (importMatch && content.includes(`${importMatch[1]}.map`)) return importMatch[1];

  // const data: Type[] = [
  const typedMatch = content.match(/const (\w+): [\s\S]*?=\ \[/);
  if (typedMatch && content.includes(`${typedMatch[1]}.map`)) return typedMatch[1];

  return null;
}

function findMainImageSrc(content) {
  const m = content.match(/src="(\/images[^"]+)"/);
  return m?.[1] ?? null;
}

function findHeroAboutBody(content) {
  const m = content.match(/<h3[^>]*>([^<{][^<]{20,})<\/h3>/s);
  return m?.[1]?.trim().replace(/\s+/g, ' ') ?? null;
}

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function patchFile(filePath, compName, cmsType) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('Partial<CmsTechnologiesSection>') ||
      content.includes('Partial<CmsProcessSection>') ||
      content.includes('Partial<CmsHeroAboutSection>') ||
      content.includes('Partial<CmsImageGallerySection>') ||
      content.includes('CmsProjectCard[]') ||
      content.includes('CmsFaqItem[]') ||
      content.includes('CmsTeamMember[]')) {
    return null;
  }

  const name = getComponentName(content);
  if (!name || name !== compName) return null;
  if (!content.includes(`${name} = () =>`)) return null;

  const arrayName = findMainArray(content);

  if (cmsType === 'sections.page-technologies') {
    content = ensureImport(content, "import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'");
    const hasImage = Boolean(findMainImageSrc(content));
    content = ensureImport(
      content,
      `import { mergeFeatureItems${hasImage ? ', cmsImageSrc' : ''}, mergeSectionHeader } from '@/lib/strapi/cms-section-props'`,
    );

    const eyebrow = extractSectionLabel(content) ?? '';
    const instr = extractInstrumentH2(content);
    const plainH2 = extractPlainH2(content);
    const title = instr?.title ?? plainH2?.split(/\s+/).slice(0, -1).join(' ') ?? plainH2 ?? '';
    const accentTitle = instr?.accentTitle ?? '';

    if (arrayName && !content.includes(`DEFAULT_${arrayName.toUpperCase()}`)) {
      content = content.replace(
        new RegExp(`const ${arrayName} =`),
        `const DEFAULT_${arrayName.toUpperCase()} =`,
      );
      content = content.replace(
        new RegExp(`import \\{ ${arrayName} \\}`),
        `import { ${arrayName} as DEFAULT_${arrayName.toUpperCase()} }`,
      );
    }

    const defaultArray = arrayName ? `DEFAULT_${arrayName.toUpperCase()}` : null;
    const imageSrc = findMainImageSrc(content);

    let propsBlock = `type ${name}Props = Partial<CmsTechnologiesSection>

const ${name} = ({
  eyebrow = '${esc(eyebrow)}',
  title = '${esc(title)}',
  accentTitle = '${esc(accentTitle)}',
  description,
  items${hasImage ? ',\n  image' : ''},
}: ${name}Props = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const mergedItems = ${defaultArray ? `mergeFeatureItems(${defaultArray}, items)` : 'items ?? []'}${hasImage && imageSrc ? `\n  const imageSrc = cmsImageSrc(image, '${esc(imageSrc)}')` : ''}
`;

    content = content.replace(`const ${name} = () => {`, propsBlock);

    content = content.replace(/<SectionLabel([^>]*)>[^<{]+<\/SectionLabel>/, '<SectionLabel$1>{header.eyebrow}</SectionLabel>');

    if (instr) {
      content = content.replace(
        /<h2([^>]*)>[\s\S]*?<InstrumentText>[^<]+<\/InstrumentText>[\s\S]*?<\/h2>/,
        '<h2$1>{header.title}<InstrumentText>{header.accentTitle}</InstrumentText></h2>',
      );
    } else if (plainH2) {
      content = content.replace(/<h2([^>]*)>[^<{][^<]*<\/h2>/, '<h2$1>{header.title}{header.accentTitle ? <> <InstrumentText>{header.accentTitle}</InstrumentText></> : null}</h2>');
    }

    if (defaultArray) {
      content = content.replace(new RegExp(`\\b${arrayName}\\.map`, 'g'), 'mergedItems.map');
      content = content.replace(new RegExp(`\\b${arrayName}\\?`, 'g'), 'mergedItems?');
      content = content.replace(new RegExp(`\\b${arrayName}\\.length`, 'g'), 'mergedItems.length');
      content = content.replace(new RegExp(`\\b${arrayName}\\[`, 'g'), 'mergedItems[');
    }

    if (hasImage && imageSrc) {
      content = content.replace(`src="${imageSrc}"`, 'src={imageSrc ?? \'\'}');
    }

    fs.writeFileSync(filePath, content);
    return cmsType;
  }

  if (cmsType === 'sections.page-process') {
    content = ensureImport(content, "import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'");
    content = ensureImport(content, "import { mergeProcessSteps, mergeSectionHeader, cmsImageSrc } from '@/lib/strapi/cms-section-props'");

    const eyebrow = extractSectionLabel(content) ?? '';
    const instr = extractInstrumentH2(content) ?? extractHeadingWithInstrument(content);
    const plainH2 = extractPlainH2(content);
    const title = instr?.title ?? plainH2 ?? '';
    const accentTitle = instr?.accentTitle ?? '';
    const hasImage = Boolean(findMainImageSrc(content));
    const imageSrc = findMainImageSrc(content);

    if (arrayName) {
      content = content.replace(new RegExp(`const ${arrayName} =`), `const DEFAULT_${arrayName.toUpperCase()} =`);
      content = content.replace(
        new RegExp(`import \\{ ${arrayName} \\}`),
        `import { ${arrayName} as DEFAULT_${arrayName.toUpperCase()} }`,
      );
    }

    const defaultArray = arrayName ? `DEFAULT_${arrayName.toUpperCase()}` : '[]';

    let propsBlock = `type ${name}Props = Partial<CmsProcessSection>

const ${name} = ({
  eyebrow = '${esc(eyebrow)}',
  title = '${esc(title)}',
  accentTitle = '${esc(accentTitle)}',
  description,
  steps,
  image,
}: ${name}Props = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const mergedSteps = mergeProcessSteps(${defaultArray}, steps)${hasImage && imageSrc ? `\n  const imageSrc = cmsImageSrc(image, '${esc(imageSrc)}')` : ''}
`;

    content = content.replace(`const ${name} = () => {`, propsBlock);

    content = content.replace(/<SectionLabel([^>]*)>[^<{]+<\/SectionLabel>/, '<SectionLabel$1>{header.eyebrow}</SectionLabel>');

    if (content.includes('HeadingWithInstrument')) {
      content = content.replace(
        /HeadingWithInstrument[\s\S]*?before="[^"]*"[\s\S]*?accent="[^"]*"/,
        'HeadingWithInstrument\n            className="mb-3 text-center"\n            before={header.title}\n            accent={header.accentTitle ?? \'\'}',
      );
    } else if (instr) {
      content = content.replace(
        /<h2([^>]*)>[\s\S]*?<InstrumentText>[^<]+<\/InstrumentText>[\s\S]*?<\/h2>/,
        '<h2$1>{header.title}<InstrumentText>{header.accentTitle}</InstrumentText></h2>',
      );
    } else if (plainH2) {
      content = content.replace(/<h2([^>]*)>[^<{][^<]*<\/h2>/, '<h2$1>{header.title}</h2>');
    }

    if (arrayName) {
      content = content.replace(new RegExp(`\\b${arrayName}\\.map`, 'g'), 'mergedSteps.map');
      content = content.replace(new RegExp(`\\b${arrayName}\\.length`, 'g'), 'mergedSteps.length');
    }

    if (hasImage && imageSrc) {
      content = content.replace(`src="${imageSrc}"`, 'src={imageSrc ?? \'\'}');
    }

    fs.writeFileSync(filePath, content);
    return cmsType;
  }

  if (cmsType === 'sections.hero-about') {
    content = ensureImport(content, "import type { CmsHeroAboutSection } from '@/lib/strapi/mappers/page-sections'");
    content = ensureImport(content, "import { cmsImageSrc } from '@/lib/strapi/cms-section-props'");

    const body = findHeroAboutBody(content) ?? '';
    const hasImage = Boolean(findMainImageSrc(content));
    const imageSrc = findMainImageSrc(content);

    let propsBlock = `type ${name}Props = Partial<CmsHeroAboutSection>

const ${name} = ({
  body = '${esc(body)}'${hasImage ? ',\n  image' : ''},
}: ${name}Props = {}) => {${hasImage && imageSrc ? `\n  const imageSrc = cmsImageSrc(image, '${esc(imageSrc)}')` : ''}
`;

    content = content.replace(`const ${name} = () => {`, propsBlock);

    if (body) {
      content = content.replace(body.slice(0, 40), '{body'.slice(0, 1) === '{' ? '' : '');
      // Replace h3 text content
      content = content.replace(
        /<h3([^>]*)>([^<{][^<]{20,})<\/h3>/s,
        '<h3$1>{body}</h3>',
      );
    }

    if (hasImage && imageSrc) {
      content = content.replace(`src="${imageSrc}"`, 'src={imageSrc ?? \'\'}');
    }

    fs.writeFileSync(filePath, content);
    return cmsType;
  }

  if (cmsType === 'sections.page-projects') {
    content = ensureImport(content, "import type { CmsProjectCard } from '@/lib/strapi/mappers/page-sections'");

    if (arrayName) {
      content = content.replace(new RegExp(`const ${arrayName} =`), `const DEFAULT_${arrayName.toUpperCase()} =`);
      content = content.replace(
        /import \{ ([^}]+) \} from '\.\.\/_data\/projects'/,
        (match, imports) => {
          const parts = imports.split(',').map((s) => s.trim());
          const replaced = parts.map((p) =>
            p === arrayName ? `${p} as DEFAULT_${arrayName.toUpperCase()}` : p,
          );
          return `import { ${replaced.join(', ')} } from '../_data/projects'`;
        },
      );
    }

    const defaultArray = arrayName ? `DEFAULT_${arrayName.toUpperCase()}` : '[]';

    let propsBlock = `type ${name}Props = {
  projects?: CmsProjectCard[] | null
}

const ${name} = ({ projects }: ${name}Props = {}) => {
  const displayProjects = projects?.length
    ? projects.map((project, index) => ({
        slug: project.href?.split('/').pop() ?? String(index),
        title: project.title,
        description: project.description ?? '',
        image: project.thumbnail ?? '',
        alt: project.alt ?? project.title,
        client: '',
        industry: '',
        serviceTags: [] as string[],
        tagline: project.description ?? '',
      }))
    : ${defaultArray}
`;

    content = content.replace(`const ${name} = () => {`, propsBlock);

    if (arrayName) {
      content = content.replace(new RegExp(`\\b${arrayName}\\.map`, 'g'), 'displayProjects.map');
      content = content.replace(new RegExp(`\\b${arrayName}\\.length`, 'g'), 'displayProjects.length');
      content = content.replace(new RegExp(`\\b${arrayName}\\?`, 'g'), 'displayProjects?');
    }

    fs.writeFileSync(filePath, content);
    return cmsType;
  }

  if (cmsType === 'sections.page-faq') {
    content = ensureImport(content, "import type { CmsFaqItem } from '@/lib/strapi/mappers/page-sections'");

    if (arrayName) {
      content = content.replace(new RegExp(`const ${arrayName} =`), `const DEFAULT_${arrayName.toUpperCase()} =`);
    }

    const defaultArray = arrayName ? `DEFAULT_${arrayName.toUpperCase()}` : '[]';

    let propsBlock = `type ${name}Props = {
  items?: CmsFaqItem[] | null
}

const ${name} = ({ items }: ${name}Props = {}) => {
  const faqData = items?.length
    ? items.map((item, index) => ({ id: index + 1, question: item.question, answer: item.answer }))
    : ${defaultArray}
`;

    content = content.replace(`const ${name} = () => {`, propsBlock);

    if (arrayName && arrayName !== 'faqData') {
      content = content.replace(new RegExp(`\\bf${arrayName.slice(1)}`, 'g'), 'faqData'); // noop safety
      content = content.replace(new RegExp(`\\b${arrayName}\\b`, 'g'), 'faqData');
    }

    fs.writeFileSync(filePath, content);
    return cmsType;
  }

  if (cmsType === 'sections.page-team-members') {
    content = ensureImport(content, "import type { CmsTeamMember } from '@/lib/strapi/mappers/page-sections'");

    let propsBlock = `type ${name}Props = {
  members?: CmsTeamMember[] | null
}

const ${name} = ({ members }: ${name}Props = {}) => {
  const teamMembers = members?.length ?? 0
    ? members!.map((member) => ({
        id: member.id,
        name: member.name,
        role: member.role ?? '',
        image: member.image ?? '',
        bio: member.bio ?? '',
        socialLinks: {} as Record<string, string | undefined>,
      }))
    : teamMembers
`;

    // This won't work for TeamMembers - needs different approach
    return null;
  }

  if (cmsType === 'sections.page-images' || cmsType === 'sections.image-gallery') {
    if (cmsType === 'sections.image-gallery') {
      content = ensureImport(content, "import type { CmsImageGallerySection } from '@/lib/strapi/mappers/page-sections'");
      content = ensureImport(content, "import { mergeGalleryItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'");
    } else {
      content = ensureImport(content, "import type { CmsGalleryImage } from '@/lib/strapi/mappers/page-sections'");
      content = ensureImport(content, "import { mergeGalleryItems } from '@/lib/strapi/cms-section-props'");
    }

    if (arrayName && (arrayName === 'data' || content.includes(`${arrayName}[`))) {
      content = content.replace(new RegExp(`const ${arrayName}`), `const DEFAULT_${arrayName.toUpperCase()}`);
    }

    const defaultArray = arrayName ? `DEFAULT_${arrayName.toUpperCase()}` : null;
    if (!defaultArray) return null;

    if (cmsType === 'sections.image-gallery') {
      const eyebrow = extractSectionLabel(content) ?? '';
      let propsBlock = `type ${name}Props = Partial<CmsImageGallerySection>

const ${name} = ({
  eyebrow = '${esc(eyebrow)}',
  title,
  accentTitle,
  description,
  images,
}: ${name}Props = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const galleryItems = mergeGalleryItems(${defaultArray}, images)
`;
      content = content.replace(`const ${name} = () => {`, propsBlock);
      content = content.replace(new RegExp(`\\b${arrayName}\\b`, 'g'), 'galleryItems');
    } else {
      let propsBlock = `type ${name}Props = {
  images?: CmsGalleryImage[] | null
}

const ${name} = ({ images }: ${name}Props = {}) => {
  const galleryItems = mergeGalleryItems(${defaultArray}, images)
`;
      content = content.replace(`const ${name} = () => {`, propsBlock);
      content = content.replace(new RegExp(`\\b${arrayName}\\b`, 'g'), 'galleryItems');
    }

    fs.writeFileSync(filePath, content);
    return cmsType;
  }

  if (cmsType === 'sections.page-office-locations') {
    content = ensureImport(content, "import type { CmsGalleryImage } from '@/lib/strapi/mappers/page-sections'");

    let propsBlock = `type ${name}Props = {
  locations?: Array<{
    city?: string | null
    country?: string | null
    address?: string | null
  }> | null
}

const ${name} = ({ locations }: ${name}Props = {}) => {
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

    content = content.replace(`const ${name} = () => {`, propsBlock);
    content = content.replace(/\bofficeLocations\[0\]/, 'displayLocations[0]');

    fs.writeFileSync(filePath, content);
    return cmsType;
  }

  if (cmsType === 'sections.page-career-jobs') {
    let propsBlock = `type ${name}Props = {
  jobs?: Array<{
    title?: string
    location?: string | null
    type?: string | null
    href?: string | null
  }> | null
  sectionHeader?: boolean
}

const ${name} = ({ jobs, sectionHeader = false }: ${name}Props = {}) => {
  const displayJobs = jobs?.length
    ? jobs.map((job, index) => ({
        slug: job.href?.split('/').pop() ?? String(index),
        title: job.title ?? '',
        description: job.location ?? '',
        tags: job.type ? [job.type] : [],
        content: '',
      }))
    : jobsData
`;

    content = content.replace(
      /const (\w+) = \(\{ sectionHeader = false \}: sectionHeaderProps\) => \{/,
      propsBlock.replace(`const ${name}`, 'const PLACEHOLDER'),
    );
    if (!content.includes('displayJobs')) {
      content = content.replace(
        `const ${name} = ({ sectionHeader = false }: sectionHeaderProps) => {`,
        propsBlock,
      );
    }
    content = content.replace(/\bjobsData\?\./g, 'displayJobs?.');
    content = content.replace(/\bjobsData\./g, 'displayJobs.');

    fs.writeFileSync(filePath, content);
    return cmsType;
  }

  if (cmsType === 'sections.page-blog-posts') {
    return null; // BlogInsight already has Blogs prop - handle separately
  }

  // Unknown / null CMS - add empty partial props so spread doesn't break types
  let propsBlock = `type ${name}Props = Record<string, unknown>

const ${name} = (_cms: ${name}Props = {}) => {
`;
  content = content.replace(`const ${name} = () => {`, propsBlock);
  fs.writeFileSync(filePath, content);
  return cmsType ?? 'unknown';
}

function findComponentFile(compName) {
  for (const prefix of TARGET_PREFIXES) {
    const dir = path.join(root, prefix);
    if (!fs.existsSync(dir)) continue;
    let found = null;
    walk(dir, (file) => {
      if (found) return;
      if (path.basename(file, '.tsx') === compName && file.includes('_components')) {
        found = file;
      }
    });
    if (found) return found;
  }
  return null;
}

function main() {
  loadManifestMap();
  const wired = scanPagesForWiredComponents();
  const updated = [];
  const skipped = [];

  for (const [compName] of wired) {
    const filePath = findComponentFile(compName);
    if (!filePath || shouldSkip(filePath)) {
      skipped.push(compName);
      continue;
    }

    const cmsType = componentTypeMap.get(compName) ?? 'unknown';
    try {
      const result = patchFile(filePath, compName, cmsType);
      if (result) {
        updated.push(path.relative(root, filePath));
      } else {
        skipped.push(compName);
      }
    } catch (err) {
      console.error('ERR', compName, err.message);
      skipped.push(compName);
    }
  }

  console.log('UPDATED', updated.length);
  updated.forEach((f) => console.log('  ', f));
  console.log('SKIPPED', skipped.length, skipped.slice(0, 20).join(', '));
}

main();
