import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const PROPS_TYPE = `type PageHeroProps = {
  badgeTitle?: string
  title?: string
  italicTitle?: string
  description?: string
  images?: { src: string; alt?: string }[]
}
`;

function read(p) {
  return fs.readFileSync(path.join(root, p), 'utf8');
}

function write(p, content) {
  fs.writeFileSync(path.join(root, p), content);
}

function ensurePropsType(content) {
  if (content.includes('type PageHeroProps')) return content;
  const anchor = content.indexOf('\n\n/**') > -1 ? content.indexOf('\n\n/**') : content.indexOf('\n\nconst ');
  if (anchor === -1) return content;
  return content.slice(0, anchor) + '\n\n' + PROPS_TYPE + content.slice(anchor);
}

// LocationsHero - same multi pattern as ClientsHero
function patchMultiHero(relPath, defaults) {
  let c = read(relPath);
  if (c.includes('PageHeroProps')) return;
  c = ensurePropsType(c);
  c = c.replace(
    /const (\w+) = \(\) => \{/,
    `const $1 = ({\n  badgeTitle = '${defaults.badgeTitle ?? ''}',\n  title = '${defaults.title.replace(/'/g, "\\'")}',\n  description =\n    '${defaults.description.replace(/'/g, "\\'")}',\n  images,\n}: PageHeroProps) => {`,
  );
  c = c.replace(
    /useEffect\(\(\) => \{\n    const imagePaths: string\[\] = \[\.\.\.HERO_IMAGES\]/,
    'const imagePaths = images?.length ? images.map((item) => item.src) : [...HERO_IMAGES]\n\n  useEffect(() => {\n    const paths: string[] = [...imagePaths]',
  );
  c = c.replace(
    /const shuffledPaths: string\[\] = \[\.\.\.imagePaths\]/,
    'const shuffledPaths: string[] = [...paths]',
  );
  c = c.replace(/  \}, \[\]\)/, '  }, [imagePaths])');
  for (let i = 0; i < 6; i++) {
    c = c.replace(`src={HERO_IMAGES[${i}]}`, `src={images?.[${i}]?.src ?? HERO_IMAGES[${i}]}`);
  }
  if (defaults.badgeTitle) {
    c = c.replace(`<SectionLabel>${defaults.badgeTitle}</SectionLabel>`, '<SectionLabel>{badgeTitle}</SectionLabel>');
  }
  write(relPath, c);
  console.log('multi', relPath);
}

// Dual HeroV19 pattern
function patchDualHeroV19(relPath, defaults, img0, img1) {
  let c = read(relPath);
  if (c.includes('PageHeroProps')) return;
  c = ensurePropsType(c);
  c = c.replace(
    /const (\w+) = \(\) => \{/,
    `const $1 = ({\n  badgeTitle = '${defaults.badgeTitle.replace(/'/g, "\\'")}',\n  title = '${defaults.title.replace(/'/g, "\\'")}',\n  italicTitle = '${(defaults.italicTitle ?? '').replace(/'/g, "\\'")}',\n  description =\n    '${defaults.description.replace(/'/g, "\\'")}',\n  images,\n}: PageHeroProps) => {\n  const image0 = images?.[0] ?? { src: '${img0.src}', alt: '${img0.alt.replace(/'/g, "\\'")}' }\n  const image1 = images?.[1] ?? { src: '${img1.src}', alt: '${img1.alt.replace(/'/g, "\\'")}' }\n`,
  );
  c = c.replace(new RegExp(`<SectionLabel>${defaults.badgeTitle.replace(/&/g, '&amp;')}</SectionLabel>`), '<SectionLabel>{badgeTitle}</SectionLabel>');
  c = c.replace(/<SectionLabel>[^<]+<\/SectionLabel>/, '<SectionLabel>{badgeTitle}</SectionLabel>');
  write(relPath, c);
  console.log('dual-v19', relPath);
}

patchMultiHero('app/[locale]/locations/_components/LocationsHero.tsx', {
  badgeTitle: 'OUR LOCATIONS',
  title: 'Global Reach. Connected Expertise.',
  description: 'A connected Superagency working across markets, industries, and time zones.',
});
