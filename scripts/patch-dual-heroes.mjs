/**
 * Patch dual-image HeroV19 components to accept CMS hero props.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const HERO_FILES = [
  {
    file: 'app/[locale]/packages/startup-launch/_components/StartupLaunchHero.tsx',
    defaults: {
      badgeTitle: 'Startup Launch Package',
      title: 'Everything you need',
      italicTitle: 'launch.',
      description:
        'Turn your idea into a launch-ready business with the essential brand, digital, marketing, and technology foundations in one package.',
    },
    img0: { src: '/images/wow/nav/cards/Startup%20laiunch%201.png', alt: 'Startup launch foundations and collaboration' },
    img1: { src: '/images/wow/nav/cards/build%26lanch.png', alt: 'Building and launching a new business' },
  },
  {
    file: 'app/[locale]/packages/business-growth/_components/BusinessGrowthHero.tsx',
    defaults: {
      badgeTitle: 'Business Growth Package',
      title: 'Everything you need to',
      italicTitle: 'grow.',
      description:
        'Build stronger marketing, sales, and digital systems that help your business attract more customers and scale with confidence.',
    },
    img0: { src: '/images/wow/nav/cards/Business%20Growth%201.png', alt: 'Business growth strategy' },
    img1: { src: '/images/wow/nav/cards/Business%20Growth%202.png', alt: 'Growing business team' },
  },
  {
    file: 'app/[locale]/packages/digital-transformation/_components/DigitalTransformationHero.tsx',
    defaults: {
      badgeTitle: 'Digital Transformation Package',
      title: 'Transform how your business',
      italicTitle: 'operates.',
      description:
        'Modernize systems, streamline workflows, and build the digital foundation your business needs to compete and grow.',
    },
    img0: { src: '/images/wow/nav/cards/Digital%20Transformation%201.png', alt: 'Digital transformation' },
    img1: { src: '/images/wow/nav/cards/Digital%20Transformation%202.png', alt: 'Modern business systems' },
  },
  {
    file: 'app/[locale]/packages/brand-authority/_components/BrandAuthorityHero.tsx',
    defaults: {
      badgeTitle: 'Brand Authority Package',
      title: 'Build a brand people',
      italicTitle: 'trust.',
      description:
        'Create a stronger brand presence, clearer messaging, and more consistent visibility across the channels that matter most.',
    },
    img0: { src: '/images/wow/nav/cards/Brand%20Authority%201.png', alt: 'Brand authority' },
    img1: { src: '/images/wow/nav/cards/Brand%20Authority%202.png', alt: 'Brand building' },
  },
  {
    file: 'app/[locale]/packages/website-growth-engine/_components/WebsiteGrowthHero.tsx',
    defaults: {
      badgeTitle: 'Website Growth Engine',
      title: 'A website built to',
      italicTitle: 'perform.',
      description:
        'Launch a high-performing website designed to attract traffic, convert visitors, and support long-term business growth.',
    },
    img0: { src: '/images/wow/nav/cards/Website%20Growth%201.png', alt: 'Website growth' },
    img1: { src: '/images/wow/nav/cards/Website%20Growth%202.png', alt: 'High performance website' },
  },
  {
    file: 'app/[locale]/packages/sales-acceleration/_components/SalesAccelerationHero.tsx',
    defaults: {
      badgeTitle: 'Sales Acceleration Package',
      title: 'Turn leads into',
      italicTitle: 'revenue.',
      description:
        'Build stronger sales systems, better follow-up, and clearer conversion paths that help your business close more deals.',
    },
    img0: { src: '/images/wow/nav/cards/Sales%20Acceleration%201.png', alt: 'Sales acceleration' },
    img1: { src: '/images/wow/nav/cards/Sales%20Acceleration%202.png', alt: 'Sales growth' },
  },
  {
    file: 'app/[locale]/packages/saas-product-development/_components/SaasProductHero.tsx',
    defaults: {
      badgeTitle: 'SaaS Product Development',
      title: 'From idea to',
      italicTitle: 'product.',
      description:
        'Design, build, and launch a SaaS product with the strategy, technology, and go-to-market support you need in one package.',
    },
    img0: { src: '/images/wow/nav/cards/SaaS%20Product%201.png', alt: 'SaaS product development' },
    img1: { src: '/images/wow/nav/cards/SaaS%20Product%202.png', alt: 'Product launch' },
  },
  {
    file: 'app/[locale]/packages/ai-automation/_components/AiAutomationHero.tsx',
    defaults: {
      badgeTitle: 'AI & Automation Package',
      title: 'Automate the work that slows you',
      italicTitle: 'down.',
      description:
        'Identify repetitive tasks, build smart workflows, and use AI to save time, reduce errors, and scale operations.',
    },
    img0: { src: '/images/wow/nav/cards/AI%20Automation%201.png', alt: 'AI automation' },
    img1: { src: '/images/wow/nav/cards/AI%20Automation%202.png', alt: 'Automated workflows' },
  },
  {
    file: 'app/[locale]/for-you/marketing-and-growth/_components/MarketingGrowthHero.tsx',
    defaults: {
      badgeTitle: 'Marketing & Growth',
      title: 'Marketing that drives',
      italicTitle: 'growth.',
      description:
        'Build stronger visibility, better campaigns, and smarter systems that help your business attract, convert, and retain customers.',
    },
    img0: { src: '/images/hero-img/marketing-hero-1.jpg', alt: 'Marketing and growth strategy' },
    img1: { src: '/images/hero-img/marketing-hero-2.jpg', alt: 'Growth marketing team' },
  },
  {
    file: 'app/[locale]/for-you/software-and-technology/_components/SoftwareTechHero.tsx',
    defaults: {
      badgeTitle: 'Software & Technology',
      title: 'Technology built for your',
      italicTitle: 'business.',
      description:
        'Design and build software, apps, and digital products that solve real problems and support long-term growth.',
    },
    img0: { src: '/images/hero-img/software-hero-1.jpg', alt: 'Software development' },
    img1: { src: '/images/hero-img/software-hero-2.jpg', alt: 'Technology team' },
  },
  {
    file: 'app/[locale]/for-you/social-and-community/_components/SocialCommunityHero.tsx',
    defaults: {
      badgeTitle: 'Social & Community',
      title: 'Build presence and',
      italicTitle: 'community.',
      description:
        'Create stronger social visibility, meaningful engagement, and community experiences that support brand growth.',
    },
    img0: { src: '/images/hero-img/social-hero-1.jpg', alt: 'Social media presence' },
    img1: { src: '/images/hero-img/social-hero-2.jpg', alt: 'Community building' },
  },
  {
    file: 'app/[locale]/for-you/ai-and-automation/_components/AiAutomationHero.tsx',
    defaults: {
      badgeTitle: 'AI & Automation',
      title: 'Work smarter with',
      italicTitle: 'AI.',
      description:
        'Use AI and automation to remove repetitive work, improve efficiency, and create smarter business systems.',
    },
    img0: { src: '/images/hero-img/ai-hero-1.jpg', alt: 'AI and automation' },
    img1: { src: '/images/hero-img/ai-hero-2.jpg', alt: 'Smart workflows' },
  },
  {
    file: 'app/[locale]/for-you/sales-and-revenue/_components/SalesRevenueHero.tsx',
    defaults: {
      badgeTitle: 'Sales & Revenue',
      title: 'Turn interest into',
      italicTitle: 'revenue.',
      description:
        'Build stronger sales systems, better follow-up, and clearer conversion paths that help your business grow revenue.',
    },
    img0: { src: '/images/hero-img/sales-hero-1.jpg', alt: 'Sales and revenue' },
    img1: { src: '/images/hero-img/sales-hero-2.jpg', alt: 'Revenue growth' },
  },
  {
    file: 'app/[locale]/for-you/branding-and-creative/_components/BrandingCreativeHero.tsx',
    defaults: {
      badgeTitle: 'Branding & Creative',
      title: 'Build a brand people',
      italicTitle: 'remember.',
      description:
        'Create stronger identity, clearer messaging, and creative assets that help your business stand out and connect.',
    },
    img0: { src: '/images/hero-img/branding-hero-1.jpg', alt: 'Branding and creative' },
    img1: { src: '/images/hero-img/branding-hero-2.jpg', alt: 'Creative brand work' },
  },
  {
    file: 'app/[locale]/for-you/hosting-and-infrastructure/_components/HostingInfraHero.tsx',
    defaults: {
      badgeTitle: 'Hosting & Infrastructure',
      title: 'Reliable infrastructure for your',
      italicTitle: 'business.',
      description:
        'Secure hosting, scalable systems, and the technical foundation your business needs to stay online and perform.',
    },
    img0: { src: '/images/hero-img/hosting-hero-1.jpg', alt: 'Hosting infrastructure' },
    img1: { src: '/images/hero-img/hosting-hero-2.jpg', alt: 'Business infrastructure' },
  },
  {
    file: 'app/[locale]/for-you/learning-and-events/_components/LearningEventsHero.tsx',
    defaults: {
      badgeTitle: 'Learning & Events',
      title: 'Learn, connect, and',
      italicTitle: 'grow.',
      description:
        'Access workshops, events, and learning experiences designed to help businesses build skills and make better decisions.',
    },
    img0: { src: '/images/hero-img/learning-hero-1.jpg', alt: 'Learning and events' },
    img1: { src: '/images/hero-img/learning-hero-2.jpg', alt: 'Business workshops' },
  },
];

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function patchHero({ file, defaults, img0, img1 }) {
  const filePath = path.join(root, file);
  if (!fs.existsSync(filePath)) {
    console.log('skip missing:', file);
    return;
  }
  let c = fs.readFileSync(filePath, 'utf8');
  if (c.includes('CmsHeroComponentProps')) {
    console.log('already patched:', file);
    return;
  }

  const importLine = "import type { CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'\n";
  if (!c.includes("from '@/lib/strapi/cms-section-props'")) {
    c = c.replace(
      /(import SectionLabel from '@\/components\/wow\/shared\/SectionLabel'\n)/,
      `$1${importLine}`,
    );
  }

  c = c.replace(
    /const (\w+) = \(\) => \{/,
    `const $1 = ({\n  badgeTitle = '${esc(defaults.badgeTitle)}',\n  title = '${esc(defaults.title)}',\n  italicTitle = '${esc(defaults.italicTitle ?? '')}',\n  description =\n    '${esc(defaults.description)}',\n  images,\n}: CmsHeroComponentProps) => {\n  const image0 = images?.[0] ?? { src: '${esc(img0.src)}', alt: '${esc(img0.alt)}' }\n  const image1 = images?.[1] ?? { src: '${esc(img1.src)}', alt: '${esc(img1.alt)}' }\n`,
  );

  c = c.replace(/<SectionLabel>[^<{]+<\/SectionLabel>/, '<SectionLabel>{badgeTitle}</SectionLabel>');

  // Replace hardcoded h1 with props - handle InstrumentText pattern
  c = c.replace(
    /<h1[\s\S]*?<\/h1>/,
    `<h1
              id="startup-launch-heading"
              className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
            >
              {title}
              <br className="hidden lg:block" />
              {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
            </h1>`,
  );

  // Fix id attribute - use component-specific id from aria-labelledby if present
  const ariaMatch = c.match(/aria-labelledby="([^"]+)"/);
  if (ariaMatch) {
    c = c.replace(/id="startup-launch-heading"/, `id="${ariaMatch[1]}"`);
  }

  // Replace description paragraph
  c = c.replace(
    /<p className="max-w-xl text-base leading-relaxed text-\[#808080\] md:text-lg">\s*[\s\S]*?<\/p>/,
    '{description ? (\n            <RevealWrapper className="reveal-me mt-3">\n              <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>\n            </RevealWrapper>\n          ) : null}',
  );

  // Replace hardcoded img src with image0/image1
  const imgTags = [...c.matchAll(/<img[\s\S]*?\/>/g)];
  let imgIndex = 0;
  c = c.replace(/<img[\s\S]*?\/>/g, (match) => {
    if (!match.includes('hero-gradient') && !match.includes('aria-hidden')) {
      const varName = imgIndex === 0 ? 'image0' : 'image1';
      imgIndex++;
      return match
        .replace(/src="[^"]*"/, `src={${varName}.src}`)
        .replace(/alt="[^"]*"/, `alt={${varName}.alt ?? ''}`);
    }
    return match;
  });

  fs.writeFileSync(filePath, c);
  console.log('patched:', file);
}

for (const hero of HERO_FILES) {
  patchHero(hero);
}

console.log('Done patching dual heroes.');
