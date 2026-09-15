import { resolveCmsImage } from '@/lib/strapi/cms-image';
import { getStrapiMediaUrl } from '@/lib/strapi/client';
import type { Metadata } from 'next';
import type {
  StrapiHeroAbout,
  StrapiImageGallery,
  StrapiPageEvents,
  StrapiPageFaq,
  StrapiPageHero,
  StrapiPageImages,
  StrapiPageProcess,
  StrapiPageProjects,
  StrapiPageRfqAccordion,
  StrapiPageSeo,
  StrapiPageTechnologies,
  StrapiPageTeamMembers,
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

export type CmsTeamMember = {
  id: string;
  name: string;
  role?: string;
  bio?: string;
  image?: string;
};

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
    description: hero.description ?? undefined,
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

export function mapPageProcess(section?: StrapiPageProcess | null): CmsProcessStep[] | null {
  if (!section?.steps?.length) return null;

  return [...section.steps]
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((step) => ({
      title: step.title,
      description: step.description ?? undefined,
      order: step.order ?? undefined,
    }));
}

export function mapPageProcessSection(
  section?: StrapiPageProcess | null,
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

export function mapPageProjects(section?: StrapiPageProjects | null): CmsProjectCard[] | null {
  const projects = section?.projects;
  if (!projects?.length) return null;

  return projects.map((project) => ({
    title: project.title ?? '',
    description: project.description ?? undefined,
    thumbnail:
      project.thumbnailPath ??
      getStrapiMediaUrl(project.thumbnail ?? undefined) ??
      undefined,
    alt: project.alt ?? project.title ?? undefined,
    href: project.href ?? undefined,
  }));
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
    name: member.name,
    role: member.role ?? undefined,
    bio: member.bio ?? member.description ?? undefined,
    image:
      member.imagePath ?? getStrapiMediaUrl(member.image ?? undefined) ?? undefined,
  };
}

export function mapPageTeamMembers(
  section?: StrapiPageTeamMembers | null,
): CmsTeamMember[] | null {
  if (!section?.members?.length) return null;

  const members = section.members
    .map(mapTeamMember)
    .filter((member): member is CmsTeamMember => member !== null);

  return members.length ? members : null;
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
    ...(cms.description ? { description: cms.description } : {}),
    ...(cms.images?.length ? { images: cms.images } : {}),
    ...(cms.backgroundImage ? { backgroundImage: cms.backgroundImage } : {}),
  };
}
