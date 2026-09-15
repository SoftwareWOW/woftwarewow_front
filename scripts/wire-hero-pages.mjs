import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const PAGES = [
  {
    slug: 'portfolio',
    route: '/portfolio',
    title: 'Portfolio',
    hero: 'PortfolioHero',
    defaultHero: {
      badgeTitle: 'OUR PORTFOLIO',
      title: 'Work built to',
      italicTitle: 'make an impact.',
      description:
        "Explore the ideas, experiences, and solutions we've created across technology, marketing, design, and growth.",
    },
  },
  {
    slug: 'portfolio-recent',
    route: '/portfolio/recent',
    title: 'Recent Work',
    hero: 'RecentWorkHero',
    defaultHero: {
      badgeTitle: 'RECENT WORK',
      title: "See what we've been working on.",
      description:
        'Explore our latest work across technology, marketing, design, and growth.',
    },
  },
  {
    slug: 'clients',
    route: '/clients',
    title: 'Clients',
    hero: 'ClientsHero',
    defaultHero: {
      badgeTitle: 'OUR CLIENTS',
      title: 'Great work starts with great partnerships.',
      description:
        'We work with ambitious businesses to solve meaningful challenges and create stronger foundations for growth.',
    },
  },
  {
    slug: 'partners',
    route: '/partners',
    title: 'Partners',
    hero: 'PartnersHero',
    defaultHero: {
      badgeTitle: 'OUR PARTNERS',
      title: 'Better ',
      italicTitle: 'together.',
      description:
        'We collaborate with trusted technology, platform, and industry partners to create stronger solutions for growing businesses.',
    },
  },
  {
    slug: 'locations',
    route: '/locations',
    title: 'Locations',
    hero: 'LocationsHero',
    defaultHero: {
      badgeTitle: 'OUR LOCATIONS',
      title: 'Global Reach. Connected ',
      italicTitle: 'Expertise.',
      description:
        'A connected Superagency working across markets, industries, and time zones.',
    },
  },
  {
    slug: 'industries',
    route: '/industries',
    title: 'Industries',
    hero: 'IndustriesHero',
    defaultHero: {
      badgeTitle: 'SEO Agency',
      title: 'We are the brilliants in terms of digital marketing',
    },
  },
  {
    slug: 'professional-services',
    route: '/industries/professional-services',
    title: 'Professional Services',
    hero: 'ProfessionalServicesHero',
    defaultHero: {
      badgeTitle: 'Professional Services',
      title: 'Turn Expertise Into ',
      italicTitle: 'Growth.',
      description:
        'Build a stronger presence, attract better clients, and create smarter systems around the expertise your business already has.',
    },
  },
  {
    slug: 'startups-and-entrepreneurs',
    route: '/industries/startups-and-entrepreneurs',
    title: 'Startups & Entrepreneurs',
    hero: 'StartupsEntrepreneursHero',
    defaultHero: {
      badgeTitle: 'Startups & Entrepreneurs',
      title: "Build What's ",
      italicTitle: 'Next.',
      description:
        'From first idea to market-ready business, we bring strategy, brand, technology, marketing, and growth together.',
    },
  },
  {
    slug: 'retail-and-ecommerce',
    route: '/industries/retail-and-ecommerce',
    title: 'Retail & eCommerce',
    hero: 'RetailEcommerceHero',
    defaultHero: {
      badgeTitle: 'Retail & eCommerce',
      title: 'Turn More Browsers Into Buyers.',
      description:
        'Build better shopping experiences, reach more customers, and connect the technology, marketing, and systems behind sustainable eCommerce growth.',
    },
  },
  {
    slug: 'healthcare-and-wellness',
    route: '/industries/healthcare-and-wellness',
    title: 'Healthcare & Wellness',
    hero: 'HealthcareHero',
    defaultHero: {
      title: 'Better Digital Experiences for ',
      italicTitle: 'Better Care.',
      description:
        'We help healthcare and wellness organizations build trusted brands, stronger digital experiences, smarter systems, and sustainable growth.',
    },
  },
  {
    slug: 'hospitality-and-tourism',
    route: '/industries/hospitality-and-tourism',
    title: 'Hospitality & Tourism',
    hero: 'HospitalityHero',
    defaultHero: {
      title: 'Turn Great Experiences Into ',
      italicTitle: 'Growth.',
      description:
        'We help hospitality and tourism brands attract more guests, strengthen their digital presence, and create smoother experiences from discovery to return.',
    },
  },
  {
    slug: 'finance-and-real-estate',
    route: '/industries/finance-and-real-estate',
    title: 'Finance & Real Estate',
    hero: 'FinanceHero',
    defaultHero: {
      badgeTitle: 'Finance & Real Estate',
      title: 'Build Trust. ',
      italicTitle: 'Create Opportunity.',
      description:
        'We help finance and real estate businesses strengthen their presence, attract better opportunities, and build smarter systems for sustainable growth.',
    },
  },
  {
    slug: 'organizations-and-nonprofits',
    route: '/industries/organizations-and-nonprofits',
    title: 'Organizations & Nonprofits',
    hero: 'OrganizationsHero',
    defaultHero: {
      badgeTitle: 'Organizations & Nonprofits',
      title: 'Turn Your Mission Into',
      italicTitle: ' Momentum.',
      description:
        'We help organizations strengthen their presence, reach more people, simplify operations, and build the digital systems behind lasting impact.',
    },
  },
  {
    slug: 'education-and-training',
    route: '/industries/education-and-training',
    title: 'Education & Training',
    hero: 'EducationHero',
    defaultHero: {
      title: 'Turn Your Mission Into Momentum.',
      description:
        'We help organizations strengthen their presence, reach more people, simplify operations, and build the digital systems behind lasting impact.',
    },
  },
  {
    slug: 'technology-and-saas',
    route: '/industries/technology-and-saas',
    title: 'Technology & SaaS',
    hero: 'TechnologyHero',
    defaultHero: {
      badgeTitle: 'Digital Transformation Package',
      title: 'Build Products People Keep Using.',
      description:
        'We help technology companies turn ideas into scalable products, stronger brands, smarter growth systems, and better digital experiences.',
    },
  },
  {
    slug: 'build-and-launch',
    route: '/for-you/build-and-launch',
    title: 'Build & Launch',
    hero: 'BuildLaunchHero',
    defaultHero: {
      badgeTitle: 'Build & Launch',
      title: 'From idea to',
      italicTitle: 'market.',
      description:
        'Turn your business, product or digital idea into something real—with the strategy, brand, technology and launch support you need in one place.',
    },
  },
  {
    slug: 'marketing-and-growth',
    route: '/for-you/marketing-and-growth',
    title: 'Marketing & Growth',
    hero: 'MarketingGrowthHero',
    defaultHero: {
      badgeTitle: 'Marketing & Growth',
      title: 'Turn attention into sustainable growth.',
      description: 'Attract more customers, convert more opportunities, and grow smarter.',
    },
  },
  {
    slug: 'software-and-technology',
    route: '/for-you/software-and-technology',
    title: 'Software & Technology',
    hero: 'SoftwareTechHero',
    defaultHero: {
      badgeTitle: 'Software & Technology',
      title: 'Technology built around your business.',
      description:
        'From custom software and digital products to integrations and modernization, we build technology that solves real problems and supports how your business works.',
    },
  },
  {
    slug: 'social-and-community',
    route: '/for-you/social-and-community',
    title: 'Social & Community',
    hero: 'SocialCommunityHero',
    defaultHero: {
      badgeTitle: 'Social & Community',
      title: 'Turn your audience into a community.',
      description:
        'Strategy, content, paid social and community management — connected so attention turns into lasting relationships.',
    },
  },
  {
    slug: 'ai-and-automation',
    route: '/for-you/ai-and-automation',
    title: 'AI & Automation',
    hero: 'AiAutomationHero',
    defaultHero: {
      badgeTitle: 'AI & Automation',
      title: 'Put AI to work in your business.',
      description:
        'Automate repetitive work, improve customer experiences and give your team smarter tools with practical AI solutions built around how your business actually operates.',
    },
  },
  {
    slug: 'sales-and-revenue',
    route: '/for-you/sales-and-revenue',
    title: 'Sales & Revenue',
    hero: 'SalesRevenueHero',
    defaultHero: {
      badgeTitle: 'Sales & Revenue',
      title: 'Turn more opportunities into',
      italicTitle: ' revenue.',
      description:
        'Build a stronger sales engine with better lead generation, funnels, CRM workflows and automation — designed to help your team sell more effectively and consistently.',
    },
  },
  {
    slug: 'branding-and-creative',
    route: '/for-you/branding-and-creative',
    title: 'Branding & Creative',
    hero: 'BrandingCreativeHero',
    defaultHero: {
      badgeTitle: 'Branding & Creative',
      title: 'Build a brand people',
      italicTitle: 'remember.',
      description:
        'Turn what makes your business different into a clear, distinctive brand—with the strategy, identity and creative assets to show up consistently.',
    },
  },
  {
    slug: 'hosting-and-infrastructure',
    route: '/for-you/hosting-and-infrastructure',
    title: 'Hosting & Infrastructure',
    hero: 'HostingInfraHero',
    defaultHero: {
      badgeTitle: 'Hosting & Infrastructure',
      title: 'Keep your business online and ',
      italicTitle: 'ready.',
      description:
        'Reliable hosting, domains, business email and infrastructure designed to keep your digital operations fast, secure and accessible.',
    },
  },
  {
    slug: 'learning-and-events',
    route: '/for-you/learning-and-events',
    title: 'Learning & Events',
    hero: 'LearningEventsHero',
    defaultHero: {
      badgeTitle: 'Learning & Events',
      title: 'Learn. Connect. Grow.',
      description:
        'Practical learning, expert insights and live experiences designed to help business owners and teams build skills, discover new ideas and move forward.',
    },
  },
  {
    slug: 'startup-launch',
    route: '/packages/startup-launch',
    title: 'Startup Launch Package',
    hero: 'StartupLaunchHero',
    defaultHero: {
      badgeTitle: 'Startup Launch Package',
      title: 'Everything you need to ',
      italicTitle: 'launch.',
      description:
        'Turn your idea into a launch-ready business with the essential brand, digital, marketing, and technology foundations in one package.',
    },
  },
  {
    slug: 'business-growth',
    route: '/packages/business-growth',
    title: 'Business Growth Package',
    hero: 'BusinessGrowthHero',
    defaultHero: {
      badgeTitle: 'Business Growth Package',
      title: 'Turn growth into a system.',
      description:
        'Bring your marketing, sales and digital growth activities together in one coordinated package designed to help your business attract more opportunities, convert more customers and keep improving.',
    },
  },
  {
    slug: 'digital-transformation',
    route: '/packages/digital-transformation',
    title: 'Digital Transformation Package',
    hero: 'DigitalTransformationHero',
    defaultHero: {
      badgeTitle: 'Digital Transformation Package',
      title: 'Modernize how your business works.',
      description:
        'We identify where technology can make the biggest difference, then bring the right improvements together into one coordinated transformation.',
    },
  },
  {
    slug: 'ai-automation',
    route: '/packages/ai-automation',
    title: 'AI Automation Package',
    hero: 'AiAutomationHero',
    defaultHero: {
      title: 'Less manual work. More time for what ',
      italicTitle: 'matters.',
      description:
        'We identify repetitive work across your business and build AI-powered automations that save time, connect your tools and keep everyday processes moving.',
    },
  },
  {
    slug: 'brand-authority',
    route: '/packages/brand-authority',
    title: 'Brand Authority Package',
    hero: 'BrandAuthorityHero',
    defaultHero: {
      badgeTitle: 'Brand Authority Package',
      title: 'Turn expertise into',
      italicTitle: 'authority.',
      description:
        'Build a credible, recognizable brand that strengthens trust, visibility, and influence.',
    },
  },
  {
    slug: 'saas-product-development',
    route: '/packages/saas-product-development',
    title: 'SaaS Product Development Package',
    hero: 'SaasProductHero',
    defaultHero: {
      title: 'Turn your SaaS idea into real product.',
      description:
        'From product strategy and UX/UI to development and launch, we bring the pieces together to turn your software idea into a product people can actually use.',
    },
  },
  {
    slug: 'website-growth-engine',
    route: '/packages/website-growth-engine',
    title: 'Website Growth Engine',
    hero: 'WebsiteGrowthHero',
    defaultHero: {
      badgeTitle: 'Website Growth Engine',
      title: 'Build a website that works harder.',
      description:
        'Create a faster, smarter website designed to attract visitors, convert opportunities, and support growth.',
    },
  },
  {
    slug: 'sales-acceleration',
    route: '/packages/sales-acceleration',
    title: 'Sales Acceleration',
    hero: 'SalesAccelerationHero',
    defaultHero: {
      badgeTitle: 'Sales Acceleration',
      title: 'Turn more opportunities into revenue.',
      description:
        'Build a smarter sales system for generating leads, improving follow-up, and increasing conversion.',
    },
  },
  {
    slug: 'enterprise-infrastructure',
    route: '/packages/enterprise-infrastructure',
    title: 'Enterprise Infrastructure',
    hero: 'EnterpriseInfrastructureHero',
    defaultHero: {
      badgeTitle: 'Enterprise Infrastructure',
      title: 'Infrastructure built for ',
      italicTitle: "what's next.",
      description:
        'Secure, reliable and scalable infrastructure designed to support your growing business.',
    },
  },
];

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

function ensureImport(content, importLine) {
  if (content.includes(importLine)) return content;
  const loaderImport =
    "import { buildSuperagencyPageMetadata, loadSuperagencyPage } from '@/lib/strapi/superagency-page-loader'";
  if (content.includes(loaderImport)) {
    return content.replace(
      loaderImport,
      `${loaderImport}\n${importLine}`,
    );
  }
  const lastImportEnd = content.lastIndexOf('\nimport ');
  if (lastImportEnd === -1) {
    return `${importLine}\n${content}`;
  }
  const lineEnd = content.indexOf('\n', lastImportEnd + 1);
  return content.slice(0, lineEnd + 1) + importLine + '\n' + content.slice(lineEnd + 1);
}

function removeDuplicatePageSlug(content) {
  const matches = content.match(/const PAGE_SLUG = '[^']+' as const/g);
  if (matches && matches.length > 1) {
    let first = true;
    content = content.replace(/const PAGE_SLUG = '[^']+' as const\n\n?/g, (m) => {
      if (first) {
        first = false;
        return m;
      }
      return '';
    });
  }
  return content;
}

function wirePage({ slug, route, title, hero, defaultHero }) {
  const filePath = routeToPagePath(route);
  if (!fs.existsSync(filePath)) {
    console.warn('Missing:', filePath);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  content = removeDuplicatePageSlug(content);

  content = ensureImport(
    content,
    "import { buildPageHero } from '@/lib/strapi/resolve-page-hero'",
  );
  content = ensureImport(
    content,
    "import { buildSuperagencyPageMetadata, loadSuperagencyPage } from '@/lib/strapi/superagency-page-loader'",
  );

  if (!content.includes('const PAGE_SLUG')) {
    const anchor = content.match(/^([\s\S]*?\n)(import |type Props)/);
    if (anchor) {
      content =
        content.slice(0, anchor[1].length) +
        `\nconst PAGE_SLUG = '${slug}' as const\n\nexport const revalidate = 60\n\n` +
        content.slice(anchor[1].length);
    } else {
      content = `const PAGE_SLUG = '${slug}' as const\n\nexport const revalidate = 60\n\n${content}`;
    }
  } else {
    content = content.replace(
      /const PAGE_SLUG = '[^']+' as const/,
      `const PAGE_SLUG = '${slug}' as const`,
    );
  }

  if (!content.includes('export const revalidate')) {
    content = content.replace(
      `const PAGE_SLUG = '${slug}' as const`,
      `const PAGE_SLUG = '${slug}' as const\n\nexport const revalidate = 60`,
    );
  }

  if (!content.includes('const DEFAULT_HERO')) {
    if (content.includes('export const revalidate = 60\n\n')) {
      content = content.replace(
        /export const revalidate = 60\n\n/,
        `export const revalidate = 60\n\n${formatDefaultHero(defaultHero)}\n\n`,
      );
    } else if (content.includes(`const PAGE_SLUG = '${slug}' as const\n\n`)) {
      content = content.replace(
        new RegExp(`const PAGE_SLUG = '${slug}' as const\\n\\n`),
        `const PAGE_SLUG = '${slug}' as const\n\nexport const revalidate = 60\n\n${formatDefaultHero(defaultHero)}\n\n`,
      );
    }
  }

  if (content.includes('export async function generateMetadata')) {
    content = content.replace(
      /export async function generateMetadata\(\{ params \}: Props\): Promise<Metadata> \{[\s\S]*?\n\}/,
      `export async function generateMetadata({ params }: Props): Promise<Metadata> {\n  const { locale } = await params\n  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)\n  return buildSuperagencyPageMetadata(cms, { title: '${title.replace(/'/g, "\\'")}' })\n}`,
    );
  }

  const heroTag = `<${hero} />`;
  const heroTagWired = `<${hero} {...hero} images={hero.images} />`;

  content = content.replace(/\n\s*await loadSuperagencyPage\(PAGE_SLUG, locale as Locale\)\n/g, '\n');
  content = content.replace(
    /\n\s*const cms = await loadSuperagencyPage\(PAGE_SLUG, locale as Locale\)\n\s*const hero = buildPageHero\(PAGE_SLUG, DEFAULT_HERO, cms\.hero\)\n\n/g,
    '\n',
  );

  if (!content.includes('const hero = buildPageHero')) {
    content = content.replace(
      /(setRequestLocale\(locale as Locale\)\n)/,
      `$1\n  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)\n  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)\n\n`,
    );
  }

  if (content.includes(heroTag) && !content.includes(heroTagWired)) {
    content = content.replace(heroTag, heroTagWired);
  }

  content = dedupeImports(content);
  fs.writeFileSync(filePath, content);
  return true;
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

let updated = 0;
for (const page of PAGES) {
  if (wirePage(page)) {
    updated++;
    console.log('Wired', page.route);
  }
}
console.log(`Updated ${updated} pages.`);
