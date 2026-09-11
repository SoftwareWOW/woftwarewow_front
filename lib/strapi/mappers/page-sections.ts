import { getStrapiMediaUrl } from '@/lib/strapi/client';
import type { Metadata } from 'next';
import type {
  StrapiPageFaq,
  StrapiPageHero,
  StrapiPageImages,
  StrapiPageProcess,
  StrapiPageProjects,
  StrapiPageSeo,
  StrapiPageTechnologies,
  StrapiPageTeamMembers,
  StrapiTeamMember,
} from '@/lib/strapi/types/pages';

export type CmsPageHeroProps = {
  badgeTitle?: string;
  title?: string;
  italicTitle?: string;
  description?: string;
  imageUrl?: string;
};

export type CmsFeatureItem = {
  title: string;
  description?: string;
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

export function mapPageHero(hero?: StrapiPageHero | null): CmsPageHeroProps | null {
  if (!hero?.title) return null;

  const { title, italicTitle } = splitHeroTitle(hero.title);

  return {
    badgeTitle: hero.eyebrow ?? undefined,
    title,
    italicTitle,
    description: hero.description ?? undefined,
    imageUrl: getStrapiMediaUrl(hero.image?.image ?? undefined),
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

export function mapPageTechnologies(
  section?: StrapiPageTechnologies | null,
): CmsFeatureItem[] | null {
  if (!section?.items?.length) return null;

  return section.items.map((item) => ({
    title: item.title,
    description: item.description ?? undefined,
  }));
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
  };
}
