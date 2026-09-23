import { resolveCmsImage } from '@/lib/strapi/cms-image';
import { getStrapiMediaUrl } from '@/lib/strapi/client';
import { mapSocialLinks, type CmsSocialLink } from '@/lib/strapi/social-icons';
import type { Metadata } from 'next';
import type {
  StrapiHeroAbout,
  StrapiImageGallery,
  StrapiPageEvents,
  StrapiPageFaq,
  StrapiPageHero,
  StrapiPageCareerCommunity,
  StrapiPageImages,
  StrapiPageProcess,
  StrapiPageProcessSteps,
  StrapiPageSectionImage,
  StrapiPageProjectItem,
  StrapiPageProjects,
  StrapiPageRfq,
  StrapiPageRfqAccordion,
  StrapiPageSeo,
  StrapiPageTechnologies,
  StrapiPageTeamMembers,
  StrapiPageClientLogos,
  StrapiPageOfficeLocations,
  StrapiPagePortfolioExplorer,
  StrapiPagePackageList,
  StrapiBrandKitLogos,
  StrapiFaqList,
  StrapiPagePartners,
  StrapiPackageOffer,
  StrapiTeamMember,
} from '@/lib/strapi/types/pages';

export type CmsHeroImage = {
  src: string;
  alt?: string;
};

export type CmsPageHeroProps = {
  badgeTitle?: string;
  title?: string;
  italicTitle?: string;
  suffixTitle?: string;
  description?: string;
  images?: CmsHeroImage[];
  backgroundImage?: CmsHeroImage;
};

export type CmsProcessSection = {
  eyebrow?: string;
  title?: string;
  accentTitle?: string;
  description?: string;
  image?: CmsHeroImage;
  backgroundImage?: CmsHeroImage;
  steps: CmsProcessStep[];
};

export type CmsFeatureItem = {
  title: string;
  description?: string;
  image?: CmsHeroImage;
};

export type CmsTechnologiesSection = {
  eyebrow?: string;
  title?: string;
  accentTitle?: string;
  description?: string;
  image?: CmsHeroImage;
  backgroundImage?: CmsHeroImage;
  items: CmsFeatureItem[];
};

export type CmsHeroAboutSection = {
  body?: string;
  image?: CmsHeroImage;
};

export type CmsRfqGroup = {
  title: string;
  subtitle?: string;
  items: string[];
};

export type CmsRfqAccordionSection = {
  eyebrow?: string;
  title?: string;
  accentTitle?: string;
  description?: string;
  backgroundImage?: CmsHeroImage;
  groups: CmsRfqGroup[];
};

export type CmsPackageOfferSection = {
  eyebrow?: string;
  title?: string;
  description?: string;
  price?: string;
  billingNote?: string;
  image?: CmsHeroImage;
  backgroundImage?: CmsHeroImage;
  features: CmsFeatureItem[];
  cta?: { label?: string; href?: string };
};

export type CmsEventCard = {
  date?: string;
  title: string;
  location?: string;
  href?: string;
};

export type CmsPageEventsSection = {
  eyebrow?: string;
  title?: string;
  accentTitle?: string;
  description?: string;
  events: CmsEventCard[];
};

export type CmsGalleryImage = {
  src: string;
  alt?: string;
  href?: string;
};

export type CmsCareerCommunitySection = {
  avatars: CmsGalleryImage[];
  teamImage?: CmsGalleryImage | null;
};

export type CmsImageGallerySection = {
  eyebrow?: string;
  title?: string;
  accentTitle?: string;
  description?: string;
  images: CmsGalleryImage[];
};

export type CmsProcessStep = {
  title: string;
  description?: string;
  order?: number;
};

export type CmsProjectCard = {
  title: string;
  description?: string;
  thumbnail?: string;
  alt?: string;
  href?: string;
};

export type CmsFaqItem = {
  question: string;
  answer: string;
};

export type CmsFaqListSection = {
  eyebrow?: string;
  title?: string;
  accentTitle?: string;
  description?: string;
  items: CmsFaqItem[];
};

export type CmsPageRfqSection = {
  body?: string;
};

export type CmsClientLogo = {
  id: string;
  logo: string;
  darkLogo?: string;
  alt: string;
};

export type CmsOfficeLocation = {
  id: string;
  city: string;
  region?: string;
  description?: string;
  addressLines?: string[];
  meta?: string;
  phone?: string;
  phoneHref?: string;
  mapQuery?: string;
  ctaLabel?: string;
};

export type CmsPortfolioFilterGroup = {
  label: string;
  filterKey?: string;
  projects: CmsProjectCard[];
};

export type CmsPortfolioExplorerSection = {
  eyebrow?: string;
  title?: string;
  accentTitle?: string;
  description?: string;
  filterGroups: CmsPortfolioFilterGroup[];
};

export type CmsPackageCard = {
  index?: string;
  subtitle?: string;
  title: string;
  description?: string;
  href?: string;
  buttonLabel?: string;
  image?: CmsHeroImage;
};

export type CmsPackageListSection = {
  eyebrow?: string;
  title?: string;
  accentTitle?: string;
  description?: string;
  items: CmsPackageCard[];
};

export type CmsBrandLogoCard = {
  title: string;
  description?: string;
  previewImage?: CmsHeroImage;
  svgHref?: string;
  pngHref?: string;
};

export type CmsBrandKitLogosSection = {
  eyebrow?: string;
  title?: string;
  accentTitle?: string;
  description?: string;
  items: CmsBrandLogoCard[];
};

export type CmsPartnerCard = {
  title: string;
  description?: string;
  logo?: string;
  href?: string;
};

export type CmsCareerJobCard = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  department?: string;
  employment?: string;
  location?: string;
  order?: number;
};

export type CmsTeamMember = {
  id: string;
  memberId?: string;
  name: string;
  role?: string;
  bio?: string;
  image?: string;
  order?: number;
  socialLinks?: CmsSocialLink[];
};

export type CmsTeamMemberDetail = {
  id: string;
  memberId?: string;
  name: string;
  role?: string;
  description: string;
  image: string;
  skills: string[];
  tags: string[];
  socialLinks: CmsSocialLink[];
};

const FALLBACK_TEAM_IMAGE = '/images/home-ai/team/ai-team-1.png';

function parseStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
}

function splitHeroTitle(title: string) {
  const parts = title.trim().split(/\s+/);
  if (parts.length <= 1) {
    return { title, italicTitle: undefined as string | undefined };
  }

  return {
    title: parts.slice(0, -1).join(' '),
    italicTitle: parts[parts.length - 1],
  };
}

function mapHeroImages(hero?: StrapiPageHero | null): CmsHeroImage[] | undefined {
  if (!hero?.images?.length) return undefined;

  const images = hero.images
    .map((item) => ({
      src: getStrapiMediaUrl(item.image ?? undefined) ?? '',
      alt: item.alt ?? undefined,
    }))
    .filter((item) => Boolean(item.src));

  return images.length ? images : undefined;
}

export function mapPageHero(hero?: StrapiPageHero | null): CmsPageHeroProps | null {
  if (!hero?.title) return null;

  const split = splitHeroTitle(hero.title);
  const title = hero.accentTitle ? hero.title : split.title;
  const italicTitle = hero.accentTitle ?? split.italicTitle;

  const backgroundImage = resolveCmsImage(hero.backgroundImage ?? undefined);

  return {
    badgeTitle: hero.eyebrow ?? undefined,
    title,
    italicTitle,
    suffixTitle: hero.suffixTitle ?? undefined,
    description: hero.description?.trim() ?? undefined,
    images: mapHeroImages(hero),
    ...(backgroundImage ? { backgroundImage } : {}),
  };
}

export function mapPageHeroForSharedComponent(hero?: StrapiPageHero | null) {
  if (!hero?.title) return null;

  return {
    badgeTitle: hero.eyebrow ?? undefined,
    title: hero.title,
    description: hero.description ?? undefined,
  };
}

function mapFeatureItems(items?: StrapiPageTechnologies['items']): CmsFeatureItem[] {
  return (items ?? []).map((item) => ({
    title: item.title,
    description: item.description ?? undefined,
    image: resolveCmsImage(item.image ?? undefined),
  }));
}

export function mapPageTechnologies(
  section?: StrapiPageTechnologies | null,
): CmsFeatureItem[] | null {
  if (!section?.items?.length) return null;
  return mapFeatureItems(section.items);
}

function hasSectionHeader(section: {
  eyebrow?: string | null;
  title?: string | null;
  accentTitle?: string | null;
  description?: string | null;
  image?: unknown;
  backgroundImage?: unknown;
}) {
  return Boolean(
    section.eyebrow ||
      section.title ||
      section.accentTitle ||
      section.description ||
      section.image ||
      section.backgroundImage,
  );
}

export function mapPageTechnologiesSection(
  section?: StrapiPageTechnologies | null,
): CmsTechnologiesSection | null {
  if (!section) return null;

  const items = section.items?.length ? mapFeatureItems(section.items) : [];
  if (!items.length && !hasSectionHeader(section)) return null;

  return {
    eyebrow: section.eyebrow ?? undefined,
    title: section.title ?? undefined,
    accentTitle: section.accentTitle ?? undefined,
    description: section.description ?? undefined,
    image: resolveCmsImage(section.image ?? undefined),
    backgroundImage: resolveCmsImage(section.backgroundImage ?? undefined),
    items,
  };
}

export function mapHeroAboutSection(
  section?: StrapiHeroAbout | null,
): CmsHeroAboutSection | null {
  if (!section?.body && !section?.image) return null;

  return {
    body: section.body ?? undefined,
    image: resolveCmsImage(section.image ?? undefined),
  };
}

type ProcessLikeSection = StrapiPageProcess & {
  items?: Array<{ title: string; description?: string | null; order?: number | null }>;
};

function getProcessSteps(section?: ProcessLikeSection | null) {
  if (section?.steps?.length) return section.steps;
  if (section?.items?.length) {
    return section.items.map((item, index) => ({
      title: item.title,
      description: item.description,
      order: item.order ?? index + 1,
    }));
  }
  return null;
}

export function mapPageProcess(section?: ProcessLikeSection | null): CmsProcessStep[] | null {
  const steps = getProcessSteps(section);
  if (!steps?.length) return null;

  return [...steps]
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((step) => ({
      title: step.title,
      description: step.description ?? undefined,
      order: step.order ?? undefined,
    }));
}

export function mapPageProcessSection(
  section?: ProcessLikeSection | null,
): CmsProcessSection | null {
  if (!section) return null;

  const steps = mapPageProcess(section) ?? [];
  if (!steps.length && !hasSectionHeader(section)) return null;

  return {
    eyebrow: section.eyebrow ?? undefined,
    title: section.title ?? undefined,
    accentTitle: section.accentTitle ?? undefined,
    description: section.description ?? undefined,
    image: resolveCmsImage(section.image ?? undefined),
    backgroundImage: resolveCmsImage(section.backgroundImage ?? undefined),
    steps,
  };
}

export function mapRfqAccordion(
  section?: StrapiPageRfqAccordion | null,
): CmsRfqAccordionSection | null {
  if (!section?.groups?.length) return null;

  return {
    eyebrow: section.eyebrow ?? undefined,
    title: section.title ?? undefined,
    accentTitle: section.accentTitle ?? undefined,
    description: section.description ?? undefined,
    backgroundImage: resolveCmsImage(section.backgroundImage ?? undefined),
    groups: section.groups.map((group) => ({
      title: group.title,
      subtitle: group.subtitle ?? undefined,
      items: Array.isArray(group.items) ? group.items.map(String) : [],
    })),
  };
}

export function mapPackageOffer(
  section?: StrapiPackageOffer | null,
): CmsPackageOfferSection | null {
  if (!section?.title) return null;

  return {
    eyebrow: section.eyebrow ?? undefined,
    title: section.title,
    description: section.description ?? undefined,
    price: section.price ?? undefined,
    billingNote: section.billingNote ?? undefined,
    image: resolveCmsImage(section.image ?? undefined),
    backgroundImage: resolveCmsImage(section.backgroundImage ?? undefined),
    features: mapFeatureItems(section.features),
    cta: section.cta
      ? {
          label: section.cta.label ?? undefined,
          href: section.cta.href ?? undefined,
        }
      : undefined,
  };
}

export function mapPageEvents(
  section?: StrapiPageEvents | null,
): CmsPageEventsSection | null {
  if (!section?.events?.length) return null;

  return {
    eyebrow: section.eyebrow ?? undefined,
    title: section.title ?? undefined,
    accentTitle: section.accentTitle ?? undefined,
    description: section.description ?? undefined,
    events: section.events.map((event) => ({
      date: event.date ?? undefined,
      title: event.title,
      location: event.location ?? undefined,
      href: event.href ?? undefined,
    })),
  };
}

export function mapImageGallery(
  section?: StrapiImageGallery | null,
): CmsImageGallerySection | null {
  if (!section?.images?.length) return null;

  const images = section.images
    .map((item) => {
      const src = getStrapiMediaUrl(item.image ?? undefined);
      if (!src) return null;
      return {
        src,
        alt: item.alt ?? undefined,
        href: item.href ?? undefined,
      };
    })
    .filter((item) => item !== null) as CmsGalleryImage[];

  if (!images.length) return null;

  return {
    eyebrow: section.eyebrow ?? undefined,
    title: section.title ?? undefined,
    accentTitle: section.accentTitle ?? undefined,
    description: section.description ?? undefined,
    images,
  };
}

function mapProjectItem(project: StrapiPageProjectItem): CmsProjectCard {
  const slug = typeof project.slug === 'string' ? project.slug : undefined;
  return {
    title: project.title ?? '',
    description: project.description ?? undefined,
    thumbnail:
      project.thumbnailPath ??
      getStrapiMediaUrl(project.thumbnail ?? undefined) ??
      undefined,
    alt: project.alt ?? project.title ?? undefined,
    href: project.href ?? (slug ? `/case-studies/${slug}` : undefined),
  };
}

export function mapPageProjects(section?: StrapiPageProjects | null): CmsProjectCard[] | null {
  const projects = section?.projects;
  if (!projects?.length) return null;

  return projects.map((project) => mapProjectItem(project));
}

export function mapPageClientLogos(
  section?: StrapiPageClientLogos | null,
): CmsClientLogo[] | null {
  const logos = section?.clientLogos;
  if (!logos?.length) return null;

  const mapped = logos
    .map((item, index) => {
      const logo =
        item.logoPath ?? getStrapiMediaUrl(item.logo ?? undefined) ?? undefined;
      if (!logo) return null;
      const darkLogo =
        item.darkLogoPath ?? getStrapiMediaUrl(item.darkLogo ?? undefined) ?? undefined;
      const entry: CmsClientLogo = {
        id: item.documentId ?? item.clientKey ?? String(index + 1),
        logo,
        alt: item.alt ?? item.name ?? 'Client logo',
      };
      if (darkLogo) entry.darkLogo = darkLogo;
      return entry;
    })
    .filter((item): item is CmsClientLogo => item !== null);

  return mapped.length ? mapped : null;
}

export function mapPageOfficeLocations(
  section?: StrapiPageOfficeLocations | null,
): CmsOfficeLocation[] | null {
  const locations = section?.locations;
  if (!locations?.length) return null;

  return locations.map((loc, index) => {
    const addressLines = Array.isArray(loc.addressLines)
      ? loc.addressLines.filter((line): line is string => typeof line === 'string')
      : [];
    const mapQuery =
      loc.mapQuery ??
      [addressLines.join(', '), loc.city, loc.region].filter(Boolean).join(', ');

    return {
      id: loc.documentId ?? loc.locationId ?? String(index + 1),
      city: loc.city ?? '',
      region: loc.region ?? undefined,
      description: loc.description ?? undefined,
      addressLines: addressLines.length ? addressLines : undefined,
      meta: loc.meta ?? undefined,
      phone: loc.phone ?? undefined,
      phoneHref: loc.phoneHref ?? undefined,
      mapQuery,
      ctaLabel: loc.locationId ? `VIEW ${loc.city?.toUpperCase() ?? 'LOCATION'}` : undefined,
    };
  });
}

export function mapPortfolioExplorer(
  section?: StrapiPagePortfolioExplorer | null,
): CmsPortfolioExplorerSection | null {
  if (!section?.filterGroups?.length) return null;

  const filterGroups = section.filterGroups
    .map((group) => {
      const projects = group.projects?.length
        ? group.projects.map((project) => mapProjectItem(project))
        : [];
      if (!projects.length) return null;
      const entry: CmsPortfolioFilterGroup = {
        label: group.label,
        projects,
      };
      if (group.filterKey) entry.filterKey = group.filterKey;
      return entry;
    })
    .filter((group): group is CmsPortfolioFilterGroup => group !== null);

  if (!filterGroups.length) return null;

  return {
    eyebrow: section.eyebrow ?? undefined,
    title: section.title ?? undefined,
    accentTitle: section.accentTitle ?? undefined,
    description: section.description ?? undefined,
    filterGroups,
  };
}

export function mapPagePackageList(
  section?: StrapiPagePackageList | null,
): CmsPackageListSection | null {
  if (!section?.items?.length) return null;

  const items = section.items.map((item) => ({
    index: item.index ?? undefined,
    subtitle: item.subtitle ?? undefined,
    title: item.title,
    description: item.description ?? undefined,
    href: item.href ?? undefined,
    buttonLabel: item.buttonLabel ?? undefined,
    image: item.image
      ? {
          src: getStrapiMediaUrl(item.image.image ?? undefined) ?? '',
          alt: item.image.alt ?? undefined,
        }
      : undefined,
  }));

  return {
    eyebrow: section.eyebrow ?? undefined,
    title: section.title ?? undefined,
    accentTitle: section.accentTitle ?? undefined,
    description: section.description ?? undefined,
    items,
  };
}

export function mapPagePartners(section?: StrapiPagePartners | null): CmsPartnerCard[] | null {
  const partners = section?.partners;
  if (!partners?.length) return null;

  return partners.map((partner) => ({
    title: partner.name ?? '',
    description: partner.description ?? undefined,
    logo: getStrapiMediaUrl(partner.logo ?? undefined) ?? undefined,
    href: partner.href ?? undefined,
  }));
}

export function mapPageRfq(section?: StrapiPageRfq | null): CmsPageRfqSection | null {
  if (!section?.body) return null;
  return { body: section.body };
}

export function mapFaqList(section?: StrapiFaqList | null): CmsFaqListSection | null {
  if (!section?.items?.length) return null;

  return {
    eyebrow: section.eyebrow ?? undefined,
    title: section.title ?? undefined,
    accentTitle: section.accentTitle ?? undefined,
    description: section.description ?? undefined,
    items: section.items.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
  };
}

export function mapBrandKitLogos(
  section?: StrapiBrandKitLogos | null,
): CmsBrandKitLogosSection | null {
  if (!section?.items?.length) return null;

  const items = section.items.map((item) => {
    const previewSrc = getStrapiMediaUrl(item.previewImage?.image ?? undefined);
    return {
      title: item.title,
      description: item.description ?? undefined,
      previewImage: previewSrc
        ? { src: previewSrc, alt: item.previewImage?.alt ?? item.title }
        : undefined,
      svgHref: item.svgHref ?? undefined,
      pngHref: item.pngHref ?? undefined,
    };
  });

  return {
    eyebrow: section.eyebrow ?? undefined,
    title: section.title ?? undefined,
    accentTitle: section.accentTitle ?? undefined,
    description: section.description ?? undefined,
    items,
  };
}

export function mapPageImages(section?: StrapiPageImages | null) {
  if (!section?.images?.length) return null;

  return section.images
    .map((item) => ({
      src: getStrapiMediaUrl(item.image ?? undefined),
      alt: item.alt ?? undefined,
    }))
    .filter((item) => Boolean(item.src)) as { src: string; alt?: string }[];
}

export function mapPageSectionImage(
  section?: StrapiPageSectionImage | null,
): CmsHeroImage | null {
  if (!section?.image) return null;
  return resolveCmsImage(section.image) ?? null;
}

function mapImageWithAltItem(
  item?: { image?: Parameters<typeof getStrapiMediaUrl>[0]; alt?: string | null },
): CmsGalleryImage | null {
  const src = getStrapiMediaUrl(item?.image ?? undefined);
  if (!src) return null;
  const mapped: CmsGalleryImage = { src };
  if (item?.alt) mapped.alt = item.alt;
  return mapped;
}

export function mapCareerCommunitySection(
  section?: StrapiPageCareerCommunity | null,
): CmsCareerCommunitySection | null {
  if (!section) return null;

  const avatars =
    section.avatars
      ?.map((item) => mapImageWithAltItem(item))
      .filter((item): item is CmsGalleryImage => item !== null) ?? [];

  const teamImage = mapImageWithAltItem(section.teamImage ?? undefined);

  if (!avatars.length && !teamImage) return null;

  return { avatars, teamImage };
}

export function mapPageFaq(section?: StrapiPageFaq | null): CmsFaqItem[] | null {
  if (!section?.items?.length) return null;

  return section.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));
}

function mapTeamMember(member: StrapiTeamMember, index: number): CmsTeamMember | null {
  if (!member.name || member.isActive === false) return null;

  return {
    id: member.documentId ?? member.memberId ?? String(index + 1),
    memberId: member.memberId ?? undefined,
    name: member.name,
    role: member.role ?? undefined,
    bio: member.bio ?? member.description ?? undefined,
    image:
      member.imagePath ?? getStrapiMediaUrl(member.image ?? undefined) ?? undefined,
    order: member.order ?? undefined,
    socialLinks: mapSocialLinks(member.socialLinks),
  };
}

export function pickFeaturedTeamMember(members: CmsTeamMember[]): {
  featuredMember: CmsTeamMember | null;
  galleryMembers: CmsTeamMember[];
} {
  if (!members.length) {
    return { featuredMember: null, galleryMembers: [] };
  }

  const featuredIndex = members.findIndex(
    (member) =>
      member.memberId === 'yahya-sadat' ||
      member.role?.toLowerCase() === 'founder',
  );

  if (featuredIndex >= 0) {
    const featuredMember = members[featuredIndex] ?? null;
    return {
      featuredMember,
      galleryMembers: members.filter((_, index) => index !== featuredIndex),
    };
  }

  const sorted = [...members].sort(
    (left, right) => (left.order ?? 99) - (right.order ?? 99),
  );

  return {
    featuredMember: sorted[0] ?? null,
    galleryMembers: sorted.slice(1),
  };
}

export function mapStrapiTeamMember(
  member?: StrapiTeamMember | null,
  index = 0,
): CmsTeamMember | null {
  if (!member) return null;
  return mapTeamMember(member, index);
}

export function mapTeamMemberDetail(
  member?: StrapiTeamMember | null,
): CmsTeamMemberDetail | null {
  if (!member?.name || member.isActive === false) return null;

  return {
    id: member.documentId ?? member.memberId ?? String(member.id ?? ''),
    memberId: member.memberId ?? undefined,
    name: member.name,
    role: member.role ?? undefined,
    description: member.description ?? member.bio ?? '',
    image:
      member.imagePath ?? getStrapiMediaUrl(member.image ?? undefined) ?? FALLBACK_TEAM_IMAGE,
    skills: parseStringArray(member.skills),
    tags: parseStringArray(member.portfolioTags),
    socialLinks: mapSocialLinks(member.socialLinks),
  };
}

export function mapPageTeamMembers(
  section?: StrapiPageTeamMembers | null,
): CmsTeamMember[] | null {
  const members = (section?.members ?? [])
    .map(mapTeamMember)
    .filter((member): member is CmsTeamMember => member !== null);

  return members.length ? members : null;
}

export type CmsTeamSectionProps = {
  /** Top card — only from CMS featuredMember, never inferred from gallery order. */
  featuredMember: CmsTeamMember | null;
  /** Bottom gallery — all CMS members entries, no deduplication. */
  galleryMembers: CmsTeamMember[];
};

function sortTeamMembersByOrder(members: StrapiTeamMember[]): StrapiTeamMember[] {
  return [...members].sort((left, right) => (left.order ?? 99) - (right.order ?? 99));
}

export function mapPageTeamSection(
  section?: StrapiPageTeamMembers | null,
): CmsTeamSectionProps | null {
  let featuredMember = mapStrapiTeamMember(section?.featuredMember, 0);
  let galleryMembers = sortTeamMembersByOrder(section?.members ?? [])
    .map(mapTeamMember)
    .filter((member): member is CmsTeamMember => member !== null);

  // About page often links only `members`; infer featured card when unset.
  if (!featuredMember && galleryMembers.length) {
    const inferred = pickFeaturedTeamMember(galleryMembers);
    featuredMember = inferred.featuredMember;
    galleryMembers = inferred.galleryMembers;
  } else if (featuredMember) {
    galleryMembers = galleryMembers.filter((member) => member.id !== featuredMember!.id);
  }

  if (!featuredMember && !galleryMembers.length) return null;

  return {
    featuredMember: featuredMember ?? null,
    galleryMembers,
  };
}

export function mapStrapiSeo(seo?: StrapiPageSeo | null, fallback?: Metadata): Metadata {
  if (!seo?.title && !seo?.description) {
    return fallback ?? {};
  }

  const ogImage = getStrapiMediaUrl(seo.ogImage ?? undefined);

  return {
    ...(fallback ?? {}),
    title: seo.title ?? fallback?.title,
    description: seo.description ?? (typeof fallback?.description === 'string' ? fallback.description : undefined),
    openGraph: {
      ...(typeof fallback?.openGraph === 'object' ? fallback.openGraph : {}),
      title: seo.title ?? (typeof fallback?.openGraph === 'object' ? fallback.openGraph?.title : undefined),
      description:
        seo.description ??
        (typeof fallback?.openGraph === 'object' ? fallback.openGraph?.description : undefined),
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
  };
}

export function mergeCmsHero<T extends CmsPageHeroProps>(
  defaults: T,
  cms?: CmsPageHeroProps | null,
): T {
  if (!cms) return defaults;

  return {
    ...defaults,
    ...(cms.badgeTitle ? { badgeTitle: cms.badgeTitle } : {}),
    ...(cms.title ? { title: cms.title } : {}),
    ...(cms.italicTitle ? { italicTitle: cms.italicTitle } : {}),
    ...(cms.suffixTitle ? { suffixTitle: cms.suffixTitle } : {}),
    ...(cms.description ? { description: cms.description } : {}),
    ...(cms.images?.length ? { images: cms.images } : {}),
    ...(cms.backgroundImage ? { backgroundImage: cms.backgroundImage } : {}),
  };
}
