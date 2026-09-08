import type { DivisionSiteConfig } from '@/components/wow/divisions/division-site-config';
import type { DivisionId } from '@/components/wow/nav/nav-brand-assets';
import type { StrapiDivisionFooter, StrapiDivisionHeader } from '@/lib/strapi/types';

export function mapStrapiToDivisionConfig(
  divisionId: DivisionId,
  baseConfig: DivisionSiteConfig,
  header: StrapiDivisionHeader | null,
  footer: StrapiDivisionFooter | null,
): DivisionSiteConfig {
  if (!header && !footer) return baseConfig;

  return {
    ...baseConfig,
    logoAlt: header?.logoAlt ?? baseConfig.logoAlt,
    tagline: header?.tagline ?? baseConfig.tagline,
    phone: header?.phone ?? baseConfig.phone,
    phoneHref: header?.phoneHref ?? baseConfig.phoneHref,
    navItems: header?.navItems?.length
      ? header.navItems.map((item) => ({
          id: item.id,
          label: item.label,
          href: item.href,
        }))
      : baseConfig.navItems,
    cta: header?.cta?.label
      ? { label: header.cta.label, href: header.cta.href ?? baseConfig.cta.href }
      : baseConfig.cta,
    footerSections: footer?.footerSections?.length
      ? footer.footerSections.map((section) => ({
          id: section.title.toLowerCase().replace(/\s+/g, '-'),
          title: section.title,
          links: section.links.map((link) => ({
            id: link.id ?? link.label.toLowerCase().replace(/\s+/g, '-'),
            label: link.label,
            href: link.href,
          })),
        }))
      : baseConfig.footerSections,
    copyright: footer?.copyright ?? baseConfig.copyright,
    addressLines: footer?.address?.line1
      ? [footer.address.line1, footer.address.line2 ?? ''] as [string, string]
      : baseConfig.addressLines,
  };
}

export function mapStrapiServices(
  services: { slug: string; title: string; description?: string; features?: string[] }[],
) {
  if (!services.length) return null;
  return services.map((service) => ({
    slug: service.slug,
    title: service.title,
    description: service.description ?? '',
    feature: Array.isArray(service.features) ? service.features : [],
  }));
}

export function mapStrapiIndustries(
  industries: { slug: string; title: string; icon?: string }[],
) {
  if (!industries.length) return null;
  return industries.map((industry) => ({
    id: industry.slug,
    label: industry.title,
    iconId: industry.icon,
  }));
}
