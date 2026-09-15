import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const root = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(root, '..');

const patches = [
  {
    file: 'app/[locale]/thinktank/_components/WhyThinkTank.tsx',
    search: `const WhyThinkTank = () => (`,
    replace: `import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeFeatureItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'

type WhyThinkTankProps = Partial<CmsTechnologiesSection>

const WhyThinkTank = ({
  eyebrow = 'Why Join a Think Tank Session',
  title = 'A session designed to',
  accentTitle = 'create clarity',
  items,
}: WhyThinkTankProps = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle }, { eyebrow, title, accentTitle })
  const mergedItems = mergeFeatureItems(
    whyThinkTankItems.map(({ title: t, description, icon }) => ({ title: t, description, icon })),
    items,
  ).map((item, i) => ({ ...whyThinkTankItems[i], title: item.title, description: item.description ?? whyThinkTankItems[i].description }))

  return (`,
    extra: [
      ['whyThinkTankItems.map', 'mergedItems.map'],
      ['<SectionLabel className="mb-5">Why Join a Think Tank Session</SectionLabel>', '<SectionLabel className="mb-5">{header.eyebrow}</SectionLabel>'],
      ['A session designed to{\' \'}', '{header.title}{\' \'}\n          '],
      ['create clarity', '{header.accentTitle}'],
      [')\n\nexport default WhyThinkTank', '  )\n}\n\nexport default WhyThinkTank'],
    ],
  },
];

// simpler direct writes for key files
function patchQuotationHowItWorks() {
  const f = path.join(rootDir, 'app/[locale]/quotation/_components/HowItWorks.tsx');
  let c = fs.readFileSync(f, 'utf8');
  if (c.includes('Partial<CmsProcessSection>')) return;
  c = c.replace(
    "import RevealWrapper from '@/components/animation/RevealWrapper'\n",
    "import RevealWrapper from '@/components/animation/RevealWrapper'\nimport type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'\nimport { mergeProcessSteps, mergeSectionHeader } from '@/lib/strapi/cms-section-props'\n",
  );
  c = c.replace('const steps =', 'const DEFAULT_STEPS =');
  c = c.replace(
    'const HowItWorks = () => {',
    `type HowItWorksProps = Partial<CmsProcessSection>

const HowItWorks = ({ title = 'Simple From Here.', steps }: HowItWorksProps = {}) => {
  const header = mergeSectionHeader({ title }, { title })
  const mergedSteps = mergeProcessSteps(DEFAULT_STEPS, steps).map((step, i) => ({
    ...DEFAULT_STEPS[i],
    title: step.title,
    description: step.description ?? DEFAULT_STEPS[i].description,
  }))
`,
  );
  c = c.replace('<h2 className="mx-auto">Simple From Here.</h2>', '<h2 className="mx-auto">{header.title}</h2>');
  c = c.replace('steps.map', 'mergedSteps.map');
  fs.writeFileSync(f, c);
  console.log('HowItWorks');
}

function patchWhitelabelHowWePartner() {
  const f = path.join(rootDir, 'app/[locale]/whitelabel/_components/HowWePartner.tsx');
  let c = fs.readFileSync(f, 'utf8');
  if (c.includes('Partial<CmsProcessSection>')) return;
  c = c.replace(
    "import { partnerSteps } from '../_data/whitelabel'",
    "import { partnerSteps as DEFAULT_PARTNERSTEPS } from '../_data/whitelabel'\nimport type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'\nimport { mergeProcessSteps, mergeSectionHeader, cmsImageSrc } from '@/lib/strapi/cms-section-props'",
  );
  c = c.replace(
    'const HowWePartner = () => {',
    `type HowWePartnerProps = Partial<CmsProcessSection>

const HowWePartner = ({
  eyebrow = 'HOW IT WORKS',
  title = 'Built Around Your Client Relationship.',
  description = 'Successful technology businesses continuously improve the product while building the systems that bring users in and keep them there.',
  steps,
  image,
}: HowWePartnerProps = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, description }, { eyebrow, title, description })
  const mergedSteps = mergeProcessSteps(DEFAULT_PARTNERSTEPS, steps)
  const imageSrc = cmsImageSrc(image, '/images/wow/nav/cards/software%26technology.png')
`,
  );
  c = c.replace('<SectionLabel>HOW IT WORKS</SectionLabel>', '<SectionLabel>{header.eyebrow}</SectionLabel>');
  c = c.replace('<h2 className="text-appear mx-auto max-w-[770px]">Built Around Your Client Relationship.</h2>', '<h2 className="text-appear mx-auto max-w-[770px]">{header.title}</h2>');
  c = c.replace('partnerSteps.map', 'mergedSteps.map');
  c = c.replace('src="/images/wow/nav/cards/software%26technology.png"', 'src={imageSrc ?? \'\'}');
  fs.writeFileSync(f, c);
  console.log('WhitelabelHowWePartner');
}

function patchIndustriesProcess() {
  const f = path.join(rootDir, 'app/[locale]/industries/_components/IndustiesProces.tsx');
  let c = fs.readFileSync(f, 'utf8');
  if (c.includes('Partial<CmsProcessSection>')) return;
  c = c.replace(
    "import SectionLabel from '@/components/wow/shared/SectionLabel'",
    "import SectionLabel from '@/components/wow/shared/SectionLabel'\nimport type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'\nimport { mergeProcessSteps, mergeSectionHeader } from '@/lib/strapi/cms-section-props'",
  );
  c = c.replace('const data =', 'const DEFAULT_DATA =');
  c = c.replace(
    'const IndustriesProcess = () => {',
    `type IndustriesProcessProps = Partial<CmsProcessSection>

const IndustriesProcess = ({ eyebrow, title, accentTitle, description, steps }: IndustriesProcessProps = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const mergedSteps = mergeProcessSteps(DEFAULT_DATA, steps).map((step, i) => ({
    ...DEFAULT_DATA[i],
    title: step.title,
    description: step.description ?? DEFAULT_DATA[i].description,
  }))
`,
  );
  c = c.replace('data.map', 'mergedSteps.map');
  fs.writeFileSync(f, c);
  console.log('IndustriesProcess');
}

function patchStrategicExpertise() {
  const f = path.join(rootDir, 'app/[locale]/about/strategy-centre/_components/StrategicExpertise.tsx');
  let c = fs.readFileSync(f, 'utf8');
  if (c.includes('Partial<CmsTechnologiesSection>')) return;
  c = c.replace(
    "import SectionLabel from '@/components/wow/shared/SectionLabel'",
    "import SectionLabel from '@/components/wow/shared/SectionLabel'\nimport type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'\nimport { mergeFeatureItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'",
  );
  c = c.replace(
    'const StrategicExpertise = () => {',
    `type StrategicExpertiseProps = Partial<CmsTechnologiesSection>

const StrategicExpertise = ({ eyebrow, title, accentTitle, description, items }: StrategicExpertiseProps = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const mergedTop = mergeFeatureItems(
    TOP_ROW_EXPERTISE.map(({ title: t, description: d }) => ({ title: t, description: d })),
    items,
  )
  const mergedBottom = mergeFeatureItems(
    BOTTOM_ROW_EXPERTISE.map(({ title: t, description: d }) => ({ title: t, description: d })),
    items?.slice(TOP_ROW_EXPERTISE.length),
  )
`,
  );
  c = c.replace('TOP_ROW_EXPERTISE.map', 'mergedTop.map((item, index) => ({ ...TOP_ROW_EXPERTISE[index], title: item.title, description: item.description ?? TOP_ROW_EXPERTISE[index].description })).map');
  // too complex - simpler approach
  fs.writeFileSync(f, c);
  console.log('StrategicExpertise partial');
}

function patchJobs() {
  const f = path.join(rootDir, 'app/[locale]/career/_components/Jobs.tsx');
  let c = fs.readFileSync(f, 'utf8');
  if (c.includes('jobs?:')) return;
  c = c.replace(
    "import Image from 'next/image'",
    "import Image from 'next/image'\nimport type { CmsGalleryImage } from '@/lib/strapi/mappers/page-sections'",
  );
  c = c.replace('interface sectionHeaderProps', `type JobsProps = {
  jobs?: Array<{
    title?: string
    location?: string | null
    type?: string | null
    href?: string | null
  }> | null
  sectionHeader?: boolean
}

interface sectionHeaderProps`);
  c = c.replace(
    'const Jobs = ({ sectionHeader = false }: sectionHeaderProps) => {',
    `const Jobs = ({ jobs, sectionHeader = false }: JobsProps) => {
  const displayJobs = jobs?.length
    ? jobs.map((job, index) => ({
        slug: job.href?.split('/').pop() ?? String(index),
        title: job.title ?? '',
        description: job.location ?? '',
        tags: job.type ? [job.type] : [],
        content: '',
      }))
    : jobsData
`,
  );
  c = c.replace('jobsData?.toReversed', 'displayJobs?.toReversed');
  fs.writeFileSync(f, c);
  console.log('Jobs');
}

function patchCommunities() {
  const f = path.join(rootDir, 'app/[locale]/career/_components/Comunities.tsx');
  let c = fs.readFileSync(f, 'utf8');
  if (c.includes('Partial<CmsTechnologiesSection>')) return;
  c = c.replace(
    "import SectionLabel from '@/components/wow/shared/SectionLabel'",
    "import SectionLabel from '@/components/wow/shared/SectionLabel'\nimport type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'\nimport { mergeSectionHeader } from '@/lib/strapi/cms-section-props'",
  );
  c = c.replace(
    'const Communities = () => {',
    `type CommunitiesProps = Partial<CmsTechnologiesSection>

const Communities = ({ title = 'Learn, Connect & Grow With WOW', accentTitle, description }: CommunitiesProps = {}) => {
  const header = mergeSectionHeader({ title, accentTitle, description }, { title, accentTitle, description })
`,
  );
  c = c.replace('Learn, Connect & Grow With WOW', '{header.title}');
  fs.writeFileSync(f, c);
  console.log('Communities');
}

function patchBlogInsight() {
  const f = path.join(rootDir, 'app/[locale]/blog/_components/BlogInsight.tsx');
  let c = fs.readFileSync(f, 'utf8');
  if (c.includes('blogPosts')) return;
  c = c.replace(
    "import { FC, useMemo, useState } from 'react'",
    "import { FC, useMemo, useState } from 'react'\nimport type { CmsGalleryImage } from '@/lib/strapi/mappers/page-sections'",
  );
  c = c.replace(
    'interface BlogsProps {\n  Blogs: BlogType[]\n}',
    `interface BlogsProps {
  Blogs: BlogType[]
  blogPosts?: Array<{
    title?: string
    excerpt?: string | null
    href?: string | null
    date?: string | null
    thumbnail?: { src?: string } | string | null
  }> | null
}`,
  );
  c = c.replace(
    'const BlogInsight: FC<BlogsProps> = ({ Blogs }) => {',
    `const BlogInsight: FC<BlogsProps> = ({ Blogs, blogPosts }) => {
  const sourceBlogs = blogPosts?.length
    ? blogPosts.map((post, index) => ({
        slug: post.href?.split('/').pop() ?? String(index),
        title: post.title ?? '',
        description: post.excerpt ?? '',
        date: post.date ?? '',
        thumbnail: typeof post.thumbnail === 'string' ? post.thumbnail : post.thumbnail?.src ?? '',
        content: '',
        tags: [],
      }))
    : Blogs
`,
  );
  c = c.replace(/\bBlogs\b/g, (m, offset) => {
    const before = c.slice(Math.max(0, offset - 40), offset);
    if (before.includes('sourceBlogs') || before.includes('BlogsProps') || before.includes('Blogs:')) return m;
    return 'sourceBlogs';
  });
  fs.writeFileSync(f, c);
  console.log('BlogInsight');
}

patchQuotationHowItWorks();
patchWhitelabelHowWePartner();
patchIndustriesProcess();
patchJobs();
patchCommunities();
// patchStrategicExpertise(); skip complex
console.log('done');
