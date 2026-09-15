import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const dirs = ['app/[locale]/about','app/[locale]/portfolio','app/[locale]/clients','app/[locale]/partners','app/[locale]/locations','app/[locale]/industries','app/[locale]/team','app/[locale]/meet','app/[locale]/thinktank','app/[locale]/quotation','app/[locale]/whitelabel','app/[locale]/affiliate','app/[locale]/helpsupport','app/[locale]/brandkit','app/[locale]/blog','app/[locale]/career','app/[locale]/clientportal'];
const skip = /Hero\.tsx$|Marquee|WowGrowth|SkewMarquee|BuiltAroundBusiness|StrategyToResults|CalCom|BookingWizard|AnimatedHero|HeroHover|BlogDetails|CareerDetails|MoreFromPortfolio|LatestProjects|MeetCta|PageHero|HeroTyping|CheckIcon|IconBars|IconBolt|IconChart|IconPeople|CrossIcon/;

function walk(d, fn) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) walk(f, fn);
    else fn(f);
  }
}

function patchTech(c, name) {
  if (c.includes('cms-section-props')) return null;
  const arrMatch = c.match(/const (\w+) = \[[\s\S]*?\n\]\s*\n/);
  let arr = arrMatch?.[1];
  if (!arr || !c.includes(`${arr}.map`)) {
    const imp = c.match(/import \{ (\w+) \} from/);
    if (imp && c.includes(`${imp[1]}.map`)) arr = imp[1];
  }
  c = c.replace(
    /(import SectionLabel[^\n]*\n)/,
    `$1import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'\nimport { mergeFeatureItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'\n`,
  );
  if (!c.includes("from '@/lib/strapi/mappers/page-sections'")) {
    c = "import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'\nimport { mergeFeatureItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'\n" + c;
  }
  if (arr) c = c.replace(`const ${arr} =`, `const DEFAULT_${arr.toUpperCase()} =`);
  const def = arr ? `DEFAULT_${arr.toUpperCase()}` : '[]';
  c = c.replace(
    new RegExp(`const ${name} = \\(\\) => \\{`),
    `type ${name}Props = Partial<CmsTechnologiesSection>\n\nconst ${name} = ({ eyebrow, title, accentTitle, description, items }: ${name}Props = {}) => {\n  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })\n  const mergedItems = mergeFeatureItems(${def}, items)\n`,
  );
  if (arr) c = c.replace(new RegExp(`\\b${arr}\\.map`, 'g'), 'mergedItems.map');
  return c;
}

function patchProcess(c, name) {
  if (c.includes('cms-section-props')) return null;
  const arrMatch = c.match(/const (\w+) = \[[\s\S]*?\n\]\s*\n/);
  const arr = arrMatch?.[1] && c.includes(`${arrMatch[1]}.map`) ? arrMatch[1] : null;
  c = c.replace(
    /(import SectionLabel[^\n]*\n)/,
    `$1import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'\nimport { mergeProcessSteps, mergeSectionHeader } from '@/lib/strapi/cms-section-props'\n`,
  );
  if (!c.includes("from '@/lib/strapi/mappers/page-sections'")) {
    c = "import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'\nimport { mergeProcessSteps, mergeSectionHeader } from '@/lib/strapi/cms-section-props'\n" + c;
  }
  if (arr) c = c.replace(`const ${arr} =`, `const DEFAULT_${arr.toUpperCase()} =`);
  const def = arr ? `DEFAULT_${arr.toUpperCase()}` : '[]';
  c = c.replace(
    new RegExp(`const ${name} = \\(\\) => \\{`),
    `type ${name}Props = Partial<CmsProcessSection>\n\nconst ${name} = ({ eyebrow, title, accentTitle, description, steps }: ${name}Props = {}) => {\n  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })\n  const mergedSteps = mergeProcessSteps(${def}, steps)\n`,
  );
  if (arr) c = c.replace(new RegExp(`\\b${arr}\\.map`, 'g'), 'mergedSteps.map');
  return c;
}

const processNames = /Journey|HowItWorks|Process|LeadToCustomer|ImpactJourney|MissionJourney|GuestJourney|CareJourney|ClientJourney|CommerceJourney|StartupJourney|AffiliateJourney/i;
const fixed = [];

for (const d of dirs) {
  const base = path.join(root, d);
  if (!fs.existsSync(base)) continue;
  walk(base, (file) => {
    if (!file.includes('_components') || !file.endsWith('.tsx') || skip.test(file)) return;
    let c = fs.readFileSync(file, 'utf8');
    const m = c.match(/^const (\w+) = \(\) => \{/m);
    if (!m) return;
    const name = m[1];
    const patched = processNames.test(name) ? patchProcess(c, name) : patchTech(c, name);
    if (patched && patched !== c) {
      fs.writeFileSync(file, patched);
      fixed.push(path.relative(root, file));
    }
  });
}

// TeamMembers special case
const teamFile = path.join(root, 'app/[locale]/team/_components/TeamMembers.tsx');
if (fs.existsSync(teamFile)) {
  let c = fs.readFileSync(teamFile, 'utf8');
  if (!c.includes('CmsTeamMember')) {
    c = c.replace(
      "import TeamGallery from '@/components/aboutpage-02/TeamGallery'",
      "import TeamGallery from '@/components/aboutpage-02/TeamGallery'\nimport type { CmsTeamMember } from '@/lib/strapi/mappers/page-sections'",
    );
    c = c.replace(
      'const Team = () => {',
      `type TeamMembersProps = { members?: CmsTeamMember[] | null }

const Team = ({ members }: TeamMembersProps = {}) => {
  const displayMembers: TeamMember[] = members?.length
    ? members.map((member) => ({
        id: member.id,
        name: member.name,
        role: member.role ?? '',
        image: member.image ?? '',
        bio: member.bio ?? '',
        socialLinks: {},
      }))
    : teamMembers
`,
    );
    c = c.replace('useState<TeamMember>(teamMembers[0])', 'useState<TeamMember>(displayMembers[0])');
    c = c.replace('teamMembers[0]', 'displayMembers[0]');
    fs.writeFileSync(teamFile, c);
    fixed.push('app/[locale]/team/_components/TeamMembers.tsx');
  }
}

console.log('PATCHED', fixed.length);
fixed.forEach((f) => console.log(' ', f));
