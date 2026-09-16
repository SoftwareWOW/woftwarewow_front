import type { Dictionary } from '@/i18n/types';
import type {
  StrapiDetailPanel,
  StrapiFooterColumn,
  StrapiNavMenuItem,
} from '@/lib/strapi/types/pages';
import type {
  StrapiSuperagencyFooter,
  StrapiSuperagencyHeader,
} from '@/lib/strapi/types';

function mapDetailPanels(
  panels: StrapiDetailPanel[] | undefined,
  fallback: Dictionary['navigation']['detailPanels'],
): Dictionary['navigation']['detailPanels'] {
  if (!panels?.length) return fallback;

  const mapped = { ...fallback };

  for (const panel of panels) {
    if (!panel.key) continue;

    mapped[panel.key as keyof typeof mapped] = {
      title: panel.title ?? fallback.default.title,
      description: panel.description ?? fallback.default.description,
      includes: Array.isArray(panel.includes) ? panel.includes : fallback.default.includes,
      ctaLabel: panel.ctaLabel ?? fallback.default.ctaLabel,
      image: 'default',
    };
  }

  return mapped;
}

function mapNavItems(
  navItems: StrapiNavMenuItem[],
  fallback: Dictionary['navigation']['items'],
): Dictionary['navigation']['items'] {
  return navItems.map((item, index) => {
    const fallbackItem = fallback[index] ?? fallback[0];

    return {
      id: item.itemKey ?? fallbackItem.id,
      label: item.label ?? fallbackItem.label,
      desktop: {
        paddingX: item.desktopPaddingX ?? fallbackItem.desktop.paddingX,
        paddingY: item.desktopPaddingY ?? fallbackItem.desktop.paddingY,
        defaultSelection: item.defaultSelection ?? fallbackItem.desktop.defaultSelection,
        columns:
          item.desktopColumns?.map((column, columnIndex) => {
            const fallbackColumn = fallbackItem.desktop.columns[columnIndex] ?? fallbackItem.desktop.columns[0];

            return {
              id: fallbackColumn.id,
              title: column.title ?? fallbackColumn.title,
              items:
                column.items?.map((navItem, navIndex) => {
                  const fallbackNavItem =
                    fallbackColumn.items[navIndex] ?? fallbackColumn.items[0];

                  return {
                    id: navItem.itemKey ?? fallbackNavItem.id,
                    label: navItem.label ?? fallbackNavItem.label,
                    type: navItem.type ?? fallbackNavItem.type,
                    href: navItem.href ?? fallbackNavItem.href,
                    detailPanel: navItem.detailPanelKey ?? fallbackNavItem.detailPanel,
                    ...('description' in fallbackNavItem || navItem.description
                      ? {
                          description:
                            navItem.description ??
                            ('description' in fallbackNavItem ?
                              fallbackNavItem.description
                            : undefined),
                        }
                      : {}),
                  };
                }) ?? fallbackColumn.items,
            };
          }) ?? fallbackItem.desktop.columns,
      },
      mobile: fallbackItem.mobile,
    };
  }) as Dictionary['navigation']['items'];
}

export function mapStrapiHeaderNavigation(
  header: StrapiSuperagencyHeader | null,
  fallback: Dictionary['navigation'],
): Dictionary['navigation'] {
  if (!header?.navItems?.length) return fallback;

  const detailPanels = mapDetailPanels(
    header.detailPanels as StrapiDetailPanel[] | undefined,
    fallback.detailPanels,
  );

  const items = mapNavItems(
    header.navItems as StrapiNavMenuItem[],
    fallback.items,
  );

  return {
    detailPanels,
    items: items as Dictionary['navigation']['items'],
  };
}

export function mapStrapiNavbarChrome(
  header: StrapiSuperagencyHeader | null,
  fallback: Dictionary['navbar'],
): Dictionary['navbar'] {
  if (!header) return fallback;

  return {
    ...fallback,
    logoAlt: header.logoAlt ?? fallback.logoAlt,
    logoAltDark: header.logoAltDark ?? fallback.logoAltDark,
    openMenu: header.openMenu ?? fallback.openMenu,
    closeMenu: header.closeMenu ?? fallback.closeMenu,
    menu: header.menu ?? fallback.menu,
    scheduleMeeting: header.scheduleMeeting ?? fallback.scheduleMeeting,
  };
}

export function mapStrapiFooterContent(
  footer: StrapiSuperagencyFooter | null,
  fallback: Dictionary['footer'],
): Dictionary['footer'] {
  if (!footer) return fallback;

  const resourceColumns = footer.resourceColumns as StrapiFooterColumn[] | undefined;

  return {
    ...fallback,
    description: footer.description ?? fallback.description,
    companyHeading: footer.companyHeading ?? fallback.companyHeading,
    copyright: footer.copyright ?? fallback.copyright,
    address: footer.address
      ? {
          line1: footer.address.line1 ?? fallback.address.line1,
          line2: footer.address.line2 ?? fallback.address.line2,
        }
      : fallback.address,
    sections:
      resourceColumns?.length ?
        resourceColumns.map((column, index) => ({
          id: column.title?.toLowerCase().replace(/\s+/g, '-') ?? `column-${index}`,
          title: column.title ?? '',
          links:
            column.links?.map((link, linkIndex) => ({
              id: link.itemKey ?? `link-${linkIndex}`,
              label: link.label ?? '',
              href: link.href ?? '/',
            })) ?? [],
        }))
      : fallback.sections,
    ...(footer.copyright ? { copyright: footer.copyright } : {}),
  } as Dictionary['footer'] & { copyright?: string };
}
