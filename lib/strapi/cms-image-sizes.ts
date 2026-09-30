/** Shared `sizes` presets for Strapi CMS layouts (use with `CmsResponsiveImage`). */
export const CMS_IMAGE_SIZES = {
  viewportFull: '(max-width: 768px) 100vw, 100vw',
  contentFull: '(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1320px',
  halfGrid: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px',
  column420: '(max-width: 768px) 100vw, 420px',
  heroDual: '(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 480px',
  wideSection: '(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1170px',
  sideColumn: '(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 400px',
  /** Floating decorative hero thumbnails (SoftwareTech, Technology, etc.). */
  decorativeThumb: '(max-width: 768px) 30vw, 188px',
  heroBanner: '(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px',
  galleryPanel: '(max-width: 768px) 100vw, 33vw',
} as const;
